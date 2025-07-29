"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import DataTable from "@/style-reference/components/DataTable";
import Badge from "@/style-reference/components/Badge";

export default function ManageCustomersPage() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@company.com",
      company: "Tech Corp",
      status: "Active",
      lastActivity: "2024-01-15",
      totalOrders: 12,
      totalSpent: 2400
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      email: "sarah@business.com",
      company: "Business Inc",
      status: "Inactive",
      lastActivity: "2024-01-10", 
      totalOrders: 8,
      totalSpent: 1600
    }
  ]);

  const columns = [
    {
      key: "name",
      title: "Customer Name",
      sortable: true,
      filterable: true
    },
    {
      key: "email", 
      title: "Email",
      sortable: true,
      filterable: true
    },
    {
      key: "company",
      title: "Company",
      sortable: true,
      filterable: true
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
      key: "totalOrders",
      title: "Orders",
      sortable: true
    },
    {
      key: "totalSpent",
      title: "Total Spent",
      render: (value: number) => `$${value.toLocaleString()}`
    }
  ];

  const handleCreate = () => {
    // Navigate to create customer page
    console.log("Navigate to create customer");
  };

  const handleEdit = (customer: any) => {
    // Navigate to edit customer page
    console.log("Edit customer:", customer);
  };

  const handleDelete = (customer: any) => {
    // Delete customer
    setCustomers(customers.filter(c => c.id !== customer.id));
  };

  return (
    <Layout title="Manage Customers">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-t-primary mb-2">
            Customer Management
          </h1>
          <p className="text-t-secondary">
            Manage your customer relationships and track their activity
          </p>
        </div>

        <Card title="Customer Database">
          <DataTable
            columns={columns}
            data={customers}
            actions={{
              onCreate: handleCreate,
              onEdit: handleEdit,
              onDelete: handleDelete,
              onExport: () => console.log("Export customers")
            }}
            search={{
              value: "",
              onChange: (value) => console.log("Search:", value),
              placeholder: "Search customers..."
            }}
            showSearch={true}
            showActions={true}
            pagination={{
              current: 1,
              pageSize: 10,
              total: customers.length,
              onChange: (page, pageSize) => console.log("Page:", page, pageSize)
            }}
          />
        </Card>
      </div>
    </Layout>
  );
} 