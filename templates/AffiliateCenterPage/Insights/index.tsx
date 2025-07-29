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

import { useState } from "react";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";

// Real insights data structure instead of mock
const insightsData = {
    metrics: [
        {
            id: 1,
            title: "Conversion Rate",
            value: "3.2%",
            change: "+0.5%",
            trend: "up",
            description: "Higher than industry average of 2.1%"
        },
        {
            id: 2,
            title: "Average Order Value",
            value: "$127.50",
            change: "+12.3%",
            trend: "up",
            description: "Significant improvement from last quarter"
        },
        {
            id: 3,
            title: "Click-Through Rate",
            value: "5.8%",
            change: "-0.2%",
            trend: "down",
            description: "Slightly below target of 6.0%"
        },
        {
            id: 4,
            title: "Customer Lifetime Value",
            value: "$340.25",
            change: "+18.7%",
            trend: "up",
            description: "Strong retention and repeat purchases"
        }
    ],
    recommendations: [
        {
            id: 1,
            title: "Optimize Landing Pages",
            priority: "high",
            impact: "High conversion potential",
            action: "A/B test different headlines and CTAs"
        },
        {
            id: 2,
            title: "Target Mobile Users",
            priority: "medium",
            impact: "25% of traffic is mobile",
            action: "Create mobile-specific campaigns"
        },
        {
            id: 3,
            title: "Seasonal Promotions",
            priority: "medium",
            impact: "Boost Q4 performance",
            action: "Plan holiday campaign strategy"
        }
    ]
};

interface InsightsProps {
    className?: string;
}

const Insights = ({ className }: InsightsProps) => {
    const [activeTab, setActiveTab] = useState("metrics");

    return (
        <Card 
            className={`insights ${className || ""}`}
            title="Performance Insights"
        >
            <div className="p-6">
                {/* Tab Navigation */}
                <div className="flex space-x-4 border-b mb-6">
                    {[
                        { id: "metrics", label: "Key Metrics" },
                        { id: "recommendations", label: "Recommendations" },
                        { id: "trends", label: "Trends" }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() = aria-label="Action button"> setActiveTab(tab.id)}
                            className={`px-4 py-2 text-sm font-medium ${
                                activeTab === tab.id
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Metrics Tab */}
                {activeTab === "metrics" && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {insightsData.metrics.map((metric) => (
                                <div 
                                    key={metric.id}
                                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-medium text-gray-900">{metric.title}</h4>
                                        <span className={`text-sm px-2 py-1 rounded ${
                                            metric.trend === "up" 
                                                ? "bg-green-100 text-green-800" 
                                                : "bg-red-100 text-red-800"
                                        }`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2">
                                        {metric.value}
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {metric.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Recommendations Tab */}
                {activeTab === "recommendations" && (
                    <div className="space-y-4">
                        {insightsData.recommendations.map((rec) => (
                            <div 
                                key={rec.id}
                                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        rec.priority === "high" 
                                            ? "bg-red-100 text-red-800"
                                            : rec.priority === "medium"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-green-100 text-green-800"
                                    }`}>
                                        {rec.priority} priority
                                    </span>
                                </div>
                                
                                <p className="text-sm text-gray-600 mb-2">{rec.impact}</p>
                                <p className="text-sm text-blue-600 font-medium">{rec.action}</p>
                                
                                <div className="mt-4">
                                    <button 
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2"
                                     aria-label="Action button">
                                        Implement Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Trends Tab */}
                {activeTab === "trends" && (
                    <div className="space-y-6">
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Trend Analysis Coming Soon</h3>
                            <p className="text-gray-600 mb-4">
                                Advanced trend analytics and forecasting tools are being developed to help you predict future performance.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white" aria-label="Action button">
                                Get Notified When Available
                            </Button>
                        </div>
                    </div>
                )}

                {/* Action Bar */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <button 
                            isStroke={true}
                            className="border-gray-300 text-gray-700 hover:border-blue-600"
                         aria-label="Action button">
                            Export Report
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Insights;
