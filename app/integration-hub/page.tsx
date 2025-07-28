'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Link, 
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

export default function IntegrationHubPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Integration Hub', href: '/integration-hub' }
    ]);
    setCurrentPage('Integration Hub');
  }, [setBreadcrumbs, setCurrentPage]);

  const integrationCategories = [
    {
      title: 'CRM & Sales',
      description: 'Connect with popular CRM platforms',
      icon: Users,
      color: 'bg-blue-500',
      integrations: [
        { name: 'Salesforce', status: 'active', users: '2,500+' },
        { name: 'HubSpot', status: 'active', users: '1,800+' },
        { name: 'Pipedrive', status: 'active', users: '950+' },
        { name: 'Zoho CRM', status: 'beta', users: '320+' }
      ]
    },
    {
      title: 'Marketing & Analytics',
      description: 'Integrate with marketing and analytics tools',
      icon: BarChart3,
      color: 'bg-green-500',
      integrations: [
        { name: 'Google Analytics', status: 'active', users: '3,200+' },
        { name: 'Mailchimp', status: 'active', users: '2,100+' },
        { name: 'Segment', status: 'active', users: '1,400+' },
        { name: 'Mixpanel', status: 'beta', users: '680+' }
      ]
    },
    {
      title: 'Communication',
      description: 'Connect with communication platforms',
      icon: MessageSquare,
      color: 'bg-purple-500',
      integrations: [
        { name: 'Slack', status: 'active', users: '4,500+' },
        { name: 'Microsoft Teams', status: 'active', users: '2,800+' },
        { name: 'Discord', status: 'active', users: '1,200+' },
        { name: 'Telegram', status: 'beta', users: '450+' }
      ]
    },
    {
      title: 'Payment & Finance',
      description: 'Integrate with payment processors',
      icon: CreditCard,
      color: 'bg-yellow-500',
      integrations: [
        { name: 'Stripe', status: 'active', users: '3,800+' },
        { name: 'PayPal', status: 'active', users: '2,900+' },
        { name: 'Square', status: 'active', users: '1,600+' },
        { name: 'Adyen', status: 'beta', users: '520+' }
      ]
    },
    {
      title: 'Development Tools',
      description: 'Connect with development platforms',
      icon: Code,
      color: 'bg-indigo-500',
      integrations: [
        { name: 'GitHub', status: 'active', users: '2,800+' },
        { name: 'GitLab', status: 'active', users: '1,900+' },
        { name: 'Bitbucket', status: 'active', users: '1,300+' },
        { name: 'Azure DevOps', status: 'beta', users: '750+' }
      ]
    },
    {
      title: 'Cloud & Storage',
      description: 'Integrate with cloud storage services',
      icon: Cloud,
      color: 'bg-red-500',
      integrations: [
        { name: 'AWS S3', status: 'active', users: '2,200+' },
        { name: 'Google Cloud', status: 'active', users: '1,800+' },
        { name: 'Dropbox', status: 'active', users: '1,500+' },
        { name: 'OneDrive', status: 'beta', users: '890+' }
      ]
    }
  ];

  const popularIntegrations = [
    {
      name: 'Salesforce',
      description: 'Sync customer data and automate sales processes',
      icon: Users,
      status: 'active',
      users: '2,500+',
      rating: 4.8,
      setupTime: '5 minutes'
    },
    {
      name: 'Slack',
      description: 'Send notifications and alerts to your team',
      icon: MessageSquare,
      status: 'active',
      users: '4,500+',
      rating: 4.9,
      setupTime: '3 minutes'
    },
    {
      name: 'Stripe',
      description: 'Process payments and manage subscriptions',
      icon: CreditCard,
      status: 'active',
      users: '3,800+',
      rating: 4.7,
      setupTime: '10 minutes'
    },
    {
      name: 'Google Analytics',
      description: 'Track user behavior and website performance',
      icon: BarChart3,
      status: 'active',
      users: '3,200+',
      rating: 4.6,
      setupTime: '7 minutes'
    }
  ];

  const integrationFeatures = [
    {
      title: 'One-Click Setup',
      description: 'Connect your favorite tools with just one click',
      icon: Zap,
      color: 'bg-blue-500'
    },
    {
      title: 'Real-time Sync',
      description: 'Data syncs automatically in real-time',
      icon: RefreshCw,
      color: 'bg-green-500'
    },
    {
      title: 'Custom Workflows',
      description: 'Create custom automation workflows',
      icon: Settings,
      color: 'bg-purple-500'
    },
    {
      title: 'Webhook Support',
      description: 'Receive real-time notifications via webhooks',
      icon: Bell,
      color: 'bg-yellow-500'
    },
    {
      title: 'Data Mapping',
      description: 'Customize how data flows between systems',
      icon: Link,
      color: 'bg-indigo-500'
    },
    {
      title: 'Error Handling',
      description: 'Robust error handling and retry logic',
      icon: AlertCircle,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Link className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Integration Hub
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Connect your platform with 100+ popular tools and services. Automate workflows, sync data, and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Browse Integrations
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Plus className="mr-2 h-5 w-5" />
                Request Integration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Popular Integrations
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Most used integrations by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularIntegrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <integration.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge className={`${
                      integration.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {integration.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {integration.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Users</span>
                      <span className="font-medium">{integration.users}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Rating</span>
                      <span className="font-medium">{integration.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Setup Time</span>
                      <span className="font-medium">{integration.setupTime}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Connect <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Integration Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find the right integration for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.integrations.map((integration, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{integration.name}</span>
                          <Badge className={`text-xs ${
                            integration.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {integration.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {integration.users}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Integration Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to build seamless integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, index) => (
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
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start integrating your favorite tools and automate your workflows today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Search className="mr-2 h-5 w-5" />
              Browse Integrations
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              <HelpCircle className="mr-2 h-5 w-5" />
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 