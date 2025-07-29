
export const metadata = {
  title: "CRM Software | Customer Relationship Management | MEWAYZ",
  description: "Streamline customer relationships with MEWAYZ's advanced CRM. Lead tracking, sales pipeline management, customer analytics, and automated workflows.",
  keywords: "CRM software, customer relationship management, lead tracking, sales pipeline, customer analytics, sales automation",
  openGraph: {
    title: "CRM Software | Customer Relationship Management | MEWAYZ",
    description: "Streamline customer relationships with MEWAYZ's advanced CRM. Lead tracking, sales pipeline management, customer analytics, and automated workflows.",
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
    title: "CRM Software | Customer Relationship Management | MEWAYZ",
    description: "Streamline customer relationships with MEWAYZ's advanced CRM. Lead tracking, sales pipeline management, customer analytics, and automated workflows.",
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

import React from "react";
import Image from "@/style-reference/components/Image";

type CustomerType = {
    name: string;
    email: string;
    avatar: string;
};

type CustomerProps = {
    value: CustomerType;
    isActive: boolean;
    onClick: () => void;
};

const Customer = ({ value, isActive, onClick }: CustomerProps) => (
    <div
        className="group relative flex items-center p-3 cursor-pointer"
        onClick={onClick}
    >
        <div
            className={`box-hover ${isActive ? "visible opacity-100" : ""}`}
        ></div>
        <div className="relative z-2 shrink-0">
            <Image
                className="size-12 rounded-full opacity-100 object-cover"
                src={value.avatar}
                width={48}
                height={48}
                alt=""
            />
        </div>
        <div className="relative z-2 w-[calc(100%-3rem)] pl-5 max-lg:pl-4">
            <div className="truncate text-sub-title-1">{value.name}</div>
            <div className="truncate text-body-2 text-t-secondary/80">
                {value.email}
            </div>
        </div>
    </div>
);

export default Customer;
