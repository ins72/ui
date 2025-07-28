'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions',
      icon: Lightbulb,
      color: 'bg-yellow-500'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services',
      icon: Award,
      color: 'bg-blue-500'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical business practices',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success',
      icon: Users,
      color: 'bg-purple-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize data management'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully deployed for Fortune 500 company'
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Released Core 2.0 with full CRUD capabilities'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve clients across 50+ countries'
    },
    {
      year: '2024',
      title: 'Enterprise Focus',
      description: 'Became the leading enterprise data management platform'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former CTO at TechCorp with 15+ years in enterprise software',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in scalable architecture and cloud infrastructure',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Product',
      bio: 'Product leader with deep expertise in user experience design',
      image: '/team/emily.jpg'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Engineering leader focused on performance and reliability',
      image: '/team/david.jpg'
    }
  ];

  const stats = [
    {
      value: '500+',
      label: 'Enterprise Clients',
      icon: Building
    },
    {
      value: '50+',
      label: 'Countries Served',
      icon: Globe
    },
    {
      value: '99.9%',
      label: 'Uptime',
      icon: Zap
    },
    {
      value: '24/7',
      label: 'Support',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future of
              <span className="text-blue-600 dark:text-blue-400"> Data Management</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're a team of passionate technologists dedicated to transforming how businesses 
              manage and interact with their data through innovative, enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-500 w-fit">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  To empower businesses with intuitive, powerful, and secure data management 
                  solutions that drive growth and innovation.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe that every organization deserves access to enterprise-grade 
                  tools that simplify complex data operations and unlock new possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 rounded-lg bg-green-500 w-fit">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  To become the global standard for enterprise data management, 
                  setting new benchmarks for performance, security, and user experience.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We envision a world where data management is seamless, intelligent, 
                  and accessible to organizations of all sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`p-3 rounded-lg ${value.color} w-fit mx-auto`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-blue-500 w-fit mx-auto">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our company's growth
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The talented team driving our mission forward
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their data management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 