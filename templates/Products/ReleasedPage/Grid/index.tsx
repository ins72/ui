
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

import GridProduct from "@/style-reference/components/GridProduct";
import Icon from "@/style-reference/components/Icon";
import DeleteItems from "@/style-reference/components/DeleteItems";
import UnpublishItems from "@/style-reference/components/UnpublishItems";
import { ProductReleased } from "@/types/product";

type GridProps = {
    items: ProductReleased[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
};

const Grid = ({ selectedRows, onRowSelect, items }: GridProps) => {
    return (
        <div className="flex flex-wrap max-md:-mt-3">
            {items.map((item) => (
                <GridProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                    actions={
                        <>
                            <button className="action" aria-label="Action button">
                                <Icon name="edit" />
                                Edit
                            </button>
                            <DeleteItems onDelete={() => {}} />
                            <UnpublishItems
                                onClick={() => {}}
                                image={item.image}
                            />
                        </>
                    }
                >
                    <div className="flex items-center">
                        <Icon
                            className="mr-2 !size-5 fill-t-secondary transition-colors group-hover:fill-chart-yellow"
                            name="star-fill"
                        />
                        <div className="mr-1 text-button">
                            {item.rating.value}
                        </div>
                        <div className="text-body-2 text-t-secondary">
                            ({item.rating.counter})
                        </div>
                    </div>
                </GridProduct>
            ))}
        </div>
    );
};

export default Grid;
