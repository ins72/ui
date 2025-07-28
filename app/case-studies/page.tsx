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

export default function CaseStudiesPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Case Studies', href: '/case-studies' }
    ]);
    setCurrentPage('Case Studies');
  }, [setBreadcrumbs, setCurrentPage]);

  const caseStudies = [
    {
      title: 'TechCorp: 300% Efficiency Increase',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual processes causing bottlenecks and errors',
      solution: 'Implemented automated workflow management system',
      results: [
        '300% increase in operational efficiency',
        '50% reduction in processing time',
        '$2M annual cost savings',
        '99.9% system uptime'
      ],
      duration: '6 months',
      teamSize: '25 people',
      readTime: '8 min read',
      difficulty: 'Advanced',
      category: 'Process Automation'
    },
    {
      title: 'Global Retail: Scaling to 1M+ Customers',
      company: 'Global Retail Inc.',
      industry: 'Retail',
      challenge: 'Legacy systems unable to handle rapid growth',
      solution: 'Modernized infrastructure with cloud-native architecture',
      results: [
        '1M+ customers served',
        '200% increase in sales',
        '24/7 global operations',
        'Real-time inventory management'
      ],
      duration: '12 months',
      teamSize: '50 people',
      readTime: '12 min read',
      difficulty: 'Advanced',
      category: 'Digital Transformation'
    },
    {
      title: 'HealthTech: HIPAA-Compliant Data Management',
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Insecure and non-compliant data handling',
      solution: 'Implemented secure, HIPAA-compliant data platform',
      results: [
        'HIPAA compliant data handling',
        '90% faster data processing',
        'Enhanced patient care',
        'Reduced administrative overhead'
      ],
      duration: '8 months',
      teamSize: '30 people',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      category: 'Security & Compliance'
    },
    {
      title: 'FinServ: Real-time Financial Analytics',
      company: 'FinServ Analytics',
      industry: 'Financial Services',
      challenge: 'Delayed financial reporting affecting decision-making',
      solution: 'Built real-time analytics dashboard with automated reporting',
      results: [
        'Real-time financial insights',
        '80% faster reporting',
        'Improved decision-making',
        'Regulatory compliance achieved'
      ],
      duration: '9 months',
      teamSize: '40 people',
      readTime: '15 min read',
      difficulty: 'Advanced',
      category: 'Data Analytics'
    },
    {
      title: 'Manufacturing: IoT Integration Success',
      company: 'Smart Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Limited visibility into production processes',
      solution: 'Integrated IoT sensors and real-time monitoring',
      results: [
        'Real-time production monitoring',
        '25% reduction in downtime',
        'Predictive maintenance enabled',
        'Quality control improved'
      ],
      duration: '10 months',
      teamSize: '35 people',
      readTime: '11 min read',
      difficulty: 'Intermediate',
      category: 'IoT Integration'
    },
    {
      title: 'Education: Digital Learning Platform',
      company: 'EduTech University',
      industry: 'Education',
      challenge: 'Outdated learning management system',
      solution: 'Developed modern, scalable learning platform',
      results: [
        '50,000+ students served',
        '95% student satisfaction',
        'Reduced administrative workload',
        'Enhanced learning outcomes'
      ],
      duration: '7 months',
      teamSize: '20 people',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      category: 'Digital Learning'
    }
  ];

  const categories = [
    {
      name: 'Process Automation',
      icon: Zap,
      color: 'bg-blue-500',
      count: 15
    },
    {
      name: 'Digital Transformation',
      icon: Globe,
      color: 'bg-green-500',
      count: 12
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      color: 'bg-red-500',
      count: 8
    },
    {
      name: 'Data Analytics',
      icon: BarChart3,
      color: 'bg-purple-500',
      count: 10
    },
    {
      name: 'IoT Integration',
      icon: Cpu,
      color: 'bg-orange-500',
      count: 6
    },
    {
      name: 'Digital Learning',
      icon: BookOpen,
      color: 'bg-indigo-500',
      count: 4
    }
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Financial Services',
    'Retail',
    'Manufacturing',
    'Education',
    'Government',
    'Non-profit'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                <FileText className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              In-depth analysis of how organizations solve complex challenges and achieve remarkable results with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Browse Studies
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Download className="mr-2 h-5 w-5" />
                Download All
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter by:</span>
            </div>
            {industries.map((industry, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find case studies relevant to your industry and challenges
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
                      {category.count} case studies
                    </span>
                    <Button variant="ghost" className="p-0 h-auto">
                      View All <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Detailed analysis of successful implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${
                      study.difficulty === 'Advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      study.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {study.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      <span>{study.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium">{study.company}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.category}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge</h4>
                      <p className="text-slate-600 dark:text-slate-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-slate-600 dark:text-slate-300">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                            <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.teamSize}</span>
                      </div>
                      <Button>
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Learn from these success stories and start your own transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
              <Play className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-cyan-700">
              <Download className="mr-2 h-5 w-5" />
              Download All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 