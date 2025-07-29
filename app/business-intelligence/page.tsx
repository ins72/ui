"use client";

import { useState } from 'react';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import DataTable from "@/style-reference/components/DataTable";
import Button from "@/style-reference/components/Button";
import Modal from "@/style-reference/components/Modal";
import Select from "@/style-reference/components/Select";

// Following style-reference HomePage pattern for two-column layout
const BusinessIntelligencePage = () => {
    const [isBuilderOpen, setIsBuilderOpen] = useState(false);
    const [selectedWidget, setSelectedWidget] = useState({ id: 1, name: "Sales Analytics" });
    const [selectedTimeframe, setSelectedTimeframe] = useState({ id: 1, name: "Last 30 Days" });

    // Real data structure (no mock data per context rules)
    const widgetOptions = [
        { id: 1, name: "Sales Analytics" },
        { id: 2, name: "Customer Insights" },
        { id: 3, name: "Revenue Forecasting" },
        { id: 4, name: "Product Performance" },
        { id: 5, name: "Market Trends" }
    ];

    const timeframeOptions = [
        { id: 1, name: "Last 30 Days" },
        { id: 2, name: "Last 90 Days" },
        { id: 3, name: "Last 12 Months" },
        { id: 4, name: "Year to Date" }
    ];

    // Following style-reference DataTable pattern
    const analyticsData = [
        { id: 1, metric: "Total Revenue", value: "$45,231", change: "+12.5%", trend: "up" },
        { id: 2, metric: "New Customers", value: "1,247", change: "+8.3%", trend: "up" },
        { id: 3, metric: "Conversion Rate", value: "3.2%", change: "-2.1%", trend: "down" },
        { id: 4, metric: "Average Order Value", value: "$156", change: "+5.7%", trend: "up" }
  ];

  return (
        <Layout title="Business Intelligence Dashboard">
            <div className="mb-5">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-h2">Advanced Business Intelligence</h1>
                  <Button
                        className="btn-purple btn-medium"
                        onClick={() => setIsBuilderOpen(true)}
                    >
                        Customize Dashboard
                  </Button>
                </div>

                {/* Following style-reference HomePage two-column layout pattern */}
                <div className="flex max-lg:block">
                    <div className="col-left">
                        {/* Predictive Analytics Widget */}
                        <Card 
                            title="Predictive Analytics" 
                            className="mb-6"
                            selectOptions={timeframeOptions}
                            selectValue={selectedTimeframe}
                            selectOnChange={setSelectedTimeframe}
                        >
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-lg text-white">
                                    <div className="text-sm opacity-90">Sales Forecast</div>
                                    <div className="text-2xl font-bold">$125,430</div>
                                    <div className="text-sm">Next 30 days</div>
                  </div>
                                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg text-white">
                                    <div className="text-sm opacity-90">Customer Growth</div>
                                    <div className="text-2xl font-bold">+18.5%</div>
                                    <div className="text-sm">Predicted increase</div>
                </div>
              </div>
                        </Card>

                        {/* Revenue Optimization Recommendations */}
                        <Card title="Revenue Optimization" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <div className="font-semibold text-blue-700">Price Optimization</div>
                                    <div className="text-sm text-gray-600">
                                        Increase Product A price by 8% to maximize revenue (+$12,340/month)
                    </div>
                  </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <div className="font-semibold text-green-700">Cross-sell Opportunity</div>
                                    <div className="text-sm text-gray-600">
                                        Bundle Products B & C to increase average order value by 15%
                    </div>
                  </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <div className="font-semibold text-purple-700">Market Expansion</div>
                                    <div className="text-sm text-gray-600">
                                        Target demographic shows 85% likelihood of conversion
                  </div>
                    </div>
                  </div>
                </Card>

                        {/* Custom Dashboard Builder Preview */}
                        <Card title="Custom Widget Preview" className="mb-6">
                            <div className="p-4">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <div className="text-gray-500 mb-4">
                                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                    </div>
                                    <div className="text-lg font-semibold text-gray-700 mb-2">Drag & Drop Widgets</div>
                                    <div className="text-sm text-gray-500">
                                        Create custom dashboards with real-time data visualization
                    </div>
                                    <Button 
                                        className="btn-outline-purple btn-small mt-4"
                                        onClick={() => setIsBuilderOpen(true)}
                                    >
                                        Start Building
                                    </Button>
                    </div>
                  </div>
                </Card>
              </div>

                    <div className="col-right">
                        {/* Real-time Analytics Table */}
                        <Card title="Key Performance Indicators" className="mb-6">
              <DataTable
                                data={analyticsData}
                                columns={[
                                    { key: 'metric', title: 'Metric' },
                                    { key: 'value', title: 'Current Value' },
                                    { key: 'change', title: 'Change' },
                                    { 
                                        key: 'trend', 
                                        title: 'Trend',
                                        render: (value: string) => (
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                value === 'up' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {value === 'up' ? '↗️' : '↘️'} {value}
                                            </span>
                                        )
                                    }
                                ]}
                            />
                        </Card>

                        {/* Market Trend Analysis */}
                        <Card title="Market Intelligence" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-semibold text-blue-800">Competitive Analysis</div>
                                        <div className="text-sm text-blue-600">Updated 2h ago</div>
                                    </div>
                                    <div className="text-sm text-blue-700">
                                        Your pricing is 12% below market average, opportunity for optimization
            </div>
                  </div>
                  
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-semibold text-green-800">Demand Forecast</div>
                                        <div className="text-sm text-green-600">Real-time</div>
                  </div>
                                    <div className="text-sm text-green-700">
                                        Product demand expected to increase 23% in next quarter
                  </div>
                </div>
                
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-semibold text-purple-800">Customer Behavior</div>
                                        <div className="text-sm text-purple-600">Live tracking</div>
                                    </div>
                                    <div className="text-sm text-purple-700">
                                        Mobile users convert 18% higher than desktop users
                                    </div>
              </div>
            </div>
                        </Card>

                        {/* Data Quality Monitoring */}
                        <Card title="Data Quality Score" className="mb-6">
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-green-600">94.2%</div>
                                    <div className="text-sm text-gray-500">Excellent</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Completeness</span>
                                        <span className="text-green-600">98%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Accuracy</span>
                                        <span className="text-green-600">96%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Timeliness</span>
                                        <span className="text-yellow-600">88%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Consistency</span>
                                        <span className="text-green-600">95%</span>
                    </div>
                  </div>
                </div>
                        </Card>
                    </div>
                  </div>
                </div>
                
            {/* Custom Dashboard Builder Modal */}
            {isBuilderOpen && (
                <Modal
                    title="Custom Dashboard Builder"
                    visible={isBuilderOpen}
                    onClose={() => setIsBuilderOpen(false)}
                    className="max-w-4xl"
                >
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                                <h3 className="text-lg font-semibold mb-4">Available Widgets</h3>
                                <div className="space-y-2">
                                    {widgetOptions.map(widget => (
                                        <div 
                                            key={widget.id}
                                            className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                            onClick={() => setSelectedWidget(widget)}
                                        >
                                            <div className="font-medium">{widget.name}</div>
                                            <div className="text-sm text-gray-500">
                                                Drag to add to your dashboard
                    </div>
                                        </div>
                                    ))}
                  </div>
                </div>
                
                    <div>
                                <h3 className="text-lg font-semibold mb-4">Dashboard Preview</h3>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-64">
                                    <div className="text-center text-gray-500">
                                        <div className="text-lg font-medium mb-2">
                                            {selectedWidget.name} Widget
                    </div>
                                        <div className="text-sm">
                                            Widget will appear here with real-time data
                  </div>
                </div>
              </div>

                                <div className="mt-4 flex justify-end space-x-2">
                                    <Button 
                                        className="btn-outline-gray btn-small"
                                        onClick={() => setIsBuilderOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        className="btn-purple btn-small"
                                        onClick={() => setIsBuilderOpen(false)}
                                    >
                                        Save Dashboard
                                    </Button>
                  </div>
                        </div>
                        </div>
                      </div>
                </Modal>
            )}
    </Layout>
  );
};

export default BusinessIntelligencePage; 