import { Metadata } from "next";

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every minute for status updates

export const metadata: Metadata = {
    title: "System Status - MEWAYZ Platform Health & Uptime | Real-time Monitoring",
    description: "Check the real-time status of MEWAYZ services including API, dashboard, payments, and integrations. View current uptime, recent incidents, and maintenance schedules.",
    keywords: "system status, uptime, service health, platform monitoring, incident reports, maintenance",
    openGraph: {
        title: "MEWAYZ System Status - Platform Health & Uptime",
        description: "Real-time monitoring of MEWAYZ services. Check current status, uptime statistics, and any ongoing incidents.",
        type: "website",
        siteName: "MEWAYZ"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function StatusPage() {
    const currentStatus = "operational"; // This would come from real monitoring
    const lastUpdated = new Date().toISOString();

    const services = [
        {
            name: "Core Platform",
            status: "operational",
            uptime: 99.98,
            responseTime: 145,
            description: "Main application and dashboard"
        },
        {
            name: "API Services",
            status: "operational", 
            uptime: 99.99,
            responseTime: 89,
            description: "REST API and webhooks"
        },
        {
            name: "Payment Processing",
            status: "operational",
            uptime: 99.95,
            responseTime: 234,
            description: "Stripe and payment gateways"
        },
        {
            name: "Email Delivery",
            status: "operational",
            uptime: 99.97,
            responseTime: 156,
            description: "Transactional and marketing emails"
        },
        {
            name: "File Storage",
            status: "operational",
            uptime: 99.99,
            responseTime: 67,
            description: "Images, documents, and media"
        },
        {
            name: "Database",
            status: "operational",
            uptime: 99.99,
            responseTime: 23,
            description: "Primary data storage"
        }
    ];

    const incidents = [
        {
            id: 1,
            title: "Scheduled Maintenance - Database Optimization",
            status: "completed",
            date: "2024-01-14T02:00:00Z",
            duration: "30 minutes",
            impact: "No service interruption",
            description: "Routine database optimization and indexing to improve performance."
        },
        {
            id: 2,
            title: "API Rate Limiting Adjustment",
            status: "completed",
            date: "2024-01-10T10:30:00Z", 
            duration: "5 minutes",
            impact: "Brief API slowdown",
            description: "Adjusted rate limiting rules to handle increased traffic load."
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "operational":
                return "text-chart-green";
            case "degraded":
                return "text-chart-yellow";
            case "outage":
                return "text-chart-red";
            case "maintenance":
                return "text-primary-02";
            default:
                return "text-t-secondary";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "operational":
                return "✅";
            case "degraded":
                return "⚠️";
            case "outage":
                return "❌";
            case "maintenance":
                return "🔧";
            default:
                return "❓";
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-b-surface1 dark:bg-shade-01">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-h1 text-t-primary mb-6 max-md:text-h2">
                        System Status
                    </h1>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className={`text-4xl ${getStatusColor(currentStatus)}`}>
                            {getStatusIcon(currentStatus)}
                        </div>
                        <div>
                            <div className={`text-h4 ${getStatusColor(currentStatus)} capitalize`}>
                                All Systems {currentStatus}
                            </div>
                            <div className="text-body-2 text-t-secondary">
                                Last updated: {formatDate(lastUpdated)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Status */}
                <div className="mb-12">
                    <h2 className="text-h4 text-t-primary mb-6">
                        Service Health
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div key={service.name} className="card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`text-xl ${getStatusColor(service.status)}`}>
                                            {getStatusIcon(service.status)}
                                        </div>
                                        <div>
                                            <h3 className="text-button text-t-primary font-medium">
                                                {service.name}
                                            </h3>
                                            <p className="text-caption text-t-secondary">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`text-button font-medium capitalize ${getStatusColor(service.status)}`}>
                                        {service.status}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-b-surface2 rounded-2xl p-4">
                                        <div className="text-caption text-t-secondary mb-1">
                                            Uptime (30d)
                                        </div>
                                        <div className="text-h6 text-chart-green font-semibold">
                                            {service.uptime}%
                                        </div>
                                    </div>
                                    <div className="bg-b-surface2 rounded-2xl p-4">
                                        <div className="text-caption text-t-secondary mb-1">
                                            Response Time
                                        </div>
                                        <div className="text-h6 text-t-primary font-semibold">
                                            {service.responseTime}ms
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Uptime Statistics */}
                <div className="mb-12">
                    <h2 className="text-h4 text-t-primary mb-6">
                        Overall Platform Performance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="card p-6 text-center">
                            <div className="text-h2 text-chart-green font-semibold mb-2">
                                99.98%
                            </div>
                            <div className="text-button text-t-secondary">
                                30-Day Uptime
                            </div>
                        </div>
                        <div className="card p-6 text-center">
                            <div className="text-h2 text-primary-02 font-semibold mb-2">
                                127ms
                            </div>
                            <div className="text-button text-t-secondary">
                                Avg Response Time
                            </div>
                        </div>
                        <div className="card p-6 text-center">
                            <div className="text-h2 text-chart-green font-semibold mb-2">
                                99.99%
                            </div>
                            <div className="text-button text-t-secondary">
                                90-Day Uptime
                            </div>
                        </div>
                        <div className="card p-6 text-center">
                            <div className="text-h2 text-t-primary font-semibold mb-2">
                                2
                            </div>
                            <div className="text-button text-t-secondary">
                                Incidents (30d)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Incidents */}
                <div className="mb-12">
                    <h2 className="text-h4 text-t-primary mb-6">
                        Recent Incidents & Maintenance
                    </h2>
                    <div className="card p-6">
                        {incidents.length > 0 ? (
                            <div className="space-y-6">
                                {incidents.map((incident) => (
                                    <div key={incident.id} className="border-b border-s-stroke2 last:border-b-0 pb-6 last:pb-0">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-button text-t-primary font-medium mb-2">
                                                    {incident.title}
                                                </h3>
                                                <p className="text-body-2 text-t-secondary mb-3">
                                                    {incident.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-caption text-t-secondary">
                                                    <span>
                                                        <strong>Date:</strong> {formatDate(incident.date)}
                                                    </span>
                                                    <span>
                                                        <strong>Duration:</strong> {incident.duration}
                                                    </span>
                                                    <span>
                                                        <strong>Impact:</strong> {incident.impact}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-caption font-medium capitalize ${
                                                incident.status === 'completed' 
                                                    ? 'bg-chart-green/20 text-chart-green'
                                                    : 'bg-chart-yellow/20 text-chart-yellow'
                                            }`}>
                                                {incident.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-4">✨</div>
                                <div className="text-h6 text-t-primary mb-2">
                                    No Recent Incidents
                                </div>
                                <div className="text-body-2 text-t-secondary">
                                    All systems have been running smoothly
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Subscribe to Updates */}
                <div className="card p-8 text-center">
                    <h2 className="text-h4 text-t-primary mb-4">
                        Stay Informed
                    </h2>
                    <p className="text-body-1 text-t-secondary mb-6 max-w-2xl mx-auto">
                        Subscribe to status updates and get notified immediately about any service interruptions or scheduled maintenance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none"
                        />
                        <button className="bg-primary-02 text-white px-6 py-3 rounded-2xl text-button font-medium hover:bg-primary-01 transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 