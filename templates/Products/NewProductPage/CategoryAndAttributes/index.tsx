"use client";


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

import { useState } from "react";
import TagsInput from "react-tagsinput";
import Card from "@/style-reference/components/Card";
import Select from "@/style-reference/components/Select";
import Tooltip from "@/style-reference/components/Tooltip";
import Compatibility from "@/style-reference/components/Compatibility";
import { SelectOption } from "@/types/select";

import "react-tagsinput/react-tagsinput.css";

const categories: SelectOption[] = [
    { id: 1, name: "Illustrations" },
    { id: 2, name: "Icons" },
    { id: 3, name: "Logos" },
];

const CategoryAndAttributes = () => {
    const [category, setCategory] = useState<SelectOption | null>(null);
    const [tags, setTags] = useState<string[]>([]);

    return (
        <Card title="Category & attributes">
            <div className="flex flex-col gap-8 px-5 pb-5 max-lg:px-3 max-lg:pb-3">
                <Select
                    label="Category"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    placeholder="Select category"
                    value={category}
                    onChange={setCategory}
                    options={categories}
                />
                <Compatibility classItemName="w-[calc(25%-0.75rem)] max-2xl:w-[calc(33.333%-0.75rem)] max-md:w-[calc(50%-0.75rem)]" />
                <div>
                    <div className="flex items-center mb-4">
                        <div className="text-button">Tags</div>
                        <Tooltip
                            className="ml-1.5"
                            content="Maximum 100 characters. No HTML or emoji allowed"
                        />
                    </div>
                    <div className="">
                        <TagsInput
                            className="w-full min-h-12 pr-1.5 pb-1.5 border !border-s-stroke2 rounded-3xl transition-colors hover:!border-s-highlight"
                            inputProps={{
                                className:
                                    "mt-1.5 h-8 pl-4.5 text-body-2 outline-none placeholder:text-t-secondary/50",
                                placeholder: "i.e. Dashboard, Light",
                            }}
                            tagProps={{
                                className:
                                    "inline-flex items-center h-8 mt-1.5 ml-1.5 gap-1.5 px-3 bg-b-surface1 rounded-full text-body-2 text-t-primary",
                                classNameRemove:
                                    "relative w-3 h-3 rounded-full cursor-pointer before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:w-3 before:h-[1.5px] before:rounded-full before:bg-t-tertiary before:rotate-45 before:transition-colors hover:before:bg-t-primary after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:w-3 after:h-[1.5px] after:rounded-full after:bg-t-tertiary after:rotate-135 after:transition-colors hover:after:bg-t-primary",
                            }}
                            value={tags}
                            onChange={setTags}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CategoryAndAttributes;
