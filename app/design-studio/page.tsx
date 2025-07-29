"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tabs from "@/style-reference/components/Tabs";
import Field from "@/style-reference/components/Field";
import Select from "@/style-reference/components/Select";
import Badge from "@/style-reference/components/Badge";
import DataTable from "@/style-reference/components/DataTable";
import FieldFiles from "@/style-reference/components/FieldFiles";

export const dynamic = 'force-dynamic';

interface DesignProject {
  _id: string;
  projectName: string;
  designType: string;
  status: string;
  generatedDesigns: Array<{
    version: number;
    imageUrl: string;
    thumbnailUrl: string;
  }>;
  createdAt: string;
}

interface BrandKit {
  _id: string;
  brandName: string;
  isDefault: boolean;
  logo: {
    primary: {
      url: string;
    };
  };
  colorPalette: {
    primary: Array<{
      name: string;
      hex: string;
    }>;
  };
  createdAt: string;
}

interface CreativeAsset {
  _id: string;
  assetName: string;
  assetType: string;
  category: string;
  fileInfo: {
    thumbnailUrl: string;
    format: string;
    fileSize: number;
  };
  usage: {
    timesUsed: number;
  };
  createdAt: string;
}

const tabOptions = [
  { id: 1, name: "AI Design Studio" },
  { id: 2, name: "Brand Kit Manager" },
  { id: 3, name: "Template Library" },
  { id: 4, name: "Asset Library" },
  { id: 5, name: "Photo Enhancement" }
];

const designTypes = [
  { id: 1, name: "Logo" },
  { id: 2, name: "Social Media Graphic" },
  { id: 3, name: "Banner" },
  { id: 4, name: "Business Card" },
  { id: 5, name: "Flyer" },
  { id: 6, name: "Infographic" }
];

const styleOptions = [
  { id: 1, name: "Modern" },
  { id: 2, name: "Minimalist" },
  { id: 3, name: "Corporate" },
  { id: 4, name: "Creative" },
  { id: 5, name: "Elegant" },
  { id: 6, name: "Bold" }
];

const assetTypes = [
  { id: 1, name: "Image" },
  { id: 2, name: "Vector" },
  { id: 3, name: "Icon" },
  { id: 4, name: "Illustration" },
  { id: 5, name: "Template" },
  { id: 6, name: "Font" }
];

