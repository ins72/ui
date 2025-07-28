import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'creator' | 'affiliate';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  creator: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  _id: string;
  amount: number;
  type: 'purchase' | 'refund' | 'payout';
  status: 'pending' | 'completed' | 'failed';
  userId: string;
  productId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  users: {
    total: number;
    active: number;
    newThisMonth: number;
  };
  products: {
    total: number;
  };
  transactions: {
    total: number;
    revenue: number;
  };
  creators: {
    total: number;
  };
  affiliates: {
    total: number;
  };
  system: {
    cpu: number;
    memory: {
      total: number;
      free: number;
      used: number;
    };
    uptime: number;
  };
}

export interface SystemHealth {
  database: string;
  memory: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
  };
  cpu: {
    load1: number;
    load5: number;
    load15: number;
  };
  uptime: number;
  nodeVersion: string;
  platform: string;
}

export interface RecentActivity {
  type: string;
  action: string;
  description: string;
  time: string;
  icon: string;
}

export interface SystemAlert {
  level: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  time: string;
}

export interface SystemSettings {
  [key: string]: any;
}

export interface SecurityEvent {
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  ip: string;
  userAgent: string;
}

export interface AnalyticsOverview {
  users: {
    total: number;
    newThisMonth: number;
    newThisWeek: number;
  };
  revenue: {
    total: number;
    thisMonth: number;
    thisWeek: number;
  };
  transactions: {
    total: number;
    thisMonth: number;
    thisWeek: number;
  };
}

export interface DatabaseStats {
  database: {
    name: string;
    collections: number;
    views: number;
    objects: number;
    avgObjSize: number;
    dataSize: number;
    storageSize: number;
    indexes: number;
    indexSize: number;
  };
  collections: Array<{
    name: string;
    count: number;
    size: number;
    avgObjSize: number;
  }>;
}

export interface SystemStatus {
  service: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastCheck: string;
  description: string;
  icon: string;
  incidents: Array<{
    type: string;
    title: string;
    description: string;
    startTime: string;
    endTime?: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
  }>;
  metrics: {
    cpu: number;
    memory: number;
    disk: number;
    network: number;
  };
}

export interface OverallSystemStatus {
  overall: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident: string;
  services: SystemStatus[];
}

