'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useContentOverview } from '@/hooks/useApi';
import { 
  FileText, 
  Image, 
  Video, 
  Music,
  Settings,
  Plus,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  Server,
  Cog,
  Lock,
  Monitor,
  Bell,
  Mail,
  Calendar,
  CreditCard,
  Download,
  Filter,
  Search,
  RefreshCw,
  PieChart,
  LineChart,
  Target,
  DollarSign,
  ShoppingCart,
  Package,
  Clock,
  TrendingDown,
  AlertCircle,
  Info,
  Upload,
  Folder,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FileText as FileTextIcon,
  FolderOpen,
  FolderPlus,
  FilePlus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileArchive as FileArchiveIcon,
  FileCode as FileCodeIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileImage as FileImageIcon,
  FileVideo as FileVideoIcon,
  FileAudio as FileAudioIcon,
  FileText as FileTextIcon2,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderPlus as FolderPlusIcon,
  FilePlus as FilePlusIcon,
  FileEdit as FileEditIcon,
  FileX as FileXIcon,
  FileCheck as FileCheckIcon,
  FileSearch as FileSearchIcon,
  FileArchive as FileArchiveIcon2,
  FileCode as FileCodeIcon2,
  FileSpreadsheet as FileSpreadsheetIcon2,
  FileImage as FileImageIcon2,
  FileVideo as FileVideoIcon2,
  FileAudio as FileAudioIcon2,
  FileText as FileTextIcon3,
  Folder as FolderIcon2,
  FolderOpen as FolderOpenIcon2,
  FolderPlus as FolderPlusIcon2,
  FilePlus as FilePlusIcon2,
  FileEdit as FileEditIcon2,
  FileX as FileXIcon2,
  FileCheck as FileCheckIcon2,
  FileSearch as FileSearchIcon2
} from 'lucide-react';
import Link from 'next/link';

