import { Metadata } from "next";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
    title: "Contact Us - Get Professional Support & Expert Guidance | MEWAYZ",
    description: "Connect with our expert team for personalized support, technical assistance, and business consultation. Multiple contact options available including live chat, email, and phone support.",
    keywords: "contact support, customer service, technical help, business consultation, live chat, expert assistance",
    openGraph: {
        title: "Contact Our Expert Team - Professional Support | MEWAYZ",
        description: "Get the help you need from our professional support team. Live chat, email, phone support, and dedicated account management available.",
        type: "website",
        siteName: "MEWAYZ"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ContactPage() {
    const contactMethods = [
        {
            id: "live-chat",
            title: "Live Chat Support",
            description: "Get instant answers from our support team",
            icon: "💬",
            availability: "24/7 for Pro & Enterprise",
            responseTime: "< 2 minutes",
            action: "Start Chat",
            recommended: true
        },
        {
            id: "email",
            title: "Email Support",
            description: "Detailed assistance for complex questions",
            icon: "📧",
            availability: "24/7",
            responseTime: "< 24 hours",
            action: "Send Email",
            email: "support@mewayz.com"
        },
        {
            id: "phone",
            title: "Phone Support",
            description: "Direct conversation with our experts",
            icon: "📞",
            availability: "Business hours",
            responseTime: "Immediate",
            action: "Call Now",
            phone: "+1 (555) 123-4567"
        },
        {
            id: "consultation",
            title: "Expert Consultation",
            description: "Personalized business strategy session",
            icon: "🎯",
            availability: "By appointment",
            responseTime: "Within 48 hours",
            action: "Schedule Call",
            premium: true
        }
    ];

    const officeLocations = [
        {
            city: "San Francisco",
            address: "123 Innovation Drive, Suite 400",
            zipCode: "San Francisco, CA 94107",
            phone: "+1 (555) 123-4567",
            timezone: "PST"
        },
        {
            city: "New York",
            address: "456 Business Plaza, Floor 25",
            zipCode: "New York, NY 10001",
            phone: "+1 (555) 987-6543",
            timezone: "EST"
        },
        {
            city: "London",
            address: "789 Tech Hub, Level 12",
            zipCode: "London, EC2A 4NE, UK",
            phone: "+44 20 7123 4567",
            timezone: "GMT"
        }
    ];

    return (
        <div className="min-h-screen bg-b-surface1 dark:bg-shade-01">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-h1 text-t-primary mb-6 max-md:text-h2">
                        Get Expert Support When You Need It
                    </h1>
                    <p className="text-h6 text-t-secondary max-w-3xl mx-auto mb-8">
                        Our professional support team is here to help you succeed. Choose from multiple contact options 
                        designed to provide fast, effective assistance for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary-02 text-white px-8 py-4 rounded-3xl text-button hover:bg-primary-01 transition-all">
                            Start Live Chat
                        </button>
                        <button className="bg-b-surface2 text-t-primary px-8 py-4 rounded-3xl text-button border border-s-stroke2 hover:bg-b-surface1 transition-all">
                            Schedule Consultation
                        </button>
                    </div>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`card p-6 text-center transition-all hover:shadow-depth ${
                                method.recommended ? "border-2 border-primary-02 relative" : ""
                            } ${method.premium ? "bg-gradient-to-br from-primary-02/5 to-secondary-04/5" : ""}`}
                        >
                            {method.recommended && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary-02 text-white px-4 py-1 rounded-full text-caption font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-4xl mb-4">{method.icon}</div>
                            <h3 className="text-h6 text-t-primary mb-2">{method.title}</h3>
                            <p className="text-body-2 text-t-secondary mb-4">{method.description}</p>
                            
                            <div className="space-y-2 mb-6">
                                <div className="text-caption text-t-tertiary">
                                    <strong>Available:</strong> {method.availability}
                                </div>
                                <div className="text-caption text-t-tertiary">
                                    <strong>Response:</strong> {method.responseTime}
                                </div>
                            </div>

                            <button
                                className={`w-full py-3 px-4 rounded-3xl text-button font-medium transition-all ${
                                    method.recommended || method.premium
                                        ? "bg-primary-02 text-white hover:bg-primary-01"
                                        : "bg-b-surface2 text-t-primary border border-s-stroke2 hover:bg-b-surface1"
                                }`}
                            >
                                {method.action}
                            </button>

                            {method.email && (
                                <div className="mt-3 text-caption text-primary-02">
                                    {method.email}
                                </div>
                            )}
                            {method.phone && (
                                <div className="mt-3 text-caption text-primary-02">
                                    {method.phone}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Quick Contact Form */}
                <div className="card p-8 max-w-4xl mx-auto mb-16">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Send Us a Message
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-button text-t-primary mb-2">First Name *</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-button text-t-primary mb-2">Last Name *</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-button text-t-primary mb-2">Email Address *</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="your.email@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-button text-t-primary mb-2">Company</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Your company name"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-button text-t-primary mb-2">How can we help? *</label>
                            <select
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                required
                            >
                                <option value="">Select a topic</option>
                                <option value="technical-support">Technical Support</option>
                                <option value="billing">Billing & Pricing</option>
                                <option value="feature-request">Feature Request</option>
                                <option value="integration">Integration Help</option>
                                <option value="business-consultation">Business Consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-button text-t-primary mb-2">Message *</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors resize-vertical"
                                placeholder="Tell us more about your question or how we can help..."
                                required
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-primary-02 text-white px-12 py-4 rounded-3xl text-button font-medium hover:bg-primary-01 transition-all"
                            >
                                Send Message
                            </button>
                            <p className="text-caption text-t-tertiary mt-4">
                                We'll get back to you within 24 hours
                            </p>
                        </div>
                    </form>
                </div>

                {/* Office Locations */}
                <div className="mb-16">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Our Global Offices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {officeLocations.map((office) => (
                            <div key={office.city} className="card p-6 text-center">
                                <h3 className="text-h6 text-t-primary mb-4">{office.city}</h3>
                                <div className="space-y-2 text-body-2 text-t-secondary">
                                    <div>{office.address}</div>
                                    <div>{office.zipCode}</div>
                                    <div className="text-primary-02 font-medium">{office.phone}</div>
                                    <div className="text-caption text-t-tertiary">
                                        Timezone: {office.timezone}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="card p-8 max-w-4xl mx-auto">
                    <h2 className="text-h4 text-t-primary text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-button text-t-primary mb-2">What's the best way to get quick help?</h3>
                            <p className="text-body-2 text-t-secondary">
                                Live chat is the fastest option for immediate assistance. Our team is available 24/7 for Pro and Enterprise customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-button text-t-primary mb-2">Do you offer phone support?</h3>
                            <p className="text-body-2 text-t-secondary">
                                Yes, we provide phone support during business hours for all paid plans. Enterprise customers get 24/7 phone access.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-button text-t-primary mb-2">How long does email support take?</h3>
                            <p className="text-body-2 text-t-secondary">
                                We aim to respond to all emails within 24 hours, with most responses sent within 4-6 hours during business days.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-button text-t-primary mb-2">Can I schedule a consultation?</h3>
                            <p className="text-body-2 text-t-secondary">
                                Absolutely! We offer personalized consultation sessions to help you maximize your platform usage and business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}