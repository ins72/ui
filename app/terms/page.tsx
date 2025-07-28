'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Shield, 
  Lock, 
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
  Cookie,
  Database,
  Server,
  Key,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Terms of Service', href: '/terms' }
    ]);
    setCurrentPage('Terms of Service');
  }, [setBreadcrumbs, setCurrentPage]);

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to these terms',
      icon: CheckCircle,
      content: [
        'You must be at least 18 years old to use our services',
        'You agree to comply with all applicable laws and regulations',
        'You are responsible for maintaining the security of your account',
        'You agree not to use our services for any illegal or unauthorized purpose',
        'We reserve the right to modify these terms at any time'
      ]
    },
    {
      title: 'Service Description',
      description: 'What we provide and how our services work',
      icon: Server,
      content: [
        'Core 2.0 Enterprise Platform provides business management tools',
        'Services include user management, analytics, and reporting',
        'We provide technical support and maintenance services',
        'Services are provided "as is" without warranties',
        'We may update or discontinue services with notice'
      ]
    },
    {
      title: 'User Responsibilities',
      description: 'Your obligations when using our platform',
      icon: Users,
      content: [
        'Provide accurate and complete registration information',
        'Maintain the confidentiality of your account credentials',
        'Notify us immediately of any security breaches',
        'Comply with our acceptable use policy',
        'Pay all fees associated with your subscription'
      ]
    },
    {
      title: 'Intellectual Property',
      description: 'Ownership and usage rights of content and software',
      icon: Shield,
      content: [
        'We retain ownership of our platform and software',
        'You retain ownership of your content and data',
        'You grant us license to use your content for service provision',
        'You may not reverse engineer or copy our software',
        'Trademarks and logos are our property'
      ]
    }
  ];

  const prohibitedActivities = [
    {
      title: 'Illegal Activities',
      description: 'Using the service for unlawful purposes',
      icon: AlertTriangle
    },
    {
      title: 'Spam and Abuse',
      description: 'Sending unsolicited messages or content',
      icon: Mail
    },
    {
      title: 'Security Violations',
      description: 'Attempting to breach system security',
      icon: Lock
    },
    {
      title: 'Copyright Infringement',
      description: 'Using copyrighted material without permission',
      icon: FileText
    }
  ];

  const contactInfo = {
    email: 'legal@core2enterprise.com',
    phone: '+1 (555) 123-4567',
    address: '123 Enterprise Street, Tech City, TC 12345',
    website: 'https://core2enterprise.com'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground">
            Rules and conditions for using our platform and services
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Last Updated: January 15, 2024
          </Badge>
          <Badge className="text-sm">
            Version 3.0
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="#download">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-blue-500">
                <Download className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Download PDF</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Save a copy for your records
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="#print">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-green-500">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Print Terms</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Print a physical copy
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
                Questions about terms?
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
                How we protect your data
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
            Introduction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            These Terms of Service ("Terms") govern your use of the Core 2.0 Enterprise Platform and all related services provided by Core 2.0 Enterprise ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
          </p>
          <p className="text-muted-foreground">
            If you do not agree to these Terms, you must not use our services. These Terms apply to all users of our platform, including customers, employees, and third-party users.
          </p>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">
              These terms are legally binding and enforceable
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Terms Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {termsSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5" />
                {section.title}
              </CardTitle>
              <CardDescription>
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.content.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Prohibited Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Prohibited Activities
          </CardTitle>
          <CardDescription>
            Activities that are not allowed on our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prohibitedActivities.map((activity) => (
              <div key={activity.title} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-red-100">
                  <activity.icon className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Terms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Payment and Billing
          </CardTitle>
          <CardDescription>
            Terms related to payment, billing, and subscription
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Subscription Fees</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Fees are billed in advance on a monthly or annual basis</li>
                <li>• All fees are non-refundable except as required by law</li>
                <li>• We may change our pricing with 30 days notice</li>
                <li>• Late payments may result in service suspension</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cancellation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• You may cancel your subscription at any time</li>
                <li>• Cancellation takes effect at the end of the billing period</li>
                <li>• No refunds for partial months or unused time</li>
                <li>• Data may be deleted 30 days after cancellation</li>
              </ul>
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
            How to reach us regarding legal matters
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
            Changes to Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-900">Important Notice</p>
                <p className="text-sm text-yellow-700">
                  Your continued use of our services after any changes to these Terms constitutes acceptance of the new Terms. If you do not agree to the new Terms, you must stop using our services.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 