import { Metadata } from "next";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
    title: "Help Center - Comprehensive Support & Documentation | MEWAYZ",
    description: "Find answers to common questions, browse our knowledge base, access video tutorials, and get expert help. Comprehensive support resources for MEWAYZ users.",
    keywords: "help center, documentation, tutorials, support, knowledge base, FAQ, troubleshooting, guides",
    openGraph: {
        title: "Help Center - Expert Support & Resources | MEWAYZ",
        description: "Access comprehensive help resources including tutorials, documentation, and expert support for your MEWAYZ platform success.",
        type: "website",
        siteName: "MEWAYZ"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function HelpPage() {
    const helpCategories = [
        {
            id: "getting-started",
            title: "Getting Started",
            description: "Everything you need to know to begin your MEWAYZ journey",
            icon: "🚀",
            articles: 12,
            popular: true,
            articles_list: [
                "Setting up your first project",
                "Understanding the dashboard",
                "Creating your profile",
                "Basic navigation guide"
            ]
        },
        {
            id: "account-billing",
            title: "Account & Billing",
            description: "Manage your account settings, subscriptions, and billing",
            icon: "💳",
            articles: 8,
            popular: true,
            articles_list: [
                "Upgrading your plan",
                "Managing billing information",
                "Understanding invoices",
                "Cancellation policy"
            ]
        },
        {
            id: "features-tools",
            title: "Features & Tools",
            description: "Master all MEWAYZ features and advanced functionality",
            icon: "🛠️",
            articles: 24,
            popular: false,
            articles_list: [
                "E-commerce setup guide",
                "Social media integration",
                "Analytics and reporting",
                "Custom branding options"
            ]
        },
        {
            id: "integrations",
            title: "Integrations",
            description: "Connect MEWAYZ with your favorite tools and services",
            icon: "🔗",
            articles: 15,
            popular: false,
            articles_list: [
                "API documentation",
                "Third-party integrations",
                "Webhook configuration",
                "Custom development"
            ]
        },
        {
            id: "troubleshooting",
            title: "Troubleshooting",
            description: "Resolve common issues and technical problems",
            icon: "🔧",
            articles: 18,
            popular: true,
            articles_list: [
                "Common error messages",
                "Performance optimization",
                "Browser compatibility",
                "Mobile app issues"
            ]
        },
        {
            id: "enterprise",
            title: "Enterprise",
            description: "Advanced features for enterprise and white-label customers",
            icon: "🏢",
            articles: 10,
            popular: false,
            articles_list: [
                "White-label setup",
                "Team management",
                "Advanced security",
                "Custom domains"
            ]
        }
    ];

    const popularArticles = [
        {
            title: "How to upgrade your plan",
            category: "Account & Billing",
            views: 15420,
            helpful: 94
        },
        {
            title: "Setting up e-commerce store",
            category: "Features & Tools", 
            views: 12890,
            helpful: 97
        },
        {
            title: "Troubleshooting login issues",
            category: "Troubleshooting",
            views: 11200,
            helpful: 89
        },
        {
            title: "API integration guide",
            category: "Integrations",
            views: 8750,
            helpful: 92
        },
        {
            title: "Understanding analytics dashboard",
            category: "Features & Tools",
            views: 7640,
            helpful: 95
        }
    ];

    const supportOptions = [
        {
            title: "Live Chat",
            description: "Get instant help from our support team",
            availability: "24/7 for Pro & Enterprise",
            icon: "💬",
            action: "Start Chat",
            primary: true
        },
        {
            title: "Email Support",
            description: "Detailed assistance for complex questions",
            availability: "Response within 24 hours",
            icon: "📧",
            action: "Send Email",
            primary: false
        },
        {
            title: "Video Tutorials",
            description: "Step-by-step visual guides",
            availability: "Available anytime",
            icon: "🎥",
            action: "Watch Now",
            primary: false
        },
        {
            title: "Community Forum",
            description: "Connect with other users and experts",
            availability: "Active community",
            icon: "👥",
            action: "Join Discussion",
            primary: false
        }
    ];

    return (
        <div className="min-h-screen bg-b-surface1 dark:bg-shade-01">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-h1 text-t-primary mb-6 max-md:text-h2">
                        How Can We Help You?
                    </h1>
                    <p className="text-h6 text-t-secondary max-w-3xl mx-auto mb-8">
                        Find answers to your questions, browse our comprehensive knowledge base, or get direct support from our expert team.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for help articles, tutorials, or guides..."
                                className="w-full px-6 py-4 bg-b-surface2 border border-s-stroke2 rounded-3xl text-body-1 text-t-primary focus:border-primary-02 focus:outline-none pl-14"
                            />
                            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-t-secondary">
                                🔍
                            </div>
                        </div>
                    </div>
                </div>

                {/* Help Categories */}
                <div className="mb-16">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Browse Help Topics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {helpCategories.map((category) => (
                            <div
                                key={category.id}
                                className={`card p-6 hover:shadow-depth transition-all cursor-pointer ${
                                    category.popular ? "border-2 border-primary-02/20" : ""
                                }`}
                            >
                                {category.popular && (
                                    <div className="absolute -top-3 -right-3 bg-primary-02 text-white px-3 py-1 rounded-full text-caption font-medium">
                                        Popular
                                    </div>
                                )}
                                
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-h6 text-t-primary mb-2">{category.title}</h3>
                                <p className="text-body-2 text-t-secondary mb-4">{category.description}</p>
                                
                                <div className="text-caption text-primary-02 mb-4">
                                    {category.articles} articles
                                </div>

                                <div className="space-y-2">
                                    {category.articles_list.slice(0, 3).map((article, index) => (
                                        <div key={index} className="text-caption text-t-secondary hover:text-t-primary transition-colors cursor-pointer">
                                            • {article}
                                        </div>
                                    ))}
                                    {category.articles_list.length > 3 && (
                                        <div className="text-caption text-primary-02 cursor-pointer hover:text-primary-01">
                                            + {category.articles_list.length - 3} more articles
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Articles */}
                <div className="mb-16">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Most Popular Articles
                    </h2>
                    <div className="card p-6">
                        <div className="space-y-4">
                            {popularArticles.map((article, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-b-surface2 rounded-2xl hover:bg-b-surface1 transition-colors cursor-pointer"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-button text-t-primary font-medium mb-1">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-caption text-t-secondary">
                                            <span className="px-2 py-1 bg-b-surface1 rounded">
                                                {article.category}
                                            </span>
                                            <span>{article.views.toLocaleString()} views</span>
                                            <span className="text-chart-green">
                                                {article.helpful}% helpful
                                            </span>
                                        </div>
                                    </div>
                                    <button className="text-primary-02 hover:text-primary-01 transition-colors">
                                        Read Article →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Options */}
                <div className="mb-16">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Need More Help?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportOptions.map((option) => (
                            <div
                                key={option.title}
                                className={`card p-6 text-center transition-all hover:shadow-depth ${
                                    option.primary ? "border-2 border-primary-02" : ""
                                }`}
                            >
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h3 className="text-h6 text-t-primary mb-2">{option.title}</h3>
                                <p className="text-body-2 text-t-secondary mb-3">{option.description}</p>
                                <div className="text-caption text-t-tertiary mb-4">
                                    {option.availability}
                                </div>
                                <button
                                    className={`w-full py-3 px-4 rounded-3xl text-button font-medium transition-all ${
                                        option.primary
                                            ? "bg-primary-02 text-white hover:bg-primary-01"
                                            : "bg-b-surface2 text-t-primary border border-s-stroke2 hover:bg-b-surface1"
                                    }`}
                                >
                                    {option.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="card p-8 text-center">
                    <h2 className="text-h4 text-t-primary mb-4">
                        Still Can't Find What You're Looking For?
                    </h2>
                    <p className="text-body-1 text-t-secondary mb-8 max-w-2xl mx-auto">
                        Our expert support team is here to help. Get personalized assistance for your specific needs and challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary-02 text-white px-8 py-4 rounded-3xl text-button hover:bg-primary-01 transition-all">
                            Contact Support
                        </button>
                        <button className="bg-b-surface2 text-t-primary px-8 py-4 rounded-3xl text-button border border-s-stroke2 hover:bg-b-surface1 transition-all">
                            Schedule Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}