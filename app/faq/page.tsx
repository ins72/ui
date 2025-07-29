"use client";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";

const faqs = [
    {
        id: 1,
        question: "What is MEWAYZ?",
        answer: "MEWAYZ is an all-in-one business platform that helps you manage e-commerce, CRM, course creation, social media, and marketing automation in one powerful solution."
    },
    {
        id: 2,
        question: "What plans do you offer?",
        answer: "We offer three plans: Free (30% revenue share), Pro ($49/month), and Enterprise (15% revenue share, min $99/month). All plans include the same core features - only pricing models and Enterprise white-label options differ."
    },
    {
        id: 3,
        question: "How does the revenue sharing work?",
        answer: "On the Free plan, we take 30% of your revenue. On the Enterprise plan, we take 15% with a minimum monthly fee of $99. The Pro plan is a flat $49/month with no revenue sharing."
    },
    {
        id: 4,
        question: "Can I customize the platform with my branding?",
        answer: "Yes! Pro plans include custom branding options, while Enterprise plans offer complete white-label solutions with your own domain and full customization."
    },
    {
        id: 5,
        question: "What kind of support do you provide?",
        answer: "Support varies by plan: Free includes community forums and email support, Pro adds priority support and phone assistance, Enterprise includes dedicated account managers and 24/7 support."
    },
    {
        id: 6,
        question: "Is there an API available?",
        answer: "Yes, our comprehensive API is available for Enterprise customers, allowing you to integrate MEWAYZ with your existing systems and build custom applications."
    },
    {
        id: 7,
        question: "How secure is my data?",
        answer: "We implement enterprise-level security including JWT authentication, data encryption, secure headers, audit logging, and compliance with industry standards."
    },
    {
        id: 8,
        question: "Can I migrate from other platforms?",
        answer: "Yes, we provide migration assistance for Enterprise customers and comprehensive documentation to help you move your data from other platforms."
    }
];

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const toggleItem = (id: number) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <Layout title="Frequently Asked Questions - MEWAYZ Business Platform">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-h1 mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-t-secondary max-w-2xl mx-auto">
                        Find answers to common questions about MEWAYZ platform, pricing, features, and support.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq) => (
                        <Card key={faq.id} className="mb-4">
                            <button
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-b-surface1 transition-colors"
                                onClick={() => toggleItem(faq.id)}
                                aria-expanded={openItems[faq.id]}
                            >
                                <h3 className="text-button font-medium pr-4">
                                    {faq.question}
                                </h3>
                                <Icon
                                    name={openItems[faq.id] ? "chevron-up" : "chevron-down"}
                                    className={`size-5 shrink-0 transition-transform ${
                                        openItems[faq.id] ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {openItems[faq.id] && (
                                <div className="px-6 pb-6">
                                    <p className="text-body text-t-secondary">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Card className="max-w-2xl mx-auto p-8">
                        <h2 className="text-h3 mb-4">Still have questions?</h2>
                        <p className="text-body text-t-secondary mb-6">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn btn-primary">
                                Contact Support
                            </button>
                            <button className="btn btn-outline">
                                Browse Knowledge Base
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default FAQPage; 