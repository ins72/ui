'use client';

import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
  Users,
  Globe,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Download,
  Share,
  Bookmark,
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
  Database,
  Server,
  Key,
  Eye,
  EyeOff,
  Lock,
  Shield,
  Settings,
  BarChart3,
  Folder,
  File,
  Home,
  Contact,
  DollarSign,
  BookOpen as BookOpenIcon,
  Newspaper,
  Briefcase,
  LifeBuoy,
  Cookie,
  Activity,
  XCircle,
  Wrench,
  Star,
  Award,
  TrendingUp,
  Target,
  Users as UsersIcon,
  Image,
  FileText,
  Camera,
  Video as VideoIcon,
  ThumbsUp,
  MessageSquare,
  UserPlus,
  Award as AwardIcon,
  Zap,
  Clock,
  Calendar,
  Star as StarIcon,
  Target as TargetIcon,
  Rocket,
  Lightbulb,
  Scale,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Cloud,
  HardDrive as HardDriveIcon,
  Package,
  Archive as ArchiveIcon,
  FileArchive,
  Code,
  Terminal,
  GitBranch,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Network,
  Wifi,
  WifiOff,
  Bluetooth,
  Usb,
  Cpu,
  Memory,
  HardDrive as StorageIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon
} from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Help Center', href: '/help' }
    ]);
    setCurrentPage('Help Center');
  }, [setBreadcrumbs, setCurrentPage]);

  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials',
      icon: Rocket,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      articles: [
        {
          title: 'How to create your first project',
          description: 'Step-by-step guide to creating your first project',
          readTime: '5 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Setting up your account',
          description: 'Complete account setup and configuration',
          readTime: '3 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Understanding the dashboard',
          description: 'Navigate and understand your dashboard',
          readTime: '4 min read',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      title: 'User Management',
      description: 'Managing users, roles, and permissions',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      articles: [
        {
          title: 'Adding new users to your team',
          description: 'Invite and manage team members',
          readTime: '6 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Setting up user roles and permissions',
          description: 'Configure access levels and permissions',
          readTime: '8 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Managing user groups',
          description: 'Organize users into groups and teams',
          readTime: '5 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      title: 'Data Management',
      description: 'Import, export, and manage your data',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      articles: [
        {
          title: 'Importing data from external sources',
          description: 'Import data from CSV, Excel, and other formats',
          readTime: '10 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Exporting your data',
          description: 'Export data in various formats',
          readTime: '4 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Data backup and recovery',
          description: 'Backup and restore your data',
          readTime: '7 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      title: 'Integrations',
      description: 'Connect with third-party services',
      icon: Unlink,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      articles: [
        {
          title: 'Setting up API integrations',
          description: 'Connect to external APIs and services',
          readTime: '12 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Webhook configuration',
          description: 'Configure webhooks for real-time updates',
          readTime: '8 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'OAuth authentication setup',
          description: 'Set up OAuth for secure integrations',
          readTime: '10 min read',
          difficulty: 'Advanced'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to reset your password',
      category: 'Account',
      views: '12,345',
      helpful: '98%'
    },
    {
      title: 'Troubleshooting login issues',
      category: 'Account',
      views: '8,901',
      helpful: '95%'
    },
    {
      title: 'Setting up two-factor authentication',
      category: 'Security',
      views: '7,234',
      helpful: '92%'
    },
    {
      title: 'Understanding billing and subscriptions',
      category: 'Billing',
      views: '6,789',
      helpful: '89%'
    },
    {
      title: 'API rate limits and quotas',
      category: 'API',
      views: '5,432',
      helpful: '87%'
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: MessageCircle,
      action: 'support',
      color: 'bg-blue-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: 'videos',
      color: 'bg-green-500'
    },
    {
      title: 'Community Forum',
      description: 'Ask questions and get answers',
      icon: Users,
      action: 'community',
      color: 'bg-purple-500'
    },
    {
      title: 'Report a Bug',
      description: 'Report issues and bugs',
      icon: Bug,
      action: 'bug',
      color: 'bg-orange-500'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-600'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-blue-600'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'text-purple-600'
    },
    {
      title: 'Community Forum',
      description: 'Get help from other users',
      icon: Users,
      availability: '24/7',
      responseTime: 'Varies',
      color: 'text-orange-600'
    }
  ];

  const helpStats = [
    {
      title: 'Articles',
      value: '500+',
      description: 'Help articles and guides',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Video Tutorials',
      value: '100+',
      description: 'Step-by-step video guides',
      icon: Video,
      color: 'text-green-600'
    },
    {
      title: 'Support Team',
      value: '50+',
      description: 'Expert support agents',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Response Time',
      value: '< 2 min',
      description: 'Average response time',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
          <p className="text-muted-foreground">
            Find answers, tutorials, and support resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {helpCategories.reduce((total, cat) => total + cat.articles.length, 0)} Articles
          </Badge>
          <Badge className="text-sm">
            {supportChannels.length} Support Channels
          </Badge>
        </div>
      </div>

      {/* Help Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {helpStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or guides..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={action.action === 'support' ? '/contact' : action.action === 'community' ? '/community' : '#'}>
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

      {/* Help Categories */}
      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.articles.map((article, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                      onClick={() => toggleItem(`${category.title}-${index}`)}
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          <Badge className={`text-xs ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </Badge>
                        </div>
                      </div>
                      {expandedItems.has(`${category.title}-${index}`) ? (
                        <ChevronUpIcon className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                    {expandedItems.has(`${category.title}-${index}`) && (
                      <div className="px-4 pb-4">
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-3">
                            This article will provide detailed step-by-step instructions for {article.title.toLowerCase()}.
                          </p>
                          <div className="flex items-center space-x-2">
                            <Button className="text-sm">
                              Read Article
                            </Button>
                            <Button className="text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                              <Bookmark className="h-3 w-3 mr-1" />
                              Bookmark
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popular Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StarIcon className="h-5 w-5" />
            Popular Articles
          </CardTitle>
          <CardDescription>
            Most viewed and helpful articles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularArticles.map((article, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-medium">{article.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <Badge className="text-xs bg-blue-100 text-blue-800">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.views} views</span>
                    <span className="text-xs text-green-600">{article.helpful} helpful</span>
                  </div>
                </div>
                <Button className="text-sm">
                  Read
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Channels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LifeBuoy className="h-5 w-5" />
            Support Channels
          </CardTitle>
          <CardDescription>
            Multiple ways to get the help you need
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="text-center p-4 border rounded-lg">
                <div className={`p-3 rounded-lg bg-gray-100 w-fit mx-auto mb-3`}>
                  <channel.icon className={`h-6 w-6 ${channel.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p><strong>Availability:</strong> {channel.availability}</p>
                  <p><strong>Response:</strong> {channel.responseTime}</p>
                </div>
                <Button className="mt-3 w-full">
                  Get Help
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Still Need Help?
          </CardTitle>
          <CardDescription>
            Our support team is here to help you succeed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Can't find what you're looking for? Our expert support team is ready to help
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              </Link>
              <Link href="/community">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Ask Community
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Average response time: < 2 minutes • 24/7 support available
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 