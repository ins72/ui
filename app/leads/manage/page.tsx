
"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api-client";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Table from "@/components/Table";

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    status: string;
    source: string;
    estimatedValue: number;
    assignedTo: string;
    createdAt: string;
    lastContact: string;
    notes: string;
}

const LeadManagementPage = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            setLoading(true);
            const response = await apiClient.getLeads();
            setLeads(response.data);
        } catch (error: any) {
            setError("Failed to load leads");
            console.error("Error fetching leads:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteLead = async (leadId: string) => {
        if (confirm("Are you sure you want to delete this lead?")) {
            try {
                await apiClient.deleteLead(leadId);
                setLeads(leads.filter(l => l.id !== leadId));
            } catch (error: any) {
                alert("Failed to delete lead");
                console.error("Error deleting lead:", error);
            }
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'contacted':
                return 'bg-yellow-100 text-yellow-800';
            case 'qualified':
                return 'bg-green-100 text-green-800';
            case 'proposal':
                return 'bg-purple-100 text-purple-800';
            case 'negotiation':
                return 'bg-orange-100 text-orange-800';
            case 'closed-won':
                return 'bg-green-100 text-green-800';
            case 'closed-lost':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const leadColumns = [
        {
            key: "name",
            label: "Lead",
            render: (lead: Lead) => (
                <div>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                </div>
            ),
        },
        {
            key: "company",
            label: "Company",
            render: (lead: Lead) => (
                <div className="text-sm">{lead.company || "N/A"}</div>
            ),
        },
        {
            key: "estimatedValue",
            label: "Value",
            render: (lead: Lead) => (
                <div className="font-medium">${lead.estimatedValue.toLocaleString()}</div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (lead: Lead) => (
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                    {lead.status}
                </span>
            ),
        },
        {
            key: "source",
            label: "Source",
            render: (lead: Lead) => (
                <div className="text-sm">{lead.source}</div>
            ),
        },
        {
            key: "assignedTo",
            label: "Assigned To",
            render: (lead: Lead) => (
                <div className="text-sm">{lead.assignedTo}</div>
            ),
        },
        {
            key: "lastContact",
            label: "Last Contact",
            render: (lead: Lead) => (
                <div className="text-sm">
                    {lead.lastContact ? new Date(lead.lastContact).toLocaleDateString() : "Never"}
                </div>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (lead: Lead) => (
                <div className="flex space-x-2">
                    <Button
                        href={`/leads/view/${lead.id}`}
                        size="sm"
                        isStroke
                        aria-label="Action button">
                        View
                    </Button>
                    <Button 
                        href={`/leads/edit/${lead.id}`}
                        size="sm"
                        isStroke
                     aria-label="Action button">
                        Edit
                    </Button>
                    <Button
                        onClick={() => handleDeleteLead(lead.id)}
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                        aria-label="Action button">
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    if (loading) {
        return (
            <Layout title="Lead Management">
                <div className="center">
                    <div className="text-gray-600">Loading leads...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Lead Management">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card 
                        title="Leads" 
                        headContent={
                            <Button href="/leads/create" aria-label="Action button">
                                Add Lead
                            </Button>
                        }
                    >
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4">
                                {error}
                            </div>
                        )}
                        
                        {leads.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No leads found. Add your first lead to get started.
                            </div>
                        ) : (
                            <Table 
                                data={leads} 
                                columns={leadColumns}
                                className="w-full"
                            />
                        )}
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Lead Stats">
                        <div className="space-y-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {leads.length}
                                </div>
                                <div className="text-sm text-gray-600">Total Leads</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-green-600">
                                    ${leads.reduce((sum, l) => sum + l.estimatedValue, 0).toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Total Pipeline Value</div>
                            </div>
                            
                            <div>
                                <div className="text-2xl font-bold text-purple-600">
                                    {leads.filter(l => l.status === 'qualified').length}
                                </div>
                                <div className="text-sm text-gray-600">Qualified Leads</div>
                            </div>
                        </div>
                    </Card>
                    
                    <Card title="Lead Status Distribution" className="mt-4">
                        <div className="space-y-3">
                            {['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost'].map((status) => {
                                const count = leads.filter(l => l.status.toLowerCase() === status).length;
                                const percentage = leads.length > 0 ? (count / leads.length * 100).toFixed(1) : 0;
                                return (
                                    <div key={status} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className={`w-3 h-3 rounded-full ${getStatusColor(status).replace('text-', 'bg-').replace('100', '500')}`}></span>
                                            <span className="text-sm text-gray-700 capitalize">{status.replace('-', ' ')}</span>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {count} ({percentage}%)
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Card>
                    
                    <Card title="Quick Actions" className="mt-4">
                        <div className="space-y-2">
                            <button href="/leads/import" className="w-full" isStroke aria-label="Action button">
                                Import Leads
                            </Button>
                            <button href="/leads/export" className="w-full" isStroke aria-label="Action button">
                                Export Leads
                            </Button>
                            <button href="/leads/analytics" className="w-full" isStroke aria-label="Action button">
                                Lead Analytics
                            </Button>
                            <button href="/leads/automation" className="w-full" isStroke aria-label="Action button">
                                Lead Automation
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default LeadManagementPage; 