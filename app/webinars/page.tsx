'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Terminal,
  Cpu,
  Server,
  Lock,
  Key,
  FileText,
  Copy,
  ExternalLink,
  Download,
  Search,
  Filter,
  Settings,
  Eye,
  EyeOff,
  RefreshCw,
  Clock,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Hash,
  Tag,
  Link as LinkIcon,
  Users,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Database as DatabaseIcon,
  Cloud,
  Wifi,
  WifiOff,
  Check,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  RotateCcw,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Printer,
  Camera,
  Video as VideoIcon,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FilePlus,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePresentation,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileX,
  FileCheck,
  FileSearch,
  FileEdit,
  FileMinus,
  FileUp,
  FileDown,
  FileLeft,
  FileRight,
  FileUpRight,
  FileDownLeft,
  FileDownRight,
  FileUpLeft,
  FileHeart,
  FileWarning,
  FileQuestion,
  FileInfo,
  FileAlert,
  FileX2,
  FileCheck2,
  FileClock,
  FileLock,
  FileUnlock,
  FileKey,
  FileShield,
  FileShield2,
  FileType,
  FileType2,
  FileJson,
  FileJs,
  FileTs,
  FileJsx,
  FileTsx,
  FileVue,
  FileSvelte,
  FileReact,
  FileAngular,
  FileVue2,
  FileSvelte2,
  FileReact2,
  FileAngular2,
  FileHtml,
  FileCss,
  FileScss,
  FileLess,
  FileSass,
  FileStylus,
  FilePostcss,
  FileTailwind,
  FileBootstrap,
  FileMaterial,
  FileAntd,
  FileMui,
  FileChakra,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileRemix,
  FileSveltekit,
  FileAstro,
  FileVite,
  FileWebpack,
  FileRollup,
  FileParcel,
  FileEsbuild,
  FileSwc,
  FileBabel,
  FileTypeScript,
  FileJavaScript,
  FilePython,
  FileJava,
  FileCpp,
  FileC,
  FileCsharp,
  FilePhp,
  FileRuby,
  FileGo,
  FileRust,
  FileSwift,
  FileKotlin,
  FileScala,
  FileClojure,
  FileHaskell,
  FileElixir,
  FileErlang,
  FileR,
  FileMatlab,
  FileJulia,
  FileDart,
  FileLua,
  FilePerl,
  FileBash,
  FilePowershell,
  FileBatch,
  FileDocker,
  FileKubernetes,
  FileTerraform,
  FileAnsible,
  FileChef,
  FilePuppet,
  FileJenkins,
  FileGitlab,
  FileGithub,
  FileBitbucket,
  FileGit,
  FileGitBranch,
  FileGitCommit,
  FileGitMerge,
  FileGitPullRequest,
  FileGitCompare,
  FileGitFork,
  FileGitBranch2,
  FileGitCommit2,
  FileGitMerge2,
  FileGitPullRequest2,
  FileGitCompare2,
  FileGitFork2,
  FileGitBranch3,
  FileGitCommit3,
  FileGitMerge3,
  FileGitPullRequest3,
  FileGitCompare3,
  FileGitFork3,
  FileGitBranch4,
  FileGitCommit4,
  FileGitMerge4,
  FileGitPullRequest4,
  FileGitCompare4,
  FileGitFork4,
  FileGitBranch5,
  FileGitCommit5,
  FileGitMerge5,
  FileGitPullRequest5,
  FileGitCompare5,
  FileGitFork5,
  FileGitBranch6,
  FileGitCommit6,
  FileGitMerge6,
  FileGitPullRequest6,
  FileGitCompare6,
  FileGitFork6,
  FileGitBranch7,
  FileGitCommit7,
  FileGitMerge7,
  FileGitPullRequest7,
  FileGitCompare7,
  FileGitFork7,
  FileGitBranch8,
  FileGitCommit8,
  FileGitMerge8,
  FileGitPullRequest8,
  FileGitCompare8,
  FileGitFork8,
  FileGitBranch9,
  FileGitCommit9,
  FileGitMerge9,
  FileGitPullRequest9,
  FileGitCompare9,
  FileGitFork9,
  FileGitBranch10,
  FileGitCommit10,
  FileGitMerge10,
  FileGitPullRequest10,
  FileGitCompare10,
  FileGitFork10
} from 'lucide-react';
import Link from 'next/link';

