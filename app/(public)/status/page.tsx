"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Wifi, Server, Database, Shield, Globe } from "lucide-react";
import Link from "next/link";

const StatusPage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const systemStatus = {
        overall: "operational",
        uptime: "99.99%",
        lastIncident: "2024-01-15",
        responseTime: "45ms"
    };

    const services = [
        {
            name: "API Services",
            status: "operational",
            description: "Core API endpoints and authentication",
            icon: Server,
            responseTime: "45ms",
            uptime: "99.99%"
        },
        {
            name: "Database",
            status: "operational",
            description: "Primary and backup database systems",
            icon: Database,
            responseTime: "12ms",
            uptime: "99.99%"
        },
        {
            name: "Authentication",
            status: "operational",
            description: "User authentication and authorization",
            icon: Shield,
            responseTime: "23ms",
            uptime: "99.99%"
        },
        {
            name: "CDN & Edge",
            status: "operational",
            description: "Content delivery and edge caching",
            icon: Globe,
            responseTime: "8ms",
            uptime: "99.99%"
        },
        {
            name: "File Storage",
            status: "operational",
            description: "File upload and storage services",
            icon: Wifi,
            responseTime: "67ms",
            uptime: "99.98%"
        },
        {
            name: "Email Services",
            status: "operational",
            description: "Transactional and marketing emails",
            icon: Activity,
            responseTime: "89ms",
            uptime: "99.97%"
        }
    ];

    const incidents = [
        {
            id: "incident-001",
            title: "Scheduled Maintenance - Database Optimization",
            status: "resolved",
            severity: "maintenance",
            startTime: "2024-01-15T02:00:00Z",
            endTime: "2024-01-15T04:00:00Z",
            description: "Scheduled maintenance to optimize database performance and improve query response times.",
            updates: [
                {
                    time: "2024-01-15T04:00:00Z",
                    message: "Maintenance completed successfully. All systems are operational."
                },
                {
                    time: "2024-01-15T03:30:00Z",
                    message: "Database optimization in progress. Expected completion in 30 minutes."
                },
                {
                    time: "2024-01-15T02:00:00Z",
                    message: "Scheduled maintenance has begun. Some services may experience brief interruptions."
                }
            ]
        },
        {
            id: "incident-002",
            title: "API Response Time Degradation",
            status: "resolved",
            severity: "minor",
            startTime: "2024-01-10T14:30:00Z",
            endTime: "2024-01-10T16:45:00Z",
            description: "Increased API response times affecting some endpoints. Issue has been identified and resolved.",
            updates: [
                {
                    time: "2024-01-10T16:45:00Z",
                    message: "Issue resolved. API response times have returned to normal levels."
                },
                {
                    time: "2024-01-10T15:30:00Z",
                    message: "Root cause identified. Implementing fix for API performance issue."
                },
                {
                    time: "2024-01-10T14:30:00Z",
                    message: "Investigating increased API response times. Some endpoints may be slower than usual."
                }
            ]
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "operational":
                return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400";
            case "degraded":
                return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400";
            case "outage":
                return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400";
            case "maintenance":
                return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400";
            default:
                return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-400";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "operational":
                return <CheckCircle className="h-5 w-5" />;
            case "degraded":
                return <AlertCircle className="h-5 w-5" />;
            case "outage":
                return <XCircle className="h-5 w-5" />;
            case "maintenance":
                return <Clock className="h-5 w-5" />;
            default:
                return <Clock className="h-5 w-5" />;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Mewayz</Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
                            <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link>
                            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
                            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign In</Link>
                            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        System <span className="text-blue-600">Status</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Real-time status of Mewayz services and infrastructure. 
                        We're committed to transparency and keeping you informed.
                    </p>
                    
                    {/* Current Time */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Current time: {currentTime.toLocaleString()}
                    </div>
                </div>
            </section>

            {/* Overall Status */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <CheckCircle className="h-12 w-12 text-green-600 mr-4" />
                                <div>
                                    <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
                                        All Systems Operational
                                    </h2>
                                    <p className="text-green-700 dark:text-green-300">
                                        All Mewayz services are running normally
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-green-900 dark:text-green-100">
                                    {systemStatus.uptime}
                                </div>
                                <div className="text-green-700 dark:text-green-300">
                                    Uptime (30 days)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Status */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Service Status
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Current status of all Mewayz services and components
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        <service.icon className="h-6 w-6 text-blue-600 mr-3" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {service.name}
                                        </h3>
                                    </div>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                                        {getStatusIcon(service.status)}
                                        <span className="ml-1 capitalize">{service.status}</span>
                                    </span>
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {service.description}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="text-gray-500 dark:text-gray-400">Response Time</div>
                                        <div className="font-medium text-gray-900 dark:text-white">{service.responseTime}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 dark:text-gray-400">Uptime</div>
                                        <div className="font-medium text-gray-900 dark:text-white">{service.uptime}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Incidents */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Recent Incidents
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Past incidents and maintenance events
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        {incidents.map((incident) => (
                            <div key={incident.id} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.severity)}`}>
                                                {getStatusIcon(incident.severity)}
                                                <span className="ml-1 capitalize">{incident.severity}</span>
                                            </span>
                                            <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                incident.status === 'resolved' 
                                                    ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400'
                                                    : 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400'
                                            }`}>
                                                {incident.status === 'resolved' ? 'Resolved' : 'Active'}
                                            </span>
                                        </div>
                                        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                                            <div>{formatDate(incident.startTime)}</div>
                                            {incident.endTime && <div>to {formatDate(incident.endTime)}</div>}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {incident.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {incident.description}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-gray-900 dark:text-white">Updates:</h4>
                                        {incident.updates.map((update, index) => (
                                            <div key={index} className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                                        {update.message}
                                                    </p>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-3 flex-shrink-0">
                                                        {formatDate(update.time)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Performance Metrics
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Key performance indicators and system health metrics
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                {systemStatus.uptime}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">30-Day Uptime</div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                {systemStatus.responseTime}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">Avg Response Time</div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                0
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">Active Incidents</div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">
                                24/7
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe to Updates */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get notified about system status updates and incidents
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                        />
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mewayz</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Empowering businesses with comprehensive enterprise solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link></li>
                                <li><Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</Link></li>
                                <li><Link href="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Integrations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link></li>
                                <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
                                <li><Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><Link href="/help" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Help Center</Link></li>
                                <li><Link href="/status" className="text-blue-600 dark:text-blue-400 font-medium">Status</Link></li>
                                <li><Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Documentation</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            © 2024 Mewayz. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StatusPage; 