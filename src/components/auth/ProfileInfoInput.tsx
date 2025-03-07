
import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormField from './FormField';

interface ProfileInfoInputProps {
  className?: string;
  fitnessGoal: string;
  setFitnessGoal: (value: string) => void;
  error?: string;
}

const ProfileInfoInput: React.FC<ProfileInfoInputProps> = ({ 
  className,
  fitnessGoal,
  setFitnessGoal,
  error
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <Label className="text-base font-medium">
          Your Fitness Profile
        </Label>
        <p className="text-sm text-muted-foreground">Tell us a bit about your fitness goals</p>
      </div>
      
      <FormField
        id="fitnessGoal"
        label="Fitness Goal"
        type="text"
        placeholder="e.g., Lose weight, Build muscle, Improve endurance"
        value={fitnessGoal}
        onChange={(e) => setFitnessGoal(e.target.value)}
        error={error}
      />
    </div>
  );
};

export default ProfileInfoInput;
