import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const userId = searchParams.get("userId");

    const where: any = {};
    if (userId) where.userId = userId;

    const campaignEarnings = await prisma.campaignEarning.findMany({
      where,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: campaignEarnings });
  } catch (error) {
    console.error("Error fetching campaign earnings:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaign earnings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, image, socials, views, orders, totalEarning, userId } = body;

    const campaignEarning = await prisma.campaignEarning.create({
      data: {
        title,
        image,
        socials: JSON.stringify(socials),
        views: JSON.stringify(views),
        orders: JSON.stringify(orders),
        totalEarning,
        userId,
      },
    });

    return NextResponse.json({ data: campaignEarning });
  } catch (error) {
    console.error("Error creating campaign earning:", error);
    return NextResponse.json(
      { error: "Failed to create campaign earning" },
      { status: 500 }
    );
  }
} 