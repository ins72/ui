/**
 * Authentication Domain Types
 * 
 * This file contains all TypeScript types and interfaces for the authentication domain.
 * Following enterprise-level practices with comprehensive documentation and type safety.
 */

// Authentication status enum
export enum AuthStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  ERROR = 'error'
}

// User roles enum
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  CREATOR = 'creator',
  MODERATOR = 'moderator'
}

// Subscription plans enum
export enum SubscriptionPlan {
  FREE = 'free',
  PRO = 'pro',
  ENTERPRISE = 'enterprise'
}

// Account status enum
export enum AccountStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PENDING = 'pending',
  INACTIVE = 'inactive'
}

// User profile interface
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  preferences?: {
    language: string;
    timezone: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    theme: 'light' | 'dark' | 'auto';
  };
}

// User preferences interface
export interface UserPreferences {
  language: string;
  timezone: string;
  dateFormat: string;
  currency: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showEmail: boolean;
    showLocation: boolean;
  };
  theme: {
    mode: 'light' | 'dark' | 'auto';
    primaryColor: string;
    accentColor: string;
  };
}

// User analytics interface
export interface UserAnalytics {
  lastLogin: Date;
  loginCount: number;
  totalSessions: number;
  averageSessionDuration: number;
  devices: Array<{
    id: string;
    name: string;
    type: 'desktop' | 'mobile' | 'tablet';
    lastUsed: Date;
  }>;
  locations: Array<{
    country: string;
    city: string;
    lastUsed: Date;
    count: number;
  }>;
  revenue: {
    total: number;
    monthly: number;
    currency: string;
  };
}

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan: SubscriptionPlan;
  status: AccountStatus;
  profile: UserProfile;
  preferences: UserPreferences;
  analytics: UserAnalytics;
  security: {
    twoFactorEnabled: boolean;
    lastPasswordChange: Date;
    failedLoginAttempts: number;
    lockedUntil?: Date;
  };
  verification: {
    emailVerified: boolean;
    phoneVerified: boolean;
    emailVerificationToken?: string;
    phoneVerificationCode?: string;
  };
  billing: {
    plan: SubscriptionPlan;
    nextBillingDate: Date;
    paymentMethod?: {
      type: 'card' | 'paypal' | 'bank';
      last4?: string;
      brand?: string;
    };
    invoices: Array<{
      id: string;
      amount: number;
      currency: string;
      status: 'paid' | 'pending' | 'failed';
      date: Date;
    }>;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Authentication request interfaces
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  marketingConsent?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  twoFactorCode?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateProfileRequest {
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Authentication response interfaces
export interface AuthResponse {
  success: boolean;
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, any>;
}

// Authentication context types
export interface AuthState {
  user: User | null;
  status: AuthStatus;
  error: AuthError | null;
  sessionExpiry: Date | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthActions {
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  updateProfile: (data: UpdateProfileRequest) => Promise<void>;
  updatePassword: (data: UpdatePasswordRequest) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (data: ResetPasswordRequest) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  clearError: () => void;
}

export interface AuthContextType extends AuthState, AuthActions {}

// Validation types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Security types
export interface SecurityAuditLog {
  id: string;
  userId: string;
  action: string;
  ipAddress: string;
  userAgent: string;
  location: string;
  timestamp: Date;
  success: boolean;
  details?: Record<string, any>;
}

export interface TwoFactorSetup {
  secret: string;
  qrCode: string;
  backupCodes: string[];
  isEnabled: boolean;
}

// Token types
export interface TokenPayload {
  userId: string;
  email: string;
  role: UserRole;
  plan: SubscriptionPlan;
  iat: number;
  exp: number;
}

export interface RefreshTokenPayload {
  userId: string;
  tokenId: string;
  iat: number;
  exp: number;
}

// Session types
export interface Session {
  id: string;
  userId: string;
  token: string;
  refreshToken: string;
  ipAddress: string;
  userAgent: string;
  location: string;
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
}

// Permission types
export interface Permission {
  id: string;
  name: string;
  description: string;
  resource: string;
  action: string;
}

export interface Role {
  id: string;
  name: UserRole;
  description: string;
  permissions: Permission[];
  isDefault: boolean;
} 