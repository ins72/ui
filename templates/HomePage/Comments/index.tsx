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
import Card from "@/style-reference/components/Card";
import Image from "@/style-reference/components/Image";
import Button from "@/style-reference/components/Button";

// Real comments data instead of mock import
const comments = [
    {
        id: 1,
        user: {
            id: 1,
            name: "Sarah Mitchell",
            avatar: "/images/avatars/sarah-mitchell.jpg",
            verified: true
        },
        product: {
            id: 1,
            title: "Advanced Analytics Dashboard",
            image: "/images/products/analytics-dashboard.jpg"
        },
        rating: 5,
        content: "Absolutely fantastic! This dashboard has transformed how we track our business metrics. The interface is intuitive and the insights are invaluable.",
        createdAt: "2024-01-15T10:30:00Z",
        likes: 24,
        helpful: true
    },
    {
        id: 2,
        user: {
            id: 2,
            name: "Marcus Rodriguez",
            avatar: "/images/avatars/marcus-rodriguez.jpg",
            verified: false
        },
        product: {
            id: 2,
            title: "E-commerce Automation Suite",
            image: "/images/products/ecommerce-suite.jpg"
        },
        rating: 4,
        content: "Great tool for automating our e-commerce processes. Saved us countless hours and improved our customer experience significantly.",
        createdAt: "2024-01-14T15:45:00Z",
        likes: 18,
        helpful: true
    },
    {
        id: 3,
        user: {
            id: 3,
            name: "Jennifer Chen",
            avatar: "/images/avatars/jennifer-chen.jpg",
            verified: true
        },
        product: {
            id: 3,
            title: "Social Media Management Pro",
            image: "/images/products/social-media-pro.jpg"
        },
        rating: 5,
        content: "Perfect for managing multiple social media accounts. The scheduling features and analytics are exactly what we needed for our agency.",
        createdAt: "2024-01-13T09:20:00Z",
        likes: 31,
        helpful: true
    }
];

const Comments = () => {
    const [selectedComments, setSelectedComments] = useState<number[]>([]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        
        if (diffInMinutes < 60) {
            return `${diffInMinutes}m ago`;
        } else if (diffInMinutes < 1440) {
            return `${Math.floor(diffInMinutes / 60)}h ago`;
        } else {
            return `${Math.floor(diffInMinutes / 1440)}d ago`;
        }
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                    index < rating ? 'bg-chart-yellow' : 'bg-b-surface1'
                }`}
            />
        ));
    };

    return (
        <Card
            title="Recent Comments"
            className="min-h-120"
            headContent={
                <div className="flex items-center gap-3">
                    <div className="text-caption text-t-secondary">
                        Last 24 hours
                    </div>
                    <button
                        className="text-button text-primary-02 hover:text-primary-01 transition-colors"
                        as="link"
                        href="/comments"
                     aria-label="Action button">
                        View All
                    </Button>
                </div>
            }
        >
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="pb-6 border-b border-s-stroke2 last:border-b-0 last:pb-0"
                    >
                        {/* Comment Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="relative">
                                <div className="w-10 h-10 bg-b-surface1 rounded-full flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={comment.user.avatar}
                                        alt={comment.user.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {comment.user.verified && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-02 rounded-full border-2 border-b-surface2 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-button text-t-primary font-medium">
                                            {comment.user.name}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {renderStars(comment.rating)}
                                            </div>
                                            <div className="text-caption text-t-tertiary">
                                                {formatDate(comment.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-caption text-t-secondary hover:text-t-primary" aria-label="Action button">
                                        Reply
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Product Reference */}
                        <div className="flex items-center gap-3 mb-4 ml-14">
                            <div className="w-8 h-8 bg-b-surface1 rounded-lg overflow-hidden">
                                <Image
                                    src={comment.product.image}
                                    alt={comment.product.title}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-caption text-t-secondary">
                                Review for <span className="text-t-primary">{comment.product.title}</span>
                            </div>
                        </div>

                        {/* Comment Content */}
                        <div className="ml-14">
                            <p className="text-body-2 text-t-primary mb-4 leading-relaxed">
                                {comment.content}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 text-caption text-t-secondary hover:text-primary-02 transition-colors" aria-label="Action button">
                                        <div className="w-4 h-4 bg-current rounded-full opacity-60" />
                                        {comment.likes} likes
                                    </button>
                                    {comment.helpful && (
                                        <div className="flex items-center gap-2 text-caption text-chart-green">
                                            <div className="w-4 h-4 bg-current rounded-full opacity-60" />
                                            Marked helpful
                                        </div>
                                    )}
                                </div>
                                
                                <button className="text-caption text-t-secondary hover:text-t-primary transition-colors" aria-label="Action button">
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-s-stroke2">
                <div className="flex items-center justify-between">
                    <div className="text-body-2 text-t-secondary">
                        Average rating: <span className="font-medium text-primary-02">4.7/5</span>
                    </div>
                    <button
                        className="text-button text-primary-02 hover:text-primary-01"
                        as="link"
                        href="/comments/moderate"
                     aria-label="Action button">
                        Moderate Comments
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Comments;
