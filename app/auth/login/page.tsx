"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const { login, error, clearError } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        clearError();
        
        try {
            await login(formData);
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

    return (
        <Layout title="Sign In" hideSidebar={true}>
            <div className="center">
                <Card title="Sign In" className="max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                        
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
                        
                        <Button 
                            type="submit" 
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                        
                        <div className="text-center space-y-2">
                            <a href="/auth/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm">
                                Forgot Password?
                            </a>
                            <div className="text-gray-600 text-sm">
                                Don't have an account?{" "}
                                <a href="/auth/register" className="text-blue-600 hover:text-blue-700">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default LoginPage; 