"use client";


export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
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
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
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

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import { dataService } from "@/lib/data-service";

const PricingPage = () => {
    const [pricing, setPricing] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const pricingResponse = await dataService.getPricingPlans();
                if (pricingResponse.data && Array.isArray(pricingResponse.data)) {
                    setPricing(pricingResponse.data);
                }
            } catch (error) {
                console.error('Error fetching pricing:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPricing();
    }, []);

    if (loading) {
        return (
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-16"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-96 bg-gray-200 rounded-2xl"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-t-secondary max-w-2xl mx-auto">
                        Choose the perfect plan for your business. All plans include the same core features. 
                        The difference is in pricing structure and Enterprise white-label capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricing.map((plan: any) => (
                        <div
                            key={plan.id}
                            className={`relative p-8 rounded-2xl border ${
                                plan.title === "Enterprise"
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/10"
                                    : "border-s-stroke2 bg-b-surface1"
                            }`}
                        >
                            {plan.title === "Enterprise" && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Recommended
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-h3 mb-4">{plan.title}</h3>
                                <div className="mb-4">
                                    <span className="text-h2">
                                        {plan.title === "Pro" ? "$" : ""}{plan.percentage}{plan.title === "Pro" ? "" : "%"}
                                    </span>
                                    <span className="text-t-secondary ml-2">{plan.description}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center">
                                        <Icon
                                            className={`mr-3 ${
                                                plan.title === "Enterprise"
                                                    ? "fill-blue-500"
                                                    : "fill-t-secondary"
                                            }`}
                                            name="check-circle-fill"
                                        />
                                        <span className="text-t-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center">
                                <Link href="/auth/signup">
                                    <button
                                        isBlack={plan.title === "Enterprise"}
                                        isStroke={plan.title !== "Enterprise"}
                                        className="w-full"
                                     aria-label="Action button">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <h2 className="text-h3 mb-6">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="text-left">
                            <h3 className="font-semibold mb-2">Do all plans have the same features?</h3>
                            <p className="text-t-secondary">
                                Yes, all three plans include the same core features: E-commerce, Social media, Courses, and CRM. 
                                The only differences are pricing structure and Enterprise's additional white-label capabilities.
                            </p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold mb-2">Can I switch between plans?</h3>
                            <p className="text-t-secondary">
                                Yes, you can upgrade or downgrade between plans at any time. Changes take effect at the start of your next billing cycle.
                            </p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold mb-2">What are the white-label features in Enterprise?</h3>
                            <p className="text-t-secondary">
                                Enterprise includes custom branding, invoice billing, API access, and the ability to remove MEWAYZ branding. 
                                You can present the platform as your own branded solution to your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage; 