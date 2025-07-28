'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  Calendar,
  CheckCircle,
  Clock,
  Zap,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle as CheckCircleIcon,
  AlertTriangle,
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
  BookOpen,
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
  Video,
  ThumbsUp,
  MessageSquare,
  UserPlus,
  Award as AwardIcon,
  Flag,
  Target as TargetIcon,
  Rocket,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function RoadmapPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Product Roadmap', href: '/roadmap' }
    ]);
    setCurrentPage('Product Roadmap');
  }, [setBreadcrumbs, setCurrentPage]);

  const roadmapPhases = [
    {
      title: 'Q1 2024 - Foundation',
      status: 'Completed',
      description: 'Core platform stability and performance improvements',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      features: [
        {
          title: 'Enhanced Security Framework',
          description: 'Advanced encryption and security protocols',
          status: 'Completed',
          priority: 'High'
        },
        {
          title: 'Performance Optimization',
          description: '50% improvement in platform speed',
          status: 'Completed',
          priority: 'High'
        },
        {
          title: 'Mobile App Beta',
          description: 'iOS and Android mobile applications',
          status: 'Completed',
          priority: 'Medium'
        }
      ]
    },
    {
      title: 'Q2 2024 - Intelligence',
      status: 'In Progress',
      description: 'AI-powered features and advanced analytics',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      features: [
        {
          title: 'AI-Powered Analytics',
          description: 'Predictive analytics and insights',
          status: 'In Progress',
          priority: 'High'
        },
        {
          title: 'Smart Automation',
          description: 'Workflow automation with AI',
          status: 'In Progress',
          priority: 'High'
        },
        {
          title: 'Natural Language Processing',
          description: 'Voice commands and text analysis',
          status: 'Planning',
          priority: 'Medium'
        }
      ]
    },
    {
      title: 'Q3 2024 - Integration',
      status: 'Planning',
      description: 'Advanced integrations and ecosystem expansion',
      icon: Unlink,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      features: [
        {
          title: 'Enterprise Integrations',
          description: 'SAP, Oracle, and Salesforce connectors',
          status: 'Planning',
          priority: 'High'
        },
        {
          title: 'API Marketplace',
          description: 'Third-party API integrations',
          status: 'Planning',
          priority: 'Medium'
        },
        {
          title: 'Custom Workflows',
          description: 'Visual workflow builder',
          status: 'Planning',
          priority: 'Medium'
        }
      ]
    },
    {
      title: 'Q4 2024 - Innovation',
      status: 'Planning',
      description: 'Next-generation features and capabilities',
      icon: Rocket,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      features: [
        {
          title: 'Advanced AI Assistant',
          description: 'Conversational AI for all operations',
          status: 'Planning',
          priority: 'High'
        },
        {
          title: 'Real-time Collaboration',
          description: 'Live collaboration tools',
          status: 'Planning',
          priority: 'Medium'
        },
        {
          title: 'Blockchain Integration',
          description: 'Secure blockchain transactions',
          status: 'Planning',
          priority: 'Low'
        }
      ]
    }
  ];

  const upcomingFeatures = [
    {
      title: 'Advanced Reporting Dashboard',
      description: 'Customizable dashboards with real-time data visualization',
      category: 'Analytics',
      priority: 'High',
      estimatedRelease: 'Q2 2024',
      votes: 1250
    },
    {
      title: 'Multi-language Support',
      description: 'Support for 20+ languages with automatic translation',
      category: 'Localization',
      priority: 'Medium',
      estimatedRelease: 'Q3 2024',
      votes: 890
    },
    {
      title: 'Advanced User Permissions',
      description: 'Granular role-based access control with custom permissions',
      category: 'Security',
      priority: 'High',
      estimatedRelease: 'Q2 2024',
      votes: 1100
    },
    {
      title: 'Mobile Offline Mode',
      description: 'Full offline functionality for mobile applications',
      category: 'Mobile',
      priority: 'Medium',
      estimatedRelease: 'Q3 2024',
      votes: 650
    },
    {
      title: 'Advanced Search',
      description: 'AI-powered search with natural language queries',
      category: 'Search',
      priority: 'Medium',
      estimatedRelease: 'Q2 2024',
      votes: 720
    },
    {
      title: 'Video Conferencing',
      description: 'Built-in video conferencing with screen sharing',
      category: 'Communication',
      priority: 'Low',
      estimatedRelease: 'Q4 2024',
      votes: 450
    }
  ];

  const quickActions = [
    {
      title: 'Request Feature',
      description: 'Submit new feature requests',
      icon: Lightbulb,
      action: 'request',
      color: 'bg-blue-500'
    },
    {
      title: 'Vote on Features',
      description: 'Vote for upcoming features',
      icon: ThumbsUp,
      action: 'vote',
      color: 'bg-green-500'
    },
    {
      title: 'Download Roadmap',
      description: 'Get the complete roadmap PDF',
      icon: Download,
      action: 'download',
      color: 'bg-purple-500'
    },
    {
      title: 'Join Beta Program',
      description: 'Test new features early',
      icon: Rocket,
      action: 'beta',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    {
      title: 'Features Delivered',
      value: '45+',
      description: 'Features released this year',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Upcoming Features',
      value: '25+',
      description: 'Features in development',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      title: 'Community Votes',
      value: '5,000+',
      description: 'Feature votes from users',
      icon: ThumbsUp,
      color: 'text-purple-600'
    },
    {
      title: 'Beta Testers',
      value: '500+',
      description: 'Active beta program members',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Roadmap</h1>
          <p className="text-muted-foreground">
            See what's coming next for Core 2.0 Enterprise Platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {roadmapPhases.length} Quarters
          </Badge>
          <Badge className="text-sm">
            {upcomingFeatures.length} Upcoming Features
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
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

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="#">
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

      {/* Roadmap Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5" />
            Product Roadmap Timeline
          </CardTitle>
          <CardDescription>
            Our development roadmap for 2024 and beyond
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div key={phase.title} className="relative">
                {/* Timeline connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${phase.bgColor}`}>
                    <phase.icon className={`h-6 w-6 ${phase.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                      <Badge className={`text-xs ${getStatusColor(phase.status)}`}>
                        {phase.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    
                    <div className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="p-3 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{feature.title}</h4>
                            <div className="flex items-center space-x-2">
                              <Badge className={`text-xs ${getStatusColor(feature.status)}`}>
                                {feature.status}
                              </Badge>
                              <Badge className={`text-xs ${getPriorityColor(feature.priority)}`}>
                                {feature.priority}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TargetIcon className="h-5 w-5" />
            Upcoming Features
          </CardTitle>
          <CardDescription>
            Features in development based on user feedback and votes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{feature.estimatedRelease}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{feature.votes} votes</span>
                      </span>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getPriorityColor(feature.priority)}`}>
                    {feature.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="text-xs bg-blue-100 text-blue-800">
                    {feature.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button className="text-xs">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Vote
                    </Button>
                    <Button className="text-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      <Info className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            Feature Categories
          </CardTitle>
          <CardDescription>
            Different types of features we're developing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">Speed and optimization improvements</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Enhanced security features</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Collaboration</h3>
              <p className="text-sm text-muted-foreground">Team collaboration tools</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-muted-foreground">Advanced reporting and insights</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Have a Feature Request?
          </CardTitle>
          <CardDescription>
            Help shape the future of Core 2.0 by suggesting new features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Your feedback helps us prioritize the most important features for our users
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit Feature Request
              </Button>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Contact Product Team
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              All requests are reviewed by our product team • Top-voted features get priority
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 