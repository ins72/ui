import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Enterprise-grade accessible button component
 * Fully compliant with WCAG 2.1 AA standards
 * - 4.5:1 color contrast ratio
 * - Focus management with visible indicators
 * - Screen reader support with ARIA labels
 * - Keyboard navigation support
 * - Loading state accessibility
 */
const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      loadingText = 'Loading...',
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      className,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Base styles ensuring WCAG compliance
    const baseStyles = `
      relative inline-flex items-center justify-center
      font-medium transition-all duration-200 ease-in-out
      border border-transparent rounded-md
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      active:transform active:scale-95
    `;

    // Variant styles with WCAG 2.1 AA contrast ratios (4.5:1 minimum)
    const variantStyles = {
      primary: `
        bg-blue-600 text-white border-blue-600
        hover:bg-blue-700 hover:border-blue-700
        focus:ring-blue-500
        active:bg-blue-800
        disabled:bg-blue-300 disabled:border-blue-300
      `,
      secondary: `
        bg-gray-600 text-white border-gray-600
        hover:bg-gray-700 hover:border-gray-700
        focus:ring-gray-500
        active:bg-gray-800
        disabled:bg-gray-300 disabled:border-gray-300
      `,
      outline: `
        bg-transparent text-gray-700 border-gray-300
        hover:bg-gray-50 hover:text-gray-900
        focus:ring-gray-500
        active:bg-gray-100
        disabled:text-gray-400 disabled:border-gray-200
      `,
      ghost: `
        bg-transparent text-gray-700 border-transparent
        hover:bg-gray-100 hover:text-gray-900
        focus:ring-gray-500
        active:bg-gray-200
        disabled:text-gray-400
      `,
      destructive: `
        bg-red-600 text-white border-red-600
        hover:bg-red-700 hover:border-red-700
        focus:ring-red-500
        active:bg-red-800
        disabled:bg-red-300 disabled:border-red-300
      `,
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-[32px]',
      md: 'px-4 py-2 text-base min-h-[40px]',
      lg: 'px-6 py-3 text-lg min-h-[48px]',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          className
        )}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Loading"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">{loadingText}</span>
          </span>
        )}

        <span className={loading ? 'opacity-0' : 'flex items-center'}>
          {leftIcon && (
            <span className="mr-2 flex-shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          
          <span>{children}</span>
          
          {rightIcon && (
            <span className="ml-2 flex-shrink-0" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';

export default AccessibleButton;

// Additional accessible button variants for specific use cases
export const PrimaryButton = (props: Omit<AccessibleButtonProps, 'variant'>) => (
  <AccessibleButton variant="primary" {...props} />
);

export const SecondaryButton = (props: Omit<AccessibleButtonProps, 'variant'>) => (
  <AccessibleButton variant="secondary" {...props} />
);

export const OutlineButton = (props: Omit<AccessibleButtonProps, 'variant'>) => (
  <AccessibleButton variant="outline" {...props} />
);

export const DestructiveButton = (props: Omit<AccessibleButtonProps, 'variant'>) => (
  <AccessibleButton variant="destructive" {...props} />
);

// Icon button for accessibility
interface AccessibleIconButtonProps extends Omit<AccessibleButtonProps, 'children'> {
  icon: React.ReactNode;
  'aria-label': string; // Required for icon-only buttons
}

export const AccessibleIconButton = ({ icon, ...props }: AccessibleIconButtonProps) => (
  <AccessibleButton {...props}>
    {icon}
  </AccessibleButton>
); 