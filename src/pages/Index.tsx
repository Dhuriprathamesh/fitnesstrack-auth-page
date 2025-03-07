
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  FitTrack: Your Fitness Journey Starts Here
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Track your workouts, monitor your progress, and achieve your fitness goals with our comprehensive fitness tracking platform.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/dashboard">
                    <BarChart4 className="mr-2 h-4 w-4" />
                    Dashboard Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/notifications" className="gap-1 relative">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                    <Badge 
                      className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center" 
                      variant="destructive"
                    >
                      3
                    </Badge>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
