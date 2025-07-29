
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

import Button from "@/style-reference/components/Button";
import ShopItem from "@/style-reference/components/ShopItem";

import { shopItems } from "@/mocks/shopItems";

const Populars = ({}) => (
    <div className="">
        <div className="flex justify-between items-center">
            <div className="text-h4 max-md:text-h5">You may also like</div>
            <button isStroke as="link" href="/shop" aria-label="Action button">
                View all
            </Button>
        </div>
        <div className="flex flex-wrap mt-2 -mx-3 max-md:flex-nowrap max-md:mt-4 max-md:-mx-4 max-md:overflow-auto max-md:before:shrink-0 max-md:before:w-4 max-md:after:shrink-0 max-md:after:w-4">
            {shopItems.slice(0, 3).map((item) => (
                <ShopItem
                    className="w-[calc(33.333%-1.5rem)] mt-6 mx-3 max-lg:w-[calc(50%-1.5rem)] max-lg:nth-3:hidden max-md:shrink-0 max-md:w-79 max-md:m-0 max-md:mr-3 max-md:nth-3:flex max-md:last:mr-0"
                    value={item}
                    key={item.id}
                />
            ))}
        </div>
    </div>
);

export default Populars;
