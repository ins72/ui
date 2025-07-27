"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import Card from "@/components/Card";
import Product from "@/components/Product";
import Button from "@/components/Button";



const TopEarningProducts = ({}) => {
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
        <Card classHead="!pl-3" title="Top-earning products">
            <div className="flex flex-col gap-1">
                {popularProducts.map((product) => (
                    <Product value={product} key={product.id} />
                ))}
            </div>
            <div className="pt-6 px-3 pb-3">
                <Button className="w-full" href="/products" as="link" isStroke>
                    All products
                </Button>
            </div>
        </Card>
    );
};

export default TopEarningProducts;
