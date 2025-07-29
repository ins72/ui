
export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
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
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
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
import AnimateHeight from "react-animate-height";

type ItemProps = {
    value: {
        id: number;
        title: string;
        content: string;
    };
    isActive: boolean;
    onClick: () => void;
};

const Item = ({ value, isActive, onClick }: ItemProps) => {
    return (
        <div className="py-3 border-b border-s-subtle">
            <div
                className="flex items-center gap-6 py-5 text-h6 cursor-pointer"
                onClick={onClick}
            >
                {value.title}
                <div className="relative shrink-0 w-6 h-6 ml-auto">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-3 h-0.5 rounded-full bg-t-secondary"></div>
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-1/2 w-0.5 h-3 rounded-full bg-t-secondary transition-transform ${
                            isActive ? "rotate-90" : ""
                        }`}
                    ></div>
                </div>
            </div>
            <AnimateHeight duration={500} height={isActive ? "auto" : 0}>
                <div className="pb-5">{value.content}</div>
            </AnimateHeight>
        </div>
    );
};

export default Item;
