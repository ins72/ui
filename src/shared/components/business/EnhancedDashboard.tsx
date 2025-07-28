import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { StatCard, StatGrid } from '../analytics/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { idurarApiService } from '../../lib/idurar-api';
import { 
  Users, 
  FileText, 
  DollarSign, 
  TrendingUp,
  Clock,
  AlertTriangle,
  Activity,
  BarChart3,
  Calendar,
  Target
} from 'lucide-react';

export const EnhancedDashboard: React.FC = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: () => idurarApiService.getDashboardStats(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (error) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent>
            <div className="text-center py-8">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Error Loading Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unable to load dashboard data. Please check your connection and try again.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card>
        <CardHeader>
          <CardTitle size="lg">Welcome to Idurar ERP CRM</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Here's an overview of your business performance and key metrics.
          </p>
        </CardContent>
      </Card>

      {/* Main Statistics */}
      <StatGrid cols={4}>
        <StatCard
          title="Total Clients"
          value={stats?.totalClients || 0}
          change={stats?.clientGrowth}
          changeType={stats?.clientGrowth > 0 ? 'increase' : 'decrease'}
          icon={<Users className="h-6 w-6" />}
          color="blue"
          loading={isLoading}
        />
        <StatCard
          title="Total Revenue"
          value={`$${(stats?.totalRevenue || 0).toLocaleString()}`}
          change={stats?.revenueGrowth}
          changeType={stats?.revenueGrowth > 0 ? 'increase' : 'decrease'}
          icon={<DollarSign className="h-6 w-6" />}
          color="green"
          loading={isLoading}
        />
        <StatCard
          title="Pending Invoices"
          value={stats?.pendingInvoices || 0}
          icon={<Clock className="h-6 w-6" />}
          color="yellow"
          loading={isLoading}
        />
        <StatCard
          title="Overdue Invoices"
          value={stats?.overdueInvoices || 0}
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
          loading={isLoading}
        />
      </StatGrid>

      {/* Additional Metrics */}
      <StatGrid cols={3}>
        <StatCard
          title="Total Invoices"
          value={stats?.totalInvoices || 0}
          change={stats?.invoiceGrowth}
          changeType={stats?.invoiceGrowth > 0 ? 'increase' : 'decrease'}
          icon={<FileText className="h-6 w-6" />}
          color="purple"
          loading={isLoading}
        />
        <StatCard
          title="Total Payments"
          value={stats?.totalPayments || 0}
          change={stats?.paymentGrowth}
          changeType={stats?.paymentGrowth > 0 ? 'increase' : 'decrease'}
          icon={<Activity className="h-6 w-6" />}
          color="indigo"
          loading={isLoading}
        />
        <StatCard
          title="Total Quotes"
          value={stats?.totalQuotes || 0}
          icon={<Target className="h-6 w-6" />}
          color="blue"
          loading={isLoading}
        />
      </StatGrid>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">Chart component will be added here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        New client registered
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Payment received
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Invoice created
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        6 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-center">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Add Client</p>
            </button>
            
            <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors text-center">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Create Invoice</p>
            </button>
            
            <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors text-center">
              <Target className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">New Quote</p>
            </button>
            
            <button className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-center">
              <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Record Payment</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 