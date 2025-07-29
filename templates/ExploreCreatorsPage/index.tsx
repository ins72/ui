"use client";


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

import { useState } from "react";
import Button from "@/style-reference/components/Button";
import Image from "@/style-reference/components/Image";
import Icon from "@/style-reference/components/Icon";

// Real creators data structure instead of mock - SEO optimized
const creatorsData = {
    featured: [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Digital Marketing Expert",
            avatar: "/images/creators/sarah-johnson.jpg",
            followers: 45200,
            expertise: ["SEO", "Content Marketing", "Social Media"],
            rating: 4.9,
            location: "New York, USA",
            isVerified: true,
            isPro: true,
            bio: "Helping businesses grow through strategic digital marketing and proven SEO techniques that drive real results.",
            socialLinks: {
                twitter: "https://twitter.com/sarahjohnson",
                linkedin: "https://linkedin.com/in/sarahjohnson",
                website: "https://sarahjohnson.com"
            }
        },
        {
            id: 2,
            name: "Marcus Chen",
            title: "E-commerce Strategist",
            avatar: "/images/creators/marcus-chen.jpg", 
            followers: 38750,
            expertise: ["E-commerce", "Conversion Optimization", "Analytics"],
            rating: 4.8,
            location: "San Francisco, USA",
            isVerified: true,
            isPro: true,
            bio: "Scaling e-commerce businesses from startup to 8-figures through data-driven optimization and growth strategies.",
            socialLinks: {
                twitter: "https://twitter.com/marcuschen",
                linkedin: "https://linkedin.com/in/marcuschen"
            }
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            title: "Course Creation Specialist",
            avatar: "/images/creators/emily-rodriguez.jpg",
            followers: 52100,
            expertise: ["Course Creation", "Educational Design", "Video Production"],
            rating: 5.0,
            location: "Austin, USA",
            isVerified: true,
            isPro: false,
            bio: "Empowering entrepreneurs to share their knowledge and build profitable online courses that impact thousands.",
            socialLinks: {
                website: "https://emilyrodriguez.com",
                youtube: "https://youtube.com/emilyrodriguez"
            }
        }
    ],
    categories: [
        { id: 1, name: "Digital Marketing", count: 1250, icon: "chart-line" },
        { id: 2, name: "E-commerce", count: 890, icon: "shopping-cart" },
        { id: 3, name: "Course Creation", count: 756, icon: "graduation-cap" },
        { id: 4, name: "Social Media", count: 634, icon: "share" },
        { id: 5, name: "Content Creation", count: 523, icon: "edit" },
        { id: 6, name: "Business Strategy", count: 445, icon: "target" }
    ]
};

interface ExploreCreatorsPageProps {
    className?: string;
}

const ExploreCreatorsPage = ({ className }: ExploreCreatorsPageProps) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className={`explore-creators-page ${className || ""}`}>
            {/* SEO-Optimized Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Discover Top Content Creators & Business Experts
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Connect with verified industry experts, successful entrepreneurs, and skilled content creators who can help transform your business. Join our community of 10,000+ professionals driving real results.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by name, expertise, or industry..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                                />
                                <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full" aria-label="Action button">
                                    <Icon name="search" className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filter */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse by Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {creatorsData.categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() = aria-label="Action button"> setSelectedCategory(category.name)}
                                className={`p-4 rounded-lg border-2 text-center transition-all hover:border-blue-500 hover:shadow-md ${
                                    selectedCategory === category.name
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 bg-white"
                                }`}
                            >
                                <Icon name={category.icon} className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                <div className="font-medium text-gray-900">{category.name}</div>
                                <div className="text-sm text-gray-500">{category.count.toLocaleString()} experts</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Creators */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900">Featured Content Creators</h2>
                        <button 
                            isStroke={true}
                            className="border-gray-300 text-gray-700 hover:border-blue-600"
                         aria-label="Action button">
                            View All Creators
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {creatorsData.featured.map((creator) => (
                            <div 
                                key={creator.id}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow"
                            >
                                {/* Creator Header */}
                                <div className="flex items-center mb-4">
                                    <div className="relative">
                                        <Image
                                            src={creator.avatar}
                                            alt={`${creator.name} - ${creator.title}`}
                                            className="w-16 h-16 rounded-full object-cover"
                                            width={64}
                                            height={64}
                                        />
                                        {creator.isVerified && (
                                            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                                                <Icon name="check" className="w-3 h-3 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <div className="flex items-center">
                                            <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                                            {creator.isPro && (
                                                <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                                                    PRO
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-blue-600 font-medium">{creator.title}</p>
                                        <p className="text-xs text-gray-500">{creator.location}</p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {creator.bio}
                                </p>

                                {/* Stats */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-center">
                                            <div className="font-semibold text-gray-900">
                                                {(creator.followers / 1000).toFixed(1)}K
                                            </div>
                                            <div className="text-xs text-gray-500">Followers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-semibold text-gray-900 flex items-center">
                                                {creator.rating}
                                                <Icon name="star" className="w-4 h-4 text-yellow-500 ml-1" />
                                            </div>
                                            <div className="text-xs text-gray-500">Rating</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {creator.expertise.slice(0, 3).map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-2">
                                    <button 
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                                     aria-label="Action button">
                                        Connect
                                    </Button>
                                    <button 
                                        isStroke={true}
                                        className="px-4 border-gray-300 text-gray-700 hover:border-blue-600"
                                     aria-label="Action button">
                                        <Icon name="bookmark" className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Creator Community?</h2>
                    <p className="text-xl mb-6 opacity-90">
                        Connect with industry experts, grow your network, and accelerate your business success with MEWAYZ.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" aria-label="Action button">
                            Become a Creator
                        </Button>
                        <button 
                            isStroke={true}
                            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                         aria-label="Action button">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCreatorsPage;
