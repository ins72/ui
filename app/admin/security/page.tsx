"use client";

import React from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";

export const dynamic = 'force-dynamic';

export default function SecurityPage() {
    return (
        <Layout title="Security Center">
            <div className="space-y-6">
                {/* Security Overview */}
                <Card title="Security Overview">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-b-surface2 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Icon name="shield-check" className="w-8 h-8 text-green-500" />
                                <div>
                                    <h3 className="font-semibold text-t-primary">Security Status</h3>
                                    <Badge variant="green">Secure</Badge>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-b-surface2 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Icon name="key" className="w-8 h-8 text-blue-500" />
                                <div>
                                    <h3 className="font-semibold text-t-primary">Active Sessions</h3>
                                    <p className="text-t-secondary">3 devices</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-b-surface2 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Icon name="clock" className="w-8 h-8 text-yellow-500" />
                                <div>
                                    <h3 className="font-semibold text-t-primary">Last Audit</h3>
                                    <p className="text-t-secondary">2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Authentication Settings */}
                <Card title="Authentication & Access">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-b-surface2 rounded-lg">
                            <div>
                                <h4 className="font-medium text-t-primary">Two-Factor Authentication</h4>
                                <p className="text-sm text-t-secondary">Add an extra layer of security to your account</p>
                            </div>
                            <Badge variant="green">Enabled</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-b-surface2 rounded-lg">
                            <div>
                                <h4 className="font-medium text-t-primary">Single Sign-On (SSO)</h4>
                                <p className="text-sm text-t-secondary">Enterprise SSO integration</p>
                            </div>
                            <Button>Configure</Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-b-surface2 rounded-lg">
                            <div>
                                <h4 className="font-medium text-t-primary">API Keys</h4>
                                <p className="text-sm text-t-secondary">Manage API access tokens</p>
                            </div>
                            <Button>Manage</Button>
                        </div>
                    </div>
                </Card>

                {/* Compliance & Monitoring */}
                <Card title="Compliance & Monitoring">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <h4 className="font-medium text-t-primary">Compliance Standards</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">SOC 2 Type II</span>
                                    <Badge variant="green">Compliant</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">GDPR</span>
                                    <Badge variant="green">Compliant</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">HIPAA</span>
                                    <Badge variant="yellow">In Progress</Badge>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <h4 className="font-medium text-t-primary">Security Monitoring</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Failed Login Attempts</span>
                                    <span className="text-t-primary">0 today</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Suspicious Activity</span>
                                    <span className="text-t-primary">None detected</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Data Exports</span>
                                    <span className="text-t-primary">2 this month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Security Actions */}
                <Card title="Security Actions">
                    <div className="flex flex-wrap gap-3">
                        <Button className="bg-primary-01 text-white">
                            <Icon name="download" className="w-4 h-4 mr-2" />
                            Download Security Report
                        </Button>
                        <Button className="border border-s-stroke2">
                            <Icon name="refresh-cw" className="w-4 h-4 mr-2" />
                            Run Security Audit
                        </Button>
                        <Button className="border border-s-stroke2">
                            <Icon name="settings" className="w-4 h-4 mr-2" />
                            Configure Alerts
                        </Button>
                    </div>
                </Card>
            </div>
        </Layout>
    );
} 