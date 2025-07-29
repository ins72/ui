
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
import Icon from "@/style-reference/components/Icon";

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

const Contacts = ({}) => (
    <div>
        <div className="flex flex-wrap justify-between gap-4 max-md:gap-3">
            <div className="flex items-center gap-3 text-body-2">
                <Icon className="fill-t-secondary" name="envelope-think" />
                email@email.com
            </div>
            <div className="flex items-center gap-3 text-body-2 max-lg:order-3">
                <Icon className="fill-t-secondary" name="earth" />
                olivia@website.com
            </div>
            <div className="flex gap-2">
                {socials.map((social, index) => (
                    <a
                        className="group flex items-center justify-center w-9 h-9"
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                            name={social.icon}
                        />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Contacts;
