"use client";

import { useState } from "react";
import Card from "@/style-reference/components/Card";
import FieldImage from "@/style-reference/components/FieldImage";
import Field from "@/style-reference/components/Field";
import Select from "@/style-reference/components/Select";

export const metadata = {
  title: "E-commerce Platform | Online Store Builder | MEWAYZ",
  description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
  keywords: "e-commerce platform, online store builder, product management, inventory management, payment processing, sales analytics",
  openGraph: {
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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

const customizeProfileOptions = [
    { id: 1, name: "Recent product first" },
    { id: 2, name: "Oldest product first" },
    { id: 3, name: "Random" },
];

const YourShop = ({}) => {
    const [images, setImages] = useState<File[]>([]);
    const [xProfileLink, setXProfileLink] = useState("https://x.com/username");
    const [dribbbleLink, setDribbbleLink] = useState(
        "https://dribbble.com/username"
    );
    const [instagramLink, setInstagramLink] = useState(
        "https://www.instagram.com/username/"
    );
    const [threadsLink, setThreadsLink] = useState(
        "https://www.threads.net/@username"
    );
    const [customizeProfile, setCustomizeProfile] = useState(
        customizeProfileOptions[0]
    );

    const handleChangePreviews = (file: File) => {
        setImages([...images, file]);
    };

    return (
        <Card title="Your shop">
            <div className="flex flex-col gap-8 p-5 pt-0 max-lg:px-3 max-md:gap-4">
                <FieldImage
                    classImage="w-full !h-78 object-cover"
                    label="Shop cover"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    onChange={handleChangePreviews}
                    initialImage="/images/shop-banner.png"
                />
                <div className="flex gap-4 max-md:flex-col max-md:mt-4">
                    <Field
                        className="flex-1"
                        classInput="truncate"
                        label="X profile"
                        placeholder="Enter X profile"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={xProfileLink}
                        onChange={(e) => setXProfileLink(e.target.value)}
                        required
                        validated
                    />
                    <Field
                        className="flex-1"
                        classInput="truncate"
                        label="Dribbble"
                        placeholder="Enter Dribbble"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={dribbbleLink}
                        onChange={(e) => setDribbbleLink(e.target.value)}
                        required
                        validated
                    />
                </div>
                <div className="flex gap-4 max-md:flex-col">
                    <Field
                        className="flex-1"
                        classInput="truncate"
                        label="Instagram"
                        placeholder="Enter Instagram"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={instagramLink}
                        onChange={(e) => setInstagramLink(e.target.value)}
                        required
                        validated
                    />
                    <Field
                        className="flex-1"
                        classInput="truncate"
                        label="Threads"
                        placeholder="Enter Threads"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={threadsLink}
                        onChange={(e) => setThreadsLink(e.target.value)}
                        required
                        validated
                    />
                </div>
                <Select
                    label="Customize your profile"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={customizeProfile}
                    onChange={setCustomizeProfile}
                    options={customizeProfileOptions}
                />
            </div>
        </Card>
    );
};

export default YourShop;
