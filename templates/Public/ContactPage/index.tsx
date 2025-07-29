const ContactPage = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Contact Us</h1>
                    <p className="text-xl text-t-secondary">
                        Get in touch with our team for support, questions, or partnership inquiries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-h3 mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">General Support</h3>
                                <p className="text-t-secondary">support@mewayz.com</p>
                                <p className="text-t-secondary text-sm">Response within 24 hours</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Enterprise Sales</h3>
                                <p className="text-t-secondary">enterprise@mewayz.com</p>
                                <p className="text-t-secondary text-sm">Dedicated account manager</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Legal & Privacy</h3>
                                <p className="text-t-secondary">legal@mewayz.com</p>
                                <p className="text-t-secondary text-sm">For legal inquiries</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-h3 mb-6">Office Hours</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Monday - Friday</p>
                                <p className="text-t-secondary">9:00 AM - 6:00 PM EST</p>
                            </div>
                            <div>
                                <p className="font-semibold">Saturday</p>
                                <p className="text-t-secondary">10:00 AM - 4:00 PM EST</p>
                            </div>
                            <div>
                                <p className="font-semibold">Sunday</p>
                                <p className="text-t-secondary">Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 