"use client";


export const metadata = {
  title: "Business Dashboard | MEWAYZ Analytics & Insights",
  description: "Access powerful business analytics, real-time insights, and comprehensive reporting with MEWAYZ dashboard. Make data-driven decisions to grow your business.",
  keywords: "business dashboard, analytics, insights, reporting, business intelligence, data visualization",
  openGraph: {
    title: "Business Dashboard | MEWAYZ Analytics & Insights",
    description: "Access powerful business analytics, real-time insights, and comprehensive reporting with MEWAYZ dashboard. Make data-driven decisions to grow your business.",
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
    title: "Business Dashboard | MEWAYZ Analytics & Insights",
    description: "Access powerful business analytics, real-time insights, and comprehensive reporting with MEWAYZ dashboard. Make data-driven decisions to grow your business.",
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

import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "@/style-reference/components/Layout";
import AdminMenu from "./AdminMenu";
import SystemOverview from "./SystemOverview";
import UserManagement from "./UserManagement";
import ContentManagement from "./ContentManagement";
import FinancialManagement from "./FinancialManagement";
import SystemSettings from "./SystemSettings";
import SecurityManagement from "./SecurityManagement";
import AnalyticsDashboard from "./AnalyticsDashboard";

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

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState("overview");

    const navigation = [
        {
            title: "System Overview",
            icon: "dashboard",
            description: "Real-time system status and metrics",
            to: "overview",
        },
        {
            title: "User Management",
            icon: "users",
            description: "Manage all users, roles, and permissions",
            to: "users",
        },
        {
            title: "Content Management",
            icon: "content",
            description: "Manage products, courses, and content",
            to: "content",
        },
        {
            title: "Financial Management",
            icon: "finance",
            description: "Revenue, billing, and financial reports",
            to: "finance",
        },
        {
            title: "System Settings",
            icon: "settings",
            description: "Platform configuration and settings",
            to: "settings",
        },
        {
            title: "Security Management",
            icon: "security",
            description: "Security settings and access control",
            to: "security",
        },
        {
            title: "Analytics Dashboard",
            icon: "analytics",
            description: "Advanced analytics and reporting",
            to: "analytics",
        },
    ];

    return (
        <Layout title="Admin Dashboard" hideSidebar={false}>
            <div className="flex items-start max-lg:block">
                <AdminMenu
                    systemOverviewTo="overview"
                    items={navigation}
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                />
                <div className="flex flex-col gap-3 w-[calc(100%-30rem)] pl-3 max-3xl:w-[calc(100%-25rem)] max-2xl:w-[calc(100%-18.5rem)] max-lg:w-full max-lg:pl-0">
                    <ElementWithOffset
                        className="-top-22"
                        name="overview"
                    >
                        <SystemOverview />
                    </ElementWithOffset>
                    <ElementWithOffset name="users">
                        <UserManagement />
                    </ElementWithOffset>
                    <ElementWithOffset name="content">
                        <ContentManagement />
                    </ElementWithOffset>
                    <ElementWithOffset name="finance">
                        <FinancialManagement />
                    </ElementWithOffset>
                    <ElementWithOffset name="settings">
                        <SystemSettings />
                    </ElementWithOffset>
                    <ElementWithOffset name="security">
                        <SecurityManagement />
                    </ElementWithOffset>
                    <ElementWithOffset name="analytics">
                        <AnalyticsDashboard />
                    </ElementWithOffset>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard; 