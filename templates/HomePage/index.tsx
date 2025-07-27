"use client";

import { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";
import Layout from "@/components/Layout";
import PopularProducts from "@/components/PopularProducts";
import RefundRequests from "@/components/RefundRequests";
import Overview from "./Overview";
import ProductView from "./ProductView";
import OverviewSlider from "./OverviewSlider";
import GetMoreCustomers from "./GetMoreCustomers";
import Comments from "./Comments";



const HomePage = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getProducts({ limit: 5, status: 'released' });
        if (response.products) {
          setData(response.products);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
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
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Overview />
                    <ProductView />
                    <OverviewSlider />
                    <GetMoreCustomers />
                </div>
                <div className="col-right">
                    <PopularProducts
                        title="Popular products"
                        items={data}
                    />
                    <Comments />
                    <RefundRequests />
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
