'use client';

import React, { useState, useEffect, useCallback } from 'react';
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

interface WorkflowType {
  id: number;
  workflow_name: string;
  description: string;
  category: string;
  status: string;
  trigger: { type: string };
  executions: number;
  success_rate: number;
  last_execution?: string;
  created_at: string;
}

interface SelectOption {
  id: number;
  name: string;
}

export default function WorkflowDesignerPage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Workflows' });
  const [workflows, setWorkflows] = useState<WorkflowType[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowType | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [newWorkflow, setNewWorkflow] = useState({
    workflow_name: '',
    description: '',
    category: 'custom',
    trigger: {
      type: 'manual',
      config: {}
    }
  });

  const tabOptions = [
    { id: 1, name: 'Workflows' },
    { id: 2, name: 'Templates' },
    { id: 3, name: 'Analytics' },
    { id: 4, name: 'Settings' }
  ];

  const triggerTypes = [
    { id: 1, name: 'Manual' },
    { id: 2, name: 'Schedule' },
    { id: 3, name: 'Webhook' },
    { id: 4, name: 'Email' },
    { id: 5, name: 'Form Submission' },
    { id: 6, name: 'Data Change' }
  ];

  const categoryOptions = [
    { id: 1, name: 'Sales' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Support' },
    { id: 4, name: 'Operations' },
    { id: 5, name: 'HR' },
    { id: 6, name: 'Finance' },
    { id: 7, name: 'Custom' }
  ];

  const workflowTemplates = [
    {
      id: 1,
      name: 'Lead Qualification',
      description: 'Automatically qualify leads based on score and activity',
      category: 'sales',
      trigger: 'form_submission',
      steps: 5,
      popularity: 95
    },
    {
      id: 2,
      name: 'Customer Onboarding',
      description: 'Welcome new customers with automated email sequence',
      category: 'marketing',
      trigger: 'data_change',
      steps: 8,
      popularity: 89
    },
    {
      id: 3,
      name: 'Support Ticket Routing',
      description: 'Route tickets to appropriate agents based on priority',
      category: 'support',
      trigger: 'webhook',
      steps: 4,
      popularity: 92
    },
    {
      id: 4,
      name: 'Invoice Processing',
      description: 'Automate invoice approval and payment processing',
      category: 'finance',
      trigger: 'schedule',
      steps: 6,
      popularity: 87
    }
  ];

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    try {
      // Simulate API call - replace with real API
      setTimeout(() => {
        setWorkflows([
          {
            id: 1,
            workflow_name: 'New Customer Welcome',
            description: 'Send welcome email and assign account manager',
            category: 'marketing',
            status: 'active',
            trigger: { type: 'data_change' },
            executions: 1247,
            success_rate: 94.2,
            last_execution: '2024-01-15T10:30:00Z',
            created_at: '2024-01-01T00:00:00Z'
          },
          {
            id: 2,
            workflow_name: 'High Value Lead Alert',
            description: 'Notify sales team when high-value lead is captured',
            category: 'sales',
            status: 'active',
            trigger: { type: 'form_submission' },
            executions: 856,
            success_rate: 98.1,
            last_execution: '2024-01-15T09:15:00Z',
            created_at: '2024-01-05T00:00:00Z'
          },
          {
            id: 3,
            workflow_name: 'Monthly Report Generation',
            description: 'Generate and distribute monthly performance reports',
            category: 'operations',
            status: 'paused',
            trigger: { type: 'schedule' },
            executions: 12,
            success_rate: 100,
            last_execution: '2024-01-01T00:00:00Z',
            created_at: '2023-12-01T00:00:00Z'
          }
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching workflows:', error);
      setLoading(false);
    }
  };

  const createWorkflow = async () => {
    try {
      // Simulate API call
      const workflow = {
        ...newWorkflow,
        id: Date.now(),
        status: 'inactive',
        executions: 0,
        success_rate: 0,
        created_at: new Date().toISOString()
      };
      
      setWorkflows(prev => [...prev, workflow]);
      setShowCreateModal(false);
      setNewWorkflow({
        workflow_name: '',
        description: '',
        category: 'custom',
        trigger: { type: 'manual', config: {} }
      });
    } catch (error) {
      console.error('Error creating workflow:', error);
    }
  };

  const deleteWorkflow = (workflowId: number) => {
    setWorkflows(prev => prev.filter(w => w.id !== workflowId));
  };

  const toggleWorkflowStatus = (workflowId: number) => {
    setWorkflows(prev => prev.map(w => 
      w.id === workflowId 
        ? { ...w, status: w.status === 'active' ? 'paused' : 'active' }
        : w
    ));
  };

  const workflowColumns = [
    {
      key: 'workflow_name',
      title: 'Workflow Name',
      render: (value: string, record: any) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary">{record.description}</div>
        </div>
      )
    },
    {
      key: 'category',
      title: 'Category',
      render: (value: string) => (
        <Badge variant="default" className="capitalize">{value}</Badge>
      )
    },
    {
      key: 'trigger',
      title: 'Trigger',
      render: (value: any) => (
        <div className="flex items-center gap-2">
          <Icon name="zap" className="w-4 h-4 text-primary-01" />
          <span className="capitalize">{value.type.replace('_', ' ')}</span>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge 
          variant={value === 'active' ? 'green' : value === 'paused' ? 'yellow' : 'gray'}
        >
          {value}
        </Badge>
      )
    },
    {
      key: 'executions',
      title: 'Executions',
      render: (value: number) => value.toLocaleString()
    },
    {
      key: 'success_rate',
      title: 'Success Rate',
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
    }
  ];

  const renderWorkflowsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">Business Process Workflows</h2>
          <p className="text-body-2 text-t-secondary">Automate your business processes with visual workflow designer</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowCreateModal(true)}
        >
          <Icon name="plus" className="w-4 h-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      <DataTable
        columns={workflowColumns}
        data={workflows}
        loading={loading}
        actions={{
          onEdit: (record) => setSelectedWorkflow(record),
          onDelete: (record) => deleteWorkflow(record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderTemplatesTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Workflow Templates</h2>
        <p className="text-body-2 text-t-secondary">Pre-built workflows for common business processes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowTemplates.map(template => (
          <Card key={template.id} title={template.name}>
            <div className="space-y-4">
              <p className="text-sm text-t-secondary">{template.description}</p>
              
              <div className="flex items-center justify-between">
                <Badge variant="default" className="capitalize">{template.category}</Badge>
                <div className="flex items-center gap-2 text-sm text-t-secondary">
                  <Icon name="zap" className="w-4 h-4" />
                  {template.trigger.replace('_', ' ')}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-t-secondary">{template.steps} steps</span>
                <div className="flex items-center gap-1">
                  <Icon name="star" className="w-4 h-4 text-yellow-500" />
                  <span className="text-t-secondary">{template.popularity}% popularity</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="bg-primary-01 text-white flex-1">
                  <Icon name="download" className="w-4 h-4 mr-2" />
                  Use Template
                </Button>
                <Button className="border border-s-stroke2 bg-b-surface2 text-t-primary">
                  <Icon name="eye" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Workflow Analytics</h2>
        <p className="text-body-2 text-t-secondary">Monitor performance and optimize your automated processes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Workflows">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">24</div>
            <div className="text-sm text-t-secondary">+3 this month</div>
          </div>
        </Card>
        
        <Card title="Active Executions">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">2,847</div>
            <div className="text-sm text-t-secondary">+12% vs last month</div>
          </div>
        </Card>
        
        <Card title="Success Rate">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">94.2%</div>
            <div className="text-sm text-t-secondary">-1.2% vs last month</div>
          </div>
        </Card>
        
        <Card title="Time Saved">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">167.5h</div>
            <div className="text-sm text-t-secondary">This month</div>
          </div>
        </Card>
      </div>

      <Card title="Workflow Performance">
        <div className="text-center py-12">
          <Icon name="bar-chart" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
          <p className="text-t-secondary">Detailed analytics charts would be displayed here</p>
        </div>
      </Card>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Workflow Settings</h2>
        <p className="text-body-2 text-t-secondary">Configure global workflow engine settings</p>
      </div>

      <Card title="Execution Settings">
        <div className="space-y-4">
          <Field
            label="Max Concurrent Workflows"
            type="number"
            placeholder="10"
            value="10"
          />
          <Field
            label="Default Timeout (minutes)"
            type="number"
            placeholder="120"
            value="120"
          />
          <Field
            label="Error Notification Email"
            type="email"
            placeholder="admin@company.com"
            value=""
          />
        </div>
      </Card>

      <Card title="Security Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Require Approval for Sensitive Actions</h4>
              <p className="text-sm text-t-secondary">Workflows affecting financial or user data require approval</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Audit All Workflow Executions</h4>
              <p className="text-sm text-t-secondary">Log all workflow activities for compliance</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <Layout title="Workflow Designer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-h4 font-bold text-t-primary">Business Process Automation</h1>
            <p className="text-body-1 text-t-secondary">Design, deploy, and monitor automated workflows</p>
          </div>
          <Badge variant="green">Enterprise Feature</Badge>
        </div>

        <Card title="Workflow Engine">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {activeTab.id === 1 && renderWorkflowsTab()}
          {activeTab.id === 2 && renderTemplatesTab()}
          {activeTab.id === 3 && renderAnalyticsTab()}
          {activeTab.id === 4 && renderSettingsTab()}
        </Card>

        {/* Create Workflow Modal */}
        <Modal
          open={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Create New Workflow</h3>
            
            <div className="space-y-4">
              <Field
                label="Workflow Name"
                placeholder="Enter workflow name"
                value={newWorkflow.workflow_name}
                onChange={(e) => setNewWorkflow(prev => ({ ...prev, workflow_name: e.target.value }))}
              />
              
              <Field
                label="Description"
                textarea
                placeholder="Describe what this workflow does"
                value={newWorkflow.description}
                onChange={(e) => setNewWorkflow(prev => ({ ...prev, description: e.target.value }))}
              />
              
                             <Select
                 label="Category"
                 options={categoryOptions}
                 value={categoryOptions.find(c => c.name.toLowerCase() === newWorkflow.category) || null}
                 onChange={(option) => setNewWorkflow(prev => ({ ...prev, category: option.name.toLowerCase() }))}
               />
               
               <Select
                 label="Trigger Type"
                 options={triggerTypes}
                 value={triggerTypes.find(t => t.name.toLowerCase() === newWorkflow.trigger.type) || null}
                 onChange={(option) => setNewWorkflow(prev => ({ 
                   ...prev, 
                   trigger: { ...prev.trigger, type: option.name.toLowerCase() }
                 }))}
               />
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={createWorkflow}
              >
                <Icon name="plus" className="w-4 h-4 mr-2" />
                Create Workflow
              </Button>
              <Button
                className="border border-s-stroke2 bg-b-surface2 text-t-primary flex-1"
                onClick={() => setShowCreateModal(false)}
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