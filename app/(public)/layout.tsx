import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import "../globals.css";

const interDisplay = localFont({
    src: [
        {
            path: "../../public/fonts/InterDisplay-Light.woff2",
            weight: "300",
        },
        {
            path: "../../public/fonts/InterDisplay-Regular.woff2",
            weight: "400",
        },
        {
            path: "../../public/fonts/InterDisplay-Medium.woff2",
            weight: "500",
        },
        {
            path: "../../public/fonts/InterDisplay-SemiBold.woff2",
            weight: "600",
        },
        {
            path: "../../public/fonts/InterDisplay-Bold.woff2",
            weight: "700",
        },
    ],
    variable: "--font-inter-display",
});

export const metadata: Metadata = {
    title: "MEWAYZ - Platform for Creators",
    description: "MEWAYZ - The complete platform for creators to sell, manage, and grow their business",
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${interDisplay.variable} bg-b-surface1 font-inter text-body-1 text-t-primary antialiased`}
            >
                <PublicHeader />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <PublicFooter />
            </body>
        </html>
    );
} 