"use client";

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";
import Badge from "@/style-reference/components/Badge";

export default function ComparePage() {
  const competitors = [
    {
      name: "MEWAYZ",
      features: ["All-in-One Platform", "AI Content Creation", "Revenue Sharing", "White-Label", "24/7 Support"],
      price: "Free - $99/month",
      highlight: true
    },
    {
      name: "Competitor A", 
      features: ["Limited Features", "Basic Templates", "No AI", "Extra Fees", "Email Support"],
      price: "$49-199/month",
      highlight: false
    },
    {
      name: "Competitor B",
      features: ["E-commerce Only", "No Social Media", "No CRM", "Setup Fees", "Business Hours"],
      price: "$29-149/month", 
      highlight: false
    }
  ];

  return (
    <Layout title="Compare Plans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Compare MEWAYZ with Competitors
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto">
            See why MEWAYZ is the only platform creators and businesses need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <Card
              key={index}
              title={competitor.name}
              className={competitor.highlight ? "border-primary-01 bg-primary-01/5" : ""}
            >
              {competitor.highlight && (
                <Badge variant="green" className="mb-4">
                  Recommended
                </Badge>
              )}
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-t-primary mb-2">
                  {competitor.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {competitor.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon 
                      name={competitor.highlight ? "check" : "x"} 
                      className={`w-4 h-4 ${competitor.highlight ? "text-green-500" : "text-red-500"}`} 
                    />
                    <span className="text-t-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={competitor.highlight 
                  ? "w-full bg-primary-01 text-white" 
                  : "w-full border border-s-stroke2 bg-b-surface2 text-t-primary"
                }
              >
                {competitor.highlight ? "Get Started Free" : "Learn More"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
} 