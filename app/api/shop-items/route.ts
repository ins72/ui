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
    const category = searchParams.get("category") || "";

    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } }
        ]
      }),
      ...(category && { category })
    };

    const shopItems = await prisma.shopItem.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    // Get total count
    const total = await prisma.shopItem.count({ where });

    return NextResponse.json({
      shopItems,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Shop items API error:", error);
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

    const { title, description, image, price, category, tags } = await request.json();

    if (!title || !price) {
      return NextResponse.json(
        { error: "Title and price are required" },
        { status: 400 }
      );
    }

    const shopItem = await prisma.shopItem.create({
      data: {
        title,
        description,
        image,
        price,
        category,
        tags: tags ? JSON.stringify(tags) : null,
        isActive: true
      }
    });

    return NextResponse.json(shopItem, { status: 201 });
  } catch (error) {
    console.error("Create shop item error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 