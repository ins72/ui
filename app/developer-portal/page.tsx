'use client';

import React from 'react';
export const dynamic = 'force-dynamic';

import Button from "@/style-reference/components/Button";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";
import Badge from "@/style-reference/components/Badge";
import Link from 'next/link';

export default function DeveloperPortalPage() {
  const developerTools = [
    {
      title: 'API Explorer',
      description: 'Interactive API testing and documentation',
      icon: 'terminal',
      href: '/api-docs'
    },
    {
      title: 'SDK Downloads',
      description: 'Official SDKs for popular languages',
      icon: 'download',
      href: '/sdk'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples',
      icon: 'code',
      href: '/code-samples'
    },
    {
      title: 'Webhooks',
      description: 'Real-time event notifications',
      icon: 'zap',
      href: '/webhooks'
    },
    {
      title: 'Testing Tools',
      description: 'Sandbox and testing environment',
      icon: 'check',
      href: '/testing'
    },
    {
      title: 'Analytics',
      description: 'API usage and performance metrics',
      icon: 'bar-chart',
      href: '/analytics'
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started',
      description: 'Set up your first integration in 5 minutes',
      icon: 'play',
      time: '5 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Authentication',
      description: 'Learn about API keys and security',
      icon: 'shield',
      time: '10 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Webhook Setup',
      description: 'Configure real-time notifications',
      icon: 'zap',
      time: '15 min read',
      difficulty: 'Intermediate'
    },
    {
      title: 'Error Handling',
      description: 'Best practices for robust integrations',
      icon: 'alert-circle',
      time: '12 min read',
      difficulty: 'Intermediate'
    }
  ];

  const communityResources = [
    {
      title: 'Developer Forum',
      description: 'Connect with other developers',
      icon: 'users',
      members: '5,000+'
    },
    {
      title: 'GitHub Repository',
      description: 'Open source examples and tools',
      icon: 'github',
      stars: '2,500+'
    },
    {
      title: 'Stack Overflow',
      description: 'Q&A community support',
      icon: 'help-circle',
      questions: '1,200+'
    },
    {
      title: 'Discord Channel',
      description: 'Real-time developer chat',
      icon: 'message',
      members: '3,000+'
    }
  ];

  const apiStats = [
    {
      title: 'API Calls Today',
      value: '2.5M+',
      change: '+15%',
      changeType: 'positive',
      icon: 'activity'
    },
    {
      title: 'Active Developers',
      value: '1,200+',
      change: '+8%',
      changeType: 'positive',
      icon: 'users'
    },
    {
      title: 'Average Response Time',
      value: '45ms',
      change: '-12%',
      changeType: 'positive',
      icon: 'clock'
    },
    {
      title: 'Uptime',
      value: '99.99%',
      change: '+0.01%',
      changeType: 'positive',
      icon: 'check-circle'
    }
  ];

  return (
    <div className="min-h-screen bg-b-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-b-surface py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-02 rounded-full">
                <Icon name="code" className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-t-primary mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-t-secondary mb-8 max-w-3xl mx-auto">
              Everything you need to build, test, and deploy applications with our platform. Tools, documentation, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-t-light">
                <Icon name="play" className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button isStroke>
                <Icon name="book-open" className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Stats */}
      <section className="py-16 bg-b-surface2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiStats.map((stat, index) => (
              <Card key={index} title={stat.title} className="hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-t-primary">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="p-3 bg-primary-02 rounded-full">
                    <Icon name={stat.icon} className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-b-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              Developer Tools
            </h2>
            <p className="text-lg text-t-secondary">
              Everything you need to build amazing applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerTools.map((tool, index) => (
              <Card key={index} title={tool.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name={tool.icon} className="h-6 w-6 text-t-light" />
                  </div>
                  <p className="text-t-secondary mb-4">
                    {tool.description}
                  </p>
                  <Button isStroke className="p-0 h-auto">
                    Explore <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-16 bg-b-surface2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              Quick Start Guides
            </h2>
            <p className="text-lg text-t-secondary">
              Get up and running quickly with our step-by-step guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickStartGuides.map((guide, index) => (
              <Card key={index} title={guide.title} className="hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-02 rounded-lg mr-4">
                        <Icon name={guide.icon} className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-t-primary">{guide.title}</h3>
                        <p className="text-t-secondary">{guide.description}</p>
                      </div>
                    </div>
                    <Badge variant={
                      guide.difficulty === 'Beginner' ? 'default' :
                      guide.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                    }>
                      {guide.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-t-tertiary">
                      {guide.time}
                    </span>
                    <Button isStroke className="p-0 h-auto">
                      Read Guide <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-b-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              Community & Resources
            </h2>
            <p className="text-lg text-t-secondary">
              Connect with other developers and access helpful resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityResources.map((resource, index) => (
              <Card key={index} title={resource.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name={resource.icon} className="h-6 w-6 text-t-light" />
                  </div>
                  <p className="text-t-secondary mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-t-primary">
                      {resource.members || resource.stars || resource.questions}
                    </span>
                    <Button isStroke className="p-0 h-auto">
                      Join <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-t-light mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-t-light mb-8 max-w-2xl mx-auto">
            Join thousands of developers creating amazing applications with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-t-light text-primary hover:bg-b-surface">
              <Icon name="play" className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button isStroke className="border-t-light text-t-light hover:bg-primary-02">
              <Icon name="help-circle" className="mr-2 h-5 w-5" />
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 