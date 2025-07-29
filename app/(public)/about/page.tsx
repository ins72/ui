"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("mission");
    
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "/team/sarah.jpg",
            bio: "Former VP of Product at tech unicorn, passionate about empowering small businesses."
        },
        {
            name: "Michael Chen",
            role: "CTO",
            image: "/team/michael.jpg", 
            bio: "Ex-Google engineer with 15+ years building scalable platforms."
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Design",
            image: "/team/emily.jpg",
            bio: "Award-winning UX designer focused on creating intuitive business tools."
        },
        {
            name: "David Kim",
            role: "VP of Engineering",
            image: "/team/david.jpg",
            bio: "Former Amazon principal engineer, expert in enterprise architecture."
        }
    ];

    const milestones = [
        {
            year: "2020",
            title: "Company Founded",
            description: "Started with a vision to simplify business management for entrepreneurs worldwide."
        },
        {
            year: "2021", 
            title: "First 1,000 Users",
            description: "Reached our first major milestone with small businesses across 25 countries."
        },
        {
            year: "2022",
            title: "Series A Funding",
            description: "Raised $10M to accelerate product development and expand our team."
        },
        {
            year: "2023",
            title: "100,000+ Businesses",
            description: "Crossed 100,000 active businesses using our platform to grow their operations."
        },
        {
            year: "2024",
            title: "Enterprise Launch",
            description: "Launched enterprise-grade features and white-label solutions for large organizations."
        }
    ];

    return (
        <>
            <Head>
                <title>About MEWAYZ - All-in-One Business Platform | E-commerce, CRM, Courses & More</title>
                <meta name="description" content="Transform your business with MEWAYZ's comprehensive platform. Manage e-commerce, CRM, courses, social media, and marketing automation in one powerful solution." />
                <meta name="keywords" content="business platform, e-commerce platform, CRM software, online course platform, marketing automation, social media management" />
            </Head>
            
            <div className="min-h-screen bg-b-surface">
                {/* Header */}
                <header className="bg-b-surface border-b border-s-stroke">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center">
                                <Link href="/" className="text-2xl font-bold text-t-primary">Mewayz</Link>
                            </div>
                            <nav className="hidden md:flex space-x-8">
                                <Link href="/" className="text-t-secondary hover:text-t-primary">Home</Link>
                                <Link href="/pricing" className="text-t-secondary hover:text-t-primary">Pricing</Link>
                                <Link href="/about" className="text-primary font-medium">About</Link>
                                <Link href="/contact" className="text-t-secondary hover:text-t-primary">Contact</Link>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="text-t-secondary hover:text-t-primary">Sign In</Link>
                                <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                                    Get Started Free
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-t-primary mb-6">
                            Empowering Businesses to 
                            <span className="text-primary"> Thrive Online</span>
                        </h1>
                        <p className="text-xl text-t-secondary mb-8 max-w-3xl mx-auto">
                            Since 2020, MEWAYZ has been the trusted partner for over 100,000 businesses worldwide, 
                            providing the tools and technology needed to succeed in the digital economy.
                        </p>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-b-surface1">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-t-primary mb-4">Our Purpose</h2>
                            <p className="text-lg text-t-secondary">What drives us every day</p>
                        </div>
                        
                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-8">
                            <div className="flex bg-b-surface2 rounded-lg p-1">
                                {["mission", "vision", "values"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-3 rounded-md text-sm font-medium capitalize transition-colors ${
                                            activeTab === tab
                                                ? "bg-primary text-white"
                                                : "text-t-secondary hover:text-t-primary"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="max-w-4xl mx-auto">
                            {activeTab === "mission" && (
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-t-primary mb-4">Our Mission</h3>
                                    <p className="text-lg text-t-secondary leading-relaxed">
                                        To democratize access to enterprise-grade business tools, enabling entrepreneurs 
                                        and small businesses to compete with large corporations through technology that 
                                        was once only available to Fortune 500 companies.
                                    </p>
                                </div>
                            )}
                            
                            {activeTab === "vision" && (
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-t-primary mb-4">Our Vision</h3>
                                    <p className="text-lg text-t-secondary leading-relaxed">
                                        A world where every business, regardless of size, has access to the same powerful 
                                        tools and technologies that enable growth, efficiency, and success in the global marketplace.
                                    </p>
                                </div>
                            )}
                            
                            {activeTab === "values" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-t-primary mb-2">Innovation</h4>
                                        <p className="text-t-secondary">Continuously pushing boundaries to create better solutions</p>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-t-primary mb-2">Accessibility</h4>
                                        <p className="text-t-secondary">Making powerful tools available to businesses of all sizes</p>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-t-primary mb-2">Reliability</h4>
                                        <p className="text-t-secondary">Building trust through consistent, dependable service</p>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-t-primary mb-2">Customer Success</h4>
                                        <p className="text-t-secondary">Your growth and success are our primary metrics</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-t-primary mb-4">Meet Our Leadership Team</h2>
                            <p className="text-lg text-t-secondary">
                                Experienced leaders from top tech companies, united by a passion for helping businesses succeed
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-b-surface2 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-t-primary">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-t-primary mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-sm text-t-secondary">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Timeline */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-b-surface1">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-t-primary mb-4">Our Journey</h2>
                            <p className="text-lg text-t-secondary">Key milestones in our growth story</p>
                        </div>
                        
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary opacity-20"></div>
                            
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center mb-12 ${
                                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                }`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                        <div className="bg-b-surface2 p-6 rounded-lg">
                                            <span className="text-primary font-bold text-lg">{milestone.year}</span>
                                            <h3 className="text-xl font-semibold text-t-primary mb-2">{milestone.title}</h3>
                                            <p className="text-t-secondary">{milestone.description}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Dot */}
                                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-b-surface flex-shrink-0 z-10"></div>
                                    
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-t-primary mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-lg text-t-secondary mb-8">
                            Join over 100,000 businesses that trust MEWAYZ to power their growth
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors">
                                Start Free Trial
                            </Link>
                            <Link href="/contact" className="border border-primary text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-colors">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-b-surface1 border-t border-s-stroke py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <Link href="/" className="text-2xl font-bold text-t-primary">Mewayz</Link>
                        </div>
                        <div className="flex justify-center space-x-8 mb-8">
                            <Link href="/" className="text-t-secondary hover:text-t-primary">Home</Link>
                            <Link href="/pricing" className="text-t-secondary hover:text-t-primary">Pricing</Link>
                            <Link href="/about" className="text-t-secondary hover:text-t-primary">About</Link>
                            <Link href="/contact" className="text-t-secondary hover:text-t-primary">Contact</Link>
                        </div>
                        <p className="text-t-secondary">© 2024 MEWAYZ. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
} 