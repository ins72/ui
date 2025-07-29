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
import FieldImage from "@/style-reference/components/FieldImage";

const Images = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleChangePreviews = (file: File) => {
        setImages([...images, file]);
    };

    const handleChangeFullPreviews = (file: File) => {
        setImages([...images, file]);
    };

    return (
        <Card title="Images">
            <div className="flex flex-col gap-8 px-5 pb-5 max-lg:px-3 max-lg:pb-3">
                <FieldImage
                    label="Previews"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    onChange={handleChangePreviews}
                />
                <FieldImage
                    label="Full previews"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    onChange={handleChangeFullPreviews}
                />
            </div>
        </Card>
    );
};

export default Images;
