
import React from 'react';
import { Calendar } from 'lucide-react';

const workouts = [
  {
    id: 1,
    title: 'Upper Body',
    day: 'Today',
    time: '5:30 PM',
  },
  {
    id: 2,
    title: 'Cardio Session',
    day: 'Tomorrow',
    time: '7:00 AM',
  },
  {
    id: 3,
    title: 'Legs Day',
    day: 'Thursday',
    time: '6:00 PM',
  },
];

const UpcomingWorkouts = () => {
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div 
          key={workout.id} 
          className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-accent/50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">{workout.title}</p>
            <p className="text-xs text-muted-foreground">{workout.day} · {workout.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingWorkouts;
