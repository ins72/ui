'use client';

import React from 'react';
export const dynamic = 'force-dynamic';

import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';

export default function ApiDocsPage() {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve all users with pagination and filtering',
      auth: 'Bearer Token',
      rateLimit: '1000 requests/hour'
    },
    {
      method: 'POST',
      path: '/api/v1/users',
      description: 'Create a new user account',
      auth: 'Bearer Token',
      rateLimit: '100 requests/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/users/{id}',
      description: 'Get user details by ID',
      auth: 'Bearer Token',
      rateLimit: '1000 requests/hour'
    },
    {
      method: 'PUT',
      path: '/api/v1/users/{id}',
      description: 'Update user information',
      auth: 'Bearer Token',
      rateLimit: '500 requests/hour'
    },
    {
      method: 'DELETE',
      path: '/api/v1/users/{id}',
      description: 'Delete user account',
      auth: 'Bearer Token',
      rateLimit: '100 requests/hour'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get system analytics and metrics',
      auth: 'Bearer Token',
      rateLimit: '2000 requests/hour'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Fetch Users',
      code: `const response = await fetch('/api/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const users = await response.json();`
    },
    {
      language: 'Python',
      title: 'Create User',
      code: `import requests

response = requests.post(
    'https://api.example.com/v1/users',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'John Doe',
        'email': 'john@example.com'
    }
)
user = response.json()`
    },
    {
      language: 'cURL',
      title: 'Update User',
      code: `curl -X PUT https://api.example.com/v1/users/123 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }'`
    }
  ];

  const sdkFeatures = [
    {
      title: 'Authentication',
      description: 'Secure API key management and token handling',
      icon: 'shield',
      color: 'bg-primary'
    },
    {
      title: 'Rate Limiting',
      description: 'Built-in rate limiting and retry logic',
      icon: 'clock',
      color: 'bg-green-500'
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error handling and logging',
      icon: 'alert-circle',
      color: 'bg-red-500'
    },
    {
      title: 'TypeScript Support',
      description: 'Full TypeScript definitions and IntelliSense',
      icon: 'code',
      color: 'bg-purple-500'
    },
    {
      title: 'Webhooks',
      description: 'Real-time event notifications via webhooks',
      icon: 'zap',
      color: 'bg-yellow-500'
    },
    {
      title: 'Testing',
      description: 'Built-in testing utilities and mocks',
      icon: 'check-circle',
      color: 'bg-indigo-500'
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-b-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-b-surface py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Icon name="code" className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-t-primary mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-t-secondary mb-8 max-w-3xl mx-auto">
              Comprehensive API reference, SDKs, and integration guides to help you build powerful applications with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="book-open" className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button isStroke className="border-s-stroke">
                <Icon name="download" className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-b-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Quick Start" className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <Icon name="terminal" className="mr-2 h-5 w-5 text-primary" />
              </div>
              <p className="text-t-secondary mb-4">
                Get up and running with our API in minutes
              </p>
              <Button isStroke className="p-0 h-auto">
                Learn More <Icon name="arrow-right" className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card title="Authentication" className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <Icon name="key" className="mr-2 h-5 w-5 text-green-600" />
              </div>
              <p className="text-t-secondary mb-4">
                Learn about API keys, tokens, and security
              </p>
              <Button isStroke className="p-0 h-auto">
                Learn More <Icon name="arrow-right" className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card title="SDKs & Libraries" className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <Icon name="code" className="mr-2 h-5 w-5 text-purple-600" />
              </div>
              <p className="text-t-secondary mb-4">
                Official SDKs for popular programming languages
              </p>
              <Button isStroke className="p-0 h-auto">
                Learn More <Icon name="arrow-right" className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-b-surface2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              API Endpoints
            </h2>
            <p className="text-lg text-t-secondary">
              Complete reference of all available API endpoints
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} title="" className="hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className={`px-3 py-1 text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono bg-b-surface px-2 py-1 rounded">
                      {endpoint.path}
                    </code>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-t-tertiary">
                    <span>{endpoint.auth}</span>
                    <span>{endpoint.rateLimit}</span>
                  </div>
                </div>
                <p className="mt-3 text-t-secondary">
                  {endpoint.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-b-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              Code Examples
            </h2>
            <p className="text-lg text-t-secondary">
              Ready-to-use code snippets in multiple languages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <Card key={index} title={example.language} className="hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center">
                    <Icon name="code" className="mr-2 h-5 w-5 text-primary" />
                    {example.language}
                  </span>
                  <Button isStroke className="h-8 w-8 p-0">
                    <Icon name="copy" className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-t-secondary mb-4">{example.title}</p>
                <pre className="bg-b-surface2 p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-t-primary">
                    {example.code}
                  </code>
                </pre>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Features */}
      <section className="py-16 bg-b-surface2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-t-primary mb-4">
              SDK Features
            </h2>
            <p className="text-lg text-t-secondary">
              Everything you need to integrate with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkFeatures.map((feature, index) => (
              <Card key={index} title={feature.title} className="hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <p className="text-t-secondary">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-03 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with our API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-50">
              <Icon name="play" className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button isStroke className="border-white text-white hover:bg-primary/90">
              <Icon name="help-circle" className="mr-2 h-5 w-5" />
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 