'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDatabaseStats } from '@/hooks/useApi';
import { 
  Database, 
  Server, 
  Activity, 
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
  Info,
  HardDrive,
  Archive,
  RotateCcw,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Save,
  Upload,
  Download as DownloadIcon,
  Copy,
  Scissors,
  RotateCw,
  Database as DatabaseIcon,
  Table,
  Columns,
  Rows,
  Hash,
  Key,
  Link,
  Unlink,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Search as SearchIcon,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Minus,
  Plus as PlusIcon,
  X,
  Check,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  HelpCircle,
  ExternalLink,
  Link as LinkIcon,
  Unlink as UnlinkIcon,
  Copy as CopyIcon,
  Scissors as ScissorsIcon,
  RotateCw as RotateCwIcon,
  RotateCcw as RotateCcwIcon,
  Save as SaveIcon,
  Upload as UploadIcon,
  Download as DownloadIcon2,
  Archive as ArchiveIcon,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  Database as DatabaseIcon2,
  Table as TableIcon,
  Columns as ColumnsIcon,
  Rows as RowsIcon,
  Hash as HashIcon,
  Key as KeyIcon,
  Link as LinkIcon2,
  Unlink as UnlinkIcon2,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Eye as EyeIcon2,
  EyeOff as EyeOffIcon,
  Search as SearchIcon2,
  Filter as FilterIcon2,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Minus as MinusIcon,
  Plus as PlusIcon2,
  X as XIcon,
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon2,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDatabasePage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  
  // API hooks for real data
  const { data: databaseStats, loading: statsLoading, error: statsError } = useDatabaseStats();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'Database Management', href: '/admin/database' }
    ]);
    setCurrentPage('Database Management');
  }, [setBreadcrumbs, setCurrentPage]);

  const databaseStats = [
    {
      title: 'Total Collections',
      value: statsLoading ? 'Loading...' : databaseStats?.database?.collections?.toLocaleString() || '0',
      change: '+2',
      changeType: 'positive',
      icon: Table,
      href: '/admin/database/collections'
    },
    {
      title: 'Total Documents',
      value: statsLoading ? 'Loading...' : databaseStats?.database?.objects?.toLocaleString() || '0',
      change: '+1,234',
      changeType: 'positive',
      icon: FileText,
      href: '/admin/database/documents'
    },
    {
      title: 'Database Size',
      value: statsLoading ? 'Loading...' : `${(databaseStats?.database?.dataSize / 1024 / 1024 || 0).toFixed(2)} MB`,
      change: '+15%',
      changeType: 'positive',
      icon: HardDrive,
      href: '/admin/database/storage'
    },
    {
      title: 'Index Size',
      value: statsLoading ? 'Loading...' : `${(databaseStats?.database?.indexSize / 1024 / 1024 || 0).toFixed(2)} MB`,
      change: '+8%',
      changeType: 'positive',
      icon: Hash,
      href: '/admin/database/indexes'
    }
  ];

  const quickActions = [
    {
      title: 'Create Backup',
      description: 'Create a complete database backup',
      icon: Archive,
      href: '/admin/database/backup',
      color: 'bg-blue-500'
    },
    {
      title: 'Restore Database',
      description: 'Restore from a previous backup',
      icon: RotateCcw,
      href: '/admin/database/restore',
      color: 'bg-green-500'
    },
    {
      title: 'Optimize Database',
      description: 'Optimize database performance',
      icon: Zap,
      href: '/admin/database/optimize',
      color: 'bg-purple-500'
    },
    {
      title: 'Monitor Queries',
      description: 'Monitor database query performance',
      icon: Monitor,
      href: '/admin/database/monitor',
      color: 'bg-orange-500'
    }
  ];

  const collectionStats = [
    {
      name: 'users',
      count: statsLoading ? 'Loading...' : databaseStats?.collections?.find(c => c.name === 'users')?.count?.toLocaleString() || '0',
      size: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'users')?.size / 1024 || 0).toFixed(2)} KB`,
      avgObjSize: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'users')?.avgObjSize || 0).toFixed(0)} B`,
      status: 'active'
    },
    {
      name: 'products',
      count: statsLoading ? 'Loading...' : databaseStats?.collections?.find(c => c.name === 'products')?.count?.toLocaleString() || '0',
      size: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'products')?.size / 1024 || 0).toFixed(2)} KB`,
      avgObjSize: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'products')?.avgObjSize || 0).toFixed(0)} B`,
      status: 'active'
    },
    {
      name: 'transactions',
      count: statsLoading ? 'Loading...' : databaseStats?.collections?.find(c => c.name === 'transactions')?.count?.toLocaleString() || '0',
      size: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'transactions')?.size / 1024 || 0).toFixed(2)} KB`,
      avgObjSize: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'transactions')?.avgObjSize || 0).toFixed(0)} B`,
      status: 'active'
    },
    {
      name: 'settings',
      count: statsLoading ? 'Loading...' : databaseStats?.collections?.find(c => c.name === 'settings')?.count?.toLocaleString() || '0',
      size: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'settings')?.size / 1024 || 0).toFixed(2)} KB`,
      avgObjSize: statsLoading ? 'Loading...' : `${(databaseStats?.collections?.find(c => c.name === 'settings')?.avgObjSize || 0).toFixed(0)} B`,
      status: 'active'
    }
  ];

  const recentBackups = [
    {
      name: 'Full Backup - 2024-01-15',
      type: 'Full Backup',
      size: '2.4 GB',
      date: '2024-01-15 14:30:00',
      status: 'completed',
      duration: '5m 23s'
    },
    {
      name: 'Incremental Backup - 2024-01-14',
      type: 'Incremental',
      size: '156 MB',
      date: '2024-01-14 14:30:00',
      status: 'completed',
      duration: '1m 45s'
    },
    {
      name: 'Full Backup - 2024-01-13',
      type: 'Full Backup',
      size: '2.3 GB',
      date: '2024-01-13 14:30:00',
      status: 'completed',
      duration: '5m 12s'
    },
    {
      name: 'Incremental Backup - 2024-01-12',
      type: 'Incremental',
      size: '142 MB',
      date: '2024-01-12 14:30:00',
      status: 'failed',
      duration: '0m 0s'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Query Response Time',
      value: '180ms',
      change: '-12%',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'Connection Pool',
      value: '85%',
      change: '+5%',
      changeType: 'positive',
      icon: Server
    },
    {
      title: 'Index Hit Ratio',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: Hash
    },
    {
      title: 'Cache Hit Ratio',
      value: '78%',
      change: '-3%',
      changeType: 'negative',
      icon: Activity
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
      case 'active':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
      case 'active':
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
          <h1 className="text-3xl font-bold tracking-tight">Database Management</h1>
          <p className="text-muted-foreground">
            Monitor, optimize, and manage database operations and performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Database Admin
          </Badge>
          <Badge className="text-sm">
            MongoDB
          </Badge>
        </div>
      </div>

      {/* Database Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {databaseStats.map((stat) => (
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
                from last week
              </p>
              <Link href={stat.href}>
                <Button className="mt-2 p-0 h-auto">
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
            <Activity className="h-5 w-5" />
            Database Performance
          </CardTitle>
          <CardDescription>
            Real-time database performance metrics and monitoring
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

      {/* Collection Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Table className="h-5 w-5" />
            Collection Statistics
          </CardTitle>
          <CardDescription>
            Detailed statistics for all database collections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {collectionStats.map((collection) => (
              <div key={collection.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Table className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold capitalize">{collection.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground">
                        {collection.count} documents
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {collection.size} size
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {collection.avgObjSize} avg size
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={`text-xs ${getStatusColor(collection.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(collection.status)}
                      <span>{collection.status}</span>
                    </div>
                  </Badge>
                  <Button size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Backups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Archive className="h-5 w-5" />
            Recent Backups
          </CardTitle>
          <CardDescription>
            Latest database backup operations and status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBackups.map((backup, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Archive className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{backup.name}</h4>
                    <p className="text-sm text-muted-foreground">{backup.type}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">
                        Size: {backup.size}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Duration: {backup.duration}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {backup.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={`text-xs ${getStatusColor(backup.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(backup.status)}
                      <span>{backup.status}</span>
                    </div>
                  </Badge>
                  <Button size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Database Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Collection Growth
            </CardTitle>
            <CardDescription>
              Document count growth over time by collection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Collection growth trends</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Storage Distribution
            </CardTitle>
            <CardDescription>
              Database storage usage by collection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Storage distribution analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 