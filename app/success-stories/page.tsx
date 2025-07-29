"use client";

import React, { useEffect } from "react";
import { useApp } from '@/contexts/AppContext';
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Success Stories', href: '/success-stories' }
    ]);
    setCurrentPage('Success Stories');
  }, [setBreadcrumbs, setCurrentPage]);

  const featuredStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      title: 'How TechCorp Increased Efficiency by 300%',
      description: 'TechCorp transformed their operations using our platform, achieving unprecedented efficiency gains.',
      results: [
        '300% increase in operational efficiency',
        '50% reduction in processing time',
        '$2M annual cost savings',
        '99.9% system uptime'
      ],
      testimonial: '"The platform has completely transformed how we operate. The efficiency gains are incredible."',
      author: 'Sarah Johnson',
      role: 'CTO',
      rating: 5
    },
    {
      company: 'Global Retail Inc.',
      industry: 'Retail',
      logo: 'GR',
      title: 'Global Retail Scales to 1M+ Customers',
      description: 'Global Retail successfully scaled their operations to serve over 1 million customers worldwide.',
      results: [
        '1M+ customers served',
        '200% increase in sales',
        '24/7 global operations',
        'Real-time inventory management'
      ],
      testimonial: '"We couldn\'t have achieved this scale without the robust platform infrastructure."',
      author: 'Michael Chen',
      role: 'VP of Operations',
      rating: 5
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      logo: 'HT',
      title: 'Revolutionizing Healthcare Data Management',
      description: 'HealthTech Innovations modernized their healthcare data management with our secure platform.',
      results: [
        'HIPAA compliant data handling',
        '90% faster data processing',
        'Enhanced patient care',
        'Reduced administrative overhead'
      ],
      testimonial: '"The security and compliance features give us complete confidence in our data management."',
      author: 'Dr. Lisa Rodriguez',
      role: 'Chief Medical Officer',
      rating: 5
    }
  ];

  const industryStories = [
    {
      industry: 'Financial Services',
      icon: TrendingUp,
      color: 'bg-green-500',
      stories: 25,
      avgImprovement: '250%'
    },
    {
      industry: 'Healthcare',
      icon: Activity,
      color: 'bg-blue-500',
      stories: 18,
      avgImprovement: '180%'
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'bg-purple-500',
      stories: 32,
      avgImprovement: '300%'
    },
    {
      industry: 'Manufacturing',
      icon: Cpu,
      color: 'bg-orange-500',
      stories: 15,
      avgImprovement: '200%'
    },
    {
      industry: 'Education',
      icon: GraduationCap,
      color: 'bg-indigo-500',
      stories: 12,
      avgImprovement: '150%'
    },
    {
      industry: 'Government',
      icon: Building,
      color: 'bg-red-500',
      stories: 8,
      avgImprovement: '120%'
    }
  ];

  const successMetrics = [
    {
      title: 'Customer Success Rate',
      value: '98%',
      description: 'of customers achieve their goals',
      icon: 'check',
      color: 'bg-green-500'
    },
    {
      title: 'Average ROI',
      value: '350%',
      description: 'return on investment within 12 months',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Implementation Time',
      value: '30 days',
      description: 'average time to full deployment',
      icon: 'clock',
      color: 'bg-purple-500'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.9/5',
      description: 'average customer satisfaction score',
      icon: 'star',
      color: 'bg-yellow-500'
    }
  ];

  const customerQuotes = [
    {
      quote: "The platform has revolutionized our business operations. We've seen incredible efficiency gains and cost savings.",
      author: 'Jennifer Smith',
      role: 'CEO, InnovateTech',
      company: 'InnovateTech'
    },
    {
      quote: "Implementation was smooth and the results exceeded our expectations. Highly recommended!",
      author: 'David Wilson',
      role: 'CTO, DataFlow Systems',
      company: 'DataFlow Systems'
    },
    {
      quote: "The customer support and platform reliability are outstanding. It's been a game-changer for us.",
      author: 'Maria Garcia',
      role: 'VP of IT, Global Solutions',
      company: 'Global Solutions'
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
                <Icon name="Star.toLowerCase()" className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover how organizations worldwide are transforming their operations and achieving remarkable results with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Icon name="Play.toLowerCase()" className="mr-2 h-5 w-5" />
                Watch Stories
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Icon name="FileText.toLowerCase()" className="mr-2 h-5 w-5" />
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Icon name="CardContent.toLowerCase()" className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {metric.description}
                      </p>
                    </div>
                    <div className={`p-3 ${metric.color} rounded-full`}>
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Real results from real customers
            </p>
          </div>

          <div className="space-y-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Icon name="CardContent.toLowerCase()" className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            {story.logo}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {story.company}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">{story.industry}</p>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {story.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {story.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="CheckCircle.toLowerCase()" className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                            <span className="text-slate-700 dark:text-slate-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                        <blockquote className="text-slate-700 dark:text-slate-300 mb-4 italic">
                          "{story.testimonial}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">
                              {story.author}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {story.role}
                            </p>
                          </div>
                          <div className="flex">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stories */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Success by Industry
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              See how different industries are achieving success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryStories.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Success Stories</span>
                      <span className="font-medium">{industry.stories}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Avg. Improvement</span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">
                        {industry.avgImprovement}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    View Stories <Icon name="ArrowRight.toLowerCase()" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quotes */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerQuotes.map((quote, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Icon name="CardContent.toLowerCase()" className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-4 italic">
                    "{quote.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {quote.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {quote.role}, {quote.company}
                    </p>
                  </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful organizations and start your transformation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <Icon name="Play.toLowerCase()" className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
              <Icon name="FileText.toLowerCase()" className="mr-2 h-5 w-5" />
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 