
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
import Table from "@/style-reference/components/Table";
import TableRow from "@/style-reference/components/TableRow";
import TableProductCell from "@/style-reference/components/TableProductCell";
import Percentage from "@/style-reference/components/Percentage";
import Icon from "@/style-reference/components/Icon";
import DeleteItems from "@/style-reference/components/DeleteItems";
import ShareProduct from "@/style-reference/components/ShareProduct";
import { ProductMarket } from "@/types/product";

const tableHead = ["Product", "Status", "Price", "Sales", "Views", "Like"];

type MarketProps = {
    items: ProductMarket[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
    selectAll: boolean;
    onSelectAll: () => void;
};

const Cell = ({ value, percentage }: { value: string; percentage: number }) => (
    <td className="max-lg:hidden">
        <div className="inline-flex items-center gap-2">
            <div className="min-w-8">{value}</div>
            <div className="relative w-11 h-1.5">
                <div
                    className="absolute top-0 left-0 bottom-0 rounded-[2px] bg-shade-07/40"
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    </td>
);

const Market = ({
    selectedRows,
    onRowSelect,
    selectAll,
    onSelectAll,
    items,
}: MarketProps) => {
    return (
        <Table
            selectAll={selectAll}
            onSelectAll={onSelectAll}
            cellsThead={tableHead.map((head) => (
                <th
                    className="max-lg:nth-5:hidden max-lg:nth-6:hidden max-lg:nth-7:hidden"
                    key={head}
                >
                    {head}
                </th>
            ))}
        >
            {items.map((item) => (
                <TableRow
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                >
                    <TableProductCell
                        title={item.title}
                        details={item.details}
                        image={item.image}
                        mobileContent={
                            <>
                                <NumericFormat
                                    className="min-w-13 mr-2"
                                    value={item.price}
                                    thousandSeparator=","
                                    decimalScale={2}
                                    fixedDecimalScale
                                    displayType="text"
                                    prefix="$"
                                />
                                <Percentage value={item.sales.percentage} />
                            </>
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
                        <div
                            className={`inline-flex items-center h-7 px-1.75 rounded-lg border text-button leading-none capitalize ${
                                item.active ? "label-green" : "label-red"
                            }`}
                        >
                            {item.active ? "Active" : "Offline"}
                        </div>
                    </td>
                    <td className="max-md:hidden">
                        <NumericFormat
                            value={item.price}
                            thousandSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            displayType="text"
                            prefix="$"
                        />
                    </td>
                    <td className="max-lg:hidden">
                        <div className="inline-flex items-center gap-2">
                            <NumericFormat
                                className="min-w-13"
                                value={item.sales.value}
                                thousandSeparator=","
                                fixedDecimalScale
                                displayType="text"
                                prefix="$"
                            />
                            <Percentage value={item.sales.percentage} />
                        </div>
                    </td>
                    <Cell
                        value={item.views.value}
                        percentage={item.views.percentage}
                    />
                    <Cell
                        value={item.likes.value}
                        percentage={item.likes.percentage}
                    />
                </TableRow>
            ))}
        </Table>
    );
};

export default Market;
