/**
 * Enterprise Accessibility Utilities
 * WCAG 2.1 AA Compliance Library
 * 
 * Following WordPress enterprise accessibility standards:
 * https://www.wpbeginner.com/beginners-guide/wordpress-for-enterprise-tips-you-should-know/
 * 
 * Provides utilities for:
 * - Color contrast validation
 * - Focus management
 * - Screen reader announcements
 * - Keyboard navigation
 * - ARIA attribute management
 */

import { useCallback, useEffect, useRef } from 'react';

// WCAG 2.1 AA Color Contrast Standards
export const WCAG_CONTRAST_RATIOS = {
  AA_NORMAL: 4.5,
  AA_LARGE: 3.0,
  AAA_NORMAL: 7.0,
  AAA_LARGE: 4.5,
} as const;

/**
 * Calculate color contrast ratio between two colors
 * Returns ratio (1-21) where 21 is highest contrast
 */
export function getContrastRatio(foreground: string, background: string): number {
  const getLuminance = (color: string): number => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    // Calculate relative luminance
    const getRGB = (color: number): number => {
      return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * getRGB(r) + 0.7152 * getRGB(g) + 0.0722 * getRGB(b);
  };

  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Validate color contrast meets WCAG standards
 */
export function validateContrast(
  foreground: string,
  background: string,
  level: keyof typeof WCAG_CONTRAST_RATIOS = 'AA_NORMAL'
): { passes: boolean; ratio: number; required: number } {
  const ratio = getContrastRatio(foreground, background);
  const required = WCAG_CONTRAST_RATIOS[level];
  
  return {
    passes: ratio >= required,
    ratio: Math.round(ratio * 100) / 100,
    required,
  };
}

/**
 * Focus Management Utilities
 */
export class FocusManager {
  private static instance: FocusManager;
  private focusStack: HTMLElement[] = [];

  static getInstance(): FocusManager {
    if (!FocusManager.instance) {
      FocusManager.instance = new FocusManager();
    }
    return FocusManager.instance;
  }

  /**
   * Save current focus and set new focus
   */
  pushFocus(element: HTMLElement): void {
    const currentFocus = document.activeElement as HTMLElement;
    if (currentFocus && currentFocus !== document.body) {
      this.focusStack.push(currentFocus);
    }
    element.focus();
  }

  /**
   * Restore previous focus
   */
  popFocus(): void {
    const previousFocus = this.focusStack.pop();
    if (previousFocus) {
      previousFocus.focus();
    }
  }

  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): () => void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }
}

/**
 * Screen Reader Announcements
 */
export class ScreenReaderAnnouncer {
  private static instance: ScreenReaderAnnouncer;
  private liveRegion: HTMLElement | null = null;

  static getInstance(): ScreenReaderAnnouncer {
    if (!ScreenReaderAnnouncer.instance) {
      ScreenReaderAnnouncer.instance = new ScreenReaderAnnouncer();
    }
    return ScreenReaderAnnouncer.instance;
  }

  private createLiveRegion(): HTMLElement {
    if (this.liveRegion) return this.liveRegion;

    const region = document.createElement('div');
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    
    document.body.appendChild(region);
    this.liveRegion = region;
    return region;
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const region = this.createLiveRegion();
    region.setAttribute('aria-live', priority);
    region.textContent = message;

    // Clear after announcement
    setTimeout(() => {
      region.textContent = '';
    }, 1000);
  }

  /**
   * Announce form validation errors
   */
  announceFormError(fieldName: string, errorMessage: string): void {
    this.announce(`Error in ${fieldName}: ${errorMessage}`, 'assertive');
  }

  /**
   * Announce successful actions
   */
  announceSuccess(message: string): void {
    this.announce(`Success: ${message}`, 'polite');
  }
}

/**
 * React Hooks for Accessibility
 */

/**
 * Hook for managing focus
 */
export function useFocusManagement() {
  const focusManager = FocusManager.getInstance();

  return {
    pushFocus: useCallback((element: HTMLElement) => {
      focusManager.pushFocus(element);
    }, [focusManager]),
    
    popFocus: useCallback(() => {
      focusManager.popFocus();
    }, [focusManager]),
    
    trapFocus: useCallback((container: HTMLElement) => {
      return focusManager.trapFocus(container);
    }, [focusManager]),
  };
}

/**
 * Hook for screen reader announcements
 */
export function useScreenReaderAnnouncements() {
  const announcer = ScreenReaderAnnouncer.getInstance();

  return {
    announce: useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
      announcer.announce(message, priority);
    }, [announcer]),
    
    announceFormError: useCallback((fieldName: string, errorMessage: string) => {
      announcer.announceFormError(fieldName, errorMessage);
    }, [announcer]),
    
    announceSuccess: useCallback((message: string) => {
      announcer.announceSuccess(message);
    }, [announcer]),
  };
}

