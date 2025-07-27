"use client";

import { useState, useEffect } from "react";
import { dataService } from "@/lib/data-service";
import Tabs from "@/components/Tabs";
import Item from "./Item";
import { TabsOption } from "@/types/tabs";



const Faq = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getFaqs();
        if (response.faqs) {
          setData(response.faqs);
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
  
  const [activeTab, setActiveTab] = useState(data[0] || { id: 1, name: 'General', items: [] });
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const handleTabChange = (tab: TabsOption) => {
        setActiveTab(data[tab.id - 1] || data[0]);
        setActiveItemId(null);
    };

    const handleItemClick = (itemId: number) => {
        setActiveItemId(activeItemId === itemId ? null : itemId);
    };

    const currentItems = data[activeTab.id - 1]?.items || data[0]?.items || [];

    return (
        <div className="">
            <h2 className="mb-10 text-center text-h3 max-lg:mb-6 max-lg:text-h4 max-md:text-left">
                Frequently asked questions
            </h2>
            <Tabs
                className="justify-center mb-4 max-md:justify-stretch max-md:-mx-6 max-md:overflow-x-auto max-md:scrollbar-none max-md:before:shrink-0 max-md:before:w-5 max-md:after:shrink-0 max-md:after:w-5"
                classButton="max-md:shrink-0"
                items={data}
                value={activeTab}
                setValue={handleTabChange}
            />
            <div className="">
                {currentItems.map((item) => (
                    <Item
                        value={item}
                        isActive={activeItemId === item.id}
                        onClick={() => handleItemClick(item.id)}
                        key={`${activeTab.id}-${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
