'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  Globe, 
  FileText, 
  Users,
  Calendar,
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
  Shield,
  Settings,
  BarChart3,
  Folder,
  File,
  Home,
  Building2,
  Contact,
  DollarSign,
  Zap,
  BookOpen,
  Newspaper,
  Briefcase,
  LifeBuoy,
  Cookie
} from 'lucide-react';
import Link from 'next/link';

export default function SitemapPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Sitemap', href: '/sitemap' }
    ]);
    setCurrentPage('Sitemap');
  }, [setBreadcrumbs, setCurrentPage]);

  const siteSections = [
    {
      title: 'Main Pages',
      description: 'Core pages of our platform',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Landing page and main entry point' },
        { name: 'About', url: '/about', description: 'Company information and team' },
        { name: 'Contact', url: '/contact', description: 'Contact forms and information' },
        { name: 'Pricing', url: '/pricing', description: 'Pricing plans and comparison' }
      ]
    },
    {
      title: 'Product & Features',
      description: 'Learn about our platform capabilities',
      icon: Zap,
      pages: [
        { name: 'Features', url: '/features', description: 'Platform features and capabilities' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and guides' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
      ]
    },
    {
      title: 'Support & Resources',
      description: 'Help and support resources',
      icon: LifeBuoy,
      pages: [
        { name: 'Support', url: '/support', description: 'Customer support and help center' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities and company culture' },
        { name: 'Knowledge Base', url: '/knowledge-base', description: 'Comprehensive knowledge base' }
      ]
    },
    {
      title: 'Legal & Privacy',
      description: 'Legal documents and privacy information',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and management' }
      ]
    }
  ];

  const knowledgeBaseSections = [
    {
      title: 'Business Resources',
      url: '/knowledge-base/business',
      description: 'Business strategy and operations',
      icon: Briefcase
    },
    {
      title: 'Technical Documentation',
      url: '/knowledge-base/technical',
      description: 'Technical guides and API documentation',
      icon: FileText
    },
    {
      title: 'Marketing Resources',
      url: '/knowledge-base/marketing',
      description: 'Marketing strategies and tools',
      icon: BarChart3
    },
    {
      title: 'Investor Information',
      url: '/knowledge-base/investors',
      description: 'Financial and investor relations',
      icon: DollarSign
    }
  ];

  const adminSections = [
    {
      title: 'Admin Dashboard',
      url: '/admin',
      description: 'Main admin overview and statistics',
      icon: BarChart3
    },
    {
      title: 'User Management',
      url: '/admin/users',
      description: 'Manage users and permissions',
      icon: Users
    },
    {
      title: 'System Settings',
      url: '/admin/settings',
      description: 'Platform configuration and settings',
      icon: Settings
    },
    {
      title: 'Security Monitoring',
      url: '/admin/security',
      description: 'Security events and monitoring',
      icon: Shield
    },
    {
      title: 'Analytics & Reports',
      url: '/admin/analytics',
      description: 'Data analytics and reporting',
      icon: BarChart3
    },
    {
      title: 'Database Management',
      url: '/admin/database',
      description: 'Database operations and monitoring',
      icon: Database
    },
    {
      title: 'Content Management',
      url: '/admin/content',
      description: 'File and content management',
      icon: Folder
    },
    {
      title: 'System Health',
      url: '/admin/system',
      description: 'System performance and health',
      icon: Server
    }
  ];

  const quickActions = [
    {
      title: 'Download XML Sitemap',
      description: 'Get the XML sitemap for search engines',
      icon: Download,
      action: 'download',
      color: 'bg-blue-500'
    },
    {
      title: 'Search Site',
      description: 'Search across all pages and content',
      icon: Search,
      action: 'search',
      color: 'bg-green-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help with navigation or issues',
      icon: Mail,
      action: 'contact',
      color: 'bg-purple-500'
    },
    {
      title: 'Report Broken Link',
      description: 'Report any broken or incorrect links',
      icon: AlertTriangle,
      action: 'report',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sitemap</h1>
          <p className="text-muted-foreground">
            Complete overview of all pages and sections on our platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Last Updated: January 15, 2024
          </Badge>
          <Badge className="text-sm">
            {siteSections.reduce((total, section) => total + section.pages.length, 0) + knowledgeBaseSections.length + adminSections.length} Pages
          </Badge>
        </div>
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

      {/* Main Site Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {siteSections.map((section) => (
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
              <div className="space-y-3">
                {section.pages.map((page) => (
                  <div key={page.name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-1 rounded bg-blue-100">
                        <Globe className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <Link href={page.url} className="font-medium text-blue-600 hover:text-blue-800">
                          {page.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">{page.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Knowledge Base Sections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Knowledge Base
          </CardTitle>
          <CardDescription>
            Comprehensive documentation and resources organized by stakeholder
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {knowledgeBaseSections.map((section) => (
              <Link key={section.title} href={section.url}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="p-2 rounded-lg bg-purple-500">
                      <section.icon className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Admin Sections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Admin Panel
          </CardTitle>
          <CardDescription>
            Administrative tools and system management (Admin access required)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {adminSections.map((section) => (
              <Link key={section.title} href={section.url}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="p-2 rounded-lg bg-orange-500">
                      <section.icon className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Site Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Site Statistics
          </CardTitle>
          <CardDescription>
            Overview of our platform structure and content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {siteSections.reduce((total, section) => total + section.pages.length, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Public Pages</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {knowledgeBaseSections.length}
              </div>
              <p className="text-sm text-muted-foreground">Knowledge Base Sections</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {adminSections.length}
              </div>
              <p className="text-sm text-muted-foreground">Admin Tools</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {siteSections.reduce((total, section) => total + section.pages.length, 0) + knowledgeBaseSections.length + adminSections.length}
              </div>
              <p className="text-sm text-muted-foreground">Total Pages</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Search Engine Optimization</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• All pages are optimized for search engines</li>
                <li>• XML sitemap available for crawlers</li>
                <li>• Proper meta tags and structured data</li>
                <li>• Mobile-friendly responsive design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Navigation Tips</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Use the main navigation menu for quick access</li>
                <li>• Search functionality available on all pages</li>
                <li>• Breadcrumb navigation for easy orientation</li>
                <li>• Footer links for additional resources</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-900">Need Help?</p>
                <p className="text-sm text-blue-700">
                  If you can't find what you're looking for, try our search function or contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 