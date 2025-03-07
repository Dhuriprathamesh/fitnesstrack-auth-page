
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import FormField from './FormField';
import ProfileInfoInput from './ProfileInfoInput';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  className?: string;
}

type FormMode = 'signin' | 'signup';

interface FormState {
  email: string;
  password: string;
  name?: string;
  fitnessGoal: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  name?: string;
  fitnessGoal?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
  const [formMode, setFormMode] = useState<FormMode>('signin');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    name: '',
    fitnessGoal: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formState.password) {
      newErrors.password = 'Password is required';
    } else if (formState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formMode === 'signup' && !formState.name) {
      newErrors.name = 'Name is required';
    }
    
    if (formMode === 'signup' && !formState.fitnessGoal) {
      newErrors.fitnessGoal = 'Please share your fitness goal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const message = formMode === 'signin' 
        ? 'Welcome back!' 
        : `Account created! Goal: ${formState.fitnessGoal}`;
      
      toast({
        title: formMode === 'signin' ? 'Welcome back!' : 'Account created!',
        description: formMode === 'signin' 
          ? 'You have successfully signed in.' 
          : `Your account has been created successfully. We'll help you achieve: ${formState.fitnessGoal}`,
      });
      
      // Here we would typically redirect the user or update UI
    } catch (error) {
      toast({
        title: 'Authentication failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (mode: FormMode) => {
    setFormMode(mode);
    setErrors({});
  };

  return (
    <Card className={cn("w-full max-w-md mx-auto glass border-0", className)}>
      <Tabs value={formMode} onValueChange={(v) => switchMode(v as FormMode)} className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-2xl font-semibold">
              {formMode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <TabsList className="grid grid-cols-2 h-9">
              <TabsTrigger value="signin" className="text-xs">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="text-xs">Sign Up</TabsTrigger>
            </TabsList>
          </div>
          <CardDescription>
            {formMode === 'signin' 
              ? 'Enter your credentials to access your account' 
              : 'Fill in your details to create a new account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TabsContent value="signup" className="mt-0 space-y-4">
              <FormField
                id="name"
                label="Full Name"
                type="text"
                placeholder="John Doe"
                required
                value={formState.name || ''}
                onChange={handleChange}
                error={errors.name}
              />
              
              <ProfileInfoInput
                fitnessGoal={formState.fitnessGoal}
                setFitnessGoal={(value) => {
                  setFormState(prev => ({ ...prev, fitnessGoal: value }));
                  if (errors.fitnessGoal) {
                    setErrors(prev => ({ ...prev, fitnessGoal: undefined }));
                  }
                }}
                error={errors.fitnessGoal}
              />
            </TabsContent>
            
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
              value={formState.email}
              onChange={handleChange}
              error={errors.email}
            />
            
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              required
              value={formState.password}
              onChange={handleChange}
              error={errors.password}
            />
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full fitness-gradient hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    <span>{formMode === 'signin' ? 'Signing in...' : 'Creating account...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>{formMode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                    <ArrowRight size={16} />
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-sm text-center text-muted-foreground">
            {formMode === 'signin' ? (
              <p>
                Don't have an account?{' '}
                <button 
                  onClick={() => switchMode('signup')}
                  className="text-fitness-600 font-medium hover:underline transition"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  onClick={() => switchMode('signin')}
                  className="text-fitness-600 font-medium hover:underline transition"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </CardFooter>
      </Tabs>
    </Card>
  );
};

export default AuthForm;
