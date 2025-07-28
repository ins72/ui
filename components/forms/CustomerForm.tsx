"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface CustomerFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    website?: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    status: "active" | "inactive" | "lead";
    tags: string[];
    notes?: string;
    source?: string;
    assignedTo?: string;
}

interface CustomerFormProps {
    customerId?: string;
    onSuccess?: (customer: any) => void;
    onCancel?: () => void;
}

const CustomerForm = ({ customerId, onSuccess, onCancel }: CustomerFormProps) => {
    const [formData, setFormData] = useState<CustomerFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        address: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
        },
        status: "lead",
        tags: [],
        notes: "",
        source: "",
        assignedTo: "",
    });

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [users, setUsers] = useState<any[]>([]);

    const isEditMode = !!customerId;

    useEffect(() => {
        const fetchData = async () => {
            if (isEditMode) {
                try {
                    setLoading(true);
                    const customer = await apiClient.getCustomerById(customerId);
                    setFormData({
                        name: customer.name || "",
                        email: customer.email || "",
                        phone: customer.phone || "",
                        company: customer.company || "",
                        website: customer.website || "",
                        address: {
                            street: customer.address?.street || "",
                            city: customer.address?.city || "",
                            state: customer.address?.state || "",
                            zipCode: customer.address?.zipCode || "",
                            country: customer.address?.country || "",
                        },
                        status: customer.status || "lead",
                        tags: customer.tags || [],
                        notes: customer.notes || "",
                        source: customer.source || "",
                        assignedTo: customer.assignedTo || "",
                    });
                } catch (error) {
                    console.error("Error fetching customer:", error);
                    setErrors({ general: "Failed to load customer data" });
                } finally {
                    setLoading(false);
                }
            }

            // Fetch users for assignment
            try {
                const usersData = await apiClient.getUsers();
                setUsers(usersData?.data || []);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, [customerId, isEditMode]);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Customer name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
            newErrors.website = "Please enter a valid website URL";
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
                result = await apiClient.updateCustomer(customerId, formData);
            } else {
                result = await apiClient.createCustomer(formData);
            }

            onSuccess?.(result);
        } catch (error: any) {
            console.error("Error saving customer:", error);
            setErrors({ general: error.message || "Failed to save customer" });
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleAddressChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [field]: value,
            },
        }));
    };

    const handleTagsChange = (value: string) => {
        const tags = value.split(",").map(tag => tag.trim()).filter(tag => tag);
        setFormData(prev => ({ ...prev, tags }));
    };

    if (loading) {
        return (
            <Card title={isEditMode ? "Edit Customer" : "Create Customer"}>
                <div className="flex items-center justify-center py-8">
                    <Icon name="loader" className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="ml-2">Loading...</span>
                </div>
            </Card>
        );
    }

    return (
        <Card title={isEditMode ? "Edit Customer" : "Create Customer"}>
            <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Icon name="alert-circle" className="h-5 w-5 text-red-600" />
                            <span className="text-red-800 dark:text-red-200">{errors.general}</span>
                        </div>
                    </div>
                )}

                {/* Basic Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                            label="Full Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            error={errors.name}
                            required
                        />

                        <Field
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            error={errors.email}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                            label="Phone"
                            value={formData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            error={errors.phone}
                            placeholder="+1 (555) 123-4567"
                        />

                        <Field
                            label="Company"
                            value={formData.company || ""}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Company name"
                        />
                    </div>

                    <Field
                        label="Website"
                        value={formData.website || ""}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        error={errors.website}
                        placeholder="https://example.com"
                    />
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Address Information</h3>
                    
                    <Field
                        label="Street Address"
                        value={formData.address.street}
                        onChange={(e) => handleAddressChange("street", e.target.value)}
                        placeholder="123 Main St"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Field
                            label="City"
                            value={formData.address.city}
                            onChange={(e) => handleAddressChange("city", e.target.value)}
                        />

                        <Field
                            label="State/Province"
                            value={formData.address.state}
                            onChange={(e) => handleAddressChange("state", e.target.value)}
                        />

                        <Field
                            label="ZIP/Postal Code"
                            value={formData.address.zipCode}
                            onChange={(e) => handleAddressChange("zipCode", e.target.value)}
                        />
                    </div>

                    <Field
                        label="Country"
                        value={formData.address.country}
                        onChange={(e) => handleAddressChange("country", e.target.value)}
                    />
                </div>

                {/* Customer Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Customer Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => handleInputChange("status", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="lead">Lead</option>
                                <option value="active">Active Customer</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Source</label>
                            <select
                                value={formData.source || ""}
                                onChange={(e) => handleInputChange("source", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="">Select Source</option>
                                <option value="website">Website</option>
                                <option value="referral">Referral</option>
                                <option value="social-media">Social Media</option>
                                <option value="advertising">Advertising</option>
                                <option value="trade-show">Trade Show</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Assigned To</label>
                        <select
                            value={formData.assignedTo || ""}
                            onChange={(e) => handleInputChange("assignedTo", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        >
                            <option value="">Unassigned</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Field
                        label="Tags"
                        value={formData.tags.join(", ")}
                        onChange={(e) => handleTagsChange(e.target.value)}
                        placeholder="Enter tags separated by commas (e.g., VIP, Enterprise, Prospect)"
                    />

                    <Field
                        label="Notes"
                        value={formData.notes || ""}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        textarea
                        rows={4}
                        placeholder="Additional notes about this customer..."
                    />
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
                                {isEditMode ? "Update Customer" : "Create Customer"}
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default CustomerForm; 