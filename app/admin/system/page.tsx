"use client";

import React from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const dynamic = 'force-dynamic';

export default function AdminSystemPage() {
  return (
    <Layout title="System Settings">
      <div className="space-y-6">
        <Card title="System Configuration">
          <p className="text-t-secondary">System configuration options will be implemented here.</p>
        </Card>
      </div>
    </Layout>
  );
} 