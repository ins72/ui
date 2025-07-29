"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import ProgressBar from "@/style-reference/components/ProgressBar";

// Business type definitions from req.md
const BUSINESS_TYPES = [
  {
    id: "ecommerce",
    name: "E-commerce Store Owner",
    icon: "shopping-cart",
    description: "Sell products online with integrated inventory and payment processing",
    features: ["Product catalog", "Payment processing", "Inventory management", "Order fulfillment"]
  },
  {
    id: "creator",
    name: "Content Creator/Influencer",
    icon: "video",
    description: "Create and monetize content across multiple platforms",
    features: ["Content creation", "Social media management", "Monetization tools", "Audience analytics"]
  },
  {
    id: "educator",
    name: "Course Creator/Educator",
    icon: "graduation-cap",
    description: "Create and sell online courses and educational content",
    features: ["Course builder", "Student management", "Payment processing", "Progress tracking"]
  },
  {
    id: "consultant",
    name: "Service Provider/Consultant",
    icon: "users",
    description: "Offer professional services and consulting",
    features: ["Client management", "Project tracking", "Invoicing", "Time management"]
  },
  {
    id: "agency",
    name: "Agency/Enterprise",
    icon: "building",
    description: "Manage multiple clients and complex business operations",
    features: ["Multi-client management", "Team collaboration", "Advanced analytics", "White-label options"]
  },
  {
    id: "nonprofit",
    name: "Non-profit Organization",
    icon: "heart",
    description: "Manage donations, volunteers, and community impact",
    features: ["Donation management", "Volunteer coordination", "Impact tracking", "Grant management"]
  }
];

const EXPERIENCE_LEVELS = [
  {
    id: "beginner",
    name: "Complete Beginner",
    description: "Never used similar platforms",
    icon: "user-plus"
  },
  {
    id: "basic",
    name: "Basic User",
    description: "Used 1-2 platforms",
    icon: "user"
  },
  {
    id: "intermediate",
    name: "Intermediate",
    description: "Used 3-5 platforms",
    icon: "user-check"
  },
  {
    id: "advanced",
    name: "Advanced",
    description: "Power user of multiple platforms",
    icon: "user-cog"
  },
  {
    id: "expert",
    name: "Expert",
    description: "Developer/Technical background",
    icon: "user-tie"
  }
];

const GOALS = [
  { id: "revenue", name: "Increase Revenue", icon: "trending-up" },
  { id: "audience", name: "Build Audience", icon: "users" },
  { id: "products", name: "Launch Products", icon: "package" },
  { id: "automate", name: "Automate Business", icon: "zap" },
  { id: "scale", name: "Scale Operations", icon: "arrow-up" }
];

const PAIN_POINTS = [
  { id: "tools", name: "Too many separate tools", icon: "grid" },
  { id: "costs", name: "High monthly costs", icon: "dollar-sign" },
  { id: "integrations", name: "Complex integrations", icon: "link" },
  { id: "time", name: "Time-consuming tasks", icon: "clock" },
  { id: "skills", name: "Limited technical skills", icon: "book" },
  { id: "support", name: "Poor customer support", icon: "help-circle" }
];

