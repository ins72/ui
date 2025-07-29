
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