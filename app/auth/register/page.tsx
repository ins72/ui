"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Field from "@/style-reference/components/Field";
import Button from "@/style-reference/components/Button";
import Select from "@/style-reference/components/Select";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        plan: "Free",
    });
    const [loading, setLoading] = useState(false);
    const { register, error, clearError } = useAuth();
    const router = useRouter();

    const planOptions = [
        { id: 1, name: "Free" },
        { id: 2, name: "Pro" },
        { id: 3, name: "Enterprise" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        setLoading(true);
        clearError();
        
        try {
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                plan: formData.plan,
            });
            router.push("/");
        } catch (error) {
            // Error is handled by AuthContext
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePlanChange = (value: { id: number; name: string }) => {
        setFormData({
            ...formData,
            plan: value.name,
        });
    };

    return (
        <Layout title="Start Free Trial" hideSidebar={true}>
            <div className="center">
                <Card title="Create Account" className="max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                        
                        <Field
                            type="text"
                            name="name"
                            label="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        
                        <Field
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        
                        <Select
                            label="Plan"
                            value={{ id: planOptions.find(p => p.name === formData.plan)?.id || 1, name: formData.plan }}
                            onChange={handlePlanChange}
                            options={planOptions}
                        />
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-primary-01 text-white"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>
                        
                        <div className="text-center text-gray-600 text-sm">
                            Already have an account?{" "}
                            <a href="/auth/login" className="text-blue-600 hover:text-blue-700">
                                Sign In
                            </a>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default RegisterPage; 