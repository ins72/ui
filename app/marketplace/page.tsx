'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
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

export default function MarketplacePage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Marketplace', href: '/marketplace' }
    ]);
    setCurrentPage('Marketplace');
  }, [setBreadcrumbs, setCurrentPage]);

  const marketplaceCategories = [
    {
      title: 'Apps & Extensions',
      description: 'Enhance your platform with powerful apps',
      icon: FileCode,
      color: 'bg-blue-500',
      count: '150+'
    },
    {
      title: 'Templates',
      description: 'Ready-to-use templates and themes',
      icon: FileText,
      color: 'bg-green-500',
      count: '80+'
    },
    {
      title: 'Integrations',
      description: 'Connect with third-party services',
      icon: Link,
      color: 'bg-purple-500',
      count: '200+'
    },
    {
      title: 'Plugins',
      description: 'Extend functionality with plugins',
      icon: Puzzle,
      color: 'bg-yellow-500',
      count: '120+'
    },
    {
      title: 'Widgets',
      description: 'Custom widgets and components',
      icon: Monitor,
      color: 'bg-indigo-500',
      count: '90+'
    },
    {
      title: 'Tools',
      description: 'Development and productivity tools',
      icon: Settings,
      color: 'bg-red-500',
      count: '60+'
    }
  ];

  const featuredApps = [
    {
      name: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics and reporting solution',
      icon: BarChart3,
      category: 'Apps & Extensions',
      price: '$29/month',
      rating: 4.8,
      downloads: '2,500+',
      status: 'featured'
    },
    {
      name: 'Email Marketing Suite',
      description: 'Complete email marketing automation platform',
      icon: Mail,
      category: 'Integrations',
      price: '$19/month',
      rating: 4.7,
      downloads: '1,800+',
      status: 'popular'
    },
    {
      name: 'Customer Support Portal',
      description: 'Advanced customer support and ticketing system',
      icon: HelpCircle,
      category: 'Apps & Extensions',
      price: '$39/month',
      rating: 4.9,
      downloads: '3,200+',
      status: 'featured'
    },
    {
      name: 'E-commerce Integration',
      description: 'Seamless e-commerce platform integration',
      icon: ShoppingCart,
      category: 'Integrations',
      price: '$25/month',
      rating: 4.6,
      downloads: '1,500+',
      status: 'new'
    }
  ];

  const marketplaceStats = [
    {
      title: 'Total Apps',
      value: '500+',
      change: '+15%',
      changeType: 'positive',
      icon: FileCode
    },
    {
      title: 'Active Users',
      value: '50,000+',
      change: '+25%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Downloads',
      value: '1M+',
      change: '+40%',
      changeType: 'positive',
      icon: Download
    },
    {
      title: 'Developer Partners',
      value: '200+',
      change: '+10%',
      changeType: 'positive',
      icon: Users
    }
  ];

  const developerBenefits = [
    {
      title: 'Revenue Sharing',
      description: 'Earn up to 80% revenue share on your apps',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Developer Tools',
      description: 'Access to powerful development and testing tools',
      icon: Code,
      color: 'bg-blue-500'
    },
    {
      title: 'Analytics & Insights',
      description: 'Detailed analytics and user insights for your apps',
      icon: BarChart3,
      color: 'bg-purple-500'
    },
    {
      title: 'Support & Documentation',
      description: 'Comprehensive documentation and developer support',
      icon: BookOpen,
      color: 'bg-yellow-500'
    },
    {
      title: 'Marketing Support',
      description: 'Promote your apps with our marketing resources',
      icon: Zap,
      color: 'bg-indigo-500'
    },
    {
      title: 'Community',
      description: 'Join our developer community and network',
      icon: Users,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                <Store className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Marketplace
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover and install powerful apps, integrations, and tools to extend your platform's capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Browse Apps
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Plus className="mr-2 h-5 w-5" />
                Submit App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceStats.map((stat, index) => (
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
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Apps
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Hand-picked apps that our users love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <app.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge className={`${
                      app.status === 'featured' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      app.status === 'popular' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {app.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{app.name}</CardTitle>
                  <CardDescription>{app.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {app.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Rating</span>
                      <span className="font-medium">{app.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Downloads</span>
                      <span className="font-medium">{app.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Price</span>
                      <span className="font-medium text-green-600 dark:text-green-400">{app.price}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Install <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              Find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {category.count} items
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

      {/* Developer Benefits */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Developer Benefits
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to succeed as a marketplace developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerBenefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Browse our marketplace or start building your own apps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              <Search className="mr-2 h-5 w-5" />
              Browse Apps
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
              <Plus className="mr-2 h-5 w-5" />
              Submit App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 