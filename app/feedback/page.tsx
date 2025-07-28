'use client';

import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  ThumbsUp,
  ThumbsDown,
  Star,
  Send,
  Users,
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
  Award,
  TrendingUp,
  Target,
  Users as UsersIcon,
  Image,
  FileText,
  Camera,
  Video,
  MessageSquare as MessageSquareIcon,
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
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Cloud,
  HardDrive as HardDriveIcon,
  Package,
  Archive as ArchiveIcon,
  FileArchive,
  Code,
  Terminal,
  GitBranch,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Network,
  Wifi,
  WifiOff,
  Bluetooth,
  Usb,
  Cpu,
  Memory,
  HardDrive as StorageIcon,
  Heart,
  Smile,
  Frown,
  Meh,
  Bug,
  Lightbulb as LightbulbIcon,
  Award as AwardIcon2
} from 'lucide-react';
import Link from 'next/link';

export default function FeedbackPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Feedback', href: '/feedback' }
    ]);
    setCurrentPage('Feedback');
  }, [setBreadcrumbs, setCurrentPage]);

  const feedbackTypes = [
    {
      id: 'general',
      title: 'General Feedback',
      description: 'Share your overall experience and suggestions',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'feature',
      title: 'Feature Request',
      description: 'Suggest new features or improvements',
      icon: LightbulbIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 'bug',
      title: 'Bug Report',
      description: 'Report issues or problems you encountered',
      icon: Bug,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      id: 'praise',
      title: 'Praise',
      description: 'Share what you love about our platform',
      icon: Heart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const recentFeedback = [
    {
      title: 'Improved mobile app performance',
      type: 'Feature Request',
      status: 'In Progress',
      votes: 45,
      description: 'Request for better performance on mobile devices',
      submittedBy: 'John D.',
      date: '2 days ago'
    },
    {
      title: 'Dark mode for dashboard',
      type: 'Feature Request',
      status: 'Planned',
      votes: 128,
      description: 'Add dark mode option to the admin dashboard',
      submittedBy: 'Sarah M.',
      date: '1 week ago'
    },
    {
      title: 'Export functionality enhancement',
      type: 'General Feedback',
      status: 'Completed',
      votes: 67,
      description: 'Improved export options for data analysis',
      submittedBy: 'Mike R.',
      date: '2 weeks ago'
    },
    {
      title: 'API documentation update',
      type: 'Feature Request',
      status: 'In Progress',
      votes: 89,
      description: 'Request for more comprehensive API documentation',
      submittedBy: 'Lisa K.',
      date: '3 weeks ago'
    }
  ];

  const feedbackStats = [
    {
      title: 'Feedback Submitted',
      value: '2,500+',
      description: 'Total feedback items',
      icon: MessageSquare,
      color: 'text-blue-600'
    },
    {
      title: 'Features Implemented',
      value: '150+',
      description: 'Based on user feedback',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Response Rate',
      value: '98%',
      description: 'We respond to all feedback',
      icon: Send,
      color: 'text-purple-600'
    },
    {
      title: 'Average Response',
      value: '< 24h',
      description: 'Response time',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'View Roadmap',
      description: 'See what we\'re working on',
      icon: Rocket,
      action: 'roadmap',
      color: 'bg-blue-500'
    },
    {
      title: 'Community Forum',
      description: 'Discuss with other users',
      icon: Users,
      action: 'community',
      color: 'bg-green-500'
    },
    {
      title: 'Status Page',
      description: 'Check system status',
      icon: Activity,
      action: 'status',
      color: 'bg-purple-500'
    },
    {
      title: 'Support',
      description: 'Get immediate help',
      icon: LifeBuoy,
      action: 'support',
      color: 'bg-orange-500'
    }
  ];

  const feedbackCategories = [
    {
      title: 'User Experience',
      description: 'Interface, navigation, and usability',
      icon: Monitor,
      submissions: 450
    },
    {
      title: 'Performance',
      description: 'Speed, reliability, and optimization',
      icon: Zap,
      submissions: 320
    },
    {
      title: 'Features',
      description: 'New features and functionality',
      icon: LightbulbIcon,
      submissions: 680
    },
    {
      title: 'Documentation',
      description: 'Help articles and guides',
      icon: BookOpen,
      submissions: 240
    },
    {
      title: 'API & Integrations',
      description: 'Developer tools and integrations',
      icon: Code,
      submissions: 380
    },
    {
      title: 'Mobile Experience',
      description: 'Mobile apps and responsive design',
      icon: Smartphone,
      submissions: 290
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Feature Request':
        return 'bg-blue-100 text-blue-800';
      case 'Bug Report':
        return 'bg-red-100 text-red-800';
      case 'General Feedback':
        return 'bg-gray-100 text-gray-800';
      case 'Praise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the feedback to your backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
          <p className="text-muted-foreground">
            Share your thoughts and help us improve Core 2.0
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {feedbackStats[0].value} Submissions
          </Badge>
          <Badge className="text-sm">
            {feedbackStats[1].value} Implemented
          </Badge>
        </div>
      </div>

      {/* Feedback Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {feedbackStats.map((stat) => (
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
            <Link href={action.action === 'roadmap' ? '/roadmap' : action.action === 'community' ? '/community' : action.action === 'status' ? '/status' : '/support'}>
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

      {/* Submit Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Submit Feedback
          </CardTitle>
          <CardDescription>
            Share your thoughts, suggestions, or report issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Feedback Type Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Feedback Type</label>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {feedbackTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        feedbackType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFeedbackType(type.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${type.bgColor}`}>
                          <type.icon className={`h-4 w-4 ${type.color}`} />
                        </div>
                        <div>
                          <h3 className="font-medium">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium mb-3">Overall Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {rating > 0 ? `${rating}/5 stars` : 'Click to rate'}
                  </span>
                </div>
              </div>

              {/* Feedback Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Brief description of your feedback"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    placeholder="Please provide detailed information about your feedback..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                Your feedback has been submitted successfully. We'll review it and get back to you soon.
              </p>
              <Button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                Submit Another Feedback
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Feedback
          </CardTitle>
          <CardDescription>
            Latest feedback from our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFeedback.map((feedback, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold">{feedback.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feedback.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge className={`text-xs ${getTypeColor(feedback.type)}`}>
                        {feedback.type}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(feedback.status)}`}>
                        {feedback.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {feedback.submittedBy} • {feedback.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{feedback.votes}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button className="text-sm">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Vote
                  </Button>
                  <Button className="text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Comment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feedback Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TargetIcon className="h-5 w-5" />
            Feedback Categories
          </CardTitle>
          <CardDescription>
            Areas where we receive the most feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {feedbackCategories.map((category) => (
              <div key={category.title} className="p-4 border rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <category.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.submissions} submissions
                  </span>
                  <Button className="text-sm">
                    Submit Feedback
                  </Button>
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
            <Heart className="h-5 w-5" />
            Help Us Improve
          </CardTitle>
          <CardDescription>
            Your feedback helps us build a better platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              We value your input and use it to prioritize our development roadmap
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/roadmap">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Roadmap
                </Button>
              </Link>
              <Link href="/community">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Join Community
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              All feedback is reviewed by our product team • We respond to every submission
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 