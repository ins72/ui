import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const metadata = {
  title: "Case Studies - MEWAYZ",
  description: "Success stories and case studies from MEWAYZ users",
};

export default function CaseStudiesPage() {
  return (
    <Layout title="Case Studies">
      <div className="space-y-6">
        <Card title="Case Studies" className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Discover how creators and businesses are transforming their operations with MEWAYZ. 
              Case studies coming soon.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 