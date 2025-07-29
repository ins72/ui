"use client";

import React from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Icon from '@/style-reference/components/Icon';

export default function IntegrationHubPage() {
  const integrations = [
    { name: 'Shopify', icon: 'shopping-bag', connected: true, category: 'E-commerce' },
    { name: 'Stripe', icon: 'credit-card', connected: true, category: 'Payments' },
    { name: 'PayPal', icon: 'dollar-sign', connected: false, category: 'Payments' },
    { name: 'Mailchimp', icon: 'mail', connected: true, category: 'Email Marketing' },
    { name: 'Google Analytics', icon: 'bar-chart', connected: false, category: 'Analytics' },
    { name: 'Facebook Pixel', icon: 'facebook', connected: true, category: 'Analytics' },
    { name: 'Zapier', icon: 'zap', connected: false, category: 'Automation' },
    { name: 'Slack', icon: 'message-circle', connected: true, category: 'Communication' }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Integration Hub</h1>
          <p className="text-xl text-gray-600">Connect MEWAYZ with your favorite tools and services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-600">Connected</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">New This Week</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index}>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon name={integration.icon} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${integration.connected ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className="text-sm text-gray-600">
                      {integration.connected ? 'Connected' : 'Not Connected'}
                    </span>
                  </div>
                  <Button 
                    variant={integration.connected ? "secondary" : "primary"} 
                    size="sm"
                  >
                    {integration.connected ? 'Configure' : 'Connect'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="p-6 text-center space-y-4">
            <Icon name="plus-circle" className="w-16 h-16 text-gray-400 mx-auto" />
            <h3 className="text-xl font-semibold">Request Integration</h3>
            <p className="text-gray-600">Don't see the integration you need? Let us know!</p>
            <Button variant="primary" size="lg">
              Request New Integration
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 