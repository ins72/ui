import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Temporarily disabled authentication for development
    const userId = session?.user?.id || 'test-user-id';

    const chartData = await prisma.chartData.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ data: chartData });
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return NextResponse.json(
      { error: "Failed to fetch chart data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, value, type } = body;

    if (!name || !value || !type) {
      return NextResponse.json(
        { error: "Name, value, and type are required" },
        { status: 400 }
      );
    }

    const chartData = await prisma.chartData.create({
      data: {
        name,
        value: parseFloat(value),
        type,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ data: chartData });
  } catch (error) {
    console.error("Error creating chart data:", error);
    return NextResponse.json(
      { error: "Failed to create chart data" },
      { status: 500 }
    );
  }
} 