export default function AdminContentPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();
  
  // API hooks for real data
  const { data: contentOverview, loading: contentLoading, error: contentError } = useContentOverview();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Admin', href: '/admin' },
      { label: 'Content Management', href: '/admin/content' }
    ]);
    setCurrentPage('Content Management');
  }, [setBreadcrumbs, setCurrentPage]);

  const contentStats = [
    {
      title: 'Total Files',
      value: contentLoading ? 'Loading...' : '1,234',
      change: '+45',
      changeType: 'positive',
      icon: File,
      href: '/admin/content/files'
    },
    {
      title: 'Total Storage',
      value: contentLoading ? 'Loading...' : '2.4 GB',
      change: '+2.3 GB',
      changeType: 'positive',
      icon: Folder,
      href: '/admin/content/storage'
    },
    {
      title: 'Active Users',
      value: contentLoading ? 'Loading...' : '156',
      change: '+12',
      changeType: 'positive',
      icon: UserCheck,
      href: '/admin/content/users'
    },
    {
      title: 'Uploads Today',
      value: contentLoading ? 'Loading...' : '23',
      change: '+8',
      changeType: 'positive',
      icon: Upload,
      href: '/admin/content/uploads'
    }
  ];

  const quickActions = [
    {
      title: 'Upload Files',
      description: 'Upload new files to the system',
      icon: Upload,
      href: '/admin/content/upload',
      color: 'bg-blue-500'
    },
    {
      title: 'Create Folder',
      description: 'Create new folder structure',
      icon: FolderPlus,
      href: '/admin/content/folders',
      color: 'bg-green-500'
    },
    {
      title: 'Manage Permissions',
      description: 'Set file and folder permissions',
      icon: Lock,
      href: '/admin/content/permissions',
      color: 'bg-purple-500'
    },
    {
      title: 'Content Analytics',
      description: 'View content usage analytics',
      icon: BarChart3,
      href: '/admin/content/analytics',
      color: 'bg-orange-500'
    }
  ];

  const fileTypes = [
    {
      type: 'Images',
      count: contentLoading ? 'Loading...' : '456',
      size: contentLoading ? 'Loading...' : '1.2 GB',
      icon: FileImage,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'Videos',
      count: contentLoading ? 'Loading...' : '234',
      size: contentLoading ? 'Loading...' : '3.8 GB',
      icon: FileVideo,
      color: 'bg-red-100 text-red-600'
    },
    {
      type: 'Documents',
      count: contentLoading ? 'Loading...' : '345',
      size: contentLoading ? 'Loading...' : '0.8 GB',
      icon: FileText,
      color: 'bg-green-100 text-green-600'
    },
    {
      type: 'Audio',
      count: contentLoading ? 'Loading...' : '123',
      size: contentLoading ? 'Loading...' : '0.6 GB',
      icon: FileAudio,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const recentUploads = [
    {
      name: 'product-catalog-2024.pdf',
      type: 'Document',
      size: '2.4 MB',
      uploadedBy: 'john.doe@company.com',
      date: '2024-01-15 14:30:00',
      status: 'processed',
      downloads: 12
    },
    {
      name: 'company-logo.png',
      type: 'Image',
      size: '156 KB',
      uploadedBy: 'admin@company.com',
      date: '2024-01-15 13:45:00',
      status: 'processed',
      downloads: 8
    },
    {
      name: 'presentation-video.mp4',
      type: 'Video',
      size: '45.2 MB',
      uploadedBy: 'sarah.smith@company.com',
      date: '2024-01-15 12:15:00',
      status: 'processing',
      downloads: 3
    },
    {
      name: 'background-music.mp3',
      type: 'Audio',
      size: '3.1 MB',
      uploadedBy: 'mark.wilson@company.com',
      date: '2024-01-15 11:20:00',
      status: 'processed',
      downloads: 5
    }
  ];

  const storageMetrics = [
    {
      title: 'Storage Used',
      value: contentLoading ? 'Loading...' : `${(contentOverview?.storage?.used / 1024 / 1024 || 0).toFixed(2)} GB`,
      change: '+15%',
      changeType: 'positive',
      icon: HardDrive
    },
    {
      title: 'Storage Available',
      value: contentLoading ? 'Loading...' : `${(contentOverview?.storage?.available / 1024 / 1024 || 0).toFixed(2)} GB`,
      change: '-8%',
      changeType: 'negative',
      icon: Server
    },
    {
      title: 'Upload Speed',
      value: '2.5 MB/s',
      change: '+12%',
      changeType: 'positive',
      icon: Zap
    },
    {
      title: 'Download Speed',
      value: '5.8 MB/s',
      change: '+8%',
      changeType: 'positive',
      icon: Download
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      case 'pending':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <RefreshCw className="w-4 h-4 animate-spin" />;
      case 'failed':
        return <AlertTriangle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const getFileTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'document':
        return <FileText className="h-4 w-4" />;
      case 'image':
        return <FileImage className="h-4 w-4" />;
      case 'video':
        return <FileVideo className="h-4 w-4" />;
      case 'audio':
        return <FileAudio className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">
            Manage files, folders, and content across the platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="text-sm">
            Content Admin
          </Badge>
          <Badge className="text-sm">
            File Manager
          </Badge>
        </div>
      </div>

      {/* Content Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contentStats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last week
              </p>
              <Link href={stat.href}>
                <Button className="mt-2 p-0 h-auto">
                  View Details →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href={action.href}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold">{action.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {action.description}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* File Types Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder className="h-5 w-5" />
            File Types Overview
          </CardTitle>
          <CardDescription>
            Content distribution by file type and storage usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {fileTypes.map((fileType) => (
              <div key={fileType.type} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className={`p-2 rounded-lg ${fileType.color}`}>
                  <fileType.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{fileType.type}</p>
                  <p className="text-lg font-bold">{fileType.count}</p>
                  <p className="text-xs text-muted-foreground">
                    {fileType.size} storage
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Storage Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Storage Performance
          </CardTitle>
          <CardDescription>
            Storage usage and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {storageMetrics.map((metric) => (
              <div key={metric.title} className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${metric.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <metric.icon className={`h-4 w-4 ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{metric.title}</p>
                  <p className="text-lg font-bold">{metric.value}</p>
                  <p className={`text-xs ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last week
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Recent Uploads
          </CardTitle>
          <CardDescription>
            Latest file uploads and their processing status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUploads.map((upload, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    {getFileTypeIcon(upload.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{upload.name}</h4>
                    <p className="text-sm text-muted-foreground">{upload.type}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">
                        Size: {upload.size}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        By: {upload.uploadedBy}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {upload.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{upload.downloads}</span>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(upload.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(upload.status)}
                      <span>{upload.status}</span>
                    </div>
                  </Badge>
                  <Button size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Upload Trends
            </CardTitle>
            <CardDescription>
              File upload activity over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Upload activity trends</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Storage Distribution
            </CardTitle>
            <CardDescription>
              Storage usage by file type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
                <p className="text-xs text-muted-foreground">Storage distribution analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 