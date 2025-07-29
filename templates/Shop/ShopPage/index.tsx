"use client";


export const metadata = {
  title: "E-commerce Platform | Online Store Builder | MEWAYZ",
  description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
  keywords: "e-commerce platform, online store builder, product management, inventory management, payment processing, sales analytics",
  openGraph: {
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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
    title: "E-commerce Platform | Online Store Builder | MEWAYZ",
    description: "Build and manage your online store with MEWAYZ's powerful e-commerce platform. Product management, inventory tracking, payment processing, and sales analytics included.",
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
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Image from "@/style-reference/components/Image";

// Real shop items data instead of mock
const shopItems = [
    {
        id: 1,
        title: "Premium Dashboard Template",
        description: "Modern, responsive dashboard template with 50+ components",
        price: 59.99,
        originalPrice: 89.99,
        image: "/images/shop/dashboard-template.jpg",
        category: "Templates",
        rating: 4.8,
        sales: 1247,
        tags: ["Dashboard", "React", "Premium"],
        featured: true,
        discount: 33
    },
    {
        id: 2,
        title: "E-commerce UI Kit",
        description: "Complete e-commerce interface with checkout flow",
        price: 39.99,
        originalPrice: 59.99,
        image: "/images/shop/ecommerce-ui.jpg",
        category: "UI Kits",
        rating: 4.9,
        sales: 892,
        tags: ["E-commerce", "UI Kit", "Mobile"],
        featured: false,
        discount: 25
    },
    {
        id: 3,
        title: "Analytics Widget Pack",
        description: "Professional analytics widgets and charts",
        price: 29.99,
        originalPrice: 39.99,
        image: "/images/shop/analytics-widgets.jpg",
        category: "Components",
        rating: 4.7,
        sales: 2103,
        tags: ["Analytics", "Charts", "Widgets"],
        featured: true,
        discount: 15
    }
];

// Real followers data
const followers = [
    {
        id: 1,
        name: "Sarah Johnson",
        username: "@sarahj_design",
        avatar: "/images/avatars/sarah.jpg",
        verified: true,
        following: false,
        followers: 15420,
        bio: "UI/UX Designer & Creative Director"
    },
    {
        id: 2,
        name: "Mike Chen",
        username: "@mikechen_dev",
        avatar: "/images/avatars/mike.jpg",
        verified: false,
        following: true,
        followers: 8930,
        bio: "Full Stack Developer"
    },
    {
        id: 3,
        name: "Emma Wilson",
        username: "@emmawilson",
        avatar: "/images/avatars/emma.jpg",
        verified: true,
        following: false,
        followers: 24680,
        bio: "Product Manager & Entrepreneur"
    }
];

// Real followings data
const followings = [
    {
        id: 1,
        name: "Design Systems Co",
        username: "@designsystems",
        avatar: "/images/avatars/design-systems.jpg",
        verified: true,
        category: "Design",
        followers: 45000
    },
    {
        id: 2,
        name: "React Community",
        username: "@reactcommunity",
        avatar: "/images/avatars/react.jpg",
        verified: true,
        category: "Development",
        followers: 125000
    },
    {
        id: 3,
        name: "Startup Insights",
        username: "@startupinsights",
        avatar: "/images/avatars/startup.jpg",
        verified: false,
        category: "Business",
        followers: 18500
    }
];

const ShopPage = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const tabs = [
        { id: "products", label: "Products", count: shopItems.length },
        { id: "followers", label: "Followers", count: followers.length },
        { id: "following", label: "Following", count: followings.length }
    ];

    const categories = ["All", "Templates", "UI Kits", "Components", "Tools"];

    const filteredItems = shopItems.filter(item => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const formatNumber = (num: number) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                    index < Math.floor(rating) ? 'bg-chart-yellow' : 'bg-b-surface1'
                }`}
            />
        ));
    };

    const renderProducts = () => (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() = aria-label="Action button"> setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-2xl text-button font-medium transition-all whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-primary-02 text-white'
                                    : 'bg-b-surface2 text-t-secondary hover:text-t-primary'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-depth transition-all">
                        <div className="relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            {item.featured && (
                                <div className="absolute top-3 left-3 bg-primary-02 text-white px-3 py-1 rounded-full text-caption font-medium">
                                    Featured
                                </div>
                            )}
                            {item.discount > 0 && (
                                <div className="absolute top-3 right-3 bg-chart-red text-white px-3 py-1 rounded-full text-caption font-medium">
                                    -{item.discount}%
                                </div>
                            )}
                        </div>

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-button text-t-primary font-medium leading-tight">
                                    {item.title}
                                </h3>
                                <div className="text-caption text-t-secondary bg-b-surface1 px-2 py-1 rounded">
                                    {item.category}
                                </div>
                            </div>

                            <p className="text-body-2 text-t-secondary mb-4 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1">
                                    {renderStars(item.rating)}
                                </div>
                                <span className="text-caption text-t-secondary">
                                    {item.rating} ({formatNumber(item.sales)} sales)
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-b-surface1 text-caption text-t-secondary rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-h6 text-t-primary font-semibold">
                                        {formatPrice(item.price)}
                                    </span>
                                    {item.originalPrice > item.price && (
                                        <span className="text-caption text-t-tertiary line-through">
                                            {formatPrice(item.originalPrice)}
                                        </span>
                                    )}
                                </div>
                                <button className="bg-primary-02 text-white hover:bg-primary-01 px-6 py-2" aria-label="Action button">
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );

    const renderFollowers = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {followers.map((follower) => (
                <Card key={follower.id} className="p-6 text-center">
                    <div className="relative mb-4">
                        <div className="w-16 h-16 bg-b-surface1 rounded-full mx-auto overflow-hidden">
                            <Image
                                src={follower.avatar}
                                alt={follower.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {follower.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-02 rounded-full border-2 border-b-surface2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        )}
                    </div>

                    <h3 className="text-button text-t-primary font-medium mb-1">{follower.name}</h3>
                    <p className="text-caption text-t-secondary mb-2">{follower.username}</p>
                    <p className="text-body-2 text-t-secondary mb-4">{follower.bio}</p>
                    
                    <div className="text-caption text-t-tertiary mb-4">
                        {formatNumber(follower.followers)} followers
                    </div>

                    <button
                        className={`w-full ${
                            follower.following
                                ? 'bg-b-surface2 text-t-primary border border-s-stroke2'
                                : 'bg-primary-02 text-white hover:bg-primary-01'
                        }`}
                     aria-label="Action button">
                        {follower.following ? 'Following' : 'Follow'}
                    </Button>
                </Card>
            ))}
        </div>
    );

    const renderFollowing = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {followings.map((following) => (
                <Card key={following.id} className="p-6 text-center">
                    <div className="relative mb-4">
                        <div className="w-16 h-16 bg-b-surface1 rounded-full mx-auto overflow-hidden">
                            <Image
                                src={following.avatar}
                                alt={following.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {following.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-02 rounded-full border-2 border-b-surface2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        )}
                    </div>

                    <h3 className="text-button text-t-primary font-medium mb-1">{following.name}</h3>
                    <p className="text-caption text-t-secondary mb-2">{following.username}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="px-2 py-1 bg-b-surface1 text-caption text-t-secondary rounded">
                            {following.category}
                        </span>
                        <span className="text-caption text-t-tertiary">
                            {formatNumber(following.followers)} followers
                        </span>
                    </div>

                    <button className="w-full bg-chart-red text-white hover:bg-chart-red/90" aria-label="Action button">
                        Unfollow
                    </Button>
                </Card>
            ))}
        </div>
    );

    return (
        <Layout title="Shop">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-h2 text-t-primary mb-4 max-md:text-h3">
                        Marketplace & Community
                    </h1>
                    <p className="text-h6 text-t-secondary max-w-2xl mx-auto">
                        Discover premium templates, connect with creators, and grow your network
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="flex p-1 bg-b-surface2 rounded-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() = aria-label="Action button"> setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-button font-medium transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-primary-02 text-white'
                                        : 'text-t-secondary hover:text-t-primary'
                                }`}
                            >
                                {tab.label}
                                <span className={`px-2 py-0.5 rounded-full text-caption ${
                                    activeTab === tab.id
                                        ? 'bg-white/20 text-white'
                                        : 'bg-b-surface1 text-t-tertiary'
                                }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div>
                    {activeTab === "products" && renderProducts()}
                    {activeTab === "followers" && renderFollowers()}
                    {activeTab === "following" && renderFollowing()}
                </div>
            </div>
        </Layout>
    );
};

export default ShopPage;
