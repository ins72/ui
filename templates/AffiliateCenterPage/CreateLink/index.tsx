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
import Field from "@/style-reference/components/Field";
import Select from "@/style-reference/components/Select";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tooltip from "@/style-reference/components/Tooltip";

const items = [
    {
        id: 1,
        icon: "twitter",
    },
    {
        id: 2,
        icon: "threads",
    },
    {
        id: 3,
        icon: "facebook",
    },
    {
        id: 4,
        icon: "instagram",
    },
    {
        id: 5,
        icon: "mailchimp",
    },
    {
        id: 6,
        icon: "mastodon",
    },
];

const projects = [
    { id: 1, name: "Core Dashboard Builder" },
    { id: 2, name: "Bento Cards" },
    { id: 3, name: "Bento Forms" },
];

const CreateLink = ({}) => {
    const [project, setProject] = useState(projects[0]);
    const [link, setLink] = useState("https://coredashboard.com/product-48");
    const [activeIds, setActiveIds] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setActiveIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <Card classHead="!pl-3" title="Create a ref link">
            <div className="p-3 pb-6">
                <div className="flex flex-col gap-4 mb-6">
                    <Select
                        label="Get ref link"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={project}
                        onChange={setProject}
                        options={projects}
                    />
                    <Field
                        classInput="truncate"
                        placeholder="Enter link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                        validated
                    />
                    <button className="w-full" isBlack aria-label="Action button">
                        Link copied!
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="flex items-center mb-4">
                            <div className="text-button">Or post to</div>
                            <Tooltip
                                className="ml-1.5"
                                content="Maximum 100 characters. No HTML or emoji allowed"
                            />
                        </div>
                        <div className="flex flex-wrap -mt-3 -mx-1.5">
                            {items.map((item) => (
                                <div
                                    className={`flex justify-center items-center w-[calc(16.666%-0.75rem)] h-12 mt-3 mx-1.5 gap-2 border rounded-full px-2.5 transition-all cursor-pointer hover:border-s-highlight max-3xl:w-[calc(33.333%-0.75rem)] ${
                                        activeIds.includes(item.id)
                                            ? "!border-s-focus"
                                            : "border-s-stroke2"
                                    }`}
                                    onClick={() => handleClick(item.id)}
                                    key={item.id}
                                >
                                    <Icon
                                        className="fill-t-primary"
                                        name={item.icon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="w-full" isBlack aria-label="Action button">
                        Create a post
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CreateLink;
