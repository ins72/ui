interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
    showPercentage?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    max = 100,
    className = "",
    showPercentage = false,
    color = 'primary',
    size = 'md'
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const colorClasses = {
        primary: 'bg-primary-01',
        success: 'bg-primary-02',
        warning: 'bg-primary-05',
        danger: 'bg-primary-03'
    };

    const sizeClasses = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3'
    };

    return (
        <div className={`w-full ${className}`}>
            <div className={`w-full bg-shade-08 rounded-full overflow-hidden ${sizeClasses[size]}`}>
                <div 
                    className={`h-full transition-all duration-300 ease-out ${colorClasses[color]} rounded-full`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showPercentage && (
                <div className="flex justify-between mt-1 text-sm text-t-secondary">
                    <span>{Math.round(percentage)}%</span>
                    <span>{value} / {max}</span>
                </div>
            )}
        </div>
    );
};

export default ProgressBar; 