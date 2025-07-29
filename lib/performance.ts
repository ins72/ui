import { getCachedApiResponse, cacheApiResponse } from './redis';

// Performance monitoring configuration
const PERFORMANCE_CONFIG = {
  // API response time thresholds (in milliseconds)
  API_THRESHOLDS: {
    EXCELLENT: 100,
    GOOD: 200,
    ACCEPTABLE: 500,
    POOR: 1000,
  },
  
  // Page load time thresholds (in milliseconds)
  PAGE_THRESHOLDS: {
    EXCELLENT: 1000,
    GOOD: 2000,
    ACCEPTABLE: 3000,
    POOR: 5000,
  },
  
  // Cache hit rate thresholds (percentage)
  CACHE_THRESHOLDS: {
    EXCELLENT: 90,
    GOOD: 80,
    ACCEPTABLE: 70,
    POOR: 50,
  },
};

// Performance metrics storage
interface PerformanceMetric {
  timestamp: number;
  type: 'api' | 'page' | 'cache' | 'error';
  name: string;
  duration: number;
  status: 'success' | 'error' | 'warning';
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private isEnabled: boolean = true;

  constructor() {
    this.initializeMonitoring();
  }

  /**
   * Initialize performance monitoring
   */
  private initializeMonitoring() {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      this.monitorCoreWebVitals();
      
      // Monitor API calls
      this.monitorAPICalls();
      
      // Monitor page loads
      this.monitorPageLoads();
      
      // Monitor errors
      this.monitorErrors();
    }
  }

  /**
   * Monitor Core Web Vitals
   */
  private monitorCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('page', 'LCP', lastEntry.startTime, 'success', {
          element: lastEntry.element?.tagName,
          url: lastEntry.url,
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('page', 'FID', entry.processingStart - entry.startTime, 'success', {
            name: entry.name,
            type: entry.entryType,
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordMetric('page', 'CLS', clsValue, 'success');
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  /**
   * Monitor API calls
   */
  private monitorAPICalls() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const url = typeof args[0] === 'string' ? args[0] : args[0].url;
      
      try {
        const response = await originalFetch(...args);
        const duration = performance.now() - startTime;
        
        this.recordMetric('api', url, duration, 'success', {
          status: response.status,
          method: args[1]?.method || 'GET',
        });
        
        return response;
      } catch (error) {
        const duration = performance.now() - startTime;
        this.recordMetric('api', url, duration, 'error', {
          error: error.message,
          method: args[1]?.method || 'GET',
        });
        throw error;
      }
    };
  }

  /**
   * Monitor page loads
   */
  private monitorPageLoads() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          this.recordMetric('page', 'PageLoad', navigation.loadEventEnd - navigation.loadEventStart, 'success', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          });
        }
      });
    }
  }

  /**
   * Monitor errors
   */
  private monitorErrors() {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.recordMetric('error', 'JavaScript Error', 0, 'error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.recordMetric('error', 'Unhandled Promise Rejection', 0, 'error', {
          reason: event.reason,
        });
      });
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(
    type: PerformanceMetric['type'],
    name: string,
    duration: number,
    status: PerformanceMetric['status'],
    metadata?: Record<string, any>
  ) {
    if (!this.isEnabled) return;

    const metric: PerformanceMetric = {
      timestamp: Date.now(),
      type,
      name,
      duration,
      status,
      metadata,
    };

    this.metrics.push(metric);
    this.sendMetricToAnalytics(metric);
  }

  /**
   * Send metric to analytics
   */
  private async sendMetricToAnalytics(metric: PerformanceMetric) {
    try {
      await fetch('/api/v1/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric),
      });
    } catch (error) {
      console.error('Failed to send performance metric:', error);
    }
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): Record<string, any> {
    const apiMetrics = this.metrics.filter(m => m.type === 'api');
    const pageMetrics = this.metrics.filter(m => m.type === 'page');
    const errorMetrics = this.metrics.filter(m => m.type === 'error');

    return {
      api: {
        total: apiMetrics.length,
        averageResponseTime: this.calculateAverage(apiMetrics.map(m => m.duration)),
        errorRate: this.calculateErrorRate(apiMetrics),
        slowestEndpoint: this.findSlowestEndpoint(apiMetrics),
      },
      page: {
        total: pageMetrics.length,
        averageLoadTime: this.calculateAverage(pageMetrics.map(m => m.duration)),
        slowestPage: this.findSlowestPage(pageMetrics),
      },
      errors: {
        total: errorMetrics.length,
        types: this.groupErrorsByType(errorMetrics),
      },
      cache: {
        hitRate: this.calculateCacheHitRate(),
      },
    };
  }

  /**
   * Calculate average
   */
  private calculateAverage(values: number[]): number {
    if (values.length === 0) return 0;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  /**
   * Calculate error rate
   */
  private calculateErrorRate(metrics: PerformanceMetric[]): number {
    if (metrics.length === 0) return 0;
    const errors = metrics.filter(m => m.status === 'error').length;
    return (errors / metrics.length) * 100;
  }

  /**
   * Find slowest endpoint
   */
  private findSlowestEndpoint(metrics: PerformanceMetric[]): { name: string; duration: number } | null {
    if (metrics.length === 0) return null;
    
    const slowest = metrics.reduce((max, current) => 
      current.duration > max.duration ? current : max
    );
    
    return {
      name: slowest.name,
      duration: slowest.duration,
    };
  }

  /**
   * Find slowest page
   */
  private findSlowestPage(metrics: PerformanceMetric[]): { name: string; duration: number } | null {
    if (metrics.length === 0) return null;
    
    const slowest = metrics.reduce((max, current) => 
      current.duration > max.duration ? current : max
    );
    
    return {
      name: slowest.name,
      duration: slowest.duration,
    };
  }

  /**
   * Group errors by type
   */
  private groupErrorsByType(metrics: PerformanceMetric[]): Record<string, number> {
    return metrics.reduce((acc, metric) => {
      const type = metric.name;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  /**
   * Calculate cache hit rate
   */
  private calculateCacheHitRate(): number {
    // This would be implemented with actual cache statistics
    return 85; // Placeholder
  }

  /**
   * Enable/disable monitoring
   */
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  /**
   * Clear metrics
   */
  clearMetrics() {
    this.metrics = [];
  }

  /**
   * Get all metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }
}

// Create global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Performance monitoring utilities
 */
export const performanceUtils = {
  /**
   * Measure function execution time
   */
  async measureFunction<T>(
    name: string,
    fn: () => Promise<T> | T
  ): Promise<T> {
    const startTime = performance.now();
    
    try {
      const result = await fn();
      const duration = performance.now() - startTime;
      
      performanceMonitor.recordMetric('api', name, duration, 'success');
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      performanceMonitor.recordMetric('api', name, duration, 'error', {
        error: error.message,
      });
      throw error;
    }
  },

  /**
   * Measure API call with caching
   */
  async measureAPICall<T>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    return performanceUtils.measureFunction(`API: ${url}`, async () => {
      // Check cache first
      const cached = await getCachedApiResponse<T>(url);
      if (cached) {
        performanceMonitor.recordMetric('cache', url, 0, 'success', { hit: true });
        return cached;
      }

      // Make API call
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache the response
      await cacheApiResponse(url, data, 'public');
      
      return data;
    });
  },

  /**
   * Get performance grade
   */
  getPerformanceGrade(duration: number, type: 'api' | 'page'): string {
    const thresholds = type === 'api' ? PERFORMANCE_CONFIG.API_THRESHOLDS : PERFORMANCE_CONFIG.PAGE_THRESHOLDS;
    
    if (duration <= thresholds.EXCELLENT) return 'A+';
    if (duration <= thresholds.GOOD) return 'A';
    if (duration <= thresholds.ACCEPTABLE) return 'B';
    if (duration <= thresholds.POOR) return 'C';
    return 'D';
  },

  /**
   * Generate performance report
   */
  generateReport(): Record<string, any> {
    const summary = performanceMonitor.getPerformanceSummary();
    
    return {
      summary,
      recommendations: this.generateRecommendations(summary),
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Generate performance recommendations
   */
  generateRecommendations(summary: any): string[] {
    const recommendations: string[] = [];

    if (summary.api.averageResponseTime > PERFORMANCE_CONFIG.API_THRESHOLDS.ACCEPTABLE) {
      recommendations.push('Consider implementing API response caching');
    }

    if (summary.api.errorRate > 5) {
      recommendations.push('High API error rate detected - investigate and fix issues');
    }

    if (summary.page.averageLoadTime > PERFORMANCE_CONFIG.PAGE_THRESHOLDS.ACCEPTABLE) {
      recommendations.push('Page load times are slow - optimize images and bundle size');
    }

    if (summary.cache.hitRate < PERFORMANCE_CONFIG.CACHE_THRESHOLDS.ACCEPTABLE) {
      recommendations.push('Low cache hit rate - implement more aggressive caching');
    }

    if (summary.errors.total > 10) {
      recommendations.push('High error rate - implement better error handling');
    }

    return recommendations;
  },
};

export default performanceMonitor; 