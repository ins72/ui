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
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";
import Percentage from "@/style-reference/components/Percentage";
import NewCustomers from "@/style-reference/components/NewCustomers";
import Balance from "./Balance";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const tabs = [
    {
        id: 1,
        icon: "profile",
        label: "Customers",
        value: "1,293",
        percent: -36.8,
    },
    {
        id: 2,
        icon: "wallet",
        label: "Balance",
        value: "256k",
        percent: 36.8,
    },
];

const Overview = ({}) => {
    const [duration, setDuration] = useState(durations[0]);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Card
            title="Overview"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="pt-1">
                <div className="flex mb-4 p-1.5 border border-s-subtle rounded-4xl bg-b-depth2">
                    {tabs.map((tab) => (
                        <div
                            className={`group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4 ${
                                activeTab === tab.id
                                    ? "bg-b-surface2 shadow-depth-toggle"
                                    : ""
                            }`}
                            key={tab.label}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <div
                                className={`flex items-center gap-3 mb-2 text-sub-title-1 transition-colors group-hover:text-t-primary max-md:mb-3 max-md:text-sub-title-2 ${
                                    activeTab === tab.id
                                        ? "text-t-primary"
                                        : "text-t-secondary"
                                }`}
                            >
                                <Icon
                                    className={`transition-colors group-hover:fill-t-primary ${
                                        activeTab === tab.id
                                            ? "fill-t-primary"
                                            : "fill-t-secondary"
                                    }`}
                                    name={tab.icon}
                                />
                                <div className="">{tab.label}</div>
                            </div>
                            <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
                                <div className="text-h2 max-md:text-h3">
                                    {tab.value}
                                </div>
                                <div>
                                    <Percentage value={tab.percent} />
                                    <div className="mt-1 text-body-2 text-t-secondary max-md:text-caption">
                                        vs last month
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {activeTab === 1 && (
                    <NewCustomers className="p-5 max-lg:px-3 max-lg:py-4" />
                )}
                {activeTab === 2 && <Balance />}
            </div>
        </Card>
    );
};

export default Overview;
