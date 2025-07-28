'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Globe, 
  Users,
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
  Building,
  Rocket,
  Award,
  CheckCircle,
  Activity,
  PieChart,
  Target,
  Zap,
  Shield,
  Database
} from 'lucide-react';
import Link from 'next/link';

export default function InvestorRelationsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Investor Relations', href: '/knowledge-base/investors' }
    ]);
    setCurrentPage('Investor Relations');
  }, [setBreadcrumbs, setCurrentPage]);

  const investorSections = [
    {
      title: 'Financial Reports',
      description: 'Quarterly and annual financial reports',
      icon: FileText,
      color: 'bg-blue-500',
      articles: 12,
      topics: [
        'Quarterly Reports',
        'Annual Reports',
        'Earnings Calls',
        'Financial Statements',
        'SEC Filings'
      ]
    },
    {
      title: 'Investor Updates',
      description: 'Regular investor communications and updates',
      icon: MessageSquare,
      color: 'bg-green-500',
      articles: 18,
      topics: [
        'Monthly Updates',
        'Quarterly Calls',
        'Press Releases',
        'Investor Presentations',
        'Newsletters'
      ]
    },
    {
      title: 'Business Metrics',
      description: 'Key performance indicators and business metrics',
      icon: BarChart3,
      color: 'bg-purple-500',
      articles: 15,
      topics: [
        'KPIs Dashboard',
        'Growth Metrics',
        'Customer Metrics',
        'Financial Metrics',
        'Operational Metrics'
      ]
    },
    {
      title: 'Market Analysis',
      description: 'Market research and competitive analysis',
      icon: Globe,
      color: 'bg-yellow-500',
      articles: 10,
      topics: [
        'Market Research',
        'Competitive Analysis',
        'Industry Trends',
        'Market Size',
        'Growth Opportunities'
      ]
    },
    {
      title: 'Growth Projections',
      description: 'Future growth plans and projections',
      icon: TrendingUp,
      color: 'bg-red-500',
      articles: 8,
      topics: [
        'Growth Strategy',
        'Revenue Projections',
        'Market Expansion',
        'Product Roadmap',
        'Investment Plans'
      ]
    }
  ];

  const featuredInvestorDocs = [
    {
      title: 'Q4 2023 Financial Report',
      description: 'Complete financial performance and business metrics for Q4 2023',
      category: 'financial',
      readTime: '20 min read',
      views: 2341,
      rating: 4.9,
      author: 'Finance Team',
      date: '2024-01-20',
      featured: true
    },
    {
      title: '2024 Growth Strategy',
      description: 'Comprehensive growth strategy and market expansion plans',
      category: 'strategy',
      readTime: '15 min read',
      views: 1892,
      rating: 4.8,
      author: 'Strategy Team',
      date: '2024-01-18',
      featured: true
    },
    {
      title: 'Market Analysis Report',
      description: 'Detailed market analysis and competitive landscape',
      category: 'market',
      readTime: '18 min read',
      views: 1456,
      rating: 4.7,
      author: 'Market Research Team',
      date: '2024-01-15',
      featured: true
    },
    {
      title: 'Investor Presentation Q1 2024',
      description: 'Latest investor presentation with key metrics and updates',
      category: 'presentation',
      readTime: '12 min read',
      views: 1234,
      rating: 4.6,
      author: 'Investor Relations',
      date: '2024-01-12',
      featured: true
    }
  ];

  const financialMetrics = [
    {
      title: 'Revenue',
      value: '$12.5M',
      change: '+45%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'ARR',
      value: '$48.2M',
      change: '+38%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Gross Margin',
      value: '78%',
      change: '+2%',
      changeType: 'positive',
      icon: PieChart,
      color: 'text-purple-600'
    },
    {
      title: 'Customer Growth',
      value: '+156%',
      change: '+23%',
      changeType: 'positive',
      icon: Users,
      color: 'text-yellow-600'
    }
  ];

  const quickActions = [
    {
      title: 'Financial Reports',
      description: 'Download latest financial reports',
      icon: FileText,
      href: '/knowledge-base/investors/reports',
      color: 'bg-blue-500'
    },
    {
      title: 'Investor Calendar',
      description: 'View upcoming investor events',
      icon: Calendar,
      href: '/knowledge-base/investors/calendar',
      color: 'bg-green-500'
    },
    {
      title: 'Metrics Dashboard',
      description: 'Access real-time business metrics',
      icon: BarChart3,
      href: '/knowledge-base/investors/metrics',
      color: 'bg-purple-500'
    },
    {
      title: 'Contact IR',
      description: 'Get in touch with investor relations',
      icon: MessageSquare,
      href: '/contact/investor-relations',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'financial':
        return <Badge className="bg-blue-100 text-blue-800">Financial</Badge>;
      case 'strategy':
        return <Badge className="bg-green-100 text-green-800">Strategy</Badge>;
      case 'market':
        return <Badge className="bg-purple-100 text-purple-800">Market</Badge>;
      case 'presentation':
        return <Badge className="bg-yellow-100 text-yellow-800">Presentation</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">General</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investor Relations</h1>
          <p className="text-muted-foreground">
            Financial reports, investor updates, and business metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-yellow-100 text-yellow-800">
            Investor Focus
          </Badge>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {financialMetrics.map((metric) => (
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
                YoY
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

      {/* Featured Investor Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Investor Documents</CardTitle>
          <CardDescription>
            Most important financial and strategic documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredInvestorDocs.map((doc) => (
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

      {/* Investor Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {investorSections.map((section) => (
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
                  <Link href={`/knowledge-base/investors/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
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

      {/* Investor Resources */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Financial Reports</CardTitle>
            <CardDescription>
              Download latest financial reports and presentations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Q4 2023 Financial Report</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Q4 2023 Earnings Call</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">2024 Growth Strategy</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Market Analysis Report</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investor Events</CardTitle>
            <CardDescription>
              Upcoming investor events and presentations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Q1 2024 Earnings Call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Feb 15, 2024</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Annual Shareholder Meeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">May 20, 2024</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Investor Day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Mar 10, 2024</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Analyst Day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Apr 5, 2024</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 