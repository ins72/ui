"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Search from "@/style-reference/components/Search";

export default function DocsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick setup guides and basics",
      icon: "rocket",
      docs: [
        { title: "Quick Start Guide", description: "Get up and running in minutes", url: "/docs/quick-start" },
        { title: "Account Setup", description: "Configure your MEWAYZ account", url: "/docs/setup" },
        { title: "First Steps", description: "Create your first content", url: "/docs/first-steps" }
      ]
    },
    {
      title: "Features & Tools",
      description: "Learn about platform capabilities",
      icon: "tool",
      docs: [
        { title: "E-commerce Setup", description: "Build your online store", url: "/docs/ecommerce" },
        { title: "Content Creation", description: "Create engaging content", url: "/docs/content" },
        { title: "Social Media Management", description: "Manage all your channels", url: "/docs/social" },
        { title: "CRM & Customer Management", description: "Track and nurture leads", url: "/docs/crm" }
      ]
    },
    {
      title: "API & Integrations", 
      description: "Connect with third-party services",
      icon: "code",
      docs: [
        { title: "API Reference", description: "Complete API documentation", url: "/docs/api" },
        { title: "Webhooks", description: "Set up automated workflows", url: "/docs/webhooks" },
        { title: "Third-party Integrations", description: "Connect your tools", url: "/docs/integrations" },
        { title: "Custom Development", description: "Build custom solutions", url: "/docs/custom" }
      ]
    },
    {
      title: "Business & Analytics",
      description: "Grow your business with data",
      icon: "chart",
      docs: [
        { title: "Analytics Dashboard", description: "Track your performance", url: "/docs/analytics" },
        { title: "Revenue Management", description: "Monetize your content", url: "/docs/revenue" },
        { title: "Customer Insights", description: "Understand your audience", url: "/docs/insights" },
        { title: "Marketing Tools", description: "Promote your business", url: "/docs/marketing" }
      ]
    }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <Layout title="Documentation">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Documentation
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto mb-8">
            Everything you need to know about using MEWAYZ to grow your business
          </p>

          <div className="max-w-md mx-auto">
            <Search
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search documentation..."
              className="w-full"
            />
          </div>
        </div>

        {/* Quick Links */}
        <Card title="Popular Guides" className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-auto p-4 text-left border border-s-stroke2 bg-b-surface2 hover:bg-b-surface3">
              <div>
                <Icon name="rocket" className="w-5 h-5 text-primary-01 mb-2" />
                <div className="font-medium text-t-primary">Quick Start</div>
                <div className="text-sm text-t-secondary">Get started fast</div>
              </div>
            </Button>

            <Button className="h-auto p-4 text-left border border-s-stroke2 bg-b-surface2 hover:bg-b-surface3">
              <div>
                <Icon name="shopping-cart" className="w-5 h-5 text-primary-01 mb-2" />
                <div className="font-medium text-t-primary">E-commerce</div>
                <div className="text-sm text-t-secondary">Build your store</div>
              </div>
            </Button>

            <Button className="h-auto p-4 text-left border border-s-stroke2 bg-b-surface2 hover:bg-b-surface3">
              <div>
                <Icon name="code" className="w-5 h-5 text-primary-01 mb-2" />
                <div className="font-medium text-t-primary">API Docs</div>
                <div className="text-sm text-t-secondary">Developer guide</div>
              </div>
            </Button>

            <Button className="h-auto p-4 text-left border border-s-stroke2 bg-b-surface2 hover:bg-b-surface3">
              <div>
                <Icon name="help-circle" className="w-5 h-5 text-primary-01 mb-2" />
                <div className="font-medium text-t-primary">Support</div>
                <div className="text-sm text-t-secondary">Get help</div>
              </div>
            </Button>
          </div>
        </Card>

        {/* Documentation Categories */}
        <div className="space-y-8">
          {(searchTerm ? filteredCategories : docCategories).map((category, index) => (
            <Card key={index} title={category.title}>
              <div className="flex items-start gap-4 mb-6">
                <Icon name={category.icon} className="w-6 h-6 text-primary-01 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-t-primary mb-1">
                    {category.title}
                  </h3>
                  <p className="text-t-secondary">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.docs.map((doc, docIndex) => (
                  <div key={docIndex} className="p-4 border border-s-stroke2 rounded-lg hover:bg-b-surface2 transition-colors">
                    <h4 className="font-medium text-t-primary mb-2">{doc.title}</h4>
                    <p className="text-sm text-t-secondary mb-3">{doc.description}</p>
                    <Button 
                      className="text-sm bg-primary-01 text-white"
                      onClick={() => console.log("Navigate to:", doc.url)}
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card title="Additional Resources" className="mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="message-circle" className="w-12 h-12 text-primary-01 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-t-primary mb-2">Community Forum</h3>
              <p className="text-t-secondary mb-4">Connect with other creators and get help</p>
              <Button className="bg-primary-01 text-white">Visit Forum</Button>
            </div>

            <div className="text-center">
              <Icon name="video" className="w-12 h-12 text-primary-01 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-t-primary mb-2">Video Tutorials</h3>
              <p className="text-t-secondary mb-4">Watch step-by-step video guides</p>
              <Button className="bg-primary-01 text-white">Watch Videos</Button>
            </div>

            <div className="text-center">
              <Icon name="mail" className="w-12 h-12 text-primary-01 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-t-primary mb-2">Contact Support</h3>
              <p className="text-t-secondary mb-4">Get personalized help from our team</p>
              <Button className="bg-primary-01 text-white">Contact Us</Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 