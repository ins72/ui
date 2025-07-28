'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MessageCircle,
  Heart,
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
  Zap,
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
  Globe,
  Mail,
  Phone,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Video,
  ThumbsUp,
  MessageSquare,
  UserPlus,
  Award as AwardIcon
} from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Community', href: '/community' }
    ]);
    setCurrentPage('Community');
  }, [setBreadcrumbs, setCurrentPage]);

  const communityStats = [
    {
      title: 'Active Members',
      value: '25,000+',
      description: 'Registered community members',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Discussions',
      value: '50,000+',
      description: 'Forum posts and discussions',
      icon: MessageCircle,
      color: 'text-green-600'
    },
    {
      title: 'Countries',
      value: '150+',
      description: 'Members from around the world',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      title: 'Expert Contributors',
      value: '500+',
      description: 'Certified experts and moderators',
      icon: AwardIcon,
      color: 'text-orange-600'
    }
  ];

  const communitySections = [
    {
      title: 'General Discussion',
      description: 'General topics about Core 2.0 and enterprise software',
      icon: MessageCircle,
      topics: 1250,
      posts: 8500,
      lastActivity: '2 hours ago',
      featured: true
    },
    {
      title: 'Technical Support',
      description: 'Get help with technical issues and implementation',
      icon: LifeBuoy,
      topics: 890,
      posts: 3200,
      lastActivity: '1 hour ago',
      featured: true
    },
    {
      title: 'Feature Requests',
      description: 'Suggest new features and vote on improvements',
      icon: Zap,
      topics: 450,
      posts: 1800,
      lastActivity: '3 hours ago',
      featured: false
    },
    {
      title: 'Best Practices',
      description: 'Share and learn best practices for Core 2.0',
      icon: BookOpen,
      topics: 320,
      posts: 1200,
      lastActivity: '5 hours ago',
      featured: false
    },
    {
      title: 'Integration Hub',
      description: 'Discuss integrations with other tools and platforms',
      icon: Unlink,
      topics: 280,
      posts: 950,
      lastActivity: '1 day ago',
      featured: false
    },
    {
      title: 'Success Stories',
      description: 'Share your success stories and case studies',
      icon: TrendingUp,
      topics: 180,
      posts: 650,
      lastActivity: '2 days ago',
      featured: false
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'How to optimize Core 2.0 for large datasets?',
      author: 'Sarah Johnson',
      replies: 15,
      views: 245,
      lastReply: '2 hours ago',
      category: 'Technical Support',
      featured: true
    },
    {
      id: 2,
      title: 'Best practices for user onboarding with Core 2.0',
      author: 'Mike Chen',
      replies: 8,
      views: 156,
      lastReply: '4 hours ago',
      category: 'Best Practices',
      featured: false
    },
    {
      id: 3,
      title: 'Feature request: Advanced reporting dashboard',
      author: 'Emily Rodriguez',
      replies: 23,
      views: 389,
      lastReply: '6 hours ago',
      category: 'Feature Requests',
      featured: false
    },
    {
      id: 4,
      title: 'Integration with Salesforce - Tips and tricks',
      author: 'David Thompson',
      replies: 12,
      views: 198,
      lastReply: '1 day ago',
      category: 'Integration Hub',
      featured: false
    },
    {
      id: 5,
      title: 'Our journey from Excel to Core 2.0',
      author: 'Lisa Wang',
      replies: 18,
      views: 312,
      lastReply: '1 day ago',
      category: 'Success Stories',
      featured: false
    }
  ];

  const communityEvents = [
    {
      title: 'Monthly Community Meetup',
      date: '2024-02-25',
      time: '02:00 PM EST',
      type: 'Virtual',
      attendees: 150,
      description: 'Monthly community meetup with Q&A session and networking'
    },
    {
      title: 'Core 2.0 User Conference',
      date: '2024-03-15',
      time: '09:00 AM EST',
      type: 'In-Person',
      attendees: 500,
      description: 'Annual user conference with workshops and networking'
    },
    {
      title: 'Expert Office Hours',
      date: '2024-02-20',
      time: '11:00 AM EST',
      type: 'Virtual',
      attendees: 75,
      description: 'One-on-one sessions with Core 2.0 experts'
    }
  ];

  const quickActions = [
    {
      title: 'Join Discussion',
      description: 'Start a new discussion or reply to existing ones',
      icon: MessageCircle,
      action: 'discuss',
      color: 'bg-blue-500'
    },
    {
      title: 'Find Experts',
      description: 'Connect with certified experts and moderators',
      icon: Users,
      action: 'experts',
      color: 'bg-green-500'
    },
    {
      title: 'Community Events',
      description: 'Join upcoming community events and meetups',
      icon: Calendar,
      action: 'events',
      color: 'bg-purple-500'
    },
    {
      title: 'Share Knowledge',
      description: 'Contribute articles and tutorials',
      icon: BookOpen,
      action: 'contribute',
      color: 'bg-orange-500'
    }
  ];

  const topContributors = [
    {
      name: 'Sarah Johnson',
      role: 'Community Moderator',
      contributions: 1250,
      reputation: 9850,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Mike Chen',
      role: 'Technical Expert',
      contributions: 890,
      reputation: 7650,
      avatar: '/avatars/mike.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Power User',
      contributions: 650,
      reputation: 5420,
      avatar: '/avatars/emily.jpg'
    },
    {
      name: 'David Thompson',
      role: 'Integration Specialist',
      contributions: 520,
      reputation: 4320,
      avatar: '/avatars/david.jpg'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">
            Connect, learn, and share with Core 2.0 users worldwide
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {communitySections.length} Forums
          </Badge>
          <Badge className="text-sm">
            {recentDiscussions.length} Recent Discussions
          </Badge>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {communityStats.map((stat) => (
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

      {/* Featured Discussions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            Featured Discussions
          </CardTitle>
          <CardDescription>
            Most popular and active discussions in the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDiscussions.filter(d => d.featured).map((discussion) => (
              <div key={discussion.id} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{discussion.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span>• {discussion.replies} replies</span>
                      <span>• {discussion.views} views</span>
                      <span>• {discussion.lastReply}</span>
                    </div>
                  </div>
                  <Badge className="text-xs bg-blue-100 text-blue-800">
                    {discussion.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button className="text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                    <Button className="text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      <Eye className="h-4 w-4 mr-1" />
                      View Discussion
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Community Forums */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Community Forums
          </CardTitle>
          <CardDescription>
            Join discussions in our various community sections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {communitySections.map((section) => (
              <div key={section.title} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <section.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{section.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{section.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{section.topics} topics</span>
                      <span>• {section.posts} posts</span>
                      <span>• {section.lastActivity}</span>
                    </div>
                  </div>
                  {section.featured && (
                    <Star className="h-4 w-4 text-yellow-400" />
                  )}
                </div>
                <Button className="w-full text-sm">
                  Join Discussion
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Discussions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Discussions
          </CardTitle>
          <CardDescription>
            Latest discussions from across the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDiscussions.filter(d => !d.featured).map((discussion) => (
              <div key={discussion.id} className="p-3 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{discussion.title}</h4>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span>• {discussion.replies} replies</span>
                      <span>• {discussion.views} views</span>
                      <span>• {discussion.lastReply}</span>
                    </div>
                  </div>
                  <Badge className="text-xs bg-gray-100 text-gray-800">
                    {discussion.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Community Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Community Events
          </CardTitle>
          <CardDescription>
            Join our community events and meetups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {communityEvents.map((event, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </span>
                    </div>
                  </div>
                  <Badge className={`text-xs ${
                    event.type === 'Virtual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {event.type}
                  </Badge>
                </div>
                <Button className="text-sm">
                  Register for Event
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AwardIcon className="h-5 w-5" />
            Top Contributors
          </CardTitle>
          <CardDescription>
            Recognize our most active and helpful community members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topContributors.map((contributor, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">{contributor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{contributor.role}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{contributor.contributions} contributions</p>
                  <p>{contributor.reputation} reputation</p>
                </div>
                <Button className="text-xs mt-2 w-full">
                  <UserPlus className="h-3 w-3 mr-1" />
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Join Our Community
          </CardTitle>
          <CardDescription>
            Become part of the Core 2.0 community and connect with users worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Share knowledge, get help, and stay updated with the latest Core 2.0 developments
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Join Community
              </Button>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Contact Community Team
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Free to join • 25,000+ members • Expert support • Regular events
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 