'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Globe, 
  Share2,
  FileText,
  Search,
  Filter,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Download,
  Star,
  Bookmark,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  Settings,
  UserCheck,
  DollarSign,
  Rocket,
  Award,
  CheckCircle,
  Activity,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook
} from 'lucide-react';
import Link from 'next/link';

export default function MarketingDocumentationPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Marketing & Growth', href: '/knowledge-base/marketing' }
    ]);
    setCurrentPage('Marketing Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const marketingSections = [
    {
      title: 'Marketing Strategy',
      description: 'Strategic marketing planning and campaign development',
      icon: Target,
      color: 'bg-blue-500',
      articles: 15,
      topics: [
        'Brand Strategy',
        'Market Research',
        'Campaign Planning',
        'Competitive Analysis',
        'Marketing Mix'
      ]
    },
    {
      title: 'Content Marketing',
      description: 'Content creation, distribution, and optimization',
      icon: FileText,
      color: 'bg-green-500',
      articles: 22,
      topics: [
        'Content Strategy',
        'Blog & Articles',
        'Video Content',
        'Social Media Content',
        'SEO Content'
      ]
    },
    {
      title: 'SEO & Analytics',
      description: 'Search engine optimization and performance tracking',
      icon: BarChart3,
      color: 'bg-purple-500',
      articles: 18,
      topics: [
        'SEO Strategy',
        'Keyword Research',
        'Analytics & Reporting',
        'Performance Tracking',
        'Conversion Optimization'
      ]
    },
    {
      title: 'Social Media',
      description: 'Social media marketing and community management',
      icon: Share2,
      color: 'bg-yellow-500',
      articles: 12,
      topics: [
        'Social Media Strategy',
        'Platform Management',
        'Community Building',
        'Influencer Marketing',
        'Social Advertising'
      ]
    },
    {
      title: 'Brand Guidelines',
      description: 'Brand identity, guidelines, and asset management',
      icon: Award,
      color: 'bg-red-500',
      articles: 8,
      topics: [
        'Brand Identity',
        'Visual Guidelines',
        'Voice & Tone',
        'Asset Library',
        'Brand Standards'
      ]
    }
  ];

  const featuredMarketingDocs = [
    {
      title: '2024 Marketing Strategy',
      description: 'Comprehensive marketing strategy and growth plan for 2024',
      category: 'strategy',
      readTime: '15 min read',
      views: 2341,
      rating: 4.8,
      author: 'Marketing Team',
      date: '2024-01-20',
      featured: true
    },
    {
      title: 'Content Marketing Playbook',
      description: 'Complete guide to content marketing and distribution',
      category: 'content',
      readTime: '12 min read',
      views: 1892,
      rating: 4.7,
      author: 'Content Team',
      date: '2024-01-18',
      featured: true
    },
    {
      title: 'SEO Best Practices Guide',
      description: 'Comprehensive SEO strategy and optimization guide',
      category: 'seo',
      readTime: '18 min read',
      views: 1456,
      rating: 4.9,
      author: 'SEO Team',
      date: '2024-01-15',
      featured: true
    },
    {
      title: 'Brand Guidelines v2.0',
      description: 'Updated brand guidelines and visual identity standards',
      category: 'brand',
      readTime: '10 min read',
      views: 1234,
      rating: 4.6,
      author: 'Brand Team',
      date: '2024-01-12',
      featured: true
    }
  ];

  const marketingMetrics = [
    {
      title: 'Website Traffic',
      value: '45.2K',
      change: '+23%',
      changeType: 'positive',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Lead Generation',
      value: '1,847',
      change: '+18%',
      changeType: 'positive',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.5%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Social Reach',
      value: '125K',
      change: '+12%',
      changeType: 'positive',
      icon: Share2,
      color: 'text-yellow-600'
    }
  ];

  const quickActions = [
    {
      title: 'Marketing Templates',
      description: 'Download marketing templates and assets',
      icon: FileText,
      href: '/knowledge-base/marketing/templates',
      color: 'bg-blue-500'
    },
    {
      title: 'Campaign Calendar',
      description: 'View upcoming marketing campaigns',
      icon: Calendar,
      href: '/knowledge-base/marketing/calendar',
      color: 'bg-green-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Access marketing analytics and reports',
      icon: BarChart3,
      href: '/knowledge-base/marketing/analytics',
      color: 'bg-purple-500'
    },
    {
      title: 'Brand Assets',
      description: 'Download brand assets and guidelines',
      icon: Download,
      href: '/knowledge-base/marketing/assets',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'strategy':
        return <Badge className="bg-blue-100 text-blue-800">Strategy</Badge>;
      case 'content':
        return <Badge className="bg-green-100 text-green-800">Content</Badge>;
      case 'seo':
        return <Badge className="bg-purple-100 text-purple-800">SEO</Badge>;
      case 'brand':
        return <Badge className="bg-yellow-100 text-yellow-800">Brand</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">General</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marketing & Growth</h1>
          <p className="text-muted-foreground">
            Marketing strategies, growth tactics, and brand resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-purple-100 text-purple-800">
            Marketing Focus
          </Badge>
        </div>
      </div>

      {/* Marketing Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {marketingMetrics.map((metric) => (
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

      {/* Featured Marketing Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Marketing Documents</CardTitle>
          <CardDescription>
            Most important marketing resources and strategic documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredMarketingDocs.map((doc) => (
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

      {/* Marketing Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {marketingSections.map((section) => (
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
                  <Link href={`/knowledge-base/marketing/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
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

      {/* Marketing Resources */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Marketing Templates</CardTitle>
            <CardDescription>
              Downloadable templates and assets for marketing campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Campaign Brief Template</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Marketing Plan Template</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Share2 className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Social Media Calendar</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Content Strategy Template</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Channels</CardTitle>
            <CardDescription>
              Manage and monitor social media presence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">12.5K followers</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Twitter className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Twitter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">8.9K followers</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">15.2K followers</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">YouTube</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">5.8K subscribers</span>
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