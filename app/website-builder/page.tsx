"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface WebsiteTemplate {
    id: string;
    title: string;
    description: string;
    category: string;
    preview: string;
    features: string[];
    isPopular?: boolean;
}

interface WebsiteStats {
    totalWebsites: number;
    activeWebsites: number;
    totalVisitors: number;
    totalPageViews: number;
}

const WebsiteBuilderPage = () => {
    const [templates, setTemplates] = useState<WebsiteTemplate[]>([]);
    const [stats, setStats] = useState<WebsiteStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch website templates and stats
                const [templatesData, statsData] = await Promise.all([
                    apiClient.getPublicContent('website-templates'),
                    apiClient.getPublicContent('website-stats')
                ]);
                
                setTemplates(templatesData?.content?.data || []);
                setStats(statsData?.content?.data || null);
            } catch (error) {
                console.error('Error fetching website builder data:', error);
                // Fallback to mock data
                setTemplates(mockTemplates);
                setStats(mockStats);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredTemplates = selectedCategory === "all" 
        ? templates 
        : templates.filter(template => template.category === selectedCategory);

    const categories = ["all", "business", "ecommerce", "portfolio", "blog", "landing"];

    return (
        <Layout title="Website Builder">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Website Builder Overview */}
                    <Card title="Website Builder" className="mb-5">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Create Your Website</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Build professional websites with our drag-and-drop builder. 
                                        Choose from hundreds of templates or start from scratch.
                                    </p>
                                </div>
                                <Button href="/website-builder/create" className="isStroke">
                                    <Icon name="plus" className="mr-2" />
                                    Create Website
                                </Button>
                            </div>
                            
                            {/* Quick Stats */}
                            {stats && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">{stats.totalWebsites}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Websites</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">{stats.activeWebsites}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Active Websites</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600">{stats.totalVisitors.toLocaleString()}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Visitors</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="text-2xl font-bold text-orange-600">{stats.totalPageViews.toLocaleString()}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Page Views</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* Template Categories */}
                    <Card title="Template Categories" className="mb-5">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`text-sm ${
                                        selectedCategory === category 
                                            ? 'bg-blue-600 text-white' 
                                            : 'isStroke'
                                    }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </Card>

                    {/* Website Templates */}
                    <Card title="Website Templates" headContent={
                        <div className="flex items-center gap-2">
                            <Button href="/website-templates" className="isStroke text-sm">
                                View All
                            </Button>
                            <Button href="/website-builder/create" className="text-sm">
                                <Icon name="plus" className="mr-1" />
                                Create Custom
                            </Button>
                        </div>
                    }>
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredTemplates.slice(0, 6).map((template) => (
                                    <div key={template.id} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-colors">
                                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Icon name="globe" className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-sm text-gray-500">{template.title}</p>
                                                </div>
                                            </div>
                                            {template.isPopular && (
                                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                    Popular
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="font-medium text-gray-900 dark:text-white">{template.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-xs text-gray-500 capitalize">{template.category}</span>
                                                <Button href={`/website-builder/template/${template.id}`} className="text-xs isStroke">
                                                    Use Template
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>

                <div className="col-right">
                    {/* Quick Actions */}
                    <Card title="Quick Actions" className="mb-5">
                        <div className="space-y-3">
                            <Button href="/website-builder/create" className="w-full justify-start">
                                <Icon name="plus" className="mr-2" />
                                Create New Website
                            </Button>
                            <Button href="/website-templates" className="w-full justify-start isStroke">
                                <Icon name="grid" className="mr-2" />
                                Browse Templates
                            </Button>
                            <Button href="/website-settings" className="w-full justify-start isStroke">
                                <Icon name="settings" className="mr-2" />
                                Website Settings
                            </Button>
                            <Button href="/website-analytics" className="w-full justify-start isStroke">
                                <Icon name="bar-chart" className="mr-2" />
                                View Analytics
                            </Button>
                        </div>
                    </Card>

                    {/* Recent Websites */}
                    <Card title="Recent Websites">
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center mr-3">
                                            <Icon name="globe" className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">Website {i + 1}</div>
                                            <div className="text-xs text-gray-500">Last edited 2 hours ago</div>
                                        </div>
                                    </div>
                                    <Button href={`/website-builder/edit/${i + 1}`} className="text-xs isStroke">
                                        Edit
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

// Mock data for fallback
const mockTemplates: WebsiteTemplate[] = [
    {
        id: "1",
        title: "Business Pro",
        description: "Professional business website template with modern design",
        category: "business",
        preview: "/templates/business-pro.jpg",
        features: ["Responsive", "SEO Optimized", "Contact Forms"],
        isPopular: true
    },
    {
        id: "2",
        title: "E-commerce Store",
        description: "Complete online store template with shopping cart",
        category: "ecommerce",
        preview: "/templates/ecommerce.jpg",
        features: ["Shopping Cart", "Payment Integration", "Product Catalog"]
    },
    {
        id: "3",
        title: "Portfolio Showcase",
        description: "Creative portfolio template for artists and designers",
        category: "portfolio",
        preview: "/templates/portfolio.jpg",
        features: ["Gallery", "Project Showcase", "Contact Form"]
    },
    {
        id: "4",
        title: "Blog Magazine",
        description: "Modern blog template with article management",
        category: "blog",
        preview: "/templates/blog.jpg",
        features: ["Article Management", "Comments", "Social Sharing"]
    },
    {
        id: "5",
        title: "Landing Page",
        description: "High-converting landing page template",
        category: "landing",
        preview: "/templates/landing.jpg",
        features: ["Lead Capture", "A/B Testing", "Analytics"]
    },
    {
        id: "6",
        title: "Restaurant Site",
        description: "Restaurant website with menu and reservations",
        category: "business",
        preview: "/templates/restaurant.jpg",
        features: ["Menu Display", "Reservations", "Location Map"]
    }
];

const mockStats: WebsiteStats = {
    totalWebsites: 1250,
    activeWebsites: 1180,
    totalVisitors: 45000,
    totalPageViews: 125000
};

export default WebsiteBuilderPage; 