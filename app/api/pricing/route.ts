import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const pricingPlans = await prisma.pricingPlan.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" }
    });

    return NextResponse.json({ pricing: pricingPlans });
  } catch (error) {
    console.error("Pricing API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 