
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dumbbell, Timer, MoreVertical, Flame } from 'lucide-react';

const workouts = [
  {
    id: 1,
    type: 'Strength',
    name: 'Upper Body Power',
    date: 'Today, 5:30 PM',
    duration: '45 min',
    calories: 320,
  },
  {
    id: 2,
    type: 'Cardio',
    name: 'HIIT Session',
    date: 'Yesterday, 7:00 AM',
    duration: '30 min',
    calories: 280,
  },
  {
    id: 3,
    type: 'Flexibility',
    name: 'Yoga Flow',
    date: 'Sep 12, 8:15 AM',
    duration: '60 min',
    calories: 220,
  },
  {
    id: 4,
    type: 'Strength',
    name: 'Leg Day',
    date: 'Sep 10, 6:00 PM',
    duration: '50 min',
    calories: 400,
  },
];

const WorkoutTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Strength':
      return <Dumbbell className="h-5 w-5 text-blue-500" />;
    case 'Cardio':
      return <Flame className="h-5 w-5 text-red-500" />;
    default:
      return <Timer className="h-5 w-5 text-green-500" />;
  }
};

const WorkoutList = () => {
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div 
          key={workout.id}
          className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border">
              <WorkoutTypeIcon type={workout.type} />
            </div>
            <div>
              <p className="font-medium">{workout.name}</p>
              <p className="text-sm text-muted-foreground">{workout.date}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <p className="text-sm text-right font-medium">{workout.duration}</p>
              <p className="text-xs text-muted-foreground">Duration</p>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-right font-medium">{workout.calories}</p>
              <p className="text-xs text-muted-foreground">Calories</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