export interface Maintenance {
  _id: string;
  title: string;
  description: string;
  type: 'scheduled' | 'emergency' | 'upgrade' | 'security' | 'performance';
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  severity: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  endTime: string;
  estimatedDuration: number;
  affectedServices: string[];
  impact: 'none' | 'minimal' | 'moderate' | 'significant' | 'complete';
  updates: Array<{
    type: string;
    message: string;
    timestamp: string;
  }>;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
    webhook: boolean;
  };
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  isPublic: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContentFile {
  _id: string;
  filename: string;
  originalName: string;
  path: string;
  url: string;
  mimeType: string;
  size: number;
  type: 'image' | 'video' | 'audio' | 'document' | 'archive' | 'code' | 'spreadsheet' | 'presentation' | 'other';
  extension: string;
  folder: string;
  tags: string[];
  metadata: {
    width?: number;
    height?: number;
    duration?: number;
    pages?: number;
    encoding?: string;
    bitrate?: number;
    resolution?: string;
  };
  permissions: {
    public: boolean;
    roles: string[];
    users: string[];
  };
  uploader: {
    _id: string;
    name: string;
    email: string;
  };
  downloads: number;
  views: number;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContentOverview {
  files: {
    total: number;
    byType: Record<string, number>;
  };
  storage: {
    total: string;
    unit: string;
  };
  users: {
    active: number;
  };
  uploads: {
    recent: ContentFile[];
  };
}

export interface PerformanceMetric {
  _id: string;
  metric: string;
  value: number;
  unit: string;
  target: number;
  threshold: {
    warning: number;
    critical: number;
  };
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  context: {
    page?: string;
    endpoint?: string;
    service?: string;
    userAgent?: string;
    ip?: string;
  };
  timestamp: string;
  period: 'realtime' | 'hourly' | 'daily' | 'weekly' | 'monthly';
  isActive: boolean;
}

export interface PerformanceOverview {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

// API Service Class
class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          this.clearAuthToken();
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth token management
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  private setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  private clearAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }

  // Generic CRUD operations
  async get<T>(endpoint: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.patch(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response?.data?.message) {
      return new Error(error.response.data.message);
    }
    if (error.message) {
      return new Error(error.message);
    }
    return new Error('An unexpected error occurred');
  }

  // Authentication
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
    const response = await this.post('/auth/login', { email, password });
    if (response.success && response.data?.token) {
      this.setAuthToken(response.data.token);
    }
    return response;
  }

  async logout(): Promise<void> {
    try {
      await this.post('/auth/logout');
    } finally {
      this.clearAuthToken();
    }
  }

  async register(userData: { name: string; email: string; password: string }): Promise<ApiResponse<{ token: string; user: User }>> {
    const response = await this.post('/auth/register', userData);
    if (response.success && response.data?.token) {
      this.setAuthToken(response.data.token);
    }
    return response;
  }

  // Admin Dashboard APIs
  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    return this.get('/admin/dashboard');
  }

  async getSystemHealth(): Promise<ApiResponse<SystemHealth>> {
    return this.get('/admin/system-health');
  }

  async getRecentActivity(limit?: number): Promise<ApiResponse<RecentActivity[]>> {
    return this.get('/admin/recent-activity', { limit });
  }

  async getSystemAlerts(): Promise<ApiResponse<SystemAlert[]>> {
    return this.get('/admin/system-alerts');
  }

  // User Management APIs
  async getAllUsers(params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    role?: string;
  }): Promise<PaginatedResponse<User>> {
    return this.get('/admin/users', params);
  }

  async getUserById(id: string): Promise<ApiResponse<User>> {
    return this.get(`/admin/users/${id}`);
  }

  async createUser(userData: {
    name: string;
    email: string;
    password: string;
    role?: string;
    status?: string;
  }): Promise<ApiResponse<User>> {
    return this.post('/admin/users', userData);
  }

  async updateUser(id: string, userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.put(`/admin/users/${id}`, userData);
  }

  async deleteUser(id: string): Promise<ApiResponse<void>> {
    return this.delete(`/admin/users/${id}`);
  }

  async updateUserStatus(id: string, status: string): Promise<ApiResponse<User>> {
    return this.put(`/admin/users/${id}/status`, { status });
  }

  async updateUserRole(id: string, role: string): Promise<ApiResponse<User>> {
    return this.put(`/admin/users/${id}/role`, { role });
  }

  // System Settings APIs
  async getSystemSettings(): Promise<ApiResponse<SystemSettings>> {
    return this.get('/admin/settings');
  }

  async updateSystemSettings(settings: SystemSettings): Promise<ApiResponse<void>> {
    return this.put('/admin/settings', settings);
  }

  // Security APIs
  async getSecurityEvents(limit?: number): Promise<ApiResponse<SecurityEvent[]>> {
    return this.get('/admin/security/events', { limit });
  }

  async blockIP(ip: string): Promise<ApiResponse<void>> {
    return this.post('/admin/security/block-ip', { ip });
  }

  async unblockIP(ip: string): Promise<ApiResponse<void>> {
    return this.delete(`/admin/security/unblock-ip/${ip}`);
  }

  // Analytics APIs
  async getAnalyticsOverview(): Promise<ApiResponse<AnalyticsOverview>> {
    return this.get('/admin/analytics/overview');
  }

  // Database APIs
  async getDatabaseStats(): Promise<ApiResponse<DatabaseStats>> {
    return this.get('/admin/database/stats');
  }

  // Content APIs
  async getContentOverview(): Promise<ApiResponse<ContentOverview>> {
    return this.get('/admin/content/overview');
  }

  // System Status Methods
  async getSystemStatuses(): Promise<ApiResponse<SystemStatus[]>> {
    return this.get<SystemStatus[]>('/system/status');
  }

  async getOverallSystemStatus(): Promise<ApiResponse<OverallSystemStatus>> {
    return this.get<OverallSystemStatus>('/system/status/overall');
  }

  async getServiceStatus(service: string): Promise<ApiResponse<SystemStatus>> {
    return this.get<SystemStatus>(`/system/status/${service}`);
  }

  async updateSystemStatus(data: Partial<SystemStatus>): Promise<ApiResponse<SystemStatus>> {
    return this.put<SystemStatus>('/system/status', data);
  }

  async addSystemIncident(service: string, incident: any): Promise<ApiResponse<SystemStatus>> {
    return this.post<SystemStatus>(`/system/status/${service}/incidents`, incident);
  }

  async resolveSystemIncident(service: string, incidentId: string): Promise<ApiResponse<SystemStatus>> {
    return this.put<SystemStatus>(`/system/status/${service}/incidents/${incidentId}/resolve`, {});
  }

  // Maintenance Methods
  async getAllMaintenance(params?: any): Promise<PaginatedResponse<Maintenance>> {
    return this.get<Maintenance[]>('/system/maintenance', params);
  }

  async getCurrentMaintenance(): Promise<ApiResponse<Maintenance[]>> {
    return this.get<Maintenance[]>('/system/maintenance/current');
  }

  async getUpcomingMaintenance(limit?: number): Promise<ApiResponse<Maintenance[]>> {
    return this.get<Maintenance[]>('/system/maintenance/upcoming', { limit });
  }

  async createMaintenance(data: Partial<Maintenance>): Promise<ApiResponse<Maintenance>> {
    return this.post<Maintenance>('/system/maintenance', data);
  }

  async updateMaintenance(id: string, data: Partial<Maintenance>): Promise<ApiResponse<Maintenance>> {
    return this.put<Maintenance>(`/system/maintenance/${id}`, data);
  }

  async addMaintenanceUpdate(id: string, update: any): Promise<ApiResponse<Maintenance>> {
    return this.post<Maintenance>(`/system/maintenance/${id}/updates`, update);
  }

  async deleteMaintenance(id: string): Promise<ApiResponse<void>> {
    return this.delete<void>(`/system/maintenance/${id}`);
  }

  // Content Methods
  async getAllContentFiles(params?: any): Promise<PaginatedResponse<ContentFile>> {
    return this.get<ContentFile[]>('/content/files', params);
  }

  async getContentOverview(): Promise<ApiResponse<ContentOverview>> {
    return this.get<ContentOverview>('/content/overview');
  }

  async getContentFile(id: string): Promise<ApiResponse<ContentFile>> {
    return this.get<ContentFile>(`/content/files/${id}`);
  }

  async createContentFile(data: Partial<ContentFile>): Promise<ApiResponse<ContentFile>> {
    return this.post<ContentFile>('/content/files', data);
  }

  async updateContentFile(id: string, data: Partial<ContentFile>): Promise<ApiResponse<ContentFile>> {
    return this.put<ContentFile>(`/content/files/${id}`, data);
  }

  async deleteContentFile(id: string): Promise<ApiResponse<void>> {
    return this.delete<void>(`/content/files/${id}`);
  }

  async incrementContentDownload(id: string): Promise<ApiResponse<ContentFile>> {
    return this.post<ContentFile>(`/content/files/${id}/download`, {});
  }

  async incrementContentView(id: string): Promise<ApiResponse<ContentFile>> {
    return this.post<ContentFile>(`/content/files/${id}/view`, {});
  }

  // Performance Methods
  async getPerformanceMetrics(params?: any): Promise<ApiResponse<PerformanceMetric[]>> {
    return this.get<PerformanceMetric[]>('/performance/metrics', params);
  }

  async getPerformanceOverview(): Promise<ApiResponse<PerformanceOverview[]>> {
    return this.get<PerformanceOverview[]>('/performance/overview');
  }

  async getPerformanceMetricsByType(type: string, params?: any): Promise<ApiResponse<PerformanceMetric[]>> {
    return this.get<PerformanceMetric[]>(`/performance/metrics/${type}`, params);
  }

  async getPerformanceTrends(params?: any): Promise<ApiResponse<any[]>> {
    return this.get<any[]>('/performance/trends', params);
  }

  async createPerformanceMetric(data: Partial<PerformanceMetric>): Promise<ApiResponse<PerformanceMetric>> {
    return this.post<PerformanceMetric>('/performance/metrics', data);
  }

  async updatePerformanceMetric(id: string, data: Partial<PerformanceMetric>): Promise<ApiResponse<PerformanceMetric>> {
    return this.put<PerformanceMetric>(`/performance/metrics/${id}`, data);
  }

  async deletePerformanceMetric(id: string): Promise<ApiResponse<void>> {
    return this.delete<void>(`/performance/metrics/${id}`);
  }

  // Generic Entity APIs (for existing models)
  async getEntities<T>(
    entity: string,
    params?: {
      page?: number;
      limit?: number;
      search?: string;
      filter?: any;
    }
  ): Promise<PaginatedResponse<T>> {
    return this.get(`/${entity}/list`, params);
  }

  async getEntity<T>(entity: string, id: string): Promise<ApiResponse<T>> {
    return this.get(`/${entity}/read/${id}`);
  }

  async createEntity<T>(entity: string, data: any): Promise<ApiResponse<T>> {
    return this.post(`/${entity}/create`, data);
  }

  async updateEntity<T>(entity: string, id: string, data: any): Promise<ApiResponse<T>> {
    return this.patch(`/${entity}/update/${id}`, data);
  }

  async deleteEntity<T>(entity: string, id: string): Promise<ApiResponse<T>> {
    return this.delete(`/${entity}/delete/${id}`);
  }

  async searchEntities<T>(entity: string, query: string): Promise<ApiResponse<T[]>> {
    return this.get(`/${entity}/search`, { q: query });
  }

  async filterEntities<T>(entity: string, filter: any): Promise<ApiResponse<T[]>> {
    return this.get(`/${entity}/filter`, filter);
  }

  async getEntitySummary<T>(entity: string): Promise<ApiResponse<T>> {
    return this.get(`/${entity}/summary`);
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export types
export type {
  ApiResponse,
  PaginatedResponse,
  User,
  Product,
  Transaction,
  DashboardStats,
  SystemHealth,
  RecentActivity,
  SystemAlert,
  SystemSettings,
  SecurityEvent,
  AnalyticsOverview,
  DatabaseStats,
  ContentOverview,
  SystemStatus,
  OverallSystemStatus,
  Maintenance,
  ContentFile,
  PerformanceMetric,
  PerformanceOverview,
}; 