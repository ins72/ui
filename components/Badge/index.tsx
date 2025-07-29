import React from 'react';

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'green' | 'red' | 'yellow' | 'gray';
  size?: 'sm' | 'md' | 'lg';
};

const Badge: React.FC<BadgeProps> = ({ 
  className = '', 
  children, 
  variant = 'default',
  size = 'md'
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'green':
        return 'label-green';
      case 'red':
        return 'label-red';
      case 'yellow':
        return 'label-yellow';
      case 'gray':
        return 'label-gray';
      default:
        return 'label';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-6 px-1.5 text-caption';
      case 'lg':
        return 'h-8 px-2 text-button';
      default:
        return 'h-7 px-1.75 text-button';
    }
  };

  return (
    <span 
      className={`inline-flex items-center rounded-lg ${getVariantClass()} ${getSizeClass()} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge; 