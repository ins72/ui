'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  CheckCircle,
  X,
  Minus,
  Plus,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
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
  X as XIcon,
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
  Zap,
  Clock,
  Calendar,
  Star as StarIcon,
  Target as TargetIcon,
  Rocket,
  Lightbulb,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Compare', href: '/compare' }
    ]);
    setCurrentPage('Compare');
  }, [setBreadcrumbs, setCurrentPage]);

  const competitors = [
    {
      name: 'Salesforce',
      logo: '/logos/salesforce.png',
      description: 'Leading CRM platform with extensive features',
      rating: 4.2,
      pros: ['Extensive ecosystem', 'Strong mobile app', 'Excellent reporting'],
      cons: ['Complex pricing', 'Steep learning curve', 'Expensive for small businesses'],
      pricing: 'Starting at $25/user/month',
      bestFor: 'Large enterprises'
    },
    {
      name: 'HubSpot',
      logo: '/logos/hubspot.png',
      description: 'All-in-one marketing and CRM platform',
      rating: 4.0,
      pros: ['User-friendly interface', 'Great marketing tools', 'Good free tier'],
      cons: ['Limited customization', 'Can be expensive', 'Complex for advanced users'],
      pricing: 'Starting at $45/user/month',
      bestFor: 'Small to medium businesses'
    },
    {
      name: 'Microsoft Dynamics',
      logo: '/logos/microsoft-dynamics.png',
      description: 'Enterprise resource planning and CRM solution',
      rating: 3.8,
      pros: ['Deep Microsoft integration', 'Enterprise-grade security', 'Comprehensive features'],
      cons: ['Complex implementation', 'High cost', 'Requires technical expertise'],
      pricing: 'Starting at $65/user/month',
      bestFor: 'Large enterprises'
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Core Features',
      features: [
        {
          name: 'Contact Management',
          core2: 'Advanced',
          salesforce: 'Advanced',
          hubspot: 'Good',
          dynamics: 'Advanced'
        },
        {
          name: 'Lead Management',
          core2: 'Advanced',
          salesforce: 'Advanced',
          hubspot: 'Good',
          dynamics: 'Advanced'
        },
        {
          name: 'Sales Pipeline',
          core2: 'Advanced',
          salesforce: 'Advanced',
          hubspot: 'Good',
          dynamics: 'Advanced'
        },
        {
          name: 'Email Marketing',
          core2: 'Built-in',
          salesforce: 'Add-on',
          hubspot: 'Built-in',
          dynamics: 'Add-on'
        }
      ]
    },
    {
      category: 'Analytics & Reporting',
      features: [
        {
          name: 'Real-time Analytics',
          core2: 'Yes',
          salesforce: 'Yes',
          hubspot: 'Limited',
          dynamics: 'Yes'
        },
        {
          name: 'Custom Dashboards',
          core2: 'Advanced',
          salesforce: 'Advanced',
          hubspot: 'Basic',
          dynamics: 'Advanced'
        },
        {
          name: 'Predictive Analytics',
          core2: 'AI-powered',
          salesforce: 'Add-on',
          hubspot: 'Limited',
          dynamics: 'Add-on'
        },
        {
          name: 'Export Capabilities',
          core2: 'Multiple formats',
          salesforce: 'Multiple formats',
          hubspot: 'Limited',
          dynamics: 'Multiple formats'
        }
      ]
    },
    {
      category: 'Integration & API',
      features: [
        {
          name: 'REST API',
          core2: 'Full access',
          salesforce: 'Full access',
          hubspot: 'Limited',
          dynamics: 'Full access'
        },
        {
          name: 'Third-party Integrations',
          core2: '500+',
          salesforce: '1000+',
          hubspot: '300+',
          dynamics: '400+'
        },
        {
          name: 'Webhook Support',
          core2: 'Yes',
          salesforce: 'Yes',
          hubspot: 'Limited',
          dynamics: 'Yes'
        },
        {
          name: 'Custom Development',
          core2: 'Full support',
          salesforce: 'Full support',
          hubspot: 'Limited',
          dynamics: 'Full support'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      features: [
        {
          name: 'SOC 2 Compliance',
          core2: 'Yes',
          salesforce: 'Yes',
          hubspot: 'Yes',
          dynamics: 'Yes'
        },
        {
          name: 'GDPR Compliance',
          core2: 'Yes',
          salesforce: 'Yes',
          hubspot: 'Yes',
          dynamics: 'Yes'
        },
        {
          name: 'Two-Factor Authentication',
          core2: 'Yes',
          salesforce: 'Yes',
          hubspot: 'Yes',
          dynamics: 'Yes'
        },
        {
          name: 'Data Encryption',
          core2: 'End-to-end',
          salesforce: 'End-to-end',
          hubspot: 'Standard',
          dynamics: 'End-to-end'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Download Comparison',
      description: 'Get detailed comparison PDF',
      icon: Download,
      action: 'download',
      color: 'bg-blue-500'
    },
    {
      title: 'Schedule Demo',
      description: 'See Core 2.0 in action',
      icon: Video,
      action: 'demo',
      color: 'bg-green-500'
    },
    {
      title: 'Free Trial',
      description: 'Try Core 2.0 for free',
      icon: Zap,
      action: 'trial',
      color: 'bg-purple-500'
    },
    {
      title: 'Contact Sales',
      description: 'Get personalized consultation',
      icon: Phone,
      action: 'sales',
      color: 'bg-orange-500'
    }
  ];

  const core2Advantages = [
    {
      title: 'Cost Efficiency',
      description: '50% lower total cost of ownership compared to competitors',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Ease of Use',
      description: 'Intuitive interface with 80% faster onboarding',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'AI Integration',
      description: 'Built-in AI features without additional costs',
      icon: Zap,
      color: 'text-purple-600'
    },
    {
      title: 'Customization',
      description: 'Unlimited customization without developer fees',
      icon: Settings,
      color: 'text-orange-600'
    }
  ];

  const renderFeatureValue = (value: string) => {
    if (value === 'Yes' || value === 'Advanced' || value === 'Built-in' || value === 'Full access' || value === '500+' || value === 'Full support' || value === 'End-to-end') {
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    } else if (value === 'No' || value === 'Basic' || value === 'Add-on' || value === 'Limited' || value === '300+' || value === 'Standard') {
      return <X className="h-4 w-4 text-red-600" />;
    } else {
      return <span className="text-sm text-muted-foreground">{value}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compare Core 2.0</h1>
          <p className="text-muted-foreground">
            See how Core 2.0 stacks up against the competition
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {competitors.length} Competitors
          </Badge>
          <Badge className="text-sm">
            {comparisonFeatures.reduce((total, cat) => total + cat.features.length, 0)} Features
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={action.action === 'sales' ? '/contact' : action.action === 'trial' ? '/pricing' : '#'}>
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

      {/* Core 2.0 Advantages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            Why Choose Core 2.0?
          </CardTitle>
          <CardDescription>
            Key advantages that set Core 2.0 apart from the competition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {core2Advantages.map((advantage) => (
              <div key={advantage.title} className="text-center p-4 border rounded-lg">
                <div className={`p-3 rounded-lg bg-gray-100 w-fit mx-auto mb-3`}>
                  <advantage.icon className={`h-6 w-6 ${advantage.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitor Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Competitor Overview
          </CardTitle>
          <CardDescription>
            Quick overview of how Core 2.0 compares to leading alternatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Core 2.0 */}
            <div className="p-4 border-2 border-blue-500 rounded-lg bg-blue-50">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-blue-600">Core 2.0</h3>
                <p className="text-sm text-muted-foreground">Enterprise Platform</p>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">5.0/5.0</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Pricing:</strong> Starting at $15/user/month</p>
                <p><strong>Best for:</strong> All business sizes</p>
                <p><strong>Setup time:</strong> 1-2 days</p>
              </div>
            </div>

            {/* Competitors */}
            {competitors.map((competitor) => (
              <div key={competitor.name} className="p-4 border rounded-lg">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg">{competitor.name}</h3>
                  <p className="text-sm text-muted-foreground">{competitor.description}</p>
                  <div className="flex items-center justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(competitor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{competitor.rating}/5.0</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Pricing:</strong> {competitor.pricing}</p>
                  <p><strong>Best for:</strong> {competitor.bestFor}</p>
                  <p><strong>Setup time:</strong> 2-4 weeks</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Feature Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Detailed Feature Comparison
          </CardTitle>
          <CardDescription>
            Comprehensive comparison of features across all platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {comparisonFeatures.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Feature</th>
                        <th className="text-center p-3 font-medium text-blue-600">Core 2.0</th>
                        <th className="text-center p-3 font-medium">Salesforce</th>
                        <th className="text-center p-3 font-medium">HubSpot</th>
                        <th className="text-center p-3 font-medium">Microsoft Dynamics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{feature.name}</td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center">
                              {renderFeatureValue(feature.core2)}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center">
                              {renderFeatureValue(feature.salesforce)}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center">
                              {renderFeatureValue(feature.hubspot)}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center">
                              {renderFeatureValue(feature.dynamics)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitor Pros & Cons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TargetIcon className="h-5 w-5" />
            Competitor Analysis
          </CardTitle>
          <CardDescription>
            Detailed pros and cons of each competitor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {competitors.map((competitor) => (
              <div key={competitor.name} className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-4">{competitor.name}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-green-600 mb-2">Pros</h4>
                  <ul className="space-y-1 text-sm">
                    {competitor.pros.map((pro, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-red-600 mb-2">Cons</h4>
                  <ul className="space-y-1 text-sm">
                    {competitor.cons.map((con, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <X className="h-3 w-3 text-red-600" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Ready to Choose Core 2.0?
          </CardTitle>
          <CardDescription>
            Join thousands of businesses that have chosen Core 2.0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              See why Core 2.0 is the preferred choice for modern businesses
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/pricing">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Full support included
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 