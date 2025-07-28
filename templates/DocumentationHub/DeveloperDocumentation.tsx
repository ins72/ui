"use client";

import { useState } from "react";
import { Code, Database, Zap, Shield, GitBranch, Terminal, BookOpen, Download } from "lucide-react";

const DeveloperDocumentation = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const techStack = {
        frontend: ["React 18", "TypeScript", "Next.js 14", "Tailwind CSS", "Lucide Icons"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication"],
        infrastructure: ["AWS", "Docker", "Redis", "Stripe", "SendGrid"],
        tools: ["Git", "ESLint", "Prettier", "Jest", "Postman"]
    };

    const apiEndpoints = [
        {
            method: "GET",
            endpoint: "/api/v1/users",
            description: "Retrieve all users",
            auth: "Bearer Token",
            response: "JSON"
        },
        {
            method: "POST",
            endpoint: "/api/v1/users",
            description: "Create new user",
            auth: "Bearer Token",
            response: "JSON"
        },
        {
            method: "GET",
            endpoint: "/api/v1/products",
            description: "Get product catalog",
            auth: "Optional",
            response: "JSON"
        },
        {
            method: "POST",
            endpoint: "/api/v1/orders",
            description: "Create new order",
            auth: "Bearer Token",
            response: "JSON"
        }
    ];

    const codeExamples = [
        {
            language: "javascript",
            title: "Authentication Example",
            description: "How to authenticate with the Mewayz API",
            code: `// Authentication example
const authenticate = async (email, password) => {
  try {
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Authentication failed:', error);
  }
};`
        },
        {
            language: "javascript",
            title: "Product API Integration",
            description: "Fetching products from the API",
            code: `// Fetch products example
const getProducts = async () => {
  try {
    const response = await fetch('/api/v1/products', {
      headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json',
      },
    });
    
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};`
        },
        {
            language: "typescript",
            title: "TypeScript Interfaces",
            description: "Type definitions for API responses",
            code: `// TypeScript interfaces
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  status: 'active' | 'suspended';
  createdAt: Date;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'active' | 'inactive';
  creator: User;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}`
        }
    ];

    const setupSteps = [
        {
            step: 1,
            title: "Clone Repository",
            description: "Get the latest code from our repository",
            command: "git clone https://github.com/mewayz/platform.git",
            duration: "2 minutes"
        },
        {
            step: 2,
            title: "Install Dependencies",
            description: "Install all required packages",
            command: "npm install",
            duration: "5 minutes"
        },
        {
            step: 3,
            title: "Environment Setup",
            description: "Configure environment variables",
            command: "cp .env.example .env",
            duration: "3 minutes"
        },
        {
            step: 4,
            title: "Database Setup",
            description: "Set up MongoDB connection",
            command: "npm run db:setup",
            duration: "10 minutes"
        },
        {
            step: 5,
            title: "Start Development Server",
            description: "Run the application locally",
            command: "npm run dev",
            duration: "1 minute"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">Developer Documentation</h2>
                    <p className="text-t-secondary">Technical documentation for developers and system integrators</p>
                </div>

                {/* Quick Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "overview"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Overview</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Tech stack & architecture</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("setup")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "setup"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Terminal className="h-6 w-6 text-green-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Setup</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Development environment</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("api")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "api"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Code className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">API Reference</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Endpoints & examples</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("deployment")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "deployment"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Zap className="h-6 w-6 text-orange-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Deployment</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Production setup</div>
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "overview" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Frontend</h4>
                                    <ul className="space-y-1">
                                        {techStack.frontend.map((tech, index) => (
                                            <li key={index} className="text-sm text-blue-800 dark:text-blue-200">• {tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Backend</h4>
                                    <ul className="space-y-1">
                                        {techStack.backend.map((tech, index) => (
                                            <li key={index} className="text-sm text-green-800 dark:text-green-200">• {tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Infrastructure</h4>
                                    <ul className="space-y-1">
                                        {techStack.infrastructure.map((tech, index) => (
                                            <li key={index} className="text-sm text-purple-800 dark:text-purple-200">• {tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Tools</h4>
                                    <ul className="space-y-1">
                                        {techStack.tools.map((tech, index) => (
                                            <li key={index} className="text-sm text-orange-800 dark:text-orange-200">• {tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Architecture Overview</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Layer</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            React-based SPA with TypeScript, featuring component-based architecture, 
                                            state management with React hooks, and responsive design with Tailwind CSS.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Layer</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            RESTful API built with Express.js, featuring JWT authentication, 
                                            rate limiting, input validation, and comprehensive error handling.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Layer</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            MongoDB database with Mongoose ODM, featuring data validation, 
                                            indexing, and efficient querying for optimal performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "setup" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Development Setup</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Follow these steps to set up your development environment for the Mewayz platform.
                            </p>
                            <div className="space-y-4">
                                {setupSteps.map((step) => (
                                    <div key={step.step} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-semibold text-sm">
                                                {step.step}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{step.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                                                <div className="bg-gray-900 dark:bg-gray-700 p-3 rounded-lg">
                                                    <code className="text-green-400 text-sm font-mono">{step.command}</code>
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Duration: {step.duration}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Environment Variables</h3>
                            <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mewayz

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# Server Configuration
PORT=5000
NODE_ENV=development

# External Services
STRIPE_SECRET_KEY=sk_test_...
SENDGRID_API_KEY=SG...
REDIS_URL=redis://localhost:6379

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads`}
                                </pre>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "api" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Endpoints</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Method</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Endpoint</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Description</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Auth</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Response</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {apiEndpoints.map((endpoint, index) => (
                                            <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                                                <td className="py-3 px-4">
                                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                        endpoint.method === "GET" ? "bg-green-100 text-green-800" :
                                                        endpoint.method === "POST" ? "bg-blue-100 text-blue-800" :
                                                        "bg-gray-100 text-gray-800"
                                                    }`}>
                                                        {endpoint.method}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <code className="text-sm text-gray-900 dark:text-white">{endpoint.endpoint}</code>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{endpoint.description}</span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{endpoint.auth}</span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{endpoint.response}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h3>
                            <div className="space-y-6">
                                {codeExamples.map((example, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{example.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{example.description}</p>
                                        <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                                            <pre className="text-green-400 text-sm font-mono overflow-x-auto">{example.code}</pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "deployment" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Deployment Guide</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Production Checklist</h4>
                                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                        <li>• Set NODE_ENV=production</li>
                                        <li>• Configure secure JWT secret</li>
                                        <li>• Set up SSL/TLS certificates</li>
                                        <li>• Configure database backups</li>
                                        <li>• Set up monitoring and logging</li>
                                        <li>• Configure rate limiting</li>
                                        <li>• Set up CI/CD pipeline</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Security Best Practices</h4>
                                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                                        <li>• Use environment variables for secrets</li>
                                        <li>• Implement proper CORS policies</li>
                                        <li>• Validate all input data</li>
                                        <li>• Use HTTPS in production</li>
                                        <li>• Regular security updates</li>
                                        <li>• Implement rate limiting</li>
                                        <li>• Monitor for suspicious activity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Docker Deployment</h3>
                            <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`# Build the application
docker build -t mewayz-platform .

# Run the container
docker run -d \\
  --name mewayz-app \\
  -p 3000:3000 \\
  -e NODE_ENV=production \\
  -e MONGODB_URI=mongodb://mongo:27017/mewayz \\
  mewayz-platform

# Using Docker Compose
docker-compose up -d`}
                                </pre>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Additional Resources */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Developer Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">GitHub Repository</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            Access the source code and contribute to the project
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View Repository →
                        </button>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">API Playground</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Test API endpoints with our interactive playground
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Open Playground →
                        </button>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">SDK Downloads</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                            Download SDKs for various programming languages
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            Download SDKs →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperDocumentation; 