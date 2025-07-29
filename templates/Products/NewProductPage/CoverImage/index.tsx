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
import Image from "@/style-reference/components/Image";
import Icon from "@/style-reference/components/Icon";

const CoverImage = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleChange = (file: File) => {
        setImages([...images, file]);
    };

    return (
        <Card
            classHead="!px-3"
            title="Cover image"
            headContent={
                <button className="group text-0" aria-label="Action button">
                    <Icon
                        className="-rotate-45 fill-t-secondary transition-colors group-hover:fill-t-primary"
                        name="arrow"
                    />
                </button>
            }
        >
            <div className="p-3">
                <FieldImage onChange={handleChange} />
                <div className="flex items-start mt-5">
                    <div className="grow">
                        <div className="mb-2 text-sub-title-1">
                            Bento Pro v 2.0 – Illustration Kit
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2">
                                <Image
                                    className="size-8 rounded-full opacity-100"
                                    src="/images/avatars/2.png"
                                    width={32}
                                    height={32}
                                    alt="Cover image"
                                />
                            </div>
                            <div className="text-body-2 text-t-secondary">
                                by&nbsp;
                                <span className="text-button text-t-primary">
                                    Hortense
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 ml-4 px-3 py-2.5 bg-secondary-04 rounded-xl text-button dark:text-shade-01">
                        $0.00
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CoverImage;
