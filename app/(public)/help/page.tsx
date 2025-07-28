"use client";

import { useState } from "react";
import { Search, BookOpen, MessageSquare, Video, FileText, ChevronDown, ChevronRight, ExternalLink, Star } from "lucide-react";
import Link from "next/link";

const HelpPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev => 
            prev.includes(categoryId) 
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const helpCategories = [
        {
            id: "getting-started",
            title: "Getting Started",
            description: "Learn the basics and set up your account",
            icon: BookOpen,
            articles: [
                {
                    title: "How to create your first account",
                    description: "Step-by-step guide to setting up your Mewayz account",
                    url: "#",
                    popular: true
                },
                {
                    title: "Understanding the dashboard",
                    description: "Navigate your dashboard and understand key features",
                    url: "#",
                    popular: false
                },
                {
                    title: "Setting up your profile",
                    description: "Complete your profile and customize your settings",
                    url: "#",
                    popular: false
                },
                {
                    title: "Inviting team members",
                    description: "Add team members and manage permissions",
                    url: "#",
                    popular: true
                }
            ]
        },
        {
            id: "products",
            title: "Product Management",
            description: "Create and manage your products and services",
            icon: FileText,
            articles: [
                {
                    title: "Creating your first product",
                    description: "Learn how to add products to your catalog",
                    url: "#",
                    popular: true
                },
                {
                    title: "Managing inventory",
                    description: "Track stock levels and set up notifications",
                    url: "#",
                    popular: false
                },
                {
                    title: "Product variants and options",
                    description: "Set up different product variations",
                    url: "#",
                    popular: false
                },
                {
                    title: "Product analytics and insights",
                    description: "Understand your product performance",
                    url: "#",
                    popular: false
                }
            ]
        },
        {
            id: "orders",
            title: "Order Management",
            description: "Process orders and manage customer transactions",
            icon: MessageSquare,
            articles: [
                {
                    title: "Processing orders",
                    description: "Handle incoming orders and fulfillments",
                    url: "#",
                    popular: true
                },
                {
                    title: "Order status updates",
                    description: "Keep customers informed about their orders",
                    url: "#",
                    popular: false
                },
                {
                    title: "Refunds and returns",
                    description: "Process refunds and handle returns",
                    url: "#",
                    popular: false
                },
                {
                    title: "Shipping and delivery",
                    description: "Set up shipping options and track deliveries",
                    url: "#",
                    popular: false
                }
            ]
        },
        {
            id: "analytics",
            title: "Analytics & Reporting",
            description: "Track performance and generate reports",
            icon: Star,
            articles: [
                {
                    title: "Understanding your analytics",
                    description: "Key metrics and what they mean for your business",
                    url: "#",
                    popular: true
                },
                {
                    title: "Generating reports",
                    description: "Create custom reports and export data",
                    url: "#",
                    popular: false
                },
                {
                    title: "Revenue tracking",
                    description: "Monitor your earnings and revenue streams",
                    url: "#",
                    popular: false
                },
                {
                    title: "Customer insights",
                    description: "Understand your customer behavior and preferences",
                    url: "#",
                    popular: false
                }
            ]
        }
    ];

    const popularArticles = helpCategories
        .flatMap(category => category.articles.filter(article => article.popular))
        .slice(0, 6);

    const filteredCategories = helpCategories.filter(category =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.articles.some(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Mewayz</Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
                            <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link>
                            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
                            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign In</Link>
                            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        How can we <span className="text-blue-600">help?</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Find answers to common questions, learn how to use Mewayz effectively, 
                        and get the support you need to succeed.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for help articles, tutorials, and guides..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Popular Help Articles
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Most frequently viewed help content
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {popularArticles.map((article, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {article.title}
                                    </h3>
                                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 ml-2" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {article.description}
                                </p>
                                <Link 
                                    href={article.url}
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                                >
                                    Read article
                                    <ExternalLink className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Categories */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Browse by Category
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Find help organized by topic and feature
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        {filteredCategories.map((category) => (
                            <div key={category.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <div className="flex items-center">
                                        <category.icon className="h-6 w-6 text-blue-600 mr-4" />
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    {expandedCategories.includes(category.id) ? (
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <ChevronRight className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                                
                                {expandedCategories.includes(category.id) && (
                                    <div className="border-t border-gray-200 dark:border-gray-700">
                                        <div className="p-6">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {category.articles.map((article, index) => (
                                                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                                            {article.title}
                                                        </h4>
                                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                                            {article.description}
                                                        </p>
                                                        <Link 
                                                            href={article.url}
                                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center"
                                                        >
                                                            Read article
                                                            <ExternalLink className="h-3 w-3 ml-1" />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Additional Resources
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            More ways to get help and learn about Mewayz
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Video className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Video Tutorials
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Watch step-by-step video guides to master Mewayz features
                            </p>
                            <Link 
                                href="/tutorials"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                            >
                                Browse tutorials
                            </Link>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Community Forum
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Connect with other users and share tips and best practices
                            </p>
                            <Link 
                                href="/community"
                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                            >
                                Join community
                            </Link>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                API Documentation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Technical documentation for developers and integrations
                            </p>
                            <Link 
                                href="/docs"
                                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                            >
                                View docs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Still need help?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Support
                        </Link>
                        <Link href="/status" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Check System Status
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mewayz</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Empowering businesses with comprehensive enterprise solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link></li>
                                <li><Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</Link></li>
                                <li><Link href="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Integrations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link></li>
                                <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
                                <li><Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><Link href="/help" className="text-blue-600 dark:text-blue-400 font-medium">Help Center</Link></li>
                                <li><Link href="/status" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Status</Link></li>
                                <li><Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Documentation</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            © 2024 Mewayz. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HelpPage; 