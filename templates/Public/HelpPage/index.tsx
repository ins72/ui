const HelpPage = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Help Center</h1>
                    <p className="text-xl text-t-secondary">
                        Find answers to common questions and get support for MEWAYZ
                    </p>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-h3 mb-6">Getting Started</h2>
                        <div className="space-y-4">
                            <div className="p-6 bg-b-surface2 rounded-lg">
                                <h3 className="font-semibold mb-2">How do I create an account?</h3>
                                <p className="text-t-secondary">
                                    Click the "Get Started" button in the top navigation and fill out the signup form. 
                                    You'll be guided through the onboarding process to set up your workspace.
                                </p>
                            </div>
                            <div className="p-6 bg-b-surface2 rounded-lg">
                                <h3 className="font-semibold mb-2">What happens during onboarding?</h3>
                                <p className="text-t-secondary">
                                    During onboarding, you'll set up your workspace name, upload a profile picture, 
                                    and learn about your plan features. This takes just a few minutes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-h3 mb-6">Pricing & Plans</h2>
                        <div className="space-y-4">
                            <div className="p-6 bg-b-surface2 rounded-lg">
                                <h3 className="font-semibold mb-2">What's the difference between plans?</h3>
                                <p className="text-t-secondary">
                                    All plans include the same core features. Free plan uses 30% revenue share, 
                                    Pro uses a flat $49/month fee, and Enterprise uses 15% revenue share with white-label capabilities.
                                </p>
                            </div>
                            <div className="p-6 bg-b-surface2 rounded-lg">
                                <h3 className="font-semibold mb-2">Can I change my plan later?</h3>
                                <p className="text-t-secondary">
                                    Yes, you can upgrade or downgrade between plans at any time from your dashboard settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-h3 mb-6">Contact Support</h2>
                        <div className="p-6 bg-b-surface2 rounded-lg">
                            <p className="text-t-secondary mb-4">
                                Need more help? Our support team is here to assist you.
                            </p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> support@mewayz.com</p>
                                <p><strong>Response time:</strong> Within 24 hours</p>
                                <p><strong>Enterprise customers:</strong> Dedicated account manager</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HelpPage; 