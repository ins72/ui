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

interface ContentProject {
  id: number;
  content_project_name: string;
  content_type: string;
  status: string;
  generated_count: number;
  last_generated: string;
  performance_score: number;
  target_audience: string;
}

interface SelectOption {
  id: number;
  name: string;
}

export default function AIContentGeneratorPage() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'Content Projects' });
  const [contentProjects, setContentProjects] = useState<ContentProject[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [newProject, setNewProject] = useState({
    content_project_name: '',
    content_type: 'blog_post',
    target_audience: '',
    brand_voice_tone: 'professional',
    primary_objective: 'awareness'
  });

  const tabOptions = [
    { id: 1, name: 'Content Projects' },
    { id: 2, name: 'Templates' },
    { id: 3, name: 'Analytics' },
    { id: 4, name: 'AI Settings' }
  ];

  const contentTypes = [
    { id: 1, name: 'Blog Post' },
    { id: 2, name: 'Product Description' },
    { id: 3, name: 'Email Campaign' },
    { id: 4, name: 'Social Media Post' },
    { id: 5, name: 'Ad Copy' },
    { id: 6, name: 'Landing Page' },
    { id: 7, name: 'Press Release' },
    { id: 8, name: 'Video Script' }
  ];

  const brandVoiceTones = [
    { id: 1, name: 'Professional' },
    { id: 2, name: 'Casual' },
    { id: 3, name: 'Friendly' },
    { id: 4, name: 'Authoritative' },
    { id: 5, name: 'Conversational' },
    { id: 6, name: 'Inspirational' }
  ];

  const objectives = [
    { id: 1, name: 'Awareness' },
    { id: 2, name: 'Engagement' },
    { id: 3, name: 'Conversion' },
    { id: 4, name: 'Retention' },
    { id: 5, name: 'Education' },
    { id: 6, name: 'Lead Generation' }
  ];

  const contentTemplates = [
    {
      id: 1,
      name: 'Product Launch Blog Post',
      description: 'Comprehensive blog post template for new product announcements',
      content_type: 'blog_post',
      usage_count: 247,
      effectiveness_score: 92
    },
    {
      id: 2,
      name: 'Email Newsletter',
      description: 'Weekly newsletter template with personalized content',
      content_type: 'email_campaign',
      usage_count: 189,
      effectiveness_score: 88
    },
    {
      id: 3,
      name: 'Social Media Campaign',
      description: 'Multi-platform social media content series',
      content_type: 'social_media_post',
      usage_count: 156,
      effectiveness_score: 85
    },
    {
      id: 4,
      name: 'PPC Ad Copy',
      description: 'High-converting ad copy for paid campaigns',
      content_type: 'ad_copy',
      usage_count: 134,
      effectiveness_score: 90
    }
  ];

  useEffect(() => {
    fetchContentProjects();
  }, []);

  const fetchContentProjects = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setContentProjects([
          {
            id: 1,
            content_project_name: 'Q1 Product Launch Campaign',
            content_type: 'blog_post',
            status: 'active',
            generated_count: 12,
            last_generated: '2024-01-15T10:30:00Z',
            performance_score: 87,
            target_audience: 'B2B Decision Makers'
          },
          {
            id: 2,
            content_project_name: 'Email Marketing Series',
            content_type: 'email_campaign',
            status: 'completed',
            generated_count: 8,
            last_generated: '2024-01-14T14:20:00Z',
            performance_score: 92,
            target_audience: 'Existing Customers'
          },
          {
            id: 3,
            content_project_name: 'Social Media Content',
            content_type: 'social_media_post',
            status: 'active',
            generated_count: 24,
            last_generated: '2024-01-15T08:45:00Z',
            performance_score: 79,
            target_audience: 'Young Professionals'
          }
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching content projects:', error);
      setLoading(false);
    }
  };

  const createProject = async () => {
    try {
      const project = {
        ...newProject,
        id: Date.now(),
        status: 'draft',
        generated_count: 0,
        performance_score: 0,
        last_generated: new Date().toISOString()
      };
      
      setContentProjects(prev => [...prev, project]);
      setShowCreateModal(false);
      setNewProject({
        content_project_name: '',
        content_type: 'blog_post',
        target_audience: '',
        brand_voice_tone: 'professional',
        primary_objective: 'awareness'
      });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const generateContent = async (projectId: number) => {
    console.log('Generating content for project:', projectId);
    // In production, this would call the AI content generation API
  };

  const projectColumns = [
    {
      key: 'content_project_name',
      title: 'Project Name',
      render: (value: string, record: ContentProject) => (
        <div>
          <div className="font-medium text-t-primary">{value}</div>
          <div className="text-sm text-t-secondary capitalize">{record.content_type.replace('_', ' ')}</div>
        </div>
      )
    },
    {
      key: 'target_audience',
      title: 'Target Audience',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
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
      key: 'generated_count',
      title: 'Generated',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <Icon name="file-text" className="w-4 h-4 text-t-secondary" />
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    {
      key: 'performance_score',
      title: 'Performance',
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

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h5 font-semibold text-t-primary">AI Content Generation Projects</h2>
          <p className="text-body-2 text-t-secondary">Create and manage AI-powered content across multiple formats and channels</p>
        </div>
        <Button 
          className="bg-primary-01 text-white"
          onClick={() => setShowCreateModal(true)}
        >
          <Icon name="plus" className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <DataTable
        columns={projectColumns}
        data={contentProjects}
        loading={loading}
        actions={{
          onEdit: (record) => generateContent(record.id),
          onDelete: (record) => console.log('Delete project:', record.id)
        }}
        showActions={true}
      />
    </div>
  );

  const renderTemplatesTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">Content Templates</h2>
        <p className="text-body-2 text-t-secondary">Pre-built templates for common content types with proven effectiveness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentTemplates.map(template => (
          <Card key={template.id} title={template.name}>
            <div className="space-y-4">
              <p className="text-sm text-t-secondary">{template.description}</p>
              
              <div className="flex items-center justify-between">
                <Badge variant="default" className="capitalize">
                  {template.content_type.replace('_', ' ')}
                </Badge>
                <div className="text-sm text-t-secondary">
                  {template.usage_count} uses
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-t-secondary">Effectiveness</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-primary-01">{template.effectiveness_score}%</span>
                  <Icon name="trending-up" className="w-4 h-4 text-green-500" />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="bg-primary-01 text-white flex-1">
                  <Icon name="copy" className="w-4 h-4 mr-2" />
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
        <h2 className="text-h5 font-semibold text-t-primary">Content Performance Analytics</h2>
        <p className="text-body-2 text-t-secondary">Monitor AI-generated content performance and optimization opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Content Generated">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">1,247</div>
            <div className="text-sm text-t-secondary">+18% this month</div>
          </div>
        </Card>
        
        <Card title="Average Performance Score">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">87.3%</div>
            <div className="text-sm text-t-secondary">+3.2% vs last month</div>
          </div>
        </Card>
        
        <Card title="Content Engagement">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">94.2%</div>
            <div className="text-sm text-t-secondary">Above industry avg</div>
          </div>
        </Card>
        
        <Card title="Time Saved">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-01">342h</div>
            <div className="text-sm text-t-secondary">This month</div>
          </div>
        </Card>
      </div>

      <Card title="Content Performance Trends">
        <div className="text-center py-12">
          <Icon name="trending-up" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
          <p className="text-t-secondary">Performance analytics charts would be displayed here</p>
        </div>
      </Card>
    </div>
  );

  const renderAISettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-h5 font-semibold text-t-primary">AI Model Configuration</h2>
        <p className="text-body-2 text-t-secondary">Configure AI models and content generation parameters</p>
      </div>

      <Card title="AI Model Settings">
        <div className="space-y-4">
          <Select
            label="AI Model Provider"
            options={[
              { id: 1, name: 'OpenAI GPT-4' },
              { id: 2, name: 'Anthropic Claude' },
              { id: 3, name: 'Google Bard' },
              { id: 4, name: 'Custom Model' }
            ]}
            value={{ id: 1, name: 'OpenAI GPT-4' }}
            onChange={() => {}}
          />
          
          <Field
            label="Creativity Level (Temperature)"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value="0.7"
          />
          
          <Field
            label="Maximum Content Length"
            type="number"
            placeholder="2000"
            value="2000"
          />
        </div>
      </Card>

      <Card title="Content Quality Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Plagiarism Detection</h4>
              <p className="text-sm text-t-secondary">Check content originality before publication</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">SEO Optimization</h4>
              <p className="text-sm text-t-secondary">Automatically optimize content for search engines</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-t-primary">Brand Voice Consistency</h4>
              <p className="text-sm text-t-secondary">Ensure content matches brand guidelines</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <Layout title="AI Content Generator">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-h4 font-bold text-t-primary">AI-Powered Content Creation</h1>
            <p className="text-body-1 text-t-secondary">Generate high-quality content automatically across multiple formats and channels</p>
          </div>
          <Badge variant="green">Enterprise AI Feature</Badge>
        </div>

        <Card title="Content Generation Studio">
          <Tabs 
            items={tabOptions}
            value={activeTab}
            setValue={setActiveTab}
            className="mb-6"
          />
          
          {activeTab.id === 1 && renderProjectsTab()}
          {activeTab.id === 2 && renderTemplatesTab()}
          {activeTab.id === 3 && renderAnalyticsTab()}
          {activeTab.id === 4 && renderAISettingsTab()}
        </Card>

        {/* Create Project Modal */}
        <Modal
          open={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          className="max-w-2xl"
        >
          <div className="p-6">
            <h3 className="text-h6 font-semibold text-t-primary mb-6">Create AI Content Project</h3>
            
            <div className="space-y-4">
              <Field
                label="Project Name"
                placeholder="Enter project name"
                value={newProject.content_project_name}
                onChange={(e) => setNewProject(prev => ({ ...prev, content_project_name: e.target.value }))}
              />
              
              <Select
                label="Content Type"
                options={contentTypes}
                value={contentTypes.find(t => t.name.toLowerCase().replace(' ', '_') === newProject.content_type) || null}
                onChange={(option) => setNewProject(prev => ({ ...prev, content_type: option.name.toLowerCase().replace(' ', '_') }))}
              />
              
              <Field
                label="Target Audience"
                placeholder="Describe your target audience"
                value={newProject.target_audience}
                onChange={(e) => setNewProject(prev => ({ ...prev, target_audience: e.target.value }))}
              />
              
              <Select
                label="Brand Voice Tone"
                options={brandVoiceTones}
                value={brandVoiceTones.find(t => t.name.toLowerCase() === newProject.brand_voice_tone) || null}
                onChange={(option) => setNewProject(prev => ({ ...prev, brand_voice_tone: option.name.toLowerCase() }))}
              />
              
              <Select
                label="Primary Objective"
                options={objectives}
                value={objectives.find(o => o.name.toLowerCase() === newProject.primary_objective) || null}
                onChange={(option) => setNewProject(prev => ({ ...prev, primary_objective: option.name.toLowerCase() }))}
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                className="bg-primary-01 text-white flex-1"
                onClick={createProject}
              >
                <Icon name="plus" className="w-4 h-4 mr-2" />
                Create Project
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