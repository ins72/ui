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

export default function MarketingDocumentationPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Knowledge Base', href: '/knowledge-base' },
      { label: 'Marketing & Growth', href: '/knowledge-base/marketing' }
    ]);
    setCurrentPage('Marketing Documentation');
  }, [setBreadcrumbs, setCurrentPage]);

  const marketingSections = [
    {
      title: 'Marketing Strategy & Planning',
      description: 'Comprehensive strategic marketing planning, campaign development, and market positioning for sustainable growth',
      icon: 'target',
      color: 'bg-blue-500',
      articles: 15,
      topics: [
        'Strategic Brand Development & Positioning',
        'Market Research & Competitive Intelligence',
        'Campaign Planning & Execution',
        'Competitive Analysis & Differentiation',
        'Marketing Mix Optimization & ROI'
      ]
    },
    {
      title: 'Content Marketing Excellence',
      description: 'Strategic content creation, distribution, and optimization for maximum engagement and conversion',
      icon: 'file-text',
      color: 'bg-green-500',
      articles: 22,
      topics: [
        'Content Strategy & Editorial Planning',
        'Blog & Article Optimization',
        'Video Content & Multimedia',
        'Social Media Content Strategy',
        'SEO Content & Keyword Optimization'
      ]
    },
    {
      title: 'SEO & Performance Analytics',
      description: 'Advanced search engine optimization, performance tracking, and data-driven marketing insights',
      icon: 'bar-chart-3',
      color: 'bg-purple-500',
      articles: 18,
      topics: [
        'SEO Strategy & Technical Optimization',
        'Keyword Research & Competitive Analysis',
        'Analytics & Performance Reporting',
        'Conversion Rate Optimization (CRO)',
        'Data-Driven Marketing Insights'
      ]
    },
    {
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategy, community management, and influencer marketing campaigns',
      icon: 'share-2',
      color: 'bg-yellow-500',
      articles: 12,
      topics: [
        'Social Media Strategy & Planning',
        'Multi-Platform Management',
        'Community Building & Engagement',
        'Influencer Marketing & Partnerships',
        'Social Advertising & Paid Campaigns'
      ]
    },
    {
      title: 'Brand Identity & Guidelines',
      description: 'Comprehensive brand identity development, visual guidelines, and brand asset management',
      icon: 'award',
      color: 'bg-red-500',
      articles: 8,
      topics: [
        'Brand Identity & Visual Design',
        'Brand Guidelines & Standards',
        'Voice & Tone Guidelines',
        'Digital Asset Management',
        'Brand Consistency & Governance'
      ]
    }
  ];

  const featuredMarketingDocs = [
    {
      title: '2024 Marketing Strategy & Growth Framework',
      description: 'Comprehensive marketing strategy, growth framework, and campaign planning for sustainable business expansion',
      category: 'strategy',
      readTime: '20 min read',
      views: 3247,
      rating: 4.9,
      author: 'Marketing Strategy Team',
      date: '2024-01-25',
      featured: true
    },
    {
      title: 'Content Marketing ROI Optimization',
      description: 'Advanced strategies for maximizing content marketing ROI, engagement, and conversion rates',
      category: 'content',
      readTime: '18 min read',
      views: 2156,
      rating: 4.8,
      author: 'Content Marketing Team',
      date: '2024-01-23',
      featured: true
    },
    {
      title: 'SEO Performance & Analytics Guide',
      description: 'Comprehensive guide to SEO performance tracking, analytics, and optimization strategies',
      category: 'seo',
      readTime: '25 min read',
      views: 1892,
      rating: 4.7,
      author: 'SEO & Analytics Team',
      date: '2024-01-20',
      featured: true
    },
    {
      title: 'Social Media Marketing Playbook',
      description: 'Complete playbook for social media marketing success, community building, and influencer partnerships',
      category: 'social',
      readTime: '16 min read',
      views: 1678,
      rating: 4.6,
      author: 'Social Media Team',
      date: '2024-01-18',
      featured: true
    }
  ];

  const marketingMetrics = [
    {
      title: 'Marketing ROI',
      value: '450%',
      change: '+85%',
      changeType: 'positive',
      icon: 'trending-up',
      color: 'text-green-600',
      description: 'Average return on marketing investment'
    },
    {
      title: 'Content Engagement',
      value: '78%',
      change: '+12%',
      changeType: 'positive',
      icon: 'users',
      color: 'text-blue-600',
      description: 'Average content engagement rate'
    },
    {
      title: 'SEO Performance',
      value: '+156%',
      change: '+23%',
      changeType: 'positive',
      icon: 'search',
      color: 'text-purple-600',
      description: 'Organic traffic growth year-over-year'
    },
    {
      title: 'Social Reach',
      value: '2.4M',
      change: '+45%',
      changeType: 'positive',
      icon: 'share-2',
      color: 'text-yellow-600',
      description: 'Total social media reach'
    }
  ];

  const quickActions = [
    {
      title: 'Marketing Strategy Workshop',
      description: 'Interactive workshop for developing comprehensive marketing strategies and growth plans',
      icon: 'target',
      href: '/knowledge-base/marketing/strategy-workshop',
      color: 'bg-blue-500'
    },
    {
      title: 'Content Marketing Playbook',
      description: 'Complete playbook for content marketing success, creation, and distribution strategies',
      icon: 'book-open',
      href: '/knowledge-base/marketing/content-playbook',
      color: 'bg-green-500'
    },
    {
      title: 'SEO Optimization Toolkit',
      description: 'Comprehensive toolkit for SEO optimization, keyword research, and performance tracking',
      icon: 'search',
      href: '/knowledge-base/marketing/seo-toolkit',
      color: 'bg-purple-500'
    },
    {
      title: 'Social Media Strategy Guide',
      description: 'Complete guide for social media marketing success and community building',
      icon: 'share-2',
      href: '/knowledge-base/marketing/social-strategy',
      color: 'bg-yellow-500'
    }
  ];

  const getCategoryBadge = (category: string) => {
    const badges = {
      strategy: { text: 'Strategy', className: 'bg-blue-100 text-blue-800' },
      content: { text: 'Content', className: 'bg-green-100 text-green-800' },
      seo: { text: 'SEO', className: 'bg-purple-100 text-purple-800' },
      social: { text: 'Social Media', className: 'bg-yellow-100 text-yellow-800' }
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
        <title>Marketing Documentation - Strategy, Content & Growth | MEWAYZ</title>
        <meta name="description" content="Comprehensive marketing documentation covering strategy, content marketing, SEO, and social media. 450% marketing ROI, 2.4M social reach." />
        <meta name="keywords" content="marketing strategy, content marketing, SEO, social media marketing, brand guidelines, marketing analytics" />
        <meta property="og:title" content="Marketing Documentation - Strategy & Growth | MEWAYZ" />
        <meta property="og:description" content="Comprehensive marketing documentation for strategy, content, and growth. 450% marketing ROI, 78% content engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mewayz.com/knowledge-base/marketing" />
        <link rel="canonical" href="https://mewayz.com/knowledge-base/marketing" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Marketing Documentation",
            "description": "Comprehensive marketing documentation for strategy, content, and growth",
            "author": {
              "@type": "Organization",
              "name": "MEWAYZ Marketing Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MEWAYZ"
            },
            "mainEntity": {
              "@type": "WebPage",
              "name": "Marketing Documentation"
            }
          })}
        </script>
      </Head>

      <Layout title="Marketing Documentation">
        <div className="flex max-lg:block">
          <div className="col-left">
            {/* Header */}
            <Card title="Marketing & Growth Excellence">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-t-primary mb-2">Marketing & Growth</h1>
                  <p className="text-t-secondary">
                    Comprehensive marketing documentation covering strategy, content marketing, SEO, and social media for sustainable growth
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">
                  Marketing Focus
                </Badge>
              </div>
            </Card>

            {/* Marketing Metrics */}
            <Card title="Marketing Performance Metrics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketingMetrics.map((metric) => (
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
                      {metric.change} from last quarter
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card title="Marketing Resources & Tools" className="mt-6">
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

            {/* Featured Marketing Documents */}
            <Card title="Featured Marketing Resources" className="mt-6">
              <p className="text-t-secondary mb-6">
                Most important marketing resources and strategic guides
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredMarketingDocs.map((doc) => (
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
            {/* Marketing Sections */}
            <Card title="Marketing Documentation Categories">
              <div className="space-y-4">
                {marketingSections.map((section) => (
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

            {/* Marketing Tools */}
            <Card title="Marketing Intelligence Tools" className="mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="bar-chart" className="w-5 h-5 text-blue-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Marketing Analytics Dashboard</span>
                      <p className="text-xs text-t-secondary">Real-time marketing metrics</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="search" className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">SEO Performance Monitor</span>
                      <p className="text-xs text-t-secondary">Keyword tracking & rankings</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="share-2" className="w-5 h-5 text-purple-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Social Media Manager</span>
                      <p className="text-xs text-t-secondary">Multi-platform management</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="trending-up" className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Conversion Optimizer</span>
                      <p className="text-xs text-t-secondary">A/B testing & optimization</p>
                    </div>
                  </div>
                  <Icon name="arrow-right" className="w-4 h-4 text-t-tertiary" />
                </div>
              </div>
            </Card>

            {/* Marketing Templates */}
            <Card title="Marketing Templates & Frameworks" className="mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="file-text" className="w-5 h-5 text-blue-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Marketing Strategy Template</span>
                      <p className="text-xs text-t-secondary">Strategic planning framework</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="file-text" className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Content Calendar</span>
                      <p className="text-xs text-t-secondary">Content planning template</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="file-text" className="w-5 h-5 text-purple-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">SEO Audit Checklist</span>
                      <p className="text-xs text-t-secondary">Technical SEO framework</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-b-surface rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name="file-text" className="w-5 h-5 text-yellow-500" />
                    <div>
                      <span className="text-sm font-medium text-t-primary">Social Media Calendar</span>
                      <p className="text-xs text-t-secondary">Social media planning</p>
                    </div>
                  </div>
                  <Icon name="download" className="w-4 h-4 text-t-tertiary" />
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="mt-6 p-6 bg-primary rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-3">
                Accelerate Your Marketing Growth
              </h2>
              <p className="text-white/90 mb-4">
                Access comprehensive marketing resources and strategic guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-white text-primary hover:bg-gray-50">
                  <Icon name="book-open" className="mr-2 h-4 w-4" />
                  Access Marketing Resources
                </Button>
                <Button isStroke className="border-white text-white hover:bg-white/10">
                  <Icon name="trending-up" className="mr-2 h-4 w-4" />
                  Schedule Marketing Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 