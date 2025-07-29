"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";



const Engagement = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getProducts({ limit: 10 });
        if (response.products) {
          setData(response.products);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    const CustomTooltip = ({
        payload,
        label,
    }: {
        payload: { value: number }[];
        label: string;
    }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="mb-0.5 text-caption text-t-light/80">
                        {label}
                    </div>
                    <div className="text-caption font-bold">
                        <NumericFormat
                            value={payload[0].value}
                            thousandSeparator=","
                            decimalScale={0}
                            fixedDecimalScale
                            displayType="text"
                        />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <Card classHead="!pl-3" title="Engagement">
            <div className="px-3 pb-3">
                <div className="h-50">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={150}
                            height={40}
                            data={engagementChartData}
                            margin={{
                                top: 0,
                                right: 6,
                                left: 12,
                                bottom: 0,
                            }}
                        >
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fontSize: "12px",
                                    fill: "var(--text-tertiary)",
                                }}
                                height={32}
                                dy={10}
                                tickFormatter={(value) => value.slice(0, 2)}
                            />
                            <Tooltip
                                content={
                                    <CustomTooltip payload={[]} label="" />
                                }
                                cursor={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="amt"
                                stroke="var(--chart-green)"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{
                                    r: 4,
                                    fill: "var(--backgrounds-surface2)",
                                    stroke: "var(--chart-green)",
                                    strokeWidth: 3,
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
};

export default Engagement;
