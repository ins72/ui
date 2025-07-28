"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import { apiClient } from "@/infrastructure/api/apiClient";

interface WebsiteSettings {
    id: string;
    name: string;
    domain: string;
    description: string;
    logo: string;
    favicon: string;
    theme: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
        ogImage: string;
    };
    analytics: {
        googleAnalytics: string;
        facebookPixel: string;
    };
    integrations: {
        googleMaps: string;
        socialMedia: {
            facebook: string;
            twitter: string;
            instagram: string;
            linkedin: string;
        };
    };
}

const WebsiteSettingsPage = () => {
    const [settings, setSettings] = useState<WebsiteSettings | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("general");

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                setLoading(true);
                const data = await apiClient.getPublicContent('website-settings');
                setSettings(data?.content?.data || mockSettings);
            } catch (error) {
                console.error('Error fetching website settings:', error);
                setSettings(mockSettings);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    const handleSave = async () => {
        if (!settings) return;
        
        try {
            setSaving(true);
            await apiClient.updatePublicContent('website-settings', { content: { data: settings } });
            // Show success message
        } catch (error) {
            console.error('Error saving settings:', error);
            // Show error message
        } finally {
            setSaving(false);
        }
    };

    const tabs = [
        { id: "general", name: "General", icon: "settings" },
        { id: "appearance", name: "Appearance", icon: "palette" },
        { id: "seo", name: "SEO", icon: "search" },
        { id: "analytics", name: "Analytics", icon: "bar-chart" },
        { id: "integrations", name: "Integrations", icon: "link" },
        { id: "advanced", name: "Advanced", icon: "code" }
    ];

    if (loading) {
        return (
            <Layout title="Website Settings">
                <div className="center">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Website Settings">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Settings Tabs */}
                    <Card title="Website Configuration" className="mb-5">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-sm ${
                                        activeTab === tab.id 
                                            ? 'bg-blue-600 text-white' 
                                            : 'isStroke'
                                    }`}
                                >
                                    <Icon name={tab.icon} className="mr-1" />
                                    {tab.name}
                                </Button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === "general" && (
                            <div className="space-y-4">
                                <Field
                                    label="Website Name"
                                    value={settings?.name || ""}
                                    onChange={(value) => setSettings(prev => prev ? { ...prev, name: value } : null)}
                                    placeholder="Enter website name"
                                />
                                <Field
                                    label="Domain"
                                    value={settings?.domain || ""}
                                    onChange={(value) => setSettings(prev => prev ? { ...prev, domain: value } : null)}
                                    placeholder="yourdomain.com"
                                />
                                <Field
                                    label="Description"
                                    value={settings?.description || ""}
                                    onChange={(value) => setSettings(prev => prev ? { ...prev, description: value } : null)}
                                    placeholder="Brief description of your website"
                                    type="textarea"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Field
                                        label="Logo URL"
                                        value={settings?.logo || ""}
                                        onChange={(value) => setSettings(prev => prev ? { ...prev, logo: value } : null)}
                                        placeholder="https://example.com/logo.png"
                                    />
                                    <Field
                                        label="Favicon URL"
                                        value={settings?.favicon || ""}
                                        onChange={(value) => setSettings(prev => prev ? { ...prev, favicon: value } : null)}
                                        placeholder="https://example.com/favicon.ico"
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === "appearance" && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Field
                                        label="Primary Color"
                                        value={settings?.theme.primaryColor || ""}
                                        onChange={(value) => setSettings(prev => prev ? { 
                                            ...prev, 
                                            theme: { ...prev.theme, primaryColor: value } 
                                        } : null)}
                                        placeholder="#3B82F6"
                                    />
                                    <Field
                                        label="Secondary Color"
                                        value={settings?.theme.secondaryColor || ""}
                                        onChange={(value) => setSettings(prev => prev ? { 
                                            ...prev, 
                                            theme: { ...prev.theme, secondaryColor: value } 
                                        } : null)}
                                        placeholder="#6B7280"
                                    />
                                </div>
                                <Field
                                    label="Font Family"
                                    value={settings?.theme.fontFamily || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        theme: { ...prev.theme, fontFamily: value } 
                                    } : null)}
                                    placeholder="Inter, sans-serif"
                                />
                            </div>
                        )}

                        {activeTab === "seo" && (
                            <div className="space-y-4">
                                <Field
                                    label="Page Title"
                                    value={settings?.seo.title || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        seo: { ...prev.seo, title: value } 
                                    } : null)}
                                    placeholder="Your Website Title"
                                />
                                <Field
                                    label="Meta Description"
                                    value={settings?.seo.description || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        seo: { ...prev.seo, description: value } 
                                    } : null)}
                                    placeholder="Brief description for search engines"
                                    type="textarea"
                                />
                                <Field
                                    label="Keywords"
                                    value={settings?.seo.keywords?.join(", ") || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        seo: { ...prev.seo, keywords: value.split(", ").filter(k => k.trim()) } 
                                    } : null)}
                                    placeholder="keyword1, keyword2, keyword3"
                                />
                                <Field
                                    label="OG Image URL"
                                    value={settings?.seo.ogImage || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        seo: { ...prev.seo, ogImage: value } 
                                    } : null)}
                                    placeholder="https://example.com/og-image.jpg"
                                />
                            </div>
                        )}

                        {activeTab === "analytics" && (
                            <div className="space-y-4">
                                <Field
                                    label="Google Analytics ID"
                                    value={settings?.analytics.googleAnalytics || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        analytics: { ...prev.analytics, googleAnalytics: value } 
                                    } : null)}
                                    placeholder="G-XXXXXXXXXX"
                                />
                                <Field
                                    label="Facebook Pixel ID"
                                    value={settings?.analytics.facebookPixel || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        analytics: { ...prev.analytics, facebookPixel: value } 
                                    } : null)}
                                    placeholder="XXXXXXXXXX"
                                />
                            </div>
                        )}

                        {activeTab === "integrations" && (
                            <div className="space-y-4">
                                <Field
                                    label="Google Maps API Key"
                                    value={settings?.integrations.googleMaps || ""}
                                    onChange={(value) => setSettings(prev => prev ? { 
                                        ...prev, 
                                        integrations: { ...prev.integrations, googleMaps: value } 
                                    } : null)}
                                    placeholder="AIzaSy..."
                                />
                                <div className="space-y-3">
                                    <h4 className="font-medium">Social Media Links</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field
                                            label="Facebook"
                                            value={settings?.integrations.socialMedia.facebook || ""}
                                            onChange={(value) => setSettings(prev => prev ? { 
                                                ...prev, 
                                                integrations: { 
                                                    ...prev.integrations, 
                                                    socialMedia: { ...prev.integrations.socialMedia, facebook: value } 
                                                } 
                                            } : null)}
                                            placeholder="https://facebook.com/yourpage"
                                        />
                                        <Field
                                            label="Twitter"
                                            value={settings?.integrations.socialMedia.twitter || ""}
                                            onChange={(value) => setSettings(prev => prev ? { 
                                                ...prev, 
                                                integrations: { 
                                                    ...prev.integrations, 
                                                    socialMedia: { ...prev.integrations.socialMedia, twitter: value } 
                                                } 
                                            } : null)}
                                            placeholder="https://twitter.com/yourhandle"
                                        />
                                        <Field
                                            label="Instagram"
                                            value={settings?.integrations.socialMedia.instagram || ""}
                                            onChange={(value) => setSettings(prev => prev ? { 
                                                ...prev, 
                                                integrations: { 
                                                    ...prev.integrations, 
                                                    socialMedia: { ...prev.integrations.socialMedia, instagram: value } 
                                                } 
                                            } : null)}
                                            placeholder="https://instagram.com/yourprofile"
                                        />
                                        <Field
                                            label="LinkedIn"
                                            value={settings?.integrations.socialMedia.linkedin || ""}
                                            onChange={(value) => setSettings(prev => prev ? { 
                                                ...prev, 
                                                integrations: { 
                                                    ...prev.integrations, 
                                                    socialMedia: { ...prev.integrations.socialMedia, linkedin: value } 
                                                } 
                                            } : null)}
                                            placeholder="https://linkedin.com/company/yourcompany"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "advanced" && (
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon name="alert-triangle" className="h-5 w-5 text-yellow-600" />
                                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Advanced Settings</h4>
                                    </div>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                        These settings are for advanced users. Incorrect configuration may affect your website's functionality.
                                    </p>
                                </div>
                                
                                <Field
                                    label="Custom CSS"
                                    value=""
                                    onChange={() => {}}
                                    placeholder="/* Add your custom CSS here */"
                                    type="textarea"
                                    rows={6}
                                />
                                
                                <Field
                                    label="Custom JavaScript"
                                    value=""
                                    onChange={() => {}}
                                    placeholder="// Add your custom JavaScript here"
                                    type="textarea"
                                    rows={6}
                                />
                            </div>
                        )}

                        {/* Save Button */}
                        <div className="flex justify-end mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <Button 
                                onClick={handleSave} 
                                disabled={saving}
                                className="min-w-24"
                            >
                                {saving ? (
                                    <>
                                        <Icon name="loader" className="mr-2 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Icon name="save" className="mr-2" />
                                        Save Changes
                                    </>
                                )}
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="col-right">
                    {/* Preview */}
                    <Card title="Website Preview" className="mb-5">
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                <div className="text-center">
                                    <Icon name="globe" className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500">Website Preview</p>
                                    <p className="text-xs text-gray-400 mt-1">{settings?.domain || "yourdomain.com"}</p>
                                </div>
                            </div>
                            <Button href={`https://${settings?.domain}`} target="_blank" className="w-full isStroke">
                                <Icon name="external-link" className="mr-2" />
                                Visit Website
                            </Button>
                        </div>
                    </Card>

                    {/* Quick Actions */}
                    <Card title="Quick Actions">
                        <div className="space-y-3">
                            <Button href="/website-builder" className="w-full justify-start">
                                <Icon name="edit" className="mr-2" />
                                Edit Website
                            </Button>
                            <Button href="/website-analytics" className="w-full justify-start isStroke">
                                <Icon name="bar-chart" className="mr-2" />
                                View Analytics
                            </Button>
                            <Button href="/website-templates" className="w-full justify-start isStroke">
                                <Icon name="grid" className="mr-2" />
                                Browse Templates
                            </Button>
                            <Button href="/website-builder/backup" className="w-full justify-start isStroke">
                                <Icon name="download" className="mr-2" />
                                Backup Website
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

// Mock data
const mockSettings: WebsiteSettings = {
    id: "1",
    name: "My Business Website",
    domain: "mybusiness.com",
    description: "Professional business website showcasing our services and expertise",
    logo: "https://example.com/logo.png",
    favicon: "https://example.com/favicon.ico",
    theme: {
        primaryColor: "#3B82F6",
        secondaryColor: "#6B7280",
        fontFamily: "Inter, sans-serif"
    },
    seo: {
        title: "My Business - Professional Services",
        description: "We provide professional services to help your business grow and succeed in today's competitive market.",
        keywords: ["business", "services", "professional", "consulting"],
        ogImage: "https://example.com/og-image.jpg"
    },
    analytics: {
        googleAnalytics: "G-XXXXXXXXXX",
        facebookPixel: "XXXXXXXXXX"
    },
    integrations: {
        googleMaps: "AIzaSy...",
        socialMedia: {
            facebook: "https://facebook.com/mybusiness",
            twitter: "https://twitter.com/mybusiness",
            instagram: "https://instagram.com/mybusiness",
            linkedin: "https://linkedin.com/company/mybusiness"
        }
    }
};

export default WebsiteSettingsPage; 