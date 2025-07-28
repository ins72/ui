'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
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
  FileText as FileTextIcon,
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

export default function WhitePapersPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'White Papers', href: '/white-papers' }
    ]);
    setCurrentPage('White Papers');
  }, [setBreadcrumbs, setCurrentPage]);

  const whitePapers = [
    {
      title: 'The Future of Enterprise Data Management',
      description: 'Comprehensive analysis of emerging trends in enterprise data management and their impact on business operations.',
      author: 'Dr. Sarah Johnson',
      authorTitle: 'Chief Data Scientist',
      publishDate: 'March 2024',
      readTime: '15 min read',
      pages: '25 pages',
      category: 'Data Management',
      downloads: '2,500+',
      rating: 4.8,
      tags: ['Data Management', 'Enterprise', 'Analytics'],
      featured: true
    },
    {
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      description: 'In-depth guide to implementing robust cybersecurity measures in today\'s digital landscape.',
      author: 'Michael Chen',
      authorTitle: 'Security Expert',
      publishDate: 'February 2024',
      readTime: '20 min read',
      pages: '32 pages',
      category: 'Security',
      downloads: '1,800+',
      rating: 4.9,
      tags: ['Security', 'Cybersecurity', 'Compliance'],
      featured: true
    },
    {
      title: 'Digital Transformation: A Strategic Framework',
      description: 'Strategic framework for successful digital transformation initiatives in enterprise organizations.',
      author: 'Lisa Rodriguez',
      authorTitle: 'Digital Strategy Consultant',
      publishDate: 'January 2024',
      readTime: '18 min read',
      pages: '28 pages',
      category: 'Digital Transformation',
      downloads: '1,200+',
      rating: 4.7,
      tags: ['Digital Transformation', 'Strategy', 'Innovation'],
      featured: false
    },
    {
      title: 'API-First Architecture: Building Scalable Systems',
      description: 'Comprehensive guide to designing and implementing API-first architectures for scalable enterprise systems.',
      author: 'David Kim',
      authorTitle: 'Senior Architect',
      publishDate: 'December 2023',
      readTime: '22 min read',
      pages: '35 pages',
      category: 'Architecture',
      downloads: '950+',
      rating: 4.6,
      tags: ['API', 'Architecture', 'Scalability'],
      featured: false
    },
    {
      title: 'Cloud Migration Strategies: A Practical Guide',
      description: 'Practical strategies and best practices for successful cloud migration in enterprise environments.',
      author: 'Jennifer Smith',
      authorTitle: 'Cloud Solutions Architect',
      publishDate: 'November 2023',
      readTime: '16 min read',
      pages: '30 pages',
      category: 'Cloud Computing',
      downloads: '1,100+',
      rating: 4.5,
      tags: ['Cloud', 'Migration', 'Strategy'],
      featured: false
    },
    {
      title: 'AI and Machine Learning in Enterprise Applications',
      description: 'Exploring the integration of AI and ML technologies in enterprise applications and their business impact.',
      author: 'Dr. Robert Wilson',
      authorTitle: 'AI Research Director',
      publishDate: 'October 2023',
      readTime: '25 min read',
      pages: '40 pages',
      category: 'Artificial Intelligence',
      downloads: '800+',
      rating: 4.8,
      tags: ['AI', 'Machine Learning', 'Enterprise'],
      featured: false
    }
  ];

  const categories = [
    {
      name: 'Data Management',
      icon: Database,
      color: 'bg-blue-500',
      count: 8
    },
    {
      name: 'Security',
      icon: Shield,
      color: 'bg-red-500',
      count: 6
    },
    {
      name: 'Digital Transformation',
      icon: Globe,
      color: 'bg-green-500',
      count: 5
    },
    {
      name: 'Architecture',
      icon: Server,
      color: 'bg-purple-500',
      count: 4
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      color: 'bg-orange-500',
      count: 7
    },
    {
      name: 'Artificial Intelligence',
      icon: Cpu,
      color: 'bg-indigo-500',
      count: 3
    }
  ];

  const stats = [
    {
      title: 'Total White Papers',
      value: '30+',
      change: '+5',
      changeType: 'positive',
      icon: FileText
    },
    {
      title: 'Total Downloads',
      value: '50,000+',
      change: '+25%',
      changeType: 'positive',
      icon: Download
    },
    {
      title: 'Average Rating',
      value: '4.7/5',
      change: '+0.2',
      changeType: 'positive',
      icon: Star
    },
    {
      title: 'Expert Authors',
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
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                <FileText className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              White Papers
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              In-depth research and analysis on the latest trends, technologies, and best practices in enterprise software and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Browse Papers
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Download className="mr-2 h-5 w-5" />
                Download All
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
                    <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured White Papers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Most downloaded and highly rated research papers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitePapers.filter(paper => paper.featured).map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      <span>{paper.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{paper.title}</CardTitle>
                  <CardDescription className="text-base">{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Author</span>
                      <span className="font-medium">{paper.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Published</span>
                      <span className="font-medium">{paper.publishDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Pages</span>
                      <span className="font-medium">{paper.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Downloads</span>
                      <span className="font-medium">{paper.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Rating</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">{paper.rating}/5</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(paper.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {paper.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download White Paper
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
              Find white papers relevant to your interests
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
                      {category.count} white papers
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

      {/* All White Papers */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              All White Papers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Complete collection of our research and analysis
            </p>
          </div>

          <div className="space-y-6">
            {whitePapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                          {paper.category}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                          <Clock className="h-4 w-4" />
                          <span>{paper.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {paper.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <span>By {paper.author} • {paper.authorTitle} • {paper.publishDate}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Pages</span>
                          <span className="font-medium">{paper.pages}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Downloads</span>
                          <span className="font-medium">{paper.downloads}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Rating</span>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{paper.rating}/5</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < Math.floor(paper.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download
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
      <section className="py-16 bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Research
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Get notified when new white papers are published and access exclusive research content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
              <Download className="mr-2 h-5 w-5" />
              Download All Papers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-violet-700">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 