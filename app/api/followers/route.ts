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
    const type = searchParams.get("type") || "followers"; // "followers" or "followings"

    const skip = (page - 1) * limit;

    let follows;
    let total;

    if (type === "followers") {
      // Get users who follow the current user
      follows = await prisma.follow.findMany({
        where: {
          followingId: session.user.id
        },
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc"
        },
        include: {
          follower: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true
            }
          }
        }
      });

      total = await prisma.follow.count({
        where: {
          followingId: session.user.id
        }
      });
    } else {
      // Get users the current user follows
      follows = await prisma.follow.findMany({
        where: {
          followerId: session.user.id
        },
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc"
        },
        include: {
          following: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true
            }
          }
        }
      });

      total = await prisma.follow.count({
        where: {
          followerId: session.user.id
        }
      });
    }

    return NextResponse.json({
      follows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Followers API error:", error);
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

    const { followingId } = await request.json();

    if (!followingId) {
      return NextResponse.json(
        { error: "FollowingId is required" },
        { status: 400 }
      );
    }

    if (followingId === session.user.id) {
      return NextResponse.json(
        { error: "Cannot follow yourself" },
        { status: 400 }
      );
    }

    const follow = await prisma.follow.create({
      data: {
        followerId: session.user.id,
        followingId
      },
      include: {
        following: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(follow, { status: 201 });
  } catch (error) {
    console.error("Create follow error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 