"use client";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

import { useEffect } from "react";

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';
import Head from 'next/head';

export default function TechnicalDocumentationPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Development & Technical', href: '/knowledge-base/technical' }
    ]);
    setCurrentPage('Technical Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const technicalSections = [
    {
      title: 'API Documentation',
      description: 'Complete REST and GraphQL API reference with comprehensive integration guides, authentication, and best practices',
      icon: 'globe',
      color: 'bg-blue-500',
      articles: 25,
      topics: [
        'REST API Reference',
        'GraphQL API',
        'Authentication & Authorization',
        'Rate Limiting & Quotas',
        'Error Handling & Status Codes'
      ]
    },
    {
      title: 'Development Guides',
      description: 'Step-by-step development tutorials, code examples, and industry best practices for building with our platform',
      icon: 'code',
      color: 'bg-green-500',
      articles: 32,
      topics: [
        'Getting Started Tutorial',
        'Frontend Development',
        'Backend Integration',
        'Mobile Development',
        'Testing & Quality Assurance'
      ]
    },
    {
      title: 'System Architecture',
      description: 'Comprehensive overview of our microservices architecture, database design, and scalability patterns',
      icon: 'server',
      color: 'bg-purple-500',
      articles: 15,
      topics: [
        'Microservices Architecture',
        'Database Design Patterns',
        'Security Architecture',
        'Scalability & Performance',
        'High Availability Design'
      ]
    },
    {
      title: 'Deployment & DevOps',
      description: 'Production deployment strategies, CI/CD pipelines, and infrastructure management best practices',
      icon: 'rocket',
      color: 'bg-yellow-500',
      articles: 18,
      topics: [
        'CI/CD Pipeline Setup',
        'Docker & Containerization',
        'Kubernetes Orchestration',
        'Cloud Deployment (AWS, Azure, GCP)',
        'Monitoring & Observability'
      ]
    },
    {
      title: 'Troubleshooting & Support',
      description: 'Common issues, debugging techniques, performance optimization, and developer support resources',
      icon: 'help-circle',
      color: 'bg-red-500',
      articles: 12,
      topics: [
        'Common Integration Issues',
        'Debugging & Logging',
        'Performance Optimization',
        'Security Best Practices',
        'Developer Support Channels'
      ]
    }
  ];

  const featuredTechnicalDocs = [
    {
      title: 'Core 2.0 API Reference',
      description: 'Complete REST API documentation with authentication, endpoints, request/response examples, and SDK integration guides',
      category: 'api',
      readTime: '20 min read',
      views: 3456,
      rating: 4.8,
      author: 'Engineering Team',
      date: '2024-01-20',
      featured: true
    },
    {
      title: 'Getting Started with Core 2.0',
      description: 'Comprehensive quick start guide for developers new to our platform, including setup, authentication, and first API call',
      category: 'tutorial',
      readTime: '15 min read',
      views: 2891,
      rating: 4.9,
      author: 'Developer Relations',
      date: '2024-01-18',
      featured: true
    },
    {
      title: 'System Architecture Deep Dive',
      description: 'Detailed technical overview of our microservices architecture, database design, and scalability patterns',
      category: 'architecture',
      readTime: '25 min read',
      views: 1234,
      rating: 4.7,
      author: 'Architecture Team',
      date: '2024-01-15',
      featured: true
    },
    {
      title: 'Production Deployment Guide',
      description: 'Enterprise-grade deployment guidelines, security best practices, and performance optimization strategies',
      category: 'devops',
      readTime: '18 min read',
      views: 1567,
      rating: 4.6,
      author: 'DevOps Team',
      date: '2024-01-12',
      featured: true
    }
  ];

  const technicalMetrics = [
    {
      title: 'API Uptime',
      value: '99.99%',
      change: '+0.01%',
      changeType: 'positive',
      icon: 'check-circle',
      color: 'text-green-600',
      description: 'Guaranteed availability for mission-critical integrations'
    },
    {
      title: 'Average Response Time',
      value: '245ms',
      change: '-15ms',
      changeType: 'positive',
      icon: 'zap',
      color: 'text-blue-600',
      description: 'Lightning-fast API responses for optimal user experience'
    },
    {
      title: 'Active Integrations',
      value: '1,234',
      change: '+89',
      changeType: 'positive',
      icon: 'git-branch',
      color: 'text-purple-600',
      description: 'Trusted by developers worldwide'
    },
    {
      title: 'Code Coverage',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: 'shield',
      color: 'text-yellow-600',
      description: 'Comprehensive testing ensures reliability'
    }
  ];

  const quickActions = [
    {
      title: 'API Playground',
      description: 'Interactive API testing environment with real-time request/response validation',
      icon: 'terminal',
      href: '/knowledge-base/technical/api-playground',
      color: 'bg-blue-500'
    },
    {
      title: 'SDK Downloads',
      description: 'Download official SDKs and client libraries for multiple programming languages',
      icon: 'download',
      href: '/knowledge-base/technical/sdks',
      color: 'bg-green-500'
    },
    {
      title: 'Code Examples',
      description: 'Comprehensive collection of sample code, tutorials, and integration examples',
      icon: 'code',
      href: '/knowledge-base/technical/examples',
      color: 'bg-purple-500'
    },
    {
      title: 'Developer Support',
      description: 'Get expert help from our dedicated developer relations and engineering teams',
      icon: 'message-square',
      href: '/support/developer',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    const badges = {
      api: { text: 'API', className: 'bg-blue-100 text-blue-800' },
      tutorial: { text: 'Tutorial', className: 'bg-green-100 text-green-800' },
      architecture: { text: 'Architecture', className: 'bg-purple-100 text-purple-800' },
      devops: { text: 'DevOps', className: 'bg-yellow-100 text-yellow-800' }
    };
    
    const badge = badges[category as keyof typeof badges] || { text: 'General', className: 'bg-gray-100 text-gray-800' };
    
    return (
      <Badge className={badge.className}>
        {badge.text}
      </Badge>
    );
  };

  return (
    <>
      <Head>
        <title>Technical Documentation - API Reference, Development Guides & Architecture | MEWAYZ</title>
        <meta name="description" content="Comprehensive technical documentation including API reference, development guides, system architecture, and deployment best practices. Trusted by 1,234+ active integrations." />
        <meta name="keywords" content="API documentation, developer guides, technical documentation, REST API, GraphQL, SDK, integration, architecture, deployment" />
        <meta property="og:title" content="Technical Documentation - API Reference & Development Guides | MEWAYZ" />
        <meta property="og:description" content="Complete technical documentation with API reference, development guides, and architecture overview. 99.99% uptime, 245ms response time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mewayz.com/knowledge-base/technical" />
        <link rel="canonical" href="https://mewayz.com/knowledge-base/technical" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Technical Documentation",
            "description": "Comprehensive technical documentation for developers",
            "author": {
              "@type": "Organization",
              "name": "MEWAYZ Engineering Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MEWAYZ"
            },
            "mainEntity": {
              "@type": "WebPage",
              "name": "Technical Documentation"
            }
          })}
        </script>
      </Head>

      <Layout title="Technical Documentation">
        <div className="flex max-lg:block">
          <div className="col-left">
            {/* Header */}
            <Card title="Development & Technical Documentation">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-t-primary mb-2">Development & Technical</h1>
                  <p className="text-t-secondary">
                    Comprehensive technical documentation, API reference, and development guides for building with our platform
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  Developer Focus
                </Badge>
              </div>
            </Card>

            {/* Technical Metrics */}
            <Card title="Platform Performance Metrics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technicalMetrics.map((metric) => (
                  <div key={metric.title} className="p-4 bg-b-surface2 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={metric.icon} className={`h-5 w-5 ${metric.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-t-primary">{metric.value}</div>
                    <p className="text-sm font-medium text-t-secondary mb-1">{metric.title}</p>
                    <p className="text-xs text-t-tertiary mb-2">{metric.description}</p>
                    <p className={`text-xs ${
                      metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change} from last month
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card title="Developer Tools & Resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.href}>
                    <div className="p-4 bg-b-surface2 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Icon name={action.icon} className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-t-primary mb-1">{action.title}</h3>
                      <p className="text-sm text-t-secondary">{action.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Featured Technical Documents */}
            <Card title="Featured Technical Resources" className="mt-6">
              <p className="text-t-secondary mb-6">
                Most important technical resources and guides for developers
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTechnicalDocs.map((doc) => (
                  <div key={doc.title} className="p-4 border border-s-stroke rounded-lg hover:bg-b-surface cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      {getCategoryBadge(doc.category)}
                      <div className="flex items-center space-x-1 text-sm text-t-tertiary">
                        <Icon name="star" className="w-4 h-4 text-yellow-500" />
                        <span>{doc.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-t-primary mb-2">{doc.title}</h3>
                    <p className="text-t-secondary text-sm mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between text-xs text-t-tertiary">
                      <div className="flex items-center space-x-4">
                        <span>{doc.readTime}</span>
                        <span>{doc.views.toLocaleString()} views</span>
                        <span>By {doc.author}</span>
                      </div>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="col-right">
            {/* Technical Sections */}
            <Card title="Documentation Categories">
              <div className="space-y-4">
                {technicalSections.map((section) => (
                  <div key={section.title} className="p-4 bg-b-surface2 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={section.icon} className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-t-primary">{section.title}</h3>
                        <p className="text-sm text-t-secondary">{section.description}</p>
                      </div>
                      <Badge className="bg-gray-100 text-gray-800">
                        {section.articles} articles
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {section.topics.map((topic) => (
                        <div key={topic} className="flex items-center justify-between p-2 hover:bg-b-surface rounded cursor-pointer">
                          <span className="text-sm font-medium text-t-primary">{topic}</span>
                          <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                        </div>
                      ))}
                    </div>
                    
                    <Button isStroke className="w-full">
                      View All {section.title} Resources
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Developer Tools */}
            <Card title="Development Tools" className="mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="terminal" className="w-5 h-5 text-blue-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">API Playground</span>
                      <p className="text-xs text-t-secondary">Interactive testing environment</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="code" className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Code Generator</span>
                      <p className="text-xs text-t-secondary">Generate SDK code examples</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="database" className="w-5 h-5 text-purple-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Database Explorer</span>
                      <p className="text-xs text-t-secondary">Schema and query tools</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="activity" className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Performance Monitor</span>
                      <p className="text-xs text-t-secondary">Real-time metrics dashboard</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
              </div>
            </Card>

            {/* SDKs & Libraries */}
            <Card title="Official SDKs & Libraries" className="mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="code" className="w-5 h-5 text-blue-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">JavaScript SDK</span>
                      <p className="text-xs text-t-secondary">Node.js & Browser support</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="code" className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Python SDK</span>
                      <p className="text-xs text-t-secondary">Full Python 3.x support</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="code" className="w-5 h-5 text-purple-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">React Components</span>
                      <p className="text-xs text-t-secondary">Ready-to-use UI components</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="code" className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Mobile SDKs</span>
                      <p className="text-xs text-t-secondary">iOS & Android native</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="mt-6 p-6 bg-primary rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-3">
                Need Developer Support?
              </h2>
              <p className="text-white/90 mb-4">
                Get expert help from our dedicated developer relations team
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-white text-primary hover:bg-gray-50">
                  <Icon name="message-square" className="mr-2 h-4 w-4" />
                  Contact Developer Support
                </Button>
                <Button isStroke className="border-white text-white hover:bg-white/10">
                  <Icon name="book-open" className="mr-2 h-4 w-4" />
                  View All Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 