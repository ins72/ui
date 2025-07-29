"use client";


export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    type: "website",
    url: "https://mewayz.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEWAYZ - Transform Your Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Layout from "@/style-reference/components/Layout";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";

const OnboardingPage = () => {
    const sessionResult = useSession();
    const session = sessionResult?.data;
    const update = sessionResult?.update;
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceDescription, setWorkspaceDescription] = useState("");
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (!workspaceName.trim()) {
            setError("Workspace name is required");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/onboarding", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    workspaceName: workspaceName.trim(),
                    workspaceDescription: workspaceDescription.trim(),
                    profileImage,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "An error occurred");
            } else {
                // Update session with new user data
                await update();
                router.push("/");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout title="Welcome! Let's get started" hideSidebar>
            <div className="card px-12 py-22 max-lg:p-8 max-lg:px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-h2 mb-4">Welcome to MEWAYZ!</h1>
                        <p className="text-t-secondary text-lg">
                            Let's set up your workspace and get you started
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600">
                                <Icon name="alert-circle" className="fill-red-600" />
                                <span className="text-sm">{error}</span>
                            </div>
                        )}

                        {/* Profile Picture Section */}
                        <div className="text-center">
                            <h2 className="text-h4 mb-6">Profile Picture</h2>
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-600">
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            session?.user?.name ? getInitials(session.user.name) : "U"
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() = aria-label="Action button"> fileInputRef.current?.click()}
                                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                    >
                                        <Icon name="camera" className="fill-white" />
                                    </button>
                                </div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <p className="text-sm text-t-secondary">
                                    Click the camera icon to upload a profile picture
                                </p>
                            </div>
                        </div>

                        {/* Workspace Section */}
                        <div>
                            <h2 className="text-h4 mb-6">Workspace Setup</h2>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="workspaceName" className="block text-sm font-medium mb-2">
                                        Workspace Name *
                                    </label>
                                    <input
                                        id="workspaceName"
                                        type="text"
                                        value={workspaceName}
                                        onChange={(e) => setWorkspaceName(e.target.value)}
                                        className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your workspace name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="workspaceDescription" className="block text-sm font-medium mb-2">
                                        Description (Optional)
                                    </label>
                                    <textarea
                                        id="workspaceDescription"
                                        value={workspaceDescription}
                                        onChange={(e) => setWorkspaceDescription(e.target.value)}
                                        className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        placeholder="Describe your workspace"
                                        rows={3}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Plan Information */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-h5 mb-3 text-blue-900">Your Plan</h3>
                            <p className="text-blue-800 mb-2">
                                You're currently on the <strong>Free Plan</strong> with 30% revenue share.
                            </p>
                            <p className="text-blue-700 text-sm">
                                You can upgrade to Pro ($49/month) or Enterprise (15% revenue share) anytime from your dashboard.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="Get Started Free"
                                isBlack
                                className="px-8 py-3"
                                disabled={isLoading}
                             aria-label="Action button">
                                {isLoading ? "Setting up..." : "Complete Setup"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default OnboardingPage; 