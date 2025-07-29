"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { dataService } from "@/lib/data-service";

interface TrafficChannel {
    id: number;
    name: string;
    percentage: number;
    value: number;
    icon: string;
}

const TrafficChannel = ({}) => {
    const [trafficChannels, setTrafficChannels] = useState<TrafficChannel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrafficChannels = async () => {
            try {
                setLoading(true);
                
                const response = await dataService.getTrafficChannels({ limit: 10 });
                if (Array.isArray(response.data)) {
                    const transformedChannels = response.data.map((channel: any, index: number) => ({
                        id: index + 1,
                        name: channel.name,
                        percentage: channel.percentage,
                        value: channel.value,
                        icon: channel.icon || 'chart'
                    }));
                    setTrafficChannels(transformedChannels);
                } else {
                    // If no data exists, set empty array
                    setTrafficChannels([]);
                }
            } catch (err) {
                console.error('Error fetching traffic channels:', err);
                setError('Failed to load traffic channels');
            } finally {
                setLoading(false);
            }
        };

        fetchTrafficChannels();
    }, []);

    if (loading) {
        return (
            <Card title="Traffic channels">
                <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            </Card>
        );
    }

    if (error) {
        return (
            <Card title="Traffic channels">
                <div className="flex items-center justify-center h-32 text-red-600">
                    {error}
                </div>
            </Card>
        );
    }

    return (
        <Card title="Traffic channels">
            <div className="flex flex-col gap-3">
                {trafficChannels.map((channel) => (
                    <div
                        className="flex items-center justify-between p-3 rounded-lg bg-s-surface2"
                        key={channel.id}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-s-focus flex items-center justify-center">
                                <span className="text-xs text-white">{channel.icon}</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium">{channel.name}</div>
                                <div className="text-xs text-t-secondary">{channel.percentage}%</div>
                            </div>
                        </div>
                        <div className="text-sm font-medium">
                            {channel.value.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default TrafficChannel; 