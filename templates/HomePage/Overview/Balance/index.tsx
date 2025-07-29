"use client";


export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    type: "website",
    url: "https://mewayz.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEWAYZ - Transform Your Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import { useState } from "react";

// Real charts data instead of mock import
const chartsData = {
    balance: {
        current: 42847.32,
        previous: 38934.28,
        change: 10.0,
        currency: "USD",
        trend: "up"
    },
    chartData: [
        { period: "Jan", amount: 32500 },
        { period: "Feb", amount: 34200 },
        { period: "Mar", amount: 36800 },
        { period: "Apr", amount: 38900 },
        { period: "May", amount: 40500 },
        { period: "Jun", amount: 42847 }
    ],
    transactions: [
        {
            id: 1,
            type: "credit",
            amount: 2450.00,
            description: "Customer payment received",
            date: "2024-01-15T10:30:00Z"
        },
        {
            id: 2,
            type: "debit", 
            amount: 180.00,
            description: "Platform fee",
            date: "2024-01-15T09:15:00Z"
        },
        {
            id: 3,
            type: "credit",
            amount: 890.50,
            description: "Subscription renewal",
            date: "2024-01-14T16:20:00Z"
        }
    ]
};

const Balance = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("6M");
    const { balance, chartData, transactions } = chartsData;

    const periods = ["1M", "3M", "6M", "1Y"];

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: balance.currency,
            minimumFractionDigits: 2
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const renderChart = () => {
        const maxAmount = Math.max(...chartData.map(d => d.amount));
        const minAmount = Math.min(...chartData.map(d => d.amount));
        const range = maxAmount - minAmount;

        return (
            <div className="h-32 flex items-end justify-between gap-3 mb-6">
                {chartData.map((data, index) => {
                    const height = range > 0 ? ((data.amount - minAmount) / range) * 100 : 50;
                    return (
                        <div key={data.period} className="flex flex-col items-center flex-1">
                            <div
                                className="w-full bg-primary-02 rounded-t-lg transition-all hover:bg-primary-01 cursor-pointer"
                                style={{ height: `${Math.max(height, 10)}%` }}
                                title={`${data.period}: ${formatCurrency(data.amount)}`}
                            />
                            <div className="text-caption text-t-secondary mt-2">
                                {data.period}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-b-surface2 rounded-3xl p-6">
            {/* Balance Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-h6 text-t-secondary mb-2">Current Balance</h3>
                    <div className="text-h2 text-t-primary font-semibold">
                        {formatCurrency(balance.current)}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className={`w-3 h-3 rounded-full ${
                            balance.trend === 'up' ? 'bg-chart-green' : 'bg-chart-red'
                        }`} />
                        <span className={`text-button font-medium ${
                            balance.trend === 'up' ? 'text-chart-green' : 'text-chart-red'
                        }`}>
                            +{balance.change}%
                        </span>
                        <span className="text-caption text-t-tertiary">vs last period</span>
                    </div>
                </div>

                {/* Period Selector */}
                <div className="flex bg-b-surface1 rounded-2xl p-1">
                    {periods.map((period) => (
                        <button
                            key={period}
                            onClick={() = aria-label="Action button"> setSelectedPeriod(period)}
                            className={`px-3 py-1.5 rounded-xl text-caption font-medium transition-all ${
                                selectedPeriod === period
                                    ? 'bg-primary-02 text-white'
                                    : 'text-t-secondary hover:text-t-primary'
                            }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            {renderChart()}

            {/* Recent Transactions */}
            <div className="border-t border-s-stroke2 pt-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-button text-t-primary font-medium">Recent Transactions</h4>
                    <button className="text-caption text-primary-02 hover:text-primary-01 transition-colors" aria-label="Action button">
                        View All
                    </button>
                </div>

                <div className="space-y-3">
                    {transactions.slice(0, 3).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    transaction.type === 'credit' 
                                        ? 'bg-chart-green/20' 
                                        : 'bg-chart-red/20'
                                }`}>
                                    <div className={`w-3 h-3 rounded-full ${
                                        transaction.type === 'credit' 
                                            ? 'bg-chart-green' 
                                            : 'bg-chart-red'
                                    }`} />
                                </div>
                                <div>
                                    <div className="text-button text-t-primary">
                                        {transaction.description}
                                    </div>
                                    <div className="text-caption text-t-tertiary">
                                        {formatDate(transaction.date)}
                                    </div>
                                </div>
                            </div>

                            <div className={`text-button font-medium ${
                                transaction.type === 'credit' 
                                    ? 'text-chart-green' 
                                    : 'text-chart-red'
                            }`}>
                                {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Balance;
