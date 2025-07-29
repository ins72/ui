
export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    type: "website",
    url: "https://mewayz.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEWAYZ - Transform Your Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import React from "react";
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