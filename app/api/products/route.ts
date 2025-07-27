import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || 'test-user-id';

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const category = searchParams.get("category") || "";

    const skip = (page - 1) * limit;

    const where = {
      // For development, return all products regardless of user
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } }
        ]
      }),
      ...(status && { status }),
      ...(category && { category })
    };

    const products = await prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    const total = await prisma.product.count({ where });

    const popularProducts = await prisma.product.findMany({
      // For development, return all products
      orderBy: { sales: "desc" },
      take: 5
    });

    const bestMatch = await prisma.product.findMany({
      // For development, return all products
      orderBy: { views: "desc" },
      take: 5
    });

    return NextResponse.json({
      products,
      popularProducts,
      bestMatch,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || 'test-user-id';

    const { title, description, image, price, category, tags, status } = await request.json();

    if (!title || !price) {
      return NextResponse.json(
        { error: "Title and price are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        image,
        price: parseFloat(price),
        category,
        tags: tags ? JSON.stringify(tags) : null,
        status: status || "draft",
        userId: userId
      }
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || 'test-user-id';

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const { title, description, image, price, category, tags, status } = await request.json();

    const product = await prisma.product.update({
      where: { id: id, userId: userId },
      data: {
        title,
        description,
        image,
        price: price ? parseFloat(price) : undefined,
        category,
        tags: tags ? JSON.stringify(tags) : undefined,
        status
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Update product error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || 'test-user-id';

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    await prisma.product.delete({
      where: { id: id, userId: userId }
    });

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete product error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}