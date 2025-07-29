"use client";

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const dynamic = 'force-dynamic';

export default function AdminSettingsPage() {
  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <Card title="General Settings">
          <p className="text-t-secondary">Configure general platform settings here.</p>
        </Card>
      </div>
    </Layout>
  );
} 