/**
 * Hook for keyboard navigation
 */
export function useKeyboardNavigation() {
  const handleEscape = useCallback((callback: () => void) => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleEnterOrSpace = useCallback((callback: () => void) => {
    return (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        callback();
      }
    };
  }, []);

  return {
    handleEscape,
    handleEnterOrSpace,
  };
}

/**
 * Hook for skip links (accessibility navigation)
 */
export function useSkipLinks() {
  const skipLinksRef = useRef<HTMLElement[]>([]);

  const registerSkipLink = useCallback((element: HTMLElement, label: string) => {
    element.setAttribute('id', `skip-${label.toLowerCase().replace(/\s+/g, '-')}`);
    skipLinksRef.current.push(element);
  }, []);

  const createSkipNavigation = useCallback(() => {
    const skipNav = document.createElement('nav');
    skipNav.className = 'skip-navigation';
    skipNav.setAttribute('aria-label', 'Skip navigation');
    
    const skipList = document.createElement('ul');
    skipList.className = 'skip-links';
    
    skipLinksRef.current.forEach((element, index) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${element.id}`;
      link.textContent = `Skip to ${element.getAttribute('aria-label') || `section ${index + 1}`}`;
      link.className = 'skip-link';
      
      // Skip link styles for accessibility
      link.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 9999;
        border-radius: 4px;
        transition: top 0.3s;
      `;
      
      link.addEventListener('focus', () => {
        link.style.top = '6px';
      });
      
      link.addEventListener('blur', () => {
        link.style.top = '-40px';
      });
      
      li.appendChild(link);
      skipList.appendChild(li);
    });
    
    skipNav.appendChild(skipList);
    document.body.insertBefore(skipNav, document.body.firstChild);
  }, []);

  return {
    registerSkipLink,
    createSkipNavigation,
  };
}

/**
 * Accessibility audit utilities
 */
export class AccessibilityAuditor {
  static auditPage(): AccessibilityAuditResult {
    const results: AccessibilityAuditResult = {
      score: 0,
      issues: [],
      passed: [],
    };

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        results.issues.push({
          type: 'missing-alt-text',
          element: `img[${index}]`,
          description: 'Image missing alternative text',
          severity: 'high',
        });
      } else {
        results.passed.push('Image has alternative text');
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        results.issues.push({
          type: 'heading-hierarchy',
          element: `${heading.tagName.toLowerCase()}[${index}]`,
          description: 'Heading hierarchy skipped levels',
          severity: 'medium',
        });
      }
      lastLevel = level;
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const hasLabel = 
        input.getAttribute('aria-label') ||
        input.getAttribute('aria-labelledby') ||
        document.querySelector(`label[for="${input.id}"]`);
      
      if (!hasLabel) {
        results.issues.push({
          type: 'missing-form-label',
          element: `${input.tagName.toLowerCase()}[${index}]`,
          description: 'Form control missing label',
          severity: 'high',
        });
      } else {
        results.passed.push('Form control has proper label');
      }
    });

    // Calculate score
    const totalChecks = results.issues.length + results.passed.length;
    results.score = totalChecks > 0 ? Math.round((results.passed.length / totalChecks) * 100) : 100;

    return results;
  }
}

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[];
  passed: string[];
}

export interface AccessibilityIssue {
  type: string;
  element: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

/**
 * ARIA utilities
 */
export const ARIA = {
  /**
   * Generate unique IDs for ARIA relationships
   */
  generateId: (prefix: string = 'aria'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Create ARIA live region
   */
  createLiveRegion: (politeness: 'polite' | 'assertive' = 'polite'): HTMLElement => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', politeness);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    return region;
  },

  /**
   * Set ARIA expanded state
   */
  setExpanded: (element: HTMLElement, expanded: boolean): void => {
    element.setAttribute('aria-expanded', String(expanded));
  },

  /**
   * Set ARIA selected state
   */
  setSelected: (element: HTMLElement, selected: boolean): void => {
    element.setAttribute('aria-selected', String(selected));
  },

  /**
   * Set ARIA pressed state for toggle buttons
   */
  setPressed: (element: HTMLElement, pressed: boolean): void => {
    element.setAttribute('aria-pressed', String(pressed));
  },
};

// Export singleton instances
export const focusManager = FocusManager.getInstance();
export const screenReaderAnnouncer = ScreenReaderAnnouncer.getInstance(); 