"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import DataTable from "@/style-reference/components/DataTable";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";

export default function EcommerceProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Digital Course",
      category: "Education",
      price: 99.99,
      stock: 50,
      status: "Active",
      sales: 142,
      image: "/product1.jpg"
    },
    {
      id: 2,
      name: "E-book Guide", 
      category: "Books",
      price: 29.99,
      stock: 100,
      status: "Active",
      sales: 89,
      image: "/product2.jpg"
    },
    {
      id: 3,
      name: "Premium Template",
      category: "Design",
      price: 49.99,
      stock: 25,
      status: "Draft",
      sales: 67,
      image: "/product3.jpg"
    }
  ]);

  const columns = [
    {
      key: "name",
      title: "Product Name",
      sortable: true,
      filterable: true,
      render: (value: string, record: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-01 to-primary-02 rounded-lg flex items-center justify-center">
            <Icon name="package" className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-medium text-t-primary">{value}</div>
            <div className="text-sm text-t-secondary">{record.category}</div>
          </div>
        </div>
      )
    },
    {
      key: "price",
      title: "Price",
      sortable: true,
      render: (value: number) => `$${value.toFixed(2)}`
    },
    {
      key: "stock",
      title: "Stock",
      sortable: true,
      render: (value: number) => (
        <span className={value > 20 ? "text-green-600" : value > 5 ? "text-yellow-600" : "text-red-600"}>
          {value} units
        </span>
      )
    },
    {
      key: "status",
      title: "Status",
      render: (value: string) => (
        <Badge variant={value === "Active" ? "green" : "gray"}>
          {value}
        </Badge>
      )
    },
    {
      key: "sales",
      title: "Sales",
      sortable: true,
      render: (value: number) => `${value} sold`
    }
  ];

  const handleCreate = () => {
    console.log("Navigate to create product");
  };

  const handleEdit = (product: any) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (product: any) => {
    setProducts(products.filter(p => p.id !== product.id));
  };

  return (
    <Layout title="Products">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-t-primary mb-2">
            Product Management
          </h1>
          <p className="text-t-secondary">
            Manage your digital products, inventory, and sales
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card title="Total Products">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="package" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-t-primary">{products.length}</div>
                <div className="text-sm text-t-secondary">Products</div>
              </div>
            </div>
          </Card>

          <Card title="Total Sales">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Icon name="trending-up" className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-t-primary">
                  {products.reduce((sum, p) => sum + p.sales, 0)}
                </div>
                <div className="text-sm text-t-secondary">Total Sales</div>
              </div>
            </div>
          </Card>

          <Card title="Revenue">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon name="dollar-sign" className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-t-primary">
                  ${products.reduce((sum, p) => sum + (p.price * p.sales), 0).toLocaleString()}
                </div>
                <div className="text-sm text-t-secondary">Total Revenue</div>
              </div>
            </div>
          </Card>

          <Card title="Active Products">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="check-circle" className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-t-primary">
                  {products.filter(p => p.status === "Active").length}
                </div>
                <div className="text-sm text-t-secondary">Active</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Products Table */}
        <Card title="Product Inventory">
          <DataTable
            columns={columns}
            data={products}
            actions={{
              onCreate: handleCreate,
              onEdit: handleEdit,
              onDelete: handleDelete,
              onExport: () => console.log("Export products")
            }}
            search={{
              value: "",
              onChange: (value) => console.log("Search:", value),
              placeholder: "Search products..."
            }}
            showSearch={true}
            showActions={true}
            pagination={{
              current: 1,
              pageSize: 10,
              total: products.length,
              onChange: (page, pageSize) => console.log("Page:", page, pageSize)
            }}
          />
        </Card>
      </div>
    </Layout>
  );
} 