const IntelligentOnboardingWizard = () => {
  const session = useSession();
  const router = useRouter();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  
  // Assessment data
  const [assessment, setAssessment] = useState({
    businessType: null,
    experienceLevel: null,
    goals: [],
    painPoints: [],
    workspaceName: "",
    workspaceDescription: "",
    profileImage: null
  });

  const [goalsDetails, setGoalsDetails] = useState({
    revenue: { amount: "", timeline: "" },
    audience: { size: "", niche: "" },
    products: { type: "", quantity: "" },
    automate: { processes: [] },
    scale: { currentSize: "", targetSize: "" }
  });

  // Step 1: Business Type Detection
  const renderBusinessTypeStep = () => (
    <Card title="What type of business are you building?" className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUSINESS_TYPES.map((type) => (
          <div
            key={type.id}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
              assessment.businessType?.id === type.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setAssessment({ ...assessment, businessType: type })}
          >
            <div className="flex items-center mb-4">
              <Icon name={type.icon} className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">{type.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <div className="space-y-2">
              {type.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-500">
                  <Icon name="check" className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  // Step 2: Experience Level Analysis
  const renderExperienceStep = () => (
    <Card title="What's your experience level with business platforms?" className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {EXPERIENCE_LEVELS.map((level) => (
          <div
            key={level.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              assessment.experienceLevel?.id === level.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setAssessment({ ...assessment, experienceLevel: level })}
          >
            <div className="flex items-center">
              <Icon name={level.icon} className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">{level.name}</h3>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  // Step 3: Goals & Objectives Survey
  const renderGoalsStep = () => (
    <Card title="What are your primary goals?" className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GOALS.map((goal) => (
            <div
              key={goal.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                assessment.goals.some(g => g.id === goal.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => {
                const isSelected = assessment.goals.some(g => g.id === goal.id);
                const updatedGoals = isSelected
                  ? assessment.goals.filter(g => g.id !== goal.id)
                  : [...assessment.goals, goal];
                setAssessment({ ...assessment, goals: updatedGoals });
              }}
            >
              <div className="flex items-center">
                <Icon name={goal.icon} className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-semibold">{goal.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Goal Details */}
        {assessment.goals.length > 0 && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Tell us more about your goals:</h3>
            <div className="space-y-4">
              {assessment.goals.map((goal) => (
                <div key={goal.id} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium mb-2">{goal.name}</h4>
                  {goal.id === "revenue" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Target amount (e.g., $10,000)"
                        className="px-3 py-2 border rounded"
                        value={goalsDetails.revenue.amount}
                        onChange={(e) => setGoalsDetails({
                          ...goalsDetails,
                          revenue: { ...goalsDetails.revenue, amount: e.target.value }
                        })}
                      />
                      <input
                        type="text"
                        placeholder="Timeline (e.g., 6 months)"
                        className="px-3 py-2 border rounded"
                        value={goalsDetails.revenue.timeline}
                        onChange={(e) => setGoalsDetails({
                          ...goalsDetails,
                          revenue: { ...goalsDetails.revenue, timeline: e.target.value }
                        })}
                      />
                    </div>
                  )}
                  {goal.id === "audience" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Target size (e.g., 10,000 followers)"
                        className="px-3 py-2 border rounded"
                        value={goalsDetails.audience.size}
                        onChange={(e) => setGoalsDetails({
                          ...goalsDetails,
                          audience: { ...goalsDetails.audience, size: e.target.value }
                        })}
                      />
                      <input
                        type="text"
                        placeholder="Niche (e.g., fitness, tech)"
                        className="px-3 py-2 border rounded"
                        value={goalsDetails.audience.niche}
                        onChange={(e) => setGoalsDetails({
                          ...goalsDetails,
                          audience: { ...goalsDetails.audience, niche: e.target.value }
                        })}
                      />
                    </div>
                  )}
                  {/* Add more goal-specific inputs */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  // Step 4: Pain Points & Workspace Setup
  const renderPainPointsStep = () => (
    <Card title="What are your biggest challenges?" className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAIN_POINTS.map((pain) => (
            <div
              key={pain.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                assessment.painPoints.some(p => p.id === pain.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => {
                const isSelected = assessment.painPoints.some(p => p.id === pain.id);
                const updatedPainPoints = isSelected
                  ? assessment.painPoints.filter(p => p.id !== pain.id)
                  : [...assessment.painPoints, pain];
                setAssessment({ ...assessment, painPoints: updatedPainPoints });
              }}
            >
              <div className="flex items-center">
                <Icon name={pain.icon} className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-semibold">{pain.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workspace Setup */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Let's set up your workspace:</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Workspace Name *</label>
              <input
                type="text"
                placeholder="Enter your workspace name"
                className="w-full px-3 py-2 border rounded"
                value={assessment.workspaceName}
                onChange={(e) => setAssessment({ ...assessment, workspaceName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description (Optional)</label>
              <textarea
                placeholder="Describe your workspace"
                className="w-full px-3 py-2 border rounded"
                rows={3}
                value={assessment.workspaceDescription}
                onChange={(e) => setAssessment({ ...assessment, workspaceDescription: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/onboarding/intelligent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assessment,
          goalsDetails
        })
      });

      if (response.ok) {
        // Redirect to personalized dashboard
        router.push("/dashboard");
      } else {
        throw new Error("Failed to complete onboarding");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return assessment.businessType;
      case 2: return assessment.experienceLevel;
      case 3: return assessment.goals.length > 0;
      case 4: return assessment.workspaceName.trim() && assessment.painPoints.length > 0;
      default: return false;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderBusinessTypeStep();
      case 2: return renderExperienceStep();
      case 3: return renderGoalsStep();
      case 4: return renderPainPointsStep();
      default: return null;
    }
  };

  return (
    <Layout title="Intelligent Onboarding Wizard" hideSidebar>
      <div className="max-w-6xl mx-auto p-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar 
            current={currentStep} 
            total={totalSteps} 
            className="mb-4"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Step {currentStep} of {totalSteps}</h1>
            <p className="text-gray-600">
              {currentStep === 1 && "Let's understand your business type"}
              {currentStep === 2 && "Assessing your experience level"}
              {currentStep === 3 && "Defining your goals and objectives"}
              {currentStep === 4 && "Identifying challenges and setting up workspace"}
            </p>
          </div>
        </div>

        {/* Current Step Content */}
        {renderCurrentStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="btn-secondary"
          >
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-primary"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleComplete}
              disabled={!canProceed() || isLoading}
              className="btn-primary"
            >
              {isLoading ? "Setting up..." : "Complete Setup"}
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default IntelligentOnboardingWizard; 