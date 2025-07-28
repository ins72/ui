import { apiClient } from '@/infrastructure/api/apiClient';

// Auth API functions
export const authAPI = {
    login: async (credentials: { email: string; password: string }) => {
        return apiClient.login(credentials);
    },

    register: async (userData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => {
        return apiClient.register(userData);
    },

    forgotPassword: async (email: string) => {
        return apiClient.forgotPassword(email);
    },

    resetPassword: async (token: string, password: string) => {
        return apiClient.resetPassword(token, password);
    },

    logout: async () => {
        return apiClient.logout();
    },

    getProfile: async () => {
        return apiClient.getProfile();
    },

    updateProfile: async (profileData: any) => {
        return apiClient.updateProfile(profileData);
    },

    refreshToken: async () => {
        return apiClient.refreshToken();
    }
};

// User API functions
export const userAPI = {
    getUsers: async (params?: any) => {
        return apiClient.getUsers(params);
    },

    getUserById: async (id: string) => {
        return apiClient.getUserById(id);
    },

    updateUser: async (id: string, userData: any) => {
        return apiClient.updateUser(id, userData);
    },

    deleteUser: async (id: string) => {
        return apiClient.deleteUser(id);
    }
};

// Product API functions
export const productAPI = {
    getProducts: async (params?: any) => {
        return apiClient.getProducts(params);
    },

    getProductById: async (id: string) => {
        return apiClient.getProductById(id);
    },

    createProduct: async (productData: any) => {
        return apiClient.createProduct(productData);
    },

    updateProduct: async (id: string, productData: any) => {
        return apiClient.updateProduct(id, productData);
    },

    deleteProduct: async (id: string) => {
        return apiClient.deleteProduct(id);
    }
};

// Customer API functions
export const customerAPI = {
    getCustomers: async (params?: any) => {
        return apiClient.getCustomers(params);
    },

    getCustomerById: async (id: string) => {
        return apiClient.getCustomerById(id);
    },

    createCustomer: async (customerData: any) => {
        return apiClient.createCustomer(customerData);
    },

    updateCustomer: async (id: string, customerData: any) => {
        return apiClient.updateCustomer(id, customerData);
    },

    deleteCustomer: async (id: string) => {
        return apiClient.deleteCustomer(id);
    }
};

// Order API functions
export const orderAPI = {
    getOrders: async (params?: any) => {
        return apiClient.getOrders(params);
    },

    getOrderById: async (id: string) => {
        return apiClient.getOrderById(id);
    },

    createOrder: async (orderData: any) => {
        return apiClient.createOrder(orderData);
    },

    updateOrder: async (id: string, orderData: any) => {
        return apiClient.updateOrder(id, orderData);
    },

    deleteOrder: async (id: string) => {
        return apiClient.deleteOrder(id);
    }
};

// Lead API functions
export const leadAPI = {
    getLeads: async (params?: any) => {
        return apiClient.getLeads(params);
    },

    getLeadById: async (id: string) => {
        return apiClient.getLeadById(id);
    },

    createLead: async (leadData: any) => {
        return apiClient.createLead(leadData);
    },

    updateLead: async (id: string, leadData: any) => {
        return apiClient.updateLead(id, leadData);
    },

    deleteLead: async (id: string) => {
        return apiClient.deleteLead(id);
    }
};

// Public API functions
export const publicAPI = {
    getPublicStats: async () => {
        return apiClient.getPublicStats();
    },

    getPublicContent: async (key: string, params?: any) => {
        return apiClient.getPublicContent(key, params);
    },

    getPublicTestimonials: async (params?: any) => {
        return apiClient.getPublicTestimonials(params);
    },

    submitTestimonial: async (testimonialData: any) => {
        return apiClient.submitTestimonial(testimonialData);
    },

    getPublicMilestones: async (params?: any) => {
        return apiClient.getPublicMilestones(params);
    },

    getCompanyStats: async () => {
        return apiClient.getCompanyStats();
    },

    getCompanyTeam: async () => {
        return apiClient.getCompanyTeam();
    },

    getLiveAnalytics: async () => {
        return apiClient.getLiveAnalytics();
    },

    getPublicSystemStatus: async () => {
        return apiClient.getPublicSystemStatus();
    },

    searchPublicContent: async (params: any) => {
        return apiClient.searchPublicContent(params);
    }
};

// Pricing API functions
export const pricingAPI = {
    getPricingPlans: async () => {
        return apiClient.getPricingPlans();
    },

    getPricingPlanById: async (id: string) => {
        return apiClient.getPricingPlanById(id);
    },

    createPricingPlan: async (planData: any) => {
        return apiClient.createPricingPlan(planData);
    },

    updatePricingPlan: async (id: string, planData: any) => {
        return apiClient.updatePricingPlan(id, planData);
    },

    deletePricingPlan: async (id: string) => {
        return apiClient.deletePricingPlan(id);
    }
};

// FAQ API functions
export const faqAPI = {
    getFaqs: async (params?: any) => {
        return apiClient.getFaqs(params);
    },

    getFaqById: async (id: string) => {
        return apiClient.getFaqById(id);
    },

    createFaq: async (faqData: any) => {
        return apiClient.createFaq(faqData);
    },

    updateFaq: async (id: string, faqData: any) => {
        return apiClient.updateFaq(id, faqData);
    },

    deleteFaq: async (id: string) => {
        return apiClient.deleteFaq(id);
    }
};

// Analytics API functions
export const analyticsAPI = {
    getAnalytics: async (params?: any) => {
        return apiClient.getAnalytics(params);
    },

    getDashboardStats: async () => {
        return apiClient.getDashboardStats();
    },

    getRevenueAnalytics: async (params?: any) => {
        return apiClient.getRevenueAnalytics(params);
    },

    getUserAnalytics: async (params?: any) => {
        return apiClient.getUserAnalytics(params);
    },

    getProductAnalytics: async (params?: any) => {
        return apiClient.getProductAnalytics(params);
    }
};

// System API functions
export const systemAPI = {
    getSystemStatus: async () => {
        return apiClient.getSystemStatus();
    },

    getSystemStats: async () => {
        return apiClient.getSystemStats();
    },

    uploadFile: async (file: File, type: string) => {
        return apiClient.uploadFile(file, type);
    }
};

export default {
    auth: authAPI,
    user: userAPI,
    product: productAPI,
    customer: customerAPI,
    order: orderAPI,
    lead: leadAPI,
    public: publicAPI,
    pricing: pricingAPI,
    faq: faqAPI,
    analytics: analyticsAPI,
    system: systemAPI
}; 