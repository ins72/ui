"use client";

import { useState } from "react";
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    benefits: string[];
    salary: string;
    postedAt: string;
}

const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [selectedLocation, setSelectedLocation] = useState("all");

    const jobs: Job[] = [
        {
            id: "1",
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Join our engineering team to build scalable, high-performance applications that power our enterprise platform.",
            requirements: [
                "5+ years of experience with React, Node.js, and TypeScript",
                "Experience with cloud platforms (AWS, Azure, or GCP)",
                "Strong understanding of database design and optimization",
                "Experience with microservices architecture",
                "Excellent problem-solving and communication skills"
            ],
            benefits: [
                "Competitive salary and equity",
                "Flexible remote work policy",
                "Health, dental, and vision insurance",
                "401(k) with company match",
                "Professional development budget"
            ],
            salary: "$120,000 - $160,000",
            postedAt: "2024-01-15"
        },
        {
            id: "2",
            title: "Product Manager",
            department: "Product",
            location: "San Francisco, CA",
            type: "Full-time",
            description: "Lead product strategy and execution for our enterprise platform, working closely with engineering and design teams.",
            requirements: [
                "3+ years of product management experience",
                "Experience with B2B SaaS products",
                "Strong analytical and strategic thinking",
                "Excellent stakeholder management skills",
                "Experience with agile development methodologies"
            ],
            benefits: [
                "Competitive salary and equity",
                "Health, dental, and vision insurance",
                "Flexible PTO policy",
                "Professional development opportunities",
                "Modern office in San Francisco"
            ],
            salary: "$130,000 - $170,000",
            postedAt: "2024-01-12"
        },
        {
            id: "3",
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Remote",
            type: "Full-time",
            description: "Help our enterprise customers achieve success with our platform through strategic guidance and support.",
            requirements: [
                "2+ years of customer success or account management experience",
                "Experience with enterprise software",
                "Strong relationship-building skills",
                "Excellent communication and presentation skills",
                "Data-driven approach to customer success"
            ],
            benefits: [
                "Competitive salary and commission",
                "Remote work flexibility",
                "Health, dental, and vision insurance",
                "Professional development budget",
                "Travel opportunities"
            ],
            salary: "$80,000 - $110,000",
            postedAt: "2024-01-10"
        },
        {
            id: "4",
            title: "Marketing Specialist",
            department: "Marketing",
            location: "New York, NY",
            type: "Full-time",
            description: "Create compelling marketing campaigns and content to drive awareness and adoption of our platform.",
            requirements: [
                "2+ years of B2B marketing experience",
                "Experience with digital marketing channels",
                "Strong writing and content creation skills",
                "Familiarity with marketing automation tools",
                "Analytical mindset and data-driven approach"
            ],
            benefits: [
                "Competitive salary",
                "Health, dental, and vision insurance",
                "Flexible work arrangements",
                "Professional development opportunities",
                "Creative and collaborative environment"
            ],
            salary: "$70,000 - $90,000",
            postedAt: "2024-01-08"
        }
    ];

    const departments = [
        { id: "all", name: "All Departments" },
        { id: "engineering", name: "Engineering" },
        { id: "product", name: "Product" },
        { id: "customer-success", name: "Customer Success" },
        { id: "marketing", name: "Marketing" },
        { id: "sales", name: "Sales" },
        { id: "design", name: "Design" }
    ];

    const locations = [
        { id: "all", name: "All Locations" },
        { id: "remote", name: "Remote" },
        { id: "san-francisco", name: "San Francisco, CA" },
        { id: "new-york", name: "New York, NY" },
        { id: "austin", name: "Austin, TX" },
        { id: "london", name: "London, UK" }
    ];

    const filteredJobs = jobs.filter(job => {
        const departmentMatch = selectedDepartment === "all" || 
            job.department.toLowerCase().replace(/\s+/g, '-') === selectedDepartment;
        const locationMatch = selectedLocation === "all" || 
            job.location.toLowerCase().replace(/\s+/g, '-') === selectedLocation;
        return departmentMatch && locationMatch;
    });

    const companyValues = [
        {
            title: "Innovation",
            description: "We push boundaries and embrace new technologies to solve complex problems.",
            icon: "zap"
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork and diverse perspectives.",
            icon: "users"
        },
        {
            title: "Customer Focus",
            description: "Our customers' success is our success. We build with them in mind.",
            icon: "heart"
        },
        {
            title: "Growth",
            description: "We invest in our people's growth and development.",
            icon: "trending-up"
        }
    ];

    const benefits = [
        {
            title: "Health & Wellness",
            items: ["Comprehensive health insurance", "Dental and vision coverage", "Mental health support", "Fitness reimbursement"]
        },
        {
            title: "Work-Life Balance",
            items: ["Flexible PTO policy", "Remote work options", "Flexible hours", "Parental leave"]
        },
        {
            title: "Professional Development",
            items: ["Learning budget", "Conference attendance", "Mentorship programs", "Career growth opportunities"]
        },
        {
            title: "Team & Culture",
            items: ["Regular team events", "Diverse and inclusive environment", "Employee resource groups", "Recognition programs"]
        }
    ];

    return (
        <Layout title="Careers">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Open Positions">
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                                    <select
                                        value={selectedDepartment}
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {departments.map((dept) => (
                                            <option key={dept.id} value={dept.id}>
                                                {dept.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <select
                                        value={selectedLocation}
                                        onChange={(e) => setSelectedLocation(e.target.value)}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {locations.map((location) => (
                                            <option key={location.id} value={location.id}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {filteredJobs.map((job) => (
                                <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <span className="flex items-center space-x-1">
                                                    <Icon name="building" className="w-4 h-4" />
                                                    <span>{job.department}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <Icon name="map-pin" className="w-4 h-4" />
                                                    <span>{job.location}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <Icon name="clock" className="w-4 h-4" />
                                                    <span>{job.type}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-semibold text-green-600">{job.salary}</div>
                                            <div className="text-sm text-gray-500">
                                                Posted {new Date(job.postedAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4">{job.description}</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                                            <ul className="space-y-1">
                                                {job.requirements.map((req, index) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                                                        <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                                            <ul className="space-y-1">
                                                {job.benefits.map((benefit, index) => (
                                                    <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                                                        <Icon name="star" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                        <Button href={`/careers/${job.id}`}>
                                            Apply Now
                                        </Button>
                                        <Button href={`/careers/${job.id}`} isStroke>
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Our Values">
                        <div className="space-y-4">
                            {companyValues.map((value, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="p-2 rounded-lg bg-blue-100">
                                        <Icon name={value.icon} className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Benefits & Perks" className="mt-4">
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index}>
                                    <h3 className="font-medium text-gray-900 mb-2">{benefit.title}</h3>
                                    <ul className="space-y-1">
                                        {benefit.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                                                <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Card>
                    
                    <Card title="Get in Touch" className="mt-4">
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Don't see a position that fits? We're always looking for talented individuals to join our team.
                            </p>
                            <div className="space-y-2">
                                <Button href="/contact" className="w-full">
                                    Contact Us
                                </Button>
                                <Button href="/careers/general" isStroke className="w-full">
                                    General Application
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default CareersPage; 