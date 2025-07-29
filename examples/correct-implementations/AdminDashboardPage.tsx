"use client";

// Import from style-reference to ensure consistency
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import ProductView from "@/style-reference/components/ProductView";
import PopularProducts from "@/style-reference/components/PopularProducts";
import NewCustomers from "@/style-reference/components/NewCustomers";
import Percentage from "@/style-reference/components/Percentage";

// Import mock data from style-reference
import { customersData } from "@/style-reference/mocks/dashboard";
import { popularProducts } from "@/style-reference/mocks/products";

// Dynamic export for user-specific admin content
export const dynamic = "force-dynamic";

/**
 * AdminDashboardPage - Example implementation following style-reference patterns
 * 
 * This demonstrates:
 * - Proper Layout component usage
 * - Consistent import order (style-reference components first)
 * - Standard col-left/col-right structure
 * - Style-reference CSS classes
 * - Dynamic export for admin content
 * - TypeScript interfaces
 * - Proper component composition
 */

type AdminDashboardPageProps = {
    // Add props if needed for server components
};

const AdminDashboardPage = () => {
    return (
        <Layout title="Admin Dashboard">
            {/* Standard two-column layout from style-reference */}
            <div className="flex max-lg:block">
                {/* Left column - Main content */}
                <div className="col-left">
                    {/* Overview cards following style-reference pattern */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        <Card
                            className="flex-1 min-w-[250px]"
                            title="System Overview"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Total Users</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-t-primary font-semibold">2,847</span>
                                        <Percentage value={12.5} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Active Sessions</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-t-primary font-semibold">1,234</span>
                                        <Percentage value={-3.2} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">System Load</span>
                                    <span className="label-green">Normal</span>
                                </div>
                            </div>
                        </Card>

                        <Card
                            className="flex-1 min-w-[250px]"
                            title="Revenue Metrics"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Monthly Revenue</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-t-primary font-semibold">$45,290</span>
                                        <Percentage value={8.7} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Free Plan Users</span>
                                    <span className="text-t-primary font-semibold">1,847</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Pro Plan Users</span>
                                    <span className="text-t-primary font-semibold">623</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-t-secondary">Enterprise Users</span>
                                    <span className="text-t-primary font-semibold">377</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Analytics chart using style-reference component */}
                    <ProductView className="mb-8" />

                    {/* Admin actions card */}
                    <Card title="Admin Actions" className="mb-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <Button 
                                className="flex flex-col items-center p-6 h-auto"
                                isStroke
                            >
                                <Icon name="users" className="mb-2 h-6 w-6" />
                                <span>Manage Users</span>
                            </Button>
                            <Button 
                                className="flex flex-col items-center p-6 h-auto"
                                isStroke
                            >
                                <Icon name="settings" className="mb-2 h-6 w-6" />
                                <span>System Settings</span>
                            </Button>
                            <Button 
                                className="flex flex-col items-center p-6 h-auto"
                                isStroke
                            >
                                <Icon name="chart-bar" className="mb-2 h-6 w-6" />
                                <span>View Reports</span>
                            </Button>
                            <Button 
                                className="flex flex-col items-center p-6 h-auto"
                                isStroke
                            >
                                <Icon name="shield" className="mb-2 h-6 w-6" />
                                <span>Security</span>
                            </Button>
                        </div>
                    </Card>

                    {/* Recent activity */}
                    <Card title="Recent Admin Activity">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-backgrounds-surface2 rounded-lg">
                                <div className="w-2 h-2 bg-primary-02 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-t-primary text-sm">User registration spike detected</p>
                                    <p className="text-t-tertiary text-xs">2 minutes ago</p>
                                </div>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="arrow-right" className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-backgrounds-surface2 rounded-lg">
                                <div className="w-2 h-2 bg-primary-05 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-t-primary text-sm">System backup completed</p>
                                    <p className="text-t-tertiary text-xs">15 minutes ago</p>
                                </div>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="arrow-right" className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-backgrounds-surface2 rounded-lg">
                                <div className="w-2 h-2 bg-primary-01 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-t-primary text-sm">Enterprise plan upgrade: TechCorp Inc.</p>
                                    <p className="text-t-tertiary text-xs">1 hour ago</p>
                                </div>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="arrow-right" className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right column - Sidebar content */}
                <div className="col-right">
                    {/* Popular products component from style-reference */}
                    <PopularProducts
                        title="Top Performing Features"
                        items={popularProducts}
                    />

                    {/* New customers component from style-reference */}
                    <NewCustomers
                        className="mb-6"
                        percentage={15.3}
                    />

                    {/* System status card */}
                    <Card title="System Status" className="mb-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-t-secondary text-sm">API Status</span>
                                <span className="label-green">Operational</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-t-secondary text-sm">Database</span>
                                <span className="label-green">Healthy</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-t-secondary text-sm">CDN</span>
                                <span className="label-yellow">Degraded</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-t-secondary text-sm">Email Service</span>
                                <span className="label-green">Operational</span>
                            </div>
                        </div>
                        <Button className="w-full mt-4" isStroke>
                            <Icon name="external-link" className="mr-2 h-4 w-4" />
                            View Status Page
                        </Button>
                    </Card>

                    {/* Quick settings */}
                    <Card title="Quick Settings">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-t-secondary text-sm">Maintenance Mode</label>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="toggle-off" className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-t-secondary text-sm">Debug Mode</label>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="toggle-off" className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-t-secondary text-sm">Auto Backups</label>
                                <Button isCircle className="w-8 h-8">
                                    <Icon name="toggle-on" className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboardPage; 