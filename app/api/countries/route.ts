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

    // Get countries with pagination
    const countries = await prisma.country.findMany({
      skip,
      take: limit,
      orderBy: {
        percentage: "desc"
      }
    });

    // Get total count
    const total = await prisma.country.count();

    return NextResponse.json({
      countries,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Countries API error:", error);
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

    const { name, flag, percentage } = await request.json();

    if (!name || !flag || percentage === undefined) {
      return NextResponse.json(
        { error: "Name, flag, and percentage are required" },
        { status: 400 }
      );
    }

    const country = await prisma.country.create({
      data: {
        name,
        flag,
        percentage,
        userId: userId
      }
    });

    return NextResponse.json(country, { status: 201 });
  } catch (error) {
    console.error("Create country error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 