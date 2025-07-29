"use client";


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

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/style-reference/components/Button";
import Image from "@/style-reference/components/Image";
import Editor from "@/style-reference/components/Editor";
import Contacts from "./Contacts";
import PurchaseHistory from "./PurchaseHistory";

type DetailsProps = {
    onBack: () => void;
};

const Details = ({ onBack }: DetailsProps) => {
    const router = useRouter();
    const [content, setContent] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-3">
                <button
                    className="mr-auto max-md:hidden"
                    isStroke
                    onClick={() = aria-label="Action button"> router.back()}
                >
                    Back
                </Button>
                <button
                    className="!hidden rotate-180 mr-auto max-md:!flex"
                    icon="arrow"
                    isStroke
                    isCircle
                    onClick={onBack}
                / aria-label="Action button">
                <button isStroke aria-label="Action button">Follow</Button>
                <button as="link" href="/messages" isBlack aria-label="Action button">
                    Message
                </Button>
            </div>
            <div className="flex items-center">
                <div className="shrink-0">
                    <Image
                        className="size-20 rounded-full opacity-100 object-cover"
                        src="/images/avatars/2.png"
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>
                <div className="grow pl-6.5 max-lg:pl-5">
                    <div className="text-h4 max-lg:text-h5">Jack Flynn</div>
                    <div className="text-[1.125rem] leading-[2rem] font-semibold text-t-secondary/80 max-lg:text-body-2">
                        @celestialwanderer
                    </div>
                </div>
            </div>
            <Editor
                label="Private notes"
                tooltip="Maximum 100 characters. No HTML or emoji allowed"
                content={content}
                onChange={setContent}
            />
            <Contacts />
            <PurchaseHistory />
        </div>
    );
};

export default Details;
