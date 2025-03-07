
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Background from '@/components/layout/Background';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui-elements/Logo';
import { Activity, TrendingUp, Heart, Trophy } from 'lucide-react';

const FeatureItem = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full fitness-gradient text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <Background>
      <div className="container min-h-screen px-4 py-8 md:py-16 flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Left Column - Info */}
        <div className="flex-1 space-y-8 mb-12 lg:mb-0 animate-fade-in">
          <div className="space-y-2">
            <Logo size="lg" className="mb-8" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Track your fitness journey with precision
            </h1>
            <p className="text-xl text-muted-foreground">
              Your personal health companion for achieving your fitness goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <FeatureItem 
              icon={<Activity size={20} />} 
              title="Activity Tracking" 
              description="Monitor all your physical activities and workouts in one place."
            />
            <FeatureItem 
              icon={<TrendingUp size={20} />} 
              title="Progress Analytics" 
              description="Visualize your improvements with detailed performance metrics."
            />
            <FeatureItem 
              icon={<Heart size={20} />} 
              title="Health Insights" 
              description="Get personalized recommendations based on your health data."
            />
            <FeatureItem 
              icon={<Trophy size={20} />} 
              title="Goal Setting" 
              description="Set achievable goals and celebrate your milestones."
            />
          </div>
        </div>
        
        {/* Right Column - Auth Form */}
        <div className="lg:flex-1 w-full lg:max-w-md animate-fade-in-up">
          <AuthForm className="sm:mx-auto" />
        </div>
      </div>
    </Background>
  );
};

export default Index;
