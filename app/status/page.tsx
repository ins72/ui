'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
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
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function StatusPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'System Status', href: '/status' }
    ]);
    setCurrentPage('System Status');
  }, [setBreadcrumbs, setCurrentPage]);

  const systemStatus = {
    overall: 'operational',
    uptime: '99.98%',
    lastIncident: '2024-01-10',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Core Platform',
      status: 'operational',
      description: 'Main application platform',
      icon: Server,
      uptime: '99.99%',
      responseTime: '25ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Database',
      status: 'operational',
      description: 'Primary database services',
      icon: Database,
      uptime: '99.97%',
      responseTime: '15ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      description: 'REST API and endpoints',
      icon: Globe,
      uptime: '99.95%',
      responseTime: '35ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      description: 'Email delivery and notifications',
      icon: Mail,
      uptime: '99.90%',
      responseTime: '120ms',
      lastCheck: '5 minutes ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      description: 'File upload and storage',
      icon: Folder,
      uptime: '99.98%',
      responseTime: '55ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      description: 'User authentication and security',
      icon: Shield,
      uptime: '99.99%',
      responseTime: '20ms',
      lastCheck: '45 seconds ago'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      description: 'Database maintenance completed successfully',
      startTime: '2024-01-10 02:00 UTC',
      endTime: '2024-01-10 04:00 UTC',
      duration: '2 hours'
    },
    {
      id: 'INC-2024-002',
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'medium',
      description: 'Increased API response times due to high load',
      startTime: '2024-01-08 14:30 UTC',
      endTime: '2024-01-08 16:45 UTC',
      duration: '2 hours 15 minutes'
    },
    {
      id: 'INC-2024-003',
      title: 'Email Delivery Delays',
      status: 'resolved',
      severity: 'low',
      description: 'Temporary delays in email delivery',
      startTime: '2024-01-05 09:15 UTC',
      endTime: '2024-01-05 10:30 UTC',
      duration: '1 hour 15 minutes'
    }
  ];

  const quickActions = [
    {
      title: 'Subscribe to Updates',
      description: 'Get notified about system status changes',
      icon: Mail,
      action: 'subscribe',
      color: 'bg-blue-500'
    },
    {
      title: 'Report an Issue',
      description: 'Report a problem you\'re experiencing',
      icon: AlertTriangle,
      action: 'report',
      color: 'bg-orange-500'
    },
    {
      title: 'View History',
      description: 'Check past incidents and maintenance',
      icon: Clock,
      action: 'history',
      color: 'bg-purple-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help with technical issues',
      icon: LifeBuoy,
      action: 'support',
      color: 'bg-green-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertTriangle;
      case 'outage':
        return XCircle;
      case 'maintenance':
        return Clock;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Status</h1>
          <p className="text-muted-foreground">
            Real-time status of our platform and services
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className={`text-sm ${getStatusColor(systemStatus.overall)}`}>
            {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
          </Badge>
          <Badge className="text-sm">
            Uptime: {systemStatus.uptime}
          </Badge>
        </div>
      </div>

      {/* Overall Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Overall System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {systemStatus.uptime}
              </div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {systemStatus.responseTime}
              </div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {services.length}
              </div>
              <p className="text-sm text-muted-foreground">Services</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {recentIncidents.length}
              </div>
              <p className="text-sm text-muted-foreground">Recent Incidents</p>
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
            Current status of all platform services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
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
                      <span className="text-muted-foreground">Uptime:</span>
                      <span className="font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Check:</span>
                      <span className="font-medium">{service.lastCheck}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Incidents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recent Incidents
          </CardTitle>
          <CardDescription>
            Recent system incidents and maintenance events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{incident.title}</h3>
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`text-xs ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </Badge>
                    <Badge className="text-xs bg-gray-100 text-gray-800">
                      {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Start:</span>
                    <span className="ml-2 font-medium">{incident.startTime}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">End:</span>
                    <span className="ml-2 font-medium">{incident.endTime}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="ml-2 font-medium">{incident.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Status Definitions</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>Operational:</strong> Service is working normally</li>
                <li>• <strong>Degraded:</strong> Service is experiencing issues</li>
                <li>• <strong>Outage:</strong> Service is completely unavailable</li>
                <li>• <strong>Maintenance:</strong> Scheduled maintenance in progress</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Monitoring</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 24/7 automated monitoring</li>
                <li>• Real-time status updates</li>
                <li>• Immediate incident response</li>
                <li>• Regular maintenance windows</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Need Immediate Help?</p>
                <p className="text-sm text-blue-700">
                  If you're experiencing issues not reflected here, please contact our support team immediately.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 