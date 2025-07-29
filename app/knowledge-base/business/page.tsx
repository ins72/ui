"use client";

import React from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Icon from '@/style-reference/components/Icon';

export default function BusinessKnowledgeBasePage() {
  const articles = [
    { title: 'Getting Started with Business Plans', category: 'Setup', readTime: '5 min' },
    { title: 'Setting Up Your Payment Gateway', category: 'Payments', readTime: '8 min' },
    { title: 'Managing Your Team and Permissions', category: 'Team Management', readTime: '6 min' },
    { title: 'Analytics and Reporting Guide', category: 'Analytics', readTime: '10 min' },
    { title: 'White-Label Configuration', category: 'Enterprise', readTime: '12 min' },
    { title: 'API Integration Best Practices', category: 'Development', readTime: '15 min' }
  ];

  const categories = [
    { name: 'Getting Started', count: 12, icon: 'play-circle' },
    { name: 'Setup & Configuration', count: 18, icon: 'settings' },
    { name: 'Team Management', count: 8, icon: 'users' },
    { name: 'Analytics', count: 15, icon: 'bar-chart' },
    { name: 'Enterprise Features', count: 6, icon: 'shield' },
    { name: 'API & Development', count: 10, icon: 'code' }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Business Knowledge Base</h1>
          <p className="text-xl text-gray-600">Everything you need to know about managing your business on MEWAYZ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Popular Articles</h2>
                <div className="space-y-4">
                  {articles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="space-y-1">
                        <h3 className="font-medium">{article.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.readTime} read</span>
                        </div>
                      </div>
                      <Icon name="chevron-right" className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="primary" size="lg" className="justify-start">
                    <Icon name="book-open" className="w-5 h-5 mr-2" />
                    Browse All Articles
                  </Button>
                  <Button variant="secondary" size="lg" className="justify-start">
                    <Icon name="search" className="w-5 h-5 mr-2" />
                    Search Knowledge Base
                  </Button>
                  <Button variant="success" size="lg" className="justify-start">
                    <Icon name="message-circle" className="w-5 h-5 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="purple" size="lg" className="justify-start">
                    <Icon name="video" className="w-5 h-5 mr-2" />
                    Watch Tutorials
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Icon name={category.icon} className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center space-y-4">
                <Icon name="headphones" className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-lg font-semibold">Need Personal Help?</h3>
                <p className="text-sm text-gray-600">Our business experts are here to help you succeed</p>
                <Button variant="primary" size="sm">
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
} 