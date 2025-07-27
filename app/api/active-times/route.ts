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

    const activeTimes = await prisma.activeTime.findMany({
      where: { userId },
      orderBy: { hour: 'asc' }
    });

    // If no data for the specific date, return default 24-hour structure
    if (activeTimes.length === 0) {
      const defaultActiveTimes = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        activity: 0
      }));
      return NextResponse.json({ activeTimes: defaultActiveTimes });
    }

    return NextResponse.json({ activeTimes });
  } catch (error) {
    console.error("Active times API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
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

    const { hour, activity, date } = await request.json();

    if (hour === undefined || activity === undefined) {
      return NextResponse.json(
        { error: "Hour and activity are required" },
        { status: 400 }
      );
    }

    const activeTime = await prisma.activeTime.create({
      data: {
        hour,
        activity,
        date: date ? new Date(date) : new Date(),
        userId: session.user.id
      }
    });

    return NextResponse.json(activeTime, { status: 201 });
  } catch (error) {
    console.error("Create active time error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 