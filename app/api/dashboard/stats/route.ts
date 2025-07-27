import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";

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

    // Get user with all related data
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        products: true,
        customers: true,
        transactions: {
          where: {
            type: "sale",
            status: "completed"
          }
        },
        notifications: {
          where: {
            read: false
          },
          take: 10,
          orderBy: {
            createdAt: "desc"
          }
        }
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Calculate statistics
    const totalEarnings = user.transactions.reduce((sum, t) => sum + t.amount, 0);
    const totalCustomers = user.customers.length;
    const totalProducts = user.products.length;
    const totalSales = user.transactions.length;
    const unreadNotifications = user.notifications.length;

    // Get recent activity
    const recentTransactions = await prisma.transaction.findMany({
      where: {
        userId: session.user.id,
        type: "sale"
      },
      include: {
        product: true,
        customer: true
      },
      take: 5,
      orderBy: {
        createdAt: "desc"
      }
    });

    // Get top products
    const topProducts = await prisma.product.findMany({
      where: {
        userId: session.user.id
      },
      orderBy: {
        sales: "desc"
      },
      take: 5
    });

    return NextResponse.json({
      stats: {
        totalEarnings,
        totalCustomers,
        totalProducts,
        totalSales,
        unreadNotifications
      },
      recentTransactions,
      topProducts
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 