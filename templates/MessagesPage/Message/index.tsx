
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
import Image from "@/style-reference/components/Image";

type MessageType = {
    id: number;
    login: string;
    avatar: string;
    content: string;
    time: string;
    new: boolean;
};

type MessageProps = {
    value: MessageType;
    isActive: boolean;
    onClick: () => void;
};

const Message = ({ value, isActive, onClick }: MessageProps) => (
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
            <div className="flex items-center">
                <div className="text-sub-title-1">@{value.login}</div>
                <div className="ml-auto text-caption text-t-tertiary">
                    {value.time}
                </div>
                <div
                    className={`w-3 h-3 ml-3 rounded-full ${
                        value.new ? "bg-primary-02" : "bg-t-tertiary/50"
                    }`}
                ></div>
            </div>
            <div className="mt-1 truncate text-body-2 text-t-secondary">
                {value.content}
            </div>
        </div>
    </div>
);

export default Message;
