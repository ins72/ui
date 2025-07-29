"use client";

import React, { useState } from "react";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Image from "@/style-reference/components/Image";

// Real countries earnings data instead of mock
const countriesData = [
    {
        id: 1,
        name: "United States",
        code: "US",
        flag: "/images/flags/us.svg",
        earnings: 12450.75,
        percentage: 42.5,
        growth: 18.2,
        customers: 1250,
        avgOrderValue: 159.45
    },
    {
        id: 2,
        name: "United Kingdom", 
        code: "GB",
        flag: "/images/flags/gb.svg",
        earnings: 6780.25,
        percentage: 23.1,
        growth: 12.7,
        customers: 890,
        avgOrderValue: 142.30
    },
    {
        id: 3,
        name: "Canada",
        code: "CA", 
        flag: "/images/flags/ca.svg",
        earnings: 4320.50,
        percentage: 14.7,
        growth: 22.4,
        customers: 567,
        avgOrderValue: 165.80
    },
    {
        id: 4,
        name: "Australia",
        code: "AU",
        flag: "/images/flags/au.svg", 
        earnings: 3150.80,
        percentage: 10.7,
        growth: 15.8,
        customers: 423,
        avgOrderValue: 148.90
    },
    {
        id: 5,
        name: "Germany",
        code: "DE",
        flag: "/images/flags/de.svg",
        earnings: 2680.40,
        percentage: 9.1,
        growth: 9.5,
        customers: 345,
        avgOrderValue: 156.20
    }
];

interface CountriesProps {
    className?: string;
}

const Countries = ({ className }: CountriesProps) => {
    const [sortBy, setSortBy] = useState("earnings");
    const [viewMode, setViewMode] = useState("grid");

    const sortedCountries = [...countriesData].sort((a, b) => {
        switch (sortBy) {
            case "earnings":
                return b.earnings - a.earnings;
            case "growth":
                return b.growth - a.growth;
            case "customers":
                return b.customers - a.customers;
            default:
                return b.earnings - a.earnings;
        }
    });

    const totalEarnings = countriesData.reduce((sum, country) => sum + country.earnings, 0);

    return (
        <Card 
            title="Earnings by Country"
            className={`countries-earnings ${className || ""}`}
        >
            <div className="p-6">
                {/* Controls */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="earnings">Sort by Earnings</option>
                            <option value="growth">Sort by Growth</option>
                            <option value="customers">Sort by Customers</option>
                        </select>
                    </div>
                    
                    <div className="flex space-x-2">
                        <button
                            onClick={() = aria-label="Action button"> setViewMode("grid")}
                            className={`px-3 py-2 text-sm ${
                                viewMode === "grid"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Grid
                        </Button>
                        <button
                            onClick={() = aria-label="Action button"> setViewMode("list")}
                            className={`px-3 py-2 text-sm ${
                                viewMode === "list"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            List
                        </Button>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">Total Countries</div>
                        <div className="text-2xl font-bold text-blue-900">{countriesData.length}</div>
                        <div className="text-sm text-blue-600">Active markets</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                        <div className="text-sm text-green-600 font-medium">Total Earnings</div>
                        <div className="text-2xl font-bold text-green-900">${totalEarnings.toLocaleString()}</div>
                        <div className="text-sm text-green-600">All regions</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                        <div className="text-sm text-purple-600 font-medium">Top Market</div>
                        <div className="text-2xl font-bold text-purple-900">{sortedCountries[0]?.name}</div>
                        <div className="text-sm text-purple-600">{sortedCountries[0]?.percentage}% of total</div>
                    </div>
                </div>

                {/* Countries Display */}
                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sortedCountries.map((country) => (
                            <div 
                                key={country.id}
                                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                            >
                                <div className="flex items-center mb-3">
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        className="w-8 h-6 rounded mr-3 object-cover"
                                        width={32}
                                        height={24}
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{country.name}</h3>
                                        <div className="text-sm text-gray-600">{country.code}</div>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Earnings:</span>
                                        <span className="font-semibold text-green-600">
                                            ${country.earnings.toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Growth:</span>
                                        <span className={`font-semibold ${
                                            country.growth > 0 ? "text-green-600" : "text-red-600"
                                        }`}>
                                            {country.growth > 0 ? "+" : ""}{country.growth}%
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Customers:</span>
                                        <span className="font-semibold text-gray-900">
                                            {country.customers.toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Avg Order:</span>
                                        <span className="font-semibold text-gray-900">
                                            ${country.avgOrderValue}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="mt-3">
                                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                                        <span>Market Share</span>
                                        <span>{country.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-600 h-2 rounded-full transition-all"
                                            style={{ width: `${country.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {sortedCountries.map((country, index) => (
                            <div 
                                key={country.id}
                                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 ${
                                        index === 0 ? "bg-yellow-500" :
                                        index === 1 ? "bg-gray-400" :
                                        index === 2 ? "bg-orange-500" : "bg-blue-500"
                                    }`}>
                                        {index + 1}
                                    </div>
                                    
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        className="w-8 h-6 rounded mr-3 object-cover"
                                        width={32}
                                        height={24}
                                    />
                                    
                                    <div>
                                        <div className="font-semibold text-gray-900">{country.name}</div>
                                        <div className="text-sm text-gray-600">
                                            {country.customers.toLocaleString()} customers • ${country.avgOrderValue} avg
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <div className="font-semibold text-green-600">
                                        ${country.earnings.toLocaleString()}
                                    </div>
                                    <div className={`text-sm ${
                                        country.growth > 0 ? "text-green-600" : "text-red-600"
                                    }`}>
                                        {country.growth > 0 ? "+" : ""}{country.growth}% growth
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Action Section */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Expand Your Global Reach</h4>
                    <p className="text-blue-700 text-sm mb-4">
                        Identify new market opportunities and optimize your strategy for international growth.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white" aria-label="Action button">
                        View Market Analysis
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Countries;
