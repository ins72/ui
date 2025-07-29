"use client";

import {  useState , useEffect } from "react";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  TrendingUp,
  DollarSign,
  Eye,
  Star
} from 'lucide-react';
import { User, Product } from '@/lib/api';

interface DashboardStats {
  users: {
    overview: {
      totalUsers: number;
      activeUsers: number;
      premiumUsers: number;
      enterpriseUsers: number;
    };
    recentUsers: User[];
  };
  products: {
    overview: {
      totalProducts: number;
      publishedProducts: number;
      draftProducts: number;
      featuredProducts: number;
      totalRevenue: number;
      totalViews: number;
      totalSales: number;
    };
    topProducts: Product[];
  };
}

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  description?: string;
}

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

interface DataTableProps {
  title: string;
  data: Array<{
    id: string;
    name: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }>;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <div className="flex items-center mt-2">
          <span className={`text-sm font-medium ${
            changeType === 'positive' ? 'text-green-600' : 
            changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
          }`}>
            {change}
          </span>
          {description && (
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{description}</span>
          )}
        </div>
      </div>
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        {icon}
      </div>
    </div>
  </div>
);

const QuickAction: React.FC<QuickActionProps> = ({ title, description, icon, href, color }) => (
  <a 
    href={href}
    className={`block p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md hover:scale-105 ${color}`}
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </a>
);

const DataTable: React.FC<DataTableProps> = ({ title, data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {data.map((item) => (
        <div key={item.id} className="px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-900 dark:text-white font-medium">{item.value}</span>
            {item.change && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                item.changeType === 'positive' ? 'bg-green-100 text-green-800' :
                item.changeType === 'negative' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {item.change}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface BusinessDashboardProps {
  stats: DashboardStats | null;
}

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({ stats }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const quickActions = [
    {
      title: 'Create New Product',
      description: 'Add a new product to your catalog',
      icon: <Package className="h-6 w-6 text-blue-600" />,
      href: '/products/new',
      color: 'bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20'
    },
    {
      title: 'Manage Customers',
      description: 'View and manage customer relationships',
      icon: <Users className="h-6 w-6 text-green-600" />,
      href: '/customers',
      color: 'bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20'
    },
    {
      title: 'View Analytics',
      description: 'Detailed business performance insights',
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      href: '/analytics',
      color: 'bg-purple-50 dark:bg-purple-900/10 hover:bg-purple-100 dark:hover:bg-purple-900/20'
    },
    {
      title: 'Process Orders',
      description: 'Manage and fulfill customer orders',
      icon: <ShoppingCart className="h-6 w-6 text-orange-600" />,
      href: '/orders',
      color: 'bg-orange-50 dark:bg-orange-900/10 hover:bg-orange-100 dark:hover:bg-orange-900/20'
    }
  ];

  const recentUsers = stats?.users?.recentUsers?.slice(0, 5).map(user => ({
    id: user.id,
    name: user.name,
    value: user.plan,
    change: user.status,
    changeType: (user.status === 'active' ? 'positive' : 'neutral') as 'positive' | 'negative' | 'neutral'
  })) || [];

  const topProducts = stats?.products?.topProducts?.slice(0, 5).map(product => ({
    id: product.id,
    name: product.name,
    value: `$${product.analytics.revenue.toLocaleString()}`,
    change: `${product.analytics.sales} sales`,
    changeType: 'positive' as const
  })) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Business Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive overview of your business performance and key metrics
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Users"
              value={stats?.users?.overview?.totalUsers || 0}
              change="+12%"
              changeType="positive"
              icon={<Users className="h-6 w-6 text-blue-600" />}
              description="from last month"
            />
            <StatCard
              title="Total Revenue"
              value={`$${(stats?.products?.overview?.totalRevenue || 0).toLocaleString()}`}
              change="+8.2%"
              changeType="positive"
              icon={<DollarSign className="h-6 w-6 text-green-600" />}
              description="from last month"
            />
            <StatCard
              title="Total Products"
              value={stats?.products?.overview?.totalProducts || 0}
              change="+5.1%"
              changeType="positive"
              icon={<Package className="h-6 w-6 text-purple-600" />}
              description="from last month"
            />
            <StatCard
              title="Total Views"
              value={(stats?.products?.overview?.totalViews || 0).toLocaleString()}
              change="+15.3%"
              changeType="positive"
              icon={<Eye className="h-6 w-6 text-orange-600" />}
              description="from last month"
            />
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <QuickAction key={index} {...action} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataTable
              title="Recent Users"
              data={recentUsers}
            />
            <DataTable
              title="Top Performing Products"
              data={topProducts}
            />
          </div>
        </>
      )}

      {activeTab === 'analytics' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Advanced Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Detailed analytics and performance metrics will be displayed here. This includes trend analysis, 
            customer behavior insights, and predictive analytics for business growth optimization.
          </p>
          <div className="mt-6 flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Advanced analytics dashboard coming soon...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessDashboard; 