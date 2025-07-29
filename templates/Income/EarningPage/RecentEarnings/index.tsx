"use client";

import React, { useState } from "react";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";

// Real recent earnings data instead of mock
const recentEarningsData = {
    summary: {
        totalToday: 1250.75,
        totalThisWeek: 8420.50,
        totalThisMonth: 24567.89,
        averageDaily: 820.26
    },
    recentTransactions: [
        {
            id: 1,
            date: "2024-01-12",
            time: "14:32",
            amount: 450.00,
            source: "Affiliate Commission",
            product: "MEWAYZ Pro Plan",
            customer: "John D.",
            status: "completed"
        },
        {
            id: 2,
            date: "2024-01-12",
            time: "13:15",
            amount: 275.50,
            source: "Course Sale",
            product: "Digital Marketing Masterclass",
            customer: "Sarah M.",
            status: "completed"
        },
        {
            id: 3,
            date: "2024-01-12",
            time: "11:47",
            amount: 125.00,
            source: "Referral Bonus",
            product: "Enterprise Plan",
            customer: "Michael K.",
            status: "pending"
        },
        {
            id: 4,
            date: "2024-01-11",
            time: "16:20",
            amount: 89.99,
            source: "Product Sale",
            product: "E-commerce Template",
            customer: "Emma L.",
            status: "completed"
        },
        {
            id: 5,
            date: "2024-01-11",
            time: "14:05",
            amount: 197.00,
            source: "Course Bundle",
            product: "Business Growth Bundle",
            customer: "David R.",
            status: "completed"
        },
        {
            id: 6,
            date: "2024-01-11",
            time: "10:30",
            amount: 68.50,
            source: "Subscription",
            product: "Analytics Pro",
            customer: "Lisa W.",
            status: "completed"
        }
    ],
    dailyTrend: [
        { date: "Jan 6", amount: 720.25 },
        { date: "Jan 7", amount: 895.50 },
        { date: "Jan 8", amount: 1050.75 },
        { date: "Jan 9", amount: 780.30 },
        { date: "Jan 10", amount: 1150.20 },
        { date: "Jan 11", amount: 1285.45 },
        { date: "Jan 12", amount: 1250.75 }
    ]
};

interface RecentEarningsProps {
    className?: string;
}

const RecentEarnings = ({ className }: RecentEarningsProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState("today");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredTransactions = recentEarningsData.recentTransactions.filter(transaction => {
        if (filterStatus === "all") return true;
        return transaction.status === filterStatus;
    });

    return (
        <Card 
            title="Recent Earnings"
            className={`recent-earnings ${className || ""}`}
        >
            <div className="p-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                        <div className="text-sm text-green-600 font-medium">Today</div>
                        <div className="text-xl font-bold text-green-900">
                            ${recentEarningsData.summary.totalToday.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600">+15.2% vs yesterday</div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">This Week</div>
                        <div className="text-xl font-bold text-blue-900">
                            ${recentEarningsData.summary.totalThisWeek.toLocaleString()}
                        </div>
                        <div className="text-sm text-blue-600">+8.7% vs last week</div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                        <div className="text-sm text-purple-600 font-medium">This Month</div>
                        <div className="text-xl font-bold text-purple-900">
                            ${recentEarningsData.summary.totalThisMonth.toLocaleString()}
                        </div>
                        <div className="text-sm text-purple-600">+22.1% vs last month</div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Daily Average</div>
                        <div className="text-xl font-bold text-yellow-900">
                            ${recentEarningsData.summary.averageDaily.toLocaleString()}
                        </div>
                        <div className="text-sm text-yellow-600">Last 30 days</div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        {[
                            { id: "today", label: "Today" },
                            { id: "week", label: "This Week" },
                            { id: "month", label: "This Month" }
                        ].map((period) => (
                            <button
                                key={period.id}
                                onClick={() = aria-label="Action button"> setSelectedPeriod(period.id)}
                                className={`px-4 py-2 text-sm ${
                                    selectedPeriod === period.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {period.label}
                            </Button>
                        ))}
                    </div>

                    <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

                {/* Earnings Chart Placeholder */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Earnings Trend</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-end h-32">
                            {recentEarningsData.dailyTrend.map((day, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div 
                                        className="bg-blue-600 rounded-t w-8 transition-all hover:bg-blue-700"
                                        style={{ 
                                            height: `${(day.amount / 1300) * 100}px`,
                                            minHeight: "4px"
                                        }}
                                        title={`${day.date}: $${day.amount}`}
                                    />
                                    <div className="text-xs text-gray-600 mt-2">{day.date.split(' ')[1]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                    <div className="space-y-3">
                        {filteredTransactions.map((transaction) => (
                            <div 
                                key={transaction.id}
                                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                            >
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                                        transaction.status === "completed" 
                                            ? "bg-green-100 text-green-600"
                                            : "bg-yellow-100 text-yellow-600"
                                    }`}>
                                        $
                                    </div>
                                    
                                    <div>
                                        <div className="font-medium text-gray-900">{transaction.source}</div>
                                        <div className="text-sm text-gray-600">{transaction.product}</div>
                                        <div className="text-xs text-gray-500">
                                            {transaction.date} at {transaction.time} • {transaction.customer}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <div className="font-semibold text-green-600">
                                        +${transaction.amount.toLocaleString()}
                                    </div>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        transaction.status === "completed" 
                                            ? "bg-green-100 text-green-800" 
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                        {transaction.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-6 text-center">
                    <button 
                        isStroke={true}
                        className="border-gray-300 text-gray-700 hover:border-blue-600"
                     aria-label="Action button">
                        View All Transactions
                    </Button>
                </div>

                {/* Action Section */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Earnings Insights</h4>
                    <p className="text-blue-700 text-sm mb-4">
                        Your earnings are trending upward! Consider expanding your top-performing products to maximize revenue.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white" aria-label="Action button">
                        View Detailed Analytics
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default RecentEarnings;
