'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Activity, 
  Database,
  Settings,
  Plus
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Dashboard', href: '/dashboard' }
    ]);
    setCurrentPage('Dashboard');
  }, [setBreadcrumbs, setCurrentPage]);

  const stats = [
    {
      title: 'Total Customers',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      href: '/customers'
    },
    {
      title: 'Total Products',
      value: '567',
      change: '+8%',
      changeType: 'positive',
      icon: Package,
      href: '/products'
    },
    {
      title: 'Shop Items',
      value: '89',
      change: '+15%',
      changeType: 'positive',
      icon: ShoppingCart,
      href: '/shop'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23%',
      changeType: 'positive',
      icon: TrendingUp,
      href: '/analytics'
    }
  ];

  const quickActions = [
    {
      title: 'Add Customer',
      description: 'Create a new customer record',
      icon: Users,
      href: '/customers/create',
      color: 'bg-blue-500'
    },
    {
      title: 'Add Product',
      description: 'Add a new product to catalog',
      icon: Package,
      href: '/products/create',
      color: 'bg-green-500'
    },
    {
      title: 'Add Shop Item',
      description: 'Create a new shop item',
      icon: ShoppingCart,
      href: '/shop/create',
      color: 'bg-purple-500'
    },
    {
      title: 'System Settings',
      description: 'Configure application settings',
      icon: Settings,
      href: '/settings',
      color: 'bg-gray-500'
    }
  ];

  const recentActivity = [
    {
      action: 'Customer Created',
      description: 'John Doe was added to the system',
      time: '2 minutes ago',
      type: 'create'
    },
    {
      action: 'Product Updated',
      description: 'Product "Laptop Pro" was modified',
      time: '5 minutes ago',
      type: 'update'
    },
    {
      action: 'Shop Item Deleted',
      description: 'Item "Old Widget" was removed',
      time: '10 minutes ago',
      type: 'delete'
    },
    {
      action: 'Bulk Import',
      description: '50 customers imported successfully',
      time: '1 hour ago',
      type: 'import'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'create':
        return <Plus className="w-4 h-4 text-green-500" />;
      case 'update':
        return <Activity className="w-4 h-4 text-blue-500" />;
      case 'delete':
        return <Database className="w-4 h-4 text-red-500" />;
      case 'import':
        return <TrendingUp className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to Core 2.0 - Your complete CRUD management system
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          Production Ready
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
              <Link href={stat.href}>
                <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                  View Details →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={action.href}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-sm font-medium">{action.title}</CardTitle>
                <CardDescription className="text-xs">
                  {action.description}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest CRUD operations across the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Core 2.0 CRUD System Health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">API Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Database</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Frontend</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 