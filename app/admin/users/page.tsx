"use client";

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const dynamic = 'force-dynamic';

export default function AdminUsersPage() {
  return (
    <Layout title="User Management">
      <div className="space-y-6">
        <Card title="Users">
          <p className="text-t-secondary">User management functionality will be implemented here.</p>
        </Card>
      </div>
    </Layout>
  );
} 