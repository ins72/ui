"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const faqCategories = [
        {
            id: "general",
            title: "General Questions",
            questions: [
                {
                    id: "what-is-mewayz",
                    question: "What is Mewayz?",
                    answer: "Mewayz is a comprehensive enterprise business platform that combines e-commerce, social media management, course creation, and customer relationship management into one seamless solution. It's designed to help businesses of all sizes scale their operations efficiently."
                },
                {
                    id: "how-to-get-started",
                    question: "How do I get started with Mewayz?",
                    answer: "Getting started is easy! Simply create an account, choose your plan, and you'll have access to all our core features. Our platform is designed to be intuitive, so you can start using it immediately without extensive training."
                },
                {
                    id: "supported-countries",
                    question: "Which countries do you support?",
                    answer: "Mewayz is available globally and supports businesses in over 50 countries. We offer localized solutions, multiple currencies, and region-specific payment gateways to serve our international customer base."
                }
            ]
        },
        {
            id: "pricing",
            title: "Pricing & Plans",
            questions: [
                {
                    id: "pricing-difference",
                    question: "What's the difference between Free, Pro, and Enterprise plans?",
                    answer: "All three plans provide the same core features: E-commerce, Social media, Courses, and CRM. The main differences are in pricing structure and additional capabilities. Free uses a 30% revenue share model, Pro is a $49/month fixed fee, and Enterprise offers 15% revenue share with a $99/month minimum plus white-label capabilities."
                },
                {
                    id: "plan-switching",
                    question: "Can I switch between plans?",
                    answer: "Yes, you can upgrade or downgrade between plans at any time. When upgrading, the new pricing structure takes effect immediately. When downgrading, changes apply at the next billing cycle."
                },
                {
                    id: "refund-policy",
                    question: "Do you offer refunds?",
                    answer: "We offer a 30-day money-back guarantee for Pro and Enterprise plans. If you're not satisfied within the first 30 days, we'll provide a full refund. Revenue share plans (Free/Enterprise) don't require upfront payment."
                }
            ]
        },
        {
            id: "features",
            title: "Features & Functionality",
            questions: [
                {
                    id: "core-features",
                    question: "What core features are included in all plans?",
                    answer: "All plans include: E-commerce platform with product management, Social media integration and posting tools, Course creation and management system, CRM with customer relationship tools, and Revenue sharing model (Free/Enterprise) or Flat fee model (Pro)."
                },
                {
                    id: "enterprise-features",
                    question: "What additional features does Enterprise include?",
                    answer: "Enterprise includes: White-label platform capabilities, Custom branding and domain, Dedicated account manager, Invoice billing system, SLA guarantees and uptime commitments, Premium support with priority response, Advanced analytics and reporting, API access for integrations, and Security compliance certifications."
                },
                {
                    id: "customization",
                    question: "Can I customize the platform?",
                    answer: "Basic customization is available in all plans. Enterprise plan offers full white-label capabilities, allowing complete customization of branding, colors, logos, and domain names to make the platform appear as your own proprietary solution."
                }
            ]
        },
        {
            id: "support",
            title: "Support & Help",
            questions: [
                {
                    id: "support-included",
                    question: "What support is included with each plan?",
                    answer: "Free plan includes standard support via email and help center. Pro plan includes premium support with faster response times. Enterprise plan includes dedicated account management, priority support, and SLA guarantees for response times."
                },
                {
                    id: "contact-support",
                    question: "How do I contact support?",
                    answer: "Free plan users can access our help center and email support. Pro and Enterprise users get premium support with faster response times. Enterprise users also have a dedicated account manager for personalized assistance."
                },
                {
                    id: "response-times",
                    question: "What are your response times?",
                    answer: "Response times vary by plan: Free plan (24-48 hours), Pro plan (4-8 hours), Enterprise plan (1-2 hours with SLA guarantees). Enterprise customers also have access to priority support channels."
                }
            ]
        }
    ];

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

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
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Find answers to common questions about Mewayz. Can't find what you're looking for? 
                        Contact our support team for personalized assistance.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCategories.map((category) => (
                        <div key={category.id} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((item) => (
                                    <div key={item.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {item.question}
                                            </span>
                                            {expandedItems.has(item.id) ? (
                                                <ChevronUp className="h-5 w-5 text-gray-500" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-gray-500" />
                                            )}
                                        </button>
                                        {expandedItems.has(item.id) && (
                                            <div className="px-6 pb-4">
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {filteredCategories.length === 0 && searchQuery && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                No questions found matching "{searchQuery}"
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Support Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Still Need Help?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Get help via email</p>
                            <a href="mailto:support@mewayz.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                support@mewayz.com
                            </a>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                            <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Chat with our team</p>
                            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                                Start Chat
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone Support</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Call us directly</p>
                            <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-medium">
                                +1 (555) 123-4567
                            </a>
                        </div>
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

export default FAQPage; 