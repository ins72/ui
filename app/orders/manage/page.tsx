"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/infrastructure/api/apiClient";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Table from "@/components/Table";

interface Order {
    id: string;
    orderNumber: string;
    customer: {
        name: string;
        email: string;
    };
    totalAmount: number;
    status: string;
    paymentStatus: string;
    createdAt: string;
    items: Array<{
        product: {
            name: string;
        };
        quantity: number;
        price: number;
    }>;
}

const OrderManagementPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await apiClient.getOrders();
            setOrders(response.data);
        } catch (error: any) {
            setError("Failed to load orders");
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteOrder = async (orderId: string) => {
        if (confirm("Are you sure you want to delete this order?")) {
            try {
                await apiClient.deleteOrder(orderId);
                setOrders(orders.filter(o => o.id !== orderId));
            } catch (error: any) {
                alert("Failed to delete order");
                console.error("Error deleting order:", error);
            }
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            case 'shipped':
                return 'bg-purple-100 text-purple-800';
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPaymentStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const orderColumns = [
        {
            key: "orderNumber",
            label: "Order",
            render: (order: Order) => (
                <div>
                    <div className="font-medium">#{order.orderNumber}</div>
                    <div className="text-sm text-gray-500">{order.customer.name}</div>
                </div>
            ),
        },
        {
            key: "items",
            label: "Items",
            render: (order: Order) => (
                <div className="text-sm">
                    {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                </div>
            ),
        },
        {
            key: "totalAmount",
            label: "Total",
            render: (order: Order) => (
                <div className="font-medium">${order.totalAmount}</div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (order: Order) => (
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status}
                </span>
            ),
        },
        {
            key: "paymentStatus",
            label: "Payment",
            render: (order: Order) => (
                <span className={`px-2 py-1 rounded-full text-xs ${getPaymentStatusColor(order.paymentStatus)}`}>
                    {order.paymentStatus}
                </span>
            ),
        },
        {
            key: "createdAt",
            label: "Date",
            render: (order: Order) => (
                <div className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                </div>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (order: Order) => (
                <div className="flex space-x-2">
                    <Button 
                        href={`/orders/view/${order.id}`}
                        size="sm"
                        isStroke
                    >
                        View
                    </Button>
                    <Button 
                        href={`/orders/edit/${order.id}`}
                        size="sm"
                        isStroke
                    >
                        Edit
                    </Button>
                    <Button 
                        onClick={() => handleDeleteOrder(order.id)}
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
            <Layout title="Order Management">
                <div className="center">
                    <div className="text-gray-600">Loading orders...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Order Management">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card 
                        title="Orders" 
                        headContent={
                            <Button href="/orders/create">
                                Create Order
                            </Button>
                        }
                    >
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4">
                                {error}
                            </div>
                        )}
                        
                        {orders.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No orders found. Create your first order to get started.
                            </div>
                        ) : (
                            <Table 
                                data={orders} 
                                columns={orderColumns}
                                className="w-full"
                            />
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Order Stats">
                        <div className="space-y-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {orders.length}
                                </div>
                                <div className="text-sm text-gray-600">Total Orders</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-green-600">
                                    ${orders.reduce((sum, o) => sum + o.totalAmount, 0).toFixed(2)}
                                </div>
                                <div className="text-sm text-gray-600">Total Revenue</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-purple-600">
                                    {orders.filter(o => o.status === 'pending').length}
                                </div>
                                <div className="text-sm text-gray-600">Pending Orders</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default OrderManagementPage; 