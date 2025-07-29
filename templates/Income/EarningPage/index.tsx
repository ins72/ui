"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import Layout from "@/components/Layout";
import RefundRequests from "@/components/RefundRequests";
import PopularProducts from "@/components/PopularProducts";
import Balance from "./Balance";
import RecentEarnings from "./RecentEarnings";
import Transactions from "./Transactions";
import Countries from "./Countries";



const EarningPage = ({}) => {
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
        <Layout title="Earning">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Balance />
                    <RecentEarnings />
                    <Transactions />
                </div>
                <div className="col-right">
                    <Countries />
                    <RefundRequests />
                    <PopularProducts
                        title="Top-earning products"
                        items={popularProducts}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default EarningPage;
