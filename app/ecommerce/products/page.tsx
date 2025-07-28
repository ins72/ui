"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Table from "@/components/Table";
import { apiClient } from "@/infrastructure/api/apiClient";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    comparePrice?: number;
    sku: string;
    category: string;
    status: "active" | "inactive" | "draft";
    inventory: {
        stock: number;
        lowStockThreshold: number;
        trackInventory: boolean;
    };
    images: {
        url: string;
        alt: string;
        isPrimary: boolean;
    }[];
    createdAt: string;
    updatedAt: string;
}

const EcommerceProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<string>("name");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await apiClient.getProducts();
                setProducts(data || mockProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts(mockProducts);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = [
        { id: "all", name: "All Categories", count: products.length },
        { id: "electronics", name: "Electronics", count: products.filter(p => p.category === "electronics").length },
        { id: "clothing", name: "Clothing", count: products.filter(p => p.category === "clothing").length },
        { id: "home", name: "Home & Garden", count: products.filter(p => p.category === "home").length },
        { id: "books", name: "Books", count: products.filter(p => p.category === "books").length }
    ];

    const filteredProducts = products
        .filter(product => 
            (selectedCategory === "all" || product.category === selectedCategory) &&
            (searchQuery === "" || 
             product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.sku.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price":
                    return a.price - b.price;
                case "stock":
                    return a.inventory.stock - b.inventory.stock;
                case "created":
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                default:
                    return 0;
            }
        });

    const tableColumns = [
        { key: "image", label: "Image", width: "80px" },
        { key: "name", label: "Product Name", width: "200px" },
        { key: "sku", label: "SKU", width: "120px" },
        { key: "category", label: "Category", width: "120px" },
        { key: "price", label: "Price", width: "100px" },
        { key: "stock", label: "Stock", width: "80px" },
        { key: "status", label: "Status", width: "100px" },
        { key: "actions", label: "Actions", width: "120px" }
    ];

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const getStockStatus = (stock: number, threshold: number): { color: string; text: string } => {
        if (stock === 0) return { color: "text-red-600", text: "Out of Stock" };
        if (stock <= threshold) return { color: "text-yellow-600", text: "Low Stock" };
        return { color: "text-green-600", text: "In Stock" };
    };

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            active: { color: "bg-green-100 text-green-800", text: "Active" },
            inactive: { color: "bg-gray-100 text-gray-800", text: "Inactive" },
            draft: { color: "bg-yellow-100 text-yellow-800", text: "Draft" }
        };
        const config = statusConfig[status as keyof typeof statusConfig];
        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
                {config.text}
            </span>
        );
    };

    return (
        <Layout title="E-commerce Products">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Filters and Search */}
                    <Card title="Product Management" className="mb-5">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Category:</span>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 dark:bg-gray-800 dark:text-white"
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name} ({category.count})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 dark:bg-gray-800 dark:text-white"
                                >
                                    <option value="name">Name</option>
                                    <option value="price">Price</option>
                                    <option value="stock">Stock</option>
                                    <option value="created">Date Created</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
                                <div className="flex border border-gray-300 dark:border-gray-600 rounded">
                                    <Button
                                        onClick={() => setViewMode("grid")}
                                        className={`px-3 py-1 text-sm ${
                                            viewMode === "grid" 
                                                ? 'bg-blue-600 text-white' 
                                                : 'isStroke'
                                        }`}
                                    >
                                        <Icon name="grid" className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        onClick={() => setViewMode("list")}
                                        className={`px-3 py-1 text-sm ${
                                            viewMode === "list" 
                                                ? 'bg-blue-600 text-white' 
                                                : 'isStroke'
                                        }`}
                                    >
                                        <Icon name="list" className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative mb-6">
                            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search products by name or SKU..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            />
                        </div>
                    </Card>

                    {/* Products Display */}
                    <Card title={`${filteredProducts.length} Products`} headContent={
                        <div className="flex items-center gap-2">
                            <Button href="/ecommerce/products/import" className="isStroke text-sm">
                                <Icon name="upload" className="mr-1" />
                                Import
                            </Button>
                            <Button href="/ecommerce/products/export" className="isStroke text-sm">
                                <Icon name="download" className="mr-1" />
                                Export
                            </Button>
                            <Button href="/ecommerce/products/create" className="text-sm">
                                <Icon name="plus" className="mr-1" />
                                Add Product
                            </Button>
                        </div>
                    }>
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-3"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        ) : viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-colors">
                                            <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                {product.images.length > 0 ? (
                                                    <img 
                                                        src={product.images[0].url} 
                                                        alt={product.images[0].alt}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <Icon name="image" className="h-12 w-12 text-gray-400" />
                                                )}
                                            </div>
                                            
                                            {/* Status Badge */}
                                            <div className="absolute top-2 left-2">
                                                {getStatusBadge(product.status)}
                                            </div>

                                            {/* Stock Alert */}
                                            {product.inventory.stock <= product.inventory.lowStockThreshold && (
                                                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                                    Low Stock
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="mt-3">
                                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">{product.name}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{product.description}</p>
                                            
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    {formatPrice(product.price)}
                                                </span>
                                                <span className={`text-sm font-medium ${
                                                    getStockStatus(product.inventory.stock, product.inventory.lowStockThreshold).color
                                                }`}>
                                                    {product.inventory.stock} in stock
                                                </span>
                                            </div>
                                            
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>SKU: {product.sku}</span>
                                                <span className="capitalize">{product.category}</span>
                                            </div>
                                            
                                            <div className="flex gap-2 mt-3">
                                                <Button 
                                                    href={`/ecommerce/products/edit/${product.id}`} 
                                                    className="flex-1 text-xs isStroke"
                                                >
                                                    Edit
                                                </Button>
                                                <Button 
                                                    href={`/ecommerce/products/view/${product.id}`} 
                                                    className="flex-1 text-xs"
                                                >
                                                    View
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Table
                                data={filteredProducts}
                                columns={tableColumns}
                                renderCell={(product, column) => {
                                    switch (column.key) {
                                        case "image":
                                            return (
                                                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                                                    {product.images.length > 0 ? (
                                                        <img 
                                                            src={product.images[0].url} 
                                                            alt={product.images[0].alt}
                                                            className="w-full h-full object-cover rounded"
                                                        />
                                                    ) : (
                                                        <Icon name="image" className="h-6 w-6 text-gray-400" />
                                                    )}
                                                </div>
                                            );
                                        case "name":
                                            return (
                                                <div>
                                                    <div className="font-medium">{product.name}</div>
                                                    <div className="text-sm text-gray-500">{product.sku}</div>
                                                </div>
                                            );
                                        case "price":
                                            return (
                                                <div>
                                                    <div className="font-medium">{formatPrice(product.price)}</div>
                                                    {product.comparePrice && (
                                                        <div className="text-sm text-gray-500 line-through">
                                                            {formatPrice(product.comparePrice)}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        case "stock":
                                            const stockStatus = getStockStatus(product.inventory.stock, product.inventory.lowStockThreshold);
                                            return (
                                                <span className={stockStatus.color}>
                                                    {product.inventory.stock}
                                                </span>
                                            );
                                        case "status":
                                            return getStatusBadge(product.status);
                                        case "actions":
                                            return (
                                                <div className="flex gap-1">
                                                    <Button 
                                                        href={`/ecommerce/products/edit/${product.id}`} 
                                                        className="text-xs isStroke"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button 
                                                        href={`/ecommerce/products/view/${product.id}`} 
                                                        className="text-xs"
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            );
                                        default:
                                            return product[column.key as keyof Product];
                                    }
                                }}
                            />
                        )}

                        {!loading && filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <Icon name="package" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Try adjusting your search or filter criteria
                                </p>
                                <Button href="/ecommerce/products/create">
                                    Add Your First Product
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>

                <div className="col-right">
                    {/* Quick Stats */}
                    <Card title="Product Overview" className="mb-5">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">
                                        {products.filter(p => p.status === "active").length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Products</div>
                                </div>
                                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">
                                        {products.filter(p => p.inventory.stock > 0).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">In Stock</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">
                                        {products.filter(p => p.inventory.stock <= p.inventory.lowStockThreshold && p.inventory.stock > 0).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Low Stock</div>
                                </div>
                                <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-red-600">
                                        {products.filter(p => p.inventory.stock === 0).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Out of Stock</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Quick Actions */}
                    <Card title="Quick Actions">
                        <div className="space-y-3">
                            <Button href="/ecommerce/products/create" className="w-full justify-start">
                                <Icon name="plus" className="mr-2" />
                                Add New Product
                            </Button>
                            <Button href="/ecommerce/categories" className="w-full justify-start isStroke">
                                <Icon name="folder" className="mr-2" />
                                Manage Categories
                            </Button>
                            <Button href="/ecommerce/inventory" className="w-full justify-start isStroke">
                                <Icon name="package" className="mr-2" />
                                Inventory Management
                            </Button>
                            <Button href="/ecommerce/products/import" className="w-full justify-start isStroke">
                                <Icon name="upload" className="mr-2" />
                                Import Products
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

// Mock data
const mockProducts: Product[] = [
    {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        description: "High-quality wireless headphones with noise cancellation and long battery life",
        price: 129.99,
        comparePrice: 159.99,
        sku: "WH-001",
        category: "electronics",
        status: "active",
        inventory: {
            stock: 45,
            lowStockThreshold: 10,
            trackInventory: true
        },
        images: [
            { url: "/products/headphones.jpg", alt: "Wireless Headphones", isPrimary: true }
        ],
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-20T14:45:00Z"
    },
    {
        id: "2",
        name: "Organic Cotton T-Shirt",
        description: "Comfortable organic cotton t-shirt available in multiple colors and sizes",
        price: 24.99,
        sku: "TS-002",
        category: "clothing",
        status: "active",
        inventory: {
            stock: 8,
            lowStockThreshold: 15,
            trackInventory: true
        },
        images: [
            { url: "/products/tshirt.jpg", alt: "Cotton T-Shirt", isPrimary: true }
        ],
        createdAt: "2024-01-10T09:15:00Z",
        updatedAt: "2024-01-18T16:20:00Z"
    },
    {
        id: "3",
        name: "Smart Home Security Camera",
        description: "1080p HD security camera with night vision and motion detection",
        price: 89.99,
        sku: "SC-003",
        category: "electronics",
        status: "active",
        inventory: {
            stock: 0,
            lowStockThreshold: 5,
            trackInventory: true
        },
        images: [
            { url: "/products/camera.jpg", alt: "Security Camera", isPrimary: true }
        ],
        createdAt: "2024-01-12T11:45:00Z",
        updatedAt: "2024-01-19T13:30:00Z"
    },
    {
        id: "4",
        name: "Garden Tool Set",
        description: "Complete garden tool set including shovel, rake, and pruning shears",
        price: 49.99,
        comparePrice: 69.99,
        sku: "GT-004",
        category: "home",
        status: "active",
        inventory: {
            stock: 25,
            lowStockThreshold: 8,
            trackInventory: true
        },
        images: [
            { url: "/products/garden-tools.jpg", alt: "Garden Tool Set", isPrimary: true }
        ],
        createdAt: "2024-01-08T08:30:00Z",
        updatedAt: "2024-01-17T15:45:00Z"
    },
    {
        id: "5",
        name: "Business Strategy Book",
        description: "Comprehensive guide to modern business strategy and management",
        price: 19.99,
        sku: "BK-005",
        category: "books",
        status: "draft",
        inventory: {
            stock: 150,
            lowStockThreshold: 20,
            trackInventory: true
        },
        images: [
            { url: "/products/book.jpg", alt: "Business Strategy Book", isPrimary: true }
        ],
        createdAt: "2024-01-14T12:00:00Z",
        updatedAt: "2024-01-16T10:15:00Z"
    },
    {
        id: "6",
        name: "Fitness Tracker Watch",
        description: "Advanced fitness tracker with heart rate monitoring and GPS",
        price: 199.99,
        sku: "FT-006",
        category: "electronics",
        status: "active",
        inventory: {
            stock: 12,
            lowStockThreshold: 10,
            trackInventory: true
        },
        images: [
            { url: "/products/fitness-tracker.jpg", alt: "Fitness Tracker", isPrimary: true }
        ],
        createdAt: "2024-01-11T14:20:00Z",
        updatedAt: "2024-01-20T09:30:00Z"
    }
];

export default EcommerceProductsPage; 