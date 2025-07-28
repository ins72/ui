"use client";

import { Link } from "react-scroll";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AdminMenuProps = {
    systemOverviewTo: string;
    items: Array<{
        title: string;
        icon: string;
        description: string;
        to: string;
    }>;
    activeSection: string;
    onSectionChange: (section: string) => void;
};

const AdminMenu = ({ systemOverviewTo, items, activeSection, onSectionChange }: AdminMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "dashboard":
                return "📊";
            case "users":
                return "👥";
            case "content":
                return "📝";
            case "finance":
                return "💰";
            case "settings":
                return "⚙️";
            case "security":
                return "🔒";
            case "analytics":
                return "📈";
            default:
                return "📋";
        }
    };

    return (
        <div className="w-75 max-3xl:w-62 max-2xl:w-74 max-lg:w-full max-lg:mb-8">
            <div className="card">
                <div className="mb-8">
                    <div className="text-h4 mb-2">Admin Panel</div>
                    <div className="text-sm text-t-secondary">
                        Complete system management and control
                    </div>
                </div>
                <div className="space-y-1">
                    <Link
                        to={systemOverviewTo}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                            activeSection === "overview"
                                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => onSectionChange("overview")}
                    >
                        <span className="text-lg mr-3">📊</span>
                        <div>
                            <div className="font-medium">System Overview</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                Real-time metrics
                            </div>
                        </div>
                    </Link>
                    {items.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                                activeSection === item.to
                                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                            onClick={() => onSectionChange(item.to)}
                        >
                            <span className="text-lg mr-3">{getIcon(item.icon)}</span>
                            <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminMenu; 