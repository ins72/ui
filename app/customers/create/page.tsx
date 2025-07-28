"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/infrastructure/api/apiClient";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import CustomerForm from "@/components/forms/CustomerForm";

const CreateCustomerPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (customerData: any) => {
        setLoading(true);
        setError(null);

        try {
            await apiClient.createCustomer(customerData);
            router.push("/customers/manage");
        } catch (error: any) {
            setError(error.message || "Failed to create customer");
            console.error("Error creating customer:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        router.push("/customers/manage");
    };

    return (
        <Layout title="Create Customer">
            <div className="center">
                <Card title="Create New Customer">
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                    
                    <CustomerForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        loading={loading}
                    />
                </Card>
            </div>
        </Layout>
    );
};

export default CreateCustomerPage; 