
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type: initialType,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const type = initialType === 'password' ? (showPassword ? 'text' : 'password') : initialType;
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <Label htmlFor={id} className="text-sm font-medium transition-all duration-200">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {error && <span className="text-destructive text-xs">{error}</span>}
      </div>
      
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "pr-10 transition-all duration-200 border-2 focus-visible:ring-1",
            isFocused ? "border-fitness-300" : "border-input",
            error ? "border-destructive" : "",
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {initialType === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
