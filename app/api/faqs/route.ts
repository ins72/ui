import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: { isActive: true },
      orderBy: [{ category: "asc" }, { sortOrder: "asc" }]
    });

    // Group FAQs by category
    const groupedFaqs = faqs.reduce((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    }, {} as Record<string, typeof faqs>);

    // Convert to the expected format
    const formattedFaqs = Object.entries(groupedFaqs).map(([category, items], index) => ({
      id: index + 1,
      name: category,
      items: items.map((item, itemIndex) => ({
        id: itemIndex + 1,
        title: item.title,
        content: item.content
      }))
    }));

    return NextResponse.json({ faqs: formattedFaqs });
  } catch (error) {
    console.error("FAQs API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 