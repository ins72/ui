"use client";

import React from "react";
import Icon from "@/style-reference/components/Icon";
import Button from "@/style-reference/components/Button";

/**
 * NotificationCard - Example component implementation following style-reference patterns
 * 
 * This demonstrates:
 * - Proper TypeScript prop interface
 * - Style-reference CSS classes
 * - Consistent component structure
 * - Proper export pattern
 * - Icon and Button integration from style-reference
 * - Responsive design patterns
 * - Accessibility features
 */

type NotificationCardProps = {
    className?: string;
    title: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    timestamp?: string;
    isRead?: boolean;
    onMarkAsRead?: () => void;
    onDismiss?: () => void;
    onClick?: () => void;
};

const NotificationCard = ({
    className,
    title,
    message,
    type = 'info',
    timestamp,
    isRead = false,
    onMarkAsRead,
    onDismiss,
    onClick,
}: NotificationCardProps) => {
    // Get type-specific styles following style-reference patterns
    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return {
                    iconName: 'check-circle',
                    iconColor: 'text-primary-02',
                    borderColor: 'border-primary-02',
                    bgColor: 'bg-secondary-04'
                };
            case 'warning':
                return {
                    iconName: 'alert-triangle',
                    iconColor: 'text-primary-05',
                    borderColor: 'border-primary-05',
                    bgColor: 'bg-secondary-05'
                };
            case 'error':
                return {
                    iconName: 'alert-circle',
                    iconColor: 'text-primary-03',
                    borderColor: 'border-primary-03',
                    bgColor: 'bg-secondary-01'
                };
            default:
                return {
                    iconName: 'info',
                    iconColor: 'text-primary-01',
                    borderColor: 'border-primary-01',
                    bgColor: 'bg-secondary-03'
                };
        }
    };

    const typeStyles = getTypeStyles();

    return (
        <div 
            className={`
                card 
                ${!isRead ? 'border-l-4' : 'border-l-2'} 
                ${typeStyles.borderColor}
                ${!isRead ? typeStyles.bgColor + '/10' : 'bg-backgrounds-surface2'}
                ${onClick ? 'cursor-pointer box-hover' : ''}
                ${className || ''}
            `}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
            aria-label={onClick ? `Notification: ${title}` : undefined}
        >
            <div className="flex items-start gap-4">
                {/* Type icon */}
                <div className={`
                    flex-shrink-0 
                    w-8 h-8 
                    rounded-full 
                    ${typeStyles.bgColor}
                    flex items-center justify-center
                `}>
                    <Icon 
                        name={typeStyles.iconName} 
                        className={`h-4 w-4 ${typeStyles.iconColor}`}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                            <h4 className={`
                                text-sm font-medium 
                                ${!isRead ? 'text-t-primary' : 'text-t-secondary'}
                            `}>
                                {title}
                            </h4>
                            <p className="text-sm text-t-secondary mt-1 line-clamp-2">
                                {message}
                            </p>
                            {timestamp && (
                                <p className="text-xs text-t-tertiary mt-2">
                                    {timestamp}
                                </p>
                            )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2">
                            {!isRead && onMarkAsRead && (
                                <Button
                                    isCircle
                                    className="w-8 h-8"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onMarkAsRead();
                                    }}
                                    aria-label="Mark as read"
                                >
                                    <Icon name="check" className="h-3 w-3" />
                                </Button>
                            )}
                            
                            {onDismiss && (
                                <Button
                                    isCircle
                                    className="w-8 h-8"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDismiss();
                                    }}
                                    aria-label="Dismiss notification"
                                >
                                    <Icon name="x" className="h-3 w-3" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Unread indicator */}
                {!isRead && (
                    <div className={`
                        flex-shrink-0 
                        w-2 h-2 
                        rounded-full 
                        ${typeStyles.iconColor.replace('text-', 'bg-')}
                        mt-1
                    `} />
                )}
            </div>
        </div>
    );
};

export default NotificationCard; 