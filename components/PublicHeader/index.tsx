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

import React from "react";
import Link from "next/link";
import Button from "@/style-reference/components/Button";
import Logo from "@/style-reference/components/Logo";

const PublicHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-b-surface1 border-b border-s-stroke2">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Logo />
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/pricing" className="text-t-secondary hover:text-t-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="/features" className="text-t-secondary hover:text-t-primary transition-colors">
                            Features
                        </Link>
                        <Link href="/help" className="text-t-secondary hover:text-t-primary transition-colors">
                            Help
                        </Link>
                        <Link href="/privacy" className="text-t-secondary hover:text-t-primary transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-t-secondary hover:text-t-primary transition-colors">
                            Terms
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link href="/auth/signin">
                            <button isStroke aria-label="Action button">Sign In</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <button isBlack aria-label="Action button">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PublicHeader; 