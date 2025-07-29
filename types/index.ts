import React from "react";
// Comprehensive TypeScript interfaces for all data types

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  status: 'draft' | 'scheduled' | 'released' | 'archived';
  userId: string;
  sales: number;
  views: number;
  likes: number;
  commentsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  userId: string;
  totalSpent: number;
  purchases: number;
  lastPurchase?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'sale' | 'refund' | 'payout';
  status: 'pending' | 'completed' | 'failed';
  userId: string;
  productId?: string;
  customerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  productId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  userId: string;
  customerId: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  type: 'purchase' | 'comment' | 'like' | 'refund' | 'payout';
  message: string;
  userId: string;
  productId?: string;
  customerId?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Income {
  id: string;
  amount: number;
  type: 'revenue' | 'commission' | 'bonus';
  source: string;
  date: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  percentage: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChartData {
  id: string;
  name: string;
  value: number;
  type: 'balance' | 'productView' | 'sales' | 'traffic';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActiveTime {
  id: string;
  hour: number;
  activity: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Promote {
  id: string;
  title: string;
  value: string;
  icon: string;
  percentage: number;
  tooltip: string;
  newCustomers: number;
  productReached: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payout {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  method: 'bank' | 'paypal' | 'stripe';
  userId: string;
  processedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Refund {
  id: string;
  amount: number;
  reason: string;
  status: 'pending' | 'completed' | 'rejected';
  userId: string;
  productId: string;
  customerId: string;
  processedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Statement {
  id: string;
  period: 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  totalEarnings: number;
  totalSales: number;
  totalCustomers: number;
  totalProducts: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Creator {
  id: string;
  login: string;
  details: string;
  avatar: string;
  isOnline: boolean;
  label: string;
  tags: string;
  time: string;
  rating: number;
  items: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingPlan {
  id: string;
  title: string;
  percentage?: number;
  description: string;
  features: string;
  isActive: boolean;
  isRecommended: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FAQ {
  id: string;
  category: string;
  title: string;
  content: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AffiliateData {
  id: string;
  affiliateCode: string;
  commissionRate: number;
  totalEarnings: number;
  totalReferrals: number;
  activeReferrals: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
  status?: string;
  category?: string;
  tags?: string;
  startDate?: string;
  endDate?: string;
  productId?: string;
  date?: string;
}

export interface PaginationResponse {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface ApiResponse<T = any> {
  data?: T;
  pagination?: PaginationResponse;
  error?: string;
}

// Component prop types
export interface ComponentProps {
  title?: string;
  items?: any[];
  loading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
  onDelete?: (id: string) => Promise<void>;
  onUpdate?: (id: string, data: any) => Promise<void>;
  onCreate?: (data: any) => Promise<void>;
}

// Form types
export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string;
}

// Chart types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'area';
  data: ChartDataPoint[];
  xAxis?: string;
  yAxis?: string;
  colors?: string[];
} 