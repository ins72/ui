"use client";

import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "@/components/Layout";
import DocsNavigation from "./DocsNavigation";
import BusinessUserGuide from "./BusinessUserGuide";
import DeveloperDocumentation from "./DeveloperDocumentation";
import MarketingResources from "./MarketingResources";
import InvestorInformation from "./InvestorInformation";
import APIReference from "./APIReference";
import Troubleshooting from "./Troubleshooting";

const ElementWithOffset = ({
    className,
    name,
    children,
}: {
    className?: string;
    name: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="relative">
            <Element
                className={`absolute -top-21 left-0 right-0 ${className || ""}`}
                name={name}
            ></Element>
            {children}
        </div>
    );
};

const DocumentationHub = () => {
    const [activeSection, setActiveSection] = useState("business");
    const [searchQuery, setSearchQuery] = useState("");

    const documentationSections = [
        {
            id: "business",
            title: "Business User Guide",
            icon: "💼",
            description: "Complete guide for business users and platform administrators",
            category: "Business"
        },
        {
            id: "developer",
            title: "Developer Documentation",
            icon: "👨‍💻",
            description: "Technical documentation for developers and system integrators",
            category: "Technical"
        },
        {
            id: "marketing",
            title: "Marketing Resources",
            icon: "📈",
            description: "Marketing materials, brand guidelines, and promotional resources",
            category: "Marketing"
        },
        {
            id: "investor",
            title: "Investor Information",
            icon: "💰",
            description: "Financial reports, business metrics, and investor relations",
            category: "Business"
        },
        {
            id: "api",
            title: "API Reference",
            icon: "🔌",
            description: "Complete API documentation and integration guides",
            category: "Technical"
        },
        {
            id: "troubleshooting",
            title: "Troubleshooting",
            icon: "🔧",
            description: "Common issues, solutions, and support resources",
            category: "Support"
        }
    ];

    const quickStartGuides = [
        {
            title: "Getting Started with Mewayz",
            description: "Quick setup guide for new users",
            link: "#getting-started",
            category: "Business"
        },
        {
            title: "API Integration Guide",
            description: "Step-by-step API integration tutorial",
            link: "#api-integration",
            category: "Technical"
        },
        {
            title: "Brand Guidelines",
            description: "Complete brand and marketing guidelines",
            link: "#brand-guidelines",
            category: "Marketing"
        },
        {
            title: "Business Metrics Dashboard",
            description: "Understanding key performance indicators",
            link: "#metrics",
            category: "Business"
        }
    ];

    const recentUpdates = [
        {
            date: "2024-01-15",
            title: "New Admin Dashboard Features",
            description: "Enhanced user management and analytics capabilities",
            category: "Business"
        },
        {
            date: "2024-01-12",
            title: "API v2.1 Release",
            description: "New endpoints and improved authentication",
            category: "Technical"
        },
        {
            date: "2024-01-10",
            title: "Updated Brand Assets",
            description: "New logos, colors, and marketing materials",
            category: "Marketing"
        }
    ];

    return (
        <Layout title="Documentation Hub" hideSidebar={false}>
            <div className="flex items-start max-lg:block">
                <DocsNavigation
                    sections={documentationSections}
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />
                <div className="flex flex-col gap-3 w-[calc(100%-30rem)] pl-3 max-3xl:w-[calc(100%-25rem)] max-2xl:w-[calc(100%-18.5rem)] max-lg:w-full max-lg:pl-0">
                    <ElementWithOffset
                        className="-top-22"
                        name="business"
                    >
                        <BusinessUserGuide />
                    </ElementWithOffset>
                    <ElementWithOffset name="developer">
                        <DeveloperDocumentation />
                    </ElementWithOffset>
                    <ElementWithOffset name="marketing">
                        <MarketingResources />
                    </ElementWithOffset>
                    <ElementWithOffset name="investor">
                        <InvestorInformation />
                    </ElementWithOffset>
                    <ElementWithOffset name="api">
                        <APIReference />
                    </ElementWithOffset>
                    <ElementWithOffset name="troubleshooting">
                        <Troubleshooting />
                    </ElementWithOffset>
                </div>
            </div>
        </Layout>
    );
};

export default DocumentationHub; 