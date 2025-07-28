"use client";

import { useState } from "react";
import { Users, Shield, Zap, Globe, Award, Heart, Target, TrendingUp, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            bio: "Former VP of Engineering at Google, with 15+ years of experience in building scalable platforms.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "Michael Chen",
            role: "CTO",
            bio: "Ex-Microsoft architect specializing in cloud infrastructure and enterprise software development.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Product",
            bio: "Product leader with experience at Facebook and Airbnb, focused on user-centric design.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "David Kim",
            role: "VP of Engineering",
            bio: "Engineering leader with expertise in building high-performance, scalable systems.",
            image: "/api/placeholder/150/150"
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Customer Success First",
            description: "Every decision we make is driven by our commitment to customer success and satisfaction."
        },
        {
            icon: Shield,
            title: "Security & Trust",
            description: "Enterprise-grade security and compliance to protect your business data and customer information."
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Constantly innovating and improving our platform to stay ahead of industry trends."
        },
        {
            icon: Heart,
            title: "Transparency",
            description: "Open and honest communication with our customers, partners, and team members."
        }
    ];

    const milestones = [
        {
            year: "2020",
            title: "Company Founded",
            description: "Mewayz was founded with a vision to democratize enterprise business tools."
        },
        {
            year: "2021",
            title: "First 1,000 Users",
            description: "Reached our first milestone of 1,000 active users across various industries."
        },
        {
            year: "2022",
            title: "Series A Funding",
            description: "Secured $10M in Series A funding to accelerate product development and growth."
        },
        {
            year: "2023",
            title: "10,000+ Users",
            description: "Achieved 10,000+ active users and expanded to international markets."
        },
        {
            year: "2024",
            title: "Enterprise Launch",
            description: "Launched enterprise-grade features and white-label solutions for large organizations."
        }
    ];

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
                            <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">About</Link>
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
                        About <span className="text-blue-600">Mewayz</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        We're on a mission to empower businesses of all sizes with enterprise-grade tools that drive growth, 
                        efficiency, and success in the digital economy.
                    </p>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="py-8 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab("mission")}
                            className={`pb-4 px-2 border-b-2 font-medium text-sm ${
                                activeTab === "mission"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Our Mission
                        </button>
                        <button
                            onClick={() => setActiveTab("team")}
                            className={`pb-4 px-2 border-b-2 font-medium text-sm ${
                                activeTab === "team"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Our Team
                        </button>
                        <button
                            onClick={() => setActiveTab("values")}
                            className={`pb-4 px-2 border-b-2 font-medium text-sm ${
                                activeTab === "values"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Our Values
                        </button>
                        <button
                            onClick={() => setActiveTab("history")}
                            className={`pb-4 px-2 border-b-2 font-medium text-sm ${
                                activeTab === "history"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Our History
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {activeTab === "mission" && (
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Empowering Businesses Worldwide
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                                At Mewayz, we believe that every business deserves access to the same powerful tools that 
                                large enterprises use to grow and succeed. Our mission is to democratize enterprise-grade 
                                business technology, making it accessible, affordable, and easy to use for companies of all sizes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    What We Do
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    We provide a comprehensive business platform that combines e-commerce, social media management, 
                                    course creation, and customer relationship management into one seamless solution.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Simplify complex business operations</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Reduce costs and increase efficiency</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Enable rapid business growth</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Provide enterprise-grade security</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                                <div className="text-center">
                                    <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Global Impact
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Serving businesses in over 50 countries with localized solutions and support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "team" && (
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Meet Our Leadership Team
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Our team brings together decades of experience from leading technology companies, 
                                united by a shared vision of democratizing enterprise business tools.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <Users className="h-12 w-12 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "values" && (
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                These values guide everything we do, from product development to customer support.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <value.icon className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "history" && (
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Journey
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                From a small startup to a global platform serving thousands of businesses worldwide.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="relative flex items-start">
                                        <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                                        <div className="ml-16">
                                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center mb-2">
                                                    <span className="text-2xl font-bold text-blue-600 mr-4">
                                                        {milestone.year}
                                                    </span>
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        {milestone.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses that have already transformed their operations with Mewayz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Start Free Trial
                        </Link>
                        <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Contact Sales
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
                                <li><Link href="/help" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Help Center</Link></li>
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

export default AboutPage; 