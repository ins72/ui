# Enterprise Frontend-Backend Merge Implementation Plan

## Overview

This document provides a detailed, step-by-step implementation plan for professionally merging the frontend and backend folders into a unified enterprise-level application. Each step includes specific code examples, file locations, and styling guidelines to ensure exact consistency with core-2-original/ui.

## Pre-Implementation Setup

### Step 1: Environment Configuration
**Files to Update**:

1. **Frontend Environment** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_APP_NAME=Mewayz
NEXT_PUBLIC_APP_VERSION=1.0.0
```

2. **Backend Environment** (`backend/.env`):
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mewayz
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

### Step 2: API Client Setup
**File**: `frontend/src/infrastructure/api/apiClient.ts`

```typescript
class ApiClient {
    private baseURL: string;
    private token: string | null;

    constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
        this.token = null;
    }

    setToken(token: string) {
        this.token = token;
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `API Error: ${response.statusText}`);
        }

        return response.json();
    }

    // Auth endpoints
    async login(credentials: { email: string; password: string }): Promise<any> {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    async register(userData: { name: string; email: string; password: string; plan?: string }): Promise<any> {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    }

    async forgotPassword(email: string): Promise<any> {
        return this.request('/auth/forgotpassword', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
    }

    async resetPassword(token: string, password: string): Promise<any> {
        return this.request('/auth/resetpassword', {
            method: 'PUT',
            body: JSON.stringify({ token, password }),
        });
    }

    // User endpoints
    async getProfile(): Promise<any> {
        return this.request('/users/profile');
    }

    async updateProfile(profileData: any): Promise<any> {
        return this.request('/users/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData),
        });
    }

    // Product endpoints
    async getProducts(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/products${queryString}`);
    }

    async createProduct(productData: any): Promise<any> {
        return this.request('/products', {
            method: 'POST',
            body: JSON.stringify(productData),
        });
    }

    async updateProduct(id: string, productData: any): Promise<any> {
        return this.request(`/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(productData),
        });
    }

    async deleteProduct(id: string): Promise<any> {
        return this.request(`/products/${id}`, {
            method: 'DELETE',
        });
    }

    // Customer endpoints
    async getCustomers(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/customers${queryString}`);
    }

    async createCustomer(customerData: any): Promise<any> {
        return this.request('/customers', {
            method: 'POST',
            body: JSON.stringify(customerData),
        });
    }

    // Order endpoints
    async getOrders(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/orders${queryString}`);
    }

    async createOrder(orderData: any): Promise<any> {
        return this.request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    }
}

export const apiClient = new ApiClient();
```

## Phase 1: Authentication System Integration (Week 1)

### Step 1: Authentication Context
**File**: `frontend/src/contexts/AuthContext.tsx`

```typescript
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { apiClient } from '@/infrastructure/api/apiClient';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    plan: string;
    status: string;
    profile: any;
    preferences: any;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

