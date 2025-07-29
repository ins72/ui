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
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Modal from "@/style-reference/components/Modal";
import Select from "@/style-reference/components/Select";
import Field from "@/style-reference/components/Field";
import Switch from "@/style-reference/components/Switch";
import Tooltip from "@/style-reference/components/Tooltip";

const categories = [
    { id: 1, name: "All categories" },
    { id: 2, name: "UI design" },
    { id: 3, name: "Illustration" },
    { id: 4, name: "Branding" },
    { id: 5, name: "Animation" },
];

const ratings = [
    { id: 1, name: "4.0 and up" },
    { id: 2, name: "3.0 to 4.0" },
    { id: 3, name: "2.0 to 3.0" },
    { id: 4, name: "1.0 to 2.0" },
    { id: 5, name: "1.0 and down" },
];

const sortOptions = [
    { id: 1, name: "Join date" },
    { id: 2, name: "Sales" },
    { id: 3, name: "Newest" },
    { id: 4, name: "Oldest" },
];

const Filters = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState(categories[0]);
    const [rating, setRating] = useState(ratings[0]);
    const [sort, setSort] = useState(sortOptions[0]);
    const [location, setLocation] = useState("");
    const [featuredCreator, setFeaturedCreator] = useState(true);

    return (
        <>
            <button
                className="max-lg:hidden"
                isWhite
                isCircle
                onClick={() = aria-label="Action button"> setIsOpen(true)}
            >
                <Icon name="filters" />
            </Button>
            <Modal
                classWrapper="!w-85"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                isSlidePanel
            >
                <div className="flex items-center h-23 pl-5 pr-20 pt-5 pb-6 text-h5">
                    Filter
                </div>
                <div className="flex flex-col gap-6 h-[calc(100svh-5.75rem)] px-5 pb-5 overflow-y-auto">
                    <Select
                        classButton="bg-b-surface2"
                        label="Category"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={category}
                        onChange={setCategory}
                        options={categories}
                    />
                    <Select
                        classButton="bg-b-surface2"
                        label="Author rating"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={rating}
                        onChange={setRating}
                        options={ratings}
                    />
                    <Select
                        classButton="bg-b-surface2"
                        label="Sort by"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={sort}
                        onChange={setSort}
                        options={sortOptions}
                    />
                    <Field
                        classInput="bg-b-surface2"
                        label="Location"
                        placeholder="Enter location"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <div className="flex items-center h-12 gap-4">
                        <div className="flex items-center mr-auto">
                            <div className="text-button">Featured creator</div>
                            <Tooltip
                                className="ml-1.5"
                                content="Maximum 100 characters. No HTML or emoji allowed"
                            />
                        </div>
                        <Switch
                            checked={featuredCreator}
                            onChange={() =>
                                setFeaturedCreator(!featuredCreator)
                            }
                        />
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <button className="flex-1" isStroke aria-label="Action button">
                            Reset
                        </Button>
                        <button className="flex-1" isBlack aria-label="Action button">
                            Apply filter
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Filters;
