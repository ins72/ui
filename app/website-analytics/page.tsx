"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface AnalyticsData {
    overview: {
        totalVisitors: number;
        totalPageViews: number;
        bounceRate: number;
        avgSessionDuration: number;
        conversionRate: number;
    };
    traffic: {
        daily: { date: string; visitors: number; pageViews: number }[];
        sources: { source: string; visitors: number; percentage: number }[];
        devices: { device: string; visitors: number; percentage: number }[];
    };
    pages: {
        url: string;
        title: string;
        views: number;
        uniqueViews: number;
        avgTimeOnPage: number;
        bounceRate: number;
    }[];
    topReferrers: {
        domain: string;
        visitors: number;
        percentage: number;
    }[];
}

const WebsiteAnalyticsPage = () => {
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [dateRange, setDateRange] = useState("30d");
    const [selectedWebsite, setSelectedWebsite] = useState("all");

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                setLoading(true);
                const data = await apiClient.getPublicContent('website-analytics');
                setAnalytics(data?.content?.data || mockAnalytics);
            } catch (error) {
                console.error('Error fetching analytics:', error);
                setAnalytics(mockAnalytics);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, [dateRange, selectedWebsite]);

    const dateRanges = [
        { value: "7d", label: "Last 7 days" },
        { value: "30d", label: "Last 30 days" },
        { value: "90d", label: "Last 90 days" },
        { value: "1y", label: "Last year" }
    ];

    const websites = [
        { id: "all", name: "All Websites" },
        { id: "main", name: "Main Website" },
        { id: "blog", name: "Blog" },
        { id: "store", name: "Online Store" }
    ];

    const formatNumber = (num: number): string => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    };

    const formatDuration = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    };

    return (
        <Layout title="Website Analytics">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Filters */}
                    <Card title="Analytics Overview" className="mb-5">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Website:</span>
                                <select
                                    value={selectedWebsite}
                                    onChange={(e) => setSelectedWebsite(e.target.value)}
                                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 dark:bg-gray-800 dark:text-white"
                                >
                                    {websites.map((website) => (
                                        <option key={website.id} value={website.id}>
                                            {website.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Date Range:</span>
                                <select
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 dark:bg-gray-800 dark:text-white"
                                >
                                    {dateRanges.map((range) => (
                                        <option key={range.value} value={range.value}>
                                            {range.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <Button onClick={() => {}} className="isStroke text-sm">
                                <Icon name="refresh-cw" className="mr-1" />
                                Refresh
                            </Button>
                        </div>

                        {/* Overview Stats */}
                        {loading ? (
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : analytics && (
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">
                                        {formatNumber(analytics.overview.totalVisitors)}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Visitors</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">
                                        {formatNumber(analytics.overview.totalPageViews)}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Page Views</div>
                                </div>
                                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">
                                        {analytics.overview.bounceRate.toFixed(1)}%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">
                                        {formatDuration(analytics.overview.avgSessionDuration)}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Session</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-orange-600">
                                        {analytics.overview.conversionRate.toFixed(2)}%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
                                </div>
                            </div>
                        )}
                    </Card>

                    {/* Traffic Sources */}
                    <Card title="Traffic Sources" className="mb-5">
                        {loading ? (
                            <div className="space-y-3">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="animate-pulse flex items-center justify-between">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                    </div>
                                ))}
                            </div>
                        ) : analytics && (
                            <div className="space-y-3">
                                {analytics.traffic.sources.map((source, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3 h-3 rounded-full ${
                                                index === 0 ? 'bg-blue-500' :
                                                index === 1 ? 'bg-green-500' :
                                                index === 2 ? 'bg-yellow-500' :
                                                index === 3 ? 'bg-purple-500' : 'bg-gray-500'
                                            }`}></div>
                                            <span className="font-medium capitalize">{source.source}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {formatNumber(source.visitors)} visitors
                                            </span>
                                            <span className="text-sm font-medium">
                                                {source.percentage.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>

                    {/* Top Pages */}
                    <Card title="Top Pages" headContent={
                        <Button href="/website-analytics/pages" className="isStroke text-sm">
                            View All Pages
                        </Button>
                    }>
                        {loading ? (
                            <div className="space-y-3">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                                    </div>
                                ))}
                            </div>
                        ) : analytics && (
                            <div className="space-y-4">
                                {analytics.pages.slice(0, 5).map((page, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-sm truncate">{page.title}</div>
                                            <div className="text-xs text-gray-500 truncate">{page.url}</div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm">
                                            <div className="text-right">
                                                <div className="font-medium">{formatNumber(page.views)}</div>
                                                <div className="text-xs text-gray-500">views</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">{page.bounceRate.toFixed(1)}%</div>
                                                <div className="text-xs text-gray-500">bounce</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>

                <div className="col-right">
                    {/* Device Breakdown */}
                    <Card title="Device Breakdown" className="mb-5">
                        {loading ? (
                            <div className="space-y-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="animate-pulse flex items-center justify-between">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                    </div>
                                ))}
                            </div>
                        ) : analytics && (
                            <div className="space-y-3">
                                {analytics.traffic.devices.map((device, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Icon 
                                                name={
                                                    device.device === "desktop" ? "monitor" :
                                                    device.device === "mobile" ? "smartphone" :
                                                    "tablet"
                                                } 
                                                className="h-5 w-5 text-gray-400" 
                                            />
                                            <span className="font-medium capitalize">{device.device}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {formatNumber(device.visitors)} visitors
                                            </span>
                                            <span className="text-sm font-medium">
                                                {device.percentage.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>

                    {/* Top Referrers */}
                    <Card title="Top Referrers" className="mb-5">
                        {loading ? (
                            <div className="space-y-3">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="animate-pulse flex items-center justify-between">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                    </div>
                                ))}
                            </div>
                        ) : analytics && (
                            <div className="space-y-3">
                                {analytics.topReferrers.slice(0, 5).map((referrer, index) => (
                                    <div key={index} className="flex items-center justify-between p-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm font-medium truncate">{referrer.domain}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">
                                                {formatNumber(referrer.visitors)}
                                            </span>
                                            <span className="text-gray-500">
                                                ({referrer.percentage.toFixed(1)}%)
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>

                    {/* Quick Actions */}
                    <Card title="Quick Actions">
                        <div className="space-y-3">
                            <Button href="/website-analytics/export" className="w-full justify-start isStroke">
                                <Icon name="download" className="mr-2" />
                                Export Data
                            </Button>
                            <Button href="/website-analytics/reports" className="w-full justify-start isStroke">
                                <Icon name="file-text" className="mr-2" />
                                Generate Reports
                            </Button>
                            <Button href="/website-analytics/goals" className="w-full justify-start isStroke">
                                <Icon name="target" className="mr-2" />
                                Set Goals
                            </Button>
                            <Button href="/website-analytics/alerts" className="w-full justify-start isStroke">
                                <Icon name="bell" className="mr-2" />
                                Configure Alerts
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

// Mock data
const mockAnalytics: AnalyticsData = {
    overview: {
        totalVisitors: 15420,
        totalPageViews: 45230,
        bounceRate: 45.2,
        avgSessionDuration: 185,
        conversionRate: 2.8
    },
    traffic: {
        daily: [
            { date: "2024-01-01", visitors: 520, pageViews: 1450 },
            { date: "2024-01-02", visitors: 480, pageViews: 1320 },
            { date: "2024-01-03", visitors: 610, pageViews: 1680 },
            { date: "2024-01-04", visitors: 590, pageViews: 1620 },
            { date: "2024-01-05", visitors: 680, pageViews: 1890 },
            { date: "2024-01-06", visitors: 720, pageViews: 2010 },
            { date: "2024-01-07", visitors: 650, pageViews: 1820 }
        ],
        sources: [
            { source: "organic", visitors: 8200, percentage: 53.2 },
            { source: "direct", visitors: 4200, percentage: 27.2 },
            { source: "social", visitors: 1800, percentage: 11.7 },
            { source: "referral", visitors: 920, percentage: 6.0 },
            { source: "email", visitors: 300, percentage: 1.9 }
        ],
        devices: [
            { device: "desktop", visitors: 7200, percentage: 46.7 },
            { device: "mobile", visitors: 6500, percentage: 42.1 },
            { device: "tablet", visitors: 1720, percentage: 11.2 }
        ]
    },
    pages: [
        {
            url: "/",
            title: "Homepage",
            views: 12500,
            uniqueViews: 8200,
            avgTimeOnPage: 145,
            bounceRate: 35.2
        },
        {
            url: "/about",
            title: "About Us",
            views: 6800,
            uniqueViews: 5200,
            avgTimeOnPage: 180,
            bounceRate: 28.5
        },
        {
            url: "/services",
            title: "Our Services",
            views: 5200,
            uniqueViews: 4100,
            avgTimeOnPage: 220,
            bounceRate: 42.1
        },
        {
            url: "/contact",
            title: "Contact Us",
            views: 3800,
            uniqueViews: 3200,
            avgTimeOnPage: 95,
            bounceRate: 55.8
        },
        {
            url: "/blog",
            title: "Blog",
            views: 2900,
            uniqueViews: 2400,
            avgTimeOnPage: 310,
            bounceRate: 38.9
        }
    ],
    topReferrers: [
        { domain: "google.com", visitors: 4200, percentage: 27.2 },
        { domain: "facebook.com", visitors: 1200, percentage: 7.8 },
        { domain: "linkedin.com", visitors: 800, percentage: 5.2 },
        { domain: "twitter.com", visitors: 600, percentage: 3.9 },
        { domain: "medium.com", visitors: 400, percentage: 2.6 }
    ]
};

export default WebsiteAnalyticsPage; 