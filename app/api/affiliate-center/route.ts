import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get affiliate data for the user
    const affiliateData = await prisma.affiliateData.findUnique({
      where: {
        userId: userId
      }
    });

    // If no affiliate data exists, create default one
    if (!affiliateData) {
      const defaultAffiliateData = await prisma.affiliateData.create({
        data: {
          affiliateCode: `AFF${userId.slice(-6).toUpperCase()}`,
          commissionRate: 0.1,
          totalEarnings: 0,
          totalReferrals: 0,
          activeReferrals: 0,
          userId: userId
        }
      });
      return NextResponse.json({ affiliateData: defaultAffiliateData });
    }

    return NextResponse.json({ affiliateData });
  } catch (error) {
    console.error("Affiliate center API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { commissionRate, affiliateCode } = await request.json();

    const affiliateData = await prisma.affiliateData.update({
      where: {
        userId: userId
      },
      data: {
        ...(commissionRate !== undefined && { commissionRate }),
        ...(affiliateCode && { affiliateCode })
      }
    });

    return NextResponse.json({ affiliateData });
  } catch (error) {
    console.error("Update affiliate data error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 