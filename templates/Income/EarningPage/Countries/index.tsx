"use client";

import { dataService } from "@/lib/data-service";
import { useState } from "react";
import Card from "@/components/Card";
import CountryItem from "@/components/CountryItem";



const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last 6 month" },
];

const Countries = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getProducts({ limit: 10 });
        if (response.data) {
          setData(response.data);
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
    const [duration, setDuration] = useState(durations[2]);

    return (
        <Card
            classHead="!pl-3"
            title="Countries"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="flex flex-col gap-5 p-3 pb-5">
                {countriesEarnings.map((country) => (
                    <CountryItem key={country.id} value={country} />
                ))}
            </div>
        </Card>
    );
};

export default Countries;
