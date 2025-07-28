"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const SupportPage = () => {
    const [activeTab, setActiveTab] = useState("help-center");

    const supportChannels = [
        {
            title: "Help Center",
            description: "Browse our comprehensive knowledge base",
            icon: "book-open",
            href: "/knowledge-base",
            color: "blue",
            responseTime: "Instant",
            availability: "24/7"
        },
        {
            title: "Live Chat",
            description: "Chat with our support team in real-time",
            icon: "message-circle",
            href: "/support/chat",
            color: "green",
            responseTime: "< 5 minutes",
            availability: "9 AM - 6 PM EST"
        },
        {
            title: "Email Support",
            description: "Send us a detailed message",
            icon: "mail",
            href: "/support/email",
            color: "purple",
            responseTime: "< 24 hours",
            availability: "24/7"
        },
        {
            title: "Phone Support",
            description: "Call us directly for urgent issues",
            icon: "phone",
            href: "/support/phone",
            color: "orange",
            responseTime: "Immediate",
            availability: "9 AM - 6 PM EST"
        }
    ];

    const helpCategories = [
        {
            title: "Getting Started",
            description: "Learn the basics and set up your account",
            icon: "play",
            articles: 8,
            color: "blue"
        },
        {
            title: "Account & Billing",
            description: "Manage your account and billing information",
            icon: "credit-card",
            articles: 12,
            color: "green"
        },
        {
            title: "Products & Orders",
            description: "Learn about our products and order management",
            icon: "shopping-bag",
            articles: 15,
            color: "purple"
        },
        {
            title: "Technical Issues",
            description: "Troubleshoot technical problems",
            icon: "settings",
            articles: 20,
            color: "orange"
        },
        {
            title: "API & Integration",
            description: "Developer resources and API documentation",
            icon: "code",
            articles: 18,
            color: "indigo"
        },
        {
            title: "Security & Privacy",
            description: "Security best practices and privacy information",
            icon: "shield",
            articles: 10,
            color: "red"
        }
    ];

    const systemStatus = {
        overall: "operational",
        services: [
            { name: "Website", status: "operational", uptime: "99.9%" },
            { name: "API", status: "operational", uptime: "99.8%" },
            { name: "Database", status: "operational", uptime: "99.9%" },
            { name: "Email", status: "operational", uptime: "99.7%" }
        ]
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'operational':
                return 'text-green-600 bg-green-100';
            case 'degraded':
                return 'text-yellow-600 bg-yellow-100';
            case 'outage':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <Layout title="Support">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Support Center">
                        <div className="mb-6">
                            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setActiveTab("help-center")}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === "help-center"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    Help Center
                                </button>
                                <button
                                    onClick={() => setActiveTab("contact")}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === "contact"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    Contact Support
                                </button>
                            </div>
                        </div>

                        {activeTab === "help-center" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {helpCategories.map((category, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                        <div className="flex items-start space-x-3">
                                            <div className={`p-2 rounded-lg bg-${category.color}-100`}>
                                                <Icon name={category.icon} className={`w-5 h-5 text-${category.color}-600`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900 mb-1">{category.title}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500">{category.articles} articles</span>
                                                    <Button href={`/knowledge-base/${category.title.toLowerCase().replace(/\s+/g, '-')}`} size="sm" isStroke>
                                                        Browse
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "contact" && (
                            <div className="space-y-4">
                                {supportChannels.map((channel, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-3">
                                                <div className={`p-3 rounded-lg bg-${channel.color}-100`}>
                                                    <Icon name={channel.icon} className={`w-6 h-6 text-${channel.color}-600`} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900 mb-1">{channel.title}</h3>
                                                    <p className="text-sm text-gray-600 mb-2">{channel.description}</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>Response: {channel.responseTime}</span>
                                                        <span>Available: {channel.availability}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button href={channel.href} size="sm">
                                                Get Help
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="System Status">
                        <div className="mb-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">Overall Status</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(systemStatus.overall)}`}>
                                    {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                                </span>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            {systemStatus.services.map((service, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                        <div className="text-xs text-gray-500">Uptime: {service.uptime}</div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Quick Links" className="mt-4">
                        <div className="space-y-2">
                            <Button href="/faq" className="w-full justify-start" isStroke>
                                <Icon name="help-circle" className="w-4 h-4 mr-2" />
                                Frequently Asked Questions
                            </Button>
                            <Button href="/knowledge-base" className="w-full justify-start" isStroke>
                                <Icon name="book" className="w-4 h-4 mr-2" />
                                Knowledge Base
                            </Button>
                            <Button href="/docs" className="w-full justify-start" isStroke>
                                <Icon name="file-text" className="w-4 h-4 mr-2" />
                                Documentation
                            </Button>
                            <Button href="/community" className="w-full justify-start" isStroke>
                                <Icon name="users" className="w-4 h-4 mr-2" />
                                Community Forum
                            </Button>
                        </div>
                    </Card>
                    
                    <Card title="Support Hours" className="mt-4">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Monday - Friday</span>
                                <span className="text-sm font-medium">9 AM - 6 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Saturday</span>
                                <span className="text-sm font-medium">10 AM - 4 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Sunday</span>
                                <span className="text-sm font-medium">Closed</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                                <div className="text-xs text-gray-500">
                                    Emergency support available 24/7 for critical issues
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default SupportPage; 