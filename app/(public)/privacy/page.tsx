const PrivacyPage = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Privacy Policy</h1>
                    <p className="text-t-secondary">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Information We Collect</h2>
                        <p className="text-t-secondary mb-4">
                            We collect information you provide directly to us, such as when you create an account, 
                            update your profile, or contact us for support.
                        </p>
                        <ul className="text-t-secondary space-y-2">
                            <li>• Account information (name, email, password)</li>
                            <li>• Profile information (profile picture, workspace details)</li>
                            <li>• Usage data and analytics</li>
                            <li>• Communication records</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">How We Use Your Information</h2>
                        <p className="text-t-secondary mb-4">
                            We use the information we collect to provide, maintain, and improve our services.
                        </p>
                        <ul className="text-t-secondary space-y-2">
                            <li>• Process transactions and manage your account</li>
                            <li>• Provide customer support</li>
                            <li>• Send important updates and notifications</li>
                            <li>• Improve our platform and services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Data Security</h2>
                        <p className="text-t-secondary">
                            We implement appropriate security measures to protect your personal information 
                            against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Contact Us</h2>
                        <p className="text-t-secondary">
                            If you have any questions about this Privacy Policy, please contact us at privacy@mewayz.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage; 