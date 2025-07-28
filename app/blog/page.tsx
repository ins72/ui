"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
    views: number;
    comments: number;
    featured: boolean;
}

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        // Simulate fetching blog posts from API
        const fetchPosts = async () => {
            setLoading(true);
            // In a real implementation, this would be an API call
            const mockPosts: BlogPost[] = [
                {
                    id: "1",
                    title: "The Future of E-commerce: AI-Powered Personalization",
                    excerpt: "Discover how artificial intelligence is revolutionizing the way businesses personalize customer experiences in e-commerce.",
                    content: "Full article content here...",
                    author: {
                        name: "Sarah Johnson",
                        avatar: "/avatars/sarah.jpg"
                    },
                    category: "E-commerce",
                    tags: ["AI", "Personalization", "E-commerce"],
                    publishedAt: "2024-01-15",
                    readTime: 8,
                    views: 1247,
                    comments: 23,
                    featured: true
                },
                {
                    id: "2",
                    title: "Building Scalable Customer Relationships",
                    excerpt: "Learn the best practices for building and maintaining scalable customer relationships in the digital age.",
                    content: "Full article content here...",
                    author: {
                        name: "Michael Chen",
                        avatar: "/avatars/michael.jpg"
                    },
                    category: "CRM",
                    tags: ["CRM", "Customer Success", "Relationships"],
                    publishedAt: "2024-01-12",
                    readTime: 6,
                    views: 892,
                    comments: 15,
                    featured: true
                },
                {
                    id: "3",
                    title: "Optimizing Your Product Management Workflow",
                    excerpt: "Streamline your product management process with these proven strategies and tools.",
                    content: "Full article content here...",
                    author: {
                        name: "Emily Rodriguez",
                        avatar: "/avatars/emily.jpg"
                    },
                    category: "Product Management",
                    tags: ["Product Management", "Workflow", "Optimization"],
                    publishedAt: "2024-01-10",
                    readTime: 10,
                    views: 756,
                    comments: 8,
                    featured: false
                },
                {
                    id: "4",
                    title: "Data-Driven Decision Making for Business Growth",
                    excerpt: "How to leverage data analytics to make informed business decisions and drive growth.",
                    content: "Full article content here...",
                    author: {
                        name: "David Kim",
                        avatar: "/avatars/david.jpg"
                    },
                    category: "Analytics",
                    tags: ["Analytics", "Data", "Growth"],
                    publishedAt: "2024-01-08",
                    readTime: 12,
                    views: 634,
                    comments: 12,
                    featured: false
                }
            ];
            
            setTimeout(() => {
                setPosts(mockPosts);
                setLoading(false);
            }, 1000);
        };

        fetchPosts();
    }, []);

    const categories = [
        { id: "all", name: "All Posts", count: posts.length },
        { id: "e-commerce", name: "E-commerce", count: posts.filter(p => p.category === "E-commerce").length },
        { id: "crm", name: "CRM", count: posts.filter(p => p.category === "CRM").length },
        { id: "product-management", name: "Product Management", count: posts.filter(p => p.category === "Product Management").length },
        { id: "analytics", name: "Analytics", count: posts.filter(p => p.category === "Analytics").length }
    ];

    const filteredPosts = selectedCategory === "all" 
        ? posts 
        : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

    const featuredPosts = posts.filter(post => post.featured);
    const recentPosts = posts.slice(0, 3);

    if (loading) {
        return (
            <Layout title="Blog">
                <div className="center">
                    <div className="text-gray-600">Loading blog posts...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Blog">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Latest Articles">
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                            selectedCategory === category.id
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                                    {post.featured && (
                                        <div className="mb-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                                <a href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                                                    {post.title}
                                                </a>
                                            </h2>
                                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <div className="flex items-center space-x-1">
                                                        <Icon name="user" className="w-4 h-4" />
                                                        <span>{post.author.name}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Icon name="calendar" className="w-4 h-4" />
                                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Icon name="clock" className="w-4 h-4" />
                                                        <span>{post.readTime} min read</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <div className="flex items-center space-x-1">
                                                        <Icon name="eye" className="w-4 h-4" />
                                                        <span>{post.views}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Icon name="message-circle" className="w-4 h-4" />
                                                        <span>{post.comments}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Featured Posts">
                        <div className="space-y-4">
                            {featuredPosts.map((post) => (
                                <div key={post.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                                    <h3 className="font-medium text-gray-900 mb-2">
                                        <a href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{post.author.name}</span>
                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Categories" className="mt-4">
                        <div className="space-y-2">
                            {categories.slice(1).map((category) => (
                                <div key={category.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <span className="text-sm text-gray-700">{category.name}</span>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {category.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Newsletter" className="mt-4">
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Stay updated with our latest insights and industry trends.
                            </p>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Button className="w-full">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage; 