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

const Demos = () => {
    const [liveDemo, setLiveDemo] = useState("");
    const [embedVideo, setEmbedVideo] = useState("");

    return (
        <Card classHead="!pl-3" title="Demos">
            <div className="flex flex-col gap-3 p-3">
                <Field
                    label="Live demo"
                    placeholder="ie. Bento Cards: User Interface"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={liveDemo}
                    onChange={(e) => setLiveDemo(e.target.value)}
                    required
                />
                <Field
                    label="Embed video"
                    placeholder="ie. Bento Cards: User Interface"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={embedVideo}
                    onChange={(e) => setEmbedVideo(e.target.value)}
                    required
                />
            </div>
        </Card>
    );
};

export default Demos;
