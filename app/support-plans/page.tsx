'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
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

export default function SupportPlansPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Support Plans', href: '/support-plans' }
    ]);
    setCurrentPage('Support Plans');
  }, [setBreadcrumbs, setCurrentPage]);

  const supportPlans = [
    {
      name: 'Community',
      price: 'Free',
      description: 'Self-service support with community resources',
      icon: Users,
      color: 'bg-blue-500',
      features: [
        'Community forums',
        'Documentation access',
        'Knowledge base',
        'Email support (72h response)',
        'Basic troubleshooting guides',
        'Video tutorials'
      ],
      responseTime: '72 hours',
      availability: 'Business hours',
      recommended: false
    },
    {
      name: 'Standard',
      price: '$29/month',
      description: 'Professional support for growing businesses',
      icon: Headphones,
      color: 'bg-green-500',
      features: [
        'Priority email support',
        'Phone support',
        'Live chat (business hours)',
        'Dedicated support portal',
        'Custom training sessions',
        'Monthly health checks',
        'Escalation management'
      ],
      responseTime: '24 hours',
      availability: 'Business hours',
      recommended: true
    },
    {
      name: 'Premium',
      price: '$99/month',
      description: 'Advanced support with faster response times',
      icon: Shield,
      color: 'bg-purple-500',
      features: [
        'Priority phone support',
        '24/7 email support',
        'Live chat (24/7)',
        'Dedicated account manager',
        'Custom integrations support',
        'Quarterly business reviews',
        'Advanced troubleshooting',
        'Performance optimization'
      ],
      responseTime: '4 hours',
      availability: '24/7',
      recommended: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Dedicated support for enterprise organizations',
      icon: Award,
      color: 'bg-orange-500',
      features: [
        '24/7 dedicated phone support',
        'On-site support available',
        'Custom SLA agreements',
        'Dedicated support team',
        'Custom training programs',
        'Monthly business reviews',
        'Proactive monitoring',
        'Custom integrations',
        'Escalation to engineering',
        'Quarterly strategy sessions'
      ],
      responseTime: '1 hour',
      availability: '24/7',
      recommended: false
    }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: Mail,
      color: 'bg-blue-500',
      responseTime: '24 hours',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support engineers',
      icon: Phone,
      color: 'bg-green-500',
      responseTime: 'Immediate',
      availability: 'Business hours'
    },
    {
      title: 'Live Chat',
      description: 'Real-time chat support for quick questions',
      icon: MessageSquare,
      color: 'bg-purple-500',
      responseTime: 'Under 5 minutes',
      availability: 'Business hours'
    },
    {
      title: 'Video Calls',
      description: 'Screen sharing and video consultations',
      icon: Video,
      color: 'bg-orange-500',
      responseTime: 'Scheduled',
      availability: 'Business hours'
    }
  ];

  const supportStats = [
    {
      title: 'Customer Satisfaction',
      value: '98%',
      change: '+2%',
      changeType: 'positive',
      icon: Star
    },
    {
      title: 'Average Response Time',
      value: '2.5 hours',
      change: '-30%',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'First Contact Resolution',
      value: '85%',
      change: '+5%',
      changeType: 'positive',
      icon: CheckCircle
    },
    {
      title: 'Support Engineers',
      value: '50+',
      change: '+10',
      changeType: 'positive',
      icon: Users
    }
  ];

  const supportFeatures = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and training',
      icon: Video,
      color: 'bg-green-500'
    },
    {
      title: 'Community Forums',
      description: 'Connect with other users and share solutions',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Training Sessions',
      description: 'Custom training for your team',
      icon: GraduationCap,
      color: 'bg-orange-500'
    },
    {
      title: 'Health Checks',
      description: 'Proactive system monitoring and optimization',
      icon: Activity,
      color: 'bg-indigo-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Help with custom integrations and workflows',
      icon: Link,
      color: 'bg-red-500'
    }
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
                <Headphones className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Support Plans
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Choose the support plan that fits your needs. From self-service to dedicated enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Headphones className="mr-2 h-5 w-5" />
                Get Support
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <HelpCircle className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
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
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Support Plan
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find the perfect support level for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportPlans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                plan.recommended ? 'ring-2 ring-cyan-500' : ''
              }`}>
                <CardHeader>
                  <div className="text-center">
                    {plan.recommended && (
                      <Badge className="mb-2 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                        Recommended
                      </Badge>
                    )}
                    <div className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white my-2">
                      {plan.price}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Response Time</span>
                      <span className="font-medium">{plan.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Availability</span>
                      <span className="font-medium">{plan.availability}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    plan.recommended ? 'bg-cyan-600 hover:bg-cyan-700' : ''
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Support Channels
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Multiple ways to get the help you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                    <channel.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Response Time</span>
                      <span className="font-medium">{channel.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Availability</span>
                      <span className="font-medium">{channel.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Support Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to succeed with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
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
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you succeed with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
              <Headphones className="mr-2 h-5 w-5" />
              Get Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-cyan-700">
              <HelpCircle className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 