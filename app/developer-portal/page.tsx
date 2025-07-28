'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
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

export default function DeveloperPortalPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Developer Portal', href: '/developer-portal' }
    ]);
    setCurrentPage('Developer Portal');
  }, [setBreadcrumbs, setCurrentPage]);

  const developerTools = [
    {
      title: 'API Explorer',
      description: 'Interactive API testing and documentation',
      icon: Terminal,
      color: 'bg-blue-500',
      href: '/api-docs'
    },
    {
      title: 'SDK Downloads',
      description: 'Official SDKs for popular languages',
      icon: Download,
      color: 'bg-green-500',
      href: '/sdk'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples',
      icon: Code,
      color: 'bg-purple-500',
      href: '/code-samples'
    },
    {
      title: 'Webhooks',
      description: 'Real-time event notifications',
      icon: Zap,
      color: 'bg-yellow-500',
      href: '/webhooks'
    },
    {
      title: 'Testing Tools',
      description: 'Sandbox and testing environment',
      icon: CheckCircle,
      color: 'bg-indigo-500',
      href: '/testing'
    },
    {
      title: 'Analytics',
      description: 'API usage and performance metrics',
      icon: BarChart3,
      color: 'bg-red-500',
      href: '/analytics'
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started',
      description: 'Set up your first integration in 5 minutes',
      icon: Play,
      time: '5 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Authentication',
      description: 'Learn about API keys and security',
      icon: Shield,
      time: '10 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Webhook Setup',
      description: 'Configure real-time notifications',
      icon: Zap,
      time: '15 min read',
      difficulty: 'Intermediate'
    },
    {
      title: 'Error Handling',
      description: 'Best practices for robust integrations',
      icon: AlertCircle,
      time: '12 min read',
      difficulty: 'Intermediate'
    }
  ];

  const communityResources = [
    {
      title: 'Developer Forum',
      description: 'Connect with other developers',
      icon: Users,
      members: '5,000+',
      color: 'bg-blue-500'
    },
    {
      title: 'GitHub Repository',
      description: 'Open source examples and tools',
      icon: FileGithub,
      stars: '2,500+',
      color: 'bg-green-500'
    },
    {
      title: 'Stack Overflow',
      description: 'Q&A community support',
      icon: HelpCircle,
      questions: '1,200+',
      color: 'bg-orange-500'
    },
    {
      title: 'Discord Channel',
      description: 'Real-time developer chat',
      icon: MessageSquare,
      members: '3,000+',
      color: 'bg-purple-500'
    }
  ];

  const apiStats = [
    {
      title: 'API Calls Today',
      value: '2.5M+',
      change: '+15%',
      changeType: 'positive',
      icon: Activity
    },
    {
      title: 'Active Developers',
      value: '1,200+',
      change: '+8%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Average Response Time',
      value: '45ms',
      change: '-12%',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'Uptime',
      value: '99.99%',
      change: '+0.01%',
      changeType: 'positive',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, test, and deploy applications with our platform. Tools, documentation, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Get Started
              </Button>
                <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiStats.map((stat, index) => (
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
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Developer Tools
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to build amazing applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {tool.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Quick Start Guides
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Get up and running quickly with our step-by-step guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickStartGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        <guide.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={`${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {guide.time}
                    </span>
                    <Button variant="ghost" className="p-0 h-auto">
                      Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Community & Resources
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Connect with other developers and access helpful resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      {Object.values(resource)[3]}
                    </span>
                    <Button variant="ghost" className="p-0 h-auto">
                      Join <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers creating amazing applications with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Play className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
              <HelpCircle className="mr-2 h-5 w-5" />
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 