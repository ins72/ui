export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";
import Button from "@/style-reference/components/Button";

const knowledgeCategories = [
    {
        id: 1,
        title: "Getting Started",
        description: "Learn the basics of MEWAYZ platform and how to set up your business",
        icon: "rocket",
        articles: 12,
        color: "primary"
    },
    {
        id: 2,
        title: "E-commerce",
        description: "Set up your online store, manage products, and process orders",
        icon: "shopping-cart",
        articles: 8,
        color: "success"
    },
    {
        id: 3,
        title: "CRM & Customers",
        description: "Manage customer relationships and track sales performance",
        icon: "users",
        articles: 15,
        color: "warning"
    },
    {
        id: 4,
        title: "Course Creation",
        description: "Create and sell online courses to your audience",
        icon: "book-open",
        articles: 10,
        color: "info"
    }
];

const featuredArticles = [
    {
        id: 1,
        title: "How to Set Up Your First Store",
        description: "Complete guide to creating your first e-commerce store on MEWAYZ",
        category: "Getting Started",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Understanding Revenue Sharing Plans",
        description: "Learn about our Free, Pro, and Enterprise plan structures",
        category: "Billing & Plans",
        readTime: "3 min read"
    }
];

const KnowledgeBasePage = () => {
    return (
        <Layout title="Knowledge Base - MEWAYZ Help Center">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-h1 mb-4">Knowledge Base</h1>
                    <p className="text-lg text-t-secondary max-w-2xl mx-auto mb-8">
                        Find answers, learn new skills, and get the most out of your MEWAYZ platform.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-h3 mb-6">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredArticles.map((article) => (
                            <Card key={article.id} className="hover:shadow-lg transition-shadow">
                                <div className="p-6">
                                    <div className="text-sm text-primary-01 font-medium mb-2">
                                        {article.category}
                                    </div>
                                    <h3 className="text-button mb-3">{article.title}</h3>
                                    <p className="text-body text-t-secondary mb-4">
                                        {article.description}
                                    </p>
                                    <div className="text-sm text-t-secondary">
                                        {article.readTime}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-h3 mb-6">Browse by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {knowledgeCategories.map((category) => (
                            <Card key={category.id} className="hover:shadow-lg transition-shadow">
                                <div className="p-6 text-center">
                                    <div className={`inline-flex p-3 rounded-xl bg-primary-01/10 mb-4`}>
                                        <Icon 
                                            name={category.icon} 
                                            className="size-6 text-primary-01" 
                                        />
                                    </div>
                                    <h3 className="text-button mb-2">{category.title}</h3>
                                    <p className="text-caption text-t-secondary mb-4">
                                        {category.description}
                                    </p>
                                    <div className="text-sm text-t-secondary">
                                        {category.articles} articles
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Card className="max-w-2xl mx-auto p-8">
                        <h2 className="text-h3 mb-4">Can't find what you're looking for?</h2>
                        <p className="text-body text-t-secondary mb-6">
                            Our support team is ready to help you with any questions or issues.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary">Contact Support</Button>
                            <Button variant="outline">Join Community</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default KnowledgeBasePage; 