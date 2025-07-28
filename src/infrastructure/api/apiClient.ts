class ApiClient {
    private baseURL: string;
    private token: string | null;

    constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
        this.token = null;
    }

    setToken(token: string) {
        this.token = token;
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(options.headers as Record<string, string>),
        };

        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `API Error: ${response.statusText}`);
        }

        return response.json();
    }

    // Auth endpoints
    async login(credentials: { email: string; password: string }): Promise<any> {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    async register(userData: { name: string; email: string; password: string; plan?: string }): Promise<any> {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    }

    async forgotPassword(email: string): Promise<any> {
        return this.request('/auth/forgotpassword', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
    }

    async resetPassword(token: string, password: string): Promise<any> {
        return this.request('/auth/resetpassword', {
            method: 'PUT',
            body: JSON.stringify({ token, password }),
        });
    }

    async logout(): Promise<any> {
        return this.request('/auth/logout', {
            method: 'POST',
        });
    }

    // User endpoints
    async getProfile(): Promise<any> {
        return this.request('/users/profile');
    }

    async updateProfile(profileData: any): Promise<any> {
        return this.request('/users/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData),
        });
    }

    async getUsers(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/users${queryString}`);
    }

    async getUserById(id: string): Promise<any> {
        return this.request(`/users/${id}`);
    }

    async updateUser(id: string, userData: any): Promise<any> {
        return this.request(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData),
        });
    }

    async deleteUser(id: string): Promise<any> {
        return this.request(`/users/${id}`, {
            method: 'DELETE',
        });
    }

    // Product endpoints
    async getProducts(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/products${queryString}`);
    }

    async getProductById(id: string): Promise<any> {
        return this.request(`/products/${id}`);
    }

    async createProduct(productData: any): Promise<any> {
        return this.request('/products', {
            method: 'POST',
            body: JSON.stringify(productData),
        });
    }

    async updateProduct(id: string, productData: any): Promise<any> {
        return this.request(`/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(productData),
        });
    }

    async deleteProduct(id: string): Promise<any> {
        return this.request(`/products/${id}`, {
            method: 'DELETE',
        });
    }

    // Customer endpoints
    async getCustomers(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/customers${queryString}`);
    }

    async getCustomerById(id: string): Promise<any> {
        return this.request(`/customers/${id}`);
    }

    async createCustomer(customerData: any): Promise<any> {
        return this.request('/customers', {
            method: 'POST',
            body: JSON.stringify(customerData),
        });
    }

    async updateCustomer(id: string, customerData: any): Promise<any> {
        return this.request(`/customers/${id}`, {
            method: 'PUT',
            body: JSON.stringify(customerData),
        });
    }

    async deleteCustomer(id: string): Promise<any> {
        return this.request(`/customers/${id}`, {
            method: 'DELETE',
        });
    }

    // Order endpoints
    async getOrders(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/orders${queryString}`);
    }

    async getOrderById(id: string): Promise<any> {
        return this.request(`/orders/${id}`);
    }

    async createOrder(orderData: any): Promise<any> {
        return this.request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    }

    async updateOrder(id: string, orderData: any): Promise<any> {
        return this.request(`/orders/${id}`, {
            method: 'PUT',
            body: JSON.stringify(orderData),
        });
    }

    async deleteOrder(id: string): Promise<any> {
        return this.request(`/orders/${id}`, {
            method: 'DELETE',
        });
    }

    // Lead endpoints
    async getLeads(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/leads${queryString}`);
    }

    async getLeadById(id: string): Promise<any> {
        return this.request(`/leads/${id}`);
    }

    async createLead(leadData: any): Promise<any> {
        return this.request('/leads', {
            method: 'POST',
            body: JSON.stringify(leadData),
        });
    }

    async updateLead(id: string, leadData: any): Promise<any> {
        return this.request(`/leads/${id}`, {
            method: 'PUT',
            body: JSON.stringify(leadData),
        });
    }

    async deleteLead(id: string): Promise<any> {
        return this.request(`/leads/${id}`, {
            method: 'DELETE',
        });
    }

    // Pricing endpoints
    async getPricing(): Promise<any> {
        return this.request('/pricing');
    }

    // FAQ endpoints
    async getFaqs(): Promise<any> {
        return this.request('/faqs');
    }

    // Analytics endpoints
    async getAnalytics(type: string, params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/analytics/${type}${queryString}`);
    }

    // System endpoints
    async getSystemStatus(): Promise<any> {
        return this.request('/system/status');
    }

    async getSystemStats(): Promise<any> {
        return this.request('/system/stats');
    }

    // Public content methods
    async getPublicStats(): Promise<any> {
        return this.request('/public/stats');
    }

    async getPublicContent(key: string, params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/public/content/${key}${queryString}`);
    }

    async getPublicTestimonials(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/public/testimonials${queryString}`);
    }

    async submitTestimonial(testimonialData: any): Promise<any> {
        return this.request('/public/testimonials', {
            method: 'POST',
            body: JSON.stringify(testimonialData),
        });
    }

    async getPublicMilestones(params?: any): Promise<any> {
        const queryString = params ? `?${new URLSearchParams(params)}` : '';
        return this.request(`/public/milestones${queryString}`);
    }

    async getCompanyStats(): Promise<any> {
        return this.request('/public/company/stats');
    }

    async getCompanyTeam(): Promise<any> {
        return this.request('/public/company/team');
    }

    async getLiveAnalytics(): Promise<any> {
        return this.request('/public/analytics/live');
    }

    async getPublicSystemStatus(): Promise<any> {
        return this.request('/public/status');
    }

    async searchPublicContent(params: any): Promise<any> {
        const queryString = `?${new URLSearchParams(params)}`;
        return this.request(`/public/search${queryString}`);
    }

    // Content management methods (admin only)
    async updatePublicContent(key: string, content: any): Promise<any> {
        return this.request(`/admin/content/${key}`, {
            method: 'PUT',
            body: JSON.stringify(content),
        });
    }

    // File upload
    async uploadFile(file: File, type: string = 'general'): Promise<any> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        const headers: Record<string, string> = {};
        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`;
        }

        const response = await fetch(`${this.baseURL}/upload`, {
            method: 'POST',
            headers,
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Upload Error: ${response.statusText}`);
        }

        return response.json();
    }
}

export const apiClient = new ApiClient(); 