"use client";

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";

export default function CompliancePage() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      status: "Certified",
      description: "Annual security audits ensuring data protection",
      icon: "shield"
    },
    {
      name: "GDPR",
      status: "Compliant", 
      description: "Full compliance with EU data protection regulations",
      icon: "check-circle"
    },
    {
      name: "CCPA",
      status: "Compliant",
      description: "California Consumer Privacy Act compliance",
      icon: "check-circle"
    },
    {
      name: "HIPAA",
      status: "Available",
      description: "Healthcare compliance for medical professionals",
      icon: "heart"
    }
  ];

  return (
    <Layout title="Compliance & Security">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Enterprise-Grade Compliance
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto">
            MEWAYZ meets the highest security and compliance standards to protect your data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} title={cert.name}>
              <div className="flex items-start gap-4">
                <Icon name={cert.icon} className="w-8 h-8 text-primary-01 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={cert.status === "Certified" ? "green" : "default"}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-t-secondary">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card title="Data Protection Measures">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="lock" className="w-5 h-5 text-green-500" />
              <span className="text-t-primary">256-bit SSL encryption for all data transmission</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="server" className="w-5 h-5 text-green-500" />
              <span className="text-t-primary">Data encryption at rest with AES-256</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="shield" className="w-5 h-5 text-green-500" />
              <span className="text-t-primary">Regular security audits and penetration testing</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="users" className="w-5 h-5 text-green-500" />
              <span className="text-t-primary">Role-based access control and multi-factor authentication</span>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 