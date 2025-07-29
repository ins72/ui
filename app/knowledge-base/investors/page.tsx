"use client";

import React from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Icon from '@/style-reference/components/Icon';

export default function InvestorsKnowledgeBasePage() {
  const documents = [
    { title: 'Annual Report 2024', type: 'PDF', date: 'March 2024', size: '2.3 MB' },
    { title: 'Q4 2023 Earnings Report', type: 'PDF', date: 'January 2024', size: '1.8 MB' },
    { title: 'Corporate Governance Guidelines', type: 'PDF', date: 'December 2023', size: '945 KB' },
    { title: 'Investor Presentation', type: 'PPTX', date: 'February 2024', size: '15.2 MB' },
    { title: 'SEC Filings Archive', type: 'ZIP', date: 'Ongoing', size: '45.6 MB' }
  ];

  const metrics = [
    { label: 'Market Cap', value: '$2.4B', change: '+12.5%', positive: true },
    { label: 'Revenue Growth', value: '145%', change: '+23.1%', positive: true },
    { label: 'Active Users', value: '2.8M', change: '+67.3%', positive: true },
    { label: 'Monthly Recurring Revenue', value: '$18.5M', change: '+34.2%', positive: true }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Investor Relations</h1>
          <p className="text-xl text-gray-600">Financial information, reports, and updates for MEWAYZ investors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                <div className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Financial Documents</h2>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name="file-text" className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">
                      <Icon name="download" className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <div className="space-y-3">
                  <Button variant="primary" size="lg" className="w-full justify-start">
                    <Icon name="trending-up" className="w-5 h-5 mr-2" />
                    Stock Performance
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full justify-start">
                    <Icon name="calendar" className="w-5 h-5 mr-2" />
                    Earnings Calendar
                  </Button>
                  <Button variant="success" size="lg" className="w-full justify-start">
                    <Icon name="users" className="w-5 h-5 mr-2" />
                    Management Team
                  </Button>
                  <Button variant="purple" size="lg" className="w-full justify-start">
                    <Icon name="shield" className="w-5 h-5 mr-2" />
                    Corporate Governance
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium">Q1 2024 Earnings Call</h3>
                    <p className="text-sm text-gray-600">April 15, 2024 at 4:00 PM EST</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-medium">Annual Shareholders Meeting</h3>
                    <p className="text-sm text-gray-600">May 20, 2024 at 10:00 AM EST</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-medium">Investor Day 2024</h3>
                    <p className="text-sm text-gray-600">June 10, 2024 at 9:00 AM EST</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6 text-center space-y-4">
                <Icon name="mail" className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-lg font-semibold">Investor Contact</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>investors@mewayz.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <Button variant="primary" size="sm">
                  Contact IR Team
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <Card>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold">Stay Updated</h2>
              <p className="text-gray-600">Subscribe to receive the latest investor updates and financial news</p>
              <Button variant="primary" size="lg">
                Subscribe to Investor Alerts
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 