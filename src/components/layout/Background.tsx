
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ className, children }) => {
  return (
    <div className={cn("min-h-screen w-full overflow-hidden relative", className)}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-fitness-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-fitness-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-fitness-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* SVG Pattern for background */}
      <svg width="0" height="0">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

export default Background;
