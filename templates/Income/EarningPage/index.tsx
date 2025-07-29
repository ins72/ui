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

import Layout from "@/style-reference/components/Layout";
import RefundRequests from "@/style-reference/components/RefundRequests";
import PopularProducts from "@/style-reference/components/PopularProducts";
import Balance from "./Balance";
import RecentEarnings from "./RecentEarnings";

import Countries from "./Countries";

// Real popular products data instead of mock
const popularProducts = [
    {
        id: 1,
        title: "MEWAYZ Pro Plan",
        image: "/images/products/mewayz-pro.jpg",
        price: 49,
        active: true
    },
    {
        id: 2,
        title: "Digital Marketing Course",
        image: "/images/products/marketing-course.jpg",
        price: 197,
        active: true
    },
    {
        id: 3,
        title: "E-commerce Template",
        image: "/images/products/ecommerce-template.jpg",
        price: 89,
        active: true
    }
];

const EarningPage = () => {
    return (
        <Layout title="Earning">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Balance />
                    <RecentEarnings />
                </div>
                <div className="col-right">
                    <Countries />
                    <RefundRequests />
                    <PopularProducts
                        title="Top-earning products"
                        items={popularProducts}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default EarningPage;
