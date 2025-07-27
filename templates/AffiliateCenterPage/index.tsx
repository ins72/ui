"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import Layout from "@/components/Layout";
import PopularProducts from "@/components/PopularProducts";
import ProductView from "@/components/ProductView";
import Insights from "./Insights";
import Performance from "./Performance";
import CampaignEarning from "./CampaignEarning";
import CreateLink from "./CreateLink";



const AffiliateCenterPage = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getAffiliateCenter();
        if (response.affiliateData) {
          setData(response.affiliateData);
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
        <Layout title="Affiliate center">
            <Insights />
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Performance />
                    <CampaignEarning />
                </div>
                <div className="col-right">
                    <CreateLink />
                    <PopularProducts
                        title="Popular products"
                        items={popularProducts}
                    />
                    <ProductView />
                </div>
            </div>
        </Layout>
    );
};

export default AffiliateCenterPage;
