/**
 * Authentication Service
 * 
 * This service handles all authentication-related operations including login, registration,
 * password management, and session management. Following enterprise-level practices with
 * comprehensive error handling, validation, and security measures.
 */

import { 
  User, 
  LoginRequest, 
  RegisterRequest, 
  AuthResponse, 
  AuthError,
  UpdateProfileRequest,
  UpdatePasswordRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ValidationResult,
  SecurityAuditLog
} from '../types';

// API endpoints
const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  PROFILE: '/api/auth/profile',
  UPDATE_PROFILE: '/api/auth/profile',
  UPDATE_PASSWORD: '/api/auth/password',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  VERIFY_EMAIL: '/api/auth/verify-email',
  RESEND_VERIFICATION: '/api/auth/resend-verification',
  TWO_FACTOR_SETUP: '/api/auth/2fa/setup',
  TWO_FACTOR_VERIFY: '/api/auth/2fa/verify',
  AUDIT_LOG: '/api/auth/audit-log'
} as const;

// HTTP status codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
} as const;

// Error codes
const ERROR_CODES = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',
  WEAK_PASSWORD: 'WEAK_PASSWORD',
  INVALID_TOKEN: 'INVALID_TOKEN',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
  TWO_FACTOR_REQUIRED: 'TWO_FACTOR_REQUIRED',
  INVALID_TWO_FACTOR_CODE: 'INVALID_TWO_FACTOR_CODE',
  EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
} as const;

/**
 * Utility functions for validation and security
 */
class AuthUtils {
  /**
   * Validates password strength
   */
  static validatePassword(password: string): ValidationResult {
    const errors: Array<{ field: string; message: string; code: string }> = [];
    
    if (password.length < 8) {
      errors.push({
        field: 'password',
        message: 'Password must be at least 8 characters long',
        code: 'PASSWORD_TOO_SHORT'
      });
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one lowercase letter',
        code: 'PASSWORD_NO_LOWERCASE'
      });
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one uppercase letter',
        code: 'PASSWORD_NO_UPPERCASE'
      });
    }
    
    if (!/(?=.*\d)/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one number',
        code: 'PASSWORD_NO_NUMBER'
      });
    }
    
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      errors.push({
        field: 'password',
        message: 'Password must contain at least one special character',
        code: 'PASSWORD_NO_SPECIAL'
      });
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validates email format
   */
  static validateEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    return {
      isValid,
      errors: isValid ? [] : [{
        field: 'email',
        message: 'Please enter a valid email address',
        code: 'INVALID_EMAIL'
      }]
    };
  }

  /**
   * Generates a secure random token
   */
  static generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Logs security events
   */
  static logSecurityEvent(event: Omit<SecurityAuditLog, 'id' | 'timestamp'>): void {
    const securityLog: SecurityAuditLog = {
      id: this.generateToken(),
      timestamp: new Date(),
      ...event
    };
    
    // In a real application, this would be sent to a logging service
    console.log('Security Event:', securityLog);
  }
}

/**
 * HTTP client for API requests
 */
class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  /**
   * Makes an HTTP request with error handling
   */
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = { ...this.defaultHeaders };
    
    // Add custom headers from options
    if (options.headers) {
      if (typeof options.headers === 'object' && !Array.isArray(options.headers)) {
        Object.assign(headers, options.headers);
      }
    }
    
    // Add authorization header if token exists
    const token = this.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Gets stored token from localStorage
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  /**
   * Stores token in localStorage
   */
  setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  /**
   * Removes token from localStorage
   */
  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}

/**
 * Authentication Service Class
 * 
 * Singleton pattern for managing authentication state and operations
 */
class AuthenticationService {
  private static instance: AuthenticationService;
  private apiClient: ApiClient;
  private currentUser: User | null = null;
  private sessionExpiry: Date | null = null;

  private constructor() {
    this.apiClient = new ApiClient();
  }

  /**
   * Gets the singleton instance
   */
  static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  /**
   * Authenticates a user with email and password
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      // Validate input
      const emailValidation = AuthUtils.validateEmail(credentials.email);
      if (!emailValidation.isValid) {
        throw new Error(emailValidation.errors[0].message);
      }

      // Log security event
      AuthUtils.logSecurityEvent({
        userId: 'unknown',
        action: 'LOGIN_ATTEMPT',
        ipAddress: 'client',
        userAgent: navigator.userAgent,
        location: 'client',
        success: false
      });

      const response = await this.apiClient.request<AuthResponse>(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        body: JSON.stringify(credentials)
      });

      // Store token and user data
      this.apiClient.setToken(response.token);
      this.currentUser = response.user;
      this.sessionExpiry = new Date(Date.now() + response.expiresIn * 1000);

      // Log successful login
      AuthUtils.logSecurityEvent({
        userId: response.user.id,
        action: 'LOGIN_SUCCESS',
        ipAddress: 'client',
        userAgent: navigator.userAgent,
        location: 'client',
        success: true
      });

      return response;
    } catch (error) {
      // Log failed login
      AuthUtils.logSecurityEvent({
        userId: 'unknown',
        action: 'LOGIN_FAILED',
        ipAddress: 'client',
        userAgent: navigator.userAgent,
        location: 'client',
        success: false,
        details: { error: error instanceof Error ? error.message : 'Unknown error' }
      });

      throw error;
    }
  }

  /**
   * Registers a new user
   */
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      // Validate input
      const emailValidation = AuthUtils.validateEmail(userData.email);
      if (!emailValidation.isValid) {
        throw new Error(emailValidation.errors[0].message);
      }

