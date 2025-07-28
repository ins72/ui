"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const KnowledgeBasePage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const stakeholderCategories = [
        {
            title: "Business & Operations",
            description: "Strategic planning, operations management, and business processes",
            icon: "briefcase",
            href: "/knowledge-base/business",
            color: "blue",
            articles: 24,
            featured: [
                "Business Strategy Guide",
                "Operations Management",
                "Customer Success Framework"
            ]
        },
        {
            title: "Development & Technical",
            description: "API documentation, development guides, and technical resources",
            icon: "code",
            href: "/knowledge-base/technical",
            color: "green",
            articles: 42,
            featured: [
                "API Reference",
                "Development Setup",
                "Architecture Overview"
            ]
        },
        {
            title: "Marketing & Growth",
            description: "Marketing strategies, growth tactics, and brand resources",
            icon: "trending-up",
            href: "/knowledge-base/marketing",
            color: "purple",
            articles: 18,
            featured: [
                "Marketing Strategy",
                "Content Marketing",
                "SEO Best Practices"
            ]
        },
        {
            title: "Investor Relations",
            description: "Financial reports, investor updates, and business metrics",
            icon: "pie-chart",
            href: "/knowledge-base/investors",
            color: "orange",
            articles: 12,
            featured: [
                "Financial Reports",
                "Investor Updates",
                "Business Metrics"
            ]
        }
    ];

    const quickActions = [
        {
            title: "Search Documentation",
            description: "Find specific information across all resources",
            icon: "search",
            href: "/knowledge-base/search",
            color: "gray"
        },
        {
            title: "Request Content",
            description: "Request new documentation or resources",
            icon: "plus-circle",
            href: "/knowledge-base/request",
            color: "blue"
        },
        {
            title: "Download Resources",
            description: "Access downloadable templates and guides",
            icon: "download",
            href: "/knowledge-base/downloads",
            color: "green"
        },
        {
            title: "View Analytics",
            description: "See usage statistics and popular content",
            icon: "bar-chart",
            href: "/knowledge-base/analytics",
            color: "purple"
        }
    ];

    const recentUpdates = [
        {
            title: "API v2.1 Documentation Updated",
            category: "Technical",
            date: "2 days ago",
            author: "Dev Team"
        },
        {
            title: "New Marketing Strategy Guide",
            category: "Marketing",
            date: "1 week ago",
            author: "Marketing Team"
        },
        {
            title: "Q4 Financial Report Available",
            category: "Investors",
            date: "2 weeks ago",
            author: "Finance Team"
        },
        {
            title: "Customer Success Playbook",
            category: "Business",
            date: "3 weeks ago",
            author: "Customer Success"
        }
    ];

    return (
        <Layout title="Knowledge Base">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Knowledge Base Hub">
                        <div className="mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search across all documentation..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {stakeholderCategories.map((category, index) => (
                                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-3 rounded-lg bg-${category.color}-100`}>
                                                <Icon name={category.icon} className={`w-6 h-6 text-${category.color}-600`} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                                                <p className="text-sm text-gray-600">{category.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">{category.articles} articles</div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Articles:</h4>
                                        <ul className="space-y-1">
                                            {category.featured.map((article, articleIndex) => (
                                                <li key={articleIndex} className="text-sm text-gray-600">
                                                    • {article}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <Button href={category.href} className="w-full">
                                        Explore {category.title}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Quick Actions">
                        <div className="space-y-3">
                            {quickActions.map((action, index) => (
                                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                                            <Icon name={action.icon} className={`w-4 h-4 text-${action.color}-600`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900">{action.title}</h4>
                                            <p className="text-xs text-gray-600">{action.description}</p>
                                        </div>
                                        <Button href={action.href} size="sm" isStroke>
                                            Go
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Recent Updates" className="mt-4">
                        <div className="space-y-3">
                            {recentUpdates.map((update, index) => (
                                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900">{update.title}</h4>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    {update.category}
                                                </span>
                                                <span className="text-xs text-gray-500">by {update.author}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500">{update.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Statistics" className="mt-4">
                        <div className="space-y-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">96</div>
                                <div className="text-sm text-gray-600">Total Articles</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-600">1,247</div>
                                <div className="text-sm text-gray-600">Monthly Views</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-purple-600">89%</div>
                                <div className="text-sm text-gray-600">Satisfaction Rate</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgeBasePage; 