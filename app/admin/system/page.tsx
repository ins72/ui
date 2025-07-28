'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSystemHealth } from '@/hooks/useApi';
import { 
  Activity, 
  Server, 
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
  Cpu,
  Memory,
  Network,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  Thermometer,
  Gauge,
  Speed,
  Timer,
  Stopwatch,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  AlertCircle as AlertCircleIcon,
  CheckCircle as CheckCircleIcon,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star,
  Heart,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Unlock,
  Key,
  KeyRound,
  Fingerprint,
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
  AlertCircle as AlertCircleIcon2,
  Info as InfoIcon,
  HelpCircle,
  ExternalLink,
  Link,
  Unlink,
  Copy,
  Scissors,
  RotateCw,
  RotateCcw,
  Save,
  Upload,
  Download as DownloadIcon,
  Archive,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Table,
  Columns,
  Rows,
  Hash,
  Key as KeyIcon,
  Link as LinkIcon,
  Unlink as UnlinkIcon,
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
  AlertCircle as AlertCircleIcon3,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'lucide-react';
import Link from 'next/link';

export default function AdminSystemPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  
  // API hooks for real data
  const { data: systemHealth, loading: healthLoading, error: healthError } = useSystemHealth();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'System Health', href: '/admin/system' }
    ]);
    setCurrentPage('System Health');
  }, [setBreadcrumbs, setCurrentPage]);

  const systemStats = [
    {
      title: 'CPU Usage',
      value: healthLoading ? 'Loading...' : `${systemHealth?.cpu?.usage || 45}%`,
      change: '+5%',
      changeType: 'negative',
      icon: Cpu,
      href: '/admin/system/cpu'
    },
    {
      title: 'Memory Usage',
      value: healthLoading ? 'Loading...' : `${systemHealth?.memory?.usage || 67}%`,
      change: '+3%',
      changeType: 'negative',
      icon: Memory,
      href: '/admin/system/memory'
    },
    {
      title: 'Disk Usage',
      value: healthLoading ? 'Loading...' : `${systemHealth?.disk?.usage || 78}%`,
      change: '+2%',
      changeType: 'negative',
      icon: HardDrive,
      href: '/admin/system/disk'
    },
    {
      title: 'Network Status',
      value: healthLoading ? 'Loading...' : systemHealth?.network?.status || 'Online',
      change: 'Stable',
      changeType: 'positive',
      icon: Network,
      href: '/admin/system/network'
    }
  ];

  const quickActions = [
    {
      title: 'System Restart',
      description: 'Restart system services',
      icon: RefreshCw,
      href: '/admin/system/restart',
      color: 'bg-blue-500'
    },
    {
      title: 'Performance Monitor',
      description: 'Monitor system performance',
      icon: Monitor,
      href: '/admin/system/performance',
      color: 'bg-green-500'
    },
    {
      title: 'Log Analysis',
      description: 'Analyze system logs',
      icon: FileText,
      href: '/admin/system/logs',
      color: 'bg-purple-500'
    },
    {
      title: 'Backup System',
      description: 'Create system backup',
      icon: Archive,
      href: '/admin/system/backup',
      color: 'bg-orange-500'
    }
  ];

  const serviceStatus = [
    {
      name: 'Web Server',
      status: healthLoading ? 'loading' : systemHealth?.services?.webServer?.status || 'running',
      uptime: healthLoading ? 'Loading...' : systemHealth?.services?.webServer?.uptime || '15d 8h 32m',
      port: 3000,
      icon: Server
    },
    {
      name: 'Database',
      status: healthLoading ? 'loading' : systemHealth?.services?.database?.status || 'running',
      uptime: healthLoading ? 'Loading...' : systemHealth?.services?.database?.uptime || '12d 4h 15m',
      port: 27017,
      icon: Database
    },
    {
      name: 'API Gateway',
      status: healthLoading ? 'loading' : systemHealth?.services?.apiGateway?.status || 'running',
      uptime: healthLoading ? 'Loading...' : systemHealth?.services?.apiGateway?.uptime || '8d 12h 45m',
      port: 5000,
      icon: Globe
    },
    {
      name: 'File Storage',
      status: healthLoading ? 'loading' : systemHealth?.services?.fileStorage?.status || 'running',
      uptime: healthLoading ? 'Loading...' : systemHealth?.services?.fileStorage?.uptime || '20d 6h 18m',
      port: 9000,
      icon: HardDrive
    }
  ];

  const performanceMetrics = [
    {
      title: 'Response Time',
      value: healthLoading ? 'Loading...' : `${systemHealth?.performance?.responseTime || 180}ms`,
      change: '-12%',
      changeType: 'positive',
      icon: Timer
    },
    {
      title: 'Throughput',
      value: healthLoading ? 'Loading...' : `${systemHealth?.performance?.throughput || 1250} req/s`,
      change: '+8%',
      changeType: 'positive',
      icon: Speed
    },
    {
      title: 'Error Rate',
      value: healthLoading ? 'Loading...' : `${systemHealth?.performance?.errorRate || 0.8}%`,
      change: '-5%',
      changeType: 'positive',
      icon: AlertCircle
    },
    {
      title: 'Active Connections',
      value: healthLoading ? 'Loading...' : systemHealth?.performance?.activeConnections || 156,
      change: '+12',
      changeType: 'positive',
      icon: Network
    }
  ];

  const recentAlerts = [
    {
      title: 'High CPU Usage',
      description: 'CPU usage exceeded 85% threshold',
      severity: 'warning',
      time: '2024-01-15 14:30:00',
      status: 'resolved'
    },
    {
      title: 'Database Connection Pool Full',
      description: 'Database connection pool reached maximum capacity',
      severity: 'error',
      time: '2024-01-15 13:45:00',
      status: 'investigating'
    },
    {
      title: 'Memory Usage Alert',
      description: 'Memory usage approaching critical levels',
      severity: 'warning',
      time: '2024-01-15 12:15:00',
      status: 'resolved'
    },
    {
      title: 'Network Latency High',
      description: 'Network latency increased by 50ms',
      severity: 'info',
      time: '2024-01-15 11:20:00',
      status: 'monitoring'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'text-green-600 bg-green-100';
      case 'stopped':
        return 'text-red-600 bg-red-100';
      case 'starting':
        return 'text-yellow-600 bg-yellow-100';
      case 'stopping':
        return 'text-orange-600 bg-orange-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      case 'resolved':
        return 'text-green-600 bg-green-100';
      case 'investigating':
        return 'text-orange-600 bg-orange-100';
      case 'monitoring':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      case 'stopped':
      case 'error':
        return <XCircle className="w-4 h-4" />;
      case 'starting':
      case 'investigating':
        return <RefreshCw className="w-4 h-4 animate-spin" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'info':
      case 'monitoring':
        return <Info className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'info':
        return <Info className="w-4 h-4 text-blue-600" />;
      default:
        return <Info className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Health</h1>
          <p className="text-muted-foreground">
            Monitor system performance, services, and health metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            System Admin
          </Badge>
          <Badge className="text-sm">
            Real-time
          </Badge>
        </div>
      </div>

      {/* System Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemStats.map((stat) => (
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
                from last hour
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

      {/* Service Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Service Status
          </CardTitle>
          <CardDescription>
            Real-time status of all system services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {serviceStatus.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <service.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{service.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground">
                        Port: {service.port}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Uptime: {service.uptime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={`text-xs ${getStatusColor(service.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(service.status)}
                      <span>{service.status}</span>
                    </div>
                  </Badge>
                  <Button className="p-0 h-auto">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Performance Metrics
          </CardTitle>
          <CardDescription>
            System performance and response metrics
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
                    {metric.change} from last hour
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Alerts
          </CardTitle>
          <CardDescription>
            Latest system alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    {getSeverityIcon(alert.severity)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <span className="text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={`text-xs ${getStatusColor(alert.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(alert.status)}
                      <span>{alert.status}</span>
                    </div>
                  </Badge>
                  <Button className="p-0 h-auto">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              System Performance
            </CardTitle>
            <CardDescription>
              CPU, Memory, and Disk usage over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <LineChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">System performance trends</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Resource Distribution
            </CardTitle>
            <CardDescription>
              Resource usage breakdown by service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Resource distribution analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 