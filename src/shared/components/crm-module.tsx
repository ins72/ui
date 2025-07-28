'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Plus, 
  Search, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Phone, 
  Mail, 
  MapPin,
  UserCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { erpNextApiService, Customer, Lead } from '../lib/erpnext-api';

interface CRMStats {
  totalCustomers: number;
  totalLeads: number;
  activeLeads: number;
  convertedLeads: number;
  totalRevenue: number;
  averageDealSize: number;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  subtitle?: string;
}

export default function CRMModule() {
  const [activeTab, setActiveTab] = useState('customers');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<CRMStats>({
    totalCustomers: 0,
    totalLeads: 0,
    activeLeads: 0,
    convertedLeads: 0,
    totalRevenue: 0,
    averageDealSize: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCRMData();
  }, []);

  const loadCRMData = async () => {
    try {
      setLoading(true);
      const [customersData, leadsData] = await Promise.all([
        erpNextApiService.getCustomers(),
        erpNextApiService.getLeads(),
      ]);

      setCustomers(customersData);
      setLeads(leadsData);

      // Calculate stats
      const activeLeads = leadsData.filter(lead => lead.status === 'Open').length;
      const convertedLeads = leadsData.filter(lead => lead.status === 'Converted').length;
      const totalRevenue = customersData.length * 1000; // Mock calculation
      const averageDealSize = totalRevenue / (customersData.length || 1);

      setStats({
        totalCustomers: customersData.length,
        totalLeads: leadsData.length,
        activeLeads,
        convertedLeads,
        totalRevenue,
        averageDealSize,
      });
    } catch (error) {
      console.error('Error loading CRM data:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, subtitle }: StatCardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const CustomerCard = ({ customer }: { customer: Customer }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {customer.customer_name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {customer.customer_type} • {customer.customer_group}
              </p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            {customer.email_id && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>{customer.email_id}</span>
              </div>
            )}
            {customer.phone && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{customer.phone}</span>
              </div>
            )}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{customer.territory}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
            <Edit className="h-4 w-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const LeadCard = ({ lead }: { lead: Lead }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {lead.lead_name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {lead.company_name} • {lead.source}
              </p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            {lead.email_id && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>{lead.email_id}</span>
              </div>
            )}
            {lead.phone && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{lead.phone}</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                lead.status === 'Open' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                lead.status === 'Converted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
              }`}>
                {lead.status}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
            <Eye className="h-4 w-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
            <Edit className="h-4 w-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Customer Relationship Management System</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Comprehensive customer lifecycle management, lead generation optimization, and sales pipeline automation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Customer Base"
            value={stats.totalCustomers}
            icon={Users}
            color="bg-blue-500"
            subtitle="Active customers"
          />
          <StatCard
            title="Sales Pipeline Leads"
            value={stats.totalLeads}
            icon={Target}
            color="bg-green-500"
            subtitle="Total leads in pipeline"
          />
          <StatCard
            title="Active Lead Opportunities"
            value={stats.activeLeads}
            icon={TrendingUp}
            color="bg-yellow-500"
            subtitle="Open opportunities"
          />
          <StatCard
            title="Converted Leads"
            value={stats.convertedLeads}
            icon={UserCheck}
            color="bg-purple-500"
            subtitle="Successful conversions"
          />
          <StatCard
            title="Total Revenue Generated"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            color="bg-green-600"
            subtitle="From customer base"
          />
          <StatCard
            title="Average Deal Value"
            value={`$${stats.averageDealSize.toLocaleString()}`}
            icon={DollarSign}
            color="bg-indigo-500"
            subtitle="Per customer"
          />
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('customers')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'customers'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Customer Management
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'leads'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Lead Generation Pipeline
              </button>
            </nav>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search customer data..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add New {activeTab === 'customers' ? 'Customer' : 'Lead'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'customers' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers
              .filter(customer => 
                customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (customer.email_id && customer.email_id.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map((customer) => (
                <CustomerCard key={customer.name} customer={customer} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads
              .filter(lead => 
                lead.lead_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (lead.company_name && lead.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map((lead) => (
                <LeadCard key={lead.name} lead={lead} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
} 