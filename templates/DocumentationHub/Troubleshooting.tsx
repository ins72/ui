"use client";

import { useState } from "react";
import { Wrench, Search, AlertTriangle, CheckCircle, Clock, MessageSquare, Phone, Mail, BookOpen, Video } from "lucide-react";

const Troubleshooting = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const commonIssues = [
        {
            category: "Authentication",
            issues: [
                {
                    title: "Login not working",
                    description: "Unable to log in with correct credentials",
                    solution: "Clear browser cache and cookies, ensure caps lock is off, check if account is locked",
                    severity: "high"
                },
                {
                    title: "Token expired",
                    description: "API token has expired and requests are failing",
                    solution: "Refresh your access token by logging in again or using the refresh token endpoint",
                    severity: "medium"
                },
                {
                    title: "Two-factor authentication issues",
                    description: "Problems with 2FA setup or verification",
                    solution: "Check your authenticator app time sync, use backup codes if available",
                    severity: "medium"
                }
            ]
        },
        {
            category: "API Integration",
            issues: [
                {
                    title: "Rate limit exceeded",
                    description: "Receiving 429 error responses from API",
                    solution: "Implement exponential backoff, reduce request frequency, check rate limit headers",
                    severity: "medium"
                },
                {
                    title: "CORS errors",
                    description: "Cross-origin resource sharing errors in browser",
                    solution: "Ensure proper CORS headers are set, check domain whitelist in API settings",
                    severity: "medium"
                },
                {
                    title: "Webhook delivery failures",
                    description: "Webhooks not being delivered to your endpoint",
                    solution: "Verify endpoint URL is accessible, check SSL certificate, review webhook logs",
                    severity: "high"
                }
            ]
        },
        {
            category: "Performance",
            issues: [
                {
                    title: "Slow page loading",
                    description: "Pages taking too long to load",
                    solution: "Clear browser cache, check internet connection, disable browser extensions",
                    severity: "low"
                },
                {
                    title: "API response delays",
                    description: "API requests taking longer than expected",
                    solution: "Check server status, implement request caching, optimize query parameters",
                    severity: "medium"
                },
                {
                    title: "File upload failures",
                    description: "Unable to upload files or images",
                    solution: "Check file size limits, verify file format, ensure stable internet connection",
                    severity: "medium"
                }
            ]
        },
        {
            category: "Billing & Payments",
            issues: [
                {
                    title: "Payment processing errors",
                    description: "Credit card or payment method failures",
                    solution: "Verify card details, check for sufficient funds, try alternative payment method",
                    severity: "high"
                },
                {
                    title: "Incorrect billing charges",
                    description: "Unexpected charges or incorrect amounts",
                    solution: "Review billing history, contact support with transaction details",
                    severity: "high"
                },
                {
                    title: "Subscription cancellation issues",
                    description: "Unable to cancel or modify subscription",
                    solution: "Contact billing support, provide account details and cancellation reason",
                    severity: "medium"
                }
            ]
        }
    ];

    const supportChannels = [
        {
            type: "Live Chat",
            description: "Get instant help from our support team",
            responseTime: "2-5 minutes",
            availability: "24/7",
            icon: MessageSquare,
            color: "blue"
        },
        {
            type: "Email Support",
            description: "Send detailed inquiries and get comprehensive responses",
            responseTime: "2-4 hours",
            availability: "24/7",
            icon: Mail,
            color: "green"
        },
        {
            type: "Phone Support",
            description: "Speak directly with our technical support team",
            responseTime: "Immediate",
            availability: "9 AM - 6 PM EST",
            icon: Phone,
            color: "purple"
        },
        {
            type: "Video Call",
            description: "Screen sharing and visual troubleshooting",
            responseTime: "Scheduled",
            availability: "By appointment",
            icon: Video,
            color: "orange"
        }
    ];

    const selfHelpResources = [
        {
            title: "Knowledge Base",
            description: "Comprehensive documentation and guides",
            articles: 150,
            icon: BookOpen,
            link: "#"
        },
        {
            title: "Video Tutorials",
            description: "Step-by-step video guides",
            articles: 45,
            icon: Video,
            link: "#"
        },
        {
            title: "Community Forum",
            description: "Connect with other users",
            articles: 1200,
            icon: MessageSquare,
            link: "#"
        },
        {
            title: "API Documentation",
            description: "Technical API reference",
            articles: 80,
            icon: BookOpen,
            link: "#"
        }
    ];

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "high":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200";
            case "medium":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            case "low":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getSeverityIcon = (severity: string) => {
        switch (severity) {
            case "high":
                return <AlertTriangle className="h-4 w-4 text-red-500" />;
            case "medium":
                return <Clock className="h-4 w-4 text-yellow-500" />;
            case "low":
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            default:
                return <AlertTriangle className="h-4 w-4 text-gray-500" />;
        }
    };

    const filteredIssues = commonIssues.filter(category => 
        selectedCategory === "all" || category.category === selectedCategory
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Troubleshooting</h2>
                    <p className="text-t-secondary">Common issues, solutions, and support resources</p>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for issues or solutions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === "all"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                        >
                            All Issues
                        </button>
                        {commonIssues.map((category) => (
                            <button
                                key={category.category}
                                onClick={() => setSelectedCategory(category.category)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === category.category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Common Issues */}
                <div className="space-y-6">
                    {filteredIssues.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                            <div className="space-y-4">
                                {category.issues.map((issue, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center">
                                                {getSeverityIcon(issue.severity)}
                                                <h4 className="font-medium text-gray-900 dark:text-white ml-2">{issue.title}</h4>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                                                {issue.severity}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{issue.description}</p>
                                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Solution:</h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{issue.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Channels */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support Channels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {supportChannels.map((channel, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className={`w-12 h-12 bg-${channel.color}-100 dark:bg-${channel.color}-900 rounded-lg flex items-center justify-center mb-3`}>
                                <channel.icon className={`h-6 w-6 text-${channel.color}-600`} />
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{channel.type}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{channel.description}</p>
                            <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                                <div>Response: {channel.responseTime}</div>
                                <div>Available: {channel.availability}</div>
                            </div>
                            <button className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                Get Help
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Self-Help Resources */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Self-Help Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selfHelpResources.map((resource, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                                <resource.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{resource.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{resource.description}</p>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                {resource.articles} articles available
                            </div>
                            <button className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                                Browse Resources
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* System Status */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="font-medium text-green-900 dark:text-green-100">All Systems Operational</span>
                        </div>
                        <p className="text-sm text-green-800 dark:text-green-200">
                            All services are running normally
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <span className="font-medium text-blue-900 dark:text-blue-100">99.99% Uptime</span>
                        </div>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            Last 30 days uptime
                        </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            <span className="font-medium text-purple-900 dark:text-purple-100">2.3s Response Time</span>
                        </div>
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                            Average API response time
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Still Need Help?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Emergency Support</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            For critical issues affecting your business operations
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Contact Emergency Support →
                        </button>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Feature Request</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Suggest new features or improvements
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Submit Feature Request →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Troubleshooting; 