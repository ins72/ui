"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface WebsiteTemplate {
    id: string;
    title: string;
    description: string;
    category: string;
    preview: string;
    features: string[];
    isPopular?: boolean;
    isNew?: boolean;
    rating?: number;
    downloads?: number;
}

const WebsiteTemplatesPage = () => {
    const [templates, setTemplates] = useState<WebsiteTemplate[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<string>("popular");

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                setLoading(true);
                const data = await apiClient.getPublicContent('website-templates');
                setTemplates(data?.content?.data || mockTemplates);
            } catch (error) {
                console.error('Error fetching templates:', error);
                setTemplates(mockTemplates);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    const categories = [
        { id: "all", name: "All Templates", count: templates.length },
        { id: "business", name: "Business", count: templates.filter(t => t.category === "business").length },
        { id: "ecommerce", name: "E-commerce", count: templates.filter(t => t.category === "ecommerce").length },
        { id: "portfolio", name: "Portfolio", count: templates.filter(t => t.category === "portfolio").length },
        { id: "blog", name: "Blog", count: templates.filter(t => t.category === "blog").length },
        { id: "landing", name: "Landing Page", count: templates.filter(t => t.category === "landing").length },
        { id: "restaurant", name: "Restaurant", count: templates.filter(t => t.category === "restaurant").length },
        { id: "education", name: "Education", count: templates.filter(t => t.category === "education").length }
    ];

    const filteredTemplates = templates
        .filter(template => 
            (selectedCategory === "all" || template.category === selectedCategory) &&
            (searchQuery === "" || 
             template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             template.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .sort((a, b) => {
            switch (sortBy) {
                case "popular":
                    return (b.downloads || 0) - (a.downloads || 0);
                case "newest":
                    return b.isNew ? 1 : -1;
                case "rating":
                    return (b.rating || 0) - (a.rating || 0);
                case "name":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

    return (
        <Layout title="Website Templates">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Search and Filters */}
                    <Card title="Find Your Perfect Template" className="mb-5">
                        <div className="space-y-4">
                            {/* Search Bar */}
                            <div className="relative">
                                <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            {/* Category Filters */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`text-sm ${
                                            selectedCategory === category.id 
                                                ? 'bg-blue-600 text-white' 
                                                : 'isStroke'
                                        }`}
                                    >
                                        {category.name} ({category.count})
                                    </Button>
                                ))}
                            </div>

                            {/* Sort Options */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-800 dark:text-white"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="name">Name A-Z</option>
                                </select>
                            </div>
                        </div>
                    </Card>

                    {/* Templates Grid */}
                    <Card title={`${filteredTemplates.length} Templates Found`} headContent={
                        <div className="flex items-center gap-2">
                            <Button href="/website-builder/create" className="isStroke text-sm">
                                Create Custom
                            </Button>
                            <Button href="/website-builder" className="text-sm">
                                <Icon name="arrow-left" className="mr-1" />
                                Back to Builder
                            </Button>
                        </div>
                    }>
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-3"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTemplates.map((template) => (
                                    <div key={template.id} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-colors">
                                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Icon name="globe" className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-sm text-gray-500">{template.title}</p>
                                                </div>
                                            </div>
                                            
                                            {/* Badges */}
                                            <div className="absolute top-2 left-2 flex gap-1">
                                                {template.isPopular && (
                                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                        Popular
                                                    </span>
                                                )}
                                                {template.isNew && (
                                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                                                        New
                                                    </span>
                                                )}
                                            </div>

                                            {/* Rating */}
                                            {template.rating && (
                                                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1">
                                                    <Icon name="star" className="h-3 w-3 text-yellow-400 fill-current" />
                                                    {template.rating}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="mt-3">
                                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">{template.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{template.description}</p>
                                            
                                            {/* Features */}
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {template.features.slice(0, 3).map((feature, index) => (
                                                    <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {template.features.length > 3 && (
                                                    <span className="text-xs text-gray-500">+{template.features.length - 3} more</span>
                                                )}
                                            </div>
                                            
                                            {/* Stats and Actions */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className="capitalize">{template.category}</span>
                                                    {template.downloads && (
                                                        <span>{template.downloads.toLocaleString()} downloads</span>
                                                    )}
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button 
                                                        href={`/website-builder/template/${template.id}/preview`} 
                                                        className="text-xs isStroke"
                                                    >
                                                        Preview
                                                    </Button>
                                                    <Button 
                                                        href={`/website-builder/template/${template.id}`} 
                                                        className="text-xs"
                                                    >
                                                        Use Template
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && filteredTemplates.length === 0 && (
                            <div className="text-center py-12">
                                <Icon name="search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No templates found</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Try adjusting your search or filter criteria
                                </p>
                                <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>

                <div className="col-right">
                    {/* Template Categories */}
                    <Card title="Categories" className="mb-5">
                        <div className="space-y-2">
                            {categories.slice(1).map((category) => (
                                <div 
                                    key={category.id}
                                    className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                                        selectedCategory === category.id 
                                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' 
                                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <span className="capitalize">{category.name}</span>
                                    <span className="text-xs text-gray-500">{category.count}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Popular Templates */}
                    <Card title="Popular Templates">
                        <div className="space-y-3">
                            {templates.filter(t => t.isPopular).slice(0, 5).map((template) => (
                                <div key={template.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded cursor-pointer">
                                    <div className="w-12 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                                        <Icon name="globe" className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">{template.title}</div>
                                        <div className="text-xs text-gray-500 capitalize">{template.category}</div>
                                    </div>
                                    <Button href={`/website-builder/template/${template.id}`} className="text-xs isStroke">
                                        Use
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

// Mock data
const mockTemplates: WebsiteTemplate[] = [
    {
        id: "1",
        title: "Business Pro",
        description: "Professional business website template with modern design and comprehensive features",
        category: "business",
        preview: "/templates/business-pro.jpg",
        features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Blog Integration"],
        isPopular: true,
        rating: 4.8,
        downloads: 1250
    },
    {
        id: "2",
        title: "E-commerce Store",
        description: "Complete online store template with shopping cart and payment integration",
        category: "ecommerce",
        preview: "/templates/ecommerce.jpg",
        features: ["Shopping Cart", "Payment Integration", "Product Catalog", "Order Management"],
        rating: 4.9,
        downloads: 2100
    },
    {
        id: "3",
        title: "Portfolio Showcase",
        description: "Creative portfolio template for artists, designers, and creative professionals",
        category: "portfolio",
        preview: "/templates/portfolio.jpg",
        features: ["Gallery", "Project Showcase", "Contact Form", "Social Integration"],
        isNew: true,
        rating: 4.7,
        downloads: 890
    },
    {
        id: "4",
        title: "Blog Magazine",
        description: "Modern blog template with article management and social sharing",
        category: "blog",
        preview: "/templates/blog.jpg",
        features: ["Article Management", "Comments System", "Social Sharing", "Newsletter"],
        rating: 4.6,
        downloads: 1560
    },
    {
        id: "5",
        title: "Landing Page",
        description: "High-converting landing page template for marketing campaigns",
        category: "landing",
        preview: "/templates/landing.jpg",
        features: ["Lead Capture", "A/B Testing", "Analytics", "Mobile Optimized"],
        isPopular: true,
        rating: 4.8,
        downloads: 3200
    },
    {
        id: "6",
        title: "Restaurant Site",
        description: "Restaurant website with menu display and online reservations",
        category: "restaurant",
        preview: "/templates/restaurant.jpg",
        features: ["Menu Display", "Reservations", "Location Map", "Reviews"],
        rating: 4.5,
        downloads: 750
    },
    {
        id: "7",
        title: "Education Platform",
        description: "Educational website template for schools and online courses",
        category: "education",
        preview: "/templates/education.jpg",
        features: ["Course Catalog", "Student Portal", "Progress Tracking", "Certificates"],
        isNew: true,
        rating: 4.7,
        downloads: 650
    },
    {
        id: "8",
        title: "Agency Website",
        description: "Professional agency website with service showcase and client testimonials",
        category: "business",
        preview: "/templates/agency.jpg",
        features: ["Service Showcase", "Client Testimonials", "Case Studies", "Team Profiles"],
        rating: 4.6,
        downloads: 980
    },
    {
        id: "9",
        title: "Online Store Plus",
        description: "Advanced e-commerce template with inventory management",
        category: "ecommerce",
        preview: "/templates/store-plus.jpg",
        features: ["Inventory Management", "Multi-vendor", "Advanced Analytics", "Loyalty Program"],
        rating: 4.9,
        downloads: 1800
    }
];

export default WebsiteTemplatesPage; 