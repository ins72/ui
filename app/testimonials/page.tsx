'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Quote,
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
  Heart,
  ThumbsUp,
  Award,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Testimonials', href: '/testimonials' }
    ]);
    setCurrentPage('Testimonials');
  }, [setBreadcrumbs, setCurrentPage]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Solutions',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
      content: 'Core 2.0 has transformed how we manage our enterprise operations. The platform is intuitive, powerful, and has significantly improved our team\'s productivity. The customer support is exceptional.',
      industry: 'Technology',
      companySize: '500-1000 employees',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Operations Director',
      company: 'Global Manufacturing Inc.',
      avatar: '/avatars/michael.jpg',
      rating: 5,
      content: 'We\'ve been using Core 2.0 for over a year now and the results have been outstanding. The analytics capabilities have given us insights we never had before, leading to better decision-making.',
      industry: 'Manufacturing',
      companySize: '1000+ employees',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'Healthcare Plus',
      avatar: '/avatars/emily.jpg',
      rating: 5,
      content: 'The security features and compliance capabilities of Core 2.0 are exactly what we needed in the healthcare industry. It\'s reliable, secure, and user-friendly.',
      industry: 'Healthcare',
      companySize: '500-1000 employees',
      featured: false
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CEO',
      company: 'Startup Innovations',
      avatar: '/avatars/david.jpg',
      rating: 5,
      content: 'As a growing startup, we needed a platform that could scale with us. Core 2.0 has been perfect - it grows with our business and provides all the tools we need.',
      industry: 'Startup',
      companySize: '50-200 employees',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'IT Manager',
      company: 'Financial Services Group',
      avatar: '/avatars/lisa.jpg',
      rating: 5,
      content: 'The integration capabilities and API flexibility make Core 2.0 stand out from other platforms. We\'ve been able to customize it perfectly for our needs.',
      industry: 'Financial Services',
      companySize: '1000+ employees',
      featured: false
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Project Manager',
      company: 'Construction Dynamics',
      avatar: '/avatars/robert.jpg',
      rating: 5,
      content: 'Managing complex projects has never been easier. The project management features are comprehensive and the reporting tools are excellent.',
      industry: 'Construction',
      companySize: '200-500 employees',
      featured: false
    }
  ];

  const stats = [
    {
      title: 'Customer Satisfaction',
      value: '98%',
      description: 'Average customer satisfaction score',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      title: 'Success Rate',
      value: '99.9%',
      description: 'Platform uptime and reliability',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Growth',
      value: '150%',
      description: 'Average productivity improvement',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Awards',
      value: '25+',
      description: 'Industry awards and recognition',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'Read Case Studies',
      description: 'Detailed success stories and results',
      icon: BookOpen,
      action: 'case-studies',
      color: 'bg-blue-500'
    },
    {
      title: 'Schedule Demo',
      description: 'See the platform in action',
      icon: Users,
      action: 'demo',
      color: 'bg-green-500'
    },
    {
      title: 'Contact Sales',
      description: 'Get personalized consultation',
      icon: Phone,
      action: 'sales',
      color: 'bg-purple-500'
    },
    {
      title: 'Start Free Trial',
      description: 'Try Core 2.0 for free',
      icon: Zap,
      action: 'trial',
      color: 'bg-orange-500'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Testimonials</h1>
          <p className="text-muted-foreground">
            See what our customers say about Core 2.0 Enterprise Platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {testimonials.length} Testimonials
          </Badge>
          <Badge className="text-sm">
            {testimonials.filter(t => t.featured).length} Featured
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-gray-100`}>
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

      {/* Featured Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            Featured Testimonials
          </CardTitle>
          <CardDescription>
            Highlighted customer success stories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                  <p className="text-muted-foreground pl-6">{testimonial.content}</p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Badge className="text-xs">{testimonial.industry}</Badge>
                  <Badge className="text-xs">{testimonial.companySize}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            All Testimonials
          </CardTitle>
          <CardDescription>
            Complete collection of customer feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{testimonial.content}</p>
                <div className="flex items-center space-x-2">
                  <Badge className="text-xs">{testimonial.industry}</Badge>
                  <Badge className="text-xs">{testimonial.companySize}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industry Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Customer Industries
          </CardTitle>
          <CardDescription>
            Our platform serves diverse industries across the globe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Technology</h3>
              <p className="text-sm text-muted-foreground">40% of customers</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Healthcare</h3>
              <p className="text-sm text-muted-foreground">25% of customers</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Financial Services</h3>
              <p className="text-sm text-muted-foreground">20% of customers</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">15% of customers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5" />
            Join Our Success Stories
          </CardTitle>
          <CardDescription>
            Ready to transform your business with Core 2.0?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              See why thousands of companies trust Core 2.0 for their enterprise needs
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