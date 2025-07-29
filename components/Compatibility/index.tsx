"use client";

import { dataService } from "@/lib/data-service";
import { useState } from "react";
import Tooltip from "@/components/Tooltip";
import Image from "@/components/Image";



type CompatibilityProps = {
    classItemName?: string;
};

const Compatibility = ({}) => {
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    const [activeIds, setActiveIds] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setActiveIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div>
            <div className="flex items-center mb-4">
                <div className="text-button">Compatibility</div>
                <Tooltip
                    className="ml-1.5"
                    content="Maximum 100 characters. No HTML or emoji allowed"
                />
            </div>
            <div className="flex flex-wrap -mt-3 -mx-1.5">
                {compatibility.map((item) => (
                    <div
                        className={`flex items-center h-12 mt-3 mx-1.5 gap-2 border border-s-stroke2 rounded-full px-2.5 text-button transition-colors cursor-pointer hover:border-s-highlight ${
                            activeIds.includes(item.id) ? "!border-s-focus" : ""
                        } ${classItemName || ""}`}
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                    >
                        <div className="dark:bg-shade-05 rounded">
                            <Image
                                className="size-6 opacity-100"
                                src={item.image}
                                width={24}
                                height={24}
                                alt={item.title}
                            />
                        </div>
                        <div className="truncate">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Compatibility;
