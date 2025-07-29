
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

import { NumericFormat } from "react-number-format";
import millify from "millify";
import Table from "@/style-reference/components/Table";
import TableRow from "@/style-reference/components/TableRow";
import TableProductCell from "@/style-reference/components/TableProductCell";
import Percentage from "@/style-reference/components/Percentage";
import Icon from "@/style-reference/components/Icon";
import DeleteItems from "@/style-reference/components/DeleteItems";
import ShareProduct from "@/style-reference/components/ShareProduct";
import Legend from "./Legend";
import ProgressBar from "./ProgressBar";
import { ProductStatistics } from "@/types/product";

type ProductsStatisticsProps = {
    items: ProductStatistics[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
    selectAll: boolean;
    onSelectAll: () => void;
    isViewers?: boolean;
};

const ProductsStatistics = ({
    selectedRows,
    onRowSelect,
    selectAll,
    onSelectAll,
    items,
    isViewers,
}: ProductsStatisticsProps) => {
    return (
        <>
            <Legend
                className="hidden pt-2 px-3 max-lg:flex max-md:pb-2"
                data={items[0].trafficSource}
            />
            <Table
                selectAll={selectAll}
                onSelectAll={onSelectAll}
                cellsThead={
                    <>
                        <th>Product</th>
                        <th>{isViewers ? "Views" : "Impressions"}</th>
                        <th className="max-lg:hidden">
                            <div className="inline-flex items-center w-full">
                                {isViewers ? "Viewers" : "Traffic source"}
                                <Legend
                                    className="max-lg:hidden"
                                    data={items[0].trafficSource}
                                />
                            </div>
                        </th>
                    </>
                }
            >
                {items.map((item) => (
                    <TableRow
                        className="max-md:flex max-md:flex-col"
                        selectedRows={selectedRows.includes(item.id)}
                        onRowSelect={() => onRowSelect(item.id)}
                        key={item.id}
                    >
                        <TableProductCell
                            title={item.title}
                            details={item.details}
                            image={item.image}
                            mobileContent={
                                <div className="inline-flex items-center gap-2">
                                    <div className="min-w-13">
                                        {item.value < 9999 ? (
                                            <NumericFormat
                                                value={item.value}
                                                thousandSeparator=","
                                                fixedDecimalScale
                                                displayType="text"
                                            />
                                        ) : (
                                            millify(item.value, {
                                                lowercase: true,
                                            })
                                        )}
                                    </div>
                                    <Percentage value={item.percentage} />
                                </div>
                            }
                        >
                            <button className="action" aria-label="Action button">
                                <Icon name="edit" />
                                Edit
                            </button>
                            <DeleteItems onDelete={() => {}} />
                            <ShareProduct
                                title={item.title}
                                details={item.details}
                                image={item.image}
                            />
                        </TableProductCell>
                        <td className="max-md:hidden">
                            <div className="inline-flex items-center gap-2">
                                <div className="min-w-13">
                                    {item.value < 9999 ? (
                                        <NumericFormat
                                            value={item.value}
                                            thousandSeparator=","
                                            fixedDecimalScale
                                            displayType="text"
                                        />
                                    ) : (
                                        millify(item.value, {
                                            lowercase: true,
                                        })
                                    )}
                                </div>
                                <Percentage value={item.percentage} />
                            </div>
                        </td>
                        <td className="w-160 max-4xl:w-131 max-2xl:w-100 max-xl:w-96 max-lg:w-46 max-md:w-full max-md:!pt-1 max-md:!pb-4">
                            <ProgressBar
                                percentage={item.traffic}
                                data={item.trafficSource}
                            />
                        </td>
                    </TableRow>
                ))}
            </Table>
        </>
    );
};

export default ProductsStatistics;
