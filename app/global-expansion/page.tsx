"use client";

import { useState } from 'react';
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Tabs from "@/components/Tabs";
import DataTable from "@/components/DataTable";
import Select from "@/components/Select";
import Field from "@/components/Field";

export const dynamic = 'force-dynamic';

// Global Expansion Features - Enterprise International Business Platform
// SEO-optimized for: global business expansion, international markets, multi-language platform
const GlobalExpansionPage = () => {
    const [activeTab, setActiveTab] = useState({ id: 1, name: "Market Intelligence" });
    const [selectedRegion, setSelectedRegion] = useState({ id: 1, name: "Europe" });
    const [selectedLanguage, setSelectedLanguage] = useState({ id: 1, name: "Spanish" });

    // Professional global expansion feature categories
    const tabOptions = [
        { id: 1, name: "Market Intelligence" },
        { id: 2, name: "Cultural Adaptation" },
        { id: 3, name: "Localization Hub" },
        { id: 4, name: "Global Infrastructure" },
        { id: 5, name: "Compliance Matrix" }
    ];

    // Global market regions for enterprise expansion
    const regionOptions = [
        { id: 1, name: "Europe" },
        { id: 2, name: "Asia Pacific" },
        { id: 3, name: "Latin America" },
        { id: 4, name: "Middle East & Africa" },
        { id: 5, name: "North America" }
    ];

    // Multi-language support options
    const languageOptions = [
        { id: 1, name: "Spanish" },
        { id: 2, name: "French" },
        { id: 3, name: "German" },
        { id: 4, name: "Japanese" },
        { id: 5, name: "Chinese (Simplified)" },
        { id: 6, name: "Arabic" },
        { id: 7, name: "Portuguese" },
        { id: 8, name: "Russian" },
        { id: 9, name: "Korean" },
        { id: 10, name: "Italian" },
        { id: 11, name: "Dutch" },
        { id: 12, name: "Hindi" }
    ];

    // Global market intelligence data for enterprise decision-making
    const marketData = [
        {
            id: 1,
            region: "Western Europe",
            market_size: "$2.4T",
            growth_rate: "+7.2%",
            opportunity: "High",
            barriers: "Low",
            recommended_entry: "Immediate",
            languages: ["English", "German", "French"],
            compliance: "GDPR Ready"
        },
        {
            id: 2,
            region: "Southeast Asia",
            market_size: "$1.8T",
            growth_rate: "+12.5%",
            opportunity: "Very High",
            barriers: "Medium",
            recommended_entry: "Q2 2025",
            languages: ["English", "Mandarin", "Japanese"],
            compliance: "Regional Laws"
        },
        {
            id: 3,
            region: "Latin America",
            market_size: "$1.2T",
            growth_rate: "+9.8%",
            opportunity: "High",
            barriers: "Medium",
            recommended_entry: "Q3 2025",
            languages: ["Spanish", "Portuguese"],
            compliance: "LGPD Ready"
        },
        {
            id: 4,
            region: "Middle East",
            market_size: "$0.8T",
            growth_rate: "+15.3%",
            opportunity: "Very High",
            barriers: "High",
            recommended_entry: "Q4 2025",
            languages: ["Arabic", "English"],
            compliance: "Regional Standards"
        }
    ];

    // Cultural adaptation intelligence for different markets
    const culturalInsights = [
        {
            region: "Japan",
            insights: [
                "Formal communication preferred in business contexts",
                "Long-term relationship building essential",
                "Consensus-based decision making process",
                "High attention to detail and quality expectations"
            ],
            content_preferences: [
                "Educational content highly valued",
                "Step-by-step tutorials preferred",
                "Seasonal content alignment important",
                "Mobile-first consumption patterns"
            ],
            business_customs: [
                "Exchange business cards with both hands",
                "Bow slightly when greeting",
                "Punctuality is extremely important",
                "Avoid direct confrontation or criticism"
            ]
        },
        {
            region: "Germany",
            insights: [
                "Direct and straightforward communication style",
                "Data-driven decision making approach",
                "Strong focus on efficiency and precision",
                "Privacy and data protection highly valued"
            ],
            content_preferences: [
                "Technical depth and accuracy crucial",
                "Factual and evidence-based content",
                "Detailed documentation expected",
                "Sustainability messaging important"
            ],
            business_customs: [
                "Firm handshakes and direct eye contact",
                "Use formal titles until invited otherwise",
                "Meetings start and end on time",
                "Thorough preparation expected"
            ]
        }
    ];

    // Global infrastructure deployment status
    const infrastructureRegions = [
        {
            region: "North America",
            locations: ["US East (Virginia)", "US West (California)", "Canada Central"],
            status: "active",
            latency: "< 25ms",
            capacity: "99.99%",
            compliance: ["SOC 2", "HIPAA", "PCI DSS"]
        },
        {
            region: "Europe",
            locations: ["Ireland", "Germany", "UK", "France"],
            status: "active",
            latency: "< 30ms",
            capacity: "99.99%",
            compliance: ["GDPR", "ISO 27001", "SOC 2"]
        },
        {
            region: "Asia Pacific",
            locations: ["Singapore", "Tokyo", "Sydney", "Mumbai"],
            status: "active",
            latency: "< 40ms",
            capacity: "99.95%",
            compliance: ["ISO 27001", "Regional Standards"]
        },
        {
            region: "Latin America",
            locations: ["São Paulo", "Mexico City"],
            status: "expanding",
            latency: "< 60ms",
            capacity: "99.90%",
            compliance: ["LGPD", "Local Regulations"]
        }
    ];

    // Global compliance matrix for international business
    const complianceMatrix = [
        {
            region: "European Union",
            regulations: ["GDPR", "Digital Services Act", "AI Act", "Copyright Directive"],
            status: "Compliant",
            coverage: "100%",
            last_audit: "Jan 2025"
        },
        {
            region: "United States",
            regulations: ["SOC 2", "HIPAA", "PCI DSS", "CCPA"],
            status: "Compliant",
            coverage: "100%",
            last_audit: "Dec 2024"
        },
        {
            region: "Asia Pacific",
            regulations: ["Personal Data Protection", "Cybersecurity Laws", "Content Regulations"],
            status: "Compliant",
            coverage: "95%",
            last_audit: "Nov 2024"
        },
        {
            region: "Latin America",
            regulations: ["LGPD", "Local Data Laws", "Consumer Protection"],
            status: "In Progress",
            coverage: "85%",
            last_audit: "Dec 2024"
        }
    ];

    const getOpportunityColor = (opportunity: string) => {
        switch (opportunity) {
            case 'Very High': return 'green';
            case 'High': return 'blue';
            case 'Medium': return 'yellow';
            case 'Low': return 'gray';
            default: return 'gray';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': case 'Compliant': return 'green';
            case 'expanding': case 'In Progress': return 'blue';
            case 'planned': case 'Pending': return 'yellow';
            case 'inactive': case 'Non-Compliant': return 'red';
            default: return 'gray';
        }
    };

    return (
        <Layout title="Global Expansion - International Business Platform">
            <div className="mb-5">
                <div className="mb-6">
                    <h1 className="text-h2 mb-3">Global Business Expansion Platform</h1>
                    <p className="text-base text-gray-600 mb-4">
                        Comprehensive international expansion platform with market intelligence, cultural adaptation, 
                        multi-language support, and global compliance management. Scale your business worldwide with 
                        enterprise-grade infrastructure and local market expertise.
                    </p>
                    
                    {/* Professional global expansion value propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="text-sm font-semibold text-green-800 mb-1">Market Intelligence</div>
                            <div className="text-xs text-green-600">AI-powered global market analysis and opportunity identification</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <div className="text-sm font-semibold text-blue-800 mb-1">Cultural Adaptation</div>
                            <div className="text-xs text-blue-600">Deep cultural intelligence for authentic market connection</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <div className="text-sm font-semibold text-purple-800 mb-1">Global Infrastructure</div>
                            <div className="text-xs text-purple-600">Multi-region deployment with &lt; 50ms latency worldwide</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <div className="text-sm font-semibold text-orange-800 mb-1">Compliance Matrix</div>
                            <div className="text-xs text-orange-600">Automated compliance with global regulations</div>
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
                        {/* Market Intelligence Dashboard */}
                        {activeTab.id === 1 && (
                            <>
                                <Card title="Global Market Intelligence" className="mb-6">
                                    <div className="p-4">
                                        <DataTable
                                            data={marketData}
                                            columns={[
                                                { key: 'region', title: 'Region' },
                                                { 
                                                    key: 'market_size', 
                                                    title: 'Market Size',
                                                    render: (value: string) => (
                                                        <span className="font-semibold text-green-600">{value}</span>
                                                    )
                                                },
                                                { 
                                                    key: 'growth_rate', 
                                                    title: 'Growth Rate',
                                                    render: (value: string) => (
                                                        <span className="font-medium text-blue-600">{value}</span>
                                                    )
                                                },
                                                { 
                                                    key: 'opportunity', 
                                                    title: 'Opportunity',
                                                    render: (value: string) => (
                                                        <Badge variant={getOpportunityColor(value) as any}>
                                                            {value}
                                                        </Badge>
                                                    )
                                                },
                                                { key: 'recommended_entry', title: 'Entry Timeline' },
                                                { key: 'compliance', title: 'Compliance Status' }
                                            ]}
                                        />
                                    </div>
                                </Card>

                                <Card title="Market Entry Strategy" className="mb-6">
                                    <div className="p-4 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Target Region
                                                </label>
                                                <Select
                                                    value={selectedRegion}
                                                    onChange={setSelectedRegion}
                                                    options={regionOptions}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Primary Language
                                                </label>
                                                <Select
                                                    value={selectedLanguage}
                                                    onChange={setSelectedLanguage}
                                                    options={languageOptions}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <div className="text-sm font-semibold text-blue-800 mb-2">
                                                AI-Powered Market Entry Recommendations
                                            </div>
                                            <div className="text-sm text-blue-700 space-y-1">
                                                <div>• Market entry timing optimized for {selectedRegion.name} economic cycles</div>
                                                <div>• {selectedLanguage.name} localization prioritized for maximum market penetration</div>
                                                <div>• Competitive analysis shows 73% market opportunity in target segment</div>
                                                <div>• Recommended investment: $250K-500K for {selectedRegion.name} expansion</div>
                                            </div>
                                        </div>

                                        <Button className="btn-blue w-full">
                                            Generate Detailed Market Entry Plan
                                        </Button>
                                    </div>
                                </Card>
                            </>
                        )}

                        {/* Cultural Adaptation Engine */}
                        {activeTab.id === 2 && (
                            <Card title="Cultural Intelligence Engine" className="mb-6">
                                <div className="p-4 space-y-6">
                                    {culturalInsights.map((culture, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                                            <div className="font-semibold text-gray-900 mb-4 flex items-center">
                                                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                                                {culture.region} Market Intelligence
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-700 mb-2">Cultural Insights</div>
                                                    <div className="space-y-1">
                                                        {culture.insights.map((insight, idx) => (
                                                            <div key={idx} className="text-xs text-gray-600 flex items-start">
                                                                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                <span>{insight}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-sm font-medium text-gray-700 mb-2">Content Preferences</div>
                                                    <div className="space-y-1">
                                                        {culture.content_preferences.map((pref, idx) => (
                                                            <div key={idx} className="text-xs text-gray-600 flex items-start">
                                                                <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                <span>{pref}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-sm font-medium text-gray-700 mb-2">Business Customs</div>
                                                    <div className="space-y-1">
                                                        {culture.business_customs.map((custom, idx) => (
                                                            <div key={idx} className="text-xs text-gray-600 flex items-start">
                                                                <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                <span>{custom}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border">
                                        <div className="text-sm font-semibold text-purple-800 mb-2">
                                            AI Cultural Adaptation Features
                                        </div>
                                        <div className="text-xs text-purple-700 space-y-1">
                                            <div>• Automatic content localization based on cultural preferences</div>
                                            <div>• Real-time cultural sensitivity checking for communications</div>
                                            <div>• Local partnership recommendations for market entry</div>
                                            <div>• Cultural trend prediction for content planning</div>
                                        </div>
                                    </div>

                                    <Button className="btn-purple w-full">
                                        Access Cultural Adaptation Tools
                                    </Button>
                                </div>
                            </Card>
                        )}

                        {/* Localization Hub */}
                        {activeTab.id === 3 && (
                            <Card title="Advanced Localization Hub" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                            <div className="font-semibold text-green-800 mb-2">Translation Status</div>
                                            <div className="space-y-2 text-sm text-green-700">
                                                <div className="flex justify-between">
                                                    <span>Spanish</span>
                                                    <span className="font-medium">100%</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>French</span>
                                                    <span className="font-medium">95%</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>German</span>
                                                    <span className="font-medium">90%</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Japanese</span>
                                                    <span className="font-medium">85%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <div className="font-semibold text-blue-800 mb-2">Localization Quality</div>
                                            <div className="space-y-2 text-sm text-blue-700">
                                                <div className="flex justify-between">
                                                    <span>Native Review</span>
                                                    <span className="font-medium text-green-600">✓ Complete</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Cultural Adaptation</span>
                                                    <span className="font-medium text-green-600">✓ Verified</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Technical Testing</span>
                                                    <span className="font-medium text-green-600">✓ Passed</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>User Testing</span>
                                                    <span className="font-medium text-blue-600">In Progress</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm font-medium text-gray-700 mb-3">
                                            Multi-Language Platform Features
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <div className="space-y-1">
                                                <div>✓ Real-time content translation with AI accuracy</div>
                                                <div>✓ Cultural context adaptation for marketing messages</div>
                                                <div>✓ Right-to-left (RTL) language support for Arabic/Hebrew</div>
                                                <div>✓ Currency and date formatting for regional preferences</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div>✓ Local payment method integration by region</div>
                                                <div>✓ Regional compliance and legal text automation</div>
                                                <div>✓ Time zone optimization for global communications</div>
                                                <div>✓ Voice and tone consistency across all languages</div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="btn-green w-full">
                                        Manage Translation Projects
                                    </Button>
                                </div>
                            </Card>
                        )}

                        {/* Global Infrastructure */}
                        {activeTab.id === 4 && (
                            <Card title="Global Infrastructure Deployment" className="mb-6">
                                <div className="p-4">
                                    <DataTable
                                        data={infrastructureRegions}
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
                                            { 
                                                key: 'capacity', 
                                                title: 'Capacity',
                                                render: (value: string) => (
                                                    <span className="font-medium text-green-600">{value}</span>
                                                )
                                            }
                                        ]}
                                    />
                                </div>
                            </Card>
                        )}

                        {/* Compliance Matrix */}
                        {activeTab.id === 5 && (
                            <Card title="Global Compliance Matrix" className="mb-6">
                                <div className="p-4">
                                    <DataTable
                                        data={complianceMatrix}
                                        columns={[
                                            { key: 'region', title: 'Region' },
                                            { 
                                                key: 'regulations', 
                                                title: 'Regulations',
                                                render: (value: string[]) => (
                                                    <div className="flex flex-wrap gap-1">
                                                        {value.slice(0, 3).map((reg, idx) => (
                                                            <Badge key={idx} variant="blue" size="sm">
                                                                {reg}
                                                            </Badge>
                                                        ))}
                                                        {value.length > 3 && (
                                                            <Badge variant="gray" size="sm">
                                                                +{value.length - 3} more
                                                            </Badge>
                                                        )}
                                                    </div>
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
                                            { 
                                                key: 'coverage', 
                                                title: 'Coverage',
                                                render: (value: string) => (
                                                    <span className={`font-medium ${
                                                        parseInt(value) >= 95 ? 'text-green-600' : 
                                                        parseInt(value) >= 80 ? 'text-blue-600' : 'text-orange-600'
                                                    }`}>
                                                        {value}
                                                    </span>
                                                )
                                            },
                                            { key: 'last_audit', title: 'Last Audit' }
                                        ]}
                                    />
                                </div>
                            </Card>
                        )}
                    </div>

                    <div className="col-right">
                        {/* Global Expansion Metrics */}
                        <Card title="Global Expansion Metrics" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <div className="text-xl font-bold text-green-600">47</div>
                                        <div className="text-sm text-green-700">Countries Active</div>
                                    </div>
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="text-xl font-bold text-blue-600">12</div>
                                        <div className="text-sm text-blue-700">Languages Supported</div>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <div className="text-xl font-bold text-purple-600">$8.2M</div>
                                        <div className="text-sm text-purple-700">Global Revenue</div>
                                    </div>
                                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                                        <div className="text-xl font-bold text-orange-600">&lt; 40ms</div>
                                        <div className="text-sm text-orange-700">Global Latency</div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="text-sm font-medium text-gray-700 mb-2">Expansion Roadmap</div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div>• Q1 2025: Launch in Southeast Asia (Thailand, Vietnam)</div>
                                        <div>• Q2 2025: Expand to Eastern Europe (Poland, Czech Republic)</div>
                                        <div>• Q3 2025: Enter African markets (Nigeria, South Africa)</div>
                                        <div>• Q4 2025: Launch in additional Latin American countries</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Regional Performance */}
                        <Card title="Regional Performance Insights" className="mb-6">
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Europe</span>
                                    </div>
                                    <span className="text-xs text-green-600">+47% growth</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Asia Pacific</span>
                                    </div>
                                    <span className="text-xs text-blue-600">+72% growth</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Latin America</span>
                                    </div>
                                    <span className="text-xs text-purple-600">+34% growth</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Middle East</span>
                                    </div>
                                    <span className="text-xs text-orange-600">+89% growth</span>
                                </div>

                                <Button className="btn-outline-green w-full mt-4 btn-small">
                                    View Detailed Analytics
                                </Button>
                            </div>
                        </Card>

                        {/* Quick Actions */}
                        <Card title="Global Expansion Tools" className="mb-6">
                            <div className="p-4 space-y-3">
                                <Button className="btn-outline-blue w-full btn-small">
                                    Generate Market Entry Report
                                </Button>
                                <Button className="btn-outline-green w-full btn-small">
                                    Launch Translation Project
                                </Button>
                                <Button className="btn-outline-purple w-full btn-small">
                                    Configure Regional Settings
                                </Button>
                                <Button className="btn-outline-orange w-full btn-small">
                                    Setup Compliance Monitoring
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default GlobalExpansionPage; 