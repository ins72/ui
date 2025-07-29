
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

import Link from "next/link";
import { NumericFormat } from "react-number-format";
import Table from "@/style-reference/components/Table";
import TableRow from "@/style-reference/components/TableRow";
import TableProductCell from "@/style-reference/components/TableProductCell";
import Icon from "@/style-reference/components/Icon";
import Image from "@/style-reference/components/Image";
import { Refund } from "@/types/refund";

const tableHead = ["Product", "Status", "Price", "Time", "Customer"];

type ListProps = {
    items: Refund[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
    selectAll: boolean;
    onSelectAll: () => void;
};

const List = ({
    selectedRows,
    onRowSelect,
    selectAll,
    onSelectAll,
    items,
}: ListProps) => {
    return (
        <Table
            selectAll={selectAll}
            onSelectAll={onSelectAll}
            cellsThead={tableHead.map((head) => (
                <th
                    className="max-lg:nth-5:hidden max-lg:last:hidden"
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
                    >
                        <Link className="action" href="/income/refunds/details">
                            <Icon name="edit" />
                            Detail
                        </Link>
                        <button className="action" aria-label="Action button">
                            <Icon name="trash" />
                            Refund
                        </button>
                        <button className="action" aria-label="Action button">
                            <Icon name="chain" />
                            Decline
                        </button>
                    </TableProductCell>
                    <td className="max-md:hidden">
                        <div
                            className={`label ${
                                item.status === "in progress"
                                    ? "label-yellow"
                                    : item.status === "closed"
                                    ? "label-gray"
                                    : "label-green"
                            }`}
                        >
                            {item.status.charAt(0).toUpperCase() +
                                item.status.slice(1)}
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
                    <td className="max-lg:hidden">{item.date}</td>
                    <td className="max-lg:hidden">
                        <div className="inline-flex items-center gap-3">
                            <div className="shrink-0 rounded-full overflow-hidden">
                                <Image
                                    className="size-9 object-cover"
                                    src={item.avatar}
                                    width={36}
                                    height={36}
                                    alt={item.name}
                                />
                            </div>
                            <div className="">{item.name}</div>
                        </div>
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default List;
