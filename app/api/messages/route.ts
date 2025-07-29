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

    const skip = (page - 1) * limit;

    const where = {
      // For development, return all records regardless of user
      ...(search && {
        OR: [
          { content: { contains: search, mode: "insensitive" } }
        ]
      })
    };

    const messages = await prisma.message.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    const total = await prisma.message.count({ where });

    return NextResponse.json({
      messages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("message API error:", error);
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

    const data = await request.json();
    const message = await prisma.message.create({
      data: { ...data, userId }
    });

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error("Create message error:", error);
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
        { error: "message ID is required" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const message = await prisma.message.update({
      where: { id: id, userId },
      data
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error("Update message error:", error);
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
        { error: "message ID is required" },
        { status: 400 }
      );
    }

    await prisma.message.delete({
      where: { id: id, userId }
    });

    return NextResponse.json({ message: "message deleted successfully" });
  } catch (error) {
    console.error("Delete message error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}