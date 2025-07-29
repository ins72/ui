import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const metadata = {
  title: "Blog - MEWAYZ",
  description: "Latest insights, tips, and updates from the MEWAYZ team",
};

export default function BlogPage() {
  return (
    <Layout title="Blog">
      <div className="space-y-6">
        <Card title="Blog" className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Our blog is currently under development. Check back soon for the latest insights, 
              tips, and updates from the MEWAYZ team.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 