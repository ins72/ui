"use client";

import { useState, useEffect } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import DataTable from "@/style-reference/components/DataTable";
import Modal from "@/style-reference/components/Modal";
import Editor from "@/style-reference/components/Editor";

// Blog categories from req.md
const BLOG_CATEGORIES = [
  {
    id: "success-stories",
    name: "Success Stories",
    description: "Inspire and educate through real customer achievements",
    icon: "trophy",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500"
  },
  {
    id: "educational",
    name: "Educational Hub",
    description: "Comprehensive tutorials and guides",
    icon: "book-open",
    color: "bg-gradient-to-r from-blue-400 to-purple-500"
  },
  {
    id: "industry-insights",
    name: "Industry Insights",
    description: "Keep users ahead of trends",
    icon: "trending-up",
    color: "bg-gradient-to-r from-green-400 to-teal-500"
  },
  {
    id: "product-updates",
    name: "Product Updates",
    description: "Transparent communication about platform changes",
    icon: "refresh-cw",
    color: "bg-gradient-to-r from-purple-400 to-pink-500"
  },
  {
    id: "community",
    name: "Community & Culture",
    description: "Build strong community bonds",
    icon: "users",
    color: "bg-gradient-to-r from-indigo-400 to-blue-500"
  }
];

const ComprehensiveBlogSystem = () => {
  const [activeCategory, setActiveCategory] = useState("success-stories");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Blog post structure
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "success-stories",
    tags: [],
    featuredImage: { url: "", alt: "" },
    status: "draft",
    allowComments: true,
    featured: false,
    seoTitle: "",
    seoDescription: "",
    targetAudience: "",
    readingLevel: "intermediate"
  });

  useEffect(() => {
    fetchBlogPosts();
  }, [activeCategory]);

  const fetchBlogPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/blog?category=${activeCategory}`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePost = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
      });

      if (response.ok) {
        setShowCreateModal(false);
        setNewPost({
          title: "",
          excerpt: "",
          content: "",
          category: "success-stories",
          tags: [],
          featuredImage: { url: "", alt: "" },
          status: "draft",
          allowComments: true,
          featured: false,
          seoTitle: "",
          seoDescription: "",
          targetAudience: "",
          readingLevel: "intermediate"
        });
        fetchBlogPosts();
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;

    try {
      const response = await fetch(`/api/blog/${editingPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPost)
      });

      if (response.ok) {
        setEditingPost(null);
        fetchBlogPosts();
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        fetchBlogPosts();
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const renderCategoryTabs = () => (
    <div className="flex flex-wrap gap-4 mb-8">
      {BLOG_CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            activeCategory === category.id
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <Icon name={category.icon} className="w-5 h-5" />
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );

  const renderBlogStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">
          {posts.length}
        </div>
        <div className="text-gray-600">Total Posts</div>
      </Card>
      <Card className="text-center">
        <div className="text-3xl font-bold text-green-600 mb-2">
          {posts.filter(p => p.status === "published").length}
        </div>
        <div className="text-gray-600">Published</div>
      </Card>
      <Card className="text-center">
        <div className="text-3xl font-bold text-yellow-600 mb-2">
          {posts.filter(p => p.status === "draft").length}
        </div>
        <div className="text-gray-600">Drafts</div>
      </Card>
      <Card className="text-center">
        <div className="text-3xl font-bold text-purple-600 mb-2">
          {posts.reduce((sum, p) => sum + (p.viewCount || 0), 0)}
        </div>
        <div className="text-gray-600">Total Views</div>
      </Card>
    </div>
  );

  const renderCreatePostModal = () => (
    <Modal
      isOpen={showCreateModal}
      onClose={() => setShowCreateModal(false)}
      title="Create New Blog Post"
      size="xl"
    >
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter post title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category *</label>
            <select
              value={newPost.category}
              onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            >
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Excerpt *</label>
          <textarea
            value={newPost.excerpt}
            onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            rows={3}
            placeholder="Brief description of the post"
          />
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium mb-2">Content *</label>
          <Editor
            value={newPost.content}
            onChange={(content) => setNewPost({ ...newPost, content })}
            placeholder="Write your blog post content..."
          />
        </div>

        {/* SEO Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">SEO Title</label>
            <input
              type="text"
              value={newPost.seoTitle}
              onChange={(e) => setNewPost({ ...newPost, seoTitle: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="SEO optimized title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">SEO Description</label>
            <input
              type="text"
              value={newPost.seoDescription}
              onChange={(e) => setNewPost({ ...newPost, seoDescription: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="SEO meta description"
            />
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              value={newPost.status}
              onChange={(e) => setNewPost({ ...newPost, status: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Reading Level</label>
            <select
              value={newPost.readingLevel}
              onChange={(e) => setNewPost({ ...newPost, readingLevel: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Target Audience</label>
            <input
              type="text"
              value={newPost.targetAudience}
              onChange={(e) => setNewPost({ ...newPost, targetAudience: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="e.g., E-commerce owners"
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={newPost.allowComments}
              onChange={(e) => setNewPost({ ...newPost, allowComments: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm">Allow Comments</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={newPost.featured}
              onChange={(e) => setNewPost({ ...newPost, featured: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm">Featured Post</span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setShowCreateModal(false)}
            className="btn-secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreatePost}
            className="btn-primary"
            disabled={!newPost.title || !newPost.content}
          >
            Create Post
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderPostsTable = () => {
    const columns = [
      { key: "title", label: "Title", sortable: true },
      { key: "category", label: "Category", sortable: true },
      { key: "status", label: "Status", sortable: true },
      { key: "viewCount", label: "Views", sortable: true },
      { key: "publishedAt", label: "Published", sortable: true },
      { key: "actions", label: "Actions", sortable: false }
    ];

    const data = posts.map((post) => ({
      ...post,
      actions: (
        <div className="flex gap-2">
          <Button
            onClick={() => setEditingPost(post)}
            className="btn-small btn-secondary"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeletePost(post.id)}
            className="btn-small btn-danger"
          >
            Delete
          </Button>
        </div>
      )
    }));

    return (
      <DataTable
        columns={columns}
        data={data}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isLoading={isLoading}
      />
    );
  };

  return (
    <Layout title="Comprehensive Blog System">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Blog Management</h1>
            <p className="text-gray-600">
              Manage your comprehensive blog system with AI assistance and advanced features
            </p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary"
          >
            <Icon name="plus" className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Category Tabs */}
        {renderCategoryTabs()}

        {/* Blog Stats */}
        {renderBlogStats()}

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-3 py-2 border rounded"
            >
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </Card>

        {/* Posts Table */}
        <Card title={`${BLOG_CATEGORIES.find(c => c.id === activeCategory)?.name} Posts`}>
          {renderPostsTable()}
        </Card>

        {/* Create Post Modal */}
        {renderCreatePostModal()}

        {/* Edit Post Modal */}
        {editingPost && (
          <Modal
            isOpen={!!editingPost}
            onClose={() => setEditingPost(null)}
            title="Edit Blog Post"
            size="xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <Editor
                  value={editingPost.content}
                  onChange={(content) => setEditingPost({ ...editingPost, content })}
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => setEditingPost(null)}
                  className="btn-secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdatePost}
                  className="btn-primary"
                >
                  Update Post
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default ComprehensiveBlogSystem; 