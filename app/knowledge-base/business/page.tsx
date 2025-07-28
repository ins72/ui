'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Target, 
  Users, 
  TrendingUp, 
  BarChart3, 
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
  Database,
  Settings,
  UserCheck,
  DollarSign,
  Rocket,
  Award,
  CheckCircle,
  PieChart,
  Activity,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function BusinessDocumentationPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Business & Operations', href: '/knowledge-base/business' }
    ]);
    setCurrentPage('Business Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const businessSections = [
    {
      title: 'Business Strategy',
      description: 'Strategic planning, vision, and business objectives',
      icon: Target,
      color: 'bg-blue-500',
      articles: 12,
      topics: [
        'Company Vision & Mission',
        'Strategic Planning',
        'Business Model Canvas',
        'Competitive Analysis',
        'Market Positioning'
      ]
    },
    {
      title: 'Operations Management',
      description: 'Day-to-day operations and process management',
      icon: Settings,
      color: 'bg-green-500',
      articles: 18,
      topics: [
        'Process Documentation',
        'Quality Management',
        'Performance Metrics',
        'Operational Excellence',
        'Continuous Improvement'
      ]
    },
    {
      title: 'Customer Success',
      description: 'Customer experience and success management',
      icon: Users,
      color: 'bg-purple-500',
      articles: 8,
      topics: [
        'Customer Journey Mapping',
        'Success Metrics',
        'Customer Support',
        'Feedback Management',
        'Retention Strategies'
      ]
    },
    {
      title: 'Sales & Marketing',
      description: 'Sales processes and marketing strategies',
      icon: TrendingUp,
      color: 'bg-yellow-500',
      articles: 15,
      topics: [
        'Sales Process',
        'Lead Generation',
        'Marketing Campaigns',
        'Brand Management',
        'Revenue Optimization'
      ]
    },
    {
      title: 'Finance & Accounting',
      description: 'Financial management and reporting',
      icon: DollarSign,
      color: 'bg-red-500',
      articles: 10,
      topics: [
        'Financial Planning',
        'Budget Management',
        'Financial Reporting',
        'Cost Analysis',
        'Investment Strategy'
      ]
    }
  ];

  const featuredBusinessDocs = [
    {
      title: 'Core 2.0 Business Model',
      description: 'Complete overview of our business model, revenue streams, and value proposition',
      category: 'strategy',
      readTime: '10 min read',
      views: 2341,
      rating: 4.9,
      author: 'CEO Office',
      date: '2024-01-20',
      featured: true
    },
    {
      title: 'Q1 2024 Business Plan',
      description: 'Detailed business plan and objectives for Q1 2024',
      category: 'planning',
      readTime: '15 min read',
      views: 1567,
      rating: 4.7,
      author: 'Strategy Team',
      date: '2024-01-15',
      featured: true
    },
    {
      title: 'Customer Success Playbook',
      description: 'Comprehensive guide to customer success processes and best practices',
      category: 'customer-success',
      readTime: '12 min read',
      views: 892,
      rating: 4.8,
      author: 'Customer Success Team',
      date: '2024-01-12',
      featured: true
    },
    {
      title: 'Sales Process Documentation',
      description: 'Complete sales process from lead generation to deal closure',
      category: 'sales',
      readTime: '8 min read',
      views: 1234,
      rating: 4.6,
      author: 'Sales Team',
      date: '2024-01-10',
      featured: true
    }
  ];

  const businessMetrics = [
    {
      title: 'Revenue Growth',
      value: '+45%',
      change: '+12%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Customer Acquisition',
      value: '2,847',
      change: '+18%',
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Customer Satisfaction',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      title: 'Market Share',
      value: '12.5%',
      change: '+3.2%',
      changeType: 'positive',
      icon: PieChart,
      color: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'Business Plan Template',
      description: 'Download our business plan template',
      icon: FileText,
      href: '/knowledge-base/business/templates',
      color: 'bg-blue-500'
    },
    {
      title: 'Financial Models',
      description: 'Access financial modeling tools',
      icon: BarChart3,
      href: '/knowledge-base/business/financial-models',
      color: 'bg-green-500'
    },
    {
      title: 'Process Templates',
      description: 'Standard operating procedures',
      icon: Settings,
      href: '/knowledge-base/business/processes',
      color: 'bg-purple-500'
    },
    {
      title: 'Strategy Workshop',
      description: 'Book a strategy planning session',
      icon: Target,
      href: '/knowledge-base/business/workshops',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'strategy':
        return <Badge className="bg-blue-100 text-blue-800">Strategy</Badge>;
      case 'planning':
        return <Badge className="bg-green-100 text-green-800">Planning</Badge>;
      case 'customer-success':
        return <Badge className="bg-purple-100 text-purple-800">Customer Success</Badge>;
      case 'sales':
        return <Badge className="bg-yellow-100 text-yellow-800">Sales</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">General</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Business & Operations</h1>
          <p className="text-muted-foreground">
            Business strategy, operations, and management resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-blue-100 text-blue-800">
            Business Focus
          </Badge>
        </div>
      </div>

      {/* Business Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {businessMetrics.map((metric) => (
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
                from last quarter
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

      {/* Featured Business Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Business Documents</CardTitle>
          <CardDescription>
            Most important business resources and strategic documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredBusinessDocs.map((doc) => (
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

      {/* Business Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {businessSections.map((section) => (
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
                  <Link href={`/knowledge-base/business/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
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

      {/* Business Resources */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Business Templates</CardTitle>
            <CardDescription>
              Downloadable templates and tools for business operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Business Plan Template</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Financial Model Template</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Customer Journey Map</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Strategic Planning Framework</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Workshops</CardTitle>
            <CardDescription>
              Interactive sessions and training for business teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Strategic Planning Workshop</span>
                </div>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Customer Success Training</span>
                </div>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Sales Process Optimization</span>
                </div>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Financial Planning Session</span>
                </div>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 