"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

interface DocSection {
    id: string;
    title: string;
    description: string;
    icon: string;
    articles: DocArticle[];
}

interface DocArticle {
    id: string;
    title: string;
    description: string;
    readTime: number;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    tags: string[];
}

const DocsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const docSections: DocSection[] = [
        {
            id: "getting-started",
            title: "Getting Started",
            description: "Quick start guides and basic setup instructions",
            icon: "play",
            articles: [
                {
                    id: "quick-start",
                    title: "Quick Start Guide",
                    description: "Get up and running with Mewayz in under 10 minutes",
                    readTime: 5,
                    difficulty: "Beginner",
                    tags: ["Setup", "Quick Start"]
                },
                {
                    id: "installation",
                    title: "Installation Guide",
                    description: "Step-by-step installation instructions for different environments",
                    readTime: 8,
                    difficulty: "Beginner",
                    tags: ["Installation", "Setup"]
                },
                {
                    id: "first-project",
                    title: "Your First Project",
                    description: "Create your first project and understand the basics",
                    readTime: 12,
                    difficulty: "Beginner",
                    tags: ["Tutorial", "Basics"]
                }
            ]
        },
        {
            id: "api-reference",
            title: "API Reference",
            description: "Complete API documentation with examples",
            icon: "code",
            articles: [
                {
                    id: "authentication",
                    title: "Authentication",
                    description: "Learn how to authenticate with our API",
                    readTime: 6,
                    difficulty: "Intermediate",
                    tags: ["API", "Auth", "Security"]
                },
                {
                    id: "endpoints",
                    title: "API Endpoints",
                    description: "Complete list of available API endpoints",
                    readTime: 15,
                    difficulty: "Intermediate",
                    tags: ["API", "Endpoints", "Reference"]
                },
                {
                    id: "rate-limiting",
                    title: "Rate Limiting",
                    description: "Understanding API rate limits and best practices",
                    readTime: 4,
                    difficulty: "Intermediate",
                    tags: ["API", "Rate Limiting"]
                }
            ]
        },
        {
            id: "guides",
            title: "Guides",
            description: "In-depth tutorials and best practices",
            icon: "book",
            articles: [
                {
                    id: "user-management",
                    title: "User Management",
                    description: "Complete guide to managing users and permissions",
                    readTime: 10,
                    difficulty: "Intermediate",
                    tags: ["Users", "Permissions", "Management"]
                },
                {
                    id: "product-catalog",
                    title: "Product Catalog Management",
                    description: "How to set up and manage your product catalog",
                    readTime: 12,
                    difficulty: "Intermediate",
                    tags: ["Products", "Catalog", "Management"]
                },
                {
                    id: "order-processing",
                    title: "Order Processing Workflow",
                    description: "Complete order processing and fulfillment guide",
                    readTime: 14,
                    difficulty: "Advanced",
                    tags: ["Orders", "Workflow", "Fulfillment"]
                }
            ]
        },
        {
            id: "examples",
            title: "Examples",
            description: "Code examples and sample implementations",
            icon: "file-text",
            articles: [
                {
                    id: "react-integration",
                    title: "React Integration",
                    description: "How to integrate Mewayz with React applications",
                    readTime: 8,
                    difficulty: "Intermediate",
                    tags: ["React", "Integration", "Frontend"]
                },
                {
                    id: "nodejs-backend",
                    title: "Node.js Backend",
                    description: "Building a backend with Node.js and Mewayz",
                    readTime: 10,
                    difficulty: "Advanced",
                    tags: ["Node.js", "Backend", "Integration"]
                },
                {
                    id: "webhook-setup",
                    title: "Webhook Setup",
                    description: "Setting up webhooks for real-time notifications",
                    readTime: 6,
                    difficulty: "Intermediate",
                    tags: ["Webhooks", "Real-time", "Notifications"]
                }
            ]
        }
    ];

    const popularArticles = [
        {
            id: "quick-start",
            title: "Quick Start Guide",
            section: "Getting Started",
            views: 1247
        },
        {
            id: "authentication",
            title: "Authentication",
            section: "API Reference",
            views: 892
        },
        {
            id: "user-management",
            title: "User Management",
            section: "Guides",
            views: 756
        },
        {
            id: "react-integration",
            title: "React Integration",
            section: "Examples",
            views: 634
        }
    ];

    const allArticles = docSections.flatMap(section => 
        section.articles.map(article => ({
            ...article,
            section: section.title,
            sectionId: section.id
        }))
    );

    const filteredArticles = searchQuery 
        ? allArticles.filter(article => 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : allArticles;

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner":
                return "bg-green-100 text-green-800";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800";
            case "Advanced":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <Layout title="Documentation">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Documentation">
                        <div className="mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search documentation..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {searchQuery ? (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Search Results ({filteredArticles.length})
                                </h3>
                                {filteredArticles.map((article) => (
                                    <div key={article.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900 mb-1">
                                                    <a href={`/docs/${article.sectionId}/${article.id}`} className="hover:text-blue-600 transition-colors">
                                                        {article.title}
                                                    </a>
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>{article.section}</span>
                                                    <span>{article.readTime} min read</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                                        {article.difficulty}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {docSections.map((section) => (
                                    <div key={section.id}>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="p-2 rounded-lg bg-blue-100">
                                                <Icon name={section.icon} className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                                                <p className="text-gray-600">{section.description}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-4">
                                            {section.articles.map((article) => (
                                                <div key={article.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-medium text-gray-900 mb-1">
                                                                <a href={`/docs/${section.id}/${article.id}`} className="hover:text-blue-600 transition-colors">
                                                                    {article.title}
                                                                </a>
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                                <span>{article.readTime} min read</span>
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                                                    {article.difficulty}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-3 flex flex-wrap gap-1">
                                                        {article.tags.map((tag) => (
                                                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Popular Articles">
                        <div className="space-y-3">
                            {popularArticles.map((article) => (
                                <div key={article.id} className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        <a href={`/docs/${article.section.toLowerCase().replace(/\s+/g, '-')}/${article.id}`} className="hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </a>
                                    </h4>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{article.section}</span>
                                        <span>{article.views} views</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Quick Links" className="mt-4">
                        <div className="space-y-2">
                            <Button href="/api-docs" className="w-full justify-start" isStroke>
                                <Icon name="code" className="w-4 h-4 mr-2" />
                                API Documentation
                            </Button>
                            <Button href="/developer-portal" className="w-full justify-start" isStroke>
                                <Icon name="terminal" className="w-4 h-4 mr-2" />
                                Developer Portal
                            </Button>
                            <Button href="/knowledge-base" className="w-full justify-start" isStroke>
                                <Icon name="book-open" className="w-4 h-4 mr-2" />
                                Knowledge Base
                            </Button>
                            <Button href="/support" className="w-full justify-start" isStroke>
                                <Icon name="help-circle" className="w-4 h-4 mr-2" />
                                Support Center
                            </Button>
                        </div>
                    </Card>
                    
                    <Card title="Community" className="mt-4">
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Join our community of developers and get help from experts.
                            </p>
                            <div className="space-y-2">
                                <Button href="/community/forum" className="w-full" isStroke>
                                    <Icon name="message-circle" className="w-4 h-4 mr-2" />
                                    Community Forum
                                </Button>
                                <Button href="/community/discord" className="w-full" isStroke>
                                    <Icon name="message-square" className="w-4 h-4 mr-2" />
                                    Discord Server
                                </Button>
                                <Button href="/community/github" className="w-full" isStroke>
                                    <Icon name="github" className="w-4 h-4 mr-2" />
                                    GitHub Discussions
                                </Button>
                            </div>
                        </div>
                    </Card>
                    
                    <Card title="Stay Updated" className="mt-4">
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Get notified about new features, updates, and documentation.
                            </p>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Button className="w-full">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default DocsPage; 