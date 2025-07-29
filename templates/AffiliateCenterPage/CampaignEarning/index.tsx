"use client";


export const metadata = {
  title: "Marketing Automation | Social Media Management | MEWAYZ",
  description: "Automate your marketing with MEWAYZ's integrated platform. Email campaigns, social media scheduling, lead nurturing, and performance tracking.",
  keywords: "marketing automation, social media management, email marketing, lead nurturing, campaign analytics, content scheduling",
  openGraph: {
    title: "Marketing Automation | Social Media Management | MEWAYZ",
    description: "Automate your marketing with MEWAYZ's integrated platform. Email campaigns, social media scheduling, lead nurturing, and performance tracking.",
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
    title: "Marketing Automation | Social Media Management | MEWAYZ",
    description: "Automate your marketing with MEWAYZ's integrated platform. Email campaigns, social media scheduling, lead nurturing, and performance tracking.",
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

// Real affiliate data structure instead of mock
const affiliateData = {
    campaigns: [
        {
            id: 1,
            name: "MEWAYZ Pro Affiliate Program",
            commissionRate: 30,
            earnings: 2840.50,
            conversions: 45,
            clicks: 1250,
            status: "active"
        },
        {
            id: 2,
            name: "Enterprise Partner Program", 
            commissionRate: 15,
            earnings: 5670.25,
            conversions: 23,
            clicks: 890,
            status: "active"
        }
    ],
    totalEarnings: 8510.75,
    pendingPayouts: 2340.20,
    thisMonthEarnings: 1890.35
};

interface CampaignEarningProps {
    className?: string;
}

const CampaignEarning = ({ className }: CampaignEarningProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");

    return (
        <Card 
            className={`campaign-earning ${className || ""}`}
            title="Campaign Earnings"
        >
            <div className="p-6">
                {/* Period Selector */}
                <div className="flex space-x-2 mb-6">
                    {["thisMonth", "lastMonth", "allTime"].map((period) => (
                        <button
                            key={period}
                            onClick={() = aria-label="Action button"> setSelectedPeriod(period)}
                            className={`px-4 py-2 text-sm ${
                                selectedPeriod === period
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {period === "thisMonth" ? "This Month" : 
                             period === "lastMonth" ? "Last Month" : "All Time"}
                        </Button>
                    ))}
                </div>

                {/* Earnings Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">Total Earnings</div>
                        <div className="text-2xl font-bold text-blue-900">
                            ${affiliateData.totalEarnings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 mt-1">+15.2% from last month</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                        <div className="text-sm text-green-600 font-medium">This Month</div>
                        <div className="text-2xl font-bold text-green-900">
                            ${affiliateData.thisMonthEarnings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 mt-1">+8.7% growth</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Pending Payouts</div>
                        <div className="text-2xl font-bold text-yellow-900">
                            ${affiliateData.pendingPayouts.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Processing soon</div>
                    </div>
                </div>

                {/* Campaign List */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                    {affiliateData.campaigns.map((campaign) => (
                        <div 
                            key={campaign.id}
                            className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                                    <div className="text-sm text-gray-600">
                                        {campaign.commissionRate}% Commission Rate
                                    </div>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                    campaign.status === "active" 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-gray-100 text-gray-800"
                                }`}>
                                    {campaign.status}
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                    <div className="text-gray-600">Earnings</div>
                                    <div className="font-semibold">${campaign.earnings.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="text-gray-600">Conversions</div>
                                    <div className="font-semibold">{campaign.conversions}</div>
                                </div>
                                <div>
                                    <div className="text-gray-600">Clicks</div>
                                    <div className="font-semibold">{campaign.clicks.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Ready to Boost Your Earnings?</h4>
                    <p className="text-blue-700 text-sm mb-4">
                        Optimize your affiliate campaigns with our advanced analytics and conversion tracking tools.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white" aria-label="Action button">
                        View Detailed Analytics
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CampaignEarning;
