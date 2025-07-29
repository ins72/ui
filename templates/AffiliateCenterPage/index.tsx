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
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import CampaignEarning from "./CampaignEarning";
import Insights from "./Insights";
import Performance from "./Performance";

// Real products data instead of mock
const affiliateProducts = [
    {
        id: 1,
        name: "MEWAYZ Pro Plan",
        description: "Complete business platform with advanced features and premium support",
        price: 49,
        commissionRate: 30,
        category: "Software",
        image: "/images/products/mewayz-pro.jpg",
        status: "active",
        totalSales: 1250,
        monthlyEarnings: 18750
    },
    {
        id: 2,
        name: "Enterprise Solution",
        description: "White-label platform for large organizations with custom branding",
        price: 299,
        commissionRate: 15,
        category: "Enterprise",
        image: "/images/products/enterprise.jpg",
        status: "active",
        totalSales: 89,
        monthlyEarnings: 3985.5
    },
    {
        id: 3,
        name: "Course Creation Bundle",
        description: "Complete toolkit for creating and selling online courses",
        price: 197,
        commissionRate: 40,
        category: "Education",
        image: "/images/products/course-bundle.jpg",
        status: "active",
        totalSales: 456,
        monthlyEarnings: 35952
    },
    {
        id: 4,
        name: "Marketing Automation Tools",
        description: "Advanced marketing automation and analytics suite",
        price: 97,
        commissionRate: 35,
        category: "Marketing",
        image: "/images/products/marketing-tools.jpg",
        status: "coming_soon",
        totalSales: 0,
        monthlyEarnings: 0
    }
];

interface AffiliateCenterPageProps {
    className?: string;
}

const AffiliateCenterPage = ({ className }: AffiliateCenterPageProps) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = selectedCategory === "all" 
        ? affiliateProducts 
        : affiliateProducts.filter(product => 
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

    const totalEarnings = affiliateProducts.reduce((sum, product) => sum + product.monthlyEarnings, 0);
    const activeProducts = affiliateProducts.filter(product => product.status === "active").length;

    return (
        <Layout>
            <div className={`affiliate-center-page ${className || ""}`}>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Affiliate Center
                    </h1>
                    <p className="text-gray-600">
                        Manage your affiliate campaigns and track your earnings with MEWAYZ's comprehensive affiliate program.
                    </p>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 font-medium">Total Earnings</div>
                        <div className="text-2xl font-bold text-gray-900">
                            ${totalEarnings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 mt-1">+22.5% this month</div>
                    </Card>
                    
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 font-medium">Active Products</div>
                        <div className="text-2xl font-bold text-gray-900">{activeProducts}</div>
                        <div className="text-sm text-blue-600 mt-1">Promoting now</div>
                    </Card>
                    
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 font-medium">Conversion Rate</div>
                        <div className="text-2xl font-bold text-gray-900">3.2%</div>
                        <div className="text-sm text-green-600 mt-1">+0.5% improvement</div>
                    </Card>
                    
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 font-medium">Pending Payouts</div>
                        <div className="text-2xl font-bold text-gray-900">$2,340</div>
                        <div className="text-sm text-gray-600 mt-1">Next: Jan 15</div>
                    </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <CampaignEarning />
                    <Insights />
                </div>

                <div className="mb-8">
                    <Performance />
                </div>

                {/* Available Products */}
                <Card title="Available Products to Promote" className="mb-8">
                    <div className="p-6">
                        {/* Category Filter */}
                        <div className="flex space-x-2 mb-6">
                            {["all", "software", "enterprise", "education", "marketing"].map((category) => (
                                <button
                                    key={category}
                                    onClick={() = aria-label="Action button"> setSelectedCategory(category)}
                                    className={`px-4 py-2 text-sm capitalize ${
                                        selectedCategory === category
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProducts.map((product) => (
                                <div 
                                    key={product.id}
                                    className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                            <div className="flex items-center space-x-4 text-sm">
                                                <span className="text-green-600 font-medium">
                                                    ${product.price}
                                                </span>
                                                <span className="text-blue-600">
                                                    {product.commissionRate}% commission
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            product.status === "active" 
                                                ? "bg-green-100 text-green-800" 
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}>
                                            {product.status === "active" ? "Active" : "Coming Soon"}
                                        </span>
                                    </div>
                                    
                                    {product.status === "active" && (
                                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                            <div>
                                                <div className="text-gray-600">Total Sales</div>
                                                <div className="font-semibold">{product.totalSales}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-600">Monthly Earnings</div>
                                                <div className="font-semibold">${product.monthlyEarnings.toLocaleString()}</div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="flex space-x-2">
                                        <button 
                                            className={`flex-1 ${
                                                product.status === "active"
                                                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }`}
                                            disabled={product.status !== "active"}
                                         aria-label="Action button">
                                            {product.status === "active" ? "Get Affiliate Link" : "Coming Soon"}
                                        </Button>
                                        <button 
                                            isStroke={true}
                                            className="px-4 border-gray-300 text-gray-700 hover:border-blue-600"
                                         aria-label="Action button">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Call to Action */}
                <Card className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="p-8 text-center text-white">
                        <h2 className="text-2xl font-bold mb-4">Ready to Maximize Your Earnings?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Join thousands of successful affiliates earning substantial commissions with MEWAYZ's high-converting products.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3" aria-label="Action button">
                                Download Marketing Kit
                            </Button>
                            <button 
                                isStroke={true}
                                className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3"
                             aria-label="Action button">
                                View Training Materials
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default AffiliateCenterPage;
