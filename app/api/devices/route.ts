import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const userId = searchParams.get("userId");

    const where: any = {};
    if (userId) where.userId = userId;

    const devices = await prisma.deviceData.findMany({
      where,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: devices });
  } catch (error) {
    console.error("Error fetching device data:", error);
    return NextResponse.json(
      { error: "Failed to fetch device data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { device, percentage, gender, userId } = body;

    const deviceData = await prisma.deviceData.create({
      data: {
        device,
        percentage,
        gender,
        userId,
      },
    });

    return NextResponse.json({ data: deviceData });
  } catch (error) {
    console.error("Error creating device data:", error);
    return NextResponse.json(
      { error: "Failed to create device data" },
      { status: 500 }
    );
  }
} 