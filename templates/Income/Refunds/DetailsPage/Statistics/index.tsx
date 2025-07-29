
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
import Icon from "@/style-reference/components/Icon";
import Image from "@/style-reference/components/Image";
import Tooltip from "@/style-reference/components/Tooltip";

type ParamenterProps = {
    label: string;
    tooltip?: string;
    content: React.ReactNode;
};

const Paramenter = ({ label, tooltip, content }: ParamenterProps) => {
    return (
        <div className="flex justify-between items-center gap-8 px-8 py-5 border-t border-s-subtle max-2xl:px-5 max-lg:w-1/2 max-lg:even:border-l max-lg:even:border-s-subtle max-md:w-full max-md:min-h-13 max-md:p-3 max-md:even:border-l-0">
            <div className="flex items-center gap-2 text-body-2 text-t-secondary">
                {label}
                {tooltip && (
                    <Tooltip className="opacity-100" content={tooltip}>
                        <Icon className="!size-5 fill-[#6F767E]" name="info" />
                    </Tooltip>
                )}
            </div>
            <div className="text-button">{content}</div>
        </div>
    );
};

const Statistics = ({}) => {
    return (
        <div className="shrink-0 w-150 border-1 border-s-stroke2 rounded-4xl overflow-hidden max-4xl:w-132 max-3xl:w-120 max-2xl:w-100 max-lg:w-full">
            <div className="flex items-center gap-8 p-8 max-2xl:gap-4 max-2xl:p-5 max-md:p-3">
                <div className="shrink-0">
                    <Image
                        className="size-22 rounded-xl opacity-100 object-cover max-md:size-18"
                        src="/images/products/2.png"
                        width={88}
                        height={88}
                        alt=""
                    />
                </div>
                <div className="grow">
                    <div className="mb-2 label label-yellow">In progress</div>
                    <div className="text-h5 max-2xl:text-h6">
                        Dynamic UI Design Kit
                    </div>
                </div>
            </div>
            <div className="bg-shade-09/30 max-lg:flex max-lg:flex-wrap max-md:block dark:bg-shade-02">
                <Paramenter label="Request send" content="Aug 20, 2025" />
                <Paramenter label="Reason" content="Download link is broken" />
                <Paramenter
                    label="Product downloaded"
                    content={<div className="label label-green">Yes</div>}
                />
                <Paramenter label="Purchase date" content="July 01, 2025" />
                <Paramenter
                    label="Purchase code"
                    content="6373ads-hd73h-8373DS"
                />
                <Paramenter label="Request ID" content="8975ads-hd73h-8974DS" />
                <Paramenter
                    label="Market fee"
                    content="$7.28"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                />
                <Paramenter
                    label="Price"
                    content="$72.88"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                />
            </div>
        </div>
    );
};

export default Statistics;
