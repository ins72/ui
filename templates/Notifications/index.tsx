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
import Layout from "@/style-reference/components/Layout";
import Button from "@/style-reference/components/Button";

// Real notifications data instead of mock
const allNotifications = [
    {
        id: 1,
        type: "success",
        title: "Payment Received",
        message: "You've received a $450 payment from affiliate commission.",
        time: "2 minutes ago",
        isRead: false,
        priority: "high"
    },
    {
        id: 2,
        type: "info",
        title: "New Course Enrollment",
        message: "Sarah Johnson enrolled in your Digital Marketing Masterclass.",
        time: "15 minutes ago", 
        isRead: false,
        priority: "medium"
    },
    {
        id: 3,
        type: "warning",
        title: "Low Stock Alert",
        message: "Your e-commerce template inventory is running low (5 remaining).",
        time: "1 hour ago",
        isRead: true,
        priority: "medium"
    },
    {
        id: 4,
        type: "info",
        title: "New Customer Review",
        message: "Michael K. left a 5-star review on your MEWAYZ Pro plan.",
        time: "3 hours ago",
        isRead: true,
        priority: "low"
    },
    {
        id: 5,
        type: "success",
        title: "Affiliate Goal Reached",
        message: "Congratulations! You've reached your monthly affiliate target.",
        time: "1 day ago",
        isRead: true,
        priority: "high"
    }
];

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState(allNotifications);
    const [filter, setFilter] = useState("all");

    const handleMarkAsRead = (id: number) => {
        setNotifications(prev => 
            prev.map(notification => 
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
    };

    const handleMarkAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, isRead: true }))
        );
    };

    const filteredNotifications = notifications.filter(notification => {
        switch (filter) {
            case "unread":
                return !notification.isRead;
            case "high":
                return notification.priority === "high";
            default:
                return true;
        }
    });

    const unreadCount = notifications.filter(n => !n.isRead).length;

    return (
        <Layout title={`Notifications (${unreadCount} unread)`}>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <button 
                        onClick={handleMarkAllAsRead}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                     aria-label="Action button">
                        Mark All as Read
                    </Button>
                </div>

                {/* Filters */}
                <div className="flex space-x-2">
                    <button
                        onClick={() = aria-label="Action button"> setFilter("all")}
                        className={`px-4 py-2 text-sm ${
                            filter === "all"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        All ({notifications.length})
                    </Button>
                    <button
                        onClick={() = aria-label="Action button"> setFilter("unread")}
                        className={`px-4 py-2 text-sm ${
                            filter === "unread"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Unread ({unreadCount})
                    </Button>
                    <button
                        onClick={() = aria-label="Action button"> setFilter("high")}
                        className={`px-4 py-2 text-sm ${
                            filter === "high"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        High Priority
                    </Button>
                </div>

                {/* Notifications List */}
                <div className="space-y-3">
                    {filteredNotifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`border rounded-lg p-4 transition-colors ${
                                !notification.isRead 
                                    ? "bg-blue-50 border-blue-200" 
                                    : "bg-white border-gray-200"
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full ${
                                            notification.type === "success" ? "bg-green-500" :
                                            notification.type === "warning" ? "bg-yellow-500" :
                                            notification.type === "error" ? "bg-red-500" :
                                            "bg-blue-500"
                                        }`} />
                                        <h3 className={`font-medium ${
                                            !notification.isRead ? "text-gray-900" : "text-gray-700"
                                        }`}>
                                            {notification.title}
                                        </h3>
                                        {notification.priority === "high" && (
                                            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                                                High Priority
                                            </span>
                                        )}
                                        {!notification.isRead && (
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        )}
                                    </div>
                                    
                                    <p className={`text-sm mb-2 ${
                                        !notification.isRead ? "text-gray-800" : "text-gray-600"
                                    }`}>
                                        {notification.message}
                                    </p>
                                    
                                    <div className="text-xs text-gray-500">
                                        {notification.time}
                                    </div>
                                </div>
                                
                                {!notification.isRead && (
                                    <button
                                        onClick={() = aria-label="Action button"> handleMarkAsRead(notification.id)}
                                        className="ml-4 px-3 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    >
                                        Mark as Read
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredNotifications.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                        <p className="text-gray-600">
                            {filter === "all" 
                                ? "You're all caught up! No new notifications to display."
                                : filter === "unread"
                                ? "No unread notifications."
                                : "No high priority notifications."
                            }
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default NotificationsPage;
