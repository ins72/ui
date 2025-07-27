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
          { type: { contains: search, mode: "insensitive" } },
          { message: { contains: search, mode: "insensitive" } }
        ]
      })
    };

    const notifications = await prisma.notification.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    const total = await prisma.notification.count({ where });

    return NextResponse.json({
      notifications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("notification API error:", error);
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
    const notification = await prisma.notification.create({
      data: { ...data, userId }
    });

    return NextResponse.json(notification, { status: 201 });
  } catch (error) {
    console.error("Create notification error:", error);
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
        { error: "notification ID is required" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const notification = await prisma.notification.update({
      where: { id: id, userId },
      data
    });

    return NextResponse.json(notification);
  } catch (error) {
    console.error("Update notification error:", error);
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
        { error: "notification ID is required" },
        { status: 400 }
      );
    }

    await prisma.notification.delete({
      where: { id: id, userId }
    });

    return NextResponse.json({ message: "notification deleted successfully" });
  } catch (error) {
    console.error("Delete notification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}