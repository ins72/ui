"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/infrastructure/api/apiClient";

interface StatCardProps {
    number: string | number;
    label: string;
    loading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, loading = false }) => (
    <div className="text-center">
        {loading ? (
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
        ) : (
            <>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{label}</div>
            </>
        )}
    </div>
);

const DynamicStats: React.FC = () => {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await apiClient.getPublicStats();
                setStats(data);
            } catch (error: any) {
                console.error('Error fetching stats:', error);
                setError(error.message || 'Failed to load statistics');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (error) {
        return (
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Unable to load statistics. Please try again later.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const formatNumber = (num: number): string => {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M+`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K+`;
        }
        return num.toString();
    };

    const formatCurrency = (amount: number): string => {
        if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(1)}M+`;
        } else if (amount >= 1000) {
            return `$${(amount / 1000).toFixed(1)}K+`;
        }
        return `$${amount.toLocaleString()}`;
    };

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard
                        number={stats ? formatNumber(stats.activeUsers) : "0"}
                        label="Active Users"
                        loading={loading}
                    />
                    <StatCard
                        number={stats ? formatCurrency(stats.totalRevenue) : "$0"}
                        label="Revenue Generated"
                        loading={loading}
                    />
                    <StatCard
                        number={stats?.uptime || "99.9%"}
                        label="Uptime"
                        loading={loading}
                    />
                    <StatCard
                        number={stats?.support || "24/7"}
                        label="Support"
                        loading={loading}
                    />
                </div>
            </div>
        </section>
    );
};

export default DynamicStats; 