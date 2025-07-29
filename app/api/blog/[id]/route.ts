import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

// GET /api/blog/[id] - Get single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            bio: true
          }
        },
        organization: {
          select: {
            id: true,
            name: true
          }
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id },
      data: {
        viewCount: {
          increment: 1
        }
      }
    });

    return NextResponse.json({
      success: true,
      data: post
    });

  } catch (error) {
    console.error("Blog post fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[id] - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = params;
    const body = await request.json();

    // Check if post exists and user has permission
    const existingPost = await prisma.blogPost.findUnique({
      where: { id },
      include: { author: true }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Check permissions (author or admin can edit)
    if (existingPost.authorId !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json(
        { error: "Not authorized to edit this post" },
        { status: 403 }
      );
    }

    // Generate new slug if title changed
    let slug = existingPost.slug;
    if (body.title && body.title !== existingPost.title) {
      slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    // Update post
    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        ...body,
        slug,
        publishedAt: body.status === 'published' && !existingPost.publishedAt 
          ? new Date() 
          : existingPost.publishedAt
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      }
    });

    return NextResponse.json({
      success: true,
      data: updatedPost
    });

  } catch (error) {
    console.error("Blog post update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[id] - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = params;

    // Check if post exists and user has permission
    const existingPost = await prisma.blogPost.findUnique({
      where: { id },
      include: { author: true }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Check permissions (author or admin can delete)
    if (existingPost.authorId !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json(
        { error: "Not authorized to delete this post" },
        { status: 403 }
      );
    }

    // Delete post and related comments
    await prisma.comment.deleteMany({
      where: { postId: id }
    });

    await prisma.blogPost.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: "Blog post deleted successfully"
    });

  } catch (error) {
    console.error("Blog post deletion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 