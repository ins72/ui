"use client";

import { Link } from "react-scroll";
import { Search, BookOpen, Code, TrendingUp, DollarSign, Wrench, Zap } from "lucide-react";

type DocsNavigationProps = {
    sections: Array<{
        id: string;
        title: string;
        icon: string;
        description: string;
        category: string;
    }>;
    activeSection: string;
    onSectionChange: (section: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
};

const DocsNavigation = ({ sections, activeSection, onSectionChange, searchQuery, onSearchChange }: DocsNavigationProps) => {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Business":
                return <BookOpen className="h-4 w-4" />;
            case "Technical":
                return <Code className="h-4 w-4" />;
            case "Marketing":
                return <TrendingUp className="h-4 w-4" />;
            case "Support":
                return <Wrench className="h-4 w-4" />;
            default:
                return <BookOpen className="h-4 w-4" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Business":
                return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200";
            case "Technical":
                return "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200";
            case "Marketing":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200";
            case "Support":
                return "text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200";
        }
    };

    return (
        <div className="w-75 max-3xl:w-62 max-2xl:w-74 max-lg:w-full max-lg:mb-8">
            <div className="card">
                <div className="mb-6">
                    <div className="text-h4 mb-2">Documentation Hub</div>
                    <div className="text-sm text-t-secondary">
                        Complete knowledge base for all platform stakeholders
                    </div>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                        />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
                    <div className="space-y-2">
                        <Link
                            to="getting-started"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg cursor-pointer transition-colors"
                        >
                            <Zap className="h-4 w-4 mr-2" />
                            Getting Started
                        </Link>
                        <Link
                            to="api-reference"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg cursor-pointer transition-colors"
                        >
                            <Code className="h-4 w-4 mr-2" />
                            API Reference
                        </Link>
                        <Link
                            to="troubleshooting"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg cursor-pointer transition-colors"
                        >
                            <Wrench className="h-4 w-4 mr-2" />
                            Troubleshooting
                        </Link>
                    </div>
                </div>

                {/* Documentation Sections */}
                <div className="space-y-1">
                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            to={section.id}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`flex items-start px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                                activeSection === section.id
                                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                            onClick={() => onSectionChange(section.id)}
                        >
                            <span className="text-lg mr-3 mt-0.5">{section.icon}</span>
                            <div className="flex-1">
                                <div className="font-medium text-sm">{section.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {section.description}
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(section.category)}`}>
                                        {section.category}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Documentation Stats */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Documentation Stats</h3>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <div className="font-medium text-gray-900 dark:text-white">6</div>
                            <div className="text-gray-500 dark:text-gray-400">Sections</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 dark:text-white">150+</div>
                            <div className="text-gray-500 dark:text-gray-400">Articles</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 dark:text-white">4</div>
                            <div className="text-gray-500 dark:text-gray-400">Categories</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 dark:text-white">24/7</div>
                            <div className="text-gray-500 dark:text-gray-400">Updated</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsNavigation; 