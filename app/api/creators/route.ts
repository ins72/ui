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

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        OR: [
          { login: { contains: search, mode: "insensitive" } },
          { details: { contains: search, mode: "insensitive" } }
        ]
      })
    };

    const creators = await prisma.creator.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    // Get total count
    const total = await prisma.creator.count({ where });

    return NextResponse.json({
      creators,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Creators API error:", error);
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

    const { login, details, avatar, isOnline, label, tags, time, rating, items } = await request.json();

    if (!login || !avatar) {
      return NextResponse.json(
        { error: "Login and avatar are required" },
        { status: 400 }
      );
    }

    const creator = await prisma.creator.create({
      data: {
        login,
        details,
        avatar,
        isOnline: isOnline || false,
        label,
        tags: tags ? JSON.stringify(tags) : null,
        time,
        rating: rating || 0,
        items: items || 0
      }
    });

    return NextResponse.json(creator, { status: 201 });
  } catch (error) {
    console.error("Create creator error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 