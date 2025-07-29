export const dynamic = 'force-dynamic';

"use client";

import { useEffect } from "react";
'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';

export default function TrainingPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Training & Certification', href: '/training' }
    ]);
    setCurrentPage('Training & Certification');
  }, [setBreadcrumbs, setCurrentPage]);

  const courseCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and get up to speed quickly',
      icon: 'play',
      color: 'bg-blue-500',
      courses: 8
    },
    {
      title: 'Advanced Features',
      description: 'Master advanced platform capabilities',
      icon: 'zap',
      color: 'bg-green-500',
      courses: 12
    },
    {
      title: 'API Development',
      description: 'Build integrations and custom solutions',
      icon: 'code',
      color: 'bg-purple-500',
      courses: 15
    },
    {
      title: 'Administration',
      description: 'Learn platform administration and management',
      icon: 'settings',
      color: 'bg-yellow-500',
      courses: 10
    },
    {
      title: 'Security',
      description: 'Security best practices and compliance',
      icon: 'shield',
      color: 'bg-red-500',
      courses: 6
    },
    {
      title: 'Troubleshooting',
      description: 'Debug and resolve common issues',
      icon: 'alert-circle',
      color: 'bg-indigo-500',
      courses: 9
    }
  ];

  const featuredCourses = [
    {
      title: 'Platform Fundamentals',
      description: 'Complete overview of core platform features',
      instructor: 'Sarah Johnson',
      duration: '4 hours',
      level: 'Beginner',
      rating: 4.8,
      students: '2,500+',
      price: 'Free',
      badge: 'Popular'
    },
    {
      title: 'API Integration Masterclass',
      description: 'Build powerful integrations with our API',
      instructor: 'Mike Chen',
      duration: '6 hours',
      level: 'Advanced',
      rating: 4.9,
      students: '1,800+',
      price: '$99',
      badge: 'Featured'
    },
    {
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security measures',
      instructor: 'Lisa Rodriguez',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: '1,200+',
      price: '$79',
      badge: 'New'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage data analytics for business insights',
      instructor: 'David Kim',
      duration: '5 hours',
      level: 'Advanced',
      rating: 4.6,
      students: '950+',
      price: '$89',
      badge: 'Popular'
    }
  ];

  const certificationPrograms = [
    {
      title: 'Platform Administrator',
      description: 'Certified platform administration and management',
      icon: 'settings',
      duration: '40 hours',
      level: 'Intermediate',
      price: '$299',
      badge: 'Most Popular'
    },
    {
      title: 'API Developer',
      description: 'Certified API development and integration',
      icon: 'code',
      duration: '50 hours',
      level: 'Advanced',
      price: '$399',
      badge: 'In Demand'
    },
    {
      title: 'Security Specialist',
      description: 'Certified security implementation and compliance',
      icon: 'shield',
      duration: '35 hours',
      level: 'Advanced',
      price: '$349',
      badge: 'New'
    }
  ];

  const learningStats = [
    {
      title: 'Total Courses',
      value: '60+',
      change: '+5',
      changeType: 'positive',
      icon: BookOpen
    },
    {
      title: 'Active Students',
      value: '15,000+',
      change: '+20%',
      changeType: 'positive',
      icon: 'users'
    },
    {
      title: 'Certified Professionals',
      value: '2,500+',
      change: '+15%',
      changeType: 'positive',
      icon: 'award'
    },
    {
      title: 'Course Completion Rate',
      value: '85%',
      change: '+5%',
      changeType: 'positive',
      icon: 'check'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <Icon name="GraduationCap.toLowerCase()" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Training & Certification
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Master our platform with comprehensive training courses and earn industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Icon name="Play.toLowerCase()" className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
                <Icon name="Award.toLowerCase()" className="mr-2 h-5 w-5" />
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Icon name="CardContent.toLowerCase()" className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${
                        stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Most popular courses chosen by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${
                      course.badge === 'Popular' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      course.badge === 'Featured' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {course.badge}
                    </Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {course.duration}
                    </span>
                  </div>
                  <Icon name="CardTitle.toLowerCase()" className="text-lg">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {course.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Level</span>
                      <Badge className={`${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {course.level}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Rating</span>
                      <span className="font-medium">{course.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Students</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Price</span>
                      <span className={`font-medium ${
                        course.price === 'Free' ? 'text-green-600 dark:text-green-400' : 'text-indigo-600 dark:text-indigo-400'
                      }`}>
                        {course.price}
                      </span>
                    </div>
                  </div>
                  <Icon name="Button.toLowerCase()" className="w-full">
                    Enroll Now <Icon name="ArrowRight.toLowerCase()" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Course Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find the perfect course for your skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {category.courses} courses
                    </span>
                    <Button variant="ghost" className="p-0 h-auto">
                      Browse <Icon name="ArrowRight.toLowerCase()" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Certification Programs
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Earn industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-red-500'} rounded-lg flex items-center justify-center`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`${
                      program.badge === 'Most Popular' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      program.badge === 'In Demand' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {program.badge}
                    </Badge>
                  </div>
                  <Icon name="CardTitle.toLowerCase()" className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Duration</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Level</span>
                      <Badge className={`${
                        program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {program.level}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Price</span>
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">{program.price}</span>
                    </div>
                  </div>
                  <Icon name="Button.toLowerCase()" className="w-full">
                    Get Certified <Icon name="ArrowRight.toLowerCase()" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Advance Your Skills?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your learning journey today and earn certifications that boost your career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Icon name="Play.toLowerCase()" className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
              <Icon name="Award.toLowerCase()" className="mr-2 h-5 w-5" />
              View Certifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 