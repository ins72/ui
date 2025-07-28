'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock,
  Eye,
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
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
  EyeOff,
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
  Zap,
  Clock,
  Calendar,
  Star as StarIcon,
  Target as TargetIcon,
  Rocket,
  Lightbulb,
  Scale,
  Fingerprint,
  Server as ServerIcon,
  Network,
  Bug,
  Virus,
  Wifi,
  WifiOff
} from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Security', href: '/security' }
    ]);
    setCurrentPage('Security');
  }, [setBreadcrumbs, setCurrentPage]);

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption',
      icon: Lock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Multi-factor authentication for enhanced account security',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Certified compliance with SOC 2 Type II security standards',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with EU General Data Protection Regulation',
      icon: Eye,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2 Type II compliance',
      icon: CheckCircle,
      color: 'text-green-600',
      date: '2024'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance',
      icon: CheckCircle,
      color: 'text-green-600',
      date: '2024'
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance',
      icon: CheckCircle,
      color: 'text-green-600',
      date: '2024'
    },
    {
      name: 'ISO 27001',
      status: 'In Progress',
      description: 'Information Security Management System certification',
      icon: Clock,
      color: 'text-yellow-600',
      date: '2024'
    },
    {
      name: 'HIPAA',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      icon: CheckCircle,
      color: 'text-green-600',
      date: '2024'
    },
    {
      name: 'PCI DSS',
      status: 'Compliant',
      description: 'Payment Card Industry Data Security Standard',
      icon: CheckCircle,
      color: 'text-green-600',
      date: '2024'
    }
  ];

  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        {
          title: 'AES-256 Encryption',
          description: 'Military-grade encryption for all data',
          status: 'Active'
        },
        {
          title: 'Data Backup',
          description: 'Automated daily backups with 99.9% uptime',
          status: 'Active'
        },
        {
          title: 'Data Retention',
          description: 'Configurable data retention policies',
          status: 'Active'
        }
      ]
    },
    {
      category: 'Access Control',
      measures: [
        {
          title: 'Role-Based Access',
          description: 'Granular permissions based on user roles',
          status: 'Active'
        },
        {
          title: 'Single Sign-On',
          description: 'SSO integration with major providers',
          status: 'Active'
        },
        {
          title: 'Session Management',
          description: 'Automatic session timeout and management',
          status: 'Active'
        }
      ]
    },
    {
      category: 'Network Security',
      measures: [
        {
          title: 'DDoS Protection',
          description: 'Advanced DDoS mitigation and protection',
          status: 'Active'
        },
        {
          title: 'Firewall Protection',
          description: 'Multi-layer firewall security',
          status: 'Active'
        },
        {
          title: 'SSL/TLS Encryption',
          description: 'Secure communication protocols',
          status: 'Active'
        }
      ]
    },
    {
      category: 'Monitoring & Detection',
      measures: [
        {
          title: 'Real-time Monitoring',
          description: '24/7 security monitoring and alerting',
          status: 'Active'
        },
        {
          title: 'Intrusion Detection',
          description: 'Advanced threat detection systems',
          status: 'Active'
        },
        {
          title: 'Audit Logging',
          description: 'Comprehensive audit trail for all activities',
          status: 'Active'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Security Whitepaper',
      description: 'Download our security whitepaper',
      icon: FileText,
      action: 'whitepaper',
      color: 'bg-blue-500'
    },
    {
      title: 'Compliance Report',
      description: 'View compliance certifications',
      icon: CheckCircle,
      action: 'compliance',
      color: 'bg-green-500'
    },
    {
      title: 'Security Assessment',
      description: 'Request security assessment',
      icon: Shield,
      action: 'assessment',
      color: 'bg-purple-500'
    },
    {
      title: 'Report Vulnerability',
      description: 'Report security vulnerabilities',
      icon: Bug,
      action: 'vulnerability',
      color: 'bg-orange-500'
    }
  ];

  const securityStats = [
    {
      title: 'Uptime',
      value: '99.99%',
      description: 'Platform availability',
      icon: Server,
      color: 'text-green-600'
    },
    {
      title: 'Data Centers',
      value: '5',
      description: 'Geographically distributed',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      title: 'Security Incidents',
      value: '0',
      description: 'In the last 12 months',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      title: 'Compliance Standards',
      value: '6',
      description: 'Certified standards',
      icon: CheckCircle,
      color: 'text-purple-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Certified':
      case 'Compliant':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Security & Compliance</h1>
          <p className="text-muted-foreground">
            Enterprise-grade security and compliance standards
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {complianceStandards.length} Standards
          </Badge>
          <Badge className="text-sm">
            {securityMeasures.reduce((total, cat) => total + cat.measures.length, 0)} Security Measures
          </Badge>
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {securityStats.map((stat) => (
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

      {/* Security Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Features
          </CardTitle>
          <CardDescription>
            Advanced security measures protecting your data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-4 border rounded-lg">
                <div className={`p-3 rounded-lg ${feature.bgColor} w-fit mx-auto mb-3`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Standards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Compliance Standards
          </CardTitle>
          <CardDescription>
            Industry-leading compliance certifications and standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {complianceStandards.map((standard) => (
              <div key={standard.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${standard.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <standard.icon className={`h-4 w-4 ${standard.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{standard.name}</h3>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(standard.status)}`}>
                    {standard.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Certified: {standard.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Measures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Measures
          </CardTitle>
          <CardDescription>
            Comprehensive security measures across all aspects of our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {securityMeasures.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {category.measures.map((measure, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{measure.title}</h4>
                        <Badge className={`text-xs ${getStatusColor(measure.status)}`}>
                          {measure.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{measure.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Protection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Data Protection
          </CardTitle>
          <CardDescription>
            How we protect your data and ensure privacy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold">Data Encryption</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>TLS 1.3 encryption for data in transit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>End-to-end encryption for sensitive data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Key management with hardware security modules</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Privacy Controls</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Granular data access controls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Data anonymization and pseudonymization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Right to be forgotten implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Data portability and export capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Incident Response */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Incident Response
          </CardTitle>
          <CardDescription>
            Our comprehensive incident response and recovery procedures
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <div className="p-3 rounded-lg bg-red-100 w-fit mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Detection</h3>
              <p className="text-sm text-muted-foreground">
                24/7 monitoring with automated threat detection
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="p-3 rounded-lg bg-yellow-100 w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Response</h3>
              <p className="text-sm text-muted-foreground">
                Immediate response within 15 minutes of detection
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="p-3 rounded-lg bg-green-100 w-fit mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Recovery</h3>
              <p className="text-sm text-muted-foreground">
                Rapid recovery with minimal service disruption
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Questions?
          </CardTitle>
          <CardDescription>
            Our security team is here to help with any questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Contact our security team for detailed information about our security practices
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Security Team
                </Button>
              </Link>
              <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                Download Security Whitepaper
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Security team available 24/7 • Response time: < 4 hours
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 