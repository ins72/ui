"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tabs from "@/style-reference/components/Tabs";
import Field from "@/style-reference/components/Field";
import Select from "@/style-reference/components/Select";
import Badge from "@/style-reference/components/Badge";
import DataTable from "@/style-reference/components/DataTable";

export const dynamic = 'force-dynamic';

interface RevenueStream {
  _id: string;
  streamName: string;
  type: string;
  pricing: {
    model: string;
    amount: number;
    currency: string;
  };
  analytics: {
    totalRevenue: number;
    subscribers: number;
    conversionRate: number;
    averageOrderValue: number;
  };
  status: string;
  createdAt: string;
}

interface MarketplaceService {
  _id: string;
  serviceType: string;
  title: string;
  pricing: {
    basePrice: number;
    pricingType: string;
  };
  ratings: {
    average: number;
    totalReviews: number;
  };
  orders: {
    completed: number;
    totalEarnings: number;
  };
  status: string;
}

const tabOptions = [
  { id: 1, name: "Revenue Streams" },
  { id: 2, name: "Creator Marketplace" },
  { id: 3, name: "Smart Pricing" },
  { id: 4, name: "Revenue Analytics" }
];

const revenueTypes = [
  { id: 1, name: "Courses" },
  { id: 2, name: "Digital Products" },
  { id: 3, name: "Memberships" },
  { id: 4, name: "Services" },
  { id: 5, name: "Affiliate Marketing" },
  { id: 6, name: "Sponsorships" }
];

const pricingModels = [
  { id: 1, name: "One-time" },
  { id: 2, name: "Subscription" },
  { id: 3, name: "Tier-based" },
  { id: 4, name: "Pay-per-view" }
];

const serviceTypes = [
  { id: 1, name: "Consulting" },
  { id: 2, name: "Design" },
  { id: 3, name: "Writing" },
  { id: 4, name: "Video Editing" },
  { id: 5, name: "Social Media Management" },
  { id: 6, name: "Development" }
];

