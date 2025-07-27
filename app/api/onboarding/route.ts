import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { workspaceName, workspaceDescription, profileImage } = await request.json();

    if (!workspaceName) {
      return NextResponse.json(
        { error: "Workspace name is required" },
        { status: 400 }
      );
    }

    // Create workspace
    const workspace = await prisma.workspace.create({
      data: {
        name: workspaceName,
        description: workspaceDescription || null,
      },
    });

    // Update user with workspace and profile image
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        workspaceId: workspace.id,
        image: profileImage || null,
      },
    });

    return NextResponse.json(
      { 
        message: "Onboarding completed successfully", 
        user: updatedUser,
        workspace 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 