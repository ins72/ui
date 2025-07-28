'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper, 
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
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
  Users,
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
  Users as UsersIcon,
  Image,
  Video,
  FileText,
  Camera
} from 'lucide-react';
import Link from 'next/link';

export default function PressPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Press & Media', href: '/press' }
    ]);
    setCurrentPage('Press & Media');
  }, [setBreadcrumbs, setCurrentPage]);

  const pressReleases = [
    {
      id: 1,
      title: 'Core 2.0 Enterprise Platform Launches with Advanced AI Capabilities',
      date: '2024-01-15',
      summary: 'Core 2.0 introduces revolutionary AI-powered features for enterprise management, setting new industry standards for automation and intelligence.',
      category: 'Product Launch',
      featured: true
    },
    {
      id: 2,
      title: 'Core 2.0 Secures $50M Series B Funding Round',
      date: '2023-12-10',
      summary: 'Leading enterprise platform raises significant funding to accelerate global expansion and product development.',
      category: 'Funding',
      featured: true
    },
    {
      id: 3,
      title: 'Core 2.0 Partners with Microsoft for Cloud Integration',
      date: '2023-11-28',
      summary: 'Strategic partnership announced to enhance cloud capabilities and provide seamless integration with Microsoft Azure.',
      category: 'Partnership',
      featured: false
    },
    {
      id: 4,
      title: 'Core 2.0 Named Leader in Enterprise Management Software',
      date: '2023-11-15',
      summary: 'Industry recognition for innovation and customer satisfaction in the enterprise software market.',
      category: 'Awards',
      featured: false
    },
    {
      id: 5,
      title: 'Core 2.0 Expands to European Market',
      date: '2023-10-20',
      summary: 'European expansion brings advanced enterprise solutions to new markets with localized support.',
      category: 'Expansion',
      featured: false
    },
    {
      id: 6,
      title: 'Core 2.0 Achieves SOC 2 Type II Compliance',
      date: '2023-09-15',
      summary: 'Security milestone demonstrates commitment to enterprise-grade security and compliance standards.',
      category: 'Security',
      featured: false
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Core 2.0 logos in various formats',
      icon: Image,
      files: ['Logo - Primary (PNG)', 'Logo - Primary (SVG)', 'Logo - White (PNG)', 'Logo - Black (PNG)'],
      category: 'Brand Assets'
    },
    {
      title: 'Product Screenshots',
      description: 'Latest screenshots of Core 2.0 platform features',
      icon: Camera,
      files: ['Dashboard Overview', 'Analytics Interface', 'User Management', 'Mobile App'],
      category: 'Product Images'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of Core 2.0 leadership team',
      icon: Users,
      files: ['CEO - John Smith', 'CTO - Sarah Johnson', 'CFO - Michael Chen', 'VP Marketing - Lisa Wang'],
      category: 'Team Photos'
    },
    {
      title: 'Fact Sheet',
      description: 'Key facts and statistics about Core 2.0',
      icon: FileText,
      files: ['Company Fact Sheet (PDF)', 'Product Overview (PDF)', 'Financial Highlights (PDF)'],
      category: 'Documents'
    }
  ];

  const quickActions = [
    {
      title: 'Press Kit',
      description: 'Download complete press materials',
      icon: Download,
      action: 'press-kit',
      color: 'bg-blue-500'
    },
    {
      title: 'Media Contact',
      description: 'Get in touch with our PR team',
      icon: Mail,
      action: 'contact',
      color: 'bg-green-500'
    },
    {
      title: 'Brand Guidelines',
      description: 'Access brand and logo guidelines',
      icon: Image,
      action: 'brand-guidelines',
      color: 'bg-purple-500'
    },
    {
      title: 'Subscribe to Updates',
      description: 'Get press releases via email',
      icon: Newspaper,
      action: 'subscribe',
      color: 'bg-orange-500'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@core2enterprise.com',
    mediaPhone: '+1 (555) 123-4567',
    address: '123 Enterprise Way, San Francisco, CA 94105',
    website: 'https://core2enterprise.com',
    socialMedia: {
      twitter: '@core2enterprise',
      linkedin: 'linkedin.com/company/core2enterprise',
      facebook: 'facebook.com/core2enterprise'
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Press & Media</h1>
          <p className="text-muted-foreground">
            Latest news, press releases, and media resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {pressReleases.length} Press Releases
          </Badge>
          <Badge className="text-sm">
            {mediaResources.length} Resource Categories
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

      {/* Featured Press Releases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            Featured Press Releases
          </CardTitle>
          <CardDescription>
            Latest and most important company announcements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pressReleases.filter(pr => pr.featured).map((release) => (
              <div key={release.id} className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                    <p className="text-muted-foreground mb-3">{release.summary}</p>
                  </div>
                  <Badge className="text-xs bg-blue-100 text-blue-800">
                    {release.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(release.date).toLocaleDateString()}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="text-sm">
                      Read Full Release
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                    <Button className="text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Press Releases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            All Press Releases
          </CardTitle>
          <CardDescription>
            Complete archive of company announcements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pressReleases.filter(pr => !pr.featured).map((release) => (
              <div key={release.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{release.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{release.summary}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(release.date).toLocaleDateString()}</span>
                      </span>
                      <Badge className="text-xs bg-gray-100 text-gray-800">
                        {release.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="text-xs">
                      Read More
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Media Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Media Resources
          </CardTitle>
          <CardDescription>
            Download logos, images, and other media assets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mediaResources.map((resource) => (
              <div key={resource.title} className="p-4 border rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <resource.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{resource.title}</h3>
                    <p className="text-xs text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {resource.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{file}</span>
                      <Button className="text-xs h-6 px-2">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Badge className="text-xs bg-blue-100 text-blue-800">
                  {resource.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Media Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Media Contact Information
          </CardTitle>
          <CardDescription>
            Get in touch with our press and media relations team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Press Email</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.pressEmail}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Media Phone</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.mediaPhone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.website}</p>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Social Media</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Twitter: {contactInfo.socialMedia.twitter}</p>
                  <p>LinkedIn: {contactInfo.socialMedia.linkedin}</p>
                  <p>Facebook: {contactInfo.socialMedia.facebook}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Press Kit Download */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Complete Press Kit
          </CardTitle>
          <CardDescription>
            Download our comprehensive press kit with all media resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Get everything you need for media coverage in one convenient download
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download Press Kit (ZIP)
              </Button>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Request Custom Materials
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Includes logos, images, fact sheets, and press releases • 45MB
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 