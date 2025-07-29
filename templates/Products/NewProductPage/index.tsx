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

import React from "react";
import Layout from "@/style-reference/components/Layout";
import ProductDetails from "./ProductDetails";
import Images from "./Images";
import CategoryAndAttributes from "./CategoryAndAttributes";
import Discussion from "./Discussion";
import CoverImage from "./CoverImage";
import UploadProductFiles from "./UploadProductFiles";
import Price from "./Price";
import Highlights from "./Highlights";
import CTA from "./CTA";
import Demos from "./Demos";

const NewProductPage = () => {
    return (
        <Layout title="New product" newProduct>
            <div className="flex max-lg:block">
                <div className="w-[calc(100%-33.75rem)] pr-3 max-4xl:w-[calc(100%-27.5rem)] max-2xl:w-[calc(100%-23rem)] max-lg:w-full max-lg:pr-0">
                    <ProductDetails />
                    <Images />
                    <CategoryAndAttributes />
                    <Discussion />
                </div>
                <div className="w-[33.75rem] max-4xl:w-[27.5rem] max-2xl:w-[23rem] max-lg:w-full max-lg:mt-3">
                    <CoverImage />
                    <UploadProductFiles />
                    <Price />
                    <Highlights />
                    <CTA />
                    <Demos />
                </div>
            </div>
        </Layout>
    );
};

export default NewProductPage;
