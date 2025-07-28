"use client";

import { useState } from "react";
import { Palette, Download, Share2, TrendingUp, Target, Users, BarChart3, FileText } from "lucide-react";

const MarketingResources = () => {
    const [activeTab, setActiveTab] = useState("brand");

    const brandGuidelines = {
        colors: {
            primary: "#3B82F6",
            secondary: "#10B981",
            accent: "#8B5CF6",
            neutral: "#6B7280",
            success: "#10B981",
            warning: "#F59E0B",
            error: "#EF4444"
        },
        typography: {
            heading: "Inter, sans-serif",
            body: "Inter, sans-serif",
            mono: "JetBrains Mono, monospace"
        },
        logo: {
            primary: "/assets/logo-primary.svg",
            secondary: "/assets/logo-secondary.svg",
            icon: "/assets/logo-icon.svg",
            white: "/assets/logo-white.svg"
        }
    };

    const marketingMaterials = [
        {
            category: "Logos & Branding",
            items: [
                { name: "Primary Logo (SVG)", format: "SVG", size: "45KB", download: "#" },
                { name: "Logo Pack (All Formats)", format: "ZIP", size: "2.1MB", download: "#" },
                { name: "Brand Guidelines PDF", format: "PDF", size: "8.5MB", download: "#" },
                { name: "Social Media Icons", format: "PNG", size: "1.2MB", download: "#" }
            ]
        },
        {
            category: "Marketing Collateral",
            items: [
                { name: "Product Brochure", format: "PDF", size: "12.3MB", download: "#" },
                { name: "Case Study Template", format: "DOCX", size: "2.8MB", download: "#" },
                { name: "Presentation Template", format: "PPTX", size: "15.7MB", download: "#" },
                { name: "Email Signature", format: "HTML", size: "45KB", download: "#" }
            ]
        },
        {
            category: "Digital Assets",
            items: [
                { name: "Website Screenshots", format: "PNG", size: "8.9MB", download: "#" },
                { name: "App Screenshots", format: "PNG", size: "5.2MB", download: "#" },
                { name: "Infographics", format: "PDF", size: "3.4MB", download: "#" },
                { name: "Video Assets", format: "MP4", size: "45.2MB", download: "#" }
            ]
        }
    ];

    const marketingStrategies = [
        {
            title: "Content Marketing",
            description: "Create valuable content to attract and engage your target audience",
            tactics: [
                "Blog posts and articles",
                "Video tutorials and demos",
                "Webinars and live events",
                "Case studies and testimonials",
                "Infographics and visual content"
            ],
            metrics: ["Organic traffic", "Engagement rate", "Lead generation", "Brand awareness"]
        },
        {
            title: "Social Media Marketing",
            description: "Leverage social platforms to build community and drive engagement",
            tactics: [
                "Platform-specific content",
                "Influencer partnerships",
                "Community management",
                "Paid social advertising",
                "Social commerce integration"
            ],
            metrics: ["Follower growth", "Engagement rate", "Reach and impressions", "Conversion rate"]
        },
        {
            title: "Email Marketing",
            description: "Nurture leads and maintain customer relationships through email campaigns",
            tactics: [
                "Welcome series",
                "Newsletter campaigns",
                "Product announcements",
                "Promotional offers",
                "Customer feedback surveys"
            ],
            metrics: ["Open rate", "Click-through rate", "Conversion rate", "Unsubscribe rate"]
        },
        {
            title: "Digital Advertising",
            description: "Target specific audiences with paid advertising campaigns",
            tactics: [
                "Google Ads campaigns",
                "Social media ads",
                "Retargeting campaigns",
                "Display advertising",
                "Video advertising"
            ],
            metrics: ["Click-through rate", "Cost per acquisition", "Return on ad spend", "Conversion rate"]
        }
    ];

    const targetAudience = [
        {
            segment: "Entrepreneurs & Startups",
            description: "Small business owners looking to scale their operations",
            painPoints: ["Limited resources", "Need for automation", "Cost-effective solutions"],
            messaging: "All-in-one platform to grow your business efficiently"
        },
        {
            segment: "E-commerce Businesses",
            description: "Online retailers seeking comprehensive business tools",
            painPoints: ["Complex integrations", "High operational costs", "Limited scalability"],
            messaging: "Streamline your e-commerce operations with integrated tools"
        },
        {
            segment: "Content Creators",
            description: "Digital creators and educators monetizing their content",
            painPoints: ["Platform limitations", "Revenue sharing concerns", "Technical complexity"],
            messaging: "Monetize your content with our revenue-sharing model"
        },
        {
            segment: "Digital Agencies",
            description: "Marketing agencies managing multiple client accounts",
            painPoints: ["Client management", "Reporting complexity", "Tool integration"],
            messaging: "Manage all your clients with our white-label solution"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Marketing Resources</h2>
                    <p className="text-t-secondary">Brand guidelines, promotional materials, and marketing strategies</p>
                </div>

                {/* Quick Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("brand")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "brand"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Palette className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Brand Guidelines</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Colors, fonts, logos</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("materials")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "materials"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Download className="h-6 w-6 text-green-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Marketing Materials</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Downloadable assets</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("strategies")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "strategies"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <TrendingUp className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Marketing Strategies</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Campaign tactics</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("audience")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "audience"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Target className="h-6 w-6 text-orange-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Target Audience</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Customer segments</div>
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "brand" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Brand Guidelines</h3>
                            
                            {/* Colors */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Brand Colors</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(brandGuidelines.colors).map(([name, color]) => (
                                        <div key={name} className="text-center">
                                            <div 
                                                className="w-full h-16 rounded-lg mb-2 border border-gray-200 dark:border-gray-700"
                                                style={{ backgroundColor: color }}
                                            ></div>
                                            <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">{name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{color}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Typography */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Typography</h4>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <div className="space-y-2">
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900 dark:text-white">Heading Font: {brandGuidelines.typography.heading}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Used for titles and headings</div>
                                        </div>
                                        <div>
                                            <div className="text-base text-gray-900 dark:text-white">Body Font: {brandGuidelines.typography.body}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Used for body text and paragraphs</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-mono text-gray-900 dark:text-white">Mono Font: {brandGuidelines.typography.mono}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Used for code and technical content</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Logo Usage */}
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Logo Usage Guidelines</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">Do's</h5>
                                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            <li>• Use the primary logo on light backgrounds</li>
                                            <li>• Maintain minimum spacing around the logo</li>
                                            <li>• Use high-resolution versions for print</li>
                                            <li>• Keep the logo proportional when resizing</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">Don'ts</h5>
                                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            <li>• Don't modify the logo colors</li>
                                            <li>• Don't stretch or distort the logo</li>
                                            <li>• Don't place on busy backgrounds</li>
                                            <li>• Don't use low-resolution versions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "materials" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Marketing Materials</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Download official marketing materials and brand assets for your campaigns.
                            </p>
                            <div className="space-y-6">
                                {marketingMaterials.map((category, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category.category}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {category.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                                                    <div>
                                                        <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {item.format} • {item.size}
                                                        </div>
                                                    </div>
                                                    <button className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "strategies" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Marketing Strategies</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Proven marketing strategies and tactics to promote the Mewayz platform effectively.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {marketingStrategies.map((strategy, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{strategy.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{strategy.description}</p>
                                        
                                        <div className="mb-4">
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Tactics:</h5>
                                            <ul className="space-y-1">
                                                {strategy.tactics.map((tactic, tacticIndex) => (
                                                    <li key={tacticIndex} className="flex items-start">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-600 dark:text-gray-300">{tactic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Metrics:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {strategy.metrics.map((metric, metricIndex) => (
                                                    <span key={metricIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "audience" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Target Audience</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Understanding our target audience segments and how to effectively reach them.
                            </p>
                            <div className="space-y-6">
                                {targetAudience.map((segment, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{segment.segment}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{segment.description}</p>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <Users className="h-4 w-4 mr-1" />
                                                Target Segment
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Pain Points</h5>
                                                <ul className="space-y-1">
                                                    {segment.painPoints.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start">
                                                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                                            <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2">
                                                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Messaging</h5>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 p-3 rounded-lg">
                                                    {segment.messaging}
                                                </p>
                                            </div>
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Marketing Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Marketing Calendar</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            Plan your marketing campaigns with our calendar template
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Download Calendar →
                        </button>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">ROI Calculator</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Calculate potential returns on marketing investments
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Use Calculator →
                        </button>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Campaign Templates</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                            Ready-to-use templates for various marketing campaigns
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            Browse Templates →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingResources; 