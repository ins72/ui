'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  FileText, 
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { idurarApiService, DashboardStats } from '../lib/idurar-api';

const Overview = () => {
  const [activeTab, setActiveTab] = useState('clients');

  // Fetch dashboard data using React Query
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: () => idurarApiService.getDashboardStats(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const tabs = [
    {
      id: 'clients',
      icon: Users,
      label: 'Clients',
      value: stats?.totalClients || 0,
      percent: stats?.clientGrowth || 0,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      id: 'revenue',
      icon: DollarSign,
      label: 'Revenue',
      value: `$${(stats?.totalRevenue || 0).toLocaleString()}`,
      percent: stats?.revenueGrowth || 0,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      id: 'invoices',
      icon: FileText,
      label: 'Invoices',
      value: stats?.totalInvoices || 0,
      percent: stats?.invoiceGrowth || 0,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      id: 'payments',
      icon: Activity,
      label: 'Payments',
      value: stats?.totalPayments || 0,
      percent: stats?.paymentGrowth || 0,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="text-center text-red-600 dark:text-red-400">
          Error loading dashboard data. Please check your Idurar connection.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Business Overview</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Activity className="h-4 w-4" />
          <span>Real-time data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-200 hover:shadow-md ${
              activeTab === tab.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${tab.bgColor}`}>
                <tab.icon className={`h-6 w-6 ${tab.color}`} />
              </div>
              <div className="flex items-center space-x-1">
                {tab.percent > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${
                  tab.percent > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {tab.percent > 0 ? '+' : ''}{tab.percent}%
                </span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {tab.label}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {tab.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Invoices</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{stats?.pendingInvoices || 0}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overdue Invoices</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{stats?.overdueInvoices || 0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {tabs.find(tab => tab.id === activeTab)?.label} Details
        </h3>
        
        {activeTab === 'clients' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p>Total registered clients in your system.</p>
            <p className="mt-2 text-sm">
              Growth: {stats?.clientGrowth}% from last month
            </p>
          </div>
        )}
        
        {activeTab === 'revenue' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p>Total revenue from all payments received.</p>
            <p className="mt-2 text-sm">
              Growth: {stats?.revenueGrowth}% from last month
            </p>
          </div>
        )}
        
        {activeTab === 'invoices' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p>Total number of invoices created.</p>
            <p className="mt-2 text-sm">
              Growth: {stats?.invoiceGrowth}% from last month
            </p>
          </div>
        )}
        
        {activeTab === 'payments' && (
          <div className="text-gray-600 dark:text-gray-400">
            <p>Total payments processed.</p>
            <p className="mt-2 text-sm">
              Growth: {stats?.paymentGrowth}% from last month
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview; 