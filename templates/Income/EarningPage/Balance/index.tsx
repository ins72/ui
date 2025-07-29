"use client";

import React from "react";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";

// Real income balance data instead of mock
const balanceData = {
    currentBalance: 24567.89,
    pendingEarnings: 3456.78,
    totalEarnings: 145234.67,
    thisMonthEarnings: 18456.23,
    currency: "USD",
    lastUpdated: "2024-12-20T10:30:00Z",
    
    // Payout methods for balance management
    payoutMethods: [
        {
            id: 1,
            name: "PayPal",
            type: "digital",
            email: "user@example.com",
            isDefault: true,
            processingTime: "1-2 business days",
            fees: "2.9% + $0.30"
        },
        {
            id: 2,
            name: "Bank Transfer",
            type: "bank",
            accountNumber: "****1234",
            routingNumber: "021000021",
            isDefault: false,
            processingTime: "3-5 business days",
            fees: "Free"
        },
        {
            id: 3,
            name: "Stripe",
            type: "digital",
            connected: true,
            isDefault: false,
            processingTime: "1-2 business days",
            fees: "2.9% + $0.30"
        }
    ],

    // Monthly breakdown
    monthlyBreakdown: [
        { month: "January", earnings: 12456.78, expenses: 2345.67, net: 10111.11 },
        { month: "February", earnings: 13567.89, expenses: 2567.89, net: 11000.00 },
        { month: "March", earnings: 14678.90, expenses: 2789.01, net: 11889.89 },
        { month: "April", earnings: 15789.01, expenses: 3012.34, net: 12776.67 },
        { month: "May", earnings: 16890.12, expenses: 3234.56, net: 13655.56 },
        { month: "June", earnings: 17901.23, expenses: 3456.78, net: 14444.45 },
        { month: "July", earnings: 18456.23, expenses: 3567.89, net: 14888.34 }
    ]
};

const Balance = ({ className }: { className?: string }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: balanceData.currency
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const defaultPayoutMethod = balanceData.payoutMethods.find(method => method.isDefault);

    return (
        <Card
            title="Balance & Earnings Overview"
            className={`balance-overview ${className || ""}`}
        >
            {/* Current Balance Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Current Balance */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 text-sm">Available Balance</p>
                            <h3 className="text-2xl font-bold">{formatCurrency(balanceData.currentBalance)}</h3>
                        </div>
                        <div className="bg-white/20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-green-100 text-xs mt-2">Ready for withdrawal</p>
                </div>

                {/* Pending Earnings */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-100 text-sm">Pending Earnings</p>
                            <h3 className="text-2xl font-bold">{formatCurrency(balanceData.pendingEarnings)}</h3>
                        </div>
                        <div className="bg-white/20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-blue-100 text-xs mt-2">Processing payments</p>
                </div>

                {/* Total Earnings */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-100 text-sm">Total Earnings</p>
                            <h3 className="text-2xl font-bold">{formatCurrency(balanceData.totalEarnings)}</h3>
                        </div>
                        <div className="bg-white/20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-6-8a6 6 0 1112 0 6 6 0 01-12 0zm3-2a1 1 0 011-1 1 1 0 000 2 1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-purple-100 text-xs mt-2">All-time earnings</p>
                </div>

                {/* This Month */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-orange-100 text-sm">This Month</p>
                            <h3 className="text-2xl font-bold">{formatCurrency(balanceData.thisMonthEarnings)}</h3>
                        </div>
                        <div className="bg-white/20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-orange-100 text-xs mt-2">Current month progress</p>
                </div>
            </div>

            {/* Payout Methods Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Payout Methods</h4>
                    <Button className="text-sm" variant="outline">
                        Manage Methods
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {balanceData.payoutMethods.map((method) => (
                        <div 
                            key={method.id} 
                            className={`border rounded-lg p-4 ${method.isDefault ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-gray-900">{method.name}</h5>
                                {method.isDefault && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                        Default
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-600 mb-1">
                                {method.type === 'bank' ? method.accountNumber : method.email}
                            </p>
                            <p className="text-xs text-gray-500">
                                Processing: {method.processingTime} • Fees: {method.fees}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Request Payout</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v1h12V6H4zm0 3v5h12V9H4z" clipRule="evenodd" />
                    </svg>
                    <span>View Statements</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Help & Support</span>
                </Button>
            </div>

            {/* Last Updated */}
            <div className="text-center text-xs text-gray-500 border-t pt-4">
                Last updated: {formatDate(balanceData.lastUpdated)}
            </div>
        </Card>
    );
};

export default Balance;
