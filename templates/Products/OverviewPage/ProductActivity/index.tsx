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
import Percentage from "@/style-reference/components/Percentage";
import Tabs from "@/style-reference/components/Tabs";

import { productActivity } from "@/mocks/products";

const durations = [
    { id: 1, name: "Last 2 weeks" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const categories = [
    { id: 1, name: "Product" },
    { id: 2, name: "Views" },
    { id: 3, name: "Likes" },
];

const ProductActivity = ({}) => {
    const [duration, setDuration] = useState(durations[0]);
    const [category, setCategory] = useState(categories[0]);

    return (
        <Card
            className="col-left mb-0 max-lg:mb-3"
            title="Product activity"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <Tabs
                className="hidden px-3 max-md:flex"
                classButton="flex-1"
                items={categories}
                value={category}
                setValue={setCategory}
            />
            <div className="p-5 pb-0 max-md:pt-4 max-lg:px-3">
                <div className="flex items-center gap-6 h-14 text-caption text-t-tertiary/80">
                    <div className="flex-1">Week</div>
                    <div
                        className={`flex-1 ${
                            category.id === 1 ? "max-md:block" : "max-md:hidden"
                        }`}
                    >
                        Products
                    </div>
                    <div
                        className={`flex-1 ${
                            category.id === 2 ? "max-md:block" : "max-md:hidden"
                        }`}
                    >
                        Views
                    </div>
                    <div
                        className={`flex-1 ${
                            category.id === 3 ? "max-md:block" : "max-md:hidden"
                        }`}
                    >
                        Likes
                    </div>
                    <div className="flex-1 max-2xl:hidden">Comments</div>
                </div>
                {productActivity.map((item) => (
                    <div
                        className="flex items-center gap-6 h-17 border-t border-s-subtle text-body-2 last:h-19"
                        key={item.id}
                    >
                        <div className="flex items-center flex-1">
                            {item.week}
                        </div>
                        <div
                            className={`flex items-center gap-2 flex-1 ${
                                category.id === 1
                                    ? "max-md:flex"
                                    : "max-md:hidden"
                            }`}
                        >
                            {item.products.counter}
                            {item.products.percentage && (
                                <Percentage value={item.products.percentage} />
                            )}
                        </div>
                        <div
                            className={`flex items-center gap-2 flex-1 ${
                                category.id === 2
                                    ? "max-md:flex"
                                    : "max-md:hidden"
                            }`}
                        >
                            {item.views.counter}
                            {item.views.percentage && (
                                <Percentage value={item.views.percentage} />
                            )}
                        </div>
                        <div
                            className={`flex items-center gap-2 flex-1 ${
                                category.id === 3
                                    ? "max-md:flex"
                                    : "max-md:hidden"
                            }`}
                        >
                            {item.likes.counter}
                            {item.likes.percentage && (
                                <Percentage value={item.likes.percentage} />
                            )}
                        </div>
                        <div className="flex items-center gap-2 flex-1 max-2xl:hidden">
                            {item.comments.counter}
                            {item.comments.percentage && (
                                <Percentage value={item.comments.percentage} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ProductActivity;
