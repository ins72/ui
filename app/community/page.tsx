import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";

export const metadata = {
  title: "Community - MEWAYZ",
  description: "Join the MEWAYZ community of creators and business owners",
};

export default function CommunityPage() {
  return (
    <Layout title="Community">
      <div className="space-y-6">
        <Card title="Community" className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">MEWAYZ Community</h2>
            <p className="text-gray-600">
              Connect with other creators and business owners in the MEWAYZ community. 
              Share insights, get support, and grow together.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 