
"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api-client";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Table from "@/components/Table";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    status: string;
    category: string;
    images: { url: string; alt?: string }[];
}

const ProductManagementPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await apiClient.getProducts();
            setProducts(response.data);
        } catch (error: any) {
            setError("Failed to load products");
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProduct = async (productId: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            try {
                await apiClient.deleteProduct(productId);
                setProducts(products.filter(p => p.id !== productId));
            } catch (error: any) {
                alert("Failed to delete product");
                console.error("Error deleting product:", error);
            }
        }
    };

    const productColumns = [
        {
            key: "name",
            label: "Product",
            render: (product: Product) => (
                <div className="flex items-center space-x-3">
                    <img 
                        src={product.images[0]?.url || "/placeholder-product.jpg"} 
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.category}</div>
                    </div>
                </div>
            ),
        },
        {
            key: "price",
            label: "Price",
            render: (product: Product) => (
                <div className="font-medium">${product.price}</div>
            ),
        },
        {
            key: "stock",
            label: "Stock",
            render: (product: Product) => (
                <div className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                    {product.stock}
                </div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (product: Product) => (
                <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                }`}>
                    {product.status}
                </span>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (product: Product) => (
                <div className="flex space-x-2">
                    <Button
                        href={`/products/edit/${product.id}`}
                        size="sm"
                        isStroke
                        aria-label="Action button">
                        Edit
                    </Button>
                    <Button
                        onClick={() => handleDeleteProduct(product.id)}
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                        aria-label="Action button">
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    if (loading) {
        return (
            <Layout title="Product Management">
                <div className="center">
                    <div className="text-gray-600">Loading products...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Product Management">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card 
                        title="Products" 
                        headContent={
                            <Button href="/products/create" aria-label="Action button">
                                Add Product
                            </Button>
                        }
                    >
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4">
                                {error}
                            </div>
                        )}
                        
                        {products.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No products found. Create your first product to get started.
                            </div>
                        ) : (
                            <Table 
                                data={products} 
                                columns={productColumns}
                                className="w-full"
                            />
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Quick Stats">
                        <div className="space-y-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {products.length}
                                </div>
                                <div className="text-sm text-gray-600">Total Products</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-green-600">
                                    {products.filter(p => p.status === 'active').length}
                                </div>
                                <div className="text-sm text-gray-600">Active Products</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-red-600">
                                    {products.filter(p => p.stock === 0).length}
                                </div>
                                <div className="text-sm text-gray-600">Out of Stock</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default ProductManagementPage; 