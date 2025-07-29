"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Tabs from "@/style-reference/components/Tabs";
import Field from "@/style-reference/components/Field";
import Switch from "@/style-reference/components/Switch";
import Badge from "@/style-reference/components/Badge";
import DataTable from "@/style-reference/components/DataTable";

export const dynamic = 'force-dynamic';

interface PlatformConnection {
  platform: string;
  connected: boolean;
  username: string;
  followerCount: number;
  lastSync: string;
  status: string;
}

interface ContentPost {
  _id: string;
  campaignName: string;
  originalContent: {
    title: string;
    content: string;
    contentType: string;
  };
  platformVersions: Array<{
    platform: string;
    status: string;
    publishedAt?: string;
    analytics: {
      views: number;
      likes: number;
      shares: number;
      comments: number;
    };
  }>;
  overallAnalytics: {
    totalViews: number;
    totalEngagement: number;
    bestPerformingPlatform: string;
  };
  createdAt: string;
}

const tabOptions = [
  { id: 1, name: "Platform Connections" },
  { id: 2, name: "Content Publishing" },
  { id: 3, name: "Content Calendar" },
  { id: 4, name: "Analytics Dashboard" }
];

const platforms = [
  { 
    name: "Twitter", 
    icon: "twitter", 
    color: "blue", 
    connected: true, 
    username: "@creator", 
    followers: 15420 
  },
  { 
    name: "LinkedIn", 
    icon: "linkedin", 
    color: "blue", 
    connected: true, 
    username: "Creator Name", 
    followers: 8760 
  },
  { 
    name: "Instagram", 
    icon: "instagram", 
    color: "pink", 
    connected: false, 
    username: "", 
    followers: 0 
  },
  { 
    name: "TikTok", 
    icon: "music", 
    color: "black", 
    connected: false, 
    username: "", 
    followers: 0 
  },
  { 
    name: "YouTube", 
    icon: "youtube", 
    color: "red", 
    connected: true, 
    username: "Creator Channel", 
    followers: 45200 
  },
  { 
    name: "Facebook", 
    icon: "facebook", 
    color: "blue", 
    connected: false, 
    username: "", 
    followers: 0 
  }
];

