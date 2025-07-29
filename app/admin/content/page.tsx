"use client";

import React from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";

export const dynamic = 'force-dynamic';

export default function AdminContentPage() {
  return (
    <Layout title="Content Management">
      <div className="space-y-6">
        {/* Content Overview */}
        <Card title="Content Overview">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-b-surface2 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="file-text" className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-t-primary">Total Posts</h3>
                  <p className="text-2xl font-bold text-t-primary">247</p>
                </div>
              </div>
            </div>
            
            <div className="bg-b-surface2 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="edit" className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-t-primary">Drafts</h3>
                  <p className="text-2xl font-bold text-t-primary">12</p>
                </div>
              </div>
            </div>
            
            <div className="bg-b-surface2 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="image" className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="font-semibold text-t-primary">Media Files</h3>
                  <p className="text-2xl font-bold text-t-primary">1,234</p>
                </div>
              </div>
            </div>
            
            <div className="bg-b-surface2 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="eye" className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-t-primary">Page Views</h3>
                  <p className="text-2xl font-bold text-t-primary">45.2K</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Content Actions */}
        <Card title="Quick Actions">
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary-01 text-white">
              <Icon name="plus" className="w-4 h-4 mr-2" />
              Create New Post
            </Button>
            <Button className="border border-s-stroke2">
              <Icon name="upload" className="w-4 h-4 mr-2" />
              Upload Media
            </Button>
            <Button className="border border-s-stroke2">
              <Icon name="folder" className="w-4 h-4 mr-2" />
              Manage Categories
            </Button>
            <Button className="border border-s-stroke2">
              <Icon name="settings" className="w-4 h-4 mr-2" />
              Content Settings
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 