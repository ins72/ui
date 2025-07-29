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
import { Field, Radio, RadioGroup } from "@headlessui/react";
import Modal from "@/style-reference/components/Modal";
import Button from "@/style-reference/components/Button";
import Image from "next/image";

const statuses = ["Active", "Deactive"];

type SetProductsStatusProps = {
    counter: number;
};

const SetProductsStatus = ({ counter }: SetProductsStatusProps) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(statuses[0]);

    return (
        <>
            <button className="ml-3" isStroke onClick={() = aria-label="Action button"> setOpen(true)}>
                Set status
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex justify-center items-center size-16 mb-8 bg-shade-08 rounded-full">
                    <Image
                        className="size-6 opacity-100"
                        src="/images/icons/check-square.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className="mb-4 text-h4 max-md:text-h5">
                    Set products status
                </div>
                <div className="mb-8 text-body-2 font-medium text-t-tertiary">
                    You’re changing the status of{" "}
                    {counter > 1 ? `${counter} products` : "product"} to{" "}
                    <span className="text-primary-02">
                        {selected === "Active" ? "Active" : "Deactive"}
                    </span>
                    . This action can be changed at any time.
                </div>
                <RadioGroup
                    className="flex space-x-2 p-0.5 border border-s-stroke2 rounded-full"
                    value={selected}
                    onChange={setSelected}
                >
                    {statuses.map((status) => (
                        <Field key={status} className="flex-1">
                            <Radio
                                className="flex justify-center items-center h-11 border border-transparent rounded-full text-button text-t-secondary cursor-pointer transition-colors data-[hover]:text-t-primary data-[checked]:bg-primary-02/10 data-[checked]:border-primary-02/15 data-[checked]:!text-primary-02"
                                value={status}
                            >
                                {status}
                            </Radio>
                        </Field>
                    ))}
                </RadioGroup>
            </Modal>
        </>
    );
};

export default SetProductsStatus;