export default function CrossPlatformPublishingPage() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  const [loading, setLoading] = useState(false);
  
  // Content Publishing State
  const [campaignName, setCampaignName] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentBody, setContentBody] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [schedulePost, setSchedulePost] = useState(false);
  
  // Data State
  const [contentPosts, setContentPosts] = useState<ContentPost[]>([]);
  const [platformConnections, setPlatformConnections] = useState<PlatformConnection[]>([]);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      switch (activeTab.id) {
        case 1:
          await loadPlatformConnections();
          break;
        case 2:
          await loadContentPosts();
          break;
        case 3:
          // Load calendar data
          break;
        case 4:
          // Load analytics data
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPlatformConnections = async () => {
    // Simulate API call - replace with actual API
    const mockData: PlatformConnection[] = platforms.map(platform => ({
      platform: platform.name.toLowerCase(),
      connected: platform.connected,
      username: platform.username,
      followerCount: platform.followers,
      lastSync: platform.connected ? "2024-01-20T10:30:00Z" : "",
      status: platform.connected ? "active" : "disconnected"
    }));
    setPlatformConnections(mockData);
  };

  const loadContentPosts = async () => {
    // Simulate API call - replace with actual API
    const mockData: ContentPost[] = [
      {
        _id: "1",
        campaignName: "Product Launch Announcement",
        originalContent: {
          title: "Introducing Our New AI Tool",
          content: "We're excited to announce the launch of our revolutionary AI content creation tool...",
          contentType: "announcement"
        },
        platformVersions: [
          {
            platform: "twitter",
            status: "published",
            publishedAt: "2024-01-19T14:30:00Z",
            analytics: { views: 2840, likes: 156, shares: 43, comments: 28 }
          },
          {
            platform: "linkedin",
            status: "published", 
            publishedAt: "2024-01-19T14:30:00Z",
            analytics: { views: 1920, likes: 89, shares: 67, comments: 15 }
          }
        ],
        overallAnalytics: {
          totalViews: 4760,
          totalEngagement: 398,
          bestPerformingPlatform: "twitter"
        },
        createdAt: "2024-01-19T14:00:00Z"
      }
    ];
    setContentPosts(mockData);
  };

  const handlePlatformConnect = async (platformName: string) => {
    setLoading(true);
    try {
      // Simulate OAuth connection flow
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPlatformConnections(prev => 
        prev.map(conn => 
          conn.platform === platformName.toLowerCase()
            ? { ...conn, connected: true, status: "active", lastSync: new Date().toISOString() }
            : conn
        )
      );
      
      alert(`Successfully connected to ${platformName}!`);
    } catch (error) {
      console.error('Error connecting platform:', error);
      alert('Error connecting platform. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePlatformDisconnect = async (platformName: string) => {
    setPlatformConnections(prev =>
      prev.map(conn =>
        conn.platform === platformName.toLowerCase()
          ? { ...conn, connected: false, status: "disconnected", lastSync: "" }
          : conn
      )
    );
    alert(`Disconnected from ${platformName}`);
  };

  const handlePublishContent = async () => {
    if (!campaignName.trim() || !contentTitle.trim() || !contentBody.trim() || selectedPlatforms.length === 0) {
      alert('Please fill in all required fields and select at least one platform');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - replace with actual API
      const newPost: ContentPost = {
        _id: Date.now().toString(),
        campaignName,
        originalContent: {
          title: contentTitle,
          content: contentBody,
          contentType: "post"
        },
        platformVersions: selectedPlatforms.map(platform => ({
          platform,
          status: schedulePost ? "scheduled" : "published",
          publishedAt: schedulePost ? undefined : new Date().toISOString(),
          analytics: { views: 0, likes: 0, shares: 0, comments: 0 }
        })),
        overallAnalytics: {
          totalViews: 0,
          totalEngagement: 0,
          bestPerformingPlatform: ""
        },
        createdAt: new Date().toISOString()
      };
      
      setContentPosts(prev => [newPost, ...prev]);
      setCampaignName("");
      setContentTitle("");
      setContentBody("");
      setSelectedPlatforms([]);
      
      alert(`Content ${schedulePost ? 'scheduled' : 'published'} successfully!`);
    } catch (error) {
      console.error('Error publishing content:', error);
      alert('Error publishing content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'green';
      case 'scheduled': return 'yellow';
      case 'draft': return 'gray';
      case 'failed': return 'red';
      case 'active': return 'green';
      case 'disconnected': return 'red';
      default: return 'gray';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const contentColumns = [
    {
      key: 'campaignName',
      title: 'Campaign'
    },
    {
      key: 'originalContent',
      title: 'Content',
      render: (value: any) => (
        <div className="max-w-xs">
          <div className="font-medium text-t-primary truncate">{value.title}</div>
          <div className="text-caption text-t-secondary truncate">{value.content}</div>
        </div>
      )
    },
    {
      key: 'platformVersions',
      title: 'Platforms',
      render: (value: any[]) => (
        <div className="flex flex-wrap gap-1">
          {value.map((platform, idx) => (
            <Badge key={idx} variant={getStatusColor(platform.status) as any} size="sm">
              {platform.platform}
            </Badge>
          ))}
        </div>
      )
    },
    {
      key: 'overallAnalytics',
      title: 'Performance',
      render: (value: any) => (
        <div className="text-center">
          <div className="text-button font-medium text-t-primary">
            {formatNumber(value.totalViews)} views
          </div>
          <div className="text-caption text-t-secondary">
            {formatNumber(value.totalEngagement)} engagement
          </div>
        </div>
      )
    },
    {
      key: 'createdAt',
      title: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ];

  return (
    <Layout title="Cross-Platform Publishing">
      <div className="space-y-6">
        {/* Header */}
        <Card title="Omnichannel Content Distribution">
          <div className="mb-6">
            <Tabs
              items={tabOptions}
              value={activeTab}
              setValue={setActiveTab}
            />
          </div>

          {/* Platform Connections Tab */}
          {activeTab.id === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform, index) => {
                  const connection = platformConnections.find(c => c.platform === platform.name.toLowerCase());
                  return (
                    <div key={index} className="p-6 border border-s-stroke2 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-${platform.color}-100 flex items-center justify-center`}>
                            <Icon name={platform.icon} className={`w-5 h-5 text-${platform.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-button font-medium text-t-primary">
                              {platform.name}
                            </h3>
                            <Badge 
                              variant={getStatusColor(connection?.status || 'disconnected') as any} 
                              size="sm"
                            >
                              {connection?.connected ? 'Connected' : 'Disconnected'}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {connection?.connected ? (
                        <div className="space-y-3">
                          <div>
                            <div className="text-caption text-t-secondary">Username</div>
                            <div className="text-button text-t-primary">{connection.username}</div>
                          </div>
                          <div>
                            <div className="text-caption text-t-secondary">Followers</div>
                            <div className="text-button text-t-primary">
                              {formatNumber(connection.followerCount)}
                            </div>
                          </div>
                          <div>
                            <div className="text-caption text-t-secondary">Last Sync</div>
                            <div className="text-button text-t-primary">
                              {new Date(connection.lastSync).toLocaleDateString()}
                            </div>
                          </div>
                          <Button
                            onClick={() => handlePlatformDisconnect(platform.name)}
                            className="w-full border border-red-300 text-red-600 hover:bg-red-50"
                          >
                            Disconnect
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <p className="text-caption text-t-secondary">
                            Connect your {platform.name} account to start publishing content.
                          </p>
                          <Button
                            onClick={() => handlePlatformConnect(platform.name)}
                            disabled={loading}
                            className="w-full bg-primary-01 text-white"
                          >
                            {loading ? (
                              <>
                                <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                                Connecting...
                              </>
                            ) : (
                              <>
                                <Icon name="link" className="w-4 h-4 mr-2" />
                                Connect {platform.name}
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Content Publishing Tab */}
          {activeTab.id === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <Field
                    label="Campaign Name"
                    placeholder="e.g., Product Launch, Weekly Update"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                  
                  <Field
                    label="Content Title"
                    placeholder="Enter your content title..."
                    value={contentTitle}
                    onChange={(e) => setContentTitle(e.target.value)}
                  />
                  
                  <Field
                    label="Content"
                    placeholder="Write your content here..."
                    textarea
                    value={contentBody}
                    onChange={(e) => setContentBody(e.target.value)}
                    className="min-h-[150px]"
                  />

                  <div>
                    <label className="block text-button font-medium text-t-primary mb-3">
                      Publishing Platforms
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {platforms.filter(p => p.connected).map((platform, index) => (
                        <div
                          key={index}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedPlatforms.includes(platform.name.toLowerCase())
                              ? 'border-primary-01 bg-primary-01/10'
                              : 'border-s-stroke2 hover:border-primary-01/50'
                          }`}
                          onClick={() => togglePlatform(platform.name.toLowerCase())}
                        >
                          <div className="flex items-center gap-2">
                            <Icon name="check" className={`w-4 h-4 ${
                              selectedPlatforms.includes(platform.name.toLowerCase())
                                ? 'text-primary-01'
                                : 'text-transparent'
                            }`} />
                            <span className="text-button text-t-primary">
                              {platform.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-b-surface2 rounded-lg space-y-3">
                    <h4 className="text-button font-medium text-t-primary">
                      Publishing Options
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-caption text-t-secondary">
                        Auto-optimize for each platform
                      </label>
                      <Switch
                        checked={autoOptimize}
                        onChange={setAutoOptimize}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-caption text-t-secondary">
                        Schedule for later
                      </label>
                      <Switch
                        checked={schedulePost}
                        onChange={setSchedulePost}
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handlePublishContent}
                    disabled={loading || !campaignName.trim() || !contentTitle.trim() || !contentBody.trim() || selectedPlatforms.length === 0}
                    className="w-full bg-primary-01 text-white"
                  >
                    {loading ? (
                      <>
                        <Icon name="loader" className="w-4 h-4 mr-2 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Icon name="send" className="w-4 h-4 mr-2" />
                        {schedulePost ? 'Schedule Post' : 'Publish Now'}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <DataTable
                title="Published Content"
                columns={contentColumns}
                data={contentPosts}
                loading={loading && activeTab.id === 2}
                showSearch={true}
                showActions={true}
                search={{
                  value: "",
                  onChange: () => {},
                  placeholder: "Search content..."
                }}
                actions={{
                  onEdit: (record) => console.log('Edit', record),
                  onDelete: (record) => console.log('Delete', record)
                }}
              />
            </div>
          )}

          {/* Content Calendar Tab */}
          {activeTab.id === 3 && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <Icon name="calendar" className="w-16 h-16 text-t-tertiary mx-auto mb-4" />
                <h3 className="text-h5 font-semibold text-t-primary mb-2">
                  Content Calendar
                </h3>
                <p className="text-t-secondary mb-6">
                  Plan and schedule your content across all platforms with our visual content calendar.
                </p>
                <Button className="bg-primary-01 text-white">
                  <Icon name="plus" className="w-4 h-4 mr-2" />
                  Open Calendar
                </Button>
              </div>
            </div>
          )}

          {/* Analytics Dashboard Tab */}
          {activeTab.id === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="eye" className="w-8 h-8 text-blue-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Total Views</h3>
                      <p className="text-h6 font-bold text-t-primary">127.3K</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="heart" className="w-8 h-8 text-red-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Engagement</h3>
                      <p className="text-h6 font-bold text-t-primary">8.4%</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="share" className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Shares</h3>
                      <p className="text-h6 font-bold text-t-primary">2.1K</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-b-surface2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="trending-up" className="w-8 h-8 text-purple-500" />
                    <div>
                      <h3 className="text-caption text-t-secondary">Growth</h3>
                      <p className="text-h6 font-bold text-t-primary">+15.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="Top Performing Platforms">
                  <div className="space-y-3">
                    {platforms.filter(p => p.connected).map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-b-surface2 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name={platform.icon} className="w-5 h-5" />
                          <span className="text-button text-t-primary">{platform.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-button font-medium text-t-primary">
                            {formatNumber(Math.floor(Math.random() * 10000))} views
                          </div>
                          <div className="text-caption text-t-secondary">
                            {(Math.random() * 10).toFixed(1)}% engagement
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card title="Recent Performance">
                  <div className="space-y-3">
                    {contentPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="p-3 bg-b-surface2 rounded-lg">
                        <h4 className="text-button font-medium text-t-primary mb-1">
                          {post.campaignName}
                        </h4>
                        <div className="flex justify-between text-caption text-t-secondary">
                          <span>{formatNumber(post.overallAnalytics.totalViews)} views</span>
                          <span>{formatNumber(post.overallAnalytics.totalEngagement)} engagement</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
} 