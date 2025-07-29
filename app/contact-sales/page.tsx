"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Field from "@/style-reference/components/Field";

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout title="Contact Sales">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Ready to Scale Your Business?
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto">
            Get in touch with our sales team to learn how MEWAYZ can transform your creator business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card title="Contact Information">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-t-primary mb-2">Sales Team</h3>
                <p className="text-t-secondary mb-4">
                  Our enterprise sales specialists are ready to help you find the perfect solution.
                </p>
                <div className="space-y-2">
                  <p className="text-t-primary">📧 sales@mewayz.com</p>
                  <p className="text-t-primary">📞 1-800-MEWAYZ-1</p>
                  <p className="text-t-primary">🕒 Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-t-primary mb-2">Enterprise Benefits</h3>
                <ul className="space-y-2 text-t-secondary">
                  <li>• Custom pricing and revenue sharing</li>
                  <li>• White-label solutions</li>
                  <li>• Dedicated account manager</li>
                  <li>• Priority support and SLA</li>
                  <li>• Custom integrations</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Get in Touch">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Field
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />

              <Field
                label="Email Address" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />

              <Field
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
                required
              />

              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />

              <Field
                label="Message"
                name="message"
                textarea
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your needs and goals"
                rows={4}
              />

              <Button type="submit" className="w-full bg-primary-01 text-white">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
} 