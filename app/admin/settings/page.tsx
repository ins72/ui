'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Globe, 
  Shield, 
  Database, 
  Mail, 
  Bell,
  Palette,
  Zap,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Server,
  Lock,
  Eye,
  EyeOff,
  Download,
  Upload,
  Trash2,
  Edit
} from 'lucide-react';

export default function AdminSettingsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'Settings', href: '/admin/settings' }
    ]);
    setCurrentPage('System Settings');
  }, [setBreadcrumbs, setCurrentPage]);

  const settingCategories = [
    {
      title: 'General Settings',
      description: 'Basic application configuration',
      icon: Settings,
      color: 'bg-blue-500',
      settings: [
        { name: 'Site Name', value: 'Core 2.0 Enterprise', type: 'text' },
        { name: 'Site Description', value: 'Complete CRUD management system', type: 'textarea' },
        { name: 'Default Language', value: 'English', type: 'select' },
        { name: 'Timezone', value: 'UTC', type: 'select' }
      ]
    },
    {
      title: 'Security Settings',
      description: 'Authentication and authorization',
      icon: Shield,
      color: 'bg-red-500',
      settings: [
        { name: 'Password Policy', value: 'Strong (8+ chars, symbols)', type: 'select' },
        { name: 'Session Timeout', value: '30 minutes', type: 'select' },
        { name: 'Two-Factor Auth', value: 'Required for admins', type: 'toggle' },
        { name: 'Login Attempts', value: '5 attempts', type: 'number' }
      ]
    },
    {
      title: 'Database Settings',
      description: 'Database configuration and maintenance',
      icon: Database,
      color: 'bg-green-500',
      settings: [
        { name: 'Database Type', value: 'PostgreSQL', type: 'select' },
        { name: 'Connection Pool', value: '20 connections', type: 'number' },
        { name: 'Auto Backup', value: 'Daily at 2 AM', type: 'select' },
        { name: 'Query Logging', value: 'Enabled', type: 'toggle' }
      ]
    },
    {
      title: 'Email Settings',
      description: 'Email configuration and templates',
      icon: Mail,
      color: 'bg-purple-500',
      settings: [
        { name: 'SMTP Server', value: 'smtp.company.com', type: 'text' },
        { name: 'From Email', value: 'noreply@company.com', type: 'email' },
        { name: 'Email Templates', value: 'Custom templates', type: 'select' },
        { name: 'Email Queue', value: 'Enabled', type: 'toggle' }
      ]
    },
    {
      title: 'Notification Settings',
      description: 'System notifications and alerts',
      icon: Bell,
      color: 'bg-yellow-500',
      settings: [
        { name: 'System Alerts', value: 'Email + Dashboard', type: 'select' },
        { name: 'User Notifications', value: 'Email + Push', type: 'select' },
        { name: 'Alert Frequency', value: 'Real-time', type: 'select' },
        { name: 'Quiet Hours', value: '10 PM - 6 AM', type: 'time' }
      ]
    },
    {
      title: 'Performance Settings',
      description: 'Performance optimization and caching',
      icon: Zap,
      color: 'bg-indigo-500',
      settings: [
        { name: 'Cache Strategy', value: 'Redis + Memory', type: 'select' },
        { name: 'CDN Enabled', value: 'Yes', type: 'toggle' },
        { name: 'Image Optimization', value: 'WebP + AVIF', type: 'select' },
        { name: 'API Rate Limiting', value: '1000 req/min', type: 'number' }
      ]
    }
  ];

  const systemStatus = [
    {
      name: 'Web Server',
      status: 'operational',
      uptime: '99.9%',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Cache Server',
      status: 'warning',
      uptime: '95.2%',
      lastCheck: '5 minutes ago'
    },
    {
      name: 'Email Service',
      status: 'operational',
      uptime: '99.5%',
      lastCheck: '3 minutes ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">
            Configure application settings and system preferences
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </div>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Current status of all system components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {systemStatus.map((service) => (
              <div key={service.name} className="flex items-center space-x-3 p-3 border rounded-lg">
                {getStatusIcon(service.status)}
                <div className="flex-1">
                  <div className="font-medium text-sm">{service.name}</div>
                  <div className="text-xs text-gray-500">
                    Uptime: {service.uptime}
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {settingCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  <category.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.settings.map((setting) => (
                  <div key={setting.name} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{setting.name}</div>
                      <div className="text-xs text-gray-500">
                        Current: {setting.value}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Backup & Maintenance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Backup & Restore</CardTitle>
            <CardDescription>
              Manage system backups and data restoration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Last Backup</div>
                  <div className="text-sm text-gray-500">2024-01-20 02:00 AM</div>
                </div>
                <Badge className="bg-green-100 text-green-800">Successful</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Backup Size</div>
                  <div className="text-sm text-gray-500">2.4 GB</div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Upload className="w-4 h-4 mr-2" />
                  Create Backup
                </Button>
                <Button variant="outline" className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restore
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Maintenance</CardTitle>
            <CardDescription>
              Maintenance tasks and system optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Cache Status</div>
                  <div className="text-sm text-gray-500">Redis: 85% full</div>
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Log Files</div>
                  <div className="text-sm text-gray-500">1.2 GB total</div>
                </div>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clean
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize Database
                </Button>
                <Button variant="outline" className="flex-1">
                  <Server className="w-4 h-4 mr-2" />
                  Health Check
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Security Overview</CardTitle>
          <CardDescription>
            Current security status and recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-medium">SSL Certificate</div>
              <div className="text-sm text-gray-500">Valid until 2025-01-20</div>
              <Badge className="bg-green-100 text-green-800 mt-2">Secure</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Lock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-medium">Firewall</div>
              <div className="text-sm text-gray-500">Active protection</div>
              <Badge className="bg-blue-100 text-blue-800 mt-2">Protected</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-medium">Audit Logs</div>
              <div className="text-sm text-gray-500">Last 30 days</div>
              <Badge className="bg-purple-100 text-purple-800 mt-2">Enabled</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 