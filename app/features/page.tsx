import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/style-reference/components/Button";
import { Icon } from "@/style-reference/components/Icon";

export const metadata: Metadata = {
  title: 'MEWAYZ Features - Complete Business Platform | E-commerce, CRM, Marketing & More',
  description: 'Discover MEWAYZ powerful features: e-commerce platform, CRM system, marketing automation, course creation, social media management, and advanced analytics. See how we help businesses scale.',
  keywords: 'business platform features, e-commerce features, CRM features, marketing automation, course creation platform, social media management, business analytics',
  openGraph: {
    title: 'MEWAYZ Features - Complete Business Platform',
    description: 'Discover MEWAYZ powerful features: e-commerce platform, CRM system, marketing automation, course creation, social media management, and advanced analytics.',
    type: 'website',
    url: 'https://mewayz.com/features',
    siteName: 'MEWAYZ',
    images: [
      {
        url: '/images/features-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MEWAYZ Platform Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEWAYZ Features - Complete Business Platform',
    description: 'Discover MEWAYZ powerful features: e-commerce platform, CRM system, marketing automation, course creation, social media management, and advanced analytics.',
    images: ['/images/features-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mewayz.com/features',
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-blue-600 block">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              MEWAYZ combines six essential business tools into one powerful platform. 
              From e-commerce to analytics, everything you need to scale your business is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Icon name="shopping-cart" className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete E-commerce Platform
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Build, launch, and scale your online store with enterprise-grade features. 
                From inventory management to customer analytics, we've got you covered.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Inventory Management</h3>
                    <p className="text-gray-600">Track stock levels, set up low stock alerts, and manage multiple warehouses with real-time synchronization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Multi-Payment Gateway Support</h3>
                    <p className="text-gray-600">Accept payments from Stripe, PayPal, Apple Pay, Google Pay, and 50+ other payment methods worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Analytics & Insights</h3>
                    <p className="text-gray-600">Understand your customers with detailed analytics, purchase patterns, and behavioral insights.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile-Optimized Storefront</h3>
                    <p className="text-gray-600">Responsive design that looks perfect on all devices with fast loading times and smooth navigation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Product Management</h4>
                  <p className="text-sm text-gray-600">Unlimited products with variants, categories, and bulk import/export</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                  <p className="text-sm text-gray-600">Automated order fulfillment, shipping calculations, and tracking</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Management</h4>
                  <p className="text-sm text-gray-600">Customer profiles, order history, and personalized recommendations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h4>
                  <p className="text-sm text-gray-600">Real-time sales data, conversion tracking, and performance metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Lead Management</h4>
                    <p className="text-sm text-gray-600">Capture, qualify, and nurture leads with automated workflows</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Sales Pipeline</h4>
                    <p className="text-sm text-gray-600">Customizable sales stages with deal tracking and forecasting</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Management</h4>
                    <p className="text-sm text-gray-600">Centralized contact database with interaction history</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Task Management</h4>
                    <p className="text-sm text-gray-600">Follow-up reminders, task assignments, and activity tracking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Icon name="users" className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Customer Relationship Management
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Build stronger relationships with your customers through intelligent lead scoring, 
                automated follow-ups, and comprehensive interaction tracking.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intelligent Lead Scoring</h3>
                    <p className="text-gray-600">Automatically score leads based on behavior, engagement, and demographic data to prioritize sales efforts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sales Pipeline Management</h3>
                    <p className="text-gray-600">Customize your sales process with drag-and-drop pipeline stages and automated deal progression.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Interaction Tracking</h3>
                    <p className="text-gray-600">Log every customer interaction from emails to phone calls with detailed notes and follow-up reminders.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Automated Follow-ups</h3>
                    <p className="text-gray-600">Set up automated email sequences and follow-up reminders to never miss an opportunity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Icon name="target" className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Marketing Automation Platform
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Automate your marketing campaigns with AI-powered personalization, 
                intelligent segmentation, and comprehensive analytics.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Personalization</h3>
                    <p className="text-gray-600">Deliver personalized content and offers based on customer behavior, preferences, and purchase history.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Marketing Automation</h3>
                    <p className="text-gray-600">Create sophisticated email campaigns with drag-and-drop builders, A/B testing, and advanced segmentation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Media Management</h3>
                    <p className="text-gray-600">Schedule posts across multiple platforms, engage with followers, and track social media performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Campaign Analytics</h3>
                    <p className="text-gray-600">Track campaign performance with detailed analytics, conversion tracking, and ROI measurement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Email Campaigns</h4>
                  <p className="text-sm text-gray-600">Drag-and-drop email builder with templates and automation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Scheduling</h4>
                  <p className="text-sm text-gray-600">Multi-platform social media scheduling and analytics</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Lead Nurturing</h4>
                  <p className="text-sm text-gray-600">Automated lead nurturing sequences and scoring</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Tracking</h4>
                  <p className="text-sm text-gray-600">Real-time campaign analytics and conversion tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Creation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Course Builder</h4>
                    <p className="text-sm text-gray-600">Drag-and-drop course creation with multimedia support</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Progress</h4>
                    <p className="text-sm text-gray-600">Track student progress and completion rates</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Certification</h4>
                    <p className="text-sm text-gray-600">Automated certificate generation and verification</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Assessments</h4>
                    <p className="text-sm text-gray-600">Interactive quizzes, tests, and assignments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Icon name="graduation-cap" className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Course Creation Platform
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Create and sell online courses with advanced learning management, 
                student progress tracking, and certification systems.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Drag-and-Drop Course Builder</h3>
                    <p className="text-gray-600">Create professional courses with our intuitive drag-and-drop builder supporting videos, documents, and interactive content.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Student Progress Tracking</h3>
                    <p className="text-gray-600">Monitor student engagement, completion rates, and performance with detailed analytics and progress reports.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Certification System</h3>
                    <p className="text-gray-600">Automatically generate and verify certificates upon course completion with customizable templates and verification codes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Interactive Assessments</h3>
                    <p className="text-gray-600">Create engaging quizzes, tests, and assignments with multiple question types and automated grading.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Icon name="bar-chart-3" className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Analytics & Insights
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get deep insights into your business performance with real-time analytics, 
                custom dashboards, and predictive insights.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                    <p className="text-gray-600">Monitor your business performance in real-time with live dashboards and instant notifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Dashboards</h3>
                    <p className="text-gray-600">Create personalized dashboards with drag-and-drop widgets to track the metrics that matter most.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Predictive Insights</h3>
                    <p className="text-gray-600">Leverage AI-powered analytics to predict trends, identify opportunities, and optimize performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check-circle" className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Get actionable recommendations to improve conversion rates, reduce costs, and increase revenue.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Metrics</h4>
                  <p className="text-sm text-gray-600">Track revenue, growth, and key performance indicators</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Analytics</h4>
                  <p className="text-sm text-gray-600">Understand customer behavior and lifetime value</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing ROI</h4>
                  <p className="text-sm text-gray-600">Measure campaign performance and return on investment</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Predictive Reports</h4>
                  <p className="text-sm text-gray-600">AI-powered forecasting and trend analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience All These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and discover how MEWAYZ can transform your business. 
            No credit card required, full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link href="/signup">
                Start Free Trial
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/demo">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 