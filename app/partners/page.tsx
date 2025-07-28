'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  Users,
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
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
  Calendar,
  Shield,
  Settings,
  BarChart3,
  Folder,
  File,
  Home,
  Contact,
  DollarSign,
  Zap,
  BookOpen,
  Newspaper,
  Briefcase,
  LifeBuoy,
  Cookie,
  Activity,
  XCircle,
  Clock,
  Wrench,
  Star,
  Award,
  TrendingUp,
  Target,
  Users as UsersIcon
} from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Partners', href: '/partners' }
    ]);
    setCurrentPage('Partners');
  }, [setBreadcrumbs, setCurrentPage]);

  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that integrate with our platform',
      icon: Zap,
      partners: [
        {
          name: 'Microsoft',
          logo: '/logos/microsoft.png',
          description: 'Cloud infrastructure and enterprise solutions',
          tier: 'Platinum',
          category: 'Cloud Services',
          website: 'https://microsoft.com'
        },
        {
          name: 'Amazon Web Services',
          logo: '/logos/aws.png',
          description: 'Cloud computing and infrastructure services',
          tier: 'Platinum',
          category: 'Cloud Services',
          website: 'https://aws.amazon.com'
        },
        {
          name: 'Google Cloud',
          logo: '/logos/google-cloud.png',
          description: 'Cloud platform and AI services',
          tier: 'Gold',
          category: 'Cloud Services',
          website: 'https://cloud.google.com'
        }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Consulting and implementation partners',
      icon: Briefcase,
      partners: [
        {
          name: 'Deloitte',
          logo: '/logos/deloitte.png',
          description: 'Global consulting and implementation services',
          tier: 'Platinum',
          category: 'Consulting',
          website: 'https://deloitte.com'
        },
        {
          name: 'Accenture',
          logo: '/logos/accenture.png',
          description: 'Digital transformation and technology consulting',
          tier: 'Gold',
          category: 'Consulting',
          website: 'https://accenture.com'
        },
        {
          name: 'McKinsey & Company',
          logo: '/logos/mckinsey.png',
          description: 'Strategic consulting and business transformation',
          tier: 'Silver',
          category: 'Consulting',
          website: 'https://mckinsey.com'
        }
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and distribution partners',
      icon: Users,
      partners: [
        {
          name: 'CDW',
          logo: '/logos/cdw.png',
          description: 'Technology solutions and services',
          tier: 'Gold',
          category: 'Reseller',
          website: 'https://cdw.com'
        },
        {
          name: 'Insight',
          logo: '/logos/insight.png',
          description: 'IT solutions and services provider',
          tier: 'Silver',
          category: 'Reseller',
          website: 'https://insight.com'
        },
        {
          name: 'SHI International',
          logo: '/logos/shi.png',
          description: 'Technology solutions and services',
          tier: 'Silver',
          category: 'Reseller',
          website: 'https://shi.com'
        }
      ]
    }
  ];

  const partnerPrograms = [
    {
      title: 'Platinum Partners',
      description: 'Our highest tier partnership with exclusive benefits',
      icon: Star,
      benefits: [
        'Exclusive access to beta features',
        'Dedicated partner success manager',
        'Highest revenue sharing rates',
        'Priority support and training',
        'Co-marketing opportunities'
      ],
      requirements: [
        'Minimum $1M annual revenue',
        '50+ certified professionals',
        'Strategic alignment commitment'
      ]
    },
    {
      title: 'Gold Partners',
      description: 'Established partners with proven track record',
      icon: Award,
      benefits: [
        'Advanced training and certification',
        'Enhanced technical support',
        'Competitive revenue sharing',
        'Marketing development funds',
        'Joint go-to-market activities'
      ],
      requirements: [
        'Minimum $500K annual revenue',
        '25+ certified professionals',
        'Strong customer references'
      ]
    },
    {
      title: 'Silver Partners',
      description: 'Growing partners building their practice',
      icon: Target,
      benefits: [
        'Standard training and certification',
        'Technical support access',
        'Standard revenue sharing',
        'Marketing materials and tools',
        'Partner portal access'
      ],
      requirements: [
        'Minimum $100K annual revenue',
        '10+ certified professionals',
        'Commitment to growth'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Become a Partner',
      description: 'Join our partner ecosystem',
      icon: Handshake,
      action: 'join',
      color: 'bg-blue-500'
    },
    {
      title: 'Partner Portal',
      description: 'Access partner resources',
      icon: Users,
      action: 'portal',
      color: 'bg-green-500'
    },
    {
      title: 'Partner Training',
      description: 'Get certified and trained',
      icon: BookOpen,
      action: 'training',
      color: 'bg-purple-500'
    },
    {
      title: 'Contact Partnership Team',
      description: 'Speak with our team',
      icon: Phone,
      action: 'contact',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    {
      title: 'Global Partners',
      value: '500+',
      description: 'Partners worldwide',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      title: 'Countries',
      value: '50+',
      description: 'Countries with partners',
      icon: MapPin,
      color: 'text-green-600'
    },
    {
      title: 'Revenue Generated',
      value: '$100M+',
      description: 'Annual partner revenue',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Certified Professionals',
      value: '10,000+',
      description: 'Partner certified staff',
      icon: UsersIcon,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Partners</h1>
          <p className="text-muted-foreground">
            Join our global partner ecosystem and grow your business
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {partnerCategories.reduce((total, cat) => total + cat.partners.length, 0)} Partners
          </Badge>
          <Badge className="text-sm">
            {partnerCategories.length} Categories
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
            <Link href={action.action === 'contact' ? '/contact' : '#'}>
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

      {/* Partner Programs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Partner Programs
          </CardTitle>
          <CardDescription>
            Choose the partnership level that fits your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {partnerPrograms.map((program) => (
              <div key={program.title} className="p-6 border rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <program.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {program.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Target className="h-3 w-3 text-blue-600" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Categories */}
      {partnerCategories.map((category) => (
        <Card key={category.title}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <category.icon className="h-5 w-5" />
              {category.title}
            </CardTitle>
            <CardDescription>
              {category.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.partners.map((partner) => (
                <div key={partner.name} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs ${
                      partner.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                      partner.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {partner.tier}
                    </Badge>
                    <Badge className="text-xs bg-blue-100 text-blue-800">
                      {partner.category}
                    </Badge>
                  </div>
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full text-sm">
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Why Partner With Us */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Handshake className="h-5 w-5" />
            Why Partner With Core 2.0?
          </CardTitle>
          <CardDescription>
            Discover the benefits of joining our partner ecosystem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Revenue Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to a growing market with high demand for enterprise solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Dedicated Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Partner success managers and technical support teams
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-purple-100">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Training & Certification</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive training programs and certification paths
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-orange-100">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to customers worldwide through our global network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Handshake className="h-5 w-5" />
            Ready to Partner With Us?
          </CardTitle>
          <CardDescription>
            Join our partner ecosystem and grow your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Become part of our global partner network and unlock new opportunities
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Become a Partner
              </Button>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Contact Partnership Team
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              No upfront costs • Flexible partnership models • Comprehensive support
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 