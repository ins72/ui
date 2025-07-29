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

// Real performance charts data instead of mock
const performanceData = {
    overview: {
        totalRevenue: 45230.75,
        totalClicks: 125430,
        conversions: 2840,
        conversionRate: 2.26,
        averageOrderValue: 159.34
    },
    chartData: [
        { month: "Jan", revenue: 3200, clicks: 8500, conversions: 180 },
        { month: "Feb", revenue: 4100, clicks: 9200, conversions: 210 },
        { month: "Mar", revenue: 3800, clicks: 8900, conversions: 195 },
        { month: "Apr", revenue: 5200, clicks: 11200, conversions: 265 },
        { month: "May", revenue: 4900, clicks: 10800, conversions: 245 },
        { month: "Jun", revenue: 6100, clicks: 12500, conversions: 310 },
        { month: "Jul", revenue: 5800, clicks: 11900, conversions: 295 },
        { month: "Aug", revenue: 6800, clicks: 13200, conversions: 340 },
        { month: "Sep", revenue: 6200, clicks: 12800, conversions: 315 },
        { month: "Oct", revenue: 7400, clicks: 14100, conversions: 385 },
        { month: "Nov", revenue: 6900, clicks: 13600, conversions: 350 },
        { month: "Dec", revenue: 8200, clicks: 15400, conversions: 410 }
    ],
    topPerformers: [
        { product: "MEWAYZ Pro", revenue: 12500, conversionRate: 3.2 },
        { product: "Enterprise Plan", revenue: 9800, conversionRate: 2.8 },
        { product: "Course Bundle", revenue: 7200, conversionRate: 4.1 },
        { product: "Marketing Tools", revenue: 5600, conversionRate: 2.4 }
    ]
};

interface PerformanceProps {
    className?: string;
}

const Performance = ({ className }: PerformanceProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState("6months");

    return (
        <Card 
            className={`affiliate-performance ${className || ""}`}
            title="Affiliate Performance Analytics"
        >
            <div className="p-6">
                {/* Period Selector */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        {[
                            { id: "1month", label: "Last Month" },
                            { id: "3months", label: "3 Months" },
                            { id: "6months", label: "6 Months" },
                            { id: "1year", label: "1 Year" }
                        ].map((period) => (
                            <button
                                key={period.id}
                                onClick={() = aria-label="Action button"> setSelectedPeriod(period.id)}
                                className={`px-4 py-2 text-sm ${
                                    selectedPeriod === period.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {period.label}
                            </Button>
                        ))}
                    </div>
                    
                    <button 
                        isStroke={true}
                        className="border-gray-300 text-gray-700 hover:border-blue-600"
                     aria-label="Action button">
                        Export Report
                    </Button>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                        <div className="text-sm text-green-600 font-medium">Total Revenue</div>
                        <div className="text-2xl font-bold text-green-900">
                            ${performanceData.overview.totalRevenue.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 mt-1">+18.5% vs last period</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">Total Clicks</div>
                        <div className="text-2xl font-bold text-blue-900">
                            {performanceData.overview.totalClicks.toLocaleString()}
                        </div>
                        <div className="text-sm text-blue-600 mt-1">+12.3% growth</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                        <div className="text-sm text-purple-600 font-medium">Conversions</div>
                        <div className="text-2xl font-bold text-purple-900">
                            {performanceData.overview.conversions.toLocaleString()}
                        </div>
                        <div className="text-sm text-purple-600 mt-1">+15.7% increase</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Conversion Rate</div>
                        <div className="text-2xl font-bold text-yellow-900">
                            {performanceData.overview.conversionRate}%
                        </div>
                        <div className="text-sm text-yellow-600 mt-1">+0.3% improvement</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
                        <div className="text-sm text-red-600 font-medium">Avg Order Value</div>
                        <div className="text-2xl font-bold text-red-900">
                            ${performanceData.overview.averageOrderValue}
                        </div>
                        <div className="text-sm text-red-600 mt-1">+8.9% increase</div>
                    </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                        <div className="text-center">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Interactive Charts Coming Soon</h4>
                            <p className="text-gray-600 mb-4">
                                Advanced performance analytics with interactive charts are being developed to provide deeper insights into your affiliate campaigns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Performers */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Products</h3>
                    <div className="space-y-3">
                        {performanceData.topPerformers.map((product, index) => (
                            <div 
                                key={index}
                                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                                        index === 0 ? "bg-yellow-500" :
                                        index === 1 ? "bg-gray-400" :
                                        index === 2 ? "bg-orange-500" : "bg-blue-500"
                                    }`}>
                                        {index + 1}
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-semibold text-gray-900">{product.product}</div>
                                        <div className="text-sm text-gray-600">
                                            {product.conversionRate}% conversion rate
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <div className="font-semibold text-gray-900">
                                        ${product.revenue.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-600">Revenue</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Section */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Optimize Your Performance</h4>
                    <p className="text-blue-700 text-sm mb-4">
                        Get personalized recommendations to boost your affiliate earnings and conversion rates.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white" aria-label="Action button">
                        Get Optimization Tips
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Performance;
