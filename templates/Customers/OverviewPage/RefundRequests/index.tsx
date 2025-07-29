
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
import Link from "next/link";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";
import Button from "@/style-reference/components/Button";

const RefundRequests = ({}) => {
    return (
        <Card classHead="!pl-3" title="Refund requests">
            <div className="p-3 pt-0">
                <div className="flex items-center mb-8">
                    <div className="flex justify-center items-center shrink-0 size-16 rounded-full bg-b-surface1">
                        <Icon className="fill-t-primary" name="bag" />
                    </div>
                    <div className="grow pl-5 text-body-2 font-medium text-t-secondary [&_a]:text-[0.9375rem] [&_a]:leading-[1.5rem] [&_a]:font-semibold [&_a]:text-t-primary [&_a]:transition-colors [&_a]:hover:text-shade-05 max-2xl:pl-3 max-lg:pl-5 dark:[&_a]:hover:text-shade-08/90">
                        You have{" "}
                        <Link href="/income/refunds">
                            52 open refund requests
                        </Link>{" "}
                        to action. This includes{" "}
                        <Link href="/income/refunds">8 new requests.</Link> 👀
                    </div>
                </div>
                <button className="w-full" href="/" as="link" isStroke aria-label="Action button">
                    Review refund requests
                </Button>
            </div>
        </Card>
    );
};

export default RefundRequests;
