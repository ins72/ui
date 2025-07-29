export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

export const metadata: Metadata = {
    title: {
        default: "MEWAYZ - Professional Business Platform",
        template: "%s | MEWAYZ"
    },
    description: "Transform your business with MEWAYZ - the all-in-one platform for e-commerce, social media management, course creation, and CRM. Start free or choose Pro/Enterprise plans.",
    keywords: "business platform, e-commerce, social media management, course creation, CRM, marketing automation",
    authors: [{ name: "MEWAYZ Team" }],
    creator: "MEWAYZ",
    publisher: "MEWAYZ",
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mewayz.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_APP_URL || "https://mewayz.com",
        siteName: "MEWAYZ",
        title: "MEWAYZ - Professional Business Platform",
        description: "All-in-one business platform with e-commerce, social media, courses, and CRM. Free plan available with Pro and Enterprise options.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "MEWAYZ Business Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@mewayz",
        creator: "@mewayz",
        title: "MEWAYZ - Professional Business Platform",
        description: "Transform your business with our all-in-one platform. E-commerce, social media, courses, and CRM in one place.",
        images: ["/images/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: process.env.GOOGLE_VERIFICATION,
        yandex: process.env.YANDEX_VERIFICATION,
        other: {
            "msvalidate.01": process.env.BING_VERIFICATION || "",
        },
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL || "https://mewayz.com",
    },
};

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <meta name="color-scheme" content="light dark" />
            </head>
            <body className="antialiased bg-b-surface1 text-t-primary dark:bg-shade-01">
                <div className="min-h-screen flex flex-col">
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
