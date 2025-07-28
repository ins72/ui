"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    total: number;
}

interface OrderFormData {
    customerId: string;
    customerName: string;
    orderNumber: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    paymentStatus: "pending" | "paid" | "failed" | "refunded";
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
        phone: string;
    };
    billingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    notes?: string;
    trackingNumber?: string;
}

interface OrderFormProps {
    orderId?: string;
    onSuccess?: (order: any) => void;
    onCancel?: () => void;
}

const OrderForm = ({ orderId, onSuccess, onCancel }: OrderFormProps) => {
    const [formData, setFormData] = useState<OrderFormData>({
        customerId: "",
        customerName: "",
        orderNumber: "",
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        discount: 0,
        total: 0,
        status: "pending",
        paymentStatus: "pending",
        shippingAddress: {
            name: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            phone: "",
        },
        billingAddress: {
            name: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
        },
        notes: "",
        trackingNumber: "",
    });

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [customers, setCustomers] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

    const isEditMode = !!orderId;

    useEffect(() => {
        const fetchData = async () => {
            if (isEditMode) {
                try {
                    setLoading(true);
                    const order = await apiClient.getOrderById(orderId);
                    setFormData({
                        customerId: order.customerId || "",
                        customerName: order.customerName || "",
                        orderNumber: order.orderNumber || "",
                        items: order.items || [],
                        subtotal: order.subtotal || 0,
                        tax: order.tax || 0,
                        shipping: order.shipping || 0,
                        discount: order.discount || 0,
                        total: order.total || 0,
                        status: order.status || "pending",
                        paymentStatus: order.paymentStatus || "pending",
                        shippingAddress: {
                            name: order.shippingAddress?.name || "",
                            street: order.shippingAddress?.street || "",
                            city: order.shippingAddress?.city || "",
                            state: order.shippingAddress?.state || "",
                            zipCode: order.shippingAddress?.zipCode || "",
                            country: order.shippingAddress?.country || "",
                            phone: order.shippingAddress?.phone || "",
                        },
                        billingAddress: {
                            name: order.billingAddress?.name || "",
                            street: order.billingAddress?.street || "",
                            city: order.billingAddress?.city || "",
                            state: order.billingAddress?.state || "",
                            zipCode: order.billingAddress?.zipCode || "",
                            country: order.billingAddress?.country || "",
                        },
                        notes: order.notes || "",
                        trackingNumber: order.trackingNumber || "",
                    });
                } catch (error) {
                    console.error("Error fetching order:", error);
                    setErrors({ general: "Failed to load order data" });
                } finally {
                    setLoading(false);
                }
            }

            // Fetch customers and products
            try {
                const [customersData, productsData] = await Promise.all([
                    apiClient.getCustomers(),
                    apiClient.getProducts()
                ]);
                setCustomers(customersData?.data || []);
                setProducts(productsData?.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [orderId, isEditMode]);

    const calculateTotals = () => {
        const subtotal = formData.items.reduce((sum, item) => sum + item.total, 0);
        const total = subtotal + formData.tax + formData.shipping - formData.discount;
        
        setFormData(prev => ({
            ...prev,
            subtotal,
            total,
        }));
    };

    useEffect(() => {
        calculateTotals();
    }, [formData.items, formData.tax, formData.shipping, formData.discount]);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.customerId) {
            newErrors.customerId = "Customer is required";
        }

        if (formData.items.length === 0) {
            newErrors.items = "At least one item is required";
        }

        if (!formData.shippingAddress.name.trim()) {
            newErrors.shippingName = "Shipping name is required";
        }

        if (!formData.shippingAddress.street.trim()) {
            newErrors.shippingStreet = "Shipping address is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setSaving(true);
            let result;

            if (isEditMode) {
                result = await apiClient.updateOrder(orderId, formData);
            } else {
                result = await apiClient.createOrder(formData);
            }

            onSuccess?.(result);
        } catch (error: any) {
            console.error("Error saving order:", error);
            setErrors({ general: error.message || "Failed to save order" });
        } finally {
            setSaving(false);
        }
    };

    const handleCustomerChange = (customerId: string) => {
        const customer = customers.find(c => c.id === customerId);
        setFormData(prev => ({
            ...prev,
            customerId,
            customerName: customer?.name || "",
        }));
        if (errors.customerId) {
            setErrors(prev => ({ ...prev, customerId: "" }));
        }
    };

    const handleAddressChange = (type: "shipping" | "billing", field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [`${type}Address`]: {
                ...prev[`${type}Address`],
                [field]: value,
            },
        }));
    };

    const addItem = () => {
        if (!selectedProduct || selectedQuantity <= 0) return;

        const product = products.find(p => p.id === selectedProduct);
        if (!product) return;

        const newItem: OrderItem = {
            productId: selectedProduct,
            productName: product.name,
            quantity: selectedQuantity,
            price: product.price,
            total: product.price * selectedQuantity,
        };

        setFormData(prev => ({
            ...prev,
            items: [...prev.items, newItem],
        }));

        setSelectedProduct("");
        setSelectedQuantity(1);
    };

    const removeItem = (index: number) => {
        setFormData(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index),
        }));
    };

    const updateItemQuantity = (index: number, quantity: number) => {
        setFormData(prev => ({
            ...prev,
            items: prev.items.map((item, i) => 
                i === index 
                    ? { ...item, quantity, total: item.price * quantity }
                    : item
            ),
        }));
    };

    if (loading) {
        return (
            <Card title={isEditMode ? "Edit Order" : "Create Order"}>
                <div className="flex items-center justify-center py-8">
                    <Icon name="loader" className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="ml-2">Loading...</span>
                </div>
            </Card>
        );
    }

    return (
        <Card title={isEditMode ? "Edit Order" : "Create Order"}>
            <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Icon name="alert-circle" className="h-5 w-5 text-red-600" />
                            <span className="text-red-800 dark:text-red-200">{errors.general}</span>
                        </div>
                    </div>
                )}

                {/* Customer Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Customer Information</h3>
                    
                    <div>
                        <label className="block text-sm font-medium mb-2">Customer</label>
                        <select
                            value={formData.customerId}
                            onChange={(e) => handleCustomerChange(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        >
                            <option value="">Select Customer</option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name} ({customer.email})
                                </option>
                            ))}
                        </select>
                        {errors.customerId && (
                            <p className="text-red-600 text-sm mt-1">{errors.customerId}</p>
                        )}
                    </div>

                    {formData.customerName && (
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Selected: <span className="font-medium">{formData.customerName}</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Order Items</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Product</label>
                            <select
                                value={selectedProduct}
                                onChange={(e) => setSelectedProduct(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="">Select Product</option>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name} - ${product.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <Field
                            label="Quantity"
                            type="number"
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(parseInt(e.target.value) || 1)}
                            min="1"
                        />

                        <div className="flex items-end">
                            <Button
                                type="button"
                                onClick={addItem}
                                disabled={!selectedProduct || selectedQuantity <= 0}
                                className="w-full"
                            >
                                <Icon name="plus" className="mr-2" />
                                Add Item
                            </Button>
                        </div>
                    </div>

                    {errors.items && (
                        <p className="text-red-600 text-sm">{errors.items}</p>
                    )}

                    {/* Items List */}
                    {formData.items.length > 0 && (
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium">Product</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium">Price</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium">Quantity</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium">Total</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.items.map((item, index) => (
                                        <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                                            <td className="px-4 py-2">{item.productName}</td>
                                            <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateItemQuantity(index, parseInt(e.target.value) || 1)}
                                                    className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-white"
                                                    min="1"
                                                />
                                            </td>
                                            <td className="px-4 py-2">${item.total.toFixed(2)}</td>
                                            <td className="px-4 py-2">
                                                <Button
                                                    type="button"
                                                    onClick={() => removeItem(index)}
                                                    className="text-red-600 hover:text-red-800 isStroke text-sm"
                                                >
                                                    <Icon name="trash" className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Order Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Order Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Order Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Payment Status</label>
                            <select
                                value={formData.paymentStatus}
                                onChange={(e) => setFormData(prev => ({ ...prev, paymentStatus: e.target.value as any }))}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="pending">Pending</option>
                                <option value="paid">Paid</option>
                                <option value="failed">Failed</option>
                                <option value="refunded">Refunded</option>
                            </select>
                        </div>
                    </div>

                    <Field
                        label="Tracking Number"
                        value={formData.trackingNumber || ""}
                        onChange={(e) => setFormData(prev => ({ ...prev, trackingNumber: e.target.value }))}
                        placeholder="Enter tracking number"
                    />

                    <Field
                        label="Notes"
                        value={formData.notes || ""}
                        onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                        textarea
                        rows={3}
                        placeholder="Order notes..."
                    />
                </div>

                {/* Shipping Address */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Shipping Address</h3>
                    
                    <Field
                        label="Full Name"
                        value={formData.shippingAddress.name}
                        onChange={(e) => handleAddressChange("shipping", "name", e.target.value)}
                        error={errors.shippingName}
                        required
                    />

                    <Field
                        label="Street Address"
                        value={formData.shippingAddress.street}
                        onChange={(e) => handleAddressChange("shipping", "street", e.target.value)}
                        error={errors.shippingStreet}
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Field
                            label="City"
                            value={formData.shippingAddress.city}
                            onChange={(e) => handleAddressChange("shipping", "city", e.target.value)}
                        />

                        <Field
                            label="State/Province"
                            value={formData.shippingAddress.state}
                            onChange={(e) => handleAddressChange("shipping", "state", e.target.value)}
                        />

                        <Field
                            label="ZIP/Postal Code"
                            value={formData.shippingAddress.zipCode}
                            onChange={(e) => handleAddressChange("shipping", "zipCode", e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                            label="Country"
                            value={formData.shippingAddress.country}
                            onChange={(e) => handleAddressChange("shipping", "country", e.target.value)}
                        />

                        <Field
                            label="Phone"
                            value={formData.shippingAddress.phone}
                            onChange={(e) => handleAddressChange("shipping", "phone", e.target.value)}
                        />
                    </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Order Summary</h3>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${formData.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax:</span>
                            <span>${formData.tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span>${formData.shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount:</span>
                            <span>-${formData.discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>${formData.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                        type="button"
                        onClick={onCancel}
                        className="isStroke"
                        disabled={saving}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={saving}
                        className="min-w-24"
                    >
                        {saving ? (
                            <>
                                <Icon name="loader" className="mr-2 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Icon name="save" className="mr-2" />
                                {isEditMode ? "Update Order" : "Create Order"}
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default OrderForm; 