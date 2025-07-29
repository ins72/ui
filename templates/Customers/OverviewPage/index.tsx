"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import Layout from "@/components/Layout";
import CardChartPie from "@/components/CardChartPie";
import Overview from "./Overview";
import TrafficChannel from "./TrafficChannel";
import ActiveTimes from "./ActiveTimes";
import ShareProducts from "./ShareProducts";
import RefundRequests from "./RefundRequests";
import Countries from "./Countries";
import Messages from "./Messages";


const OverviewPage = ({}) => {
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
    return (
        <Layout title="Dashboard">
            <div className="flex max-lg:flex-col">
                <div className="col-left">
                    <Overview />
                    <TrafficChannel />
                    <ActiveTimes />
                    <ShareProducts />
                </div>
                <div className="col-right">
                    <RefundRequests />
                    <CardChartPie title="Devices" data={devicesChartData} />
                    <Countries />
                    <Messages />
                    <CardChartPie title="Gender" data={devicesGenderData} />
                </div>
            </div>
        </Layout>
    );
};

export default OverviewPage;
