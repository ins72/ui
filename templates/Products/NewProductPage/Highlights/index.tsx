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
import Item from "./Item";

const Highlights = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");

    return (
        <Card classHead="!pl-3" title="Highlights">
            <div className="flex flex-wrap gap-3 p-3">
                <Item
                    placeholder="ie. 400+ components"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
                <Item
                    placeholder="ie. Free Google Fonts"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
                <Item
                    placeholder="ie. 300+ custom icons"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                />
                <Item
                    placeholder="ie. 800 premade templates"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                />
                <Item
                    placeholder="ie. 256+ illustrations"
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                />
            </div>
        </Card>
    );
};

export default Highlights;
