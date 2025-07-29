
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
import Image from "@/style-reference/components/Image";
import Icon from "@/style-reference/components/Icon";
import LikeButton from "@/style-reference/components/LikeButton";
import DeleteItems from "@/style-reference/components/DeleteItems";

const Answer = ({}) => (
    <div className="relative flex mt-4 before:absolute before:-left-11.5 before:-top-3.5 before:w-8.5 before:h-8 before:border-l before:border-b before:border-s-stroke2 before:rounded-bl-[0.625rem]">
        <div className="shrink-0">
            <Image
                className="size-8 rounded-full object-cover opacity-100"
                src="/images/avatars/4.png"
                width={32}
                height={32}
                alt=""
            />
        </div>
        <div className="w-[calc(100%-2rem)] pl-4">
            <div className="flex items-center">
                <div className="text-sub-title-1">Dash</div>
                <div className="ml-3 text-body-2 text-t-secondary/80">
                    @dash
                </div>
                <div className="flex justify-center items-center w-3 h-3 mx-2">
                    <div className="w-0.5 h-0.5 rounded-full bg-t-tertiary/50"></div>
                </div>
                <div className="text-body-2 text-t-secondary/80">1s</div>
            </div>
            <div className="text-t-primary/80">
                Hey @samstoo! 😊 We&apos;re working on cool stuff in the
                cybersecurity space. Stay tuned, and thanks for the awesome
                idea! 🔍✨
            </div>
            <div className="flex flex-wrap gap-2 -ml-1 mt-2">
                <button className="action" aria-label="Action button">
                    <Icon name="edit" />
                    Reply
                </button>
                <LikeButton className="max-md:hidden" />
                <DeleteItems
                    counter={1}
                    onDelete={() => {}}
                    content="This will definitely delete this comment, and all data will be removed. This action cannot be undone."
                />
            </div>
        </div>
    </div>
);

export default Answer;
