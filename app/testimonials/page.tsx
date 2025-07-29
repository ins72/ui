export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

"use client";

import { useEffect } from "react";
'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';
import Head from 'next/head';

export default function TestimonialsPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Testimonials', href: '/testimonials' }
    ]);
    setCurrentPage('Testimonials');
  }, [setBreadcrumbs, setCurrentPage]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      company: 'TechCorp Solutions',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
      content: 'MEWAYZ has revolutionized our enterprise operations management. The platform\'s intuitive interface, powerful analytics, and seamless integrations have increased our team productivity by 40%. The customer support team is exceptional - they truly understand our business needs and provide solutions that drive real results.',
      industry: 'Technology',
      companySize: '500-1000 employees',
      featured: true,
      results: '40% productivity increase, 60% faster decision-making'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Director of Operations',
      company: 'Global Manufacturing Inc.',
      avatar: '/avatars/michael.jpg',
      rating: 5,
      content: 'After implementing MEWAYZ across our global operations, we\'ve achieved unprecedented visibility into our supply chain and manufacturing processes. The advanced analytics capabilities have provided insights that led to a 25% reduction in operational costs and 35% improvement in delivery times. This platform has transformed how we make data-driven decisions.',
      industry: 'Manufacturing',
      companySize: '1000+ employees',
      featured: true,
      results: '25% cost reduction, 35% faster delivery times'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Vice President of Operations',
      company: 'Healthcare Plus',
      avatar: '/avatars/emily.jpg',
      rating: 5,
      content: 'In the healthcare industry, security and compliance are paramount. MEWAYZ exceeds our expectations with enterprise-grade security features, HIPAA compliance, and SOC 2 Type II certification. The platform has streamlined our patient care operations while maintaining the highest security standards. Our compliance audit scores have improved by 30%.',
      industry: 'Healthcare',
      companySize: '500-1000 employees',
      featured: false,
      results: '30% improvement in compliance scores, 50% faster patient processing'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Chief Executive Officer',
      company: 'Startup Innovations',
      avatar: '/avatars/david.jpg',
      rating: 5,
      content: 'As a rapidly growing startup, we needed a platform that could scale with our business. MEWAYZ has been the perfect solution - it grows with us and provides all the tools we need to manage our expanding operations. The white-label capabilities and custom branding options have helped us maintain our unique identity while leveraging enterprise-grade functionality.',
      industry: 'Startup',
      companySize: '50-200 employees',
      featured: false,
      results: '300% business growth supported, 80% faster time-to-market'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'IT Infrastructure Manager',
      company: 'Financial Services Group',
      avatar: '/avatars/lisa.jpg',
      rating: 5,
      content: 'The integration capabilities and API flexibility of MEWAYZ are unmatched in the market. We\'ve been able to seamlessly integrate with our existing financial systems, customizing the platform perfectly for our specific needs. The real-time data synchronization and advanced reporting features have enhanced our regulatory compliance and operational efficiency.',
      industry: 'Financial Services',
      companySize: '1000+ employees',
      featured: false,
      results: '90% faster system integration, 45% reduction in manual processes'
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Senior Project Manager',
      company: 'Construction Dynamics',
      avatar: '/avatars/robert.jpg',
      rating: 5,
      content: 'Managing complex construction projects across multiple sites has never been more efficient. MEWAYZ\'s project management features are comprehensive and intuitive. The real-time collaboration tools, resource allocation, and progress tracking have improved our project delivery times by 25% while reducing costs by 15%.',
      industry: 'Construction',
      companySize: '200-500 employees',
      featured: false,
      results: '25% faster project delivery, 15% cost reduction'
    },
    {
      id: 7,
      name: 'Jennifer Martinez',
      position: 'Chief Marketing Officer',
      company: 'Retail Solutions Co.',
      avatar: '/avatars/jennifer.jpg',
      rating: 5,
      content: 'MEWAYZ has transformed our marketing operations and customer engagement strategies. The platform\'s advanced analytics and automation capabilities have increased our marketing ROI by 180% and improved customer retention by 35%. The multi-channel campaign management and real-time performance tracking are game-changers for our business.',
      industry: 'Retail',
      companySize: '500-1000 employees',
      featured: true,
      results: '180% marketing ROI increase, 35% customer retention improvement'
    },
    {
      id: 8,
      name: 'Alex Thompson',
      position: 'Head of Customer Success',
      company: 'SaaS Enterprise',
      avatar: '/avatars/alex.jpg',
      rating: 5,
      content: 'The customer success features in MEWAYZ have revolutionized how we manage and scale our customer relationships. The automated workflows, health scoring, and proactive monitoring have helped us achieve a 95% customer satisfaction rate and 40% increase in customer lifetime value. The platform\'s scalability supports our rapid growth perfectly.',
      industry: 'SaaS',
      companySize: '200-500 employees',
      featured: false,
      results: '95% customer satisfaction, 40% increase in customer LTV'
    }
  ];

  const stats = [
    {
      title: 'Customer Satisfaction',
      value: '98.7%',
      description: 'Average customer satisfaction score across all industries',
      icon: 'smile',
      color: 'text-green-600'
    },
    {
      title: 'Customer Retention',
      value: '94.2%',
      description: 'Annual customer retention rate',
      icon: 'users',
      color: 'text-blue-600'
    },
    {
      title: 'ROI Improvement',
      value: '+180%',
      description: 'Average ROI improvement for customers',
      icon: 'trending-up',
      color: 'text-purple-600'
    },
    {
      title: 'Implementation Success',
      value: '99.1%',
      description: 'Successful platform implementation rate',
      icon: 'check-circle',
      color: 'text-orange-600'
    }
  ];

  const industries = [
    { name: 'Technology', count: 156, icon: 'cpu' },
    { name: 'Healthcare', count: 89, icon: 'heart' },
    { name: 'Financial Services', count: 124, icon: 'dollar-sign' },
    { name: 'Manufacturing', count: 78, icon: 'factory' },
    { name: 'Retail', count: 92, icon: 'shopping-bag' },
    { name: 'Construction', count: 45, icon: 'building' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon 
        key={index} 
        name={index < rating ? 'star-fill' : 'star'} 
        className="h-5 w-5 text-yellow-500" 
      />
    ));
  };

  const getIndustryBadge = (industry: string) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Financial Services': 'bg-purple-100 text-purple-800',
      'Manufacturing': 'bg-orange-100 text-orange-800',
      'Retail': 'bg-pink-100 text-pink-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Startup': 'bg-yellow-100 text-yellow-800',
      'SaaS': 'bg-indigo-100 text-indigo-800'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Head>
        <title>Customer Testimonials - Success Stories & Reviews | MEWAYZ</title>
        <meta name="description" content="Discover how MEWAYZ has transformed businesses across industries. 98.7% customer satisfaction, 180% average ROI improvement. Read real success stories from TechCorp, Global Manufacturing, Healthcare Plus, and more." />
        <meta name="keywords" content="customer testimonials, success stories, client reviews, case studies, ROI improvement, customer satisfaction, business transformation" />
        <meta property="og:title" content="Customer Testimonials - Success Stories & Reviews | MEWAYZ" />
        <meta property="og:description" content="Real success stories from MEWAYZ customers. 98.7% satisfaction rate, 180% ROI improvement, 94.2% retention rate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mewayz.com/testimonials" />
        <link rel="canonical" href="https://mewayz.com/testimonials" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Customer Testimonials",
            "description": "Customer success stories and testimonials for MEWAYZ platform",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": testimonial.name,
                    "jobTitle": testimonial.position,
                    "worksFor": {
                      "@type": "Organization",
                      "name": testimonial.company
                    }
                  },
                  "reviewBody": testimonial.content,
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": testimonial.rating,
                    "bestRating": 5
                  }
                }
              }))
            }
          })}
        </script>
      </Head>

      <Layout title="Customer Testimonials">
        <div className="space-y-8">
          {/* Header */}
          <Card title="Customer Success Stories">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-t-primary mb-4">
                Customer Success Stories
              </h1>
              <p className="text-xl text-t-secondary max-w-3xl mx-auto">
                Discover how MEWAYZ has transformed businesses across industries, driving measurable results and exceptional ROI for our customers worldwide.
              </p>
            </div>
          </Card>

          {/* Stats */}
          <Card title="Customer Success Metrics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.title} className="text-center p-4">
                  <Icon name={stat.icon} className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-t-primary mb-2">{stat.value}</div>
                  <h3 className="font-semibold text-t-primary mb-1">{stat.title}</h3>
                  <p className="text-sm text-t-secondary">{stat.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Featured Testimonials */}
          <Card title="Featured Customer Success Stories">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.filter(t => t.featured).map((testimonial) => (
                <div key={testimonial.id} className="p-6 bg-b-surface2 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-t-primary">{testimonial.name}</h3>
                      <p className="text-sm text-t-secondary">{testimonial.position}</p>
                      <p className="text-sm text-t-secondary">{testimonial.company}</p>
                      <div className="flex items-center mt-2">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-sm text-t-tertiary">5.0</span>
                      </div>
                    </div>
                    <Badge className={getIndustryBadge(testimonial.industry)}>
                      {testimonial.industry}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-t-primary mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">
                      Key Results: {testimonial.results}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* All Testimonials */}
          <Card title="Customer Testimonials by Industry">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 border border-s-stroke rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-t-primary">{testimonial.name}</h4>
                      <p className="text-xs text-t-secondary">{testimonial.position}</p>
                      <p className="text-xs text-t-secondary">{testimonial.company}</p>
                    </div>
                    <Badge className={getIndustryBadge(testimonial.industry)}>
                      {testimonial.industry}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-sm text-t-secondary mb-3 italic">
                    "{testimonial.content.substring(0, 150)}..."
                  </blockquote>
                  
                  <div className="text-xs text-t-tertiary">
                    Results: {testimonial.results}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Industry Breakdown */}
          <Card title="Customer Success Across Industries">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry) => (
                <div key={industry.name} className="text-center p-4 bg-b-surface2 rounded-lg">
                  <Icon name={industry.icon} className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-t-primary mb-1">{industry.name}</h3>
                  <p className="text-2xl font-bold text-primary">{industry.count}</p>
                  <p className="text-xs text-t-secondary">customers</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Ready to transform your business operations and achieve similar results? Start your journey with MEWAYZ today and join thousands of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-50">
                <Icon name="play" className="mr-2 h-4 w-4" />
                Start Free Trial
              </Button>
              <Button isStroke className="border-white text-white hover:bg-white/10">
                <Icon name="message-circle" className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <Card title="Trusted by Industry Leaders">
            <div className="text-center">
              <p className="text-t-secondary mb-6">
                MEWAYZ is trusted by leading companies across industries, from Fortune 500 enterprises to innovative startups.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                {['TechCorp Solutions', 'Global Manufacturing', 'Healthcare Plus', 'Financial Services Group', 'Retail Solutions', 'Construction Dynamics'].map((company) => (
                  <div key={company} className="p-4 bg-b-surface2 rounded-lg">
                    <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="building" className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-t-primary">{company}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    </>
  );
} 