export default function DesignStudioPage() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  const [loading, setLoading] = useState(false);
  
  // AI Design Studio State
  const [projectName, setProjectName] = useState("");
  const [selectedDesignType, setSelectedDesignType] = useState(designTypes[0]);
  const [designPrompt, setDesignPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);
  const [designProjects, setDesignProjects] = useState<DesignProject[]>([]);
  
  // Brand Kit State
  const [brandKits, setBrandKits] = useState<BrandKit[]>([]);
  const [newBrandName, setNewBrandName] = useState("");
  
  // Asset Library State
  const [assets, setAssets] = useState<CreativeAsset[]>([]);
  const [selectedAssetType, setSelectedAssetType] = useState(assetTypes[0]);
  const [assetName, setAssetName] = useState("");

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      switch (activeTab.id) {
        case 1:
          await loadDesignProjects();
          break;
        case 2:
          await loadBrandKits();
          break;
        case 4:
          await loadAssets();
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadDesignProjects = async () => {
    // Simulate API call - replace with actual API
    const mockData: DesignProject[] = [
      {
        _id: "1",
        projectName: "Brand Logo Design",
        designType: "logo",
        status: "completed",
        generatedDesigns: [
          {
            version: 1,
            imageUrl: "https://example.com/design1.png",
            thumbnailUrl: "https://example.com/thumb1.png"
          }
        ],
        createdAt: "2024-01-20T10:30:00Z"
      },
      {
        _id: "2",
        projectName: "Social Media Graphics",
        designType: "social-media-graphic",
        status: "generating",
        generatedDesigns: [],
        createdAt: "2024-01-20T11:00:00Z"
      }
    ];
    setDesignProjects(mockData);
  };

  const loadBrandKits = async () => {
    // Simulate API call - replace with actual API
    const mockData: BrandKit[] = [
      {
        _id: "1",
        brandName: "MEWAYZ Brand",
        isDefault: true,
        logo: {
          primary: {
            url: "https://example.com/logo.png"
          }
        },
        colorPalette: {
          primary: [
            { name: "Brand Primary", hex: "#3B82F6" },
            { name: "Brand Secondary", hex: "#10B981" }
          ]
        },
        createdAt: "2024-01-15T09:00:00Z"
      }
    ];
    setBrandKits(mockData);
  };

  const loadAssets = async () => {
    // Simulate API call - replace with actual API
    const mockData: CreativeAsset[] = [
      {
        _id: "1",
        assetName: "Abstract Background",
        assetType: "image",
        category: "backgrounds",
        fileInfo: {
          thumbnailUrl: "https://example.com/thumb1.jpg",
          format: "PNG",
          fileSize: 2048000
        },
        usage: {
          timesUsed: 5
        },
        createdAt: "2024-01-18T14:20:00Z"
      },
      {
        _id: "2",
        assetName: "Business Icons Set",
        assetType: "vector",
        category: "icons",
        fileInfo: {
          thumbnailUrl: "https://example.com/thumb2.jpg",
          format: "SVG",
          fileSize: 128000
        },
        usage: {
          timesUsed: 12
        },
        createdAt: "2024-01-17T16:45:00Z"
      }
    ];
    setAssets(mockData);
  };

  const handleCreateDesign = async () => {
    if (!projectName.trim() || !designPrompt.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Simulate AI design generation
      const newProject: DesignProject = {
        _id: Date.now().toString(),
        projectName,
        designType: selectedDesignType.name.toLowerCase(),
        status: "generating",
        generatedDesigns: [],
        createdAt: new Date().toISOString()
      };
      
      setDesignProjects(prev => [newProject, ...prev]);
      setProjectName("");
      setDesignPrompt("");
      
      // Simulate design generation process
      setTimeout(async () => {
        setDesignProjects(prev => 
          prev.map(project => 
            project._id === newProject._id
              ? {
                  ...project,
                  status: "completed",
                  generatedDesigns: [
                    {
                      version: 1,
                      imageUrl: "https://example.com/generated-design.png",
                      thumbnailUrl: "https://example.com/generated-thumb.png"
                    }
                  ]
                }
              : project
          )
        );
      }, 5000);
      
      alert('Design generation started! Check back in a few moments.');
    } catch (error) {
      console.error('Error creating design:', error);
      alert('Error creating design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBrandKit = async () => {
    if (!newBrandName.trim()) {
      alert('Please enter a brand name');
      return;
    }

    setLoading(true);
    try {
      const newBrandKit: BrandKit = {
        _id: Date.now().toString(),
        brandName: newBrandName,
        isDefault: false,
        logo: {
          primary: {
            url: ""
          }
        },
        colorPalette: {
          primary: []
        },
        createdAt: new Date().toISOString()
      };
      
      setBrandKits(prev => [newBrandKit, ...prev]);
      setNewBrandName("");
      alert('Brand kit created successfully!');
    } catch (error) {
      console.error('Error creating brand kit:', error);
      alert('Error creating brand kit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'green';
      case 'generating': return 'yellow';
      case 'failed': return 'red';
      default: return 'gray';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const designProjectColumns = [
    {
      key: 'projectName',
      title: 'Project Name'
    },
    {
      key: 'designType',
      title: 'Type',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => (
        <Badge variant={getStatusColor(value) as any}>{value}</Badge>
      )
    },
    {
      key: 'generatedDesigns',
      title: 'Designs',
      render: (value: any[]) => (
        <span>{value.length} design{value.length !== 1 ? 's' : ''}</span>
      )
    },
    {
      key: 'createdAt',
      title: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ];

  const brandKitColumns = [
    {
      key: 'brandName',
      title: 'Brand Name'
    },
    {
      key: 'isDefault',
      title: 'Default',
      render: (value: boolean) => (
        <Badge variant={value ? 'green' : 'gray'}>
          {value ? 'Default' : 'Custom'}
        </Badge>
      )
    },
    {
      key: 'colorPalette',
      title: 'Colors',
      render: (value: any) => (
        <div className="flex gap-1">
          {value.primary.slice(0, 3).map((color: any, idx: number) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border border-s-stroke2"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {value.primary.length > 3 && (
            <span className="text-caption text-t-secondary">
              +{value.primary.length - 3} more
            </span>
          )}
        </div>
      )
    },
    {
      key: 'createdAt',
      title: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ];

  const assetColumns = [
    {
      key: 'assetName',
      title: 'Asset Name'
    },
    {
      key: 'assetType',
      title: 'Type',
      render: (value: string) => (
        <Badge variant="default">{value}</Badge>
      )
    },
    {
      key: 'category',
      title: 'Category'
    },
    {
      key: 'fileInfo',
      title: 'File Info',
      render: (value: any) => (
        <div className="text-caption text-t-secondary">
          <div>{value.format}</div>
          <div>{formatFileSize(value.fileSize)}</div>
        </div>
      )
    },
    {
      key: 'usage',
      title: 'Usage',
      render: (value: any) => (
        <span>{value.timesUsed} times</span>
      )
    }
  ];

  return (
    <Layout title="Design Studio">
      <div className="space-y-6">
        {/* Header */}
        <Card title="AI-Powered Design & Creative Tools">
          <div className="mb-6">
            <Tabs
              items={tabOptions}
              value={activeTab}
              setValue={setActiveTab}
            />
          </div>

          {/* AI Design Studio Tab */}
          {activeTab.id === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <Field
                    label="Project Name"
                    placeholder="e.g., Logo for Tech Startup"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Design Type"
                      value={selectedDesignType}
                      onChange={setSelectedDesignType}
                      options={designTypes}
                    />
                    
                    <Select
                      label="Style"
                      value={selectedStyle}
                      onChange={setSelectedStyle}
                      options={styleOptions}
                    />
                  </div>
                  
                  <Field
                    label="Design Description"
                    placeholder="Describe your design requirements, style preferences, colors, etc."
                    textarea
                    value={designPrompt}
                    onChange={(e) => setDesignPrompt(e.target.value)}
                    className="min-h-[120px]"
                  />

                  <Button
                    onClick={handleCreateDesign}
                    disabled={loading || !projectName.trim() || !designPrompt.trim()}
                    className="w-full bg-primary-01 text-white"
                  >
                    {loading ? (
                      <>
                        <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                        Generating Design...
                      </>
                    ) : (
                      <>
                        <Icon name="magic-wand" className="w-4 h-4 mr-2" />
                        Generate AI Design
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg">
                    <h4 className="text-button font-medium text-t-primary mb-2">
                      AI Design Features
                    </h4>
                    <ul className="space-y-1 text-caption text-t-secondary">
                      <li>• Professional design generation</li>
                      <li>• Multiple style variations</li>
                      <li>• Brand guideline integration</li>
                      <li>• High-resolution outputs</li>
                      <li>• Vector and raster formats</li>
                      <li>• Commercial use rights</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="lightbulb" className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="text-button font-medium text-blue-900 mb-1">
                          Pro Tip
                        </h4>
                        <p className="text-caption text-blue-700">
                          Be specific about colors, style, and intended use for better AI-generated results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DataTable
                title="Design Projects"
                columns={designProjectColumns}
                data={designProjects}
                loading={loading && activeTab.id === 1}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search projects..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Brand Kit Manager Tab */}
          {activeTab.id === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <Field
                    label="Brand Name"
                    placeholder="Enter your brand name"
                    value={newBrandName}
                    onChange={(e) => setNewBrandName(e.target.value)}
                  />

                  <Button
                    onClick={handleCreateBrandKit}
                    disabled={loading || !newBrandName.trim()}
                    className="w-full bg-primary-01 text-white"
                  >
                    {loading ? (
                      <>
                        <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Icon name="plus" className="w-4 h-4 mr-2" />
                        Create Brand Kit
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg">
                    <h4 className="text-button font-medium text-t-primary mb-2">
                      Brand Kit Includes
                    </h4>
                    <ul className="space-y-1 text-caption text-t-secondary">
                      <li>• Logo variations</li>
                      <li>• Color palette</li>
                      <li>• Typography guidelines</li>
                      <li>• Brand voice & tone</li>
                      <li>• Usage guidelines</li>
                      <li>• Template integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <DataTable
                title="Brand Kits"
                columns={brandKitColumns}
                data={brandKits}
                loading={loading && activeTab.id === 2}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search brand kits..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Template Library Tab */}
          {activeTab.id === 3 && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <Icon name="layout-template" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
                <h3 className="text-h5 font-semibold text-t-primary mb-2">
                  Template Library
                </h3>
                <p className="text-t-secondary mb-6">
                  Access thousands of professional templates for all your design needs.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 border border-s-stroke2 rounded-lg text-center">
                    <Icon name="instagram" className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Social Media</h4>
                    <p className="text-caption text-t-secondary">500+ templates</p>
                  </div>
                  
                  <div className="p-4 border border-s-stroke2 rounded-lg text-center">
                    <Icon name="briefcase" className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Business</h4>
                    <p className="text-caption text-t-secondary">300+ templates</p>
                  </div>
                  
                  <div className="p-4 border border-s-stroke2 rounded-lg text-center">
                    <Icon name="megaphone" className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Marketing</h4>
                    <p className="text-caption text-t-secondary">400+ templates</p>
                  </div>
                  
                  <div className="p-4 border border-s-stroke2 rounded-lg text-center">
                    <Icon name="presentation" className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Presentation</h4>
                    <p className="text-caption text-t-secondary">200+ templates</p>
                  </div>
                </div>
                
                <Button className="bg-primary-01 text-white mt-6">
                  <Icon name="search" className="w-4 h-4 mr-2" />
                  Browse Templates
                </Button>
              </div>
            </div>
          )}

          {/* Asset Library Tab */}
          {activeTab.id === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Field
                      label="Asset Name"
                      placeholder="Enter asset name"
                      value={assetName}
                      onChange={(e) => setAssetName(e.target.value)}
                    />
                    
                    <Select
                      label="Asset Type"
                      value={selectedAssetType}
                      onChange={setSelectedAssetType}
                      options={assetTypes}
                    />
                    
                    <div className="flex items-end">
                      <FieldFiles
                        label="Upload File"
                        onChange={(file) => console.log('File selected:', file)}
                      />
                    </div>
                  </div>

                  <Button
                    disabled={!assetName.trim()}
                    className="bg-primary-01 text-white"
                  >
                    <Icon name="upload" className="w-4 h-4 mr-2" />
                    Upload Asset
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg">
                    <h4 className="text-button font-medium text-t-primary mb-2">
                      Asset Stats
                    </h4>
                    <div className="space-y-2 text-caption text-t-secondary">
                      <div className="flex justify-between">
                        <span>Total Assets:</span>
                        <span className="font-medium text-t-primary">{assets.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Most Used:</span>
                        <span className="font-medium text-t-primary">
                          {assets.reduce((max, asset) => 
                            asset.usage.timesUsed > max ? asset.usage.timesUsed : max, 0
                          )} times
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DataTable
                title="Creative Assets"
                columns={assetColumns}
                data={assets}
                loading={loading && activeTab.id === 4}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search assets..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Photo Enhancement Tab */}
          {activeTab.id === 5 && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <Icon name="image" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
                <h3 className="text-h5 font-semibold text-t-primary mb-2">
                  AI Photo Enhancement
                </h3>
                <p className="text-t-secondary mb-6">
                  Enhance your photos with AI-powered tools for professional results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
                  <div className="p-4 border border-s-stroke2 rounded-lg">
                    <Icon name="sun" className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Auto Enhance</h4>
                    <p className="text-caption text-t-secondary">Automatic brightness, contrast, and color correction</p>
                  </div>
                  
                  <div className="p-4 border border-s-stroke2 rounded-lg">
                    <Icon name="scissors" className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Background Removal</h4>
                    <p className="text-caption text-t-secondary">AI-powered background removal and replacement</p>
                  </div>
                  
                  <div className="p-4 border border-s-stroke2 rounded-lg">
                    <Icon name="filter" className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="text-button font-medium text-t-primary">Professional Filters</h4>
                    <p className="text-caption text-t-secondary">Apply professional-grade filters and effects</p>
                  </div>
                </div>
                
                <Button className="bg-primary-01 text-white">
                  <Icon name="upload" className="w-4 h-4 mr-2" />
                  Upload Photo to Enhance
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
} 