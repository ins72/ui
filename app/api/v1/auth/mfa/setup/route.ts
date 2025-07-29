import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/database';
import { encrypt, decrypt } from '@/lib/encryption';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { userId, secret, backupCodes } = await request.json();

    // Verify user owns this account
    if (session.user.id !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    // Connect to database
    const db = await connectDB();

    // Encrypt sensitive data
    const encryptedSecret = await encrypt(secret);
    const encryptedBackupCodes = await encrypt(JSON.stringify(backupCodes));

    // Store MFA data
    await db.collection('mfa_data').updateOne(
      { userId },
      {
        $set: {
          userId,
          secret: encryptedSecret,
          backupCodes: encryptedBackupCodes,
          enabled: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );

    // Log MFA setup
    await db.collection('audit_logs').insertOne({
      userId,
      action: 'mfa_setup',
      timestamp: new Date(),
      ip: request.headers.get('x-forwarded-for') || request.ip,
      userAgent: request.headers.get('user-agent')
    });

    return NextResponse.json(
      { success: true, message: 'MFA setup completed' },
      { status: 201 }
    );

  } catch (error) {
    console.error('MFA setup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 