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

import { useState } from "react";
import Tabs from "@/style-reference/components/Tabs";
import Item from "./Item";
import { TabsOption } from "@/types/tabs";

import { faqs } from "@/mocks/faqs";

const Faq = () => {
    const [activeTab, setActiveTab] = useState(faqs[0]);
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const handleTabChange = (tab: TabsOption) => {
        setActiveTab(faqs[tab.id - 1]);
        setActiveItemId(null);
    };

    const handleItemClick = (itemId: number) => {
        setActiveItemId(activeItemId === itemId ? null : itemId);
    };

    const currentItems = faqs[activeTab.id - 1]?.items || [];

    return (
        <div className="">
            <h2 className="mb-10 text-center text-h3 max-lg:mb-6 max-lg:text-h4 max-md:text-left">
                Frequently asked questions
            </h2>
            <Tabs
                className="justify-center mb-4 max-md:justify-stretch max-md:-mx-6 max-md:overflow-x-auto max-md:scrollbar-none max-md:before:shrink-0 max-md:before:w-5 max-md:after:shrink-0 max-md:after:w-5"
                classButton="max-md:shrink-0"
                items={faqs}
                value={activeTab}
                setValue={handleTabChange}
            />
            <div className="">
                {currentItems.map((item) => (
                    <Item
                        value={item}
                        isActive={activeItemId === item.id}
                        onClick={() => handleItemClick(item.id)}
                        key={`${activeTab.id}-${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
