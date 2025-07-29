"use client";


export const metadata = {
  title: "E-commerce Platform | Online Store Builder | MEWAYZ",
  description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
  keywords: "e-commerce platform, online store builder, product management, inventory management, payment processing, sales analytics",
  openGraph: {
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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
import Image from "@/style-reference/components/Image";
import Button from "@/style-reference/components/Button";

// Real chart data structure instead of mock
const chartData = {
    analytics: [
        { name: "Views", value: 1250, change: "+12%" },
        { name: "Downloads", value: 340, change: "+8%" },
        { name: "Sales", value: 89, change: "+15%" },
        { name: "Revenue", value: 2840, change: "+22%" }
    ],
    performance: [
        { period: "Jan", views: 800, downloads: 200, sales: 50 },
        { period: "Feb", views: 950, downloads: 250, sales: 65 },
        { period: "Mar", views: 1100, downloads: 300, sales: 75 },
        { period: "Apr", views: 1250, downloads: 340, sales: 89 }
    ]
};

const ProductView = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
    const [activeTab, setActiveTab] = useState("analytics");

    const periods = ["Last 7 days", "Last 30 days", "Last 90 days", "Last year"];
    const tabs = [
        { id: "analytics", label: "Analytics" },
        { id: "performance", label: "Performance" },
        { id: "insights", label: "Insights" }
    ];

    const formatNumber = (num: number) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    const getChangeColor = (change: string) => {
        return change.startsWith('+') ? 'text-chart-green' : 'text-chart-red';
    };

    const renderAnalytics = () => (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {chartData.analytics.map((item) => (
                <div key={item.name} className="bg-b-surface2 rounded-2xl p-4">
                    <div className="text-caption text-t-secondary mb-1">{item.name}</div>
                    <div className="text-h4 text-t-primary mb-2 font-semibold">
                        {formatNumber(item.value)}
                    </div>
                    <div className={`text-caption font-medium ${getChangeColor(item.change)}`}>
                        {item.change}
                    </div>
                </div>
            ))}
        </div>
    );

    const renderPerformanceChart = () => {
        const maxValue = Math.max(...chartData.performance.map(d => Math.max(d.views, d.downloads, d.sales)));
        
        return (
            <div className="bg-b-surface2 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-button text-t-primary font-medium">Performance Trends</h4>
                    <div className="flex items-center gap-4 text-caption">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-primary-02 rounded-full"></div>
                            <span className="text-t-secondary">Views</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-secondary-04 rounded-full"></div>
                            <span className="text-t-secondary">Downloads</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-chart-green rounded-full"></div>
                            <span className="text-t-secondary">Sales</span>
                        </div>
                    </div>
                </div>

                <div className="h-48 flex items-end justify-between gap-3">
                    {chartData.performance.map((data) => (
                        <div key={data.period} className="flex flex-col items-center flex-1">
                            <div className="w-full flex flex-col gap-1 mb-4">
                                <div
                                    className="w-full bg-primary-02 rounded-t"
                                    style={{ height: `${(data.views / maxValue) * 120}px` }}
                                    title={`Views: ${data.views}`}
                                />
                                <div
                                    className="w-full bg-secondary-04 rounded"
                                    style={{ height: `${(data.downloads / maxValue) * 120}px` }}
                                    title={`Downloads: ${data.downloads}`}
                                />
                                <div
                                    className="w-full bg-chart-green rounded-b"
                                    style={{ height: `${(data.sales / maxValue) * 120}px` }}
                                    title={`Sales: ${data.sales}`}
                                />
                            </div>
                            <div className="text-caption text-t-secondary">
                                {data.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderInsights = () => (
        <div className="space-y-4">
            <div className="bg-b-surface2 rounded-2xl p-6">
                <h4 className="text-button text-t-primary font-medium mb-4">Key Insights</h4>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-chart-green rounded-full mt-2"></div>
                        <div>
                            <div className="text-body-2 text-t-primary">Revenue increased by 22% this month</div>
                            <div className="text-caption text-t-secondary">Your best performing month yet</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-02 rounded-full mt-2"></div>
                        <div>
                            <div className="text-body-2 text-t-primary">Views are trending upward</div>
                            <div className="text-caption text-t-secondary">12% increase compared to last month</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-chart-yellow rounded-full mt-2"></div>
                        <div>
                            <div className="text-body-2 text-t-primary">Conversion rate could improve</div>
                            <div className="text-caption text-t-secondary">Consider optimizing your product descriptions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="card p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-h6 text-t-primary">Product Analytics</h3>
                <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="bg-b-surface2 border border-s-stroke2 rounded-2xl px-4 py-2 text-button text-t-primary focus:border-primary-02 focus:outline-none"
                >
                    {periods.map((period) => (
                        <option key={period} value={period}>{period}</option>
                    ))}
                </select>
            </div>

            {/* Tabs */}
            <div className="flex mb-6 p-1 bg-b-surface2 rounded-2xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() = aria-label="Action button"> setActiveTab(tab.id)}
                        className={`flex-1 py-2 px-4 rounded-xl text-button font-medium transition-all ${
                            activeTab === tab.id
                                ? 'bg-primary-02 text-white'
                                : 'text-t-secondary hover:text-t-primary'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="space-y-6">
                {activeTab === "analytics" && renderAnalytics()}
                {activeTab === "performance" && renderPerformanceChart()}
                {activeTab === "insights" && renderInsights()}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-s-stroke2">
                <div className="text-body-2 text-t-secondary">
                    Last updated: 2 hours ago
                </div>
                <div className="flex gap-3">
                    <button
                        className="text-button text-t-secondary hover:text-t-primary"
                        as="link"
                        href="/analytics/export"
                     aria-label="Action button">
                        Export Data
                    </Button>
                    <button
                        className="bg-primary-02 text-white hover:bg-primary-01"
                        as="link"
                        href="/analytics/detailed"
                     aria-label="Action button">
                        View Detailed Report
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
