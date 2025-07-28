"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Plus, Edit, Trash2, Eye, Shield, UserCheck, UserX, Mail, Phone, Calendar, Users } from "lucide-react";

const UserManagement = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "admin",
            status: "active",
            plan: "Enterprise",
            lastLogin: "2024-01-15 10:30",
            registeredDate: "2023-06-15",
            totalRevenue: 45000,
            products: 12,
            courses: 5
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "user",
            status: "active",
            plan: "Pro",
            lastLogin: "2024-01-15 09:15",
            registeredDate: "2023-08-22",
            totalRevenue: 12500,
            products: 8,
            courses: 3
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike.johnson@example.com",
            role: "user",
            status: "suspended",
            plan: "Free",
            lastLogin: "2024-01-10 14:20",
            registeredDate: "2023-11-05",
            totalRevenue: 0,
            products: 0,
            courses: 0
        },
        {
            id: 4,
            name: "Sarah Wilson",
            email: "sarah.wilson@example.com",
            role: "moderator",
            status: "active",
            plan: "Pro",
            lastLogin: "2024-01-15 11:45",
            registeredDate: "2023-07-10",
            totalRevenue: 8900,
            products: 6,
            courses: 2
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [roleFilter, setRoleFilter] = useState("all");
    const [selectedUser, setSelectedUser] = useState(null);
    const [showUserModal, setShowUserModal] = useState(false);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || user.status === statusFilter;
        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        
        return matchesSearch && matchesStatus && matchesRole;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "suspended":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200";
            case "pending":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const getRoleColor = (role: string) => {
        switch (role) {
            case "admin":
                return "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200";
            case "moderator":
                return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200";
            case "user":
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    const handleUserAction = (action: string, userId: number) => {
        switch (action) {
            case "edit":
                setSelectedUser(users.find(u => u.id === userId));
                setShowUserModal(true);
                break;
            case "delete":
                if (confirm("Are you sure you want to delete this user?")) {
                    setUsers(users.filter(u => u.id !== userId));
                }
                break;
            case "suspend":
                setUsers(users.map(u => 
                    u.id === userId ? { ...u, status: "suspended" } : u
                ));
                break;
            case "activate":
                setUsers(users.map(u => 
                    u.id === userId ? { ...u, status: "active" } : u
                ));
                break;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-h4 mb-2">User Management</h2>
                        <p className="text-t-secondary">Manage all users, roles, and permissions</p>
                    </div>
                    <button className="btn-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Add User
                    </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
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
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>
                        <option value="pending">Pending</option>
                    </select>
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                        <option value="all">All Roles</option>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="user">User</option>
                    </select>
                    <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Filter className="h-4 w-4 mr-2 inline" />
                        More Filters
                    </button>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">User</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Role</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Plan</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Revenue</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Last Login</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td className="py-4 px-4">
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-900 dark:text-white">{user.plan}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-900 dark:text-white">
                                            ${user.totalRevenue.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.lastLogin}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleUserAction("edit", user.id)}
                                                className="p-1 text-blue-600 hover:text-blue-700"
                                                title="Edit User"
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleUserAction("view", user.id)}
                                                className="p-1 text-gray-600 hover:text-gray-700"
                                                title="View Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            {user.status === "active" ? (
                                                <button
                                                    onClick={() => handleUserAction("suspend", user.id)}
                                                    className="p-1 text-yellow-600 hover:text-yellow-700"
                                                    title="Suspend User"
                                                >
                                                    <UserX className="h-4 w-4" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleUserAction("activate", user.id)}
                                                    className="p-1 text-green-600 hover:text-green-700"
                                                    title="Activate User"
                                                >
                                                    <UserCheck className="h-4 w-4" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleUserAction("delete", user.id)}
                                                className="p-1 text-red-600 hover:text-red-700"
                                                title="Delete User"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Showing {filteredUsers.length} of {users.length} users
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

            {/* User Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {users.length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Total Users</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <UserCheck className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {users.filter(u => u.status === "active").length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <Shield className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {users.filter(u => u.role === "admin").length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Admins</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                            <UserX className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {users.filter(u => u.status === "suspended").length}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Suspended</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement; 