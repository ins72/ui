"use client";

import { useState } from "react";
import { Code, Key, Database, Zap, Shield, FileText, Copy, Check } from "lucide-react";

const APIReference = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const apiEndpoints = {
        authentication: [
            {
                method: "POST",
                endpoint: "/api/v1/auth/login",
                description: "Authenticate user and get access token",
                parameters: [
                    { name: "email", type: "string", required: true, description: "User email address" },
                    { name: "password", type: "string", required: true, description: "User password" }
                ],
                response: {
                    success: true,
                    data: {
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        user: {
                            id: "user_id",
                            name: "John Doe",
                            email: "john@example.com",
                            role: "user"
                        }
                    }
                }
            },
            {
                method: "POST",
                endpoint: "/api/v1/auth/register",
                description: "Register new user account",
                parameters: [
                    { name: "name", type: "string", required: true, description: "Full name" },
                    { name: "email", type: "string", required: true, description: "Email address" },
                    { name: "password", type: "string", required: true, description: "Password (min 8 chars)" },
                    { name: "plan", type: "string", required: false, description: "Plan type (Free, Pro, Enterprise)" }
                ],
                response: {
                    success: true,
                    data: {
                        user: {
                            id: "user_id",
                            name: "John Doe",
                            email: "john@example.com",
                            plan: "Free"
                        }
                    }
                }
            }
        ],
        users: [
            {
                method: "GET",
                endpoint: "/api/v1/users",
                description: "Get all users (admin only)",
                parameters: [
                    { name: "page", type: "number", required: false, description: "Page number (default: 1)" },
                    { name: "limit", type: "number", required: false, description: "Items per page (default: 10)" },
                    { name: "search", type: "string", required: false, description: "Search term" }
                ],
                response: {
                    success: true,
                    data: {
                        users: [],
                        pagination: {
                            page: 1,
                            limit: 10,
                            total: 100
                        }
                    }
                }
            },
            {
                method: "GET",
                endpoint: "/api/v1/users/:id",
                description: "Get user by ID",
                parameters: [
                    { name: "id", type: "string", required: true, description: "User ID" }
                ],
                response: {
                    success: true,
                    data: {
                        user: {
                            id: "user_id",
                            name: "John Doe",
                            email: "john@example.com",
                            role: "user",
                            status: "active"
                        }
                    }
                }
            }
        ],
        products: [
            {
                method: "GET",
                endpoint: "/api/v1/products",
                description: "Get product catalog",
                parameters: [
                    { name: "category", type: "string", required: false, description: "Filter by category" },
                    { name: "search", type: "string", required: false, description: "Search products" },
                    { name: "sort", type: "string", required: false, description: "Sort by (price, name, date)" }
                ],
                response: {
                    success: true,
                    data: {
                        products: [],
                        total: 150
                    }
                }
            },
            {
                method: "POST",
                endpoint: "/api/v1/products",
                description: "Create new product (authenticated users)",
                parameters: [
                    { name: "name", type: "string", required: true, description: "Product name" },
                    { name: "description", type: "string", required: true, description: "Product description" },
                    { name: "price", type: "number", required: true, description: "Product price" },
                    { name: "category", type: "string", required: true, description: "Product category" }
                ],
                response: {
                    success: true,
                    data: {
                        product: {
                            id: "product_id",
                            name: "Product Name",
                            description: "Product description",
                            price: 99.99,
                            category: "Electronics"
                        }
                    }
                }
            }
        ]
    };

    const authenticationMethods = [
        {
            type: "Bearer Token",
            description: "Most common authentication method using JWT tokens",
            example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
        {
            type: "API Key",
            description: "For server-to-server communication and integrations",
            example: "X-API-Key: your-api-key-here"
        }
    ];

    const errorCodes = [
        { code: 400, message: "Bad Request", description: "Invalid request parameters or body" },
        { code: 401, message: "Unauthorized", description: "Authentication required or invalid credentials" },
        { code: 403, message: "Forbidden", description: "Insufficient permissions to access resource" },
        { code: 404, message: "Not Found", description: "Requested resource not found" },
        { code: 429, message: "Too Many Requests", description: "Rate limit exceeded" },
        { code: 500, message: "Internal Server Error", description: "Server error occurred" }
    ];

    const copyToClipboard = (text: string, identifier: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCode(identifier);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const renderCodeBlock = (code: string, language: string, identifier: string) => (
        <div className="relative bg-gray-900 dark:bg-gray-800 p-4 rounded-lg">
            <button
                onClick={() => copyToClipboard(code, identifier)}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
                {copiedCode === identifier ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="card">
                <div className="mb-6">
                    <h2 className="text-h4 mb-2">API Reference</h2>
                    <p className="text-t-secondary">Complete API documentation and integration guides</p>
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
                        <Code className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Overview</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">API introduction</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("authentication")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "authentication"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Key className="h-6 w-6 text-green-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Authentication</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Auth methods</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("endpoints")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "endpoints"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Database className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Endpoints</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">API endpoints</div>
                    </button>
                    <button
                        onClick={() => setActiveTab("errors")}
                        className={`p-4 rounded-lg border transition-colors ${
                            activeTab === "errors"
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        <Shield className="h-6 w-6 text-orange-600 mb-2" />
                        <div className="font-medium text-gray-900 dark:text-white">Error Handling</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Error codes</div>
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "overview" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Overview</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                The Mewayz API provides programmatic access to all platform features including user management, 
                                product catalog, orders, analytics, and more. Our RESTful API is designed to be simple, 
                                consistent, and developer-friendly.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Base URL</h4>
                                    <code className="text-blue-800 dark:text-blue-200 text-sm">https://api.mewayz.com</code>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">API Version</h4>
                                    <code className="text-green-800 dark:text-green-200 text-sm">v1</code>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Rate Limit</h4>
                                    <code className="text-purple-800 dark:text-purple-200 text-sm">1000 requests/hour</code>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Start Example</h4>
                                {renderCodeBlock(`// JavaScript/Node.js example
const response = await fetch('https://api.mewayz.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data.token); // Use this token for authenticated requests`, 'javascript', 'quickstart')}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "authentication" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                The Mewayz API supports multiple authentication methods to secure your requests and identify your application.
                            </p>
                            
                            <div className="space-y-6">
                                {authenticationMethods.map((method, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{method.type}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{method.description}</p>
                                        {renderCodeBlock(method.example, 'http', `auth-${index}`)}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Getting an Access Token</h4>
                                {renderCodeBlock(`// Login to get access token
curl -X POST https://api.mewayz.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'

// Response
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
}`, 'bash', 'token-example')}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "endpoints" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Endpoints</h3>
                            
                            {/* Authentication Endpoints */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Authentication</h4>
                                <div className="space-y-4">
                                    {apiEndpoints.authentication.map((endpoint, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="flex items-center mb-3">
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                    endpoint.method === "GET" ? "bg-green-100 text-green-800" :
                                                    endpoint.method === "POST" ? "bg-blue-100 text-blue-800" :
                                                    "bg-gray-100 text-gray-800"
                                                }`}>
                                                    {endpoint.method}
                                                </span>
                                                <code className="ml-3 text-sm text-gray-900 dark:text-white">{endpoint.endpoint}</code>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{endpoint.description}</p>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Parameters</h5>
                                                    <div className="space-y-1">
                                                        {endpoint.parameters.map((param, paramIndex) => (
                                                            <div key={paramIndex} className="text-sm">
                                                                <code className="text-blue-600">{param.name}</code>
                                                                <span className="text-gray-500"> ({param.type})</span>
                                                                {param.required && <span className="text-red-500"> *</span>}
                                                                <div className="text-gray-600 dark:text-gray-400 ml-4">{param.description}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Response</h5>
                                                    {renderCodeBlock(JSON.stringify(endpoint.response, null, 2), 'json', `response-${index}`)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Users Endpoints */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Users</h4>
                                <div className="space-y-4">
                                    {apiEndpoints.users.map((endpoint, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="flex items-center mb-3">
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                    endpoint.method === "GET" ? "bg-green-100 text-green-800" :
                                                    endpoint.method === "POST" ? "bg-blue-100 text-blue-800" :
                                                    "bg-gray-100 text-gray-800"
                                                }`}>
                                                    {endpoint.method}
                                                </span>
                                                <code className="ml-3 text-sm text-gray-900 dark:text-white">{endpoint.endpoint}</code>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{endpoint.description}</p>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Parameters</h5>
                                                    <div className="space-y-1">
                                                        {endpoint.parameters.map((param, paramIndex) => (
                                                            <div key={paramIndex} className="text-sm">
                                                                <code className="text-blue-600">{param.name}</code>
                                                                <span className="text-gray-500"> ({param.type})</span>
                                                                {param.required && <span className="text-red-500"> *</span>}
                                                                <div className="text-gray-600 dark:text-gray-400 ml-4">{param.description}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Response</h5>
                                                    {renderCodeBlock(JSON.stringify(endpoint.response, null, 2), 'json', `users-response-${index}`)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Products Endpoints */}
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Products</h4>
                                <div className="space-y-4">
                                    {apiEndpoints.products.map((endpoint, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <div className="flex items-center mb-3">
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                    endpoint.method === "GET" ? "bg-green-100 text-green-800" :
                                                    endpoint.method === "POST" ? "bg-blue-100 text-blue-800" :
                                                    "bg-gray-100 text-gray-800"
                                                }`}>
                                                    {endpoint.method}
                                                </span>
                                                <code className="ml-3 text-sm text-gray-900 dark:text-white">{endpoint.endpoint}</code>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{endpoint.description}</p>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Parameters</h5>
                                                    <div className="space-y-1">
                                                        {endpoint.parameters.map((param, paramIndex) => (
                                                            <div key={paramIndex} className="text-sm">
                                                                <code className="text-blue-600">{param.name}</code>
                                                                <span className="text-gray-500"> ({param.type})</span>
                                                                {param.required && <span className="text-red-500"> *</span>}
                                                                <div className="text-gray-600 dark:text-gray-400 ml-4">{param.description}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Response</h5>
                                                    {renderCodeBlock(JSON.stringify(endpoint.response, null, 2), 'json', `products-response-${index}`)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "errors" && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Error Handling</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                The API uses conventional HTTP response codes to indicate the success or failure of an API request.
                            </p>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Code</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Message</th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {errorCodes.map((error, index) => (
                                            <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                                                <td className="py-3 px-4">
                                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                        error.code >= 200 && error.code < 300 ? "bg-green-100 text-green-800" :
                                                        error.code >= 400 && error.code < 500 ? "bg-yellow-100 text-yellow-800" :
                                                        "bg-red-100 text-red-800"
                                                    }`}>
                                                        {error.code}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-sm text-gray-900 dark:text-white">{error.message}</span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{error.description}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Error Response Format</h4>
                                {renderCodeBlock(`{
  "success": false,
  "error": {
    "code": 400,
    "message": "Bad Request",
    "details": "Invalid email format"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`, 'json', 'error-format')}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Additional Resources */}
            <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">API Playground</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                            Test API endpoints interactively
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Open Playground →
                        </button>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">SDK Downloads</h4>
                        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                            Download SDKs for various languages
                        </p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Download SDKs →
                        </button>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Webhooks</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                            Set up webhooks for real-time updates
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                            Webhook Guide →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APIReference; 