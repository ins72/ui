"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/infrastructure/api/apiClient";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Table from "@/components/Table";

interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    totalSpent: number;
    orders: number;
    lastOrder: string;
    createdAt: string;
}

const CustomerManagementPage = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            const response = await apiClient.getCustomers();
            setCustomers(response.data);
        } catch (error: any) {
            setError("Failed to load customers");
            console.error("Error fetching customers:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCustomer = async (customerId: string) => {
        if (confirm("Are you sure you want to delete this customer?")) {
            try {
                await apiClient.deleteCustomer(customerId);
                setCustomers(customers.filter(c => c.id !== customerId));
            } catch (error: any) {
                alert("Failed to delete customer");
                console.error("Error deleting customer:", error);
            }
        }
    };

    const customerColumns = [
        {
            key: "name",
            label: "Customer",
            render: (customer: Customer) => (
                <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.email}</div>
                </div>
            ),
        },
        {
            key: "phone",
            label: "Phone",
            render: (customer: Customer) => (
                <div className="text-sm">{customer.phone || "N/A"}</div>
            ),
        },
        {
            key: "totalSpent",
            label: "Total Spent",
            render: (customer: Customer) => (
                <div className="font-medium">${customer.totalSpent}</div>
            ),
        },
        {
            key: "orders",
            label: "Orders",
            render: (customer: Customer) => (
                <div className="text-sm">{customer.orders}</div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (customer: Customer) => (
                <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                }`}>
                    {customer.status}
                </span>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (customer: Customer) => (
                <div className="flex space-x-2">
                    <Button 
                        href={`/customers/view/${customer.id}`}
                        size="sm"
                        isStroke
                    >
                        View
                    </Button>
                    <Button 
                        href={`/customers/edit/${customer.id}`}
                        size="sm"
                        isStroke
                    >
                        Edit
                    </Button>
                    <Button 
                        onClick={() => handleDeleteCustomer(customer.id)}
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    if (loading) {
        return (
            <Layout title="Customer Management">
                <div className="center">
                    <div className="text-gray-600">Loading customers...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Customer Management">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card 
                        title="Customers" 
                        headContent={
                            <Button href="/customers/create">
                                Add Customer
                            </Button>
                        }
                    >
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4">
                                {error}
                            </div>
                        )}
                        
                        {customers.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No customers found. Add your first customer to get started.
                            </div>
                        ) : (
                            <Table 
                                data={customers} 
                                columns={customerColumns}
                                className="w-full"
                            />
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Customer Stats">
                        <div className="space-y-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {customers.length}
                                </div>
                                <div className="text-sm text-gray-600">Total Customers</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-green-600">
                                    {customers.filter(c => c.status === 'active').length}
                                </div>
                                <div className="text-sm text-gray-600">Active Customers</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-purple-600">
                                    ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)}
                                </div>
                                <div className="text-sm text-gray-600">Total Revenue</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerManagementPage; 