      const passwordValidation = AuthUtils.validatePassword(userData.password);
      if (!passwordValidation.isValid) {
        throw new Error(passwordValidation.errors[0].message);
      }

      if (userData.password !== userData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const response = await this.apiClient.request<AuthResponse>(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        body: JSON.stringify(userData)
      });

      // Store token and user data
      this.apiClient.setToken(response.token);
      this.currentUser = response.user;
      this.sessionExpiry = new Date(Date.now() + response.expiresIn * 1000);

      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Logs out the current user
   */
  async logout(): Promise<void> {
    try {
      if (this.currentUser) {
        await this.apiClient.request(API_ENDPOINTS.LOGOUT, {
          method: 'POST'
        });

        // Log logout event
        AuthUtils.logSecurityEvent({
          userId: this.currentUser.id,
          action: 'LOGOUT',
          ipAddress: 'client',
          userAgent: navigator.userAgent,
          location: 'client',
          success: true
        });
      }
    } catch (error) {
      // Log error but continue with local cleanup
      console.error('Logout error:', error);
    } finally {
      // Clean up local state
      this.apiClient.removeToken();
      this.currentUser = null;
      this.sessionExpiry = null;
    }
  }

  /**
   * Refreshes the authentication token
   */
  async refreshToken(): Promise<AuthResponse> {
    try {
      const response = await this.apiClient.request<AuthResponse>(API_ENDPOINTS.REFRESH, {
        method: 'POST'
      });

      // Update stored data
      this.apiClient.setToken(response.token);
      this.currentUser = response.user;
      this.sessionExpiry = new Date(Date.now() + response.expiresIn * 1000);

      return response;
    } catch (error) {
      // If refresh fails, logout user
      await this.logout();
      throw error;
    }
  }

  /**
   * Gets the current user profile
   */
  async getProfile(): Promise<User> {
    try {
      const user = await this.apiClient.request<User>(API_ENDPOINTS.PROFILE);
      this.currentUser = user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates the user profile
   */
  async updateProfile(data: UpdateProfileRequest): Promise<User> {
    try {
      const user = await this.apiClient.request<User>(API_ENDPOINTS.UPDATE_PROFILE, {
        method: 'PUT',
        body: JSON.stringify(data)
      });

      this.currentUser = user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates the user password
   */
  async updatePassword(data: UpdatePasswordRequest): Promise<void> {
    try {
      // Validate new password
      const passwordValidation = AuthUtils.validatePassword(data.newPassword);
      if (!passwordValidation.isValid) {
        throw new Error(passwordValidation.errors[0].message);
      }

      await this.apiClient.request(API_ENDPOINTS.UPDATE_PASSWORD, {
        method: 'PUT',
        body: JSON.stringify(data)
      });

      // Log password change
      if (this.currentUser) {
        AuthUtils.logSecurityEvent({
          userId: this.currentUser.id,
          action: 'PASSWORD_CHANGED',
          ipAddress: 'client',
          userAgent: navigator.userAgent,
          location: 'client',
          success: true
        });
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Initiates forgot password process
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<void> {
    try {
      const emailValidation = AuthUtils.validateEmail(data.email);
      if (!emailValidation.isValid) {
        throw new Error(emailValidation.errors[0].message);
      }

      await this.apiClient.request(API_ENDPOINTS.FORGOT_PASSWORD, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Resets password with token
   */
  async resetPassword(data: ResetPasswordRequest): Promise<void> {
    try {
      const passwordValidation = AuthUtils.validatePassword(data.password);
      if (!passwordValidation.isValid) {
        throw new Error(passwordValidation.errors[0].message);
      }

      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      await this.apiClient.request(API_ENDPOINTS.RESET_PASSWORD, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Verifies email with token
   */
  async verifyEmail(token: string): Promise<void> {
    try {
      await this.apiClient.request(API_ENDPOINTS.VERIFY_EMAIL, {
        method: 'POST',
        body: JSON.stringify({ token })
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Resends verification email
   */
  async resendVerification(email: string): Promise<void> {
    try {
      const emailValidation = AuthUtils.validateEmail(email);
      if (!emailValidation.isValid) {
        throw new Error(emailValidation.errors[0].message);
      }

      await this.apiClient.request(API_ENDPOINTS.RESEND_VERIFICATION, {
        method: 'POST',
        body: JSON.stringify({ email })
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Checks if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.currentUser !== null && this.sessionExpiry !== null && this.sessionExpiry > new Date();
  }

  /**
   * Gets the current user
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Gets the session expiry time
   */
  getSessionExpiry(): Date | null {
    return this.sessionExpiry;
  }

  /**
   * Checks if session is expired
   */
  isSessionExpired(): boolean {
    return this.sessionExpiry === null || this.sessionExpiry <= new Date();
  }

  /**
   * Gets stored token
   */
  getToken(): string | null {
    return this.apiClient.getToken();
  }
}

// Export singleton instance
export const authService = AuthenticationService.getInstance();

// Export utility functions for testing
export { AuthUtils, ApiClient, AuthenticationService }; 