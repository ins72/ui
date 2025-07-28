'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  Database,
  Globe,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 records',
        'Basic CRUD operations',
        'Email support',
        'Standard security',
        'Mobile responsive',
        'Basic analytics'
      ],
      popular: false,
      color: 'bg-gray-500'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 records',
        'Advanced CRUD operations',
        'Priority support',
        'Enhanced security',
        'API access',
        'Custom integrations',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true,
      color: 'bg-blue-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited records',
        'Full CRUD operations',
        '24/7 support',
        'Enterprise security',
        'Custom development',
        'Dedicated account manager',
        'Advanced reporting',
        'Multi-tenant support',
        'Custom integrations',
        'SLA guarantees'
      ],
      popular: false,
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      title: 'Complete CRUD Operations',
      description: 'Full Create, Read, Update, Delete functionality for all your data',
      icon: Database,
      color: 'bg-blue-500'
    },
    {
      title: 'Advanced Security',
      description: 'Bank-level security with encryption and compliance',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      title: 'Real-time Analytics',
      description: 'Live insights and reporting for better decision making',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'API Access',
      description: 'RESTful APIs for seamless integrations',
      icon: Globe,
      color: 'bg-red-500'
    },
    {
      title: 'Mobile Responsive',
      description: 'Works perfectly on all devices and screen sizes',
      icon: Zap,
      color: 'bg-indigo-500'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.'
    },
    {
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 text-sm">
              Pricing Plans
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent
              <span className="text-blue-600 dark:text-blue-400"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or surprises.
            </p>
            <div className="flex justify-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <span className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                  Monthly
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Annual (Save 20%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`p-3 rounded-lg ${plan.color} w-fit mx-auto`}>
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features included in every plan
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`p-3 rounded-lg ${feature.color} w-fit`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plan Comparison
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how our plans stack up against each other
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 dark:text-white">
                        Starter
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-blue-600 dark:text-blue-400">
                        Professional
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 dark:text-white">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Records</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">1,000</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">10,000</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">API Access</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">✓</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">✓</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Support</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">Email</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">Priority</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">24/7</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Custom Integrations</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">✓</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">✓</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Account Manager</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">-</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how Core 2.0 can transform your data management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 