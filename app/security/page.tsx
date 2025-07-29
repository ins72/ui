"use client";

import { useEffect } from "react";
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from '@/style-reference/components/Badge';
import Icon from "@/style-reference/components/Icon";

export const dynamic = "force-dynamic";

export default function SecurityPage() {
  const { setBreadcrumbs, setCurrentPage } = useApp();

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Security', href: '/security' }
    ]);
    setCurrentPage('Security');
  }, [setBreadcrumbs, setCurrentPage]);

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256 encryption',
      icon: 'lock',
      status: 'active'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Multi-factor authentication for enhanced account security',
      icon: 'shield',
      status: 'active'
    },
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Certified compliance with SOC 2 Type II security standards',
      icon: 'check',
      status: 'certified'
    },
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with EU General Data Protection Regulation',
      icon: 'eye',
      status: 'compliant'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Service Organization Control 2 Type II compliance',
      icon: 'check',
      date: '2024'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance',
      icon: 'check',
      date: '2024'
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance',
      icon: 'check',
      date: '2024'
    },
    {
      name: 'ISO 27001',
      status: 'In Progress',
      description: 'Information Security Management System certification',
      icon: 'clock',
      date: '2024'
    },
    {
      name: 'HIPAA',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      icon: 'check',
      date: '2024'
    },
    {
      name: 'PCI DSS',
      status: 'Compliant',
      description: 'Payment Card Industry Data Security Standard',
      icon: 'check',
      date: '2024'
    }
  ];

  return (
    <Layout title="Security & Compliance">
      <div className="center">
        <div className="col-left">
          {/* Hero Section */}
          <Card title="Enterprise Security & Compliance" className="mb-6">
            <div className="space-y-6">
              <div className="text-center">
                <Icon name="shield" className="w-16 h-16 mx-auto mb-4 text-primary-01" />
                <h1 className="text-h2 font-bold text-t-primary mb-4">
                  Enterprise-Grade Security for Modern Businesses
                </h1>
                <p className="text-body-1 text-t-secondary max-w-3xl mx-auto">
                  MEWAYZ implements comprehensive security measures and maintains industry-leading 
                  compliance certifications to protect your business data and ensure regulatory compliance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-4 border border-s-stroke2 rounded-2xl bg-b-surface2">
                    <Icon name={feature.icon} className="w-8 h-8 mx-auto mb-3 text-primary-01" />
                    <h3 className="text-button font-semibold text-t-primary mb-2">{feature.title}</h3>
                    <p className="text-caption text-t-secondary mb-3">{feature.description}</p>
                    <Badge variant="green" size="sm">{feature.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Compliance Standards */}
          <Card title="Compliance Certifications" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="p-4 border border-s-stroke2 rounded-xl bg-b-surface2">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name={standard.icon} className="w-6 h-6 text-primary-01" />
                    <Badge 
                      variant={standard.status === 'Certified' || standard.status === 'Compliant' ? 'green' : 'yellow'}
                      size="sm"
                    >
                      {standard.status}
                    </Badge>
                  </div>
                  <h3 className="text-button font-semibold text-t-primary mb-2">{standard.name}</h3>
                  <p className="text-caption text-t-secondary mb-2">{standard.description}</p>
                  <p className="text-caption text-t-tertiary">Last Updated: {standard.date}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Security Measures */}
          <Card title="Security Infrastructure" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-h6 font-semibold text-t-primary">Data Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">AES-256 encryption at rest</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">TLS 1.3 encryption in transit</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Regular security audits</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Automated backup systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-h6 font-semibold text-t-primary">Access Control</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Role-based permissions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Single sign-on (SSO)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-02" />
                    <span className="text-body-2 text-t-secondary">Session management</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Security Actions */}
          <Card title="Security Resources" className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="p-4 h-auto flex-col gap-3 bg-primary-01 text-white">
                <Icon name="file-text" className="w-6 h-6" />
                <div className="text-center">
                  <div className="text-button font-semibold">Security Whitepaper</div>
                  <div className="text-caption">Download our security guide</div>
                </div>
              </Button>
              
              <Button className="p-4 h-auto flex-col gap-3 bg-primary-02 text-white">
                <Icon name="check" className="w-6 h-6" />
                <div className="text-center">
                  <div className="text-button font-semibold">Compliance Report</div>
                  <div className="text-caption">View certifications</div>
                </div>
              </Button>
              
              <Button className="p-4 h-auto flex-col gap-3 bg-primary-04 text-white">
                <Icon name="shield" className="w-6 h-6" />
                <div className="text-center">
                  <div className="text-button font-semibold">Security Assessment</div>
                  <div className="text-caption">Request evaluation</div>
                </div>
              </Button>
              
              <Button className="p-4 h-auto flex-col gap-3 bg-primary-05 text-white">
                <Icon name="bug" className="w-6 h-6" />
                <div className="text-center">
                  <div className="text-button font-semibold">Report Issue</div>
                  <div className="text-caption">Security vulnerability</div>
                </div>
              </Button>
            </div>
          </Card>

          {/* Contact Security Team */}
          <Card title="Security Questions?" className="mb-6">
            <div className="text-center space-y-4">
              <p className="text-body-1 text-t-secondary">
                Our security team is available 24/7 to address any questions or concerns 
                about data protection and platform security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary-01 text-white">
                  <Icon name="mail" className="w-4 h-4 mr-2" />
                  Contact Security Team
                </Button>
                <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary">
                  <Icon name="download" className="w-4 h-4 mr-2" />
                  Download Security Guide
                </Button>
              </div>
              <p className="text-caption text-t-tertiary">
                Response time: &lt; 4 hours • Available 24/7
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
} 