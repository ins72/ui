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
import Field from "@/style-reference/components/Field";
import Icon from "@/style-reference/components/Icon";
import Select from "@/style-reference/components/Select";
import Switch from "@/style-reference/components/Switch";

const promos = [
    { id: 1, name: "50% (max)" },
    { id: 2, name: "25% (max)" },
    { id: 3, name: "10% (max)" },
];

const Price = () => {
    const [price, setPrice] = useState("");
    const [promo, setPromo] = useState(promos[0]);
    const [promoToggle, setPromoToggle] = useState(true);

    return (
        <Card classHead="!pl-3" title="Price">
            <div className="p-3">
                <div className="flex gap-3">
                    <div className="flex-1">
                        <Field
                            classInput="pl-12.5"
                            label="Price (USD)"
                            placeholder="98"
                            tooltip="Maximum 100 characters. No HTML or emoji allowed"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 left-1 w-10 h-10 flex items-center justify-center bg-secondary-04 rounded-full pointer-events-none">
                                <Icon
                                    className="fill-black"
                                    name="usd-circle"
                                />
                            </div>
                        </Field>
                    </div>
                    <div className="relative flex-1">
                        <Switch
                            className="absolute -top-1 right-0"
                            checked={promoToggle}
                            onChange={() => setPromoToggle(!promoToggle)}
                        />
                        <Select
                            label="Promo"
                            tooltip="Maximum 100 characters. No HTML or emoji allowed"
                            placeholder="Select category"
                            value={promo}
                            onChange={setPromo}
                            options={promos}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Price;
