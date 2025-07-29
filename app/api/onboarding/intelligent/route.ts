import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";

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

    const { assessment, goalsDetails } = await request.json();

    // Validate required fields
    if (!assessment.businessType || !assessment.experienceLevel || !assessment.workspaceName) {
      return NextResponse.json(
        { error: "Missing required assessment data" },
        { status: 400 }
      );
    }

    // Create workspace with enhanced data
    const workspace = await prisma.workspace.create({
      data: {
        name: assessment.workspaceName,
        description: assessment.workspaceDescription || null,
        businessType: assessment.businessType.id,
        experienceLevel: assessment.experienceLevel.id,
        goals: assessment.goals.map(g => g.id),
        painPoints: assessment.painPoints.map(p => p.id),
        goalsDetails: goalsDetails,
        onboardingCompleted: true,
        onboardingData: assessment,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    });

    // Update user with workspace and enhanced profile
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        workspaceId: workspace.id,
        profileImage: assessment.profileImage || null,
        businessType: assessment.businessType.id,
        experienceLevel: assessment.experienceLevel.id,
        onboardingCompleted: true,
        onboardingStep: 'completed',
        lastOnboardingUpdate: new Date()
      },
    });

    // Create personalized setup recommendations
    const recommendations = await createPersonalizedRecommendations(assessment, workspace.id);

    // Create initial success milestones
    const milestones = await createInitialMilestones(workspace.id, assessment.businessType.id);

    // Set up personalized dashboard configuration
    const dashboardConfig = await createDashboardConfiguration(workspace.id, assessment);

    return NextResponse.json(
      { 
        message: "Intelligent onboarding completed successfully", 
        user: updatedUser,
        workspace,
        recommendations,
        milestones,
        dashboardConfig
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Intelligent onboarding error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function createPersonalizedRecommendations(assessment: any, workspaceId: string) {
  const recommendations = [];

  // Business type specific recommendations
  switch (assessment.businessType.id) {
    case 'ecommerce':
      recommendations.push(
        { type: 'feature', title: 'Set up your first product', priority: 'high', estimatedTime: '5 minutes' },
        { type: 'feature', title: 'Configure payment gateways', priority: 'high', estimatedTime: '10 minutes' },
        { type: 'feature', title: 'Set up shipping zones', priority: 'medium', estimatedTime: '15 minutes' },
        { type: 'tutorial', title: 'E-commerce Best Practices', priority: 'medium', estimatedTime: '20 minutes' }
      );
      break;
    case 'creator':
      recommendations.push(
        { type: 'feature', title: 'Connect social media accounts', priority: 'high', estimatedTime: '5 minutes' },
        { type: 'feature', title: 'Set up content calendar', priority: 'high', estimatedTime: '10 minutes' },
        { type: 'feature', title: 'Configure monetization options', priority: 'medium', estimatedTime: '15 minutes' },
        { type: 'tutorial', title: 'Content Creation Strategy', priority: 'medium', estimatedTime: '25 minutes' }
      );
      break;
    case 'educator':
      recommendations.push(
        { type: 'feature', title: 'Create your first course', priority: 'high', estimatedTime: '15 minutes' },
        { type: 'feature', title: 'Set up student enrollment', priority: 'high', estimatedTime: '10 minutes' },
        { type: 'feature', title: 'Configure payment processing', priority: 'medium', estimatedTime: '10 minutes' },
        { type: 'tutorial', title: 'Course Creation Best Practices', priority: 'medium', estimatedTime: '30 minutes' }
      );
      break;
    case 'consultant':
      recommendations.push(
        { type: 'feature', title: 'Set up client management', priority: 'high', estimatedTime: '10 minutes' },
        { type: 'feature', title: 'Create service packages', priority: 'high', estimatedTime: '15 minutes' },
        { type: 'feature', title: 'Configure invoicing system', priority: 'medium', estimatedTime: '10 minutes' },
        { type: 'tutorial', title: 'Consulting Business Setup', priority: 'medium', estimatedTime: '20 minutes' }
      );
      break;
    case 'agency':
      recommendations.push(
        { type: 'feature', title: 'Set up team collaboration', priority: 'high', estimatedTime: '15 minutes' },
        { type: 'feature', title: 'Configure client portals', priority: 'high', estimatedTime: '20 minutes' },
        { type: 'feature', title: 'Set up project management', priority: 'medium', estimatedTime: '15 minutes' },
        { type: 'tutorial', title: 'Agency Operations Guide', priority: 'medium', estimatedTime: '30 minutes' }
      );
      break;
    case 'nonprofit':
      recommendations.push(
        { type: 'feature', title: 'Set up donation system', priority: 'high', estimatedTime: '15 minutes' },
        { type: 'feature', title: 'Configure volunteer management', priority: 'high', estimatedTime: '20 minutes' },
        { type: 'feature', title: 'Set up impact tracking', priority: 'medium', estimatedTime: '15 minutes' },
        { type: 'tutorial', title: 'Nonprofit Management Guide', priority: 'medium', estimatedTime: '25 minutes' }
      );
      break;
  }

  // Experience level specific recommendations
  if (assessment.experienceLevel.id === 'beginner') {
    recommendations.push(
      { type: 'tutorial', title: 'Platform Basics', priority: 'high', estimatedTime: '30 minutes' },
      { type: 'tutorial', title: 'Getting Started Guide', priority: 'high', estimatedTime: '45 minutes' }
    );
  }

  // Goals specific recommendations
  assessment.goals.forEach((goal: any) => {
    switch (goal.id) {
      case 'revenue':
        recommendations.push(
          { type: 'feature', title: 'Revenue Tracking Setup', priority: 'high', estimatedTime: '10 minutes' },
          { type: 'tutorial', title: 'Revenue Optimization Strategies', priority: 'medium', estimatedTime: '20 minutes' }
        );
        break;
      case 'audience':
        recommendations.push(
          { type: 'feature', title: 'Audience Analytics Setup', priority: 'high', estimatedTime: '10 minutes' },
          { type: 'tutorial', title: 'Audience Growth Strategies', priority: 'medium', estimatedTime: '25 minutes' }
        );
        break;
      case 'automate':
        recommendations.push(
          { type: 'feature', title: 'Automation Workflow Setup', priority: 'high', estimatedTime: '15 minutes' },
          { type: 'tutorial', title: 'Business Automation Guide', priority: 'medium', estimatedTime: '30 minutes' }
        );
        break;
    }
  });

  return recommendations;
}

async function createInitialMilestones(workspaceId: string, businessType: string) {
  const baseMilestones = [
    { name: 'Complete Profile', points: 100, completed: true },
    { name: 'Workspace Setup', points: 200, completed: true },
    { name: 'First Feature Exploration', points: 150, completed: false },
    { name: 'Complete First Tutorial', points: 250, completed: false },
    { name: 'Invite Team Member', points: 300, completed: false }
  ];

  // Business type specific milestones
  const businessMilestones = {
    ecommerce: [
      { name: 'Add First Product', points: 500, completed: false },
      { name: 'Complete First Sale', points: 1000, completed: false },
      { name: 'Reach $100 Revenue', points: 1500, completed: false }
    ],
    creator: [
      { name: 'Connect Social Account', points: 500, completed: false },
      { name: 'Publish First Content', points: 1000, completed: false },
      { name: 'Reach 100 Followers', points: 1500, completed: false }
    ],
    educator: [
      { name: 'Create First Course', points: 500, completed: false },
      { name: 'Enroll First Student', points: 1000, completed: false },
      { name: 'Earn First $100', points: 1500, completed: false }
    ],
    consultant: [
      { name: 'Add First Client', points: 500, completed: false },
      { name: 'Create First Invoice', points: 1000, completed: false },
      { name: 'Complete First Project', points: 1500, completed: false }
    ],
    agency: [
      { name: 'Add Team Member', points: 500, completed: false },
      { name: 'Onboard First Client', points: 1000, completed: false },
      { name: 'Complete First Project', points: 1500, completed: false }
    ],
    nonprofit: [
      { name: 'Set Up Donation Page', points: 500, completed: false },
      { name: 'Receive First Donation', points: 1000, completed: false },
      { name: 'Register First Volunteer', points: 1500, completed: false }
    ]
  };

  return [...baseMilestones, ...(businessMilestones[businessType] || [])];
}

async function createDashboardConfiguration(workspaceId: string, assessment: any) {
  const baseWidgets = [
    { type: 'welcome', position: { x: 0, y: 0, width: 12, height: 2 } },
    { type: 'quickActions', position: { x: 0, y: 2, width: 6, height: 3 } },
    { type: 'recentActivity', position: { x: 6, y: 2, width: 6, height: 3 } }
  ];

  // Business type specific widgets
  const businessWidgets = {
    ecommerce: [
      { type: 'salesOverview', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'productPerformance', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'orderStatus', position: { x: 0, y: 9, width: 12, height: 3 } }
    ],
    creator: [
      { type: 'contentPerformance', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'audienceGrowth', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'revenueOverview', position: { x: 0, y: 9, width: 12, height: 3 } }
    ],
    educator: [
      { type: 'coursePerformance', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'studentProgress', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'revenueOverview', position: { x: 0, y: 9, width: 12, height: 3 } }
    ],
    consultant: [
      { type: 'clientOverview', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'projectStatus', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'revenueOverview', position: { x: 0, y: 9, width: 12, height: 3 } }
    ],
    agency: [
      { type: 'clientOverview', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'teamPerformance', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'projectStatus', position: { x: 0, y: 9, width: 12, height: 3 } }
    ],
    nonprofit: [
      { type: 'donationOverview', position: { x: 0, y: 5, width: 6, height: 4 } },
      { type: 'volunteerOverview', position: { x: 6, y: 5, width: 6, height: 4 } },
      { type: 'impactMetrics', position: { x: 0, y: 9, width: 12, height: 3 } }
    ]
  };

  return {
    widgets: [...baseWidgets, ...(businessWidgets[assessment.businessType.id] || [])],
    theme: 'default',
    layout: 'grid',
    autoRefresh: true,
    refreshInterval: 30000
  };
} 