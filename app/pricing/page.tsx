import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/style-reference/components/Button";
import { Icon } from "@/style-reference/components/Icon";

export const metadata: Metadata = {
  title: 'MEWAYZ Pricing - Choose Your Growth Plan | Free Trial Available',
  description: 'MEWAYZ offers flexible pricing plans: Free (30% revenue share), Pro ($49/month), and Enterprise (15% revenue share). All plans include complete feature access. Start free today!',
  keywords: 'MEWAYZ pricing, business platform pricing, e-commerce pricing, CRM pricing, marketing automation pricing, course creation pricing',
  openGraph: {
    title: 'MEWAYZ Pricing - Choose Your Growth Plan',
    description: 'MEWAYZ offers flexible pricing plans: Free (30% revenue share), Pro ($49/month), and Enterprise (15% revenue share). All plans include complete feature access.',
    type: 'website',
    url: 'https://mewayz.com/pricing',
    siteName: 'MEWAYZ',
    images: [
      {
        url: '/images/pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MEWAYZ Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEWAYZ Pricing - Choose Your Growth Plan',
    description: 'MEWAYZ offers flexible pricing plans: Free (30% revenue share), Pro ($49/month), and Enterprise (15% revenue share). All plans include complete feature access.',
    images: ['/images/pricing-twitter.jpg'],
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
    canonical: 'https://mewayz.com/pricing',
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-blue-600 block">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business. All plans include our complete feature set 
              with different pricing models to match your growth stage.
            </p>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-lg">
                <div className="flex">
                  <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
                    Monthly
                  </button>
                  <button className="px-6 py-2 rounded-full text-gray-600 font-semibold">
                    Annual (Save 20%)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Plan</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600 mb-4">30% Revenue Share</p>
                <p className="text-sm text-gray-500">Perfect for startups and small businesses</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete feature access</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">E-commerce platform</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">CRM system</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Marketing automation</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Course creation platform</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Social media management</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">MEWAYZ branding</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Standard support</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Community forum access</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup">Start Free</Link>
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                No credit card required • Cancel anytime
              </p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Plan</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$49</div>
                <p className="text-gray-600 mb-4">per month</p>
                <p className="text-sm text-gray-500">Perfect for growing businesses</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Everything in Free</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom branding</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Premium support</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Phone support</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Priority feature requests</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced integrations</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom domain support</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">API access</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">White-label options</span>
                </div>
              </div>

              <Button variant="primary" className="w-full" asChild>
                <Link href="/signup?plan=pro">Start Pro Trial</Link>
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                14-day free trial • No credit card required
              </p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">15%</div>
                <p className="text-gray-600 mb-4">Revenue Share + $99/month min</p>
                <p className="text-sm text-gray-500">Perfect for large organizations</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Everything in Pro</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete white-label platform</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 priority support</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">SLA guarantees</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced security features</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom training sessions</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Multi-tenant architecture</span>
                </div>
                <div className="flex items-center">
                  <Icon name="check" className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Compliance certifications</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Custom pricing • Enterprise features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about MEWAYZ pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's the difference between the Free and Pro plans?
              </h3>
              <p className="text-gray-600">
                Both plans include all features, but the Pro plan removes MEWAYZ branding, 
                provides custom branding options, premium support, and advanced integrations. 
                The Free plan uses a revenue-sharing model (30%), while Pro is a flat monthly fee.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Can I switch between plans?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, 
                you'll be charged the prorated difference. When downgrading, changes take 
                effect at the next billing cycle.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes! The Free plan is always free with no time limit. The Pro plan includes 
                a 14-day free trial with no credit card required. You can start using all 
                features immediately.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, Mastercard, American Express), 
                PayPal, and bank transfers for Enterprise plans. All payments are processed 
                securely through Stripe.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account settings. 
                There are no cancellation fees, and you'll continue to have access until the 
                end of your current billing period.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for Pro plan subscriptions. 
                If you're not satisfied with MEWAYZ, contact our support team within 
                30 days of your first payment for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how our plans compare across all features
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">E-commerce Platform</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">CRM System</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Marketing Automation</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Course Creation</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Social Media Management</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Advanced Analytics</td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Custom Branding</td>
                    <td className="px-6 py-4 text-center"><Icon name="x" className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">White-label Platform</td>
                    <td className="px-6 py-4 text-center"><Icon name="x" className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="x" className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Dedicated Support</td>
                    <td className="px-6 py-4 text-center"><Icon name="x" className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="x" className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Icon name="check" className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already growing with MEWAYZ. 
            Start your free trial today and see the difference.
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
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 