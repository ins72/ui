
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
const FeaturesPage = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-h1 mb-6">Platform Features</h1>
                    <p className="text-xl text-t-secondary max-w-2xl mx-auto">
                        Everything you need to sell, manage, and grow your creator business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">E-commerce</h3>
                        <p className="text-t-secondary">
                            Sell digital products, physical goods, and services with our complete e-commerce solution.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">Social Media</h3>
                        <p className="text-t-secondary">
                            Manage your social media presence and engage with your audience across all platforms.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">Courses</h3>
                        <p className="text-t-secondary">
                            Create and sell online courses with built-in video hosting and student management.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">CRM</h3>
                        <p className="text-t-secondary">
                            Manage customer relationships, track interactions, and grow your customer base.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">Analytics</h3>
                        <p className="text-t-secondary">
                            Get detailed insights into your business performance and customer behavior.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-b-surface2 rounded-lg">
                        <h3 className="text-h4 mb-4">White-label (Enterprise)</h3>
                        <p className="text-t-secondary">
                            Customize the platform with your branding and offer it as your own solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage; 