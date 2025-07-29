"use client";

import React from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Icon from '@/style-reference/components/Icon';

export default function FeedbackPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Help Us Improve</h1>
          <p className="text-xl text-gray-600">Your feedback shapes the future of MEWAYZ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="message-circle" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">General Feedback</h3>
              <p className="text-gray-600">Share your thoughts about our platform</p>
              <Button variant="primary" size="lg">
                Send Feedback
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="bug" className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Report Issue</h3>
              <p className="text-gray-600">Found a bug? Let us know immediately</p>
              <Button variant="secondary" size="lg">
                Report Bug
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="lightbulb" className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Feature Request</h3>
              <p className="text-gray-600">Suggest new features for the platform</p>
              <Button variant="success" size="lg">
                Request Feature
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="star" className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Rate Us</h3>
              <p className="text-gray-600">Rate your experience with MEWAYZ</p>
              <Button variant="purple" size="lg">
                Leave Review
              </Button>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <Icon name="mail" className="w-6 h-6 text-gray-600 mx-auto" />
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-gray-600">support@mewayz.com</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="phone" className="w-6 h-6 text-gray-600 mx-auto" />
                <p className="font-medium">Phone Support</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center space-y-2">
                <Icon name="message-square" className="w-6 h-6 text-gray-600 mx-auto" />
                <p className="font-medium">Live Chat</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 