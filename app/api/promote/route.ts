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

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    // Get promote data with pagination
    const promotes = await prisma.promote.findMany({
      where: {
        userId: userId
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc"
      }
    });

    // Get total count
    const total = await prisma.promote.count({
      where: {
        userId: userId
      }
    });

    return NextResponse.json({
      promotes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Promote API error:", error);
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

    const { title, value, icon, percentage, tooltip, newCustomers, productReached } = await request.json();

    if (!title || !value || !icon || percentage === undefined) {
      return NextResponse.json(
        { error: "Title, value, icon, and percentage are required" },
        { status: 400 }
      );
    }

    const promote = await prisma.promote.create({
      data: {
        title,
        value,
        icon,
        percentage,
        tooltip,
        newCustomers: newCustomers || 0,
        productReached: productReached || 0,
        userId: userId
      }
    });

    return NextResponse.json(promote, { status: 201 });
  } catch (error) {
    console.error("Create promote error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 