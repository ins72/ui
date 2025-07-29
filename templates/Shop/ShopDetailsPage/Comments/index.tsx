"use client";


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

import { useState } from "react";
import Tabs from "@/style-reference/components/Tabs";
import Image from "@/style-reference/components/Image";
import Message from "@/style-reference/components/Message";
import Answer from "./Answer";

import { comments } from "@/mocks/comments";

const sortOptions = [
    { id: 1, name: "Newest" },
    { id: 2, name: "Top comment" },
];

const Comments = ({}) => {
    const [sort, setSort] = useState(sortOptions[0]);
    const [message, setMessage] = useState("");

    return (
        <div className="card px-15 py-12 max-lg:p-8 max-md:px-4 max-md:py-6">
            <div className="flex items-center mb-10">
                <div className="mr-auto text-h4 max-md:text-h5">Comments</div>
                <Tabs
                    className="max-md:hidden"
                    items={sortOptions}
                    value={sort}
                    setValue={setSort}
                />
            </div>
            <div className="flex flex-col gap-8">
                {comments.slice(0, 3).map((comment) => (
                    <div className="flex items-start" key={comment.id}>
                        <div className="shrink-0">
                            <Image
                                className="size-12 rounded-full object-cover opacity-100"
                                src={comment.avatar}
                                width={48}
                                height={48}
                                alt={comment.author}
                            />
                        </div>
                        <div className="w-[calc(100%-3rem)] pl-5 max-md:pl-3">
                            <div className="flex flex-wrap items-center text-sub-title-1">
                                <div className="mr-3">{comment.author}</div>
                                <div className="mr-2 text-t-secondary/80">
                                    @{comment.login}
                                </div>
                                <div className="flex justify-center items-center w-3 h-3 mr-2">
                                    <div className="w-0.5 h-0.5 rounded-full bg-t-tertiary/50"></div>
                                </div>
                                <div className="text-t-secondary/80">
                                    {comment.time}
                                </div>
                            </div>
                            <div className="text-body-2 text-t-primary/80">
                                {comment.content}
                                {comment.id === 2 && <Answer />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Message
                className="mt-8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoFocus={false}
            />
        </div>
    );
};

export default Comments;
