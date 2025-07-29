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
import Checkbox from "@/style-reference/components/Checkbox";
import Button from "@/style-reference/components/Button";
import Tooltip from "@/style-reference/components/Tooltip";
import Switch from "@/style-reference/components/Switch";

type CheckboxItem = {
    id: number;
    label: string;
    checked: boolean;
};

const INITIAL_CHECKBOXES: CheckboxItem[] = [
    { id: 1, label: "Comments", checked: true },
    { id: 2, label: "Likes", checked: true },
    { id: 3, label: "Reply", checked: false },
    { id: 4, label: "Purchase", checked: true },
    { id: 5, label: "Message", checked: false },
];

const Filter = () => {
    const [checkboxes, setCheckboxes] =
        useState<CheckboxItem[]>(INITIAL_CHECKBOXES);
    const [onlyCustomers, setOnlyCustomers] = useState(true);

    const handleChange = (id: number) => {
        setCheckboxes((prev) =>
            prev.map((checkbox) =>
                checkbox.id === id
                    ? { ...checkbox, checked: !checkbox.checked }
                    : checkbox
            )
        );
    };

    const handleSelectAll = () => {
        setCheckboxes((prev) =>
            prev.map((checkbox) => ({ ...checkbox, checked: true }))
        );
    };

    const handleDeselectAll = () => {
        setCheckboxes((prev) =>
            prev.map((checkbox) => ({ ...checkbox, checked: false }))
        );
    };

    return (
        <>
            <div className="flex items-center h-12 mb-3 text-h6">Filter</div>
            <div className="flex flex-col gap-3">
                {checkboxes.map((checkbox) => (
                    <Checkbox
                        key={checkbox.id}
                        className="justify-between flex-row-reverse"
                        label={checkbox.label}
                        checked={checkbox.checked}
                        onChange={() => handleChange(checkbox.id)}
                    />
                ))}
            </div>
            <div className="flex gap-3 mt-6">
                <button className="flex-1" isStroke onClick={handleSelectAll} aria-label="Action button">
                    Select all
                </Button>
                <button className="flex-1" isStroke onClick={handleDeselectAll} aria-label="Action button">
                    Deselect all
                </Button>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                    <div className="text-button">Only customer</div>
                    <Tooltip
                        className="ml-1.5"
                        content="Maximum 100 characters. No HTML or emoji allowed"
                    />
                </div>
                <Switch
                    checked={onlyCustomers}
                    onChange={() => setOnlyCustomers(!onlyCustomers)}
                />
            </div>
        </>
    );
};

export default Filter;
