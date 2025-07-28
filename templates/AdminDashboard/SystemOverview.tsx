"use client";

import { useState, useEffect } from "react";
import { Users, ShoppingCart, BookOpen, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const SystemOverview = () => {
    const [systemMetrics, setSystemMetrics] = useState({
        totalUsers: 12450,
        activeUsers: 8920,
        totalRevenue: 1250000,
        monthlyRevenue: 89000,
        totalProducts: 3450,
        totalCourses: 1234,
        systemUptime: 99.99,
        activeOrders: 156,
        pendingApprovals: 23,
        systemAlerts: 2
    });

    const [recentActivity, setRecentActivity] = useState([
        {
            id: 1,
            type: "user_registration",
            message: "New user registered: john.doe@example.com",
            timestamp: "2 minutes ago",
            status: "success"
        },
        {
            id: 2,
            type: "payment_processed",
            message: "Payment processed: $299.99 - Pro Plan",
            timestamp: "5 minutes ago",
            status: "success"
        },
        {
            id: 3,
            type: "system_alert",
            message: "High CPU usage detected on server-02",
            timestamp: "10 minutes ago",
            status: "warning"
        },
        {
            id: 4,
            type: "content_created",
            message: "New course created: Advanced React Development",
            timestamp: "15 minutes ago",
            status: "success"
        }
    ]);

    const metrics = [
        {
            title: "Total Users",
            value: systemMetrics.totalUsers.toLocaleString(),
            change: "+12.5%",
            changeType: "positive",
            icon: Users,
            color: "blue"
        },
        {
            title: "Active Users",
            value: systemMetrics.activeUsers.toLocaleString(),
            change: "+8.3%",
            changeType: "positive",
            icon: Users,
            color: "green"
        },
        {
            title: "Total Revenue",
            value: `$${systemMetrics.totalRevenue.toLocaleString()}`,
            change: "+15.2%",
            changeType: "positive",
            icon: DollarSign,
            color: "green"
        },
        {
            title: "Monthly Revenue",
            value: `$${systemMetrics.monthlyRevenue.toLocaleString()}`,
            change: "+22.1%",
            changeType: "positive",
            icon: TrendingUp,
            color: "blue"
        },
        {
            title: "Total Products",
            value: systemMetrics.totalProducts.toLocaleString(),
            change: "+5.7%",
            changeType: "positive",
            icon: ShoppingCart,
            color: "purple"
        },
        {
            title: "Total Courses",
            value: systemMetrics.totalCourses.toLocaleString(),
            change: "+18.9%",
            changeType: "positive",
            icon: BookOpen,
            color: "orange"
        }
    ];

    const systemStatus = [
        {
            service: "API Gateway",
            status: "operational",
            uptime: "99.99%",
            responseTime: "45ms"
        },
        {
            service: "Database",
            status: "operational",
            uptime: "99.98%",
            responseTime: "12ms"
        },
        {
            service: "Payment Processing",
            status: "operational",
            uptime: "99.97%",
            responseTime: "89ms"
        },
        {
            service: "File Storage",
            status: "operational",
            uptime: "99.96%",
            responseTime: "156ms"
        },
        {
            service: "Email Service",
            status: "degraded",
            uptime: "98.5%",
            responseTime: "2.3s"
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "operational":
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case "degraded":
                return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            case "outage":
                return <AlertTriangle className="h-5 w-5 text-red-500" />;
            default:
                return <Clock className="h-5 w-5 text-gray-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "operational":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "degraded":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            case "outage":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            {/* System Metrics */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">System Metrics</h2>
                    <p className="text-t-secondary">Real-time overview of platform performance</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <metric.icon className={`h-6 w-6 text-${metric.color}-600 mr-2`} />
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                        {metric.title}
                                    </span>
                                </div>
                                <span className={`text-sm font-medium ${
                                    metric.changeType === "positive" ? "text-green-600" : "text-red-600"
                                }`}>
                                    {metric.change}
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {metric.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* System Status */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">System Status</h2>
                    <p className="text-t-secondary">Current status of all system services</p>
                </div>
                <div className="space-y-4">
                    {systemStatus.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-center">
                                {getStatusIcon(service.status)}
                                <div className="ml-3">
                                    <div className="font-medium text-gray-900 dark:text-white">
                                        {service.service}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Response: {service.responseTime}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                                    {service.status}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {service.uptime} uptime
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Recent Activity</h2>
                    <p className="text-t-secondary">Latest system events and user activities</p>
                </div>
                <div className="space-y-4">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                                activity.status === "success" ? "bg-green-500" : 
                                activity.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                            }`}></div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-900 dark:text-white">
                                    {activity.message}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {activity.timestamp}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Quick Actions</h2>
                    <p className="text-t-secondary">Common administrative tasks</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                        <div className="text-blue-600 text-lg mb-2">👥</div>
                        <div className="font-medium text-gray-900 dark:text-white">Manage Users</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">View and edit user accounts</div>
                    </button>
                    <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                        <div className="text-green-600 text-lg mb-2">💰</div>
                        <div className="font-medium text-gray-900 dark:text-white">View Revenue</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Financial reports and analytics</div>
                    </button>
                    <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                        <div className="text-purple-600 text-lg mb-2">📝</div>
                        <div className="font-medium text-gray-900 dark:text-white">Content Review</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Review pending content</div>
                    </button>
                    <button className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors">
                        <div className="text-orange-600 text-lg mb-2">⚙️</div>
                        <div className="font-medium text-gray-900 dark:text-white">System Settings</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Configure platform settings</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SystemOverview; 