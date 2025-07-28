'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  User,
  Globe,
  Server,
  Database,
  Activity,
  BarChart3,
  Search,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Bell,
  Key,
  Fingerprint
} from 'lucide-react';

export default function AdminSecurityPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'Security', href: '/admin/security' }
    ]);
    setCurrentPage('Security Center');
  }, [setBreadcrumbs, setCurrentPage]);

  const securityStats = [
    {
      title: 'Active Sessions',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: User,
      color: 'text-blue-600'
    },
    {
      title: 'Failed Logins',
      value: '23',
      change: '-8%',
      changeType: 'positive',
      icon: Lock,
      color: 'text-red-600'
    },
    {
      title: 'Security Alerts',
      value: '5',
      change: '+2',
      changeType: 'negative',
      icon: AlertTriangle,
      color: 'text-yellow-600'
    },
    {
      title: 'Blocked IPs',
      value: '156',
      change: '+15%',
      changeType: 'positive',
      icon: Shield,
      color: 'text-purple-600'
    }
  ];

  const securityEvents = [
    {
      id: '1',
      type: 'login_success',
      user: 'john.doe@company.com',
      ip: '192.168.1.100',
      location: 'New York, US',
      timestamp: '2 minutes ago',
      severity: 'low',
      description: 'Successful login from known IP'
    },
    {
      id: '2',
      type: 'login_failed',
      user: 'unknown@company.com',
      ip: '203.45.67.89',
      location: 'Unknown',
      timestamp: '5 minutes ago',
      severity: 'medium',
      description: 'Failed login attempt - invalid credentials'
    },
    {
      id: '3',
      type: 'suspicious_activity',
      user: 'bob.johnson@company.com',
      ip: '192.168.1.101',
      location: 'New York, US',
      timestamp: '10 minutes ago',
      severity: 'high',
      description: 'Multiple failed login attempts detected'
    },
    {
      id: '4',
      type: 'permission_change',
      user: 'admin@system.com',
      ip: '192.168.1.50',
      location: 'New York, US',
      timestamp: '1 hour ago',
      severity: 'medium',
      description: 'User role updated from User to Admin'
    },
    {
      id: '5',
      type: 'data_access',
      user: 'jane.smith@company.com',
      ip: '192.168.1.102',
      location: 'New York, US',
      timestamp: '2 hours ago',
      severity: 'low',
      description: 'Accessed sensitive customer data'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'login_success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'login_failed':
        return <Lock className="w-4 h-4 text-red-500" />;
      case 'suspicious_activity':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'permission_change':
        return <Key className="w-4 h-4 text-blue-500" />;
      case 'data_access':
        return <Eye className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const securityFeatures = [
    {
      title: 'Two-Factor Authentication',
      description: 'Enhanced login security with 2FA',
      icon: Fingerprint,
      status: 'enabled',
      color: 'bg-green-500'
    },
    {
      title: 'IP Whitelisting',
      description: 'Restrict access to specific IP addresses',
      icon: Globe,
      status: 'enabled',
      color: 'bg-blue-500'
    },
    {
      title: 'Session Management',
      description: 'Monitor and control active sessions',
      icon: User,
      status: 'enabled',
      color: 'bg-purple-500'
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive activity logging',
      icon: Activity,
      status: 'enabled',
      color: 'bg-yellow-500'
    },
    {
      title: 'Rate Limiting',
      description: 'Prevent brute force attacks',
      icon: Shield,
      status: 'enabled',
      color: 'bg-red-500'
    },
    {
      title: 'Data Encryption',
      description: 'Encrypt sensitive data at rest',
      icon: Lock,
      status: 'enabled',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Security Center</h1>
          <p className="text-muted-foreground">
            Monitor security logs, access controls, and system threats
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {securityStats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last hour
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Features */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {securityFeatures.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className={`p-2 rounded-lg ${feature.color}`}>
                <feature.icon className="h-4 w-4 text-white" />
              </div>
              <Badge className="bg-green-100 text-green-800">
                {feature.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
              <CardDescription className="text-xs">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Events */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Security Events</CardTitle>
              <CardDescription>
                Real-time security events and alerts
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">
                      {event.description}
                    </p>
                    {getSeverityBadge(event.severity)}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    <span className="font-medium">{event.user}</span> • {event.ip} • {event.location}
                  </div>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  {event.timestamp}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Threat Intelligence</CardTitle>
            <CardDescription>
              Current security threats and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">Suspicious IP Activity</div>
                  <div className="text-xs text-gray-500">IP 203.45.67.89 showing unusual patterns</div>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Monitor</Badge>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">System Secure</div>
                  <div className="text-xs text-gray-500">All security measures active and functioning</div>
                </div>
                <Badge className="bg-green-100 text-green-800">Secure</Badge>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Clock className="w-5 h-5 text-blue-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">SSL Certificate</div>
                  <div className="text-xs text-gray-500">Expires in 45 days - renewal recommended</div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Warning</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access Control Summary</CardTitle>
            <CardDescription>
              Current access control status and statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Sessions</span>
                <span className="text-sm font-medium">2,847</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Blocked IPs</span>
                <span className="text-sm font-medium">156</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Failed Logins (24h)</span>
                <span className="text-sm font-medium">23</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Security Score</span>
                <span className="text-sm font-medium">92/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 