import React from 'react';
import { motion } from 'framer-motion';
import Icon from "@/components/Icon";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  loading = false,
  onClick,
  className = '',
}) => {
  const cardContent = (
    <div className={`card ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-body-2 text-t-secondary mb-1">
            {title}
          </p>
          
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-s-subtle rounded w-24 mb-2"></div>
              {change && (
                <div className="h-4 bg-s-subtle rounded w-16"></div>
              )}
            </div>
          ) : (
            <>
              <p className="text-h4 text-t-primary mb-2">
                {value}
              </p>
              
              {change && (
                <div className="flex items-center">
                  {changeType === 'positive' ? (
                    <Icon className="h-4 w-4 text-t-primary mr-1" name="trending-up" />
                  ) : changeType === 'negative' ? (
                    <Icon className="h-4 w-4 text-t-primary mr-1" name="trending-down" />
                  ) : null}
                  
                  <span className={`text-body-2 font-medium ${
                    changeType === 'positive' 
                      ? 'text-t-primary' 
                      : changeType === 'negative' 
                      ? 'text-t-primary' 
                      : 'text-t-secondary'
                  }`}>
                    {change}
                  </span>
                  
                  <span className="text-caption text-t-tertiary ml-1">
                    from last month
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        
        {icon && (
          <div className="p-3 rounded-2xl bg-b-surface2 border border-s-stroke2">
            <Icon className="h-6 w-6 text-t-secondary" name={icon} />
          </div>
        )}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

// Stat Grid Component
interface StatGridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatGrid: React.FC<StatGridProps> = ({
  children,
  cols = 4,
  gap = 'md',
  className = '',
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 max-md:grid-cols-2',
    3: 'grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3',
    4: 'grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-4',
    5: 'grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-5',
    6: 'grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}; 