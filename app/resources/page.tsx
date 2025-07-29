"use client";

import React, { useEffect } from "react";
import { useApp } from '@/contexts/AppContext';
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
import Link from 'next/link';

export default function ResourcesPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Resources', href: '/resources' }
    ]);
    setCurrentPage('Resources');
  }, [setBreadcrumbs, setCurrentPage]);

  const resourceCategories = [
    {
      title: 'Whitepapers',
      description: 'In-depth technical and business analysis documents',
      icon: 'file-text',
      resources: [
        {
          title: 'Enterprise Security Best Practices',
          description: 'Comprehensive guide to securing your enterprise data with Core 2.0',
          type: 'PDF',
          size: '2.4 MB',
          downloads: 1250,
          featured: true
        },
        {
          title: 'ROI Analysis: Core 2.0 Implementation',
          description: 'Detailed cost-benefit analysis for implementing Core 2.0 in your organization',
          type: 'PDF',
          size: '1.8 MB',
          downloads: 890,
          featured: false
        },
        {
          title: 'Cloud Migration Strategy Guide',
          description: 'Step-by-step guide for migrating to Core 2.0 cloud platform',
          type: 'PDF',
          size: '3.2 MB',
          downloads: 567,
          featured: false
        }
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementations',
      icon: BookOpen,
      resources: [
        {
          title: 'TechCorp: 500% Productivity Increase',
          description: 'How TechCorp achieved massive productivity gains with Core 2.0',
          type: 'PDF',
          size: '1.5 MB',
          downloads: 2100,
          featured: true
        },
        {
          title: 'Healthcare Plus: HIPAA Compliance',
          description: 'Healthcare Plus achieves full HIPAA compliance with Core 2.0',
          type: 'PDF',
          size: '2.1 MB',
          downloads: 1450,
          featured: false
        },
        {
          title: 'Startup Innovations: Rapid Scaling',
          description: 'How a startup scaled from 10 to 1000 users in 6 months',
          type: 'PDF',
          size: '1.2 MB',
          downloads: 980,
          featured: false
        }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      icon: Video,
      resources: [
        {
          title: 'Getting Started with Core 2.0',
          description: 'Complete beginner guide to setting up and using Core 2.0',
          type: 'MP4',
          size: '45 MB',
          duration: '15:30',
          views: 5400,
          featured: true
        },
        {
          title: 'Advanced Analytics Dashboard',
          description: 'Learn how to create custom analytics dashboards',
          type: 'MP4',
          size: '32 MB',
          duration: '22:15',
          views: 3200,
          featured: false
        },
        {
          title: 'API Integration Tutorial',
          description: 'Complete guide to integrating Core 2.0 APIs',
          type: 'MP4',
          size: '28 MB',
          duration: '18:45',
          views: 2100,
          featured: false
        }
      ]
    },
    {
      title: 'Templates & Tools',
      description: 'Ready-to-use templates and productivity tools',
      icon: File,
      resources: [
        {
          title: 'Project Management Templates',
          description: 'Complete set of project management templates for Core 2.0',
          type: 'ZIP',
          size: '8.5 MB',
          downloads: 890,
          featured: true
        },
        {
          title: 'Data Import Templates',
          description: 'Excel templates for importing data into Core 2.0',
          type: 'XLSX',
          size: '2.1 MB',
          downloads: 567,
          featured: false
        },
        {
          title: 'Custom Report Builder',
          description: 'Tool for creating custom reports and dashboards',
          type: 'EXE',
          size: '15.2 MB',
          downloads: 340,
          featured: false
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Download All',
      description: 'Get all resources in one package',
      icon: 'download',
      action: 'download-all',
      color: 'bg-blue-500'
    },
    {
      title: 'Request Custom',
      description: 'Request custom resources for your needs',
      icon: 'file-text',
      action: 'request',
      color: 'bg-green-500'
    },
    {
      title: 'Resource Library',
      description: 'Browse our complete resource collection',
      icon: BookOpen,
      action: 'library',
      color: 'bg-purple-500'
    },
    {
      title: 'Submit Resource',
      description: 'Share your own resources with the community',
      icon: Upload,
      action: 'submit',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    {
      title: 'Total Resources',
      value: resourceCategories.reduce((total, cat) => total + cat.resources.length, 0).toString(),
      description: 'Available for download',
      icon: 'file-text',
      color: 'text-blue-600'
    },
    {
      title: 'Total Downloads',
      value: '50K+',
      description: 'Resources downloaded this year',
      icon: 'download',
      color: 'text-green-600'
    },
    {
      title: 'Resource Types',
      value: resourceCategories.length.toString(),
      description: 'Different categories available',
      icon: Folder,
      color: 'text-purple-600'
    },
    {
      title: 'Featured Resources',
      value: resourceCategories.reduce((total, cat) => total + cat.resources.filter(r => r.featured).length, 0).toString(),
      description: 'Highlighted content',
      icon: 'star',
      color: 'text-orange-600'
    }
  ];

  const featuredResources = resourceCategories
    .flatMap(cat => cat.resources.filter(r => r.featured))
    .map(resource => ({
      ...resource,
      category: resourceCategories.find(cat => cat.resources.includes(resource))?.title || ''
    }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">
            Download whitepapers, case studies, tutorials, and tools
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Badge.toLowerCase()" className="text-sm">
            {resourceCategories.reduce((total, cat) => total + cat.resources.length, 0)} Resources
          </Badge>
          <Icon name="Badge.toLowerCase()" className="text-sm">
            {resourceCategories.length} Categories
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <Icon name="CardContent.toLowerCase()" className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-gray-100">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="#">
              <Icon name="CardHeader.toLowerCase()" className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <Icon name="CardTitle.toLowerCase()" className="text-lg font-semibold">{action.title}</CardTitle>
                <Icon name="CardDescription.toLowerCase()" className="text-sm text-muted-foreground">
                  {action.description}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Featured Resources */}
      <Card>
        <CardHeader>
          <Icon name="CardTitle.toLowerCase()" className="flex items-center gap-2">
            <Icon name="Star.toLowerCase()" className="h-5 w-5 text-yellow-400" />
            Featured Resources
          </CardTitle>
          <CardDescription>
            Most popular and highly-rated resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredResources.map((resource, index) => (
              <div key={index} className="p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-3">{resource.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="FileText.toLowerCase()" className="h-4 w-4" />
                        <span>{resource.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="HardDrive.toLowerCase()" className="h-4 w-4" />
                        <span>{resource.size}</span>
                      </span>
                      {resource.duration && (
                        <span className="flex items-center space-x-1">
                          <Icon name="Play.toLowerCase()" className="h-4 w-4" />
                          <span>{resource.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <Icon name="Badge.toLowerCase()" className="text-xs bg-blue-100 text-blue-800">
                    {resource.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {resource.downloads && (
                      <span className="flex items-center space-x-1">
                        <Icon name="Download.toLowerCase()" className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </span>
                    )}
                    {resource.views && (
                      <span className="flex items-center space-x-1">
                        <Icon name="Eye.toLowerCase()" className="h-4 w-4" />
                        <span>{resource.views.toLocaleString()} views</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Button.toLowerCase()" className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="Download.toLowerCase()" className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Icon name="Button.toLowerCase()" className="border border-gray-300 bg-white text-gray-700 hover:bg-b-surface">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resource Categories */}
      {resourceCategories.map((category) => (
        <Card key={category.title}>
          <CardHeader>
            <Icon name="CardTitle.toLowerCase()" className="flex items-center gap-2">
              <category.icon className="h-5 w-5" />
              {category.title}
            </CardTitle>
            <CardDescription>
              {category.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.resources.map((resource, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="FileText.toLowerCase()" className="h-3 w-3" />
                          <span>{resource.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="HardDrive.toLowerCase()" className="h-3 w-3" />
                          <span>{resource.size}</span>
                        </span>
                        {resource.duration && (
                          <span className="flex items-center space-x-1">
                            <Icon name="Play.toLowerCase()" className="h-3 w-3" />
                            <span>{resource.duration}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    {resource.featured && (
                      <Icon name="Star.toLowerCase()" className="h-4 w-4 text-yellow-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      {resource.downloads && (
                        <span className="flex items-center space-x-1">
                          <Icon name="Download.toLowerCase()" className="h-3 w-3" />
                          <span>{resource.downloads.toLocaleString()} downloads</span>
                        </span>
                      )}
                      {resource.views && (
                        <span className="flex items-center space-x-1">
                          <Icon name="Eye.toLowerCase()" className="h-3 w-3" />
                          <span>{resource.views.toLocaleString()} views</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Button.toLowerCase()" className="text-xs">
                        <Icon name="Download.toLowerCase()" className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Icon name="Button.toLowerCase()" className="text-xs border border-gray-300 bg-white text-gray-700 hover:bg-b-surface">
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Resource Formats */}
      <Card>
        <CardHeader>
          <Icon name="CardTitle.toLowerCase()" className="flex items-center gap-2">
            <Icon name="FileText.toLowerCase()" className="h-5 w-5" />
            Available Formats
          </CardTitle>
          <CardDescription>
            We provide resources in multiple formats for your convenience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <Icon name="FileText.toLowerCase()" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">PDF Documents</h3>
              <p className="text-sm text-muted-foreground">Whitepapers, guides, and reports</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Icon name="Video.toLowerCase()" className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Video Content</h3>
              <p className="text-sm text-muted-foreground">Tutorials and demonstrations</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Icon name="File.toLowerCase()" className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Templates</h3>
              <p className="text-sm text-muted-foreground">Ready-to-use templates and tools</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Icon name="Image.toLowerCase()" className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold">Infographics</h3>
              <p className="text-sm text-muted-foreground">Visual guides and charts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardHeader>
          <Icon name="CardTitle.toLowerCase()" className="flex items-center gap-2">
            <Icon name="Download.toLowerCase()" className="h-5 w-5" />
            Need Custom Resources?
          </CardTitle>
          <CardDescription>
            Can't find what you're looking for? We can create custom resources for your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Our team can create custom whitepapers, case studies, and tutorials tailored to your specific requirements
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Icon name="Button.toLowerCase()" className="bg-blue-600 hover:bg-blue-700">
                Request Custom Resource
              </Button>
              <Link href="/contact">
                <Icon name="Button.toLowerCase()" className="border border-gray-300 bg-white text-gray-700 hover:bg-b-surface">
                  Contact Our Team
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Custom resources available for enterprise customers • Turnaround time: 2-4 weeks
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 