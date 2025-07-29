import { Search } from "lucide-react";
import React from "react";
/**
 * Shared Utilities
 * 
 * This file contains utility functions that are used across the entire application.
 * These utilities provide common functionality for formatting, validation, and data manipulation.
 */

/**
 * Date and Time Utilities
 */
export class DateUtils {
  /**
   * Formats a date to a human-readable string
   */
  static formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    
    return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options });
  }

  /**
   * Formats a date and time to a human-readable string
   */
  static formatDateTime(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options });
  }

  /**
   * Gets relative time (e.g., "2 hours ago", "3 days ago")
   */
  static getRelativeTime(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  }

  /**
   * Checks if a date is today
   */
  static isToday(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    
    return dateObj.toDateString() === today.toDateString();
  }

  /**
   * Checks if a date is yesterday
   */
  static isYesterday(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    return dateObj.toDateString() === yesterday.toDateString();
  }
}

/**
 * Number and Currency Utilities
 */
export class NumberUtils {
  /**
   * Formats a number with commas
   */
  static formatNumber(num: number): string {
    return num.toLocaleString('en-US');
  }

  /**
   * Formats currency
   */
  static formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  /**
   * Formats percentage
   */
  static formatPercentage(value: number, decimals: number = 1): string {
    return `${value.toFixed(decimals)}%`;
  }

  /**
   * Formats file size
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Clamps a number between min and max values
   */
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Rounds a number to specified decimal places
   */
  static round(value: number, decimals: number = 2): number {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }
}

/**
 * String Utilities
 */
export class StringUtils {
  /**
   * Capitalizes the first letter of a string
   */
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Converts a string to title case
   */
  static toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  /**
   * Truncates a string to specified length
   */
  static truncate(str: string, length: number, suffix: string = '...'): string {
    if (str.length <= length) return str;
    return str.substring(0, length) + suffix;
  }

  /**
   * Generates a random string
   */
  static generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Converts a string to slug format
   */
  static toSlug(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Checks if a string is a valid email
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Checks if a string is a valid URL
   */
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Array Utilities
 */
export class ArrayUtils {
  /**
   * Removes duplicates from an array
   */
  static unique<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

  /**
   * Groups array items by a key
   */
  static groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  /**
   * Sorts array by multiple keys
   */
  static sortBy<T>(array: T[], ...keys: (keyof T)[]): T[] {
    return [...array].sort((a, b) => {
      for (const key of keys) {
        const aVal = a[key];
        const bVal = b[key];
        
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
      }
      return 0;
    });
  }

  /**
   * Chunks an array into smaller arrays
   */
  static chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  /**
   * Shuffles an array
   */
  static shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

/**
 * Object Utilities
 */
export class ObjectUtils {
  /**
   * Deep clones an object
   */
  static deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime()) as unknown as T;
    }

    if (obj instanceof Array) {
      return obj.map(item => ObjectUtils.deepClone(item)) as unknown as T;
    }

    if (typeof obj === 'object') {
      const cloned = {} as Record<string, any>;
      for (const key in obj as Record<string, any>) {
        if ((obj as Record<string, any>).hasOwnProperty(key)) {
          cloned[key] = ObjectUtils.deepClone((obj as Record<string, any>)[key]);
        }
      }
      return cloned as T;
    }

    return obj;
  }

  /**
   * Merges multiple objects
   */
  static merge<T extends Record<string, any>>(...objects: T[]): T {
    return objects.reduce((result, obj) => {
      return { ...result, ...obj };
    }, {} as T);
  }

  /**
   * Picks specific keys from an object
   */
  static pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  /**
   * Omits specific keys from an object
   */
  static omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    keys.forEach(key => {
      delete result[key];
    });
    return result;
  }

  /**
   * Checks if an object is empty
   */
  static isEmpty(obj: any): boolean {
    if (obj == null) return true;
    if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
    return Object.keys(obj).length === 0;
  }
}

/**
 * Validation Utilities
 */
export class ValidationUtils {
  /**
   * Validates required fields
   */
  static required(value: any, fieldName: string): string | null {
    if (value === null || value === undefined || value === '') {
      return `${fieldName} is required`;
    }
    return null;
  }

  /**
   * Validates minimum length
   */
  static minLength(value: string, min: number, fieldName: string): string | null {
    if (value && value.length < min) {
      return `${fieldName} must be at least ${min} characters long`;
    }
    return null;
  }

  /**
   * Validates maximum length
   */
  static maxLength(value: string, max: number, fieldName: string): string | null {
    if (value && value.length > max) {
      return `${fieldName} must be no more than ${max} characters long`;
    }
    return null;
  }

  /**
   * Validates email format
   */
  static email(value: string, fieldName: string): string | null {
    if (value && !StringUtils.isValidEmail(value)) {
      return `${fieldName} must be a valid email address`;
    }
    return null;
  }

  /**
   * Validates URL format
   */
  static url(value: string, fieldName: string): string | null {
    if (value && !StringUtils.isValidUrl(value)) {
      return `${fieldName} must be a valid URL`;
    }
    return null;
  }

  /**
   * Validates numeric range
   */
  static range(value: number, min: number, max: number, fieldName: string): string | null {
    if (value < min || value > max) {
      return `${fieldName} must be between ${min} and ${max}`;
    }
    return null;
  }
}

/**
 * Storage Utilities
 */
export class StorageUtils {
  /**
   * Sets an item in localStorage
   */
  static setItem(key: string, value: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Gets an item from localStorage
   */
  static getItem<T>(key: string, defaultValue?: T): T | null {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      if (item !== null) {
        try {
          return JSON.parse(item);
        } catch {
          return defaultValue || null;
        }
      }
    }
    return defaultValue || null;
  }

  /**
   * Removes an item from localStorage
   */
  static removeItem(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  /**
   * Clears all localStorage
   */
  static clear(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }
}

/**
 * URL Utilities
 */
export class UrlUtils {
  /**
   * Gets query parameters from URL
   */
  static getQueryParams(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    
    const params = new URLSearchParams(window.location.search);
    const result: Record<string, string> = {};
    
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }
    
    return result;
  }

  /**
   * Sets query parameters in URL
   */
  static setQueryParams(params: Record<string, string>): void {
    if (typeof window === 'undefined') return;
    
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    
    window.history.replaceState({}, '', url.toString());
  }

  /**
   * Removes query parameters from URL
   */
  static removeQueryParams(keys: string[]): void {
    if (typeof window === 'undefined') return;
    
    const url = new URL(window.location.href);
    keys.forEach(key => {
      url.searchParams.delete(key);
    });
    
    window.history.replaceState({}, '', url.toString());
  }
} 