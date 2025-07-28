"use client";

import { useState, useEffect } from "react";
import { DollarSign, TrendingUp, TrendingDown, Users, ShoppingCart, Calendar, Download, Filter } from "lucide-react";

const FinancialManagement = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("30d");
    const [selectedView, setSelectedView] = useState("revenue");

    const financialData = {
        totalRevenue: 1250000,
        monthlyRevenue: 89000,
        totalTransactions: 45678,
        averageOrderValue: 273.45,
        revenueGrowth: 15.2,
        transactionGrowth: 8.7,
        refundRate: 2.3,
        chargebackRate: 0.8
    };

    const revenueByPlan = [
        { plan: "Free", revenue: 0, users: 3450, percentage: 0 },
        { plan: "Pro", revenue: 456000, users: 2340, percentage: 36.5 },
        { plan: "Enterprise", revenue: 794000, users: 156, percentage: 63.5 }
    ];

    const recentTransactions = [
        {
            id: 1,
            user: "John Doe",
            type: "subscription",
            amount: 299.99,
            plan: "Pro",
            status: "completed",
            date: "2024-01-15 10:30"
        },
        {
            id: 2,
            user: "Jane Smith",
            type: "course_purchase",
            amount: 199.99,
            plan: "Course",
            status: "completed",
            date: "2024-01-15 09:15"
        },
        {
            id: 3,
            user: "Mike Johnson",
            type: "refund",
            amount: -49.99,
            plan: "Pro",
            status: "processed",
            date: "2024-01-15 08:45"
        },
        {
            id: 4,
            user: "Sarah Wilson",
            type: "subscription",
            amount: 999.99,
            plan: "Enterprise",
            status: "pending",
            date: "2024-01-15 08:20"
        }
    ];

    const monthlyRevenue = [
        { month: "Jan", revenue: 75000 },
        { month: "Feb", revenue: 82000 },
        { month: "Mar", revenue: 78000 },
        { month: "Apr", revenue: 85000 },
        { month: "May", revenue: 92000 },
        { month: "Jun", revenue: 88000 },
        { month: "Jul", revenue: 95000 },
        { month: "Aug", revenue: 89000 },
        { month: "Sep", revenue: 92000 },
        { month: "Oct", revenue: 87000 },
        { month: "Nov", revenue: 94000 },
        { month: "Dec", revenue: 89000 }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "pending":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
            case "failed":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200";
            case "processed":
                return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-h4 mb-2">Financial Management</h2>
                        <p className="text-t-secondary">Revenue tracking, billing, and financial reports</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                            <option value="1y">Last year</option>
                        </select>
                        <button className="btn-secondary">
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold">${financialData.totalRevenue.toLocaleString()}</div>
                                <div className="text-blue-100">Total Revenue</div>
                            </div>
                            <DollarSign className="h-8 w-8 text-blue-200" />
                        </div>
                        <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">+{financialData.revenueGrowth}%</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold">${financialData.monthlyRevenue.toLocaleString()}</div>
                                <div className="text-green-100">Monthly Revenue</div>
                            </div>
                            <TrendingUp className="h-8 w-8 text-green-200" />
                        </div>
                        <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">+{financialData.revenueGrowth}%</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold">{financialData.totalTransactions.toLocaleString()}</div>
                                <div className="text-purple-100">Total Transactions</div>
                            </div>
                            <ShoppingCart className="h-8 w-8 text-purple-200" />
                        </div>
                        <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">+{financialData.transactionGrowth}%</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold">${financialData.averageOrderValue}</div>
                                <div className="text-orange-100">Avg Order Value</div>
                            </div>
                            <Users className="h-8 w-8 text-orange-200" />
                        </div>
                        <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">+5.2%</span>
                        </div>
                    </div>
                </div>

                {/* Revenue by Plan */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue by Plan</h3>
                    <div className="space-y-4">
                        {revenueByPlan.map((plan, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-white">{plan.plan}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{plan.users} users</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-gray-900 dark:text-white">
                                        ${plan.revenue.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {plan.percentage}% of total
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">User</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Type</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Amount</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Plan</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((transaction) => (
                                    <tr key={transaction.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-gray-900 dark:text-white">{transaction.user}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                                {transaction.type.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`text-sm font-medium ${
                                                transaction.amount < 0 ? 'text-red-600' : 'text-gray-900 dark:text-white'
                                            }`}>
                                                ${Math.abs(transaction.amount)}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{transaction.plan}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Financial Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Refund Rate</h3>
                        <TrendingDown className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {financialData.refundRate}%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Lower than industry average (3.5%)
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chargeback Rate</h3>
                        <TrendingDown className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {financialData.chargebackRate}%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Excellent rate (industry avg: 1.2%)
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Growth</h3>
                        <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        +{financialData.revenueGrowth}%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        vs last period
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialManagement; 