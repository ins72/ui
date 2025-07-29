import { Metadata } from "next";

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Create Account - Start Your Free MEWAYZ Journey | Business Platform",
    description: "Create your free MEWAYZ account and access powerful business tools including e-commerce, social media management, course creation, and CRM. No credit card required.",
    keywords: "create account, sign up, free registration, business platform, free trial, get started",
    openGraph: {
        title: "Create Your Free MEWAYZ Account - Start Building Your Business",
        description: "Join thousands of businesses using MEWAYZ to grow online. Free plan available with all core features included.",
        type: "website",
        siteName: "MEWAYZ"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-b-surface1 dark:bg-shade-01 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-h2 text-t-primary mb-4 max-md:text-h3">
                        Create Your Account
                    </h1>
                    <p className="text-body-1 text-t-secondary">
                        Start your free MEWAYZ journey today
                    </p>
                </div>

                <div className="card p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-button text-t-primary mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-button text-t-primary mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="john.doe@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Your Company Name"
                            />
                        </div>

                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Create a strong password"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                className="w-4 h-4 bg-b-surface2 border border-s-stroke2 rounded mt-1"
                                required
                            />
                            <span className="ml-2 text-body-2 text-t-secondary">
                                I agree to the{" "}
                                <a href="/terms" className="text-primary-02 hover:text-primary-01 transition-colors">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="text-primary-02 hover:text-primary-01 transition-colors">
                                    Privacy Policy
                                </a>
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-02 text-white py-4 px-6 rounded-3xl text-button font-medium hover:bg-primary-01 transition-all"
                        >
                            Create Account
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <p className="text-body-2 text-t-secondary">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-primary-02 hover:text-primary-01 font-medium transition-colors"
                        >
                            Sign in here
                        </a>
                    </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary-02/5 to-secondary-04/5 rounded-3xl">
                    <h3 className="text-button text-t-primary font-medium mb-4 text-center">
                        What You Get with MEWAYZ
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-chart-green rounded-full mr-3"></div>
                            <span className="text-body-2 text-t-secondary">
                                Free plan with core features
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-chart-green rounded-full mr-3"></div>
                            <span className="text-body-2 text-t-secondary">
                                E-commerce & online store
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-chart-green rounded-full mr-3"></div>
                            <span className="text-body-2 text-t-secondary">
                                Social media management
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-chart-green rounded-full mr-3"></div>
                            <span className="text-body-2 text-t-secondary">
                                Course creation & CRM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 