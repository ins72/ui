"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";
import { NumericFormat } from "react-number-format";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";

interface StatisticsData {
  id: string;
  title: string;
  price: number;
  counter: number;
  icon: string;
  tooltip: string;
}

const Statistics = ({}) => {
  const [statistics, setStatistics] = useState<StatisticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [statementsResponse, incomeResponse, payoutsResponse] = await Promise.all([
          dataService.getStatements({ limit: 1 }),
          dataService.getIncome({ limit: 1 }),
          dataService.getPayouts({ limit: 1 })
        ]);

        const stats: StatisticsData[] = [
          {
            id: "1",
            title: "Total Earnings",
            price: incomeResponse.income?.[0]?.amount || 0,
            counter: 0,
            icon: "chart",
            tooltip: "Total earnings from all sources"
          },
          {
            id: "2",
            title: "Total Payouts",
            price: payoutsResponse.payouts?.[0]?.amount || 0,
            counter: 0,
            icon: "wallet",
            tooltip: "Total payouts processed"
          },
          {
            id: "3",
            title: "Pending Balance",
            price: (incomeResponse.income?.[0]?.amount || 0) - (payoutsResponse.payouts?.[0]?.amount || 0),
            counter: 0,
            icon: "clock",
            tooltip: "Balance pending payout"
          }
        ];

        setStatistics(stats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card max-md:overflow-hidden">
        <div className="relative before:hidden after:hidden before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-8 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-3 after:w-8 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none max-md:before:block max-md:after:block">
            <div className="flex gap-8 p-5 max-lg:gap-6 max-lg:p-3 max-md:overflow-auto max-md:scrollbar-none max-md:-mx-3 max-md:px-6">
                {statistics.map((item) => (
                    <div
                        className="flex-1 pr-6 border-r border-shade-07/10 last:border-r-0 max-lg:nth-2:border-r-0 max-lg:last:hidden max-md:w-65 max-md:shrink-0 max-md:flex-auto max-md:nth-2:border-r max-md:last:block"
                        key={item.id}
                    >
                        <div className="flex items-center justify-center size-16 mb-8 rounded-full bg-b-surface1">
                            <Icon className="fill-t-primary" name={item.icon} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-sub-title-1">{item.title}</div>
                            <Tooltip content={item.tooltip} large />
                        </div>
                        <div className="flex">
                            <div className="mt-2 mr-2.5 text-h4 text-t-secondary">
                                $
                            </div>
                            <NumericFormat
                                className="text-h2"
                                value={item.price || item.counter}
                                thousandSeparator=","
                                decimalScale={0}
                                fixedDecimalScale
                                displayType="text"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Statistics;