type AuthAction =
    | { type: 'AUTH_START' }
    | { type: 'AUTH_SUCCESS'; payload: User }
    | { type: 'AUTH_ERROR'; payload: string }
    | { type: 'AUTH_LOGOUT' }
    | { type: 'UPDATE_PROFILE'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
            return { ...state, user: action.payload, loading: false, error: null };
        case 'AUTH_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'AUTH_LOGOUT':
            return { ...state, user: null, token: null, loading: false, error: null };
        case 'UPDATE_PROFILE':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const initialState: AuthState = {
    user: null,
    token: null,
    loading: true,
    error: null,
};

interface AuthContextType extends AuthState {
    login: (credentials: { email: string; password: string }) => Promise<void>;
    register: (userData: { name: string; email: string; password: string; plan?: string }) => Promise<void>;
    logout: () => void;
    updateProfile: (profileData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // Check for existing token on app load
        const token = localStorage.getItem('token');
        if (token) {
            apiClient.setToken(token);
            // Verify token and get user profile
            apiClient.getProfile()
                .then((response) => {
                    dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    dispatch({ type: 'AUTH_LOGOUT' });
                });
        } else {
            dispatch({ type: 'AUTH_LOGOUT' });
        }
    }, []);

    const login = async (credentials: { email: string; password: string }) => {
        try {
            dispatch({ type: 'AUTH_START' });
            const response = await apiClient.login(credentials);
            apiClient.setToken(response.token);
            localStorage.setItem('token', response.token);
            dispatch({ type: 'AUTH_SUCCESS', payload: response.data.user });
        } catch (error) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    const register = async (userData: { name: string; email: string; password: string; plan?: string }) => {
        try {
            dispatch({ type: 'AUTH_START' });
            const response = await apiClient.register(userData);
            apiClient.setToken(response.token);
            localStorage.setItem('token', response.token);
            dispatch({ type: 'AUTH_SUCCESS', payload: response.data.user });
        } catch (error) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    const logout = () => {
        apiClient.setToken(null);
        localStorage.removeItem('token');
        dispatch({ type: 'AUTH_LOGOUT' });
    };

    const updateProfile = async (profileData: any) => {
        try {
            const response = await apiClient.updateProfile(profileData);
            dispatch({ type: 'UPDATE_PROFILE', payload: response.data });
        } catch (error) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            register,
            logout,
            updateProfile,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
```

### Step 2: Login Page
**File**: `frontend/app/auth/login/page.tsx`

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const { login, error } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await login(formData);
            router.push("/");
        } catch (error) {
            // Error is handled by AuthContext
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Layout title="Sign In" hideSidebar={true}>
            <div className="center">
                <Card title="Sign In" className="max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                        
                        <Field
                            type="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        
                        <Button 
                            type="submit" 
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                        
                        <div className="text-center space-y-2">
                            <a href="/auth/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm">
                                Forgot Password?
                            </a>
                            <div className="text-gray-600 text-sm">
                                Don't have an account?{" "}
                                <a href="/auth/register" className="text-blue-600 hover:text-blue-700">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default LoginPage;
```

### Step 3: Register Page
**File**: `frontend/app/auth/register/page.tsx`

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";
import Select from "@/components/Select";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        plan: "Free",
    });
    const [loading, setLoading] = useState(false);
    const { register, error } = useAuth();
    const router = useRouter();

    const planOptions = [
        { id: 1, name: "Free" },
        { id: 2, name: "Pro" },
        { id: 3, name: "Enterprise" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        setLoading(true);
        
        try {
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                plan: formData.plan,
            });
            router.push("/");
        } catch (error) {
            // Error is handled by AuthContext
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePlanChange = (value: { id: number; name: string }) => {
        setFormData({
            ...formData,
            plan: value.name,
        });
    };

    return (
        <Layout title="Sign Up" hideSidebar={true}>
            <div className="center">
                <Card title="Create Account" className="max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                        
                        <Field
                            type="text"
                            name="name"
                            label="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        
                        <Select
                            label="Plan"
                            value={{ id: planOptions.find(p => p.name === formData.plan)?.id || 1, name: formData.plan }}
                            onChange={handlePlanChange}
                            options={planOptions}
                        />
                        
                        <Button 
                            type="submit" 
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>
                        
                        <div className="text-center text-gray-600 text-sm">
                            Already have an account?{" "}
                            <a href="/auth/login" className="text-blue-600 hover:text-blue-700">
                                Sign In
                            </a>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default RegisterPage;
```

## Phase 2: User Management Integration (Week 1-2)

### Step 1: User Profile Page
**File**: `frontend/app/users/profile/page.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";
import Select from "@/components/Select";

const UserProfilePage = () => {
    const { user, updateProfile, loading } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        website: "",
        location: "",
        bio: "",
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                company: user.profile?.company || "",
                website: user.profile?.website || "",
                location: user.profile?.location || "",
                bio: user.profile?.bio || "",
            });
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            await updateProfile({
                name: formData.name,
                profile: {
                    company: formData.company,
                    website: formData.website,
                    location: formData.location,
                    bio: formData.bio,
                },
            });
        } catch (error) {
            console.error("Failed to update profile:", error);
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (loading) {
        return (
            <Layout title="Profile">
                <div className="center">
                    <div className="text-gray-600">Loading profile...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Profile">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Personal Information">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Field
                                type="text"
                                name="name"
                                label="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            
                            <Field
                                type="email"
                                name="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled
                            />
                            
                            <Field
                                type="text"
                                name="company"
                                label="Company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            
                            <Field
                                type="url"
                                name="website"
                                label="Website"
                                value={formData.website}
                                onChange={handleChange}
                            />
                            
                            <Field
                                type="text"
                                name="location"
                                label="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                            
                            <Button 
                                type="submit" 
                                disabled={saving}
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </Button>
                        </form>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Account Information">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Plan
                                </label>
                                <div className="text-lg font-semibold text-blue-600">
                                    {user?.plan}
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <div className="text-lg font-semibold text-green-600">
                                    {user?.status}
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Member Since
                                </label>
                                <div className="text-lg">
                                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default UserProfilePage;
```

## Phase 3: Product Management Integration (Week 2)

### Step 1: Product Management Page
**File**: `frontend/app/products/manage/page.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/infrastructure/api/apiClient";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Product from "@/components/Product";

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
        } catch (error) {
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
            } catch (error) {
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
                    >
                        Edit
                    </Button>
                    <Button 
                        onClick={() => handleDeleteProduct(product.id)}
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
                            <Button href="/products/create">
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
```

## Navigation Integration

### Update Navigation Constants
**File**: `frontend/contstants/navigation.tsx`

```typescript
export const navigation = [
    {
        title: "Dashboard",
        icon: "home",
        href: "/",
    },
    {
        title: "Products",
        icon: "shopping-bag",
        href: "/products",
        children: [
            { title: "All Products", href: "/products/manage" },
            { title: "Add Product", href: "/products/create" },
            { title: "Categories", href: "/products/categories" },
        ]
    },
    {
        title: "Customers",
        icon: "users",
        href: "/customers",
        children: [
            { title: "All Customers", href: "/customers/manage" },
            { title: "Add Customer", href: "/customers/create" },
            { title: "Analytics", href: "/customers/analytics" },
        ]
    },
    {
        title: "Orders",
        icon: "shopping-cart",
        href: "/orders",
        children: [
            { title: "All Orders", href: "/orders/manage" },
            { title: "Fulfillment", href: "/orders/fulfillment" },
            { title: "Analytics", href: "/orders/analytics" },
        ]
    },
    {
        title: "Income",
        icon: "dollar-sign",
        href: "/income",
        children: [
            { title: "Dashboard", href: "/income/dashboard" },
            { title: "Reports", href: "/income/reports" },
            { title: "Payouts", href: "/income/payouts" },
        ]
    },
    {
        title: "Settings",
        icon: "settings",
        href: "/settings",
        children: [
            { title: "Profile", href: "/users/profile" },
            { title: "Account", href: "/users/settings" },
            { title: "Billing", href: "/users/billing" },
        ]
    },
];
```

## Testing Strategy

### Unit Tests
**File**: `frontend/__tests__/auth.test.tsx`

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '@/contexts/AuthContext';
import LoginPage from '@/app/auth/login/page';

describe('LoginPage', () => {
    it('renders login form', () => {
        render(
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        );
        
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('handles form submission', async () => {
        render(
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        );
        
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' },
        });
        
        fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
        
        await waitFor(() => {
            expect(screen.getByText(/signing in/i)).toBeInTheDocument();
        });
    });
});
```

## Deployment Configuration

### Docker Configuration
**File**: `docker-compose.yml`

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.production
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:5000/api/v1
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/mewayz
      - JWT_SECRET=${JWT_SECRET}
      - FRONTEND_URL=http://frontend:3000
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## Success Metrics

### Technical Metrics
- **API Integration**: 100% backend endpoints covered
- **Styling Consistency**: 100% match with core-2-original/ui
- **Performance**: < 2 second page load times
- **Security**: All authentication working

### Business Metrics
- **User Experience**: Seamless frontend-backend integration
- **Functionality**: All business operations available through UI
- **Scalability**: Enterprise-ready architecture
- **Maintainability**: Clean, documented code

## Conclusion

This implementation plan provides a comprehensive roadmap for merging the frontend and backend into a unified enterprise application. By following the step-by-step approach and maintaining exact styling consistency with core-2-original/ui, we can create a professional, scalable application that delivers exceptional user experience.

The key to success is maintaining the existing design system while building robust API integration that provides seamless functionality across all business operations. 