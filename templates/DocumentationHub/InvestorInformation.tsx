"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, BarChart3, Users, Globe, Target, FileText, Download, Calendar, Award } from "lucide-react";

const InvestorInformation = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const businessMetrics = {
        financial: {
            totalRevenue: 1250000,
            monthlyRevenue: 89000,
            growthRate: 15.2,
            customerLTV: 2450,
            churnRate: 2.3,
            profitMargin: 68.5
        },
        operational: {
            totalUsers: 12450,
            activeUsers: 8920,
            enterpriseCustomers: 156,
            countries: 45,
            uptime: 99.99,
            supportResponse: "2.3 hours"
        },
        market: {
            marketSize: "45.2B",
            marketGrowth: 12.8,
            marketShare: 0.15,
            competitors: 8,
            partnerships: 23
        }
    };

    const financialReports = [
        {
            quarter: "Q4 2024",
            date: "2024-01-15",
            type: "Quarterly Report",
            revenue: 890000,
            growth: 15.2,
            users: 12450,
            download: "#"
        },
        {
            quarter: "Q3 2024",
            date: "2023-10-15",
            type: "Quarterly Report",
            revenue: 773000,
            growth: 12.8,
            users: 10800,
            download: "#"
        },
        {
            quarter: "Q2 2024",
            date: "2023-07-15",
            type: "Quarterly Report",
            revenue: 685000,
            growth: 18.5,
            users: 9200,
            download: "#"
        },
        {
            quarter: "Q1 2024",
            date: "2023-04-15",
            type: "Quarterly Report",
            revenue: 578000,
            growth: 22.1,
            users: 7800,
            download: "#"
        }
    ];

    const growthMetrics = [
        {
            metric: "Revenue Growth",
            current: 15.2,
            previous: 12.8,
            change: "+2.4%",
            trend: "up"
        },
        {
            metric: "User Growth",
            current: 18.9,
            previous: 15.3,
            change: "+3.6%",
            trend: "up"
        },
        {
            metric: "Enterprise Adoption",
            current: 156,
            previous: 128,
            change: "+28",
            trend: "up"
        },
        {
            metric: "Market Expansion",
            current: 45,
            previous: 38,
            change: "+7",
            trend: "up"
        }
    ];

    const competitiveAdvantages = [
        {
            advantage: "All-in-One Platform",
            description: "Comprehensive solution combining e-commerce, social media, course creation, and CRM",
            impact: "Reduces integration complexity and operational costs"
        },
        {
            advantage: "Revenue Sharing Model",
            description: "Innovative pricing structure that aligns with customer success",
            impact: "Higher customer retention and lifetime value"
        },
        {
            advantage: "Enterprise-Grade Security",
            description: "Bank-level security with SOC 2 compliance and GDPR adherence",
            impact: "Trust and confidence from enterprise customers"
        },
        {
            advantage: "Global Infrastructure",
            description: "Multi-region deployment with 99.99% uptime guarantee",
            impact: "Reliable service for international customers"
        }
    ];

    const marketOpportunity = {
        totalAddressableMarket: "45.2B",
        serviceableAddressableMarket: "8.7B",
        serviceableObtainableMarket: "1.2B",
        currentPenetration: 0.15,
        growthDrivers: [
            "Digital transformation acceleration",
            "Remote work and online education growth",
            "E-commerce expansion",
            "Social media marketing demand",
            "SaaS adoption increase"
        ]
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Investor Information</h2>
                    <p className="text-t-secondary">Financial reports, business metrics, and investor relations materials</p>
                </div>

                {/* Quick Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "overview"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <BarChart3 className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Business Overview</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Key metrics & performance</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("financial")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "financial"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Financial Reports</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Quarterly & annual reports</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("market")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "market"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Globe className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Market Analysis</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Market size & opportunity</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("strategy")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "strategy"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Target className="h-6 w-6 text-orange-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Growth Strategy</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Competitive advantages</div>
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "overview" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Business Overview</h3>
                            
                            {/* Key Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="text-3xl font-bold">${businessMetrics.financial.totalRevenue.toLocaleString()}</div>
                                            <div className="text-blue-100">Total Revenue</div>
                                        </div>
                                        <DollarSign className="h-8 w-8 text-blue-200" />
                                    </div>
                                    <div className="flex items-center">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        <span className="text-sm">+{businessMetrics.financial.growthRate}% YoY</span>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="text-3xl font-bold">{businessMetrics.operational.totalUsers.toLocaleString()}</div>
                                            <div className="text-green-100">Total Users</div>
                                        </div>
                                        <Users className="h-8 w-8 text-green-200" />
                                    </div>
                                    <div className="flex items-center">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        <span className="text-sm">+{businessMetrics.operational.activeUsers.toLocaleString()} Active</span>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="text-3xl font-bold">{businessMetrics.operational.enterpriseCustomers}</div>
                                            <div className="text-purple-100">Enterprise Customers</div>
                                        </div>
                                        <Award className="h-8 w-8 text-purple-200" />
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="h-4 w-4 mr-1" />
                                        <span className="text-sm">{businessMetrics.operational.countries} Countries</span>
                                    </div>
                                </div>
                            </div>

                            {/* Growth Metrics */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Growth Metrics</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {growthMetrics.map((metric, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">{metric.metric}</span>
                                                <TrendingUp className={`h-4 w-4 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                                            </div>
                                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.current}%</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                Previous: {metric.previous}% ({metric.change})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Operational Metrics */}
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Operational Excellence</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">System Uptime</span>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{businessMetrics.operational.uptime}%</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Industry leading reliability</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Support Response</span>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{businessMetrics.operational.supportResponse}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Average response time</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Customer LTV</span>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">${businessMetrics.financial.customerLTV}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Lifetime value</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "financial" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Reports</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Access our quarterly and annual financial reports, including detailed performance metrics and growth analysis.
                            </p>
                            <div className="space-y-4">
                                {financialReports.map((report, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                                <FileText className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">{report.quarter} {report.type}</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Published: {report.date} • Revenue: ${report.revenue.toLocaleString()} • Growth: +{report.growth}%
                                                </div>
                                            </div>
                                        </div>
                                        <button className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                                            <Download className="h-5 w-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Financial Highlights</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <h5 className="font-medium text-gray-900 dark:text-white mb-3">Revenue Growth</h5>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Q1 2024</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">$578K</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Q2 2024</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">$685K</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Q3 2024</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">$773K</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Q4 2024</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">$890K</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <h5 className="font-medium text-gray-900 dark:text-white mb-3">Key Financial Metrics</h5>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Profit Margin</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{businessMetrics.financial.profitMargin}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Customer LTV</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">${businessMetrics.financial.customerLTV}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Churn Rate</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{businessMetrics.financial.churnRate}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Monthly Revenue</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">${businessMetrics.financial.monthlyRevenue.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "market" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Market Analysis</h3>
                            
                            {/* Market Size */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Market Opportunity</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Total Addressable Market</h5>
                                        <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">${marketOpportunity.totalAddressableMarket}</div>
                                        <div className="text-sm text-blue-800 dark:text-blue-200">Global market size</div>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Serviceable Market</h5>
                                        <div className="text-2xl font-bold text-green-900 dark:text-green-100">${marketOpportunity.serviceableAddressableMarket}</div>
                                        <div className="text-sm text-green-800 dark:text-green-200">Addressable segment</div>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Obtainable Market</h5>
                                        <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">${marketOpportunity.serviceableObtainableMarket}</div>
                                        <div className="text-sm text-purple-800 dark:text-purple-200">Realistic target</div>
                                    </div>
                                </div>
                            </div>

                            {/* Growth Drivers */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Market Growth Drivers</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {marketOpportunity.growthDrivers.map((driver, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{driver}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Competitive Landscape */}
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Competitive Landscape</h4>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-3">Market Position</h5>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">Market Share</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{businessMetrics.market.marketShare}%</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">Direct Competitors</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{businessMetrics.market.competitors}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">Strategic Partnerships</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{businessMetrics.market.partnerships}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-3">Market Trends</h5>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">Market Growth</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">+{businessMetrics.market.marketGrowth}%</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">Digital Transformation</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">Accelerating</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">SaaS Adoption</span>
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">High Growth</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "strategy" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Growth Strategy & Competitive Advantages</h3>
                            
                            {/* Competitive Advantages */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Competitive Advantages</h4>
                                <div className="space-y-4">
                                    {competitiveAdvantages.map((advantage, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">{advantage.advantage}</h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{advantage.description}</p>
                                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                                <div className="text-sm text-blue-800 dark:text-blue-200">
                                                    <strong>Impact:</strong> {advantage.impact}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Growth Strategy */}
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Growth Strategy</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-green-900 dark:text-green-100 mb-3">Product Development</h5>
                                        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                                            <li>• Enhanced AI-powered features</li>
                                            <li>• Mobile app development</li>
                                            <li>• Advanced analytics capabilities</li>
                                            <li>• API ecosystem expansion</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Market Expansion</h5>
                                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                            <li>• International market entry</li>
                                            <li>• Industry-specific solutions</li>
                                            <li>• Strategic partnerships</li>
                                            <li>• Channel partner program</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-3">Customer Success</h5>
                                        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                                            <li>• Enhanced support infrastructure</li>
                                            <li>• Customer success programs</li>
                                            <li>• Training and certification</li>
                                            <li>• Community building</li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                        <h5 className="font-medium text-orange-900 dark:text-orange-100 mb-3">Revenue Optimization</h5>
                                        <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                                            <li>• Pricing strategy optimization</li>
                                            <li>• Upselling and cross-selling</li>
                                            <li>• Enterprise sales focus</li>
                                            <li>• Revenue operations automation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Information */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investor Relations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Investor Contact</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            For investor inquiries and additional information
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Contact IR Team →
                        </button>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Press Releases</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Latest company announcements and news
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            View Press Releases →
                        </button>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Investor Calendar</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                            Upcoming earnings calls and events
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            View Calendar →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorInformation; 