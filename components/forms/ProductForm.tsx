"use client";

import { useState, useEffect } from "react";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Field from "@/style-reference/components/Field";
import Icon from "@/style-reference/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface ProductFormData {
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    comparePrice?: number;
    cost?: number;
    sku: string;
    barcode?: string;
    category: string;
    subcategory?: string;
    tags: string[];
    images: {
        url: string;
        alt?: string;
        isPrimary: boolean;
        order: number;
    }[];
    inventory: {
        stock: number;
        lowStockThreshold: number;
        trackInventory: boolean;
        allowBackorders: boolean;
    };
    status: "active" | "inactive" | "draft";
}

interface ProductFormProps {
    productId?: string;
    onSuccess?: (product: any) => void;
    onCancel?: () => void;
}

const ProductForm = ({ productId, onSuccess, onCancel }: ProductFormProps) => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: "",
        description: "",
        shortDescription: "",
        price: 0,
        comparePrice: 0,
        cost: 0,
        sku: "",
        barcode: "",
        category: "",
        subcategory: "",
        tags: [],
        images: [],
        inventory: {
            stock: 0,
            lowStockThreshold: 10,
            trackInventory: true,
            allowBackorders: false,
        },
        status: "draft",
    });

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [categories, setCategories] = useState<string[]>([]);

    const isEditMode = !!productId;

    useEffect(() => {
        const fetchData = async () => {
            if (isEditMode) {
                try {
                    setLoading(true);
                    const product = await apiClient.getProductById(productId);
                    setFormData({
                        name: product.name || "",
                        description: product.description || "",
                        shortDescription: product.shortDescription || "",
                        price: product.price || 0,
                        comparePrice: product.comparePrice || 0,
                        cost: product.cost || 0,
                        sku: product.sku || "",
                        barcode: product.barcode || "",
                        category: product.category || "",
                        subcategory: product.subcategory || "",
                        tags: product.tags || [],
                        images: product.images || [],
                        inventory: {
                            stock: product.inventory?.stock || 0,
                            lowStockThreshold: product.inventory?.lowStockThreshold || 10,
                            trackInventory: product.inventory?.trackInventory ?? true,
                            allowBackorders: product.inventory?.allowBackorders ?? false,
                        },
                        status: product.status || "draft",
                    });
                } catch (error) {
                    console.error("Error fetching product:", error);
                    setErrors({ general: "Failed to load product data" });
                } finally {
                    setLoading(false);
                }
            }

            // Fetch categories
            try {
                const categoriesData = await apiClient.getPublicContent('product-categories');
                setCategories(categoriesData?.content?.data || ["electronics", "clothing", "home", "books"]);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategories(["electronics", "clothing", "home", "books"]);
            }
        };

        fetchData();
    }, [productId, isEditMode]);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Product name is required";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Product description is required";
        }

        if (formData.price <= 0) {
            newErrors.price = "Price must be greater than 0";
        }

        if (!formData.sku.trim()) {
            newErrors.sku = "SKU is required";
        }

        if (!formData.category) {
            newErrors.category = "Category is required";
        }

        if (formData.inventory.stock < 0) {
            newErrors.stock = "Stock cannot be negative";
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
                result = await apiClient.updateProduct(productId, formData);
            } else {
                result = await apiClient.createProduct(formData);
            }

            onSuccess?.(result);
        } catch (error: any) {
            console.error("Error saving product:", error);
            setErrors({ general: error.message || "Failed to save product" });
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleInventoryChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            inventory: {
                ...prev.inventory,
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
            <Card title={isEditMode ? "Edit Product" : "Create Product"}>
                <div className="flex items-center justify-center py-8">
                    <Icon name="loader" className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="ml-2">Loading...</span>
                </div>
            </Card>
        );
    }

    return (
        <Card title={isEditMode ? "Edit Product" : "Create Product"}>
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
                    
                    <Field
                        label="Product Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        error={errors.name}
                        required
                    />

                    <Field
                        label="Short Description"
                        value={formData.shortDescription}
                        onChange={(e) => handleInputChange("shortDescription", e.target.value)}
                        placeholder="Brief description for product listings"
                    />

                    <Field
                        label="Description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        textarea
                        rows={4}
                        error={errors.description}
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Field
                            label="Price"
                            type="number"
                            value={formData.price}
                            onChange={(e) => handleInputChange("price", parseFloat(e.target.value) || 0)}
                            error={errors.price}
                            required
                        />

                        <Field
                            label="Compare Price"
                            type="number"
                            value={formData.comparePrice || ""}
                            onChange={(e) => handleInputChange("comparePrice", parseFloat(e.target.value) || 0)}
                            placeholder="Original price for discounts"
                        />

                        <Field
                            label="Cost"
                            type="number"
                            value={formData.cost || ""}
                            onChange={(e) => handleInputChange("cost", parseFloat(e.target.value) || 0)}
                            placeholder="Product cost for profit calculation"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Product Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                            label="SKU"
                            value={formData.sku}
                            onChange={(e) => handleInputChange("sku", e.target.value)}
                            error={errors.sku}
                            required
                        />

                        <Field
                            label="Barcode"
                            value={formData.barcode || ""}
                            onChange={(e) => handleInputChange("barcode", e.target.value)}
                            placeholder="Product barcode"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => handleInputChange("category", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <p className="text-red-600 text-sm mt-1">{errors.category}</p>
                            )}
                        </div>

                        <Field
                            label="Subcategory"
                            value={formData.subcategory || ""}
                            onChange={(e) => handleInputChange("subcategory", e.target.value)}
                            placeholder="Product subcategory"
                        />
                    </div>

                    <Field
                        label="Tags"
                        value={formData.tags.join(", ")}
                        onChange={(e) => handleTagsChange(e.target.value)}
                        placeholder="Enter tags separated by commas"
                    />

                    <div>
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) => handleInputChange("status", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        >
                            <option value="draft">Draft</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Inventory Management */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Inventory Management</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                            label="Stock Quantity"
                            type="number"
                            value={formData.inventory.stock}
                            onChange={(e) => handleInventoryChange("stock", parseInt(e.target.value) || 0)}
                            error={errors.stock}
                        />

                        <Field
                            label="Low Stock Threshold"
                            type="number"
                            value={formData.inventory.lowStockThreshold}
                            onChange={(e) => handleInventoryChange("lowStockThreshold", parseInt(e.target.value) || 0)}
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="trackInventory"
                                checked={formData.inventory.trackInventory}
                                onChange={(e) => handleInventoryChange("trackInventory", e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="trackInventory" className="text-sm">
                                Track inventory levels
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="allowBackorders"
                                checked={formData.inventory.allowBackorders}
                                onChange={(e) => handleInventoryChange("allowBackorders", e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="allowBackorders" className="text-sm">
                                Allow backorders when out of stock
                            </label>
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
                                {isEditMode ? "Update Product" : "Create Product"}
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ProductForm; 