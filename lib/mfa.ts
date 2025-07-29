import { authenticator } from 'otplib';
import QRCode from 'qrcode';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export interface MFASetup {
  secret: string;
  qrCode: string;
  backupCodes: string[];
}

export interface MFAVerification {
  isValid: boolean;
  backupCodeUsed?: boolean;
}

/**
 * Generate MFA secret and QR code for user setup
 */
export async function generateMFASetup(userId: string, userEmail: string): Promise<MFASetup> {
  try {
    // Generate secret
    const secret = authenticator.generateSecret();
    
    // Generate QR code
    const otpauth = authenticator.keyuri(userEmail, 'MEWAYZ Platform', secret);
    const qrCode = await QRCode.toDataURL(otpauth);
    
    // Generate backup codes
    const backupCodes = generateBackupCodes();
    
    // Store secret and backup codes in database (encrypted)
    await storeMFASecret(userId, secret, backupCodes);
    
    return {
      secret,
      qrCode,
      backupCodes
    };
  } catch (error) {
    console.error('MFA setup generation failed:', error);
    throw new Error('Failed to generate MFA setup');
  }
}

/**
 * Verify TOTP token
 */
export async function verifyTOTP(userId: string, token: string): Promise<MFAVerification> {
  try {
    // Get user's MFA secret from database
    const mfaData = await getMFAData(userId);
    
    if (!mfaData) {
      throw new Error('MFA not configured for user');
    }
    
    // Verify TOTP token
    const isValid = authenticator.verify({
      token,
      secret: mfaData.secret
    });
    
    if (isValid) {
      // Log successful verification
      await logMFALogin(userId, 'totp', true);
      return { isValid: true };
    }
    
    // Check if it's a backup code
    const backupCodeUsed = await verifyBackupCode(userId, token);
    if (backupCodeUsed) {
      await logMFALogin(userId, 'backup_code', true);
      return { isValid: true, backupCodeUsed: true };
    }
    
    // Log failed attempt
    await logMFALogin(userId, 'totp', false);
    return { isValid: false };
    
  } catch (error) {
    console.error('MFA verification failed:', error);
    throw new Error('MFA verification failed');
  }
}

/**
 * Generate backup codes for MFA
 */
function generateBackupCodes(): string[] {
  const codes: string[] = [];
  for (let i = 0; i < 10; i++) {
    // Generate 8-character alphanumeric codes
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    codes.push(code);
  }
  return codes;
}

/**
 * Store MFA secret and backup codes in database
 */
async function storeMFASecret(userId: string, secret: string, backupCodes: string[]): Promise<void> {
  try {
    const response = await fetch('/api/v1/auth/mfa/setup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        secret,
        backupCodes
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to store MFA data');
    }
  } catch (error) {
    console.error('Failed to store MFA secret:', error);
    throw error;
  }
}

/**
 * Get MFA data from database
 */
async function getMFAData(userId: string): Promise<{ secret: string; backupCodes: string[] } | null> {
  try {
    const response = await fetch(`/api/v1/auth/mfa/data/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to get MFA data:', error);
    return null;
  }
}

/**
 * Verify backup code
 */
async function verifyBackupCode(userId: string, code: string): Promise<boolean> {
  try {
    const response = await fetch('/api/v1/auth/mfa/backup-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        code
      })
    });
    
    if (!response.ok) {
      return false;
    }
    
    const result = await response.json();
    return result.valid;
  } catch (error) {
    console.error('Failed to verify backup code:', error);
    return false;
  }
}

/**
 * Log MFA login attempts
 */
async function logMFALogin(userId: string, method: string, success: boolean): Promise<void> {
  try {
    await fetch('/api/v1/auth/mfa/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        method,
        success,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Failed to log MFA attempt:', error);
  }
}

/**
 * Check if user has MFA enabled
 */
export async function isMFAEnabled(userId: string): Promise<boolean> {
  try {
    const mfaData = await getMFAData(userId);
    return !!mfaData;
  } catch (error) {
    return false;
  }
}

/**
 * Disable MFA for user
 */
export async function disableMFA(userId: string): Promise<void> {
  try {
    const response = await fetch('/api/v1/auth/mfa/disable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId })
    });
    
    if (!response.ok) {
      throw new Error('Failed to disable MFA');
    }
  } catch (error) {
    console.error('Failed to disable MFA:', error);
    throw error;
  }
}

/**
 * Regenerate backup codes
 */
export async function regenerateBackupCodes(userId: string): Promise<string[]> {
  try {
    const backupCodes = generateBackupCodes();
    
    const response = await fetch('/api/v1/auth/mfa/regenerate-backup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        backupCodes
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to regenerate backup codes');
    }
    
    return backupCodes;
  } catch (error) {
    console.error('Failed to regenerate backup codes:', error);
    throw error;
  }
} 