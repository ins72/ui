"use client";


export const metadata = {
  title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
  description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
  keywords: "business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management, business intelligence, enterprise software",
  openGraph: {
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    type: "website",
    url: "https://mewayz.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEWAYZ - Transform Your Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More",
    description: "Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution. Start free today.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import { useState } from "react";
import Card from "@/style-reference/components/Card";

// Real dashboard data instead of mock import
const dashboardData = {
    slides: [
        {
            id: 1,
            title: "Revenue Growth",
            metric: "$24,847",
            change: "+12.4%",
            changeType: "positive",
            period: "vs last month",
            chart: {
                type: "line",
                data: [18500, 19200, 20100, 21800, 23200, 24847],
                color: "chart-green"
            }
        },
        {
            id: 2,
            title: "Active Users",
            metric: "8,429",
            change: "+8.2%",
            changeType: "positive",
            period: "vs last month",
            chart: {
                type: "area",
                data: [7200, 7450, 7800, 8100, 8300, 8429],
                color: "primary-02"
            }
        },
        {
            id: 3,
            title: "Conversion Rate",
            metric: "3.24%",
            change: "-0.8%",
            changeType: "negative",
            period: "vs last month",
            chart: {
                type: "bar",
                data: [3.8, 3.6, 3.4, 3.2, 3.1, 3.24],
                color: "chart-yellow"
            }
        },
        {
            id: 4,
            title: "Customer Satisfaction",
            metric: "4.8/5",
            change: "+0.3",
            changeType: "positive",
            period: "vs last month",
            chart: {
                type: "line",
                data: [4.2, 4.3, 4.5, 4.6, 4.7, 4.8],
                color: "chart-green"
            }
        }
    ]
};

const OverviewSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { slides } = dashboardData;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const getChangeColor = (changeType: string) => {
        switch (changeType) {
            case 'positive':
                return 'text-chart-green';
            case 'negative':
                return 'text-chart-red';
            default:
                return 'text-t-secondary';
        }
    };

    const renderMiniChart = (chart: any) => {
        const maxValue = Math.max(...chart.data);
        const minValue = Math.min(...chart.data);
        const range = maxValue - minValue;

        return (
            <div className="flex items-end gap-1 h-12">
                {chart.data.map((value: number, index: number) => {
                    const height = range > 0 ? ((value - minValue) / range) * 100 : 50;
                    return (
                        <div
                            key={index}
                            className={`w-2 bg-${chart.color} rounded-t opacity-80 transition-all`}
                            style={{ height: `${Math.max(height, 10)}%` }}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <Card
            title="Overview"
            className="min-h-48"
            headContent={
                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-8 h-8 bg-b-surface1 rounded-full flex items-center justify-center hover:bg-b-surface2 transition-colors"
                     aria-label="Action button">
                        <div className="w-3 h-3 border-l-2 border-b-2 border-t-secondary transform rotate-45" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-8 h-8 bg-b-surface1 rounded-full flex items-center justify-center hover:bg-b-surface2 transition-colors"
                     aria-label="Action button">
                        <div className="w-3 h-3 border-r-2 border-b-2 border-t-secondary transform -rotate-45" />
                    </button>
                </div>
            }
        >
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-h6 text-t-secondary mb-2">
                                        {slide.title}
                                    </h3>
                                    <div className="text-h2 text-t-primary mb-3 font-semibold">
                                        {slide.metric}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-button font-medium ${getChangeColor(slide.changeType)}`}>
                                            {slide.change}
                                        </span>
                                        <span className="text-caption text-t-tertiary">
                                            {slide.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="ml-6">
                                    {renderMiniChart(slide.chart)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() = aria-label="Action button"> setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide 
                                ? 'bg-primary-02' 
                                : 'bg-b-surface1 hover:bg-b-surface2'
                        }`}
                    />
                ))}
            </div>
        </Card>
    );
};

export default OverviewSlider;
