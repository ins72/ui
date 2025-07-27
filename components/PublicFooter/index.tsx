import Link from "next/link";
import Logo from "@/components/Logo";

const PublicFooter = () => {
    return (
        <footer className="bg-b-surface2 border-t border-s-stroke2">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Logo />
                        <p className="mt-4 text-t-secondary max-w-md">
                            The complete platform for creators to sell, manage, and grow their business. 
                            From e-commerce to courses, we've got you covered.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/features" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/upgrade-to-pro" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Upgrade to Pro
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/help" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-t-secondary hover:text-t-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-s-stroke2 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-t-secondary text-sm">
                        © 2024 MEWAYZ. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-t-secondary hover:text-t-primary transition-colors text-sm">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-t-secondary hover:text-t-primary transition-colors text-sm">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter; 