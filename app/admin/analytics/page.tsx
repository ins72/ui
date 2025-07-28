'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnalyticsOverview } from '@/hooks/useApi';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity, 
  Database,
  Settings,
  Plus,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  Server,
  FileText,
  Cog,
  Lock,
  Monitor,
  Bell,
  Mail,
  Calendar,
  CreditCard,
  Download,
  Filter,
  Search,
  RefreshCw,
  PieChart,
  LineChart,
  Target,
  DollarSign,
  ShoppingCart,
  Package,
  Clock,
  TrendingDown,
  AlertCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function AdminAnalyticsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  
  // API hooks for real data
  const { data: analyticsOverview, loading: overviewLoading, error: overviewError } = useAnalyticsOverview();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'Analytics & Reports', href: '/admin/analytics' }
    ]);
    setCurrentPage('Analytics & Reports');
  }, [setBreadcrumbs, setCurrentPage]);

  const analyticsStats = [
    {
      title: 'Total Users',
      value: overviewLoading ? 'Loading...' : analyticsOverview?.users?.total?.toLocaleString() || '0',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      href: '/admin/users'
    },
    {
      title: 'New Users (Month)',
      value: overviewLoading ? 'Loading...' : analyticsOverview?.users?.newThisMonth?.toLocaleString() || '0',
      change: '+8%',
      changeType: 'positive',
      icon: UserCheck,
      href: '/admin/users'
    },
    {
      title: 'Total Revenue',
      value: overviewLoading ? 'Loading...' : `$${analyticsOverview?.revenue?.total?.toLocaleString() || '0'}`,
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      href: '/admin/analytics'
    },
    {
      title: 'Active Transactions',
      value: overviewLoading ? 'Loading...' : analyticsOverview?.transactions?.total?.toLocaleString() || '0',
      change: '+15%',
      changeType: 'positive',
      icon: CreditCard,
      href: '/admin/analytics'
    }
  ];

  const quickActions = [
    {
      title: 'Generate Report',
      description: 'Create custom analytics report',
      icon: FileText,
      href: '/admin/analytics/reports',
      color: 'bg-blue-500'
    },
    {
      title: 'Export Data',
      description: 'Export analytics data to CSV/Excel',
      icon: Download,
      href: '/admin/analytics/export',
      color: 'bg-green-500'
    },
    {
      title: 'Performance Monitor',
      description: 'Monitor system performance metrics',
      icon: Monitor,
      href: '/admin/analytics/performance',
      color: 'bg-purple-500'
    },
    {
      title: 'Error Tracking',
      description: 'Track and analyze system errors',
      icon: AlertTriangle,
      href: '/admin/analytics/errors',
      color: 'bg-red-500'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Page Load Time',
      value: overviewLoading ? 'Loading...' : '2.3s',
      change: '-15%',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'Server Response',
      value: overviewLoading ? 'Loading...' : '180ms',
      change: '-8%',
      changeType: 'positive',
      icon: Server
    },
    {
      title: 'Database Queries',
      value: overviewLoading ? 'Loading...' : '1.2s',
      change: '+5%',
      changeType: 'negative',
      icon: Database
    },
    {
      title: 'Memory Usage',
      value: overviewLoading ? 'Loading...' : '67%',
      change: '-3%',
      changeType: 'positive',
      icon: Activity
    }
  ];

  const errorMetrics = [
    {
      title: 'Total Errors',
      value: overviewLoading ? 'Loading...' : '23',
      change: '-12%',
      changeType: 'positive',
      icon: AlertCircle
    },
    {
      title: 'Error Rate',
      value: overviewLoading ? 'Loading...' : '0.8%',
      change: '-5%',
      changeType: 'positive',
      icon: TrendingDown
    },
    {
      title: 'Critical Errors',
      value: overviewLoading ? 'Loading...' : '2',
      change: '-50%',
      changeType: 'positive',
      icon: AlertTriangle
    },
    {
      title: 'Resolved Issues',
      value: overviewLoading ? 'Loading...' : '18',
      change: '+20%',
      changeType: 'positive',
      icon: CheckCircle
    }
  ];

  const recentReports = [
    {
      title: 'Monthly User Growth Report',
      description: 'Comprehensive analysis of user acquisition and retention',
      type: 'User Analytics',
      date: '2024-01-15',
      status: 'completed',
      downloads: 45
    },
    {
      title: 'Revenue Performance Analysis',
      description: 'Detailed revenue breakdown and trend analysis',
      type: 'Financial Analytics',
      date: '2024-01-14',
      status: 'completed',
      downloads: 32
    },
    {
      title: 'System Performance Report',
      description: 'Server performance and optimization recommendations',
      type: 'Performance Analytics',
      date: '2024-01-13',
      status: 'processing',
      downloads: 28
    },
    {
      title: 'Error Analysis Report',
      description: 'Error tracking and resolution recommendations',
      type: 'Error Analytics',
      date: '2024-01-12',
      status: 'completed',
      downloads: 19
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <RefreshCw className="w-4 h-4 animate-spin" />;
      case 'failed':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics, performance monitoring, and reporting tools
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-sm">
            Analytics Dashboard
          </Badge>
          <Badge variant="outline" className="text-sm">
            Real-time Data
          </Badge>
        </div>
      </div>

      {/* Analytics Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsStats.map((stat) => (
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

      {/* Quick Actions Grid */}
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
                <CardTitle className="text-lg font-semibold">{action.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {action.description}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Performance Metrics
          </CardTitle>
          <CardDescription>
            Real-time system performance monitoring and analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.title} className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${metric.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <metric.icon className={`h-4 w-4 ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{metric.title}</p>
                  <p className="text-lg font-bold">{metric.value}</p>
                  <p className={`text-xs ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last week
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Error Analytics
          </CardTitle>
          <CardDescription>
            Error tracking, analysis, and resolution monitoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {errorMetrics.map((metric) => (
              <div key={metric.title} className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${metric.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <metric.icon className={`h-4 w-4 ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{metric.title}</p>
                  <p className="text-lg font-bold">{metric.value}</p>
                  <p className={`text-xs ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last week
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent Reports
          </CardTitle>
          <CardDescription>
            Latest generated reports and analytics exports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{report.title}</h4>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {report.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{report.downloads}</span>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(report.status)}
                      <span>{report.status}</span>
                    </div>
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              User Growth Trends
            </CardTitle>
            <CardDescription>
              Monthly user acquisition and retention analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">User growth over time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Revenue Distribution
            </CardTitle>
            <CardDescription>
              Revenue breakdown by product and service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Revenue distribution analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 