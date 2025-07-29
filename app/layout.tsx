import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

// Advanced SEO Metadata following Bruce Clay's guidelines
export const metadata: Metadata = {
  title: "MEWAYZ - Professional Business Platform | E-commerce, CRM & Course Creation Software",
  description: "Transform your business with MEWAYZ's all-in-one platform. Professional e-commerce solutions, advanced CRM systems, course creation tools, and social media management. Start your free trial today.",
  keywords: [
    "business platform",
    "e-commerce solutions", 
    "CRM software",
    "course creation platform",
    "professional business tools",
    "all-in-one business management software",
    "enterprise e-commerce platform",
    "advanced customer relationship management",
    "online course creation tools",
    "social media management platform",
    "business automation software",
    "digital commerce platform",
    "customer management system",
    "online learning platform",
    "business growth tools"
  ].join(", "),
  openGraph: {
    title: "MEWAYZ - Professional Business Platform for Growth",
    description: "Comprehensive business platform combining e-commerce, CRM, course creation, and social media management. Join 10,000+ businesses transforming their operations.",
    url: "https://mewayz.com",
    siteName: "MEWAYZ",
    images: [
      {
        url: "/images/og-business-platform.jpg",
        width: 1200,
        height: 630,
        alt: "MEWAYZ Business Platform Dashboard"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MEWAYZ - Professional Business Platform",
    description: "All-in-one business platform for e-commerce, CRM, courses & more. Transform your business operations today.",
    images: ["/images/twitter-business-platform.jpg"],
    creator: "@mewayz"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://mewayz.com"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}