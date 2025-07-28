'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
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
  Video,
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

export default function NewsletterPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Newsletter', href: '/newsletter' }
    ]);
    setCurrentPage('Newsletter');
  }, [setBreadcrumbs, setCurrentPage]);

  const newsletterIssues = [
    {
      title: 'March 2024: The Future of Enterprise Software',
      description: 'Exploring emerging trends in enterprise software development and digital transformation.',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Industry Trends',
      subscribers: '15,000+',
      featured: true,
      topics: ['Digital Transformation', 'AI/ML', 'Cloud Computing', 'Security']
    },
    {
      title: 'February 2024: API Development Best Practices',
      description: 'Comprehensive guide to building robust and scalable APIs for enterprise applications.',
      date: 'February 1, 2024',
      readTime: '12 min read',
      category: 'Development',
      subscribers: '14,500+',
      featured: true,
      topics: ['API Development', 'Microservices', 'Performance', 'Documentation']
    },
    {
      title: 'January 2024: Security in the Digital Age',
      description: 'Essential security practices and strategies for modern enterprise applications.',
      date: 'January 1, 2024',
      readTime: '10 min read',
      category: 'Security',
      subscribers: '14,000+',
      featured: false,
      topics: ['Cybersecurity', 'Compliance', 'Data Protection', 'Threat Detection']
    },
    {
      title: 'December 2023: Year in Review',
      description: 'A comprehensive look at the major developments and trends in enterprise software.',
      date: 'December 1, 2023',
      readTime: '15 min read',
      category: 'Year in Review',
      subscribers: '13,500+',
      featured: false,
      topics: ['Industry Trends', 'Technology', 'Innovation', 'Predictions']
    },
    {
      title: 'November 2023: Cloud Migration Strategies',
      description: 'Best practices and strategies for successful cloud migration initiatives.',
      date: 'November 1, 2023',
      readTime: '11 min read',
      category: 'Cloud Computing',
      subscribers: '13,000+',
      featured: false,
      topics: ['Cloud Migration', 'AWS', 'Azure', 'GCP']
    },
    {
      title: 'October 2023: Data Analytics and BI',
      description: 'How to leverage data analytics for better business decision-making.',
      date: 'October 1, 2023',
      readTime: '9 min read',
      category: 'Analytics',
      subscribers: '12,500+',
      featured: false,
      topics: ['Data Analytics', 'Business Intelligence', 'Machine Learning', 'Visualization']
    }
  ];

  const newsletterCategories = [
    {
      name: 'Industry Trends',
      icon: TrendingUp,
      color: 'bg-blue-500',
      count: 12,
      description: 'Latest trends and insights'
    },
    {
      name: 'Development',
      icon: Code,
      color: 'bg-green-500',
      count: 18,
      description: 'Technical articles and guides'
    },
    {
      name: 'Security',
      icon: Shield,
      color: 'bg-red-500',
      count: 8,
      description: 'Security best practices'
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      color: 'bg-purple-500',
      count: 10,
      description: 'Cloud strategies and tips'
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      color: 'bg-orange-500',
      count: 6,
      description: 'Data and analytics insights'
    },
    {
      name: 'Product Updates',
      icon: Zap,
      color: 'bg-indigo-500',
      count: 15,
      description: 'Platform updates and features'
    }
  ];

  const stats = [
    {
      title: 'Total Subscribers',
      value: '25,000+',
      change: '+15%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Monthly Issues',
      value: '12',
      change: '+1',
      changeType: 'positive',
      icon: Mail
    },
    {
      title: 'Average Open Rate',
      value: '68%',
      change: '+5%',
      changeType: 'positive',
      icon: Eye
    },
    {
      title: 'Click-through Rate',
      value: '12%',
      change: '+2%',
      changeType: 'positive',
      icon: MousePointer
    }
  ];

  const benefits = [
    {
      title: 'Exclusive Content',
      description: 'Get access to premium articles and insights not available elsewhere',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Early Access',
      description: 'Be the first to know about new features, updates, and announcements',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: 'Expert Insights',
      description: 'Learn from industry experts and thought leaders',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Curated Resources',
      description: 'Hand-picked resources and tools to help you succeed',
      icon: BookOpen,
      color: 'bg-orange-500'
    },
    {
      title: 'Community Access',
      description: 'Connect with other professionals and share experiences',
      icon: Globe,
      color: 'bg-indigo-500'
    },
    {
      title: 'No Spam',
      description: 'We respect your inbox and only send valuable content',
      icon: Shield,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <Mail className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Newsletter
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in enterprise software development and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Mail className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <FileText className="mr-2 h-5 w-5" />
                Read Archives
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
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Get the latest insights delivered to your inbox every month
          </p>
          
          <Card className="p-8">
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Interests (Optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['Development', 'Security', 'Cloud', 'Analytics', 'AI/ML', 'DevOps'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe to Newsletter
                </Button>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  By subscribing, you agree to receive our newsletter and marketing communications. You can unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Subscribe?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Get exclusive benefits and stay ahead of the curve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Recent Issues
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Catch up on our latest newsletters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsletterIssues.filter(issue => issue.featured).map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      <span>{issue.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
                  <CardDescription className="text-base">{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Published</span>
                      <span className="font-medium">{issue.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Category</span>
                      <Badge variant="outline">{issue.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Subscribers</span>
                      <span className="font-medium">{issue.subscribers}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {issue.topics.map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Issue
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
              Newsletter Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find content that matches your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletterCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {category.count} articles
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

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join 25,000+ Professionals
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
              <FileText className="mr-2 h-5 w-5" />
              Read Archives
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 