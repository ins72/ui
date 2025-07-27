"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

const PublicHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-b-surface1 border-b border-s-stroke2">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Logo />
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/pricing" className="text-t-secondary hover:text-t-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="/features" className="text-t-secondary hover:text-t-primary transition-colors">
                            Features
                        </Link>
                        <Link href="/help" className="text-t-secondary hover:text-t-primary transition-colors">
                            Help
                        </Link>
                        <Link href="/privacy" className="text-t-secondary hover:text-t-primary transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-t-secondary hover:text-t-primary transition-colors">
                            Terms
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link href="/auth/signin">
                            <Button isStroke>Sign In</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <Button isBlack>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PublicHeader; 