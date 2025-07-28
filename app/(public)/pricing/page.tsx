"use client";

import { useState } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            title: "Free",
            percentage: 30,
            description: "revenue share model",
            features: [
                "Complete E-commerce Platform",
                "Social Media Management Suite",
                "Digital Course Creation Tools",
                "Customer Relationship Management",
                "Revenue Sharing Partnership",
                "Standard Technical Support",
                "Mewayz Branded Experience",
            ],
            isRecommended: false,
            cta: "Begin Free Trial",
            ctaLink: "/register"
        },
        {
            title: "Pro",
            percentage: 49,
            description: "fixed fee per month",
            features: [
                "Complete E-commerce Platform",
                "Social Media Management Suite",
                "Digital Course Creation Tools",
                "Customer Relationship Management",
                "Predictable Flat-Rate Pricing",
                "Priority Technical Support",
            ],
            isRecommended: false,
            cta: "Start Pro Plan",
            ctaLink: "/register"
        },
        {
            title: "Enterprise",
            percentage: 15,
            description: "revenue share, min $99/month",
            features: [
                "Complete Enterprise Feature Suite",
                "White-Label Platform Solution",
                "Optimized Revenue Sharing Model",
                "Dedicated Account Management",
                "Custom Branding & Theming",
                "Professional Invoice Billing",
                "Service Level Agreement (SLA)",
                "99.9% Uptime Commitment",
                "Premium Priority Support",
                "Advanced Analytics & Insights",
                "Full API Access & Integration",
                "Enterprise Security Compliance",
            ],
            isRecommended: true,
            cta: "Get Enterprise Access",
            ctaLink: "/register"
        }
    ];

    const faqs = [
        {
            question: "What distinguishes our Free, Pro, and Enterprise business solutions?",
            answer: "All three enterprise-grade plans provide comprehensive access to our core business platform: E-commerce Management, Social Media Automation, Digital Course Creation, and Customer Relationship Management (CRM). The primary differentiators are pricing structure and Enterprise-level white-label capabilities."
        },
        {
            question: "Can I switch between plans at any time?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments accordingly."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment partners."
        },
        {
            question: "Is there a setup fee?",
            answer: "No setup fees for any of our plans. You can start using the platform immediately after registration."
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
                            <Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</Link>
                            <Link href="/pricing" className="text-blue-600 font-semibold">Pricing</Link>
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
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Enterprise-Grade Business Solutions for Every Scale
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive all-in-one platform featuring E-commerce, Social Media Management, Course Creation, and CRM.
                        Choose the pricing model that aligns with your business growth strategy.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 p-8 ${plan.isRecommended ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                {plan.isRecommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h3>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        {plan.title === "Free" ? "Free" : plan.title === "Pro" ? "$49" : "15%"}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link 
                                    href={plan.ctaLink}
                                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                                        plan.isRecommended 
                                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Everything you need to know about our pricing and plans.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of businesses already using Mewayz to scale their operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Mewayz</h3>
                            <p className="text-gray-400">
                                The complete enterprise business platform for modern companies.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/#features" className="hover:text-white">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                                <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-white">About</Link></li>
                                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                                <li><Link href="/status" className="hover:text-white">Status</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Mewayz. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PricingPage; 