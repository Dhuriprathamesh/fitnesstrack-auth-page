
import React from 'react';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Activity className={cn("text-fitness-600", sizeClasses[size])} strokeWidth={2.5} />
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-fitness-400 animate-pulse-soft" />
      </div>
      <h1 className={cn("font-bold tracking-tight", sizeClasses[size])}>
        <span className="text-fitness-600">Fit</span>
        <span className="text-gray-800">Track</span>
      </h1>
    </div>
  );
};

export default Logo;
