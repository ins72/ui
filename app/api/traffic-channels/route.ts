import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const userId = searchParams.get("userId");

    const where: any = {};
    if (userId) where.userId = userId;

    const trafficChannels = await prisma.trafficChannel.findMany({
      where,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: trafficChannels });
  } catch (error) {
    console.error("Error fetching traffic channels:", error);
    return NextResponse.json(
      { error: "Failed to fetch traffic channels" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, percentage, value, icon, userId } = body;

    const trafficChannel = await prisma.trafficChannel.create({
      data: {
        name,
        percentage,
        value,
        icon,
        userId,
      },
    });

    return NextResponse.json({ data: trafficChannel });
  } catch (error) {
    console.error("Error creating traffic channel:", error);
    return NextResponse.json(
      { error: "Failed to create traffic channel" },
      { status: 500 }
    );
  }
} 