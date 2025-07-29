"use client";

import { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";

export const dynamic = 'force-dynamic';


interface AdminStats {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  activeUsers: number;
  pendingApprovals: number;
  systemHealth: string;
  databaseSize: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    activeUsers: 0,
    pendingApprovals: 0,
    systemHealth: "Healthy",
    databaseSize: "0 MB"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        setLoading(true);
        // Fetch admin statistics from API
        const response = await dataService.getAdminStats();
        if (response.data) {
          setStats(response.data);
        }
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStats();
  }, []);

  if (loading) {
    return (
      <Layout title="Admin Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading admin dashboard...</div>
        </div>
      </Layout>
    );
  }

  const adminCards = [
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      icon: "users",
      color: "blue",
      href: "/admin/users"
    },
    {
      title: "Total Products",
      value: stats.totalProducts.toLocaleString(),
      icon: "package",
      color: "green",
      href: "/admin/products"
    },
    {
      title: "Total Orders",
      value: stats.totalOrders.toLocaleString(),
      icon: "shopping-cart",
      color: "purple",
      href: "/admin/orders"
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: "dollar-sign",
      color: "yellow",
      href: "/admin/finance"
    },
    {
      title: "Active Users",
      value: stats.activeUsers.toLocaleString(),
      icon: "user-check",
      color: "green",
      href: "/admin/users/active"
    },
    {
      title: "Pending Approvals",
      value: stats.pendingApprovals.toLocaleString(),
      icon: "clock",
      color: "orange",
      href: "/admin/approvals"
    },
    {
      title: "System Health",
      value: stats.systemHealth,
      icon: "activity",
      color: stats.systemHealth === "Healthy" ? "green" : "red",
      href: "/admin/system"
    },
    {
      title: "Database Size",
      value: stats.databaseSize,
      icon: "database",
      color: "blue",
      href: "/admin/database"
    }
  ];

  const quickActions = [
    { title: "Manage Users", href: "/admin/users", icon: "users" },
    { title: "Product Management", href: "/admin/products", icon: "package" },
    { title: "Order Management", href: "/admin/orders", icon: "shopping-cart" },
    { title: "Content Management", href: "/admin/content", icon: "file-text" },
    { title: "System Settings", href: "/admin/settings", icon: "settings" },
    { title: "Analytics", href: "/admin/analytics", icon: "bar-chart" },
    { title: "Knowledge Base", href: "/admin/knowledge-base", icon: "book" },
    { title: "Support Tickets", href: "/admin/support", icon: "help-circle" }
  ];

  return (
    <Layout title="Admin Dashboard">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Complete system overview and management controls
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {adminCards.map((card, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </p>
              </div>
              <div className={`p-3 rounded-full bg-${card.color}-100 dark:bg-${card.color}-900`}>
                <Icon name={card.icon} className={`w-6 h-6 text-${card.color}-600 dark:text-${card.color}-400`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions" className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon name={action.icon} className="w-8 h-8 text-gray-600 dark:text-gray-300 mb-2" />
              <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                {action.title}
              </span>
            </a>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card title="Recent System Activity" className="mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center">
              <Icon name="user-plus" className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-sm text-gray-900 dark:text-white">New user registered</span>
            </div>
            <span className="text-xs text-gray-500">2 minutes ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center">
              <Icon name="package" className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm text-gray-900 dark:text-white">Product updated</span>
            </div>
            <span className="text-xs text-gray-500">5 minutes ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center">
              <Icon name="dollar-sign" className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-sm text-gray-900 dark:text-white">New order received</span>
            </div>
            <span className="text-xs text-gray-500">10 minutes ago</span>
          </div>
        </div>
      </Card>

      {/* System Status */}
      <Card title="System Status" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="text-sm font-medium text-green-800 dark:text-green-200">API Status</span>
            <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="text-sm font-medium text-green-800 dark:text-green-200">Database</span>
            <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
              Healthy
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="text-sm font-medium text-green-800 dark:text-green-200">Uptime</span>
            <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
              99.9%
            </span>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default AdminDashboard; 