'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Server,
  Database,
  Globe,
  Mail,
  Shield,
  Settings,
  BarChart3,
  Folder,
  File,
  Home,
  Building2,
  Contact,
  DollarSign,
  Zap,
  BookOpen,
  Newspaper,
  Briefcase,
  LifeBuoy,
  Cookie,
  Info,
  ExternalLink,
  Download,
  Share,
  Bookmark,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Minus,
  Plus,
  X,
  Check,
  AlertCircle,
  HelpCircle,
  Unlink,
  Copy,
  Scissors,
  RotateCw,
  RotateCcw,
  Save,
  Upload,
  Archive,
  HardDrive,
  Table,
  Columns,
  Rows,
  Hash,
  Unlock,
  Edit,
  Trash2,
  Key,
  Eye,
  EyeOff,
  Lock,
  Users,
  Calendar,
  Phone,
  MapPin,
  Activity,
  XCircle
} from 'lucide-react';
import Link from 'next/link';

export default function MaintenancePage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Maintenance', href: '/maintenance' }
    ]);
    setCurrentPage('Maintenance');
  }, [setBreadcrumbs, setCurrentPage]);

  const maintenanceInfo = {
    status: 'scheduled',
    startTime: '2024-01-20 02:00 UTC',
    estimatedEnd: '2024-01-20 06:00 UTC',
    duration: '4 hours',
    reason: 'System upgrades and performance improvements',
    affectedServices: ['Core Platform', 'Database', 'API Services']
  };

  const maintenanceUpdates = [
    {
      id: 'UPDATE-001',
      time: '2024-01-20 02:00 UTC',
      status: 'started',
      message: 'Maintenance window has begun. System is being taken offline for upgrades.',
      type: 'info'
    },
    {
      id: 'UPDATE-002',
      time: '2024-01-20 02:15 UTC',
      status: 'in-progress',
      message: 'Database optimization in progress. Estimated completion: 30 minutes.',
      type: 'progress'
    },
    {
      id: 'UPDATE-003',
      time: '2024-01-20 02:45 UTC',
      status: 'in-progress',
      message: 'API services being updated. Core functionality will be restored shortly.',
      type: 'progress'
    },
    {
      id: 'UPDATE-004',
      time: '2024-01-20 03:30 UTC',
      status: 'testing',
      message: 'System testing in progress. Verifying all services are functioning correctly.',
      type: 'testing'
    }
  ];

  const affectedServices = [
    {
      name: 'Core Platform',
      status: 'maintenance',
      description: 'Main application platform',
      icon: Server,
      estimatedRestore: '2024-01-20 06:00 UTC'
    },
    {
      name: 'Database',
      status: 'maintenance',
      description: 'Primary database services',
      icon: Database,
      estimatedRestore: '2024-01-20 05:30 UTC'
    },
    {
      name: 'API Services',
      status: 'maintenance',
      description: 'REST API and endpoints',
      icon: Globe,
      estimatedRestore: '2024-01-20 05:45 UTC'
    },
    {
      name: 'Email Services',
      status: 'operational',
      description: 'Email delivery and notifications',
      icon: Mail,
      estimatedRestore: 'Already operational'
    },
    {
      name: 'File Storage',
      status: 'operational',
      description: 'File upload and storage',
      icon: Folder,
      estimatedRestore: 'Already operational'
    },
    {
      name: 'Authentication',
      status: 'maintenance',
      description: 'User authentication and security',
      icon: Shield,
      estimatedRestore: '2024-01-20 05:15 UTC'
    }
  ];

  const quickActions = [
    {
      title: 'Check Status',
      description: 'Get real-time maintenance updates',
      icon: Activity,
      action: 'status',
      color: 'bg-blue-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help during maintenance',
      icon: LifeBuoy,
      action: 'support',
      color: 'bg-green-500'
    },
    {
      title: 'View Schedule',
      description: 'See upcoming maintenance windows',
      icon: Calendar,
      action: 'schedule',
      color: 'bg-purple-500'
    },
    {
      title: 'Emergency Contact',
      description: 'For urgent issues during maintenance',
      icon: AlertTriangle,
      action: 'emergency',
      color: 'bg-orange-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'maintenance':
        return Wrench;
      case 'degraded':
        return AlertTriangle;
      case 'outage':
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'info':
        return Info;
      case 'progress':
        return Clock;
      case 'testing':
        return CheckCircle;
      case 'complete':
        return CheckCircle;
      default:
        return Info;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Scheduled Maintenance</h1>
          <p className="text-muted-foreground">
            System maintenance in progress - we'll be back soon
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm bg-blue-100 text-blue-800">
            {maintenanceInfo.status.charAt(0).toUpperCase() + maintenanceInfo.status.slice(1)}
          </Badge>
          <Badge className="text-sm">
            Duration: {maintenanceInfo.duration}
          </Badge>
        </div>
      </div>

      {/* Maintenance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Maintenance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {maintenanceInfo.startTime.split(' ')[1]}
              </div>
              <p className="text-sm text-muted-foreground">Start Time</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {maintenanceInfo.estimatedEnd.split(' ')[1]}
              </div>
              <p className="text-sm text-muted-foreground">Estimated End</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {maintenanceInfo.duration}
              </div>
              <p className="text-sm text-muted-foreground">Duration</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {maintenanceInfo.affectedServices.length}
              </div>
              <p className="text-sm text-muted-foreground">Affected Services</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Maintenance Reason</p>
                <p className="text-sm text-blue-700">{maintenanceInfo.reason}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={action.action === 'support' ? '/contact' : '#'}>
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
            Current status of all platform services during maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {affectedServices.map((service) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={service.name} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <service.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <Badge className={`text-xs ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Restore:</span>
                      <span className="font-medium">{service.estimatedRestore}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Maintenance Updates
          </CardTitle>
          <CardDescription>
            Real-time updates on maintenance progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceUpdates.map((update) => {
              const UpdateIcon = getUpdateIcon(update.type);
              return (
                <div key={update.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <UpdateIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{update.message}</h3>
                      <Badge className={`text-xs ${getStatusColor(update.status)}`}>
                        {update.status.charAt(0).toUpperCase() + update.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* What to Expect */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            What to Expect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">During Maintenance</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Some services may be temporarily unavailable</li>
                <li>• API responses may be slower than usual</li>
                <li>• User authentication may be affected</li>
                <li>• File uploads may be temporarily disabled</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">After Maintenance</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• All services will be fully operational</li>
                <li>• Improved performance and reliability</li>
                <li>• Enhanced security features</li>
                <li>• New features and improvements</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-900">Important Notice</p>
                <p className="text-sm text-yellow-700">
                  Please save your work and log out before the maintenance window begins. Any unsaved changes may be lost during the maintenance period.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LifeBuoy className="h-5 w-5" />
            Need Help During Maintenance?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Email Support</p>
                <p className="text-sm text-muted-foreground">support@core2enterprise.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-green-100">
                <Phone className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Phone Support</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <Globe className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Status Page</p>
                <p className="text-sm text-muted-foreground">Real-time updates</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-orange-100">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Emergency</p>
                <p className="text-sm text-muted-foreground">Critical issues only</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 