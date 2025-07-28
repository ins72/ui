'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Shield, 
  Zap,
  FileText,
  Search,
  Filter,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Download,
  Share2,
  Star,
  Bookmark,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  Settings,
  UserCheck,
  Rocket,
  Award,
  CheckCircle,
  Activity,
  GitBranch,
  Terminal,
  Cpu,
  HardDrive,
  Network
} from 'lucide-react';
import Link from 'next/link';

export default function TechnicalDocumentationPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Development & Technical', href: '/knowledge-base/technical' }
    ]);
    setCurrentPage('Technical Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const technicalSections = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      icon: Globe,
      color: 'bg-blue-500',
      articles: 25,
      topics: [
        'REST API Reference',
        'GraphQL API',
        'Authentication',
        'Rate Limiting',
        'Error Handling'
      ]
    },
    {
      title: 'Development Guides',
      description: 'Step-by-step development tutorials and best practices',
      icon: Code,
      color: 'bg-green-500',
      articles: 32,
      topics: [
        'Getting Started',
        'Frontend Development',
        'Backend Development',
        'Mobile Development',
        'Testing & QA'
      ]
    },
    {
      title: 'Architecture Overview',
      description: 'System architecture and technical design',
      icon: Server,
      color: 'bg-purple-500',
      articles: 15,
      topics: [
        'System Architecture',
        'Database Design',
        'Microservices',
        'Security Architecture',
        'Scalability'
      ]
    },
    {
      title: 'Deployment & DevOps',
      description: 'Deployment, CI/CD, and infrastructure management',
      icon: Rocket,
      color: 'bg-yellow-500',
      articles: 18,
      topics: [
        'CI/CD Pipelines',
        'Docker & Containers',
        'Kubernetes',
        'Cloud Deployment',
        'Monitoring & Logging'
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues, debugging, and support resources',
      icon: HelpCircle,
      color: 'bg-red-500',
      articles: 12,
      topics: [
        'Common Issues',
        'Debugging Guides',
        'Performance Optimization',
        'Security Issues',
        'Support Resources'
      ]
    }
  ];

  const featuredTechnicalDocs = [
    {
      title: 'Core 2.0 API Reference',
      description: 'Complete REST API documentation with examples and SDKs',
      category: 'api',
      readTime: '20 min read',
      views: 3456,
      rating: 4.8,
      author: 'Engineering Team',
      date: '2024-01-20',
      featured: true
    },
    {
      title: 'Getting Started Guide',
      description: 'Quick start guide for developers new to Core 2.0',
      category: 'tutorial',
      readTime: '15 min read',
      views: 2891,
      rating: 4.9,
      author: 'Developer Relations',
      date: '2024-01-18',
      featured: true
    },
    {
      title: 'System Architecture Deep Dive',
      description: 'Detailed overview of Core 2.0 system architecture',
      category: 'architecture',
      readTime: '25 min read',
      views: 1234,
      rating: 4.7,
      author: 'Architecture Team',
      date: '2024-01-15',
      featured: true
    },
    {
      title: 'Deployment Best Practices',
      description: 'Production deployment guidelines and best practices',
      category: 'devops',
      readTime: '18 min read',
      views: 1567,
      rating: 4.6,
      author: 'DevOps Team',
      date: '2024-01-12',
      featured: true
    }
  ];

  const technicalMetrics = [
    {
      title: 'API Uptime',
      value: '99.9%',
      change: '+0.1%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Response Time',
      value: '245ms',
      change: '-15ms',
      changeType: 'positive',
      icon: Zap,
      color: 'text-blue-600'
    },
    {
      title: 'Active Integrations',
      value: '1,234',
      change: '+89',
      changeType: 'positive',
      icon: GitBranch,
      color: 'text-purple-600'
    },
    {
      title: 'Code Coverage',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: Shield,
      color: 'text-yellow-600'
    }
  ];

  const quickActions = [
    {
      title: 'API Playground',
      description: 'Interactive API testing environment',
      icon: Terminal,
      href: '/knowledge-base/technical/api-playground',
      color: 'bg-blue-500'
    },
    {
      title: 'SDK Downloads',
      description: 'Download SDKs and libraries',
      icon: Download,
      href: '/knowledge-base/technical/sdks',
      color: 'bg-green-500'
    },
    {
      title: 'Code Examples',
      description: 'Sample code and examples',
      icon: Code,
      href: '/knowledge-base/technical/examples',
      color: 'bg-purple-500'
    },
    {
      title: 'Developer Support',
      description: 'Get help from our developer team',
      icon: MessageSquare,
      href: '/support/developer',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'api':
        return <Badge className="bg-blue-100 text-blue-800">API</Badge>;
      case 'tutorial':
        return <Badge className="bg-green-100 text-green-800">Tutorial</Badge>;
      case 'architecture':
        return <Badge className="bg-purple-100 text-purple-800">Architecture</Badge>;
      case 'devops':
        return <Badge className="bg-yellow-100 text-yellow-800">DevOps</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">General</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Development & Technical</h1>
          <p className="text-muted-foreground">
            Technical documentation, APIs, and development guides
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-100 text-green-800">
            Developer Focus
          </Badge>
        </div>
      </div>

      {/* Technical Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {technicalMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {metric.change}
                </span>{' '}
                from last month
              </p>
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

      {/* Featured Technical Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Technical Documents</CardTitle>
          <CardDescription>
            Most important technical resources and guides
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredTechnicalDocs.map((doc) => (
              <div key={doc.title} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  {getCategoryBadge(doc.category)}
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{doc.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{doc.readTime}</span>
                    <span>{doc.views} views</span>
                    <span>By {doc.author}</span>
                  </div>
                  <span>{doc.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {technicalSections.map((section) => (
          <Card key={section.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${section.color}`}>
                  <section.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <Badge className="bg-gray-100 text-gray-800">
                  {section.articles} articles
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.topics.map((topic) => (
                  <div key={topic} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <span className="text-sm font-medium">{topic}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
                <div className="pt-2">
                  <Link href={`/knowledge-base/technical/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full">
                      View All {section.title} Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Resources */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Development Tools</CardTitle>
            <CardDescription>
              Tools and utilities for developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">API Playground</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Code className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Code Generator</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Database className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Database Explorer</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Activity className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Performance Monitor</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SDKs & Libraries</CardTitle>
            <CardDescription>
              Official SDKs and client libraries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">JavaScript SDK</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Code className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Python SDK</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Code className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">React Components</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Code className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Mobile SDKs</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 