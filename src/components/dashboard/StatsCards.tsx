
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Dumbbell, Flame, Clock } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Workouts</p>
              <h3 className="text-2xl font-bold">25</h3>
            </div>
          </div>
          <div className="bg-muted/50 px-6 py-3">
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 12%</span> from last month
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Time</p>
              <h3 className="text-2xl font-bold">18h 42m</h3>
            </div>
          </div>
          <div className="bg-muted/50 px-6 py-3">
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Calories Burned</p>
              <h3 className="text-2xl font-bold">12,450</h3>
            </div>
          </div>
          <div className="bg-muted/50 px-6 py-3">
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 8%</span> from last month
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <Activity className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
              <h3 className="text-2xl font-bold">7 days</h3>
            </div>
          </div>
          <div className="bg-muted/50 px-6 py-3">
            <p className="text-xs text-muted-foreground">
              Personal best: 14 days
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
