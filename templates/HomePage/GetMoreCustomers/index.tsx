
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
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";

const socials = [
    {
        icon: "twitter",
        href: "https://x.com/ui8",
    },
    {
        icon: "facebook",
        href: "https://www.facebook.com/ui8.net/",
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/ui8net/",
    },
    {
        icon: "threads",
        href: "https://www.threads.net/@ui8net",
    },
];

const GetMoreCustomers = ({}) => {
    return (
        <Card title="Get more customers">
            <div className="mb-6 px-5 text-body-2 text-t-secondary max-lg:px-3">
                Fifty percent of new customers explore products because the
                author shares their work on social media. <br></br>Start earning
                now! 🔥
            </div>
            <div className="flex gap-3">
                {socials.map((social, index) => (
                    <button
                        className="flex-1 !px-0"
                        icon={social.icon}
                        key={index}
                        isStroke
                        as="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    / aria-label="Action button">
                ))}
            </div>
        </Card>
    );
};

export default GetMoreCustomers;
