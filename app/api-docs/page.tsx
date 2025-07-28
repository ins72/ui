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

export default function ApiDocsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'API Documentation', href: '/api-docs' }
    ]);
    setCurrentPage('API Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve all users with pagination and filtering',
      auth: 'Bearer Token',
      rateLimit: '1000 requests/hour'
    },
    {
      method: 'POST',
      path: '/api/v1/users',
      description: 'Create a new user account',
      auth: 'Bearer Token',
      rateLimit: '100 requests/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/users/{id}',
      description: 'Get user details by ID',
      auth: 'Bearer Token',
      rateLimit: '1000 requests/hour'
    },
    {
      method: 'PUT',
      path: '/api/v1/users/{id}',
      description: 'Update user information',
      auth: 'Bearer Token',
      rateLimit: '500 requests/hour'
    },
    {
      method: 'DELETE',
      path: '/api/v1/users/{id}',
      description: 'Delete user account',
      auth: 'Bearer Token',
      rateLimit: '100 requests/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get system analytics and metrics',
      auth: 'Bearer Token',
      rateLimit: '2000 requests/hour'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Fetch Users',
      code: `const response = await fetch('/api/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const users = await response.json();`
    },
    {
      language: 'Python',
      title: 'Create User',
      code: `import requests

response = requests.post(
    'https://api.example.com/v1/users',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'John Doe',
        'email': 'john@example.com'
    }
)
user = response.json()`
    },
    {
      language: 'cURL',
      title: 'Update User',
      code: `curl -X PUT https://api.example.com/v1/users/123 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }'`
    }
  ];

  const sdkFeatures = [
    {
      title: 'Authentication',
      description: 'Secure API key management and token handling',
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      title: 'Rate Limiting',
      description: 'Built-in rate limiting and retry logic',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error handling and logging',
      icon: AlertCircle,
      color: 'bg-red-500'
    },
    {
      title: 'TypeScript Support',
      description: 'Full TypeScript definitions and IntelliSense',
      icon: Code,
      color: 'bg-purple-500'
    },
    {
      title: 'Webhooks',
      description: 'Real-time event notifications via webhooks',
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      title: 'Testing',
      description: 'Built-in testing utilities and mocks',
      icon: CheckCircle,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive API reference, SDKs, and integration guides to help you build powerful applications with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-blue-600" />
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Get up and running with our API in minutes
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="mr-2 h-5 w-5 text-green-600" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Learn about API keys, tokens, and security
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-purple-600" />
                  SDKs & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Official SDKs for popular programming languages
                </p>
                <Button variant="ghost" className="p-0 h-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              API Endpoints
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Complete reference of all available API endpoints
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge 
                        className={`px-3 py-1 text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                      <span>{endpoint.auth}</span>
                      <span>{endpoint.rateLimit}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {endpoint.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Code Examples
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Ready-to-use code snippets in multiple languages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Code className="mr-2 h-5 w-5 text-blue-600" />
                      {example.language}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>{example.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm overflow-x-auto">
                    <code className="text-slate-800 dark:text-slate-200">
                      {example.code}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Features */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              SDK Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to integrate with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkFeatures.map((feature, index) => (
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with our API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Play className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <HelpCircle className="mr-2 h-5 w-5" />
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 