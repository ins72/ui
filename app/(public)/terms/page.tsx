const TermsPage = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Terms of Service</h1>
                    <p className="text-t-secondary">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Acceptance of Terms</h2>
                        <p className="text-t-secondary">
                            By accessing and using MEWAYZ, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Use License</h2>
                        <p className="text-t-secondary mb-4">
                            Permission is granted to temporarily use MEWAYZ for personal or commercial purposes, 
                            subject to the following restrictions:
                        </p>
                        <ul className="text-t-secondary space-y-2">
                            <li>• You must not use the service for any unlawful purpose</li>
                            <li>• You must not violate any applicable laws or regulations</li>
                            <li>• You must not interfere with the proper working of the service</li>
                            <li>• You must not attempt to gain unauthorized access to the service</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Pricing and Payments</h2>
                        <p className="text-t-secondary mb-4">
                            Our pricing structure is as follows:
                        </p>
                        <ul className="text-t-secondary space-y-2">
                            <li>• <strong>Free Plan:</strong> 30% revenue share</li>
                            <li>• <strong>Pro Plan:</strong> $49/month flat fee</li>
                            <li>• <strong>Enterprise Plan:</strong> 15% revenue share, minimum $99/month</li>
                        </ul>
                        <p className="text-t-secondary mt-4">
                            All payments are processed securely and are non-refundable except as required by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">User Responsibilities</h2>
                        <p className="text-t-secondary mb-4">
                            As a user of MEWAYZ, you are responsible for:
                        </p>
                        <ul className="text-t-secondary space-y-2">
                            <li>• Maintaining the confidentiality of your account</li>
                            <li>• All activities that occur under your account</li>
                            <li>• Ensuring your content complies with our policies</li>
                            <li>• Paying all fees associated with your chosen plan</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Limitation of Liability</h2>
                        <p className="text-t-secondary">
                            MEWAYZ shall not be liable for any indirect, incidental, special, consequential, 
                            or punitive damages resulting from your use of the service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-h3 mb-4">Contact Information</h2>
                        <p className="text-t-secondary">
                            If you have any questions about these Terms of Service, please contact us at legal@mewayz.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage; 