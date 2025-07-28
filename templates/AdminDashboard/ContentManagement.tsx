"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, Clock, Star } from "lucide-react";

const ContentManagement = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const products = [
        {
            id: 1,
            name: "Premium Widget Pro",
            creator: "John Doe",
            category: "Electronics",
            status: "approved",
            price: 299.99,
            sales: 156,
            revenue: 46799.44,
            rating: 4.8,
            createdAt: "2024-01-10"
        },
        {
            id: 2,
            name: "Digital Art Collection",
            creator: "Jane Smith",
            category: "Art",
            status: "pending",
            price: 49.99,
            sales: 23,
            revenue: 1149.77,
            rating: 4.5,
            createdAt: "2024-01-12"
        },
        {
            id: 3,
            name: "Business Template Pack",
            creator: "Mike Johnson",
            category: "Templates",
            status: "rejected",
            price: 199.99,
            sales: 0,
            revenue: 0,
            rating: 0,
            createdAt: "2024-01-08"
        }
    ];

    const courses = [
        {
            id: 1,
            name: "Advanced React Development",
            instructor: "Sarah Wilson",
            category: "Programming",
            status: "approved",
            price: 199.99,
            students: 234,
            revenue: 46799.66,
            rating: 4.9,
            createdAt: "2024-01-05"
        },
        {
            id: 2,
            name: "Digital Marketing Mastery",
            instructor: "David Brown",
            category: "Marketing",
            status: "pending",
            price: 149.99,
            students: 89,
            revenue: 13349.11,
            rating: 4.7,
            createdAt: "2024-01-11"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "pending":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            case "rejected":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "approved":
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case "pending":
                return <Clock className="h-4 w-4 text-yellow-500" />;
            case "rejected":
                return <XCircle className="h-4 w-4 text-red-500" />;
            default:
                return <Clock className="h-4 w-4 text-gray-500" />;
        }
    };

    const renderProductsTable = () => (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Product</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Creator</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Sales</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Revenue</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Rating</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="py-4 px-4">
                                <div>
                                    <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">ID: {product.id}</div>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">{product.creator}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">{product.category}</span>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center">
                                    {getStatusIcon(product.status)}
                                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                                        {product.status}
                                    </span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">${product.price}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">{product.sales}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">${product.revenue.toLocaleString()}</span>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                    <span className="ml-1 text-sm text-gray-900 dark:text-white">{product.rating}</span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center space-x-2">
                                    <button className="p-1 text-blue-600 hover:text-blue-700" title="Edit">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:text-gray-700" title="View">
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button className="p-1 text-red-600 hover:text-red-700" title="Delete">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderCoursesTable = () => (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Course</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Instructor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Revenue</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Rating</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="py-4 px-4">
                                <div>
                                    <div className="font-medium text-gray-900 dark:text-white">{course.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">ID: {course.id}</div>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">{course.instructor}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">{course.category}</span>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center">
                                    {getStatusIcon(course.status)}
                                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                                        {course.status}
                                    </span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">${course.price}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">{course.students}</span>
                            </td>
                            <td className="py-4 px-4">
                                <span className="text-sm text-gray-900 dark:text-white">${course.revenue.toLocaleString()}</span>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                    <span className="ml-1 text-sm text-gray-900 dark:text-white">{course.rating}</span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center space-x-2">
                                    <button className="p-1 text-blue-600 hover:text-blue-700" title="Edit">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                    <button className="p-1 text-gray-600 hover:text-gray-700" title="View">
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button className="p-1 text-red-600 hover:text-red-700" title="Delete">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-h4 mb-2">Content Management</h2>
                        <p className="text-t-secondary">Manage products, courses, and platform content</p>
                    </div>
                    <button className="btn-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Content
                    </button>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <nav className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === "products"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Products ({products.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("courses")}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === "courses"
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Courses ({courses.length})
                        </button>
                    </nav>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                        <option value="all">All Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Filter className="h-4 w-4 mr-2 inline" />
                        More Filters
                    </button>
                </div>

                {/* Content Table */}
                {activeTab === "products" ? renderProductsTable() : renderCoursesTable()}

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Showing {activeTab === "products" ? products.length : courses.length} items
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                            Previous
                        </button>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</span>
                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <span className="text-2xl">📦</span>
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {products.length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Total Products</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <span className="text-2xl">📚</span>
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {courses.length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Total Courses</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                            <Clock className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {products.filter(p => p.status === "pending").length + courses.filter(c => c.status === "pending").length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Pending Review</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <CheckCircle className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {products.filter(p => p.status === "approved").length + courses.filter(c => c.status === "approved").length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Approved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement; 