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
  EyeOff,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  Database,
  Server,
  Key,
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
  Cookie
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Privacy Policy', href: '/privacy' }
    ]);
    setCurrentPage('Privacy Policy');
  }, [setBreadcrumbs, setCurrentPage]);

  const privacySections = [
    {
      title: 'Information We Collect',
      description: 'Types of personal information we collect and how we use it',
      icon: Database,
      content: [
        'Personal identification information (name, email address, phone number)',
        'Usage data and analytics information',
        'Device and browser information',
        'Cookies and tracking technologies',
        'Payment and billing information'
      ]
    },
    {
      title: 'How We Use Your Information',
      description: 'Purposes for which we process your personal data',
      icon: Users,
      content: [
        'Provide and maintain our services',
        'Process transactions and payments',
        'Send notifications and updates',
        'Improve our services and user experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      description: 'When and how we share your information with third parties',
      icon: Share,
      content: [
        'Service providers and business partners',
        'Legal requirements and law enforcement',
        'Business transfers and acquisitions',
        'With your explicit consent',
        'Aggregated and anonymized data'
      ]
    },
    {
      title: 'Data Security',
      description: 'Measures we take to protect your personal information',
      icon: Shield,
      content: [
        'Encryption of data in transit and at rest',
        'Regular security audits and assessments',
        'Access controls and authentication',
        'Employee training and awareness',
        'Incident response procedures'
      ]
    }
  ];

  const yourRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of your personal information',
      icon: Eye
    },
    {
      title: 'Correct Your Data',
      description: 'Update or correct inaccurate information',
      icon: Edit
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal information',
      icon: Trash2
    },
    {
      title: 'Data Portability',
      description: 'Export your data in a machine-readable format',
      icon: Download
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
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">
            How we collect, use, and protect your personal information
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Last Updated: January 15, 2024
          </Badge>
          <Badge className="text-sm">
            Version 2.1
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
              <CardTitle className="text-lg font-semibold">Print Policy</CardTitle>
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
                Questions about privacy?
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <Link href="/cookies">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="p-2 rounded-lg bg-orange-500">
                <Cookie className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Cookie Policy</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Learn about our cookies
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
            At Core 2.0 Enterprise Platform, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
          <p className="text-muted-foreground">
            By using our platform, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">
              This policy complies with GDPR, CCPA, and other applicable privacy regulations
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {privacySections.map((section) => (
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

      {/* Your Rights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Your Privacy Rights
          </CardTitle>
          <CardDescription>
            You have certain rights regarding your personal information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {yourRights.map((right) => (
              <div key={right.title} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-blue-100">
                  <right.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{right.title}</p>
                  <p className="text-xs text-muted-foreground">{right.description}</p>
                </div>
              </div>
            ))}
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
            How to reach us regarding privacy matters
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
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Important Notice</p>
                <p className="text-sm text-blue-700">
                  We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any modifications indicates your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 