"use client";

import React, { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";

import Card from "@/components/Card";
import CountryItem from "@/components/CountryItem";



const Countries = ({}) => {
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
        <Card classHead="!pl-3" title="Countries">
            <div className="flex flex-col gap-5 pt-1 px-3 pb-5">
                {countries.map((country) => (
                    <CountryItem key={country.id} value={country} />
                ))}
            </div>
        </Card>
    );
};

export default Countries;
