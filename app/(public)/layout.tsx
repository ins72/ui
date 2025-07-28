"use client";

import { useEffect, useState } from "react";
import ThemeButton from "@/components/ThemeButton";

type PublicLayoutProps = {
    children: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    useEffect(() => {
        const scrollWidth =
            window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty(
            "--scrollbar-width",
            `${scrollWidth}px`
        );

        return () => {
            document.documentElement.style.removeProperty("--scrollbar-width");
        };
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="pt-0 pb-0">
                <div className="w-full">
                    {children}
                </div>
            </div>
            <ThemeButton className="fixed left-5 bottom-5 z-10 max-lg:hidden" />
        </div>
    );
};

export default PublicLayout; 