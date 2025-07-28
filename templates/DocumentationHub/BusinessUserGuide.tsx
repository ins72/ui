"use client";

import { useState } from "react";
import { BookOpen, Users, Settings, BarChart3, DollarSign, Shield, Zap, ArrowRight, CheckCircle, AlertTriangle, Info } from "lucide-react";

const BusinessUserGuide = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const gettingStartedSteps = [
        {
            step: 1,
            title: "Account Setup",
            description: "Complete your profile and verify your email address",
            duration: "5 minutes",
            status: "completed"
        },
        {
            step: 2,
            title: "Choose Your Plan",
            description: "Select the plan that best fits your business needs",
            duration: "10 minutes",
            status: "completed"
        },
        {
            step: 3,
            title: "Configure Settings",
            description: "Set up your business preferences and integrations",
            duration: "15 minutes",
            status: "in-progress"
        },
        {
            step: 4,
            title: "Add Your First Content",
            description: "Create your first product, course, or social media campaign",
            duration: "20 minutes",
            status: "pending"
        }
    ];

    const platformFeatures = [
        {
            category: "E-commerce Management",
            features: [
                "Product catalog management",
                "Inventory tracking and alerts",
                "Order processing and fulfillment",
                "Payment processing integration",
                "Customer relationship management",
                "Sales analytics and reporting"
            ]
        },
        {
            category: "Social Media Management",
            features: [
                "Multi-platform posting",
                "Content scheduling and automation",
                "Engagement analytics",
                "Social media calendar",
                "Brand monitoring",
                "Influencer collaboration tools"
            ]
        },
        {
            category: "Course Creation",
            features: [
                "Course builder with drag-and-drop interface",
                "Video hosting and streaming",
                "Student progress tracking",
                "Assessment and quiz creation",
                "Certificate generation",
                "Revenue sharing and monetization"
            ]
        },
        {
            category: "Business Intelligence",
            features: [
                "Real-time analytics dashboard",
                "Custom report generation",
                "Performance metrics tracking",
                "Revenue forecasting",
                "Customer behavior analysis",
                "Competitive intelligence"
            ]
        }
    ];

    const bestPractices = [
        {
            title: "Content Strategy",
            description: "Develop a consistent content calendar and maintain regular posting schedules",
            tips: [
                "Plan content at least 2 weeks in advance",
                "Use analytics to identify peak engagement times",
                "Maintain consistent brand voice across all platforms",
                "Regularly review and update content performance"
            ]
        },
        {
            title: "Customer Engagement",
            description: "Build strong relationships with your audience through active engagement",
            tips: [
                "Respond to comments and messages within 24 hours",
                "Use personalized communication when possible",
                "Create interactive content to encourage participation",
                "Monitor and address customer feedback promptly"
            ]
        },
        {
            title: "Revenue Optimization",
            description: "Maximize your earnings through strategic pricing and marketing",
            tips: [
                "Regularly analyze pricing strategies and market trends",
                "Implement upselling and cross-selling opportunities",
                "Use data-driven insights to optimize product offerings",
                "Monitor competitor pricing and adjust accordingly"
            ]
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case "in-progress":
                return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            case "pending":
                return <Info className="h-5 w-5 text-gray-500" />;
            default:
                return <Info className="h-5 w-5 text-gray-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "in-progress":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            case "pending":
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Business User Guide</h2>
                    <p className="text-t-secondary">Complete guide for business users and platform administrators</p>
                </div>

                {/* Quick Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "overview"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Overview</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Platform introduction</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("getting-started")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "getting-started"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Zap className="h-6 w-6 text-green-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Getting Started</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Setup guide</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("features")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "features"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <BarChart3 className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Features</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Platform capabilities</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("best-practices")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "best-practices"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Shield className="h-6 w-6 text-orange-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Best Practices</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Success strategies</div>
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "overview" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Platform Overview</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Mewayz is a comprehensive business platform that combines e-commerce, social media management, 
                                course creation, and customer relationship management into a single, powerful solution. 
                                Designed for modern businesses, our platform helps you scale your operations efficiently 
                                while maximizing revenue potential.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Benefits</h4>
                                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                                        <li>• All-in-one business solution</li>
                                        <li>• Revenue sharing model</li>
                                        <li>• Enterprise-grade security</li>
                                        <li>• 24/7 customer support</li>
                                        <li>• Scalable infrastructure</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Target Users</h4>
                                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                                        <li>• Entrepreneurs and startups</li>
                                        <li>• E-commerce businesses</li>
                                        <li>• Content creators and educators</li>
                                        <li>• Digital marketing agencies</li>
                                        <li>• Enterprise organizations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "getting-started" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Getting Started Guide</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Follow these steps to set up your Mewayz account and start using the platform effectively.
                            </p>
                            <div className="space-y-4">
                                {gettingStartedSteps.map((step) => (
                                    <div key={step.step} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-semibold text-sm">
                                            {step.step}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-gray-900 dark:text-white">{step.title}</h4>
                                                <div className="flex items-center space-x-2">
                                                    {getStatusIcon(step.status)}
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(step.status)}`}>
                                                        {step.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Estimated time: {step.duration}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "features" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Platform Features</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Explore the comprehensive features available across all Mewayz plans.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {platformFeatures.map((category, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category.category}</h4>
                                        <ul className="space-y-2">
                                            {category.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "best-practices" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Follow these proven strategies to maximize your success on the Mewayz platform.
                            </p>
                            <div className="space-y-6">
                                {bestPractices.map((practice, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{practice.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{practice.description}</p>
                                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-3">Key Tips:</h5>
                                            <ul className="space-y-2">
                                                {practice.tips.map((tip, tipIndex) => (
                                                    <li key={tipIndex} className="flex items-start">
                                                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span className="text-sm text-gray-600 dark:text-gray-300">{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Additional Resources */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Video Tutorials</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            Step-by-step video guides for all platform features
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Watch Tutorials →
                        </button>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Community Forum</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Connect with other users and share best practices
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Join Community →
                        </button>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Support Center</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                            Get help from our support team and knowledge base
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            Contact Support →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessUserGuide; 