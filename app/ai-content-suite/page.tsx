"use client";

import { useState } from 'react';
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Field from "@/style-reference/components/Field";
import Select from "@/style-reference/components/Select";
import Tabs from "@/style-reference/components/Tabs";
import Badge from "@/style-reference/components/Badge";
import DataTable from "@/style-reference/components/DataTable";

export const dynamic = 'force-dynamic';

// Professional AI Content Suite for Enterprise Content Marketing
// Optimized for SEO: AI content creation, automated marketing, enterprise content management
const AIContentSuitePage = () => {
    const [activeTab, setActiveTab] = useState({ id: 1, name: "Content Generator" });
    const [contentType, setContentType] = useState({ id: 1, name: "Blog Post" });
    const [brandVoice, setBrandVoice] = useState({ id: 1, name: "Professional" });
    const [contentTopic, setContentTopic] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    // Professional content management tabs for enterprise marketing
const tabOptions = [
        { id: 1, name: "Content Generator" },
        { id: 2, name: "Brand Voice Training" },
        { id: 3, name: "SEO Optimizer" },
        { id: 4, name: "Performance Analytics" },
        { id: 5, name: "Content Calendar" }
    ];

    // Enterprise content types for comprehensive marketing automation
const contentTypeOptions = [
  { id: 1, name: "Blog Post" },
        { id: 2, name: "Social Media Post" },
        { id: 3, name: "Email Campaign" },
        { id: 4, name: "Product Description" },
        { id: 5, name: "Video Script" },
        { id: 6, name: "Landing Page Copy" },
        { id: 7, name: "Press Release" },
        { id: 8, name: "Ad Copy" },
        { id: 9, name: "Newsletter" },
        { id: 10, name: "Course Content" }
    ];

    // Professional brand voice options for consistent marketing messaging
    const brandVoiceOptions = [
        { id: 1, name: "Professional" },
        { id: 2, name: "Friendly & Conversational" },
        { id: 3, name: "Authoritative" },
        { id: 4, name: "Creative & Innovative" },
        { id: 5, name: "Technical & Expert" },
        { id: 6, name: "Inspirational" },
        { id: 7, name: "Casual & Approachable" }
    ];

    // Generated content performance data for enterprise analytics
    const recentContent = [
        { 
            id: 1, 
            title: "Enterprise Digital Transformation Strategies", 
            type: "Blog Post", 
            status: "published", 
            performance: "High",
            engagement: "94%",
            seoScore: 92,
            createdAt: "2 hours ago"
        },
        { 
            id: 2, 
            title: "Maximize ROI with AI-Powered Marketing", 
            type: "Email Campaign", 
            status: "scheduled", 
            performance: "Pending",
            engagement: "N/A",
            seoScore: 88,
            createdAt: "1 day ago"
        },
        { 
            id: 3, 
            title: "Social Media Marketing Best Practices", 
            type: "Social Media", 
            status: "published", 
            performance: "Excellent",
            engagement: "87%",
            seoScore: 85,
            createdAt: "3 days ago"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'published': return 'green';
            case 'scheduled': return 'blue';
            case 'draft': return 'yellow';
            case 'failed': return 'red';
      default: return 'gray';
    }
  };

    const getPerformanceColor = (performance: string) => {
        switch (performance) {
            case 'Excellent': return 'green';
            case 'High': return 'blue';
            case 'Medium': return 'yellow';
            case 'Low': return 'orange';
      default: return 'gray';
    }
  };

    const handleGenerateContent = async () => {
        if (!contentTopic.trim() || !targetAudience.trim()) {
            alert('Please provide content topic and target audience for optimal AI generation');
            return;
        }

        setIsGenerating(true);
        
        try {
            // Simulate professional AI content generation process
            setTimeout(() => {
                setIsGenerating(false);
                alert(`Professional ${contentType.name.toLowerCase()} generated successfully! Content optimized for ${brandVoice.name.toLowerCase()} brand voice with advanced SEO targeting "${contentTopic}" for ${targetAudience} audience.`);
                
                // Reset form for next content creation
                setContentTopic("");
                setTargetAudience("");
            }, 3000);
        } catch (error) {
            setIsGenerating(false);
            alert('Content generation failed. Please try again or contact support.');
        }
    };

  return (
        <Layout title="AI Content Suite - Enterprise Content Marketing Platform">
            <div className="mb-5">
          <div className="mb-6">
                    <h1 className="text-h2 mb-3">AI-Powered Content Creation Suite</h1>
                    <p className="text-base text-gray-600 mb-4">
                        Professional enterprise content marketing platform with advanced AI automation. 
                        Create high-converting content, optimize for SEO, and scale your marketing efforts 
                        with intelligent brand voice consistency and performance analytics.
                    </p>
                    
                    {/* Professional feature highlights for enterprise marketing */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <div className="text-sm font-semibold text-blue-800 mb-1">Enterprise AI Engine</div>
                            <div className="text-xs text-blue-600">Advanced content generation for professional marketing</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="text-sm font-semibold text-green-800 mb-1">SEO Optimization</div>
                            <div className="text-xs text-green-600">Intelligent keyword targeting and ranking optimization</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <div className="text-sm font-semibold text-purple-800 mb-1">Brand Voice Training</div>
                            <div className="text-xs text-purple-600">Consistent messaging across all marketing channels</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <div className="text-sm font-semibold text-orange-800 mb-1">Performance Analytics</div>
                            <div className="text-xs text-orange-600">Advanced metrics and conversion tracking</div>
                        </div>
                    </div>

            <Tabs
              items={tabOptions}
              value={activeTab}
              setValue={setActiveTab}
            />
          </div>

                {/* Following style-reference HomePage two-column layout pattern */}
                <div className="flex max-lg:block">
                    <div className="col-left">
                        {/* Professional Content Generator */}
          {activeTab.id === 1 && (
                            <Card title="Professional Content Generator" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                Content Type
                                            </label>
                  <Select
                                                value={contentType}
                                                onChange={setContentType}
                    options={contentTypeOptions}
                                                className="w-full"
                  />
                </div>
                  <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                                Brand Voice
                    </label>
                                            <Select
                                                value={brandVoice}
                                                onChange={setBrandVoice}
                                                options={brandVoiceOptions}
                                                className="w-full"
                                            />
                          </div>
                        </div>

                                    <Field
                                        label="Content Topic & Keywords"
                                        placeholder="e.g., Enterprise digital transformation strategies, AI automation benefits"
                                        value={contentTopic}
                                        onChange={(e) => setContentTopic(e.target.value)}
                                    />

                                    <Field
                                        label="Target Audience"
                                        placeholder="e.g., C-level executives, marketing professionals, small business owners"
                                        value={targetAudience}
                                        onChange={(e) => setTargetAudience(e.target.value)}
                                    />

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm font-medium text-gray-700 mb-2">
                                            AI Content Preview Configuration
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-500">Estimated Length:</span>
                                                <div className="font-medium">1,200-1,500 words</div>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">SEO Score Target:</span>
                                                <div className="font-medium text-green-600">90-95%</div>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Generation Time:</span>
                                                <div className="font-medium">2-3 minutes</div>
                                            </div>
                    </div>
                  </div>

                  <Button
                                        className="btn-purple w-full"
                                        onClick={handleGenerateContent}
                                        disabled={isGenerating || !contentTopic.trim() || !targetAudience.trim()}
                                    >
                                        {isGenerating ? (
                                            <>
                                                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                                                Generating Professional Content...
                      </>
                    ) : (
                                            `Generate ${contentType.name}`
                    )}
                  </Button>

                                    {isGenerating && (
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <div className="text-sm font-medium text-blue-800 mb-2">
                                                AI Content Generation in Progress
                                            </div>
                                            <div className="text-xs text-blue-600 space-y-1">
                                                <div>✓ Analyzing topic and keywords for SEO optimization</div>
                                                <div>✓ Applying {brandVoice.name.toLowerCase()} brand voice guidelines</div>
                                                <div>✓ Structuring content for {targetAudience} engagement</div>
                                                <div className="text-blue-500">⟳ Generating high-converting {contentType.name.toLowerCase()}...</div>
                </div>
              </div>
                                    )}
            </div>
                            </Card>
          )}

                        {/* Brand Voice Training Interface */}
          {activeTab.id === 2 && (
                            <Card title="Brand Voice Training Center" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                        <div className="text-sm font-semibold text-purple-800 mb-2">
                                            Enterprise Brand Voice Configuration
                                        </div>
                                        <div className="text-xs text-purple-600 mb-3">
                                            Train AI to maintain consistent professional messaging across all marketing channels
                </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-xs font-medium text-gray-700 mb-2">Voice Characteristics</div>
                                                <div className="space-y-1 text-xs">
                                                    <div className="flex justify-between">
                                                        <span>Professional Tone</span>
                                                        <span className="text-green-600">Configured</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Industry Expertise</span>
                                                        <span className="text-green-600">Active</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Audience Adaptation</span>
                                                        <span className="text-green-600">Enabled</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-gray-700 mb-2">Training Status</div>
                                                <div className="space-y-1 text-xs">
                                                    <div className="flex justify-between">
                                                        <span>Content Samples</span>
                                                        <span className="text-blue-600">127 analyzed</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Voice Accuracy</span>
                                                        <span className="text-green-600">94.2%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Last Training</span>
                                                        <span className="text-gray-600">2 hours ago</span>
                                                    </div>
                    </div>
                  </div>
                </div>
              </div>

                                    <Button className="btn-outline-purple w-full">
                                        Upload Content Samples for Training
                                    </Button>
            </div>
                            </Card>
          )}

                        {/* SEO Optimization Tools */}
          {activeTab.id === 3 && (
                            <Card title="Enterprise SEO Optimization" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-green-50 p-3 rounded-lg text-center">
                                            <div className="text-lg font-bold text-green-600">92%</div>
                                            <div className="text-xs text-green-700">Average SEO Score</div>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                                            <div className="text-lg font-bold text-blue-600">1,247</div>
                                            <div className="text-xs text-blue-700">Keywords Optimized</div>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg text-center">
                                            <div className="text-lg font-bold text-purple-600">+156%</div>
                                            <div className="text-xs text-purple-700">Search Visibility</div>
                                        </div>
              </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm font-medium text-gray-700 mb-3">
                                            Intelligent SEO Recommendations
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center text-green-700">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                Optimize for "enterprise content marketing" (High opportunity)
                                            </div>
                                            <div className="flex items-center text-blue-700">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Add semantic keywords for "AI content automation"
                                            </div>
                                            <div className="flex items-center text-purple-700">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                                Improve content structure with H2/H3 headings
                                            </div>
                                        </div>
                    </div>
                    
                                    <Button className="btn-green w-full">
                                        Run SEO Analysis & Optimization
                                    </Button>
                                </div>
                            </Card>
                        )}

                        {/* Performance Analytics Dashboard */}
                        {activeTab.id === 4 && (
                            <Card title="Advanced Performance Analytics" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-blue-600">2,847</div>
                                            <div className="text-xs text-blue-700">Content Pieces</div>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-green-600">94.2%</div>
                                            <div className="text-xs text-green-700">Engagement Rate</div>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-purple-600">+187%</div>
                                            <div className="text-xs text-purple-700">Conversion Lift</div>
                                        </div>
                                        <div className="bg-orange-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-orange-600">2.4s</div>
                                            <div className="text-xs text-orange-700">Avg. Gen Time</div>
                                        </div>
                      </div>
                      
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border">
                                        <div className="text-sm font-medium text-gray-700 mb-2">
                                            AI Performance Insights
                                        </div>
                                        <div className="text-xs text-gray-600 space-y-1">
                                            <div>• Blog posts show 23% higher engagement than industry average</div>
                                            <div>• Email campaigns achieve 18% above-average open rates</div>
                                            <div>• Social media content generates 31% more shares</div>
                                            <div>• Professional brand voice increases conversion by 12%</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {/* Content Calendar Management */}
                        {activeTab.id === 5 && (
                            <Card title="Intelligent Content Calendar" className="mb-6">
                                <div className="p-4 space-y-4">
                                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border">
                                        <div className="text-sm font-medium text-gray-700 mb-2">
                                            Smart Scheduling Recommendations
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                            <div>
                                                <div className="font-medium text-green-700 mb-1">Optimal Posting Times</div>
                                                <div className="text-gray-600">
                                                    Tuesday 10 AM, Thursday 2 PM, Saturday 9 AM
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-blue-700 mb-1">Content Mix Balance</div>
                                                <div className="text-gray-600">
                                                    60% Educational, 25% Promotional, 15% Entertainment
                                                </div>
                                            </div>
                      </div>
                    </div>
                    
                                    <Button className="btn-green w-full">
                                        Generate Weekly Content Plan
                                    </Button>
                        </div>
                            </Card>
                        )}
                    </div>

                    <div className="col-right">
                        {/* Recent Content Performance */}
                        <Card title="Recent Content Performance" className="mb-6">
                            <DataTable
                                data={recentContent}
                                columns={[
                                    { key: 'title', title: 'Content Title' },
                                    { key: 'type', title: 'Type' },
                                    { 
                                        key: 'status', 
                                        title: 'Status',
                                        render: (value: string) => (
                                            <Badge variant={getStatusColor(value) as any}>
                                                {value}
                                            </Badge>
                                        )
                                    },
                                    { 
                                        key: 'performance', 
                                        title: 'Performance',
                                        render: (value: string) => (
                                            <Badge variant={getPerformanceColor(value) as any} size="sm">
                                                {value}
                                            </Badge>
                                        )
                                    },
                                    { key: 'engagement', title: 'Engagement' },
                                    { 
                                        key: 'seoScore', 
                                        title: 'SEO Score',
                                        render: (value: number) => (
                                            <span className={`font-medium ${value >= 90 ? 'text-green-600' : value >= 80 ? 'text-blue-600' : 'text-orange-600'}`}>
                                                {value}%
                                            </span>
                                        )
                                    }
                                ]}
                            />
                        </Card>

                        {/* AI Generation Statistics */}
                        <Card title="AI Content Generation Stats" className="mb-6">
                            <div className="p-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="font-bold text-blue-600 text-lg">1,247</div>
                                        <div className="text-blue-700">Content Pieces Generated</div>
                                    </div>
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <div className="font-bold text-green-600 text-lg">94.2%</div>
                                        <div className="text-green-700">Quality Score Average</div>
                  </div>
              </div>

                                <div className="border-t pt-4">
                                    <div className="text-sm font-medium text-gray-700 mb-2">Content Type Distribution</div>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <span>Blog Posts</span>
                                            <span className="font-medium">38%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Social Media</span>
                                            <span className="font-medium">24%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Email Campaigns</span>
                                            <span className="font-medium">18%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Product Descriptions</span>
                                            <span className="font-medium">12%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Other</span>
                                            <span className="font-medium">8%</span>
                                        </div>
                                    </div>
                </div>
            </div>
                        </Card>

                        {/* Quick Actions */}
                        <Card title="Quick Actions" className="mb-6">
                            <div className="p-4 space-y-3">
                                <Button className="btn-outline-blue w-full btn-small">
                                    Create Content Template
                                </Button>
                                <Button className="btn-outline-green w-full btn-small">
                                    Schedule Batch Generation
                                </Button>
                                <Button className="btn-outline-purple w-full btn-small">
                                    Export Content Library
                                </Button>
                                <Button className="btn-outline-orange w-full btn-small">
                                    View Performance Report
                </Button>
                            </div>
                        </Card>
                    </div>
              </div>
      </div>
    </Layout>
  );
};

export default AIContentSuitePage; 