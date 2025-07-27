"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "An error occurred");
            } else {
                setSuccess("Account created successfully! Signing you in...");
                // Automatically sign in the user
                const result = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (result?.error) {
                    setError("Account created but sign in failed. Please try signing in manually.");
                } else {
                    setTimeout(() => {
                        router.push("/onboarding");
                    }, 1000);
                }
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-b-surface1">
            <div className="w-full max-w-md mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-h3 mb-4">Create account</h1>
                    <p className="text-t-secondary">Sign up to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600">
                            <Icon name="alert-circle" className="fill-red-600" />
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600">
                            <Icon name="check-circle" className="fill-green-600" />
                            <span className="text-sm">{success}</span>
                        </div>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-s-stroke2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        isBlack
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating account..." : "Sign Up"}
                    </Button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-t-secondary">
                        Already have an account?{" "}
                        <a href="/auth/signin" className="text-blue-600 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage; 