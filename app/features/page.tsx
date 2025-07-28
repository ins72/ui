"use client";

import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const FeaturesPage = () => {
    const coreFeatures = [
        {
            title: "Product Management",
            description: "Complete product catalog with inventory tracking, variants, and rich media support",
            icon: "shopping-bag",
            color: "blue",
            benefits: ["Unlimited products", "Inventory tracking", "Product variants", "Rich media support"]
        },
        {
            title: "Customer Management",
            description: "Comprehensive customer database with segmentation and relationship tracking",
            icon: "users",
            color: "green",
            benefits: ["Customer profiles", "Segmentation", "Relationship tracking", "Communication history"]
        },
        {
            title: "Order Management",
            description: "End-to-end order processing from creation to fulfillment and delivery",
            icon: "shopping-cart",
            color: "purple",
            benefits: ["Order processing", "Fulfillment tracking", "Shipping integration", "Returns management"]
        },
        {
            title: "Lead Management",
            description: "Convert prospects into customers with our powerful lead management system",
            icon: "target",
            color: "orange",
            benefits: ["Lead capture", "Pipeline management", "Conversion tracking", "Follow-up automation"]
        }
    ];

    const advancedFeatures = [
        {
            title: "Marketing Automation",
            description: "Automate your marketing campaigns and nurture customer relationships",
            icon: "zap",
            color: "yellow",
            benefits: ["Email campaigns", "Drip sequences", "A/B testing", "Analytics"]
        },
        {
            title: "Analytics & Reporting",
            description: "Comprehensive analytics and reporting to drive data-informed decisions",
            icon: "bar-chart",
            color: "indigo",
            benefits: ["Real-time analytics", "Custom reports", "Data visualization", "Export capabilities"]
        },
        {
            title: "API & Integrations",
            description: "Connect with your favorite tools and build custom integrations",
            icon: "code",
            color: "pink",
            benefits: ["RESTful API", "Webhooks", "Third-party integrations", "Custom development"]
        },
        {
            title: "Security & Compliance",
            description: "Enterprise-grade security with compliance certifications and data protection",
            icon: "shield",
            color: "red",
            benefits: ["SSL encryption", "GDPR compliance", "Data backup", "Access controls"]
        }
    ];

    const technicalFeatures = [
        {
            title: "High Performance",
            description: "Built for speed and scalability to handle your growing business needs",
            icon: "zap",
            color: "green",
            details: ["99.9% uptime", "Global CDN", "Auto-scaling", "Fast response times"]
        },
        {
            title: "Mobile Responsive",
            description: "Fully responsive design that works perfectly on all devices",
            icon: "smartphone",
            color: "blue",
            details: ["Mobile-first design", "Touch-friendly", "Cross-browser", "Progressive Web App"]
        },
        {
            title: "Real-time Updates",
            description: "Live updates and notifications keep you informed of important changes",
            icon: "radio",
            color: "purple",
            details: ["Live notifications", "Real-time sync", "WebSocket support", "Push notifications"]
        },
        {
            title: "Backup & Recovery",
            description: "Automatic backups and disaster recovery to protect your data",
            icon: "database",
            color: "orange",
            details: ["Daily backups", "Point-in-time recovery", "Data encryption", "Geographic redundancy"]
        }
    ];

    const useCases = [
        {
            title: "E-commerce Businesses",
            description: "Perfect for online stores looking to manage products, orders, and customers",
            icon: "shopping-bag",
            color: "blue"
        },
        {
            title: "Service Providers",
            description: "Ideal for service-based businesses managing clients and projects",
            icon: "briefcase",
            color: "green"
        },
        {
            title: "Agencies",
            description: "Great for agencies managing multiple clients and campaigns",
            icon: "users",
            color: "purple"
        },
        {
            title: "Startups",
            description: "Perfect for startups looking to scale their operations efficiently",
            icon: "trending-up",
            color: "orange"
        }
    ];

    return (
        <Layout title="Features">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Core Features">
                        <div className="grid grid-cols-1 gap-6">
                            {coreFeatures.map((feature, index) => (
                                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                                            <Icon name={feature.icon} className={`w-6 h-6 text-${feature.color}-600`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 mb-4">{feature.description}</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {feature.benefits.map((benefit, benefitIndex) => (
                                                    <div key={benefitIndex} className="flex items-center space-x-2">
                                                        <Icon name="check" className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm text-gray-700">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Advanced Features" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {advancedFeatures.map((feature, index) => (
                                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-2 rounded-lg bg-${feature.color}-100`}>
                                            <Icon name={feature.icon} className={`w-5 h-5 text-${feature.color}-600`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                                            <ul className="space-y-1">
                                                {feature.benefits.map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="text-xs text-gray-600 flex items-center space-x-1">
                                                        <Icon name="check" className="w-3 h-3 text-green-500" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Technical Features" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {technicalFeatures.map((feature, index) => (
                                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-2 rounded-lg bg-${feature.color}-100`}>
                                            <Icon name={feature.icon} className={`w-5 h-5 text-${feature.color}-600`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                                            <ul className="space-y-1">
                                                {feature.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="text-xs text-gray-600 flex items-center space-x-1">
                                                        <Icon name="check" className="w-3 h-3 text-green-500" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Perfect For">
                        <div className="space-y-4">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-2 rounded-lg bg-${useCase.color}-100`}>
                                            <Icon name={useCase.icon} className={`w-5 h-5 text-${useCase.color}-600`} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">{useCase.title}</h3>
                                            <p className="text-sm text-gray-600">{useCase.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Feature Comparison" className="mt-4">
                        <div className="space-y-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-medium text-blue-900 mb-1">All Plans Include</h3>
                                <p className="text-sm text-blue-700">Core features available on every plan</p>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Product Management</span>
                                    <Icon name="check" className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Customer Management</span>
                                    <Icon name="check" className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Order Management</span>
                                    <Icon name="check" className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Basic Analytics</span>
                                    <Icon name="check" className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Email Support</span>
                                    <Icon name="check" className="w-4 h-4 text-green-500" />
                                </div>
                            </div>
                        </div>
                    </Card>
                    
                    <Card title="Get Started" className="mt-4">
                        <div className="space-y-3">
                            <Button href="/pricing" className="w-full">
                                View Pricing Plans
                            </Button>
                            <Button href="/auth/register" className="w-full" isStroke>
                                Start Free Trial
                            </Button>
                            <Button href="/contact" className="w-full" isStroke>
                                Contact Sales
                            </Button>
                        </div>
                        
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-600">
                                <strong>Need help choosing?</strong> Our team can help you find the perfect plan for your business needs.
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default FeaturesPage; 