export default function WebinarsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Webinars', href: '/webinars' }
    ]);
    setCurrentPage('Webinars');
  }, [setBreadcrumbs, setCurrentPage]);

  const upcomingWebinars = [
    {
      title: 'Advanced API Development Best Practices',
      description: 'Learn advanced techniques for building robust and scalable APIs with our platform.',
      speaker: 'Sarah Johnson',
      speakerTitle: 'Senior API Architect',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'Development',
      attendees: '150 registered',
      status: 'upcoming',
      featured: true
    },
    {
      title: 'Security in the Cloud: Best Practices',
      description: 'Comprehensive guide to implementing security best practices in cloud environments.',
      speaker: 'Michael Chen',
      speakerTitle: 'Security Expert',
      date: 'March 20, 2024',
      time: '1:00 PM EST',
      duration: '45 minutes',
      category: 'Security',
      attendees: '200 registered',
      status: 'upcoming',
      featured: true
    },
    {
      title: 'Digital Transformation Success Stories',
      description: 'Real-world examples of successful digital transformation initiatives.',
      speaker: 'Lisa Rodriguez',
      speakerTitle: 'Digital Strategy Consultant',
      date: 'March 25, 2024',
      time: '3:00 PM EST',
      duration: '75 minutes',
      category: 'Strategy',
      attendees: '120 registered',
      status: 'upcoming',
      featured: false
    },
    {
      title: 'Data Analytics and Business Intelligence',
      description: 'How to leverage data analytics for better business decision-making.',
      speaker: 'David Kim',
      speakerTitle: 'Data Scientist',
      date: 'March 28, 2024',
      time: '2:30 PM EST',
      duration: '60 minutes',
      category: 'Analytics',
      attendees: '180 registered',
      status: 'upcoming',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      title: 'Getting Started with Our Platform',
      description: 'Complete beginner guide to getting started with our enterprise platform.',
      speaker: 'Jennifer Smith',
      speakerTitle: 'Product Manager',
      date: 'February 28, 2024',
      duration: '45 minutes',
      category: 'Getting Started',
      attendees: '300 attended',
      views: '1,200+',
      recording: true
    },
    {
      title: 'API Integration Masterclass',
      description: 'Advanced techniques for integrating third-party APIs with our platform.',
      speaker: 'Robert Wilson',
      speakerTitle: 'Senior Developer',
      date: 'February 15, 2024',
      duration: '90 minutes',
      category: 'Development',
      attendees: '250 attended',
      views: '800+',
      recording: true
    },
    {
      title: 'Performance Optimization Strategies',
      description: 'Learn how to optimize your applications for maximum performance.',
      speaker: 'Maria Garcia',
      speakerTitle: 'Performance Engineer',
      date: 'February 8, 2024',
      duration: '60 minutes',
      category: 'Performance',
      attendees: '180 attended',
      views: '600+',
      recording: true
    }
  ];

  const categories = [
    {
      name: 'Getting Started',
      icon: Play,
      color: 'bg-green-500',
      count: 8
    },
    {
      name: 'Development',
      icon: Code,
      color: 'bg-blue-500',
      count: 15
    },
    {
      name: 'Security',
      icon: Shield,
      color: 'bg-red-500',
      count: 6
    },
    {
      name: 'Strategy',
      icon: TrendingUp,
      color: 'bg-purple-500',
      count: 4
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      color: 'bg-orange-500',
      count: 7
    },
    {
      name: 'Performance',
      icon: Zap,
      color: 'bg-indigo-500',
      count: 5
    }
  ];

  const stats = [
    {
      title: 'Total Webinars',
      value: '50+',
      change: '+5',
      changeType: 'positive',
      icon: Video
    },
    {
      title: 'Total Attendees',
      value: '10,000+',
      change: '+25%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Average Rating',
      value: '4.8/5',
      change: '+0.2',
      changeType: 'positive',
      icon: Star
    },
    {
      title: 'Expert Speakers',
      value: '25+',
      change: '+3',
      changeType: 'positive',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-rose-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                <Video className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Webinars
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Join live webinars with industry experts and learn from real-world experiences and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${
                        stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Register for upcoming live sessions with industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${
                      webinar.status === 'upcoming' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Live'}
                    </Badge>
                    {webinar.featured && (
                      <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                  <CardDescription className="text-base">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Speaker</span>
                      <span className="font-medium">{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Date & Time</span>
                      <span className="font-medium">{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Duration</span>
                      <span className="font-medium">{webinar.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Category</span>
                      <Badge variant="outline">{webinar.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Attendees</span>
                      <span className="font-medium">{webinar.attendees}</span>
                    </div>
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find webinars relevant to your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {category.count} webinars
                    </span>
                    <Button variant="ghost" className="p-0 h-auto">
                      Browse <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Watch recordings of previous webinars
            </p>
          </div>

          <div className="space-y-6">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{webinar.category}</Badge>
                        <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                          <Clock className="h-4 w-4" />
                          <span>{webinar.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {webinar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {webinar.description}
                      </p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <span>By {webinar.speaker} • {webinar.speakerTitle} • {webinar.date}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Attendees</span>
                          <span className="font-medium">{webinar.attendees}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Views</span>
                          <span className="font-medium">{webinar.views}</span>
                        </div>
                        <Button className="w-full">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our webinar notifications and stay updated with the latest insights and best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-pink-700">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 