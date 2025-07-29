"use client";

import { useState, useEffect } from "react";
export const dynamic = 'force-dynamic';

import { apiClient } from "@/infrastructure/api/apiClient";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";

interface SystemStats {
    totalUsers: number;
    activeUsers: number;
    totalProducts: number;
    totalOrders: number;
    totalRevenue: number;
    systemLoad: number;
    uptime: number;
    activeSessions: number;
}

const AdminDashboard = () => {
    const [stats, setStats] = useState<SystemStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSystemStats();
    }, []);

    const fetchSystemStats = async () => {
        try {
            setLoading(true);
            // In a real implementation, you would have a dedicated system stats endpoint
            // For now, we'll simulate the data
            const mockStats: SystemStats = {
                totalUsers: 1250,
                activeUsers: 847,
                totalProducts: 342,
                totalOrders: 2156,
                totalRevenue: 125430.50,
                systemLoad: 23.5,
                uptime: 99.8,
                activeSessions: 156
            };
            setStats(mockStats);
        } catch (error: any) {
            setError("Failed to load system statistics");
            console.error("Error fetching system stats:", error);
        } finally {
            setLoading(false);
        }
    };

    const adminActions = [
        {
            title: "User Management",
            description: "Manage user accounts and permissions",
            icon: "users",
            href: "/admin/users",
            color: "blue"
        },
        {
            title: "System Settings",
            description: "Configure application settings",
            icon: "settings",
            href: "/admin/settings",
            color: "green"
        },
        {
            title: "Security Center",
            description: "Monitor security and access logs",
            icon: "shield",
            href: "/admin/security",
            color: "red"
        },
        {
            title: "Database Admin",
            description: "Manage database and backups",
            icon: "database",
            href: "/admin/database",
            color: "purple"
        },
        {
            title: "Analytics & Reports",
            description: "View system analytics and reports",
            icon: "bar-chart",
            href: "/admin/analytics",
            color: "orange"
        },
        {
            title: "Content Management",
            description: "Manage platform content and media",
            icon: "file-text",
            href: "/admin/content",
            color: "indigo"
        }
    ];

    if (loading) {
        return (
            <Layout title="Admin Dashboard">
                <div className="center">
                    <div className="text-gray-600">Loading system statistics...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Admin Dashboard">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="System Overview">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4">
                                {error}
                            </div>
                        )}
                        
                        {stats && (
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">
                                                {stats.totalUsers.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-gray-600">Total Users</div>
                                        </div>
                                        <Icon name="users" className="w-8 h-8 text-blue-500" />
                                    </div>
                                </div>
                                
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">
                                                {stats.activeUsers.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-gray-600">Active Users</div>
                                        </div>
                                        <Icon name="user-check" className="w-8 h-8 text-green-500" />
                                    </div>
                                </div>
                                
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600">
                                                {stats.totalProducts.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-gray-600">Total Products</div>
                                        </div>
                                        <Icon name="package" className="w-8 h-8 text-purple-500" />
                                    </div>
                                </div>
                                
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-orange-600">
                                                ${stats.totalRevenue.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-gray-600">Total Revenue</div>
                                        </div>
                                        <Icon name="dollar-sign" className="w-8 h-8 text-orange-500" />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="grid grid-cols-1 gap-4">
                            {adminActions.map((action, index) => (
                                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                                                <Icon name={action.icon} className={`w-5 h-5 text-${action.color}-600`} />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{action.title}</h3>
                                                <p className="text-sm text-gray-600">{action.description}</p>
                                            </div>
                                        </div>
                                        <Button href={action.href} size="sm" isStroke>
                                            Manage
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="System Health">
                        {stats && (
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">System Load</span>
                                        <span className="text-sm text-gray-600">{stats.systemLoad}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full ${stats.systemLoad > 80 ? 'bg-red-500' : stats.systemLoad > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                            style={{ width: `${stats.systemLoad}%` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Uptime</span>
                                        <span className="text-sm text-gray-600">{stats.uptime}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="h-2 rounded-full bg-green-500"
                                            style={{ width: `${stats.uptime}%` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Active Sessions</span>
                                        <span className="text-sm text-gray-600">{stats.activeSessions}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="h-2 rounded-full bg-blue-500"
                                            style={{ width: `${Math.min((stats.activeSessions / 200) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                    
                    <Card title="Recent Activity" className="mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">New user registration</p>
                                    <p className="text-xs text-gray-500">2 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">Order completed</p>
                                    <p className="text-xs text-gray-500">5 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">System backup completed</p>
                                    <p className="text-xs text-gray-500">1 hour ago</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard; 