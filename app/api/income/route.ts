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
          { source: { contains: search, mode: "insensitive" } }
        ]
      })
    };

    const income = await prisma.income.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    });

    const total = await prisma.income.count({ where });

    return NextResponse.json({
      income,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("income API error:", error);
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
    const income = await prisma.income.create({
      data: { ...data, userId }
    });

    return NextResponse.json(income, { status: 201 });
  } catch (error) {
    console.error("Create income error:", error);
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
        { error: "income ID is required" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const income = await prisma.income.update({
      where: { id: id, userId },
      data
    });

    return NextResponse.json(income);
  } catch (error) {
    console.error("Update income error:", error);
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
        { error: "income ID is required" },
        { status: 400 }
      );
    }

    await prisma.income.delete({
      where: { id: id, userId }
    });

    return NextResponse.json({ message: "income deleted successfully" });
  } catch (error) {
    console.error("Delete income error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}