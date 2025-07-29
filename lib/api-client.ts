interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  status?: number;
}

interface ApiRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

class ApiClient {
  private baseURL: string;
  private defaultTimeout: number = 30000; // 30 seconds

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:601';
  }

  private async request<T>(endpoint: string, config: ApiRequestConfig = {}): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = this.defaultTimeout
    } = config;

    const url = endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`;
    
    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers
    };

    // Add authentication token if available
    const token = this.getAuthToken();
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
        credentials: 'include'
      });

      clearTimeout(timeoutId);

      const responseData = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: responseData.message || `HTTP ${response.status}: ${response.statusText}`,
          error: responseData.error || 'Request failed',
          status: response.status
        };
      }

      return {
        success: true,
        data: responseData.data || responseData,
        status: response.status
      };

    } catch (error: any) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timeout',
          error: 'TIMEOUT'
        };
      }

      return {
        success: false,
        message: error.message || 'Network error',
        error: 'NETWORK_ERROR'
      };
    }
  }

  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  }

  // Generic HTTP methods
  async get<T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any, config?: Omit<ApiRequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body: data });
  }

  async put<T>(endpoint: string, data?: any, config?: Omit<ApiRequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body: data });
  }

  async patch<T>(endpoint: string, data?: any, config?: Omit<ApiRequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body: data });
  }

  async delete<T>(endpoint: string, config?: Omit<ApiRequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  // Authentication methods
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> {
    const response = await this.post<{ token: string; user: any }>('/api/v1/auth/login', { email, password });
    
    if (response.success && response.data?.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    
    return response;
  }

  async logout(): Promise<ApiResponse> {
    try {
      await this.post('/api/v1/auth/logout');
    } catch (error) {
      // Continue with logout even if API call fails
    } finally {
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
    }
    
    return { success: true };
  }

  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    const response = await this.post<{ token: string }>('/api/v1/auth/refresh');
    
    if (response.success && response.data?.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    
    return response;
  }

  // User management
  async getCurrentUser(): Promise<ApiResponse<any>> {
    return this.get('/api/v1/auth/me');
  }

  async updateProfile(data: any): Promise<ApiResponse<any>> {
    return this.put('/api/v1/auth/profile', data);
  }

  // Blog posts
  async getBlogPosts(params?: { category?: string; page?: number; limit?: number }): Promise<ApiResponse<any[]>> {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const endpoint = `/api/v1/blog/posts${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.get(endpoint);
  }

  async getBlogPost(id: string): Promise<ApiResponse<any>> {
    return this.get(`/api/v1/blog/posts/${id}`);
  }

  async createBlogPost(data: any): Promise<ApiResponse<any>> {
    return this.post('/api/v1/blog/posts', data);
  }

  async updateBlogPost(id: string, data: any): Promise<ApiResponse<any>> {
    return this.put(`/api/v1/blog/posts/${id}`, data);
  }

  async deleteBlogPost(id: string): Promise<ApiResponse> {
    return this.delete(`/api/v1/blog/posts/${id}`);
  }

  // Products
  async getProducts(params?: { category?: string; status?: string; page?: number; limit?: number }): Promise<ApiResponse<any[]>> {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.status) queryParams.append('status', params.status);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const endpoint = `/api/v1/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.get(endpoint);
  }

  async getProduct(id: string): Promise<ApiResponse<any>> {
    return this.get(`/api/v1/products/${id}`);
  }

  async createProduct(data: any): Promise<ApiResponse<any>> {
    return this.post('/api/v1/products', data);
  }

  async updateProduct(id: string, data: any): Promise<ApiResponse<any>> {
    return this.put(`/api/v1/products/${id}`, data);
  }

  async deleteProduct(id: string): Promise<ApiResponse> {
    return this.delete(`/api/v1/products/${id}`);
  }

  // Customers
  async getCustomers(params?: { status?: string; page?: number; limit?: number }): Promise<ApiResponse<any[]>> {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.append('status', params.status);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const endpoint = `/api/v1/customers${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.get(endpoint);
  }

  async getCustomer(id: string): Promise<ApiResponse<any>> {
    return this.get(`/api/v1/customers/${id}`);
  }

  async createCustomer(data: any): Promise<ApiResponse<any>> {
    return this.post('/api/v1/customers', data);
  }

  async updateCustomer(id: string, data: any): Promise<ApiResponse<any>> {
    return this.put(`/api/v1/customers/${id}`, data);
  }

  async deleteCustomer(id: string): Promise<ApiResponse> {
    return this.delete(`/api/v1/customers/${id}`);
  }

  // Analytics
  async getAnalytics(period?: string): Promise<ApiResponse<any>> {
    const endpoint = `/api/v1/analytics${period ? `?period=${period}` : ''}`;
    return this.get(endpoint);
  }

  // Settings
  async getSettings(): Promise<ApiResponse<any>> {
    return this.get('/api/v1/settings');
  }

  async updateSettings(data: any): Promise<ApiResponse<any>> {
    return this.put('/api/v1/settings', data);
  }

  // File upload
  async uploadFile(file: File, type: 'image' | 'document' | 'video' = 'image'): Promise<ApiResponse<{ url: string; filename: string }>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await fetch(`${this.baseURL}/api/v1/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${this.getAuthToken()}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Upload failed',
        error: data.error || 'UPLOAD_ERROR'
      };
    }

    return {
      success: true,
      data: data.data
    };
  }
}

export const apiClient = new ApiClient(); 