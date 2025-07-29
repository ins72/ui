"use client";


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

import { useState } from "react";
import { NumericFormat } from "react-number-format";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Image from "@/style-reference/components/Image";
import Message from "@/style-reference/components/Message";
import Chat from "./Chat";

const Details = ({}) => {
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="flex items-center px-4 py-3.5 border border-s-subtle rounded-[1.25rem]">
                <div className="shrink-0">
                    <Image
                        className="size-12 rounded-full opacity-100 object-cover"
                        src="/images/avatars/1.png"
                        width={48}
                        height={48}
                        alt=""
                    />
                </div>
                <div className="grow pl-5">
                    <div className="flex items-center gap-3 text-sub-title-1 max-lg:block">
                        <div>Orval Casper</div>
                        <div className="text-t-secondary/80">@orvalcasper</div>
                    </div>
                    <div className="flex items-center gap-8 mt-2 max-lg:hidden">
                        <div className="flex items-center gap-3 text-body-2">
                            <Icon className="fill-t-secondary" name="profile" />
                            15 Sep 2044
                        </div>
                        <div className="flex items-center gap-3 text-body-2">
                            <Icon className="fill-t-secondary" name="bag" />
                            <NumericFormat
                                value={1256}
                                thousandSeparator=","
                                decimalScale={2}
                                fixedDecimalScale
                                displayType="text"
                                prefix="$"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="shrink-0 ml-8"
                    icon="trash-think"
                    isStroke
                    isCircle
                / aria-label="Action button">
            </div>
            <Chat />
            <Message
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoFocus={false}
            />
        </>
    );
};

export default Details;
