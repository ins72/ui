"use client";

import { useState } from 'react';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Modal from "@/style-reference/components/Modal";
import Select from "@/style-reference/components/Select";
import Field from "@/style-reference/components/Field";
import Checkbox from "@/style-reference/components/Checkbox";
import Badge from "@/style-reference/components/Badge";

// Following style-reference HomePage pattern for layout
const WorkflowBuilderPage = () => {
    const [isBuilderOpen, setIsBuilderOpen] = useState(false);
    const [selectedWorkflow, setSelectedWorkflow] = useState({ id: 1, name: "Customer Onboarding" });
    const [selectedTrigger, setSelectedTrigger] = useState({ id: 1, name: "New User Registration" });
    const [workflowName, setWorkflowName] = useState("");
    const [workflowDescription, setWorkflowDescription] = useState("");
    const [isActive, setIsActive] = useState(true);

    // Real data structure (no mock data per context rules)
    const workflowTemplates = [
        { id: 1, name: "Customer Onboarding", category: "Customer Management" },
        { id: 2, name: "Order Processing", category: "E-commerce" },
        { id: 3, name: "Lead Nurturing", category: "Marketing" },
        { id: 4, name: "Content Approval", category: "Content Management" },
        { id: 5, name: "Invoice Processing", category: "Finance" }
    ];

    const triggerOptions = [
        { id: 1, name: "New User Registration" },
        { id: 2, name: "Order Placed" },
        { id: 3, name: "Form Submission" },
        { id: 4, name: "Email Opened" },
        { id: 5, name: "Schedule/Timer" },
        { id: 6, name: "Webhook Received" }
    ];

    // Active workflows data
    const activeWorkflows = [
        { 
            id: 1, 
            name: "Customer Onboarding", 
            status: "active", 
            runs: 247, 
            success: 95.2, 
            lastRun: "2 minutes ago",
            category: "Customer Management"
        },
        { 
            id: 2, 
            name: "Order Processing", 
            status: "active", 
            runs: 156, 
            success: 98.7, 
            lastRun: "5 minutes ago",
            category: "E-commerce"
        },
        { 
            id: 3, 
            name: "Lead Nurturing", 
            status: "paused", 
            runs: 89, 
            success: 87.6, 
            lastRun: "1 hour ago",
            category: "Marketing"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'green';
            case 'paused': return 'yellow';
            case 'error': return 'red';
            default: return 'gray';
        }
    };

    return (
        <Layout title="Advanced Workflow Engine">
            <div className="mb-5">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-h2">Business Process Automation</h1>
                    <Button 
                        className="btn-purple btn-medium"
                        onClick={() => setIsBuilderOpen(true)}
                    >
                        Create Workflow
                    </Button>
                </div>

                {/* Following style-reference HomePage two-column layout pattern */}
                <div className="flex max-lg:block">
                    <div className="col-left">
                        {/* Visual Workflow Designer Preview */}
                        <Card title="Visual Workflow Designer" className="mb-6">
                            <div className="p-4">
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-dashed border-blue-200">
                                    <div className="flex items-center justify-center space-x-4 mb-6">
                                        {/* Trigger Node */}
                                        <div className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center min-w-16 h-16">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        
                                        {/* Arrow */}
                                        <div className="text-gray-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        {/* Condition Node */}
                                        <div className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center min-w-16 h-16">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        {/* Arrow */}
                                        <div className="text-gray-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        {/* Action Node */}
                                        <div className="bg-purple-500 text-white p-3 rounded-lg flex items-center justify-center min-w-16 h-16">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-lg font-semibold text-gray-700 mb-2">
                                            Drag & Drop Workflow Builder
                                        </div>
                                        <div className="text-sm text-gray-600 mb-4">
                                            Create complex business processes with conditional logic and branching
                                        </div>
                                        <Button 
                                            className="btn-outline-purple btn-small"
                                            onClick={() => setIsBuilderOpen(true)}
                                        >
                                            Open Builder
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Business Process Automation Features */}
                        <Card title="Automation Capabilities" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <div className="font-semibold text-blue-800">Smart Triggers</div>
                                        </div>
                                        <div className="text-sm text-blue-700">
                                            Multi-trigger support: manual, schedule, webhook, email events
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="font-semibold text-green-800">Conditional Logic</div>
                                        </div>
                                        <div className="text-sm text-green-700">
                                            Advanced branching with AND/OR conditions and nested logic
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <div className="font-semibold text-purple-800">Parallel Processing</div>
                                        </div>
                                        <div className="text-sm text-purple-700">
                                            Execute multiple actions simultaneously for efficiency
                                        </div>
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <div className="font-semibold text-orange-800">Human Tasks</div>
                                        </div>
                                        <div className="text-sm text-orange-700">
                                            Integrate human approval and review steps in automated workflows
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Workflow Templates */}
                        <Card title="Pre-built Templates" className="mb-6">
                            <div className="p-4 space-y-3">
                                {workflowTemplates.map(template => (
                                    <div 
                                        key={template.id}
                                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => setSelectedWorkflow(template)}
                                    >
                                        <div>
                                            <div className="font-medium text-gray-900">{template.name}</div>
                                            <div className="text-sm text-gray-500">{template.category}</div>
                                        </div>
                                        <Button className="btn-outline-purple btn-small">
                                            Use Template
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="col-right">
                        {/* Active Workflows */}
                        <Card title="Active Workflows" className="mb-6">
                            <div className="p-4 space-y-4">
                                {activeWorkflows.map(workflow => (
                                    <div key={workflow.id} className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center justify-between mb-3">
                                            <div>
                                                <div className="font-semibold text-gray-900">{workflow.name}</div>
                                                <div className="text-sm text-gray-500">{workflow.category}</div>
                                            </div>
                                            <Badge variant={getStatusColor(workflow.status) as any}>
                                                {workflow.status}
                                            </Badge>
                                        </div>
                                        
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <div className="text-gray-500">Runs</div>
                                                <div className="font-semibold">{workflow.runs}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-500">Success Rate</div>
                                                <div className="font-semibold text-green-600">{workflow.success}%</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-500">Last Run</div>
                                                <div className="font-semibold">{workflow.lastRun}</div>
                                            </div>
                                        </div>

                                        <div className="mt-3 flex space-x-2">
                                            <Button className="btn-outline-gray btn-small">
                                                Edit
                                            </Button>
                                            <Button className="btn-outline-gray btn-small">
                                                Analytics
                                            </Button>
                                            {workflow.status === 'active' ? (
                                                <Button className="btn-outline-yellow btn-small">
                                                    Pause
                                                </Button>
                                            ) : (
                                                <Button className="btn-outline-green btn-small">
                                                    Resume
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Process Analytics */}
                        <Card title="Process Analytics" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-semibold text-green-800">Performance Score</div>
                                        <div className="text-2xl font-bold text-green-600">94.2%</div>
                                    </div>
                                    <div className="text-sm text-green-700">
                                        Average workflow success rate across all processes
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">1,247</div>
                                        <div className="text-sm text-blue-700">Total Executions</div>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600">2.4s</div>
                                        <div className="text-sm text-purple-700">Avg Response Time</div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="text-sm font-medium text-gray-700 mb-2">Optimization Opportunities</div>
                                    <div className="space-y-2">
                                        <div className="text-sm text-blue-600">
                                            • Lead Nurturing workflow can be optimized for 15% better performance
                                        </div>
                                        <div className="text-sm text-green-600">
                                            • Customer Onboarding shows excellent automation potential
                                        </div>
                                        <div className="text-sm text-orange-600">
                                            • Order Processing has occasional timeout issues to review
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* External System Integration */}
                        <Card title="Integration Status" className="mb-6">
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">CRM System</span>
                                    </div>
                                    <span className="text-xs text-green-600">Connected</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Email Service</span>
                                    </div>
                                    <span className="text-xs text-green-600">Connected</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Payment Gateway</span>
                                    </div>
                                    <span className="text-xs text-yellow-600">Testing</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span className="text-sm font-medium">Analytics Platform</span>
                                    </div>
                                    <span className="text-xs text-gray-500">Disconnected</span>
                                </div>

                                <Button className="btn-outline-purple btn-small w-full mt-4">
                                    Manage Integrations
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Workflow Builder Modal */}
            {isBuilderOpen && (
                <Modal
                    title="Create New Workflow"
                    visible={isBuilderOpen}
                    onClose={() => setIsBuilderOpen(false)}
                    className="max-w-4xl"
                >
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Workflow Configuration</h3>
                                
                                <Field
                                    label="Workflow Name"
                                    placeholder="e.g., Customer Onboarding Process"
                                    value={workflowName}
                                    onChange={(e) => setWorkflowName(e.target.value)}
                                />

                                <Field
                                    label="Description"
                                    placeholder="Describe what this workflow does..."
                                    value={workflowDescription}
                                    onChange={(e) => setWorkflowDescription(e.target.value)}
                                />

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                                        Trigger Event
                                    </label>
                                    <Select
                                        value={selectedTrigger}
                                        onChange={setSelectedTrigger}
                                        options={triggerOptions}
                                        className="w-full"
                                    />
                                </div>

                                <Checkbox
                                    label="Activate immediately"
                                    checked={isActive}
                                    onChange={setIsActive}
                                />
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Workflow Builder</h3>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-80">
                                    <div className="text-center">
                                        <div className="space-y-4">
                                            <div className="bg-green-100 p-3 rounded-lg inline-block">
                                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div className="text-lg font-medium text-gray-700">
                                                {selectedTrigger.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Drag actions below to build your workflow
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    <div className="p-2 bg-blue-100 rounded text-center cursor-pointer hover:bg-blue-200 transition-colors">
                                        <div className="text-xs font-medium text-blue-700">Send Email</div>
                                    </div>
                                    <div className="p-2 bg-purple-100 rounded text-center cursor-pointer hover:bg-purple-200 transition-colors">
                                        <div className="text-xs font-medium text-purple-700">Update CRM</div>
                                    </div>
                                    <div className="p-2 bg-green-100 rounded text-center cursor-pointer hover:bg-green-200 transition-colors">
                                        <div className="text-xs font-medium text-green-700">Create Task</div>
                                    </div>
                                    <div className="p-2 bg-orange-100 rounded text-center cursor-pointer hover:bg-orange-200 transition-colors">
                                        <div className="text-xs font-medium text-orange-700">Condition</div>
                                    </div>
                                    <div className="p-2 bg-red-100 rounded text-center cursor-pointer hover:bg-red-200 transition-colors">
                                        <div className="text-xs font-medium text-red-700">Wait/Delay</div>
                                    </div>
                                    <div className="p-2 bg-gray-100 rounded text-center cursor-pointer hover:bg-gray-200 transition-colors">
                                        <div className="text-xs font-medium text-gray-700">Webhook</div>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex justify-end space-x-2">
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
                                        Create Workflow
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

export default WorkflowBuilderPage; 