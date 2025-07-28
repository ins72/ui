'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
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

export default function SLAPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Service Level Agreement', href: '/sla' }
    ]);
    setCurrentPage('Service Level Agreement');
  }, [setBreadcrumbs, setCurrentPage]);

  const slaMetrics = [
    {
      title: 'Uptime SLA',
      value: '99.99%',
      description: 'Guaranteed uptime for all services',
      icon: CheckCircle,
      color: 'bg-green-500',
      details: 'Monthly uptime percentage excluding scheduled maintenance'
    },
    {
      title: 'Response Time',
      value: '< 100ms',
      description: 'Average API response time',
      icon: Zap,
      color: 'bg-blue-500',
      details: '95th percentile response time for API endpoints'
    },
    {
      title: 'Support Response',
      value: '1 hour',
      description: 'Initial response time for critical issues',
      icon: Clock,
      color: 'bg-purple-500',
      details: 'Maximum time to first response for P1 issues'
    },
    {
      title: 'Data Recovery',
      value: '4 hours',
      description: 'Recovery time objective (RTO)',
      icon: RefreshCw,
      color: 'bg-orange-500',
      details: 'Maximum time to restore service after failure'
    }
  ];

  const slaTiers = [
    {
      name: 'Basic',
      uptime: '99.5%',
      responseTime: '< 200ms',
      supportResponse: '4 hours',
      price: 'Included',
      features: [
        'Standard support',
        'Email support',
        'Documentation access',
        'Community forums'
      ]
    },
    {
      name: 'Professional',
      uptime: '99.9%',
      responseTime: '< 150ms',
      supportResponse: '2 hours',
      price: '$99/month',
      features: [
        'Priority support',
        'Phone support',
        'Dedicated account manager',
        'Advanced monitoring',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      uptime: '99.99%',
      responseTime: '< 100ms',
      supportResponse: '1 hour',
      price: 'Custom',
      features: [
        '24/7 dedicated support',
        'On-site support available',
        'Custom SLA terms',
        'Escalation management',
        'Performance guarantees',
        'Financial credits'
      ]
    }
  ];

  const supportLevels = [
    {
      level: 'P1 - Critical',
      description: 'Service completely unavailable or major functionality broken',
      responseTime: '1 hour',
      resolutionTime: '4 hours',
      examples: ['Complete service outage', 'Data loss', 'Security breach']
    },
    {
      level: 'P2 - High',
      description: 'Major functionality impaired or significant performance degradation',
      responseTime: '4 hours',
      resolutionTime: '24 hours',
      examples: ['Major feature broken', 'Significant performance issues', 'Data corruption']
    },
    {
      level: 'P3 - Medium',
      description: 'Minor functionality impaired or moderate performance issues',
      responseTime: '24 hours',
      resolutionTime: '72 hours',
      examples: ['Minor feature issues', 'Performance degradation', 'Configuration problems']
    },
    {
      level: 'P4 - Low',
      description: 'General questions, feature requests, or minor issues',
      responseTime: '72 hours',
      resolutionTime: '1 week',
      examples: ['Feature requests', 'Documentation questions', 'Minor UI issues']
    }
  ];

  const slaGuarantees = [
    {
      title: 'Uptime Guarantee',
      description: 'We guarantee 99.99% uptime for all services',
      icon: CheckCircle,
      color: 'bg-green-500',
      details: 'If we fail to meet this guarantee, you receive service credits'
    },
    {
      title: 'Performance Guarantee',
      description: 'API response times under 100ms for 95% of requests',
      icon: Zap,
      color: 'bg-blue-500',
      details: 'Performance monitoring and automatic scaling ensure consistent performance'
    },
    {
      title: 'Support Guarantee',
      description: 'Guaranteed response times for all support requests',
      icon: Clock,
      color: 'bg-purple-500',
      details: 'Escalation procedures ensure issues are resolved within SLA'
    },
    {
      title: 'Security Guarantee',
      description: 'Enterprise-grade security with 24/7 monitoring',
      icon: Shield,
      color: 'bg-red-500',
      details: 'Continuous security monitoring and threat detection'
    }
  ];

  const currentPerformance = [
    {
      metric: 'Current Uptime',
      value: '99.995%',
      status: 'exceeding',
      trend: '+0.005%'
    },
    {
      metric: 'Average Response Time',
      value: '85ms',
      status: 'exceeding',
      trend: '-15ms'
    },
    {
      metric: 'Support Response Time',
      value: '45 minutes',
      status: 'exceeding',
      trend: '-15 minutes'
    },
    {
      metric: 'Customer Satisfaction',
      value: '98.5%',
      status: 'exceeding',
      trend: '+1.5%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Service Level Agreement
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Our commitment to reliability, performance, and support. Clear guarantees for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <FileText className="mr-2 h-5 w-5" />
                Download SLA
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Performance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Performance */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Current Performance
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We consistently exceed our SLA commitments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPerformance.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {metric.metric}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        {metric.trend} vs SLA
                      </p>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              SLA Metrics
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Our key performance indicators and guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slaMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mr-4`}>
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{metric.title}</CardTitle>
                      <CardDescription>{metric.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-4xl font-bold text-slate-900 dark:text-white">
                      {metric.value}
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {metric.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Tiers */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              SLA Tiers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Choose the SLA level that matches your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slaTiers.map((tier, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                tier.name === 'Enterprise' ? 'ring-2 ring-amber-500' : ''
              }`}>
                <CardHeader>
                  <div className="text-center">
                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {tier.price}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Uptime</span>
                      <span className="font-medium">{tier.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Response Time</span>
                      <span className="font-medium">{tier.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Support Response</span>
                      <span className="font-medium">{tier.supportResponse}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    tier.name === 'Enterprise' ? 'bg-amber-600 hover:bg-amber-700' : ''
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Support Priority Levels
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              How we prioritize and respond to different types of issues
            </p>
          </div>

          <div className="space-y-4">
            {supportLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <Badge className={`${
                        level.level.includes('P1') ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        level.level.includes('P2') ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        level.level.includes('P3') ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {level.level}
                      </Badge>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        {level.description}
                      </p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Response Time</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{level.responseTime}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Resolution Time</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{level.resolutionTime}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Examples</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400">
                        {level.examples.map((example, idx) => (
                          <li key={idx}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Guarantees
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              What we promise and how we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slaGuarantees.map((guarantee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${guarantee.color} rounded-lg flex items-center justify-center mr-4`}>
                      <guarantee.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{guarantee.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {guarantee.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {guarantee.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Choose your SLA tier and start with guaranteed performance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
              <FileText className="mr-2 h-5 w-5" />
              Download SLA
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700">
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 