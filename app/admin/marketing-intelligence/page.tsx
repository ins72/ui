'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/style-reference/components/Layout';
import Card from '@/style-reference/components/Card';
import Button from '@/style-reference/components/Button';
import Badge from '@/style-reference/components/Badge';
import Icon from '@/style-reference/components/Icon';
import Tabs from '@/style-reference/components/Tabs';
import Field from '@/style-reference/components/Field';
import Select from '@/style-reference/components/Select';
import Modal from '@/style-reference/components/Modal';
import DataTable from '@/style-reference/components/DataTable';

export const dynamic = 'force-dynamic';

interface CustomerSegment {
  id: number;
  segment_name: string;
  description: string;
  size: number;
  growth_rate: number;
  profitability_score: number;
  engagement_score: number;
  churn_risk: string;
}

interface Campaign {
  id: number;
  campaign_name: string;
  campaign_type: string;
  status: string;
  budget_spent: number;
  total_budget: number;
  roi: number;
  conversions: number;
  start_date: string;
}

interface SelectOption {
  id: number;
  name: string;
}

export default function MarketingIntelligencePage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Dashboard' });
  const [segments, setSegments] = useState<CustomerSegment[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showSegmentModal, setShowSegmentModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [newSegment, setNewSegment] = useState({
    segment_name: '',
    description: '',
    age_min: '',
    age_max: '',
    location: '',
    income_level: 'medium'
  });

  const tabOptions = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Customer Segments' },
    { id: 3, name: 'Campaign Analytics' },
    { id: 4, name: 'Competitor Analysis' },
    { id: 5, name: 'Predictive Insights' }
  ];

  const incomeOptions = [
    { id: 1, name: 'Low' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'High' },
    { id: 4, name: 'Very High' }
  ];

  const campaignTypes = [
    { id: 1, name: 'Email Marketing' },
    { id: 2, name: 'Social Media' },
    { id: 3, name: 'PPC Advertising' },
    { id: 4, name: 'Content Marketing' },
    { id: 5, name: 'Influencer' },
    { id: 6, name: 'Display Ads' }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulate API calls
      setTimeout(() => {
        setSegments([
          {
            id: 1,
            segment_name: 'High-Value Customers',
            description: 'Premium customers with high lifetime value',
            size: 2847,
            growth_rate: 15.3,
            profitability_score: 92,
            engagement_score: 88,
            churn_risk: 'low'
          },
          {
            id: 2,
            segment_name: 'Young Professionals',
            description: 'Millennials and Gen Z professionals aged 25-35',
            size: 5621,
            growth_rate: 22.7,
            profitability_score: 76,
            engagement_score: 85,
            churn_risk: 'medium'
          },
          {
            id: 3,
            segment_name: 'Enterprise Decision Makers',
            description: 'C-level executives and department heads',
            size: 1543,
            growth_rate: 8.9,
            profitability_score: 95,
            engagement_score: 79,
            churn_risk: 'low'
          }
        ]);

        setCampaigns([
          {
            id: 1,
            campaign_name: 'Q1 Product Launch',
            campaign_type: 'Multi-channel',
            status: 'active',
            budget_spent: 45000,
            total_budget: 60000,
            roi: 3.2,
            conversions: 1247,
            start_date: '2024-01-01'
          },
          {
            id: 2,
            campaign_name: 'Holiday Promotion',
            campaign_type: 'Email + Social',
            status: 'completed',
            budget_spent: 25000,
            total_budget: 25000,
            roi: 4.8,
            conversions: 2156,
            start_date: '2023-12-01'
          },
          {
            id: 3,
            campaign_name: 'Retargeting Campaign',
            campaign_type: 'Display Ads',
            status: 'active',
            budget_spent: 8500,
            total_budget: 15000,
            roi: 2.1,
            conversions: 387,
            start_date: '2024-01-10'
          }
        ]);

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const createSegment = async () => {
    try {
      const segment = {
        ...newSegment,
        id: Date.now(),
        size: Math.floor(Math.random() * 5000) + 1000,
        growth_rate: Math.random() * 30,
        profitability_score: Math.floor(Math.random() * 40) + 60,
        engagement_score: Math.floor(Math.random() * 30) + 70,
        churn_risk: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
      };
      
      setSegments(prev => [...prev, segment]);
      setShowSegmentModal(false);
      setNewSegment({
        segment_name: '',
        description: '',
        age_min: '',
        age_max: '',
        location: '',
        income_level: 'medium'
      });
    } catch (error) {
      console.error('Error creating segment:', error);
    }
  };

  const segmentColumns = [
    {
      key: 'segment_name',
      title: 'Segment Name',
      render: (value: string, record: CustomerSegment) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.description}</div>
        </div>
      )
    },
    {
      key: 'size',
      title: 'Size',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <Icon name="users" className="w-4 h-4 text-t-secondary" />
          <span className="font-medium">{value.toLocaleString()}</span>
        </div>
      )
    },
    {
      key: 'growth_rate',
      title: 'Growth Rate',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <span className="font-medium text-green-600">+{value.toFixed(1)}%</span>
          <Icon name="trending-up" className="w-4 h-4 text-green-500" />
        </div>
      )
    },
    {
      key: 'profitability_score',
      title: 'Profitability',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{value}%</span>
          <div className="w-16 h-2 bg-b-surface2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-01 rounded-full"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      )
    },
    {
      key: 'churn_risk',
      title: 'Churn Risk',
      render: (value: string) => (
        <Badge variant={value === 'low' ? 'green' : value === 'medium' ? 'yellow' : 'red'}>
          {value}
        </Badge>
      )
    }
  ];

  const campaignColumns = [
    {
      key: 'campaign_name',
      title: 'Campaign',
      render: (value: string, record: Campaign) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.campaign_type}</div>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'active' ? 'green' : value === 'completed' ? 'gray' : 'yellow'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'budget_spent',
      title: 'Budget',
      render: (value: number, record: Campaign) => (
        <div>
          <div className="font-medium text-t-primary">${value.toLocaleString()}</div>
          <div className="text-sm text-t-secondary">of ${record.total_budget.toLocaleString()}</div>
        </div>
      )
    },
    {
      key: 'roi',
      title: 'ROI',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <span className="font-medium text-green-600">{value.toFixed(1)}x</span>
          <Icon name="trending-up" className="w-4 h-4 text-green-500" />
        </div>
      )
    },
    {
      key: 'conversions',
      title: 'Conversions',
      render: (value: number) => (
        <span className="font-medium text-t-primary">{value.toLocaleString()}</span>
      )
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Marketing Intelligence Dashboard</h2>
        <p className="text-body-2 text-t-secondary">Advanced customer analytics, campaign optimization, and predictive insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Customers">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">47,523</div>
            <div className="text-sm text-t-secondary">+12% this month</div>
          </div>
        </Card>
        
        <Card title="Active Campaigns">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-t-secondary">3 high-performing</div>
          </div>
        </Card>
        
        <Card title="Avg Customer LTV">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">$2,847</div>
            <div className="text-sm text-t-secondary">+8.3% vs last quarter</div>
          </div>
        </Card>
        
        <Card title="Conversion Rate">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">4.7%</div>
            <div className="text-sm text-t-secondary">Above industry avg</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Top Performing Segments">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border-l-4 border-primary-01 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">High-Value Customers</div>
                <div className="text-sm text-t-secondary">2,847 customers • 92% profitability</div>
              </div>
              <Badge variant="green">Top Tier</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">Young Professionals</div>
                <div className="text-sm text-t-secondary">5,621 customers • 22.7% growth</div>
              </div>
              <Badge variant="green">Growing</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-b-surface1">
              <div>
                <div className="font-medium text-t-primary">Enterprise Decision Makers</div>
                <div className="text-sm text-t-secondary">1,543 customers • 95% profitability</div>
              </div>
              <Badge variant="yellow">Premium</Badge>
            </div>
          </div>
        </Card>

        <Card title="Campaign Performance">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Email Marketing</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-green-600">4.8x ROI</span>
                <Badge variant="green">Excellent</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Social Media</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-primary-01">3.2x ROI</span>
                <Badge variant="default">Good</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">PPC Advertising</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-yellow-600">2.1x ROI</span>
                <Badge variant="yellow">Average</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-t-primary">Display Ads</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-t-secondary">1.8x ROI</span>
                <Badge variant="gray">Below Avg</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderSegments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Customer Segmentation</h2>
          <p className="text-body-2 text-t-secondary">AI-powered customer segments with behavioral and demographic analysis</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowSegmentModal(true)}
        >
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Create Segment
        </Button>
      </div>

      <DataTable
        columns={segmentColumns}
        data={segments}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit segment:', record.id),
          onDelete: (record) => console.log('Delete segment:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Campaign Analytics</h2>
          <p className="text-body-2 text-t-secondary">Real-time campaign performance with attribution modeling and optimization insights</p>
        </div>
        <Button className="bg-primary-01 text-white">
          <Icon name="plus" className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <DataTable
        columns={campaignColumns}
        data={campaigns}
        loading={loading}
        actions={{
          onEdit: (record) => console.log('Edit campaign:', record.id),
          onDelete: (record) => console.log('Delete campaign:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderCompetitorAnalysis = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Competitive Intelligence</h2>
        <p className="text-body-2 text-t-secondary">Monitor competitor strategies, market positioning, and opportunities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Market Share Analysis">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary-01 rounded-full"></div>
                <span className="font-medium text-t-primary">Your Company</span>
              </div>
              <span className="text-t-primary">23.4%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-t-primary">Competitor A</span>
              </div>
              <span className="text-t-primary">31.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-t-primary">Competitor B</span>
              </div>
              <span className="text-t-primary">18.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-t-primary">Others</span>
              </div>
              <span className="text-t-primary">26.7%</span>
            </div>
          </div>
        </Card>

        <Card title="Competitive Positioning">
          <div className="space-y-4">
            <div className="p-3 border-l-4 border-green-500 bg-b-surface1">
              <div className="font-medium text-t-primary">Strengths</div>
              <div className="text-sm text-t-secondary">Superior customer service, innovative features, competitive pricing</div>
            </div>
            <div className="p-3 border-l-4 border-yellow-500 bg-b-surface1">
              <div className="font-medium text-t-primary">Opportunities</div>
              <div className="text-sm text-t-secondary">Emerging markets, mobile optimization, partnership potential</div>
            </div>
            <div className="p-3 border-l-4 border-red-500 bg-b-surface1">
              <div className="font-medium text-t-primary">Threats</div>
              <div className="text-sm text-t-secondary">New market entrants, changing regulations, economic factors</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Competitor Campaign Analysis">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <div className="text-2xl font-bold text-t-primary">$2.4M</div>
            <div className="text-sm text-t-secondary">Est. Monthly Ad Spend</div>
            <div className="text-xs text-green-600 mt-1">+15% vs last month</div>
          </div>
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <div className="text-2xl font-bold text-t-primary">847</div>
            <div className="text-sm text-t-secondary">Active Keywords</div>
            <div className="text-xs text-yellow-600 mt-1">23 new this week</div>
          </div>
          <div className="text-center p-4 border border-s-stroke2 rounded-lg">
            <div className="text-2xl font-bold text-t-primary">3.2%</div>
            <div className="text-sm text-t-secondary">Est. CTR</div>
            <div className="text-xs text-red-600 mt-1">-0.3% vs industry</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderPredictiveInsights = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Predictive Analytics & Insights</h2>
        <p className="text-body-2 text-t-secondary">AI-powered predictions for customer behavior, churn risk, and revenue forecasting</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Churn Prediction">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">127</div>
              <div className="text-sm text-t-secondary">High Risk Customers</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>High Risk</span>
                <span className="text-red-600">127 (2.7%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Medium Risk</span>
                <span className="text-yellow-600">543 (11.4%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Low Risk</span>
                <span className="text-green-600">4,087 (85.9%)</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Revenue Forecast">
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-01">$847K</div>
              <div className="text-sm text-t-secondary">Next Month Prediction</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Confidence Level</span>
                <span className="text-primary-01">87%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>vs Last Month</span>
                <span className="text-green-600">+12.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>vs Forecast</span>
                <span className="text-green-600">+3.7%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Next Best Action">
          <div className="space-y-3">
            <div className="p-3 border-l-4 border-primary-01 bg-b-surface1">
              <div className="text-sm font-medium text-t-primary">Email Campaign</div>
              <div className="text-xs text-t-secondary">Target high-value customers with personalized offers</div>
            </div>
            <div className="p-3 border-l-4 border-green-500 bg-b-surface1">
              <div className="text-sm font-medium text-t-primary">Retention Program</div>
              <div className="text-xs text-t-secondary">Engage medium-risk churn customers</div>
            </div>
            <div className="p-3 border-l-4 border-yellow-500 bg-b-surface1">
              <div className="text-sm font-medium text-t-primary">Upsell Campaign</div>
              <div className="text-xs text-t-secondary">Promote premium features to active users</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="AI-Generated Insights">
        <div className="space-y-4">
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="brain" className="w-5 h-5 text-primary-01" />
              <span className="font-medium text-t-primary">Customer Lifetime Value Optimization</span>
            </div>
            <p className="text-sm text-t-secondary">
              Analysis shows that customers who engage with email campaigns within the first 30 days have 40% higher lifetime value. 
              Recommend implementing automated welcome series for new customers.
            </p>
          </div>
          
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="target" className="w-5 h-5 text-green-500" />
              <span className="font-medium text-t-primary">Seasonal Opportunity</span>
            </div>
            <p className="text-sm text-t-secondary">
              Historical data indicates 23% increase in conversion rates during Q2. Consider increasing ad spend for 
              "Young Professionals" segment during this period for maximum ROI.
            </p>
          </div>
          
          <div className="p-4 border border-s-stroke2 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="alert-triangle" className="w-5 h-5 text-yellow-500" />
              <span className="font-medium text-t-primary">Churn Prevention Alert</span>
            </div>
            <p className="text-sm text-t-secondary">
              127 high-value customers show early churn indicators. Immediate action recommended: personalized retention 
              campaigns with exclusive offers can reduce churn by up to 60%.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <Layout title="Marketing Intelligence">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-h4 font-bold text-t-primary">Marketing Intelligence Platform</h1>
            <p className="text-body-1 text-t-secondary">Advanced customer analytics, predictive insights, and campaign optimization powered by AI</p>
          </div>
          <Badge variant="green">Enterprise Marketing Feature</Badge>
        </div>

        <Card title="Marketing Intelligence Hub">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {activeTab.id === 1 && renderDashboard()}
          {activeTab.id === 2 && renderSegments()}
          {activeTab.id === 3 && renderCampaigns()}
          {activeTab.id === 4 && renderCompetitorAnalysis()}
          {activeTab.id === 5 && renderPredictiveInsights()}
        </Card>

        {/* Create Segment Modal */}
        <Modal
          open={showSegmentModal}
          onClose={() => setShowSegmentModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Create Customer Segment</h3>
            
            <div className="space-y-4">
              <Field
                label="Segment Name"
                placeholder="Enter segment name"
                value={newSegment.segment_name}
                onChange={(e) => setNewSegment(prev => ({ ...prev, segment_name: e.target.value }))}
              />
              
              <Field
                label="Description"
                textarea
                placeholder="Describe this customer segment"
                value={newSegment.description}
                onChange={(e) => setNewSegment(prev => ({ ...prev, description: e.target.value }))}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Age Range - Min"
                  type="number"
                  placeholder="18"
                  value={newSegment.age_min}
                  onChange={(e) => setNewSegment(prev => ({ ...prev, age_min: e.target.value }))}
                />
                <Field
                  label="Age Range - Max"
                  type="number"
                  placeholder="65"
                  value={newSegment.age_max}
                  onChange={(e) => setNewSegment(prev => ({ ...prev, age_max: e.target.value }))}
                />
              </div>
              
              <Field
                label="Geographic Location"
                placeholder="e.g., North America, Europe, Global"
                value={newSegment.location}
                onChange={(e) => setNewSegment(prev => ({ ...prev, location: e.target.value }))}
              />
              
              <Select
                label="Income Level"
                options={incomeOptions}
                value={incomeOptions.find(o => o.name.toLowerCase() === newSegment.income_level) || null}
                onChange={(option) => setNewSegment(prev => ({ ...prev, income_level: option.name.toLowerCase() }))}
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={createSegment}
              >
                <Icon name="plus" className="w-4 h-4 mr-2" />
                Create Segment
              </Button>
              <Button
                className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
                onClick={() => setShowSegmentModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
} 