'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
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

export default function EnterpriseFeaturesPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Enterprise Features', href: '/enterprise-features' }
    ]);
    setCurrentPage('Enterprise Features');
  }, [setBreadcrumbs, setCurrentPage]);

  const enterpriseFeatures = [
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with multi-factor authentication, SSO, and advanced threat protection',
      icon: Shield,
      color: 'bg-red-500',
      features: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO)',
        'Advanced threat protection',
        'Data encryption at rest and in transit',
        'Role-based access control (RBAC)',
        'Audit logging and compliance'
      ]
    },
    {
      title: 'Scalability & Performance',
      description: 'Built to handle enterprise-scale workloads with high availability and performance',
      icon: Zap,
      color: 'bg-blue-500',
      features: [
        'Auto-scaling infrastructure',
        'Load balancing and failover',
        '99.99% uptime SLA',
        'Global CDN and edge locations',
        'Database optimization',
        'Performance monitoring and alerts'
      ]
    },
    {
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements with comprehensive compliance features',
      icon: FileCheck,
      color: 'bg-green-500',
      features: [
        'SOC 2 Type II compliance',
        'GDPR and data privacy',
        'HIPAA compliance',
        'ISO 27001 certification',
        'Custom compliance frameworks',
        'Data retention policies'
      ]
    },
    {
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing enterprise systems and workflows',
      icon: Link,
      color: 'bg-purple-500',
      features: [
        'RESTful APIs and webhooks',
        'Custom connector development',
        'Third-party integrations',
        'Data synchronization',
        'Workflow automation',
        'Real-time data streaming'
      ]
    },
    {
      title: 'Advanced Analytics',
      description: 'Powerful analytics and reporting capabilities for data-driven decision making',
      icon: BarChart3,
      color: 'bg-orange-500',
      features: [
        'Real-time dashboards',
        'Custom reporting',
        'Data visualization',
        'Predictive analytics',
        'Business intelligence',
        'Export and sharing capabilities'
      ]
    },
    {
      title: 'Dedicated Support',
      description: '24/7 dedicated support with enterprise-grade service level agreements',
      icon: Users,
      color: 'bg-indigo-500',
      features: [
        '24/7 phone and email support',
        'Dedicated account manager',
        'Priority ticket routing',
        'Custom training programs',
        'On-site support available',
        'Escalation management'
      ]
    }
  ];

  const enterpriseStats = [
    {
      title: 'Enterprise Customers',
      value: '500+',
      change: '+25%',
      changeType: 'positive',
      icon: Building2
    },
    {
      title: 'Uptime SLA',
      value: '99.99%',
      change: '+0.01%',
      changeType: 'positive',
      icon: CheckCircle
    },
    {
      title: 'Security Certifications',
      value: '15+',
      change: '+2',
      changeType: 'positive',
      icon: Shield
    },
    {
      title: 'Global Data Centers',
      value: '25+',
      change: '+3',
      changeType: 'positive',
      icon: Globe
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
      icon: Shield,
      status: 'Certified'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      icon: Lock,
      status: 'Compliant'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: FileCheck,
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Award,
      status: 'Certified'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      icon: CreditCard,
      status: 'Compliant'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program',
      icon: Building2,
      status: 'In Progress'
    }
  ];

  const deploymentOptions = [
    {
      title: 'Cloud Hosted',
      description: 'Fully managed cloud deployment with automatic updates and maintenance',
      icon: Cloud,
      color: 'bg-blue-500',
      features: ['Fully managed', 'Automatic updates', 'Global CDN', '99.99% uptime']
    },
    {
      title: 'Private Cloud',
      description: 'Dedicated private cloud infrastructure for enhanced security and control',
      icon: Server,
      color: 'bg-green-500',
      features: ['Dedicated infrastructure', 'Enhanced security', 'Custom configurations', 'Isolated environment']
    },
    {
      title: 'On-Premises',
      description: 'Deploy within your own data center for maximum control and compliance',
      icon: Building2,
      color: 'bg-purple-500',
      features: ['Full control', 'Data sovereignty', 'Custom integrations', 'Air-gapped deployment']
    },
    {
      title: 'Hybrid',
      description: 'Combination of cloud and on-premises deployment for flexibility',
      icon: Link,
      color: 'bg-orange-500',
      features: ['Flexible deployment', 'Data synchronization', 'Disaster recovery', 'Cost optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-gray-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <Building2 className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Enterprise Features
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Built for enterprise-scale organizations with advanced security, compliance, and scalability features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Phone className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseStats.map((stat, index) => (
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
                        {stat.change} from last year
                      </p>
                    </div>
                    <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full">
                      <stat.icon className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to run mission-critical applications at scale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Meet the highest standards of security and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <standard.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <Badge className={`${
                      standard.status === 'Certified' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      standard.status === 'Compliant' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {standard.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{standard.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Choose the deployment model that best fits your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Enterprise?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Discover how our enterprise features can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-600 hover:bg-slate-50">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-slate-700">
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 