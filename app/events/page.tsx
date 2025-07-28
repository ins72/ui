'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock,
  MapPin,
  Users,
  Video,
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
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Events', href: '/events' }
    ]);
    setCurrentPage('Events');
  }, [setBreadcrumbs, setCurrentPage]);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Core 2.0 Enterprise Summit 2024',
      date: '2024-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'San Francisco Convention Center',
      type: 'Conference',
      attendees: 500,
      capacity: 600,
      description: 'Join us for the biggest Core 2.0 event of the year. Learn about the latest features, network with industry leaders, and discover how to maximize your enterprise potential.',
      featured: true,
      registration: 'Open',
      price: '$299'
    },
    {
      id: 2,
      title: 'Webinar: Advanced Analytics with Core 2.0',
      date: '2024-02-28',
      time: '02:00 PM - 03:30 PM',
      location: 'Virtual Event',
      type: 'Webinar',
      attendees: 150,
      capacity: 200,
      description: 'Deep dive into Core 2.0\'s advanced analytics capabilities. Learn how to leverage data insights for better decision-making.',
      featured: true,
      registration: 'Open',
      price: 'Free'
    },
    {
      id: 3,
      title: 'Core 2.0 User Group Meetup',
      date: '2024-02-20',
      time: '06:00 PM - 08:00 PM',
      location: 'Tech Hub Downtown',
      type: 'Meetup',
      attendees: 45,
      capacity: 50,
      description: 'Connect with other Core 2.0 users, share best practices, and learn from real-world implementations.',
      featured: false,
      registration: 'Open',
      price: 'Free'
    },
    {
      id: 4,
      title: 'Core 2.0 Training Workshop',
      date: '2024-02-10',
      time: '10:00 AM - 04:00 PM',
      location: 'Core 2.0 Training Center',
      type: 'Workshop',
      attendees: 25,
      capacity: 30,
      description: 'Hands-on training session covering Core 2.0 fundamentals and advanced features.',
      featured: false,
      registration: 'Open',
      price: '$199'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Core 2.0 Launch Event',
      date: '2024-01-15',
      time: '07:00 PM - 10:00 PM',
      location: 'Grand Hotel Ballroom',
      type: 'Launch',
      attendees: 300,
      description: 'Celebrated the official launch of Core 2.0 with keynotes, demos, and networking.',
      recordings: true,
      materials: true
    },
    {
      id: 6,
      title: 'Q4 2023 User Conference',
      date: '2023-12-05',
      time: '09:00 AM - 06:00 PM',
      location: 'Convention Center',
      type: 'Conference',
      attendees: 400,
      description: 'Annual user conference featuring product updates, customer success stories, and roadmap preview.',
      recordings: true,
      materials: true
    }
  ];

  const eventCategories = [
    {
      title: 'Conferences',
      description: 'Large-scale events with multiple sessions and networking opportunities',
      icon: Users,
      count: 2
    },
    {
      title: 'Webinars',
      description: 'Online educational sessions and product demonstrations',
      icon: Video,
      count: 1
    },
    {
      title: 'Workshops',
      description: 'Hands-on training sessions with practical exercises',
      icon: BookOpen,
      count: 1
    },
    {
      title: 'Meetups',
      description: 'Local community gatherings and networking events',
      icon: MapPin,
      count: 1
    }
  ];

  const quickActions = [
    {
      title: 'Register for Events',
      description: 'Sign up for upcoming events and webinars',
      icon: Calendar,
      action: 'register',
      color: 'bg-blue-500'
    },
    {
      title: 'View Past Events',
      description: 'Access recordings and materials from past events',
      icon: Video,
      action: 'past-events',
      color: 'bg-green-500'
    },
    {
      title: 'Host Your Event',
      description: 'Request to host a Core 2.0 event in your area',
      icon: Users,
      action: 'host',
      color: 'bg-purple-500'
    },
    {
      title: 'Event Calendar',
      description: 'Download our event calendar',
      icon: Download,
      action: 'calendar',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    {
      title: 'Upcoming Events',
      value: upcomingEvents.length.toString(),
      description: 'Events in the next 30 days',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Total Attendees',
      value: '1,200+',
      description: 'Across all events this year',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Event Types',
      value: eventCategories.length.toString(),
      description: 'Different types of events',
      icon: Target,
      color: 'text-purple-600'
    },
    {
      title: 'Free Events',
      value: '60%',
      description: 'Percentage of free events',
      icon: DollarSign,
      color: 'text-orange-600'
    }
  ];

  const getEventStatus = (event: any) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    
    if (eventDate < today) return 'Past';
    if (event.attendees >= event.capacity) return 'Full';
    return 'Open';
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'bg-blue-100 text-blue-800';
      case 'Webinar': return 'bg-green-100 text-green-800';
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Meetup': return 'bg-orange-100 text-orange-800';
      case 'Launch': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events & Webinars</h1>
          <p className="text-muted-foreground">
            Join our events to learn, network, and stay updated with Core 2.0
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            {upcomingEvents.length} Upcoming
          </Badge>
          <Badge className="text-sm">
            {pastEvents.length} Past Events
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

      {/* Featured Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            Featured Upcoming Events
          </CardTitle>
          <CardDescription>
            Don't miss these important events and webinars
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
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
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                    <Badge className={`text-xs ${
                      getEventStatus(event) === 'Full' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {getEventStatus(event)}
                    </Badge>
                    <p className="text-sm font-semibold">{event.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}/{event.capacity} registered</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Register Now
                    </Button>
                    <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            All Upcoming Events
          </CardTitle>
          <CardDescription>
            Complete list of upcoming events and webinars
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                    <p className="text-sm font-semibold">{event.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees}/{event.capacity} registered</span>
                  </div>
                  <Button className="text-xs">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Event Categories
          </CardTitle>
          <CardDescription>
            Different types of events we host throughout the year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {eventCategories.map((category) => (
              <div key={category.title} className="p-4 border rounded-lg text-center">
                <div className="p-3 rounded-lg bg-blue-100 w-fit mx-auto mb-3">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                <Badge className="text-xs bg-blue-100 text-blue-800">
                  {category.count} events
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Archive className="h-5 w-5" />
            Past Events
          </CardTitle>
          <CardDescription>
            Access recordings and materials from previous events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees} attendees</span>
                      </span>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {event.recordings && (
                    <Button className="text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      Watch Recording
                    </Button>
                  )}
                  {event.materials && (
                    <Button className="text-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      <Download className="h-3 w-3 mr-1" />
                      Download Materials
                    </Button>
                  )}
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
            <Calendar className="h-5 w-5" />
            Stay Updated
          </CardTitle>
          <CardDescription>
            Never miss an important event or webinar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Subscribe to our events newsletter and get notified about upcoming events
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe to Events
              </Button>
              <Link href="/contact">
                <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Contact Events Team
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Get early access to registrations • Priority notifications • Exclusive content
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 