export default function CreatorMonetizationPage() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  const [loading, setLoading] = useState(false);
  
  // Revenue Streams State
  const [revenueStreams, setRevenueStreams] = useState<RevenueStream[]>([]);
  const [streamName, setStreamName] = useState("");
  const [selectedType, setSelectedType] = useState(revenueTypes[0]);
  const [selectedPricingModel, setSelectedPricingModel] = useState(pricingModels[0]);
  const [amount, setAmount] = useState("");
  
  // Marketplace State
  const [marketplaceServices, setMarketplaceServices] = useState<MarketplaceService[]>([]);
  const [serviceTitle, setServiceTitle] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState(serviceTypes[0]);
  const [servicePrice, setServicePrice] = useState("");
  
  // Analytics State
  const [analytics, setAnalytics] = useState({
    totalRevenue: 0,
    monthlyRecurring: 0,
    averageOrderValue: 0,
    conversionRate: 0,
    topRevenueStream: "",
    growthRate: 0
  });

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      switch (activeTab.id) {
        case 1:
          await loadRevenueStreams();
          break;
        case 2:
          await loadMarketplaceServices();
          break;
        case 4:
          await loadAnalytics();
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadRevenueStreams = async () => {
    // Simulate API call - replace with actual API
    const mockData: RevenueStream[] = [
      {
        _id: "1",
        streamName: "Premium Course",
        type: "courses",
        pricing: { model: "one-time", amount: 199, currency: "USD" },
        analytics: { totalRevenue: 15680, subscribers: 78, conversionRate: 12.5, averageOrderValue: 199 },
        status: "active",
        createdAt: "2024-01-15"
      },
      {
        _id: "2", 
        streamName: "Monthly Membership",
        type: "memberships",
        pricing: { model: "subscription", amount: 29, currency: "USD" },
        analytics: { totalRevenue: 8700, subscribers: 300, conversionRate: 8.2, averageOrderValue: 29 },
        status: "active",
        createdAt: "2024-01-10"
      }
    ];
    setRevenueStreams(mockData);
  };

  const loadMarketplaceServices = async () => {
    // Simulate API call - replace with actual API
    const mockData: MarketplaceService[] = [
      {
        _id: "1",
        serviceType: "design",
        title: "Logo Design Package",
        pricing: { basePrice: 299, pricingType: "fixed" },
        ratings: { average: 4.8, totalReviews: 24 },
        orders: { completed: 15, totalEarnings: 4485 },
        status: "active"
      },
      {
        _id: "2",
        serviceType: "consulting",
        title: "Business Strategy Consultation",
        pricing: { basePrice: 150, pricingType: "hourly" },
        ratings: { average: 5.0, totalReviews: 12 },
        orders: { completed: 8, totalEarnings: 2400 },
        status: "active"
      }
    ];
    setMarketplaceServices(mockData);
  };

  const loadAnalytics = async () => {
    // Simulate API call - replace with actual API
    setAnalytics({
      totalRevenue: 24380,
      monthlyRecurring: 8700,
      averageOrderValue: 114,
      conversionRate: 10.4,
      topRevenueStream: "Premium Course",
      growthRate: 23.5
    });
  };

  const handleCreateRevenueStream = async () => {
    if (!streamName.trim() || !amount) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - replace with actual API
      const newStream: RevenueStream = {
        _id: Date.now().toString(),
        streamName,
        type: selectedType.name.toLowerCase(),
        pricing: { 
          model: selectedPricingModel.name.toLowerCase(), 
          amount: parseFloat(amount), 
          currency: "USD" 
        },
        analytics: { totalRevenue: 0, subscribers: 0, conversionRate: 0, averageOrderValue: 0 },
        status: "active",
        createdAt: new Date().toISOString()
      };
      
      setRevenueStreams(prev => [newStream, ...prev]);
      setStreamName("");
      setAmount("");
      alert('Revenue stream created successfully!');
    } catch (error) {
      console.error('Error creating revenue stream:', error);
      alert('Error creating revenue stream. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateMarketplaceService = async () => {
    if (!serviceTitle.trim() || !servicePrice) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - replace with actual API
      const newService: MarketplaceService = {
        _id: Date.now().toString(),
        serviceType: selectedServiceType.name.toLowerCase(),
        title: serviceTitle,
        pricing: { 
          basePrice: parseFloat(servicePrice), 
          pricingType: "fixed" 
        },
        ratings: { average: 0, totalReviews: 0 },
        orders: { completed: 0, totalEarnings: 0 },
        status: "active"
      };
      
      setMarketplaceServices(prev => [newService, ...prev]);
      setServiceTitle("");
      setServicePrice("");
      alert('Marketplace service created successfully!');
    } catch (error) {
      console.error('Error creating marketplace service:', error);
      alert('Error creating marketplace service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'green';
      case 'paused': return 'yellow';
      case 'archived': return 'gray';
      default: return 'gray';
    }
  };

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const revenueStreamColumns = [
    {
      key: 'streamName',
      title: 'Stream Name'
    },
    {
      key: 'type',
      title: 'Type',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'pricing',
      title: 'Pricing',
      render: (value: any) => (
        <span>{formatCurrency(value.amount)} ({value.model})</span>
      )
    },
    {
      key: 'analytics',
      title: 'Revenue',
      render: (value: any) => (
        <span className="font-medium text-green-600">
          {formatCurrency(value.totalRevenue)}
        </span>
      )
    },
    {
      key: 'analytics',
      title: 'Subscribers',
      render: (value: any) => value.subscribers
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge variant={getStatusColor(value) as any}>{value}</Badge>
      )
    }
  ];

  const marketplaceColumns = [
    {
      key: 'title',
      title: 'Service Title'
    },
    {
      key: 'serviceType',
      title: 'Type',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'pricing',
      title: 'Price',
      render: (value: any) => (
        <span>{formatCurrency(value.basePrice)} ({value.pricingType})</span>
      )
    },
    {
      key: 'ratings',
      title: 'Rating',
      render: (value: any) => (
        <div className="flex items-center gap-1">
          <Icon name="star" className="w-4 h-4 text-yellow-500" />
          <span>{value.average.toFixed(1)} ({value.totalReviews})</span>
        </div>
      )
    },
    {
      key: 'orders',
      title: 'Earnings',
      render: (value: any) => (
        <span className="font-medium text-green-600">
          {formatCurrency(value.totalEarnings)}
        </span>
      )
    }
  ];

  return (
    <Layout title="Creator Monetization Hub">
      <div className="space-y-6">
        {/* Header */}
        <Card title="Monetization Dashboard">
          <div className="mb-6">
            <Tabs
              items={tabOptions}
              value={activeTab}
              setValue={setActiveTab}
            />
          </div>

          {/* Revenue Streams Tab */}
          {activeTab.id === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <Field
                    label="Stream Name"
                    placeholder="e.g., Premium Course, Monthly Membership"
                    value={streamName}
                    onChange={(e) => setStreamName(e.target.value)}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Revenue Type"
                      value={selectedType}
                      onChange={setSelectedType}
                      options={revenueTypes}
                    />
                    
                    <Select
                      label="Pricing Model"
                      value={selectedPricingModel}
                      onChange={setSelectedPricingModel}
                      options={pricingModels}
                    />
                  </div>
                  
                  <Field
                    label="Price Amount (USD)"
                    type="number"
                    placeholder="99.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <Button
                    onClick={handleCreateRevenueStream}
                    disabled={loading || !streamName.trim() || !amount}
                    className="w-full bg-primary-01 text-white"
                  >
                    {loading ? (
                      <>
                        <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Icon name="plus" className="w-4 h-4 mr-2" />
                        Create Revenue Stream
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg">
                    <h4 className="text-button font-medium text-t-primary mb-2">
                      Quick Stats
                    </h4>
                    <div className="space-y-2 text-caption text-t-secondary">
                      <div className="flex justify-between">
                        <span>Active Streams:</span>
                        <span className="font-medium text-t-primary">{revenueStreams.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Revenue:</span>
                        <span className="font-medium text-green-600">
                          {formatCurrency(revenueStreams.reduce((sum, stream) => sum + stream.analytics.totalRevenue, 0))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subscribers:</span>
                        <span className="font-medium text-t-primary">
                          {revenueStreams.reduce((sum, stream) => sum + stream.analytics.subscribers, 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DataTable
                title="Revenue Streams"
                columns={revenueStreamColumns}
                data={revenueStreams}
                loading={loading && activeTab.id === 1}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search revenue streams..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Creator Marketplace Tab */}
          {activeTab.id === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <Field
                    label="Service Title"
                    placeholder="e.g., Logo Design Package, Business Consultation"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Service Type"
                      value={selectedServiceType}
                      onChange={setSelectedServiceType}
                      options={serviceTypes}
                    />
                    
                    <Field
                      label="Base Price (USD)"
                      type="number"
                      placeholder="150.00"
                      value={servicePrice}
                      onChange={(e) => setServicePrice(e.target.value)}
                    />
                  </div>

                  <Button
                    onClick={handleCreateMarketplaceService}
                    disabled={loading || !serviceTitle.trim() || !servicePrice}
                    className="w-full bg-primary-01 text-white"
                  >
                    {loading ? (
                      <>
                        <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Icon name="plus" className="w-4 h-4 mr-2" />
                        Add to Marketplace
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg">
                    <h4 className="text-button font-medium text-t-primary mb-2">
                      Marketplace Stats
                    </h4>
                    <div className="space-y-2 text-caption text-t-secondary">
                      <div className="flex justify-between">
                        <span>Active Services:</span>
                        <span className="font-medium text-t-primary">{marketplaceServices.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Earnings:</span>
                        <span className="font-medium text-green-600">
                          {formatCurrency(marketplaceServices.reduce((sum, service) => sum + service.orders.totalEarnings, 0))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed Orders:</span>
                        <span className="font-medium text-t-primary">
                          {marketplaceServices.reduce((sum, service) => sum + service.orders.completed, 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DataTable
                title="Marketplace Services"
                columns={marketplaceColumns}
                data={marketplaceServices}
                loading={loading && activeTab.id === 2}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search services..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Smart Pricing Tab */}
          {activeTab.id === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="AI Pricing Recommendations">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon name="lightbulb" className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="text-button font-medium text-blue-900 mb-1">
                            Pricing Optimization Suggestion
                          </h4>
                          <p className="text-caption text-blue-700">
                            Your premium course could be priced 15% higher based on market analysis and competitor pricing.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full border border-s-stroke2 bg-b-surface2 text-t-primary">
                      <Icon name="graph" className="w-4 h-4 mr-2" />
                      Run Pricing Analysis
                    </Button>
                  </div>
                </Card>

                <Card title="A/B Price Testing">
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <Icon name="flask" className="w-12 h-12 text-t-tertiary mx-auto mb-4" />
                      <h4 className="text-button font-medium text-t-primary mb-2">
                        No Active Tests
                      </h4>
                      <p className="text-caption text-t-secondary mb-4">
                        Start testing different prices to optimize your revenue.
                      </p>
                      <Button className="bg-primary-01 text-white">
                        <Icon name="plus" className="w-4 h-4 mr-2" />
                        Create Price Test
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Revenue Analytics Tab */}
          {activeTab.id === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="dollar-sign" className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Total Revenue</h3>
                      <p className="text-h6 font-bold text-t-primary">
                        {formatCurrency(analytics.totalRevenue)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="repeat" className="w-8 h-8 text-blue-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Monthly Recurring</h3>
                      <p className="text-h6 font-bold text-t-primary">
                        {formatCurrency(analytics.monthlyRecurring)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="shopping-cart" className="w-8 h-8 text-purple-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Avg Order Value</h3>
                      <p className="text-h6 font-bold text-t-primary">
                        {formatCurrency(analytics.averageOrderValue)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="trending-up" className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Growth Rate</h3>
                      <p className="text-h6 font-bold text-t-primary">
                        +{analytics.growthRate}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="Revenue by Stream">
                  <div className="space-y-3">
                    {revenueStreams.map((stream, index) => (
                      <div key={stream._id} className="flex items-center justify-between p-3 bg-b-surface2 rounded-lg">
                        <div>
                          <h4 className="text-button font-medium text-t-primary">
                            {stream.streamName}
                          </h4>
                          <p className="text-caption text-t-secondary">
                            {stream.analytics.subscribers} subscribers
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-button font-medium text-green-600">
                            {formatCurrency(stream.analytics.totalRevenue)}
                          </p>
                          <p className="text-caption text-t-secondary">
                            {stream.analytics.conversionRate}% conversion
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card title="Performance Insights">
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="trending-up" className="w-4 h-4 text-green-600" />
                        <span className="text-button font-medium text-green-900">
                          Top Performer
                        </span>
                      </div>
                      <p className="text-caption text-green-700">
                        {analytics.topRevenueStream} is your highest revenue generator with a {analytics.conversionRate}% conversion rate.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="lightbulb" className="w-4 h-4 text-blue-600" />
                        <span className="text-button font-medium text-blue-900">
                          Optimization Tip
                        </span>
                      </div>
                      <p className="text-caption text-blue-700">
                        Consider creating more content similar to your top-performing stream to maximize revenue potential.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
} 