'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Database, 
  Lock, 
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

export default function CompliancePage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Compliance', href: '/compliance' }
    ]);
    setCurrentPage('Compliance');
  }, [setBreadcrumbs, setCurrentPage]);

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality',
      icon: Shield,
      status: 'Certified',
      lastAudit: 'December 2023',
      nextAudit: 'December 2024',
      color: 'bg-green-500'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection and privacy',
      icon: Lock,
      status: 'Compliant',
      lastAudit: 'January 2024',
      nextAudit: 'Ongoing',
      color: 'bg-blue-500'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance for healthcare data',
      icon: FileCheck,
      status: 'Certified',
      lastAudit: 'November 2023',
      nextAudit: 'November 2024',
      color: 'bg-purple-500'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      icon: Award,
      status: 'Certified',
      lastAudit: 'October 2023',
      nextAudit: 'October 2024',
      color: 'bg-orange-500'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment card data protection',
      icon: CreditCard,
      status: 'Compliant',
      lastAudit: 'September 2023',
      nextAudit: 'September 2024',
      color: 'bg-indigo-500'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for government cloud services',
      icon: Building2,
      status: 'In Progress',
      lastAudit: 'N/A',
      nextAudit: 'Q2 2024',
      color: 'bg-yellow-500'
    }
  ];

  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit',
      icon: Lock,
      color: 'bg-blue-500',
      features: ['AES-256 encryption', 'TLS 1.3', 'Encrypted backups', 'Key management']
    },
    {
      title: 'Access Control',
      description: 'Comprehensive access control and identity management',
      icon: Key,
      color: 'bg-green-500',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Session management']
    },
    {
      title: 'Audit Logging',
      description: 'Complete audit trail for compliance and security monitoring',
      icon: FileText,
      color: 'bg-purple-500',
      features: ['Comprehensive logging', 'Real-time monitoring', 'Compliance reporting', 'Data retention']
    },
    {
      title: 'Data Privacy',
      description: 'Advanced data privacy controls and user rights management',
      icon: Eye,
      color: 'bg-orange-500',
      features: ['Data minimization', 'Right to be forgotten', 'Consent management', 'Privacy by design']
    },
    {
      title: 'Incident Response',
      description: 'Robust incident response and disaster recovery capabilities',
      icon: AlertCircle,
      color: 'bg-red-500',
      features: ['24/7 monitoring', 'Automated alerts', 'Incident response plan', 'Business continuity']
    },
    {
      title: 'Vulnerability Management',
      description: 'Proactive vulnerability assessment and patch management',
      icon: Shield,
      color: 'bg-indigo-500',
      features: ['Regular security scans', 'Automated patching', 'Penetration testing', 'Security updates']
    }
  ];

  const complianceStats = [
    {
      title: 'Security Certifications',
      value: '15+',
      change: '+2',
      changeType: 'positive',
      icon: Award
    },
    {
      title: 'Data Centers',
      value: '25+',
      change: '+3',
      changeType: 'positive',
      icon: Server
    },
    {
      title: 'Security Audits',
      value: '50+',
      change: '+10',
      changeType: 'positive',
      icon: FileCheck
    },
    {
      title: 'Uptime SLA',
      value: '99.99%',
      change: '+0.01%',
      changeType: 'positive',
      icon: CheckCircle
    }
  ];

  const complianceResources = [
    {
      title: 'Compliance Documentation',
      description: 'Access our comprehensive compliance documentation and certificates',
      icon: FileText,
      action: 'View Documents'
    },
    {
      title: 'Security Whitepaper',
      description: 'Download our detailed security and compliance whitepaper',
      icon: Download,
      action: 'Download PDF'
    },
    {
      title: 'Compliance FAQ',
      description: 'Find answers to common compliance and security questions',
      icon: HelpCircle,
      action: 'Read FAQ'
    },
    {
      title: 'Contact Compliance Team',
      description: 'Get in touch with our compliance and security experts',
      icon: Users,
      action: 'Contact Team'
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
                <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Compliance & Security
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade security and compliance built into every aspect of our platform. Trust us with your most sensitive data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <FileText className="mr-2 h-5 w-5" />
                View Certificates
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Download className="mr-2 h-5 w-5" />
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStats.map((stat, index) => (
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

      {/* Compliance Standards */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Compliance Standards
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We maintain the highest standards of security and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${standard.color} rounded-lg flex items-center justify-center`}>
                      <standard.icon className="h-6 w-6 text-white" />
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
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Last Audit</span>
                      <span className="font-medium">{standard.lastAudit}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Next Audit</span>
                      <span className="font-medium">{standard.nextAudit}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Security Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comprehensive security measures to protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
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

      {/* Compliance Resources */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Compliance Resources
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Access our compliance documentation and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg w-fit mb-4">
                    <resource.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {resource.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto">
                    {resource.action} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            Trust Your Data with Us
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our commitment to security and compliance ensures your data is always protected
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <FileText className="mr-2 h-5 w-5" />
              View Certificates
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
              <Users className="mr-2 h-5 w-5" />
              Contact Security Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 