"use client";

import { useState } from 'react';
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Tabs from "@/components/Tabs";
import DataTable from "@/components/DataTable";

export const dynamic = 'force-dynamic';

// Enterprise Features Hub - Professional Business Solutions Platform
// SEO-optimized for: enterprise software, business automation, professional platform features
const EnterpriseFeaturesPage = () => {
    const [activeTab, setActiveTab] = useState({ id: 1, name: "Security & Compliance" });

    // Professional enterprise feature categories for comprehensive business solutions
    const tabOptions = [
        { id: 1, name: "Security & Compliance" },
        { id: 2, name: "Multi-Tenant Architecture" },
        { id: 3, name: "Integration Platform" },
        { id: 4, name: "Industry Modules" },
        { id: 5, name: "Global Deployment" }
    ];

    // Enterprise security compliance standards for professional certification
    const complianceStandards = [
        { 
            id: 1, 
            name: "SOC 2 Type II", 
            status: "certified", 
            coverage: "95%",
            lastAudit: "Nov 2024",
            description: "Service Organization Control reporting for security, availability, and confidentiality"
        },
        { 
            id: 2, 
            name: "ISO 27001", 
            status: "ready", 
            coverage: "92%",
            lastAudit: "Oct 2024",
            description: "International standard for information security management systems"
        },
        { 
            id: 3, 
            name: "HIPAA", 
            status: "certified", 
            coverage: "98%",
            lastAudit: "Dec 2024",
            description: "Healthcare information privacy and security compliance"
        },
        { 
            id: 4, 
            name: "GDPR", 
            status: "certified", 
            coverage: "100%",
            lastAudit: "Jan 2025",
            description: "European Union data protection and privacy regulation"
        },
        { 
            id: 5, 
            name: "PCI DSS", 
            status: "in-progress", 
            coverage: "87%",
            lastAudit: "Dec 2024",
            description: "Payment Card Industry Data Security Standard compliance"
        }
    ];

    // Multi-tenant architecture capabilities for enterprise scalability
    const multiTenantFeatures = [
        {
            feature: "Hierarchical Organizations",
            description: "Multi-level organization structure with role-based access control",
            status: "active",
            usage: "247 organizations"
        },
        {
            feature: "Resource Isolation",
            description: "Complete data segregation between tenant organizations",
            status: "active",
            usage: "99.99% isolation"
        },
        {
            feature: "Custom Branding",
            description: "White-label solutions with custom domains and branding",
            status: "active",
            usage: "156 branded portals"
        },
        {
            feature: "Federated Authentication",
            description: "Single sign-on integration with enterprise identity providers",
            status: "active",
            usage: "34 SSO integrations"
        }
    ];

    // Industry-specific modules for vertical market specialization
    const industryModules = [
        {
            id: 1,
            industry: "Healthcare",
            features: ["HIPAA Compliance", "EHR Integration", "Telemedicine", "Patient Management"],
            compliance: "HIPAA, HITECH",
            clients: 127,
            status: "production"
        },
        {
            id: 2,
            industry: "Education",
            features: ["FERPA Compliance", "Student Information System", "Grade Management", "Learning Analytics"],
            compliance: "FERPA, COPPA",
            clients: 89,
            status: "production"
        },
        {
            id: 3,
            industry: "Financial Services",
            features: ["PCI DSS", "Fraud Detection", "Risk Management", "Regulatory Reporting"],
            compliance: "PCI DSS, SOX",
            clients: 45,
            status: "production"
        },
        {
            id: 4,
            industry: "Government",
            features: ["FedRAMP Ready", "Section 508", "Public Records Management", "Citizen Services"],
            compliance: "FedRAMP, FISMA",
            clients: 23,
            status: "beta"
        }
    ];

    // Global deployment infrastructure for worldwide enterprise operations
    const globalRegions = [
        {
            region: "North America",
            locations: ["US East", "US West", "Canada"],
            status: "active",
            latency: "< 50ms",
            compliance: "SOC 2, HIPAA"
        },
        {
            region: "Europe",
            locations: ["Ireland", "Germany", "UK"],
            status: "active",
            latency: "< 40ms",
            compliance: "GDPR, ISO 27001"
        },
        {
            region: "Asia Pacific",
            locations: ["Singapore", "Tokyo", "Sydney"],
            status: "active",
            latency: "< 60ms",
            compliance: "ISO 27001, Local Regulations"
        },
        {
            region: "Latin America",
            locations: ["Brazil", "Mexico"],
            status: "expanding",
            latency: "< 80ms",
            compliance: "LGPD, Local Data Laws"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'certified': case 'active': case 'production': return 'green';
            case 'ready': case 'beta': return 'blue';
            case 'in-progress': case 'expanding': return 'yellow';
            case 'failed': case 'inactive': return 'red';
            default: return 'gray';
        }
    };

  return (
        <Layout title="Enterprise Features - Professional Business Solutions Platform">
            <div className="mb-5">
                <div className="mb-6">
                    <h1 className="text-h2 mb-3">Enterprise-Grade Business Solutions</h1>
                    <p className="text-base text-gray-600 mb-4">
                        Comprehensive enterprise platform with advanced security, compliance, and scalability features. 
                        Built for Fortune 500 companies and growing businesses requiring professional-grade infrastructure, 
                        multi-tenant architecture, and industry-specific compliance standards.
                    </p>
                    
                    {/* Professional enterprise value propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="text-sm font-semibold text-green-800 mb-1">Bank-Level Security</div>
                            <div className="text-xs text-green-600">SOC 2, ISO 27001, HIPAA certified infrastructure</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <div className="text-sm font-semibold text-blue-800 mb-1">Global Scalability</div>
                            <div className="text-xs text-blue-600">Multi-region deployment with 99.99% uptime SLA</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <div className="text-sm font-semibold text-purple-800 mb-1">Industry Specialization</div>
                            <div className="text-xs text-purple-600">Healthcare, education, finance, government modules</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <div className="text-sm font-semibold text-orange-800 mb-1">Enterprise Integration</div>
                            <div className="text-xs text-orange-600">500+ pre-built connectors and custom APIs</div>
                  </div>
                </div>

                    <Tabs
                        items={tabOptions}
                        value={activeTab}
                        setValue={setActiveTab}
                    />
                </div>

                {/* Following style-reference HomePage two-column layout pattern */}
                <div className="flex max-lg:block">
                    <div className="col-left">
                        {/* Security & Compliance Dashboard */}
                        {activeTab.id === 1 && (
                            <>
                                <Card title="Security & Compliance Standards" className="mb-6">
                                    <div className="p-4">
                                        <DataTable
                                            data={complianceStandards}
                                            columns={[
                                                { key: 'name', title: 'Standard' },
                                                { 
                                                    key: 'status', 
                                                    title: 'Status',
                                                    render: (value: string) => (
                                                        <Badge variant={getStatusColor(value) as any}>
                                                            {value}
                                                        </Badge>
                                                    )
                                                },
                                                { 
                                                    key: 'coverage', 
                                                    title: 'Coverage',
                                                    render: (value: string) => (
                                                        <span className="font-medium text-green-600">{value}</span>
                                                    )
                                                },
                                                { key: 'lastAudit', title: 'Last Audit' }
                                            ]}
                                        />
              </div>
            </Card>

                                <Card title="Advanced Authentication Systems" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <div className="font-semibold text-blue-800 mb-2">SAML 2.0 Integration</div>
                                                <div className="text-sm text-blue-700 mb-2">
                                                    Enterprise single sign-on with identity provider federation
                                                </div>
                                                <div className="text-xs text-blue-600">
                                                    ✓ Active Directory • ✓ Okta • ✓ Azure AD • ✓ Google Workspace
                                                </div>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <div className="font-semibold text-green-800 mb-2">Risk-Based Authentication</div>
                                                <div className="text-sm text-green-700 mb-2">
                                                    Intelligent security with behavioral analysis and device fingerprinting
                                                </div>
                                                <div className="text-xs text-green-600">
                                                    ✓ Location Analysis • ✓ Device Trust • ✓ Behavioral Patterns
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-sm font-medium text-gray-700 mb-2">Security Metrics</div>
                                            <div className="grid grid-cols-3 gap-4 text-sm">
                                                <div className="text-center">
                                                    <div className="font-bold text-green-600">99.9%</div>
                                                    <div className="text-gray-600">Uptime</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-bold text-blue-600">&lt; 200ms</div>
                                                    <div className="text-gray-600">Response Time</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-bold text-purple-600">Zero</div>
                                                    <div className="text-gray-600">Security Breaches</div>
                      </div>
                      </div>
                                        </div>
                                    </div>
                                </Card>
                            </>
                        )}

                        {/* Multi-Tenant Architecture */}
                        {activeTab.id === 2 && (
                            <>
                                <Card title="Multi-Tenant Architecture Overview" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        {multiTenantFeatures.map((feature, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="font-semibold text-gray-900">{feature.feature}</div>
                                                    <Badge variant={getStatusColor(feature.status) as any} size="sm">
                                                        {feature.status}
                                                    </Badge>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">
                                                    {feature.description}
                                                </div>
                                                <div className="text-xs font-medium text-blue-600">
                                                    Current Usage: {feature.usage}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

                                <Card title="White-Label Solutions" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                            <div className="font-semibold text-purple-800 mb-2">
                                                Complete Brand Customization
                                            </div>
                                            <div className="text-sm text-purple-700 space-y-1">
                                                <div>• Custom domain management with SSL certificates</div>
                                                <div>• Full visual branding (logos, colors, themes)</div>
                                                <div>• Branded email templates and communications</div>
                                                <div>• Custom mobile app generation</div>
                                                <div>• API white-labeling for reseller programs</div>
                                            </div>
                                        </div>

                                        <Button className="btn-purple w-full">
                                            Configure White-Label Settings
                                        </Button>
                                    </div>
                                </Card>
                            </>
                        )}

                        {/* Integration Platform */}
                        {activeTab.id === 3 && (
                            <>
                                <Card title="Enterprise Integration Hub" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-blue-600">500+</div>
                                                <div className="text-sm text-blue-700">Pre-built Connectors</div>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-green-600">99.9%</div>
                                                <div className="text-sm text-green-700">Sync Reliability</div>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-purple-600">&lt; 1s</div>
                                                <div className="text-sm text-purple-700">Real-time Sync</div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-sm font-medium text-gray-700 mb-3">
                                                Popular Enterprise Integrations
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                                                <div className="bg-white p-2 rounded border text-center">Salesforce</div>
                                                <div className="bg-white p-2 rounded border text-center">Microsoft 365</div>
                                                <div className="bg-white p-2 rounded border text-center">SAP</div>
                                                <div className="bg-white p-2 rounded border text-center">Oracle</div>
                                                <div className="bg-white p-2 rounded border text-center">Workday</div>
                                                <div className="bg-white p-2 rounded border text-center">ServiceNow</div>
                                                <div className="bg-white p-2 rounded border text-center">Slack</div>
                                                <div className="bg-white p-2 rounded border text-center">Zoom</div>
                                            </div>
                                        </div>

                                        <Button className="btn-blue w-full">
                                            Browse Integration Marketplace
                                        </Button>
                                    </div>
                                </Card>

                                <Card title="API Management Platform" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div className="bg-green-50 p-3 rounded-lg text-center">
                                                <div className="font-bold text-green-600">2,847</div>
                                                <div className="text-green-700">API Calls/Day</div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                                                <div className="font-bold text-blue-600">99.99%</div>
                                                <div className="text-blue-700">API Uptime</div>
                                            </div>
                      </div>

                                        <div className="text-sm text-gray-600 space-y-1">
                                            <div>• Comprehensive API gateway with intelligent rate limiting</div>
                                            <div>• Developer portal with interactive documentation</div>
                                            <div>• Automated SDK generation for multiple languages</div>
                                            <div>• Real-time usage analytics and billing integration</div>
                      </div>
                    </div>
                                </Card>
                            </>
                        )}

                        {/* Industry Modules */}
                        {activeTab.id === 4 && (
                            <Card title="Industry-Specific Solutions" className="mb-6">
                                <div className="p-4">
                                    <DataTable
                                        data={industryModules}
                                        columns={[
                                            { key: 'industry', title: 'Industry' },
                                            { 
                                                key: 'features', 
                                                title: 'Key Features',
                                                render: (value: string[]) => (
                                                    <div className="flex flex-wrap gap-1">
                                                        {value.slice(0, 2).map((feature, idx) => (
                                                            <Badge key={idx} variant="blue" size="sm">
                                                                {feature}
                                                            </Badge>
                                                        ))}
                                                        {value.length > 2 && (
                                                            <Badge variant="gray" size="sm">
                                                                +{value.length - 2} more
                                                            </Badge>
                                                        )}
                                                    </div>
                                                )
                                            },
                                            { key: 'compliance', title: 'Compliance' },
                                            { key: 'clients', title: 'Active Clients' },
                                            { 
                                                key: 'status', 
                                                title: 'Status',
                                                render: (value: string) => (
                                                    <Badge variant={getStatusColor(value) as any}>
                                                        {value}
                                                    </Badge>
                                                )
                                            }
                                        ]}
                                    />
                  </div>
                            </Card>
                        )}

                        {/* Global Deployment */}
                        {activeTab.id === 5 && (
                            <Card title="Global Infrastructure & Deployment" className="mb-6">
                                <div className="p-4">
                                    <DataTable
                                        data={globalRegions}
                                        columns={[
                                            { key: 'region', title: 'Region' },
                                            { 
                                                key: 'locations', 
                                                title: 'Data Centers',
                                                render: (value: string[]) => (
                                                    <div className="text-sm">{value.join(', ')}</div>
                                                )
                                            },
                                            { 
                                                key: 'status', 
                                                title: 'Status',
                                                render: (value: string) => (
                                                    <Badge variant={getStatusColor(value) as any}>
                                                        {value}
                                                    </Badge>
                                                )
                                            },
                                            { key: 'latency', title: 'Avg Latency' },
                                            { key: 'compliance', title: 'Regional Compliance' }
                                        ]}
                                    />
              </div>
            </Card>
                        )}
          </div>

          <div className="col-right">
                        {/* Enterprise Metrics Overview */}
                        <Card title="Enterprise Platform Metrics" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <div className="text-xl font-bold text-green-600">99.99%</div>
                                        <div className="text-sm text-green-700">Uptime SLA</div>
                                    </div>
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="text-xl font-bold text-blue-600">2,847</div>
                                        <div className="text-sm text-blue-700">Enterprise Clients</div>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <div className="text-xl font-bold text-purple-600">156</div>
                                        <div className="text-sm text-purple-700">White-label Instances</div>
                                    </div>
                                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                                        <div className="text-xl font-bold text-orange-600">500+</div>
                                        <div className="text-sm text-orange-700">Integrations</div>
                                    </div>
                      </div>

                                <div className="border-t pt-4">
                                    <div className="text-sm font-medium text-gray-700 mb-2">Enterprise Benefits</div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div>• Dedicated account management and priority support</div>
                                        <div>• Custom SLA agreements with guaranteed uptime</div>
                                        <div>• Advanced security and compliance certifications</div>
                                        <div>• Unlimited white-label branding and customization</div>
                                        <div>• Priority feature development and roadmap input</div>
                    </div>
                  </div>
              </div>
            </Card>

                        {/* Compliance Certification Status */}
                        <Card title="Certification Status" className="mb-6">
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">SOC 2 Type II</span>
                                    </div>
                                    <span className="text-xs text-green-600">Certified</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">HIPAA</span>
                                    </div>
                                    <span className="text-xs text-green-600">Certified</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">ISO 27001</span>
                                    </div>
                                    <span className="text-xs text-blue-600">Ready</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">PCI DSS</span>
                    </div>
                                    <span className="text-xs text-yellow-600">In Progress</span>
                  </div>

                                <Button className="btn-outline-green w-full mt-4 btn-small">
                                    Download Compliance Reports
                                </Button>
              </div>
            </Card>

                        {/* Enterprise Support Tiers */}
                        <Card title="Enterprise Support" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border">
                                    <div className="text-sm font-semibold text-purple-800 mb-2">
                                        Dedicated Enterprise Support
                                    </div>
                                    <div className="text-xs text-purple-700 space-y-1">
                                        <div>• 24/7 priority support with 4-hour response SLA</div>
                                        <div>• Dedicated customer success manager</div>
                                        <div>• Direct engineering escalation channel</div>
                                        <div>• Custom training and onboarding programs</div>
                                        <div>• Priority feature development requests</div>
                                    </div>
                                </div>

                                <Button className="btn-purple w-full btn-small">
                                    Contact Enterprise Sales
                </Button>
              </div>
                        </Card>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default EnterpriseFeaturesPage; 