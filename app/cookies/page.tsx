"use client";

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for basic site functionality and security",
      required: true
    },
    {
      name: "Analytics Cookies", 
      description: "Help us understand how visitors interact with our website",
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and measure campaign effectiveness",
      required: false
    },
    {
      name: "Preference Cookies",
      description: "Remember your settings and preferences for a better experience",
      required: false
    }
  ];

  return (
    <Layout title="Cookie Policy">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto">
            Learn how MEWAYZ uses cookies to improve your experience and protect your privacy
          </p>
        </div>

        <Card title="What Are Cookies?" className="mb-8">
          <p className="text-t-secondary mb-4">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better, faster, and safer experience.
          </p>
          <p className="text-t-secondary">
            We use cookies to remember your preferences, analyze site traffic, and personalize content 
            to make your experience more relevant and useful.
          </p>
        </Card>

        <Card title="Types of Cookies We Use" className="mb-8">
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="border-b border-s-stroke2 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-t-primary">{type.name}</h3>
                  {type.required && (
                    <span className="px-2 py-1 text-xs bg-primary-01 text-white rounded">
                      Required
                    </span>
                  )}
                </div>
                <p className="text-t-secondary">{type.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Managing Your Cookie Preferences" className="mb-8">
          <p className="text-t-secondary mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-t-secondary mb-6">
            <li>Use our cookie consent banner to adjust your preferences</li>
            <li>Modify your browser settings to block or delete cookies</li>
            <li>Use browser extensions that manage cookie permissions</li>
            <li>Visit your browser's help section for specific instructions</li>
          </ul>
          <p className="text-t-secondary">
            Note: Disabling certain cookies may affect website functionality and your user experience.
          </p>
        </Card>

        <Card title="Contact Us">
          <p className="text-t-secondary mb-4">
            If you have questions about our cookie policy or how we handle your data, please contact us:
          </p>
          <div className="space-y-2 text-t-primary">
            <p>📧 privacy@mewayz.com</p>
            <p>📞 1-800-MEWAYZ-1</p>
            <p>📍 123 Creator Street, Business City, BC 12345</p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-t-secondary">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </Layout>
  );
} 