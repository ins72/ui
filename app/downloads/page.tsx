"use client";

import { useEffect } from "react";
import React, { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';

export default function DownloadsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Downloads', href: '/downloads' }
    ]);
    setCurrentPage('Downloads');
  }, [setBreadcrumbs, setCurrentPage]);

  const downloadCategories = [
    {
      title: 'Mobile Apps',
      description: 'Native mobile applications for iOS and Android',
      icon: Smartphone,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Desktop Apps',
      description: 'Native desktop applications for Windows, Mac, and Linux',
      icon: Desktop,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'API & SDKs',
      description: 'Developer tools and software development kits',
      icon: 'code',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Documentation',
      description: 'PDF guides, whitepapers, and technical documentation',
      icon: 'file-text',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const mobileApps = [
    {
      name: 'Core 2.0 for iOS',
      version: '2.1.0',
      size: '45.2 MB',
      platform: 'iOS 14.0+',
      description: 'Native iOS app with full feature parity',
      icon: Smartphone,
      downloads: '15,234',
      rating: 4.8,
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Core 2.0 for Android',
      version: '2.1.0',
      size: '52.1 MB',
      platform: 'Android 8.0+',
      description: 'Native Android app with offline capabilities',
      icon: Smartphone,
      downloads: '23,456',
      rating: 4.7,
      lastUpdated: '2024-01-15',
      status: 'Latest'
    }
  ];

  const desktopApps = [
    {
      name: 'Core 2.0 for Windows',
      version: '2.1.0',
      size: '128.5 MB',
      platform: 'Windows 10/11',
      description: 'Native Windows desktop application',
      icon: Desktop,
      downloads: '8,234',
      rating: 4.9,
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Core 2.0 for macOS',
      version: '2.1.0',
      size: '145.2 MB',
      platform: 'macOS 11.0+',
      description: 'Native macOS desktop application',
      icon: Laptop,
      downloads: '6,789',
      rating: 4.8,
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Core 2.0 for Linux',
      version: '2.1.0',
      size: '98.7 MB',
      platform: 'Ubuntu 20.04+, CentOS 8+',
      description: 'Native Linux desktop application',
      icon: Desktop,
      downloads: '3,456',
      rating: 4.7,
      lastUpdated: '2024-01-15',
      status: 'Latest'
    }
  ];

  const developerTools = [
    {
      name: 'Core 2.0 REST API',
      version: '2.1.0',
      size: '2.1 MB',
      type: 'API Documentation',
      description: 'Complete REST API documentation and examples',
      icon: 'code',
      downloads: '12,345',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'JavaScript SDK',
      version: '2.1.0',
      size: '1.8 MB',
      type: 'NPM Package',
      description: 'Official JavaScript/TypeScript SDK',
      icon: 'code',
      downloads: '8,901',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Python SDK',
      version: '2.1.0',
      size: '2.3 MB',
      type: 'PyPI Package',
      description: 'Official Python SDK with full API support',
      icon: 'code',
      downloads: '5,678',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Postman Collection',
      version: '2.1.0',
      size: '0.5 MB',
      type: 'API Collection',
      description: 'Complete Postman collection for API testing',
      icon: 'code',
      downloads: '3,234',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    }
  ];

  const documentation = [
    {
      name: 'User Guide',
      version: '2.1.0',
      size: '15.2 MB',
      type: 'PDF',
      description: 'Complete user guide and tutorials',
      icon: 'file-text',
      downloads: '25,678',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'API Reference',
      version: '2.1.0',
      size: '8.7 MB',
      type: 'PDF',
      description: 'Complete API reference documentation',
      icon: 'file-text',
      downloads: '18,901',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    },
    {
      name: 'Security Whitepaper',
      version: '1.0',
      size: '3.2 MB',
      type: 'PDF',
      description: 'Security practices and compliance information',
      icon: 'shield',
      downloads: '12,345',
      lastUpdated: '2024-01-10',
      status: 'Latest'
    },
    {
      name: 'Integration Guide',
      version: '2.1.0',
      size: '12.1 MB',
      type: 'PDF',
      description: 'Step-by-step integration tutorials',
      icon: 'file-text',
      downloads: '9,876',
      lastUpdated: '2024-01-15',
      status: 'Latest'
    }
  ];

  const quickActions = [
    {
      title: 'System Requirements',
      description: 'Check if your system is compatible',
      icon: Monitor,
      action: 'requirements',
      color: 'bg-blue-500'
    },
    {
      title: 'Installation Guide',
      description: 'Step-by-step installation instructions',
      icon: BookOpen,
      action: 'install',
      color: 'bg-green-500'
    },
    {
      title: 'Release Notes',
      description: 'What\'s new in the latest version',
      icon: 'file-text',
      action: 'releases',
      color: 'bg-purple-500'
    },
    {
      title: 'Support',
      description: 'Get help with installation and setup',
      icon: LifeBuoy,
      action: 'support',
      color: 'bg-orange-500'
    }
  ];

  const downloadStats = [
    {
      title: 'Total Downloads',
      value: '125,000+',
      description: 'Downloads this month',
      icon: 'download',
      color: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: '45,000+',
      description: 'Monthly active users',
      icon: 'users',
      color: 'text-green-600'
    },
    {
      title: 'Platforms',
      value: '5',
      description: 'Supported platforms',
      icon: Monitor,
      color: 'text-purple-600'
    },
    {
      title: 'Languages',
      value: '20+',
      description: 'Supported languages',
      icon: 'globe',
      color: 'text-orange-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Latest':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Deprecated':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Icon 
        key={i} 
        name="star"
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
          <p className="text-muted-foreground">
            Download Core 2.0 applications and resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Badge.toLowerCase()" className="text-sm">
            {mobileApps.length + desktopApps.length} Applications
          </Icon>
          <Icon name="Badge.toLowerCase()" className="text-sm">
            {developerTools.length + documentation.length} Resources
          </Icon>
        </div>
      </div>

      {/* Download Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {downloadStats.map((stat) => (
          <Card key={stat.title}>
            <Icon name="CardContent.toLowerCase()" className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-gray-100">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </Icon>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="#">
              <Icon name="CardHeader.toLowerCase()" className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
              </Icon>
              <Icon name="CardContent.toLowerCase()">
                <Icon name="CardTitle.toLowerCase()" className="text-lg font-semibold">{action.title}</Icon>
                <Icon name="CardDescription.toLowerCase()" className="text-sm text-muted-foreground">
                  {action.description}
                </Icon>
              </Icon>
            </Link>
          </Card>
        ))}
      </div>

      {/* Download Categories */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="Folder.toLowerCase()" className="h-5 w-5" />
          Download Categories
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          Choose the right download for your needs
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {downloadCategories.map((category) => (
              <div key={category.title} className="text-center p-4 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`p-3 rounded-lg ${category.bgColor} w-fit mx-auto mb-3`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </Icon>
      </Card>

      {/* Mobile Applications */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="Smartphone.toLowerCase()" className="h-5 w-5" />
          Mobile Applications
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          Native mobile apps for iOS and Android
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="grid gap-4 md:grid-cols-2">
            {mobileApps.map((app) => (
              <div key={app.name} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <app.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(app.status)}`}>
                    {app.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Version:</span> {app.version}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span> {app.size}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Platform:</span> {app.platform}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads:</span> {app.downloads}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(app.rating)}
                    <span className="text-sm text-muted-foreground ml-1">({app.rating})</span>
                  </div>
                  <Icon name="Button.toLowerCase()" className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Download.toLowerCase()" className="h-4 w-4 mr-2" />
                    Download
                  </Icon>
                </div>
              </div>
            ))}
          </div>
        </Icon>
      </Card>

      {/* Desktop Applications */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="Desktop.toLowerCase()" className="h-5 w-5" />
          Desktop Applications
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          Native desktop apps for Windows, macOS, and Linux
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="grid gap-4 md:grid-cols-3">
            {desktopApps.map((app) => (
              <div key={app.name} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <app.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(app.status)}`}>
                    {app.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Version:</span> {app.version}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span> {app.size}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Platform:</span> {app.platform}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads:</span> {app.downloads}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(app.rating)}
                    <span className="text-sm text-muted-foreground ml-1">({app.rating})</span>
                  </div>
                  <Icon name="Button.toLowerCase()" className="bg-green-600 hover:bg-green-700">
                    <Icon name="Download.toLowerCase()" className="h-4 w-4 mr-2" />
                    Download
                  </Icon>
                </div>
              </div>
            ))}
          </div>
        </Icon>
      </Card>

      {/* Developer Tools */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="Code.toLowerCase()" className="h-5 w-5" />
          Developer Tools & SDKs
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          APIs, SDKs, and development resources
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="grid gap-4 md:grid-cols-2">
            {developerTools.map((tool) => (
              <div key={tool.name} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <tool.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(tool.status)}`}>
                    {tool.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Version:</span> {tool.version}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span> {tool.size}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span> {tool.type}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads:</span> {tool.downloads}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Updated: {tool.lastUpdated}
                  </span>
                  <Icon name="Button.toLowerCase()" className="bg-purple-600 hover:bg-purple-700">
                    <Icon name="Download.toLowerCase()" className="h-4 w-4 mr-2" />
                    Download
                  </Icon>
                </div>
              </div>
            ))}
          </div>
        </Icon>
      </Card>

      {/* Documentation */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="FileText.toLowerCase()" className="h-5 w-5" />
          Documentation & Resources
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          PDF guides, whitepapers, and technical documentation
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="grid gap-4 md:grid-cols-2">
            {documentation.map((doc) => (
              <div key={doc.name} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-orange-100">
                      <doc.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Version:</span> {doc.version}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span> {doc.size}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span> {doc.type}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Downloads:</span> {doc.downloads}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Updated: {doc.lastUpdated}
                  </span>
                  <Icon name="Button.toLowerCase()" className="bg-orange-600 hover:bg-orange-700">
                    <Icon name="Download.toLowerCase()" className="h-4 w-4 mr-2" />
                    Download
                  </Icon>
                </div>
              </div>
            ))}
          </div>
        </Icon>
      </Card>

      {/* Call to Action */}
      <Card>
        <Icon name="CardHeader.toLowerCase()" className="flex items-center gap-2">
          <Icon name="Download.toLowerCase()" className="h-5 w-5" />
          Need Help Getting Started?
        </Icon>
        <Icon name="CardDescription.toLowerCase()">
          Get support with installation and setup
        </Icon>
        <Icon name="CardContent.toLowerCase()">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Our support team is here to help you get up and running quickly
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/support">
                <Icon name="Button.toLowerCase()" className="bg-blue-600 hover:bg-blue-700">
                  Get Support
                </Icon>
              </Link>
              <Link href="/docs">
                <Icon name="Button.toLowerCase()" className="border border-gray-300 bg-white text-gray-700 hover:bg-b-surface">
                  View Documentation
                </Icon>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Installation guides available • 24/7 support • Community forums
            </p>
          </div>
        </Icon>
      </Card>
    </div>
  );
} 