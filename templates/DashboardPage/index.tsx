"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";

const DashboardPage = () => {
    const [selectedPeriod] = useState("This month");
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recentActivity, setRecentActivity] = useState([]);

    // Fetch real dashboard data from API
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/api/v1/analytics/dashboard', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch dashboard data: ${response.status}`);
                }

                const data = await response.json();
                
                if (data.success && data.data) {
                    const overview = data.data.overview;
                    const recentOrders = data.data.recentOrders || [];
                    
                    // Transform API data to stats format
                    const transformedStats = [
                        {
                            title: "Total Revenue",
                            value: `$${overview.totalRevenue?.toLocaleString() || '0'}`,
                            change: overview.revenueGrowth ? `${overview.revenueGrowth > 0 ? '+' : ''}${overview.revenueGrowth}%` : '+0%',
                            trend: (overview.revenueGrowth || 0) >= 0 ? "up" : "down",
                            icon: "dollar-sign",
                        },
                        {
                            title: "Total Orders",
                            value: overview.totalOrders?.toLocaleString() || '0',
                            change: overview.ordersGrowth ? `${overview.ordersGrowth > 0 ? '+' : ''}${overview.ordersGrowth}%` : '+0%',
                            trend: (overview.ordersGrowth || 0) >= 0 ? "up" : "down",
                            icon: "shopping-cart",
                        },
                        {
                            title: "Total Customers",
                            value: overview.totalCustomers?.toLocaleString() || '0',
                            change: overview.customersGrowth ? `${overview.customersGrowth > 0 ? '+' : ''}${overview.customersGrowth}%` : '+0%',
                            trend: (overview.customersGrowth || 0) >= 0 ? "up" : "down",
                            icon: "users",
                        },
                        {
                            title: "Conversion Rate",
                            value: `${overview.conversionRate || 0}%`,
                            change: '+0%', // TODO: Calculate conversion rate growth
                            trend: "up",
                            icon: "trending-up",
                        },
                    ];

                    setStats(transformedStats);

                    // Transform recent orders to activity format
                    const transformedActivity = recentOrders.slice(0, 3).map(order => ({
                        id: order._id,
                        type: 'order',
                        title: 'New order received',
                        description: `Order #${order._id?.slice(-6) || 'N/A'} - $${order.totalAmount?.toLocaleString() || '0'}`,
                        timestamp: order.createdAt ? new Date(order.createdAt).toLocaleString() : 'Recently',
                        icon: 'shopping-cart',
                        iconColor: 'bg-primary-01'
                    }));

                    setRecentActivity(transformedActivity);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error) {
                console.error('Failed to fetch dashboard stats:', error);
                setError(error.message);
                // Fallback to empty stats to prevent UI breaking
                setStats([
                    {
                        title: "Total Revenue",
                        value: "$0",
                        change: "+0%",
                        trend: "up",
                        icon: "dollar-sign",
                    },
                    {
                        title: "Total Orders",
                        value: "0",
                        change: "+0%",
                        trend: "up",
                        icon: "shopping-cart",
                    },
                    {
                        title: "Total Customers",
                        value: "0",
                        change: "+0%",
                        trend: "up",
                        icon: "users",
                    },
                    {
                        title: "Conversion Rate",
                        value: "0%",
                        change: "+0%",
                        trend: "up",
                        icon: "trending-up",
                    },
                ]);
                setRecentActivity([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [selectedPeriod]); // Refetch when period changes

    if (loading) {
        return (
            <Layout title="Dashboard">
                <div className="space-y-6">
                    {/* Loading skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="p-6">
                                <div className="animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                                    <div className="h-8 bg-gray-200 rounded w-16 mb-1"></div>
                                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <Card className="p-6">
                        <div className="animate-pulse">
                            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-12 bg-gray-200 rounded"></div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Dashboard">
            <div className="space-y-6">
                {/* Error state */}
                {error && (
                    <Card className="p-4 border-red-200 bg-red-50">
                        <div className="flex items-center space-x-2">
                            <Icon name="alert-circle" className="w-5 h-5 text-red-500" />
                            <p className="text-red-700">
                                Unable to load dashboard data: {error}
                            </p>
                        </div>
                    </Card>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-t-secondary text-sm font-medium">
                                        {stat.title}
                                    </p>
                                    <p className="text-t-primary text-2xl font-bold mt-2">
                                        {stat.value}
                                    </p>
                                    <p className={`text-sm mt-1 ${
                                        stat.trend === "up" 
                                            ? "text-green-600" 
                                            : "text-red-600"
                                    }`}>
                                        {stat.change} from last period
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-b-surface1 rounded-full flex items-center justify-center">
                                    <Icon 
                                        name={stat.icon} 
                                        className="w-6 h-6 text-t-secondary" 
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Recent Activity */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-t-primary mb-4">
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {recentActivity.length > 0 ? (
                            recentActivity.map((activity, index) => (
                                <div key={activity.id || index} className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 ${activity.iconColor} rounded-full flex items-center justify-center`}>
                                        <Icon name={activity.icon} className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-t-primary font-medium">{activity.title}</p>
                                        <p className="text-t-secondary text-sm">{activity.description}</p>
                                    </div>
                                    <span className="text-t-secondary text-sm">{activity.timestamp}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <Icon name="activity" className="w-12 h-12 text-t-secondary mx-auto mb-3" />
                                <p className="text-t-secondary">No recent activity</p>
                                <p className="text-t-tertiary text-sm">Activity will appear here as you use the platform</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default DashboardPage; 