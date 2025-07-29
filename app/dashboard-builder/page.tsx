"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tabs from "@/style-reference/components/Tabs";
import Modal from "@/style-reference/components/Modal";
import Switch from "@/style-reference/components/Switch";
import Dropdown from "@/style-reference/components/Dropdown";

interface Widget {
  id: number;
  name: string;
  type: string;
  icon: string;
  description: string;
  category: string;
  size: string;
  dataSource: string;
  position?: { x: number; y: number };
  configured?: boolean;
}

const DashboardBuilder = () => {
  const [activeTab, setActiveTab] = useState({ id: 1, name: "Widgets" });
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [showWidgetModal, setShowWidgetModal] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);
  const [dashboardWidgets, setDashboardWidgets] = useState<Widget[]>([]);

  const tabOptions = [
    { id: 1, name: "Widgets" },
    { id: 2, name: "Data Sources" },
    { id: 3, name: "Layouts" },
    { id: 4, name: "Settings" }
  ];

  const availableWidgets = [
    {
      id: 1,
      name: "Revenue Chart",
      type: "chart",
      icon: "chart-line",
      description: "Track revenue trends over time",
      category: "Financial",
      size: "medium",
      dataSource: "Revenue Analytics"
    },
    {
      id: 2,
      name: "KPI Cards",
      type: "metric",
      icon: "chart-bar",
      description: "Display key performance indicators",
      category: "Metrics",
      size: "small",
      dataSource: "Business Metrics"
    },
    {
      id: 3,
      name: "Customer Map",
      type: "map",
      icon: "globe",
      description: "Geographic distribution of customers",
      category: "Geographic",
      size: "large",
      dataSource: "Customer Data"
    },
    {
      id: 4,
      name: "Sales Funnel",
      type: "funnel",
      icon: "filter",
      description: "Visualize sales conversion stages",
      category: "Sales",
      size: "medium",
      dataSource: "Sales Pipeline"
    },
    {
      id: 5,
      name: "Top Products",
      type: "table",
      icon: "table",
      description: "List of best-performing products",
      category: "Product",
      size: "medium",
      dataSource: "Product Analytics"
    },
    {
      id: 6,
      name: "Activity Feed",
      type: "feed",
      icon: "rss",
      description: "Real-time business activity updates",
      category: "Activity",
      size: "medium",
      dataSource: "Activity Logs"
    },
    {
      id: 7,
      name: "Conversion Rate",
      type: "gauge",
      icon: "speedometer",
      description: "Monitor conversion performance",
      category: "Performance",
      size: "small",
      dataSource: "Conversion Analytics"
    },
    {
      id: 8,
      name: "Profit Margins",
      type: "donut",
      icon: "pie-chart",
      description: "Profit margin breakdown by category",
      category: "Financial",
      size: "small",
      dataSource: "Financial Data"
    }
  ];

  const dataSources = [
    {
      id: 1,
      name: "Revenue Analytics",
      type: "Database",
      status: "Connected",
      records: "12.5K",
      lastUpdate: "2 minutes ago"
    },
    {
      id: 2,
      name: "Customer Data",
      type: "API",
      status: "Connected",
      records: "8.7K",
      lastUpdate: "5 minutes ago"
    },
    {
      id: 3,
      name: "Product Analytics",
      type: "Database",
      status: "Connected",
      records: "3.2K",
      lastUpdate: "1 minute ago"
    },
    {
      id: 4,
      name: "Google Analytics",
      type: "Integration",
      status: "Pending",
      records: "N/A",
      lastUpdate: "Never"
    },
    {
      id: 5,
      name: "Salesforce CRM",
      type: "Integration",
      status: "Error",
      records: "N/A",
      lastUpdate: "1 hour ago"
    }
  ];

  const layoutTemplates = [
    {
      id: 1,
      name: "Executive Dashboard",
      description: "High-level KPIs and performance metrics",
      preview: "4-widget grid layout",
      widgets: ["Revenue Chart", "KPI Cards", "Customer Map", "Activity Feed"]
    },
    {
      id: 2,
      name: "Sales Dashboard",
      description: "Sales performance and pipeline tracking",
      preview: "Sales-focused layout",
      widgets: ["Sales Funnel", "Revenue Chart", "Top Products", "Conversion Rate"]
    },
    {
      id: 3,
      name: "Marketing Dashboard",
      description: "Campaign performance and lead analytics",
      preview: "Marketing-centric view",
      widgets: ["Conversion Rate", "Customer Map", "Activity Feed", "KPI Cards"]
    },
    {
      id: 4,
      name: "Financial Dashboard",
      description: "Revenue, profit, and financial metrics",
      preview: "Financial overview layout",
      widgets: ["Revenue Chart", "Profit Margins", "KPI Cards", "Top Products"]
    }
  ];

  const addWidget = (widget: Widget) => {
    const newWidget: Widget = {
      ...widget,
      id: Date.now(),
      position: { x: 0, y: 0 },
      configured: false
    };
    setDashboardWidgets([...dashboardWidgets, newWidget]);
    setShowWidgetModal(false);
  };

  const removeWidget = (widgetId: number) => {
    setDashboardWidgets(dashboardWidgets.filter(w => w.id !== widgetId));
  };

  const configureWidget = (widget: Widget) => {
    setSelectedWidget(widget);
    setShowWidgetModal(true);
  };

  const renderWidgetsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-content-1">Available Widgets</h3>
        <Button 
          className="bg-primary-1 text-white"
          onClick={() => setShowWidgetModal(true)}
        >
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Add Widget
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {availableWidgets.map((widget) => (
          <div
            key={widget.id}
            className="p-4 border border-stroke-1 rounded-lg hover:border-primary-1 cursor-pointer transition-colors"
            onClick={() => addWidget(widget)}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon name={widget.icon} className="w-6 h-6 text-primary-1" />
              <div>
                <h4 className="font-medium text-content-1">{widget.name}</h4>
                <span className="text-xs bg-surface-1 px-2 py-1 rounded">{widget.category}</span>
              </div>
            </div>
            <p className="text-sm text-content-2 mb-2">{widget.description}</p>
            <div className="flex justify-between items-center text-xs text-content-2">
              <span>Size: {widget.size}</span>
              <span>{widget.dataSource}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDataSourcesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-content-1">Data Sources</h3>
        <Button className="bg-primary-1 text-white">
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Connect Source
        </Button>
      </div>

      <div className="space-y-4">
        {dataSources.map((source) => (
          <div key={source.id} className="p-4 border border-stroke-1 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Icon 
                  name={source.type === 'Database' ? 'database' : source.type === 'API' ? 'code' : 'plug'} 
                  className="w-6 h-6 text-primary-1" 
                />
                <div>
                  <h4 className="font-medium text-content-1">{source.name}</h4>
                  <p className="text-sm text-content-2">{source.type} • {source.records} records</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                    source.status === 'Connected' ? 'bg-success-1/10 text-success-1' :
                    source.status === 'Pending' ? 'bg-warning-1/10 text-warning-1' :
                    'bg-error-1/10 text-error-1'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      source.status === 'Connected' ? 'bg-success-1' :
                      source.status === 'Pending' ? 'bg-warning-1' :
                      'bg-error-1'
                    }`}></div>
                    {source.status}
                  </div>
                  <p className="text-xs text-content-2 mt-1">Updated {source.lastUpdate}</p>
                </div>
                
                <Button className="bg-surface-1 text-content-1">
                  Configure
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLayoutsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-content-1">Dashboard Templates</h3>
        <Button className="bg-primary-1 text-white">
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {layoutTemplates.map((template) => (
          <div key={template.id} className="border border-stroke-1 rounded-lg overflow-hidden">
            <div className="p-4">
              <h4 className="font-medium text-content-1 mb-2">{template.name}</h4>
              <p className="text-sm text-content-2 mb-3">{template.description}</p>
              <p className="text-xs text-content-2 mb-4">{template.preview}</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-xs font-medium text-content-2">Included Widgets:</p>
                <div className="flex flex-wrap gap-1">
                  {template.widgets.map((widget, index) => (
                    <span key={index} className="text-xs bg-surface-1 px-2 py-1 rounded">
                      {widget}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-primary-1 text-white">
                  Use Template
                </Button>
                <Button className="bg-surface-1 text-content-1">
                  Preview
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-content-1">Dashboard Settings</h3>
      
      <Card title="General Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-content-1">Auto-refresh Data</h4>
              <p className="text-sm text-content-2">Automatically update widget data</p>
            </div>
            <Switch checked={true} onChange={() => {}} />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-content-1">Real-time Updates</h4>
              <p className="text-sm text-content-2">Enable live data streaming</p>
            </div>
            <Switch checked={false} onChange={() => {}} />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-content-1">Export Capabilities</h4>
              <p className="text-sm text-content-2">Allow dashboard export to PDF/Excel</p>
            </div>
            <Switch checked={true} onChange={() => {}} />
          </div>
        </div>
      </Card>

      <Card title="Performance Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-content-1">Refresh Interval</span>
            <Dropdown 
              items={[
                { id: 1, name: "30 seconds" },
                { id: 2, name: "1 minute" },
                { id: 3, name: "5 minutes" },
                { id: 4, name: "15 minutes" }
              ]}
              value={{ id: 2, name: "1 minute" }}
              setValue={() => {}}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-content-1">Data Retention</span>
            <Dropdown 
              items={[
                { id: 1, name: "7 days" },
                { id: 2, name: "30 days" },
                { id: 3, name: "90 days" },
                { id: 4, name: "1 year" }
              ]}
              value={{ id: 3, name: "90 days" }}
              setValue={() => {}}
            />
          </div>
        </div>
      </Card>
    </div>
  );

  const renderDashboardPreview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dashboardWidgets.map((widget) => (
        <div
          key={widget.id}
          className={`p-4 border border-stroke-1 rounded-lg bg-surface-1 ${
            widget.size === 'large' ? 'md:col-span-2 lg:col-span-3' :
            widget.size === 'medium' ? 'md:col-span-2' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name={widget.icon} className="w-5 h-5 text-primary-1" />
              <h4 className="font-medium text-content-1">{widget.name}</h4>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                className="p-1 bg-surface-1 text-content-2"
                onClick={() => configureWidget(widget)}
              >
                <Icon name="settings" className="w-4 h-4" />
              </Button>
              <Button 
                className="p-1 bg-surface-1 text-error-1"
                onClick={() => removeWidget(widget.id)}
              >
                <Icon name="trash" className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center py-8 text-content-2">
            <Icon name={widget.icon} className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Widget Preview</p>
            <p className="text-xs">Configure to display real data</p>
          </div>
        </div>
      ))}
      
      {dashboardWidgets.length === 0 && (
        <div className="col-span-full text-center py-12">
          <Icon name="chart-bar" className="w-16 h-16 mx-auto text-content-2 opacity-50 mb-4" />
          <h3 className="text-lg font-medium text-content-1 mb-2">No Widgets Added</h3>
          <p className="text-content-2 mb-4">Start building your dashboard by adding widgets</p>
          <Button 
            className="bg-primary-1 text-white"
            onClick={() => setActiveTab({ id: 1, name: "Widgets" })}
          >
            Add Your First Widget
          </Button>
        </div>
      )}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab.id) {
      case 1:
        return renderWidgetsTab();
      case 2:
        return renderDataSourcesTab();
      case 3:
        return renderLayoutsTab();
      case 4:
        return renderSettingsTab();
      default:
        return renderWidgetsTab();
    }
  };

  return (
    <Layout title="Dashboard Builder">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-content-1">Custom Dashboard Builder</h1>
            <p className="text-content-2">Create personalized business intelligence dashboards with drag-and-drop widgets</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              className={`${isPreviewMode ? 'bg-surface-1 text-content-1' : 'bg-primary-1 text-white'}`}
              onClick={() => setIsPreviewMode(!isPreviewMode)}
            >
              <Icon name={isPreviewMode ? "edit" : "eye"} className="w-4 h-4 mr-2" />
              {isPreviewMode ? "Edit Mode" : "Preview Mode"}
            </Button>
            <Button className="bg-success-1 text-white">
              <Icon name="save" className="w-4 h-4 mr-2" />
              Save Dashboard
            </Button>
          </div>
        </div>

        {isPreviewMode ? (
          <Card title="Dashboard Preview">
            {renderDashboardPreview()}
          </Card>
        ) : (
          <Card title="Dashboard Builder">
            <Tabs 
              items={tabOptions}
              value={activeTab}
              setValue={setActiveTab}
              className="mb-6"
            />
            
            {renderTabContent()}
          </Card>
        )}

        {/* Widget Configuration Modal */}
        <Modal 
          open={showWidgetModal} 
          onClose={() => {
            setShowWidgetModal(false);
            setSelectedWidget(null);
          }}
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-content-1 mb-4">
              {selectedWidget ? 'Configure Widget' : 'Add Widget'}
            </h3>
            
            {selectedWidget ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-content-1 mb-2">Widget Title</label>
                  <input 
                    type="text"
                    value={selectedWidget.name}
                    className="w-full p-3 border border-stroke-1 rounded-lg"
                    placeholder="Enter widget title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-content-1 mb-2">Data Source</label>
                  <Dropdown 
                    items={dataSources.map(ds => ({ id: ds.id, name: ds.name }))}
                    value={{ id: 1, name: selectedWidget.dataSource }}
                    setValue={() => {}}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    className="flex-1 bg-primary-1 text-white"
                    onClick={() => setShowWidgetModal(false)}
                  >
                    Save Configuration
                  </Button>
                  <Button 
                    className="bg-surface-1 text-content-1"
                    onClick={() => setShowWidgetModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {availableWidgets.map((widget) => (
                  <div
                    key={widget.id}
                    className="p-4 border border-stroke-1 rounded-lg hover:border-primary-1 cursor-pointer"
                    onClick={() => addWidget(widget)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={widget.icon} className="w-6 h-6 text-primary-1" />
                      <h4 className="font-medium text-content-1">{widget.name}</h4>
                    </div>
                    <p className="text-sm text-content-2">{widget.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default DashboardBuilder; 