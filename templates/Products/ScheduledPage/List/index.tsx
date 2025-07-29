
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

import Table from "@/style-reference/components/Table";
import TableRow from "@/style-reference/components/TableRow";
import TableProductCell from "@/style-reference/components/TableProductCell";
import Icon from "@/style-reference/components/Icon";
import DeleteItems from "@/style-reference/components/DeleteItems";
import ScheduleProduct from "@/style-reference/components/ScheduleProduct";
import { ProductDraft } from "@/types/product";

const tableHead = ["Product", "Price", "Last edited"];

type ListProps = {
    items: ProductDraft[];
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
                <th key={head}>{head}</th>
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
                        <button className="action" aria-label="Action button">
                            <Icon name="edit" />
                            Edit
                        </button>
                        <DeleteItems onDelete={() => {}} />
                        <ScheduleProduct
                            title={item.title}
                            details={item.category}
                            image={item.image}
                            price={item.price}
                            reSchedule
                        />
                    </TableProductCell>
                    <td className="min-w-40 max-lg:min-w-auto max-md:hidden">
                        <div
                            className={`label ${
                                item.price === 0
                                    ? "label-gray text-t-primary"
                                    : "label-green"
                            }`}
                        >
                            ${item.price}
                        </div>
                    </td>
                    <td className="text-t-secondary max-md:hidden">
                        {item.date}
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default List;
