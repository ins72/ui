"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tabs from "@/style-reference/components/Tabs";
import Switch from "@/style-reference/components/Switch";
import Percentage from "@/style-reference/components/Percentage";

export const dynamic = "force-dynamic";

const AIDashboard = () => {
  const [activeTab, setActiveTab] = useState({ id: 1, name: "Content AI" });
  const [aiFeatures, setAiFeatures] = useState({
    contentGeneration: true,
    predictiveAnalytics: true,
    customerSupport: true,
    marketingIntelligence: true,
    leadScoring: false,
    churnPrediction: false
  });

  const [aiMetrics, setAiMetrics] = useState({
    contentGenerated: 1247,
    predictionsAccuracy: 94.2,
    supportTicketsResolved: 856,
    leadsScored: 2341,
    timesSaved: 167.5,
    revenueOptimized: 45.6
  });

  const tabOptions = [
    { id: 1, name: "Content AI" },
    { id: 2, name: "Predictive Analytics" },
    { id: 3, name: "Support AI" },
    { id: 4, name: "Marketing Intelligence" }
  ];

  const aiInsights = [
    {
      title: "Content Performance Prediction",
      description: "AI predicts this content will increase engagement by 34%",
      confidence: 94,
      type: "prediction"
    },
    {
      title: "Customer Churn Risk Alert",
      description: "15 customers identified as high churn risk this week",
      confidence: 87,
      type: "alert"
    },
    {
      title: "Revenue Optimization Opportunity",
      description: "Suggested pricing changes could increase revenue by $12,450",
      confidence: 91,
      type: "opportunity"
    }
  ];

  const contentSuggestions = [
    {
      type: "Blog Post",
      title: "How to Maximize E-commerce Conversions in 2024",
      aiScore: 96,
      estimatedTraffic: "2,400 visits",
      keywords: ["e-commerce", "conversions", "optimization"]
    },
    {
      type: "Social Media",
      title: "5 CRM Strategies That Actually Work",
      aiScore: 92,
      estimatedEngagement: "840 interactions",
      keywords: ["CRM", "customer management", "strategy"]
    },
    {
      type: "Email Campaign",
      title: "Unlock Your Business Potential with Automation",
      aiScore: 89,
      estimatedOpenRate: "24.5%",
      keywords: ["automation", "business growth", "efficiency"]
    }
  ];

  const renderContentAI = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="AI Content Generator" className="h-fit">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-surface-1 rounded-lg">
            <div>
              <h4 className="font-semibold text-content-1">Smart Blog Posts</h4>
              <p className="text-content-2 text-sm">Generate SEO-optimized articles</p>
            </div>
            <Button className="bg-primary-1 text-white">Generate</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-surface-1 rounded-lg">
            <div>
              <h4 className="font-semibold text-content-1">Social Media Copy</h4>
              <p className="text-content-2 text-sm">Create engaging social posts</p>
            </div>
            <Button className="bg-primary-1 text-white">Create</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-1 rounded-lg">
            <div>
              <h4 className="font-semibold text-content-1">Email Campaigns</h4>
              <p className="text-content-2 text-sm">Craft compelling email content</p>
            </div>
            <Button className="bg-primary-1 text-white">Draft</Button>
          </div>
        </div>
      </Card>

      <Card title="Content Suggestions" className="h-fit">
        <div className="space-y-4">
          {contentSuggestions.map((suggestion, index) => (
            <div key={index} className="p-4 border border-stroke-1 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-primary-1 text-white px-2 py-1 rounded">
                  {suggestion.type}
                </span>
                <Percentage value={suggestion.aiScore} className="text-sm" />
              </div>
              <h4 className="font-medium text-content-1 mb-2">{suggestion.title}</h4>
              <p className="text-sm text-content-2 mb-2">
                Expected: {suggestion.estimatedTraffic || suggestion.estimatedEngagement || suggestion.estimatedOpenRate}
              </p>
              <div className="flex flex-wrap gap-1">
                {suggestion.keywords.map((keyword, idx) => (
                  <span key={idx} className="text-xs bg-surface-1 px-2 py-1 rounded">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderPredictiveAnalytics = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card title="Sales Forecasting" className="h-fit">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-1 mb-2">$47,890</div>
            <p className="text-content-2">Predicted next month revenue</p>
            <Percentage value={12.5} className="mt-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-content-2">Confidence Level</span>
              <span className="font-medium">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-content-2">Historical Accuracy</span>
              <span className="font-medium">91.7%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Customer Lifetime Value" className="h-fit">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-success-1 mb-2">$2,847</div>
            <p className="text-content-2">Average CLV prediction</p>
            <Percentage value={8.3} className="mt-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-content-2">High-Value Customers</span>
              <span className="font-medium">23%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-content-2">Churn Risk</span>
              <span className="font-medium text-error-1">8.2%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Inventory Optimization" className="h-fit">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-warning-1 mb-2">247</div>
            <p className="text-content-2">Items need reordering</p>
            <Percentage value={-5.1} className="mt-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-content-2">Demand Spike Predicted</span>
              <span className="font-medium">Black Friday</span>
            </div>
            <div className="flex justify-between">
              <span className="text-content-2">Stock Optimization</span>
              <span className="font-medium text-success-1">+15.3%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderSupportAI = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="AI Chatbot Performance" className="h-fit">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-1">{aiMetrics.supportTicketsResolved}</div>
              <p className="text-content-2 text-sm">Tickets Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-1">94.2%</div>
              <p className="text-content-2 text-sm">Resolution Rate</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-content-2">Response Time</span>
              <span className="font-medium">&lt; 2 seconds</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-content-2">Customer Satisfaction</span>
              <span className="font-medium text-success-1">4.8/5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-content-2">Escalation Rate</span>
              <span className="font-medium">5.8%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Intelligent Ticket Routing" className="h-fit">
        <div className="space-y-4">
          <div className="p-4 bg-surface-1 rounded-lg">
            <h4 className="font-medium mb-2">Smart Categories</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-content-2">Technical Issues</span>
                <span className="font-medium">34%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-content-2">Billing Questions</span>
                <span className="font-medium">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-content-2">Feature Requests</span>
                <span className="font-medium">22%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-content-2">General Inquiries</span>
                <span className="font-medium">16%</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-primary-1 text-white">
            Configure Routing Rules
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderMarketingIntelligence = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Lead Scoring AI" className="h-fit">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-1">{aiMetrics.leadsScored}</div>
            <p className="text-content-2">Leads Scored This Month</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-surface-1 rounded">
              <div>
                <span className="font-medium">Hot Leads</span>
                <p className="text-sm text-content-2">Score 80-100</p>
              </div>
              <span className="text-xl font-bold text-error-1">147</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-surface-1 rounded">
              <div>
                <span className="font-medium">Warm Leads</span>
                <p className="text-sm text-content-2">Score 60-79</p>
              </div>
              <span className="text-xl font-bold text-warning-1">423</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-surface-1 rounded">
              <div>
                <span className="font-medium">Cold Leads</span>
                <p className="text-sm text-content-2">Score 0-59</p>
              </div>
              <span className="text-xl font-bold text-content-2">1,771</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Campaign Optimization" className="h-fit">
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-primary-1/10 to-success-1/10 rounded-lg">
            <h4 className="font-medium mb-2">AI Recommendations</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="w-4 h-4 text-success-1 mt-0.5" />
                <span>Increase email frequency for segment A by 25%</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="w-4 h-4 text-success-1 mt-0.5" />
                <span>Adjust ad spend timing for 15% better ROI</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="w-4 h-4 text-success-1 mt-0.5" />
                <span>Personalize content for 234 high-value prospects</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-success-1">+{aiMetrics.revenueOptimized}%</div>
              <p className="text-content-2 text-sm">Revenue Increase</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary-1">{aiMetrics.timesSaved}h</div>
              <p className="text-content-2 text-sm">Time Saved</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab.id) {
      case 1:
        return renderContentAI();
      case 2:
        return renderPredictiveAnalytics();
      case 3:
        return renderSupportAI();
      case 4:
        return renderMarketingIntelligence();
      default:
        return renderContentAI();
    }
  };

  return (
    <Layout title="AI Dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-content-1">AI-Powered Business Intelligence</h1>
            <p className="text-content-2">Leverage artificial intelligence to transform your business operations</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="bg-primary-1 text-white">
              <Icon name="plus" className="w-4 h-4 mr-2" />
              New AI Task
            </Button>
            <Button className="bg-surface-1 text-content-1">
              Configure AI Settings
            </Button>
          </div>
        </div>

        {/* AI Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiInsights.map((insight, index) => (
            <Card key={index} title={insight.title} className="h-fit">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon 
                    name={insight.type === 'prediction' ? 'chart-bar' : insight.type === 'alert' ? 'exclamation-triangle' : 'lightbulb'} 
                    className={`w-5 h-5 ${
                      insight.type === 'prediction' ? 'text-primary-1' : 
                      insight.type === 'alert' ? 'text-warning-1' : 'text-success-1'
                    }`} 
                  />
                  <span className="text-sm font-medium text-content-2 capitalize">{insight.type}</span>
                  <Percentage value={insight.confidence} className="ml-auto" />
                </div>
                <h3 className="font-semibold text-content-1">{insight.title}</h3>
                <p className="text-sm text-content-2">{insight.description}</p>
                <Button className="w-full bg-surface-1 text-content-1 text-sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Features Toggle */}
        <Card title="AI Features Configuration">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Content Generation</h4>
                <p className="text-sm text-content-2">AI-powered content creation</p>
              </div>
              <Switch 
                checked={aiFeatures.contentGeneration}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, contentGeneration: checked }))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Predictive Analytics</h4>
                <p className="text-sm text-content-2">Sales and demand forecasting</p>
              </div>
              <Switch 
                checked={aiFeatures.predictiveAnalytics}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, predictiveAnalytics: checked }))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Customer Support AI</h4>
                <p className="text-sm text-content-2">Intelligent chatbot responses</p>
              </div>
              <Switch 
                checked={aiFeatures.customerSupport}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, customerSupport: checked }))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Marketing Intelligence</h4>
                <p className="text-sm text-content-2">Campaign optimization</p>
              </div>
              <Switch 
                checked={aiFeatures.marketingIntelligence}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, marketingIntelligence: checked }))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Lead Scoring</h4>
                <p className="text-sm text-content-2">Intelligent lead qualification</p>
              </div>
              <Switch 
                checked={aiFeatures.leadScoring}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, leadScoring: checked }))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-content-1">Churn Prediction</h4>
                <p className="text-sm text-content-2">Customer retention insights</p>
              </div>
              <Switch 
                checked={aiFeatures.churnPrediction}
                onChange={(checked) => setAiFeatures(prev => ({ ...prev, churnPrediction: checked }))}
              />
            </div>
          </div>
        </Card>

        {/* AI Tools Tabs */}
        <Card title="AI Tools & Analytics">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {renderTabContent()}
        </Card>
      </div>
    </Layout>
  );
};

export default AIDashboard; 