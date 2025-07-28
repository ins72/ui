'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Users,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
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
  FileText,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Cookie Policy', href: '/cookies' }
    ]);
    setCurrentPage('Cookie Policy');
  }, [setBreadcrumbs, setCurrentPage]);

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      icon: Shield,
      examples: [
        'Authentication and security cookies',
        'Session management cookies',
        'Load balancing cookies',
        'Language preference cookies'
      ],
      duration: 'Session to 1 year',
      necessary: true
    },
    {
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      icon: Search,
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      duration: '2 years',
      necessary: false
    },
    {
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      icon: Settings,
      examples: [
        'User preference cookies',
        'Social media integration',
        'Third-party service cookies',
        'Customization settings'
      ],
      duration: '1 year',
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      description: 'Used for advertising and marketing purposes',
      icon: Share,
      examples: [
        'Advertising network cookies',
        'Retargeting cookies',
        'Social media advertising',
        'Email marketing tracking'
      ],
      duration: '2 years',
      necessary: false
    }
  ];

  const cookieManagement = [
    {
      title: 'Browser Settings',
      description: 'Manage cookies through your browser preferences',
      icon: Settings,
      steps: [
        'Open your browser settings',
        'Navigate to privacy and security',
        'Manage cookie preferences',
        'Save your settings'
      ]
    },
    {
      title: 'Cookie Consent',
      description: 'Control cookies through our consent management',
      icon: CheckCircle,
      steps: [
        'Click the cookie settings button',
        'Review cookie categories',
        'Toggle preferences on/off',
        'Save your preferences'
      ]
    },
    {
      title: 'Third-Party Opt-Out',
      description: 'Opt out of third-party cookie tracking',
      icon: ExternalLink,
      steps: [
        'Visit third-party opt-out pages',
        'Follow their opt-out procedures',
        'Clear existing cookies',
        'Verify opt-out status'
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@core2enterprise.com',
    phone: '+1 (555) 123-4567',
    address: '123 Enterprise Street, Tech City, TC 12345',
    website: 'https://core2enterprise.com'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="text-muted-foreground">
            How we use cookies and similar technologies on our website
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Last Updated: January 15, 2024
          </Badge>
          <Badge className="text-sm">
            Version 1.2
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="#settings">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-blue-500">
                <Settings className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Cookie Settings</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Manage your cookie preferences
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="#download">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-green-500">
                <Download className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Download Policy</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Save a copy for your records
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="/contact">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-purple-500">
                <Mail className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Contact Us</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Questions about cookies?
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="/privacy">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-orange-500">
                <Shield className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Privacy Policy</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Learn about data protection
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            What Are Cookies?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
          </p>
          <p className="text-muted-foreground">
            We use cookies and similar technologies to enhance your browsing experience, provide personalized content, analyze website traffic, and improve our services.
          </p>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">
              You can control and manage cookies through your browser settings
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Cookie Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Types of Cookies We Use
          </CardTitle>
          <CardDescription>
            Different categories of cookies and their purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {cookieTypes.map((type) => (
              <Card key={type.title} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <type.icon className="h-5 w-5" />
                      {type.title}
                    </CardTitle>
                    {type.necessary && (
                      <Badge className="bg-green-100 text-green-800">
                        Necessary
                      </Badge>
                    )}
                  </div>
                  <CardDescription>
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      <strong>Duration:</strong> {type.duration}
                    </span>
                                         {!type.necessary && (
                       <Button className="text-xs">
                         Manage
                       </Button>
                     )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cookie Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Managing Your Cookies
          </CardTitle>
          <CardDescription>
            How to control and manage cookies on our website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {cookieManagement.map((method) => (
              <Card key={method.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <method.icon className="h-5 w-5" />
                    {method.title}
                  </CardTitle>
                  <CardDescription>
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {method.steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Third-Party Cookies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Third-Party Cookies
          </CardTitle>
          <CardDescription>
            Cookies set by third-party services we use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Our website may use third-party services that set their own cookies. These services help us provide better functionality and analyze website usage.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Google Analytics</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Used to analyze website traffic and user behavior
              </p>
              <div className="flex items-center space-x-2">
                <Badge className="text-xs">Analytics</Badge>
                <Badge className="text-xs">2 years</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Social Media</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Used for social media integration and sharing
              </p>
              <div className="flex items-center space-x-2">
                <Badge className="text-xs">Marketing</Badge>
                <Badge className="text-xs">2 years</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Information
          </CardTitle>
          <CardDescription>
            How to reach us regarding cookie-related questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-green-100">
                <Phone className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <MapPin className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-orange-100">
                <Globe className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Website</p>
                <p className="text-sm text-muted-foreground">{contactInfo.website}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Updates and Changes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Updates to This Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Important Notice</p>
                <p className="text-sm text-blue-700">
                  We encourage you to review this Cookie Policy periodically. Your continued use of our website after any changes indicates your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 