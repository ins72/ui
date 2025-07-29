import { Metadata } from "next";

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Sign In - Access Your MEWAYZ Account | Secure Business Platform",
    description: "Sign in to your MEWAYZ account to access your business dashboard, manage projects, and grow your online presence. Secure login with enterprise-grade protection.",
    keywords: "login, sign in, account access, secure login, business dashboard, user authentication",
    openGraph: {
        title: "Sign In to MEWAYZ - Your Business Platform",
        description: "Access your MEWAYZ dashboard to manage your business, track analytics, and drive growth with our comprehensive platform.",
        type: "website",
        siteName: "MEWAYZ"
    },
    robots: {
        index: false,
        follow: true
    }
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-b-surface1 dark:bg-shade-01 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-h2 text-t-primary mb-4 max-md:text-h3">
                        Welcome Back
                    </h1>
                    <p className="text-body-1 text-t-secondary">
                        Sign in to your MEWAYZ account to continue
                    </p>
                </div>

                <div className="card p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-button text-t-primary mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 bg-b-surface2 border border-s-stroke2 rounded-2xl text-body-2 text-t-primary focus:border-primary-02 focus:outline-none transition-colors"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 bg-b-surface2 border border-s-stroke2 rounded"
                                />
                                <span className="ml-2 text-body-2 text-t-secondary">
                                    Remember me
                                </span>
                            </label>
                            <button
                                type="button"
                                className="text-body-2 text-primary-02 hover:text-primary-01 transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-02 text-white py-4 px-6 rounded-3xl text-button font-medium hover:bg-primary-01 transition-all"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <p className="text-body-2 text-t-secondary">
                        Don't have an account?{" "}
                        <a
                            href="/register"
                            className="text-primary-02 hover:text-primary-01 font-medium transition-colors"
                        >
                            Create one for free
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
} 