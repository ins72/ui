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
import Card from "@/style-reference/components/Card";
import Tabs from "@/style-reference/components/Tabs";
import Select from "@/style-reference/components/Select";
import Item from "./Item";

import { overview } from "@/mocks/products";

const timeOptionsShort = [
    { id: 1, name: "1D" },
    { id: 2, name: "7D" },
    { id: 3, name: "1M" },
    { id: 4, name: "6M" },
    { id: 5, name: "1Y" },
];

const timeOptionsLong = [
    { id: 1, name: "1 day" },
    { id: 2, name: "7 days" },
    { id: 3, name: "1 month" },
    { id: 4, name: "6 months" },
    { id: 5, name: "1 year" },
];

const Overview = ({}) => {
    const [timeShort, setTimeShort] = useState(timeOptionsShort[4]);
    const [timeLong, setTimeLong] = useState(timeOptionsLong[4]);

    return (
        <Card
            className="max-lg:overflow-hidden"
            title="Overview"
            headContent={
                <>
                    <Tabs
                        className="max-md:hidden"
                        items={timeOptionsShort}
                        value={timeShort}
                        setValue={setTimeShort}
                    />
                    <Select
                        className="hidden min-w-40 max-md:block"
                        value={timeLong}
                        onChange={setTimeLong}
                        options={timeOptionsLong}
                    />
                </>
            }
        >
            <div className="relative before:hidden after:hidden before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-8 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-3 after:w-8 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none max-lg:before:block max-lg:after:block">
                <div className="flex gap-8 p-5 pt-4 max-lg:-mx-3 max-lg:px-6 max-lg:overflow-auto max-lg:scrollbar-none">
                    {overview.map((item) => (
                        <Item value={item} key={item.id} />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Overview;
