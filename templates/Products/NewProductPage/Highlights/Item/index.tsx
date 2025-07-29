
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

import React from "react";
import Field from "@/style-reference/components/Field";
import Icon from "@/style-reference/components/Icon";

type ItemProps = {
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    placeholder: string;
};

const Item = ({ value, onChange, placeholder }: ItemProps) => {
    return (
        <Field
            className="w-full"
            classInput={`px-12 ${value !== "" ? "!border-s-highlight" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        >
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-0">
                <Icon
                    className={`${
                        value === "" ? "fill-t-tertiary/80" : "fill-primary-02"
                    }`}
                    name={value === "" ? "check-circle" : "check-circle-fill"}
                />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col justify-center items-center gap-[3px] w-6 h-6 opacity-50">
                <div className="w-3.5 h-[1.5px] bg-t-tertiary rounded-full"></div>
                <div className="w-3.5 h-[1.5px] bg-t-tertiary rounded-full"></div>
            </div>
        </Field>
    );
};

export default Item;
