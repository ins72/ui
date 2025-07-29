import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const refund = await prisma.refund.findFirst({
      where: {
        id: id,
        userId: session.user.id
      },
      include: {
        product: true,
        customer: true
      }
    });

    if (!refund) {
      return NextResponse.json(
        { error: "Refund not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(refund);
  } catch (error) {
    console.error("Get refund error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { amount, reason, status } = await request.json();

    const refund = await prisma.refund.findFirst({
      where: {
        id: id,
        userId: session.user.id
      }
    });

    if (!refund) {
      return NextResponse.json(
        { error: "Refund not found" },
        { status: 404 }
      );
    }

    const updatedRefund = await prisma.refund.update({
      where: { id: id },
      data: {
        amount,
        reason,
        status
      }
    });

    return NextResponse.json(updatedRefund);
  } catch (error) {
    console.error("Update refund error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const refund = await prisma.refund.findFirst({
      where: {
        id: id,
        userId: session.user.id
      }
    });

    if (!refund) {
      return NextResponse.json(
        { error: "Refund not found" },
        { status: 404 }
      );
    }

    await prisma.refund.delete({
      where: { id: id }
    });

    return NextResponse.json({ message: "Refund deleted successfully" });
  } catch (error) {
    console.error("Delete refund error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 