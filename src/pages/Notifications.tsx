
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Bell, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Dumbbell, 
  Filter, 
  Flame, 
  Heart, 
  Medal, 
  Trophy, 
  User, 
  X
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

// Sample notification data
const notifications = [
  {
    id: 1,
    type: 'achievement',
    title: 'New Achievement Unlocked!',
    description: 'You've completed 5 workouts this week! Keep up the great work!',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    time: '15 minutes ago',
    isRead: false
  },
  {
    id: 2,
    type: 'workout',
    title: 'Workout Reminder',
    description: 'Your scheduled "Upper Body" workout starts in 30 minutes.',
    icon: Dumbbell,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    time: '30 minutes ago',
    isRead: false
  },
  {
    id: 3,
    type: 'goal',
    title: 'Goal Achieved!',
    description: 'Congratulations! You've reached your weekly calorie burn goal of 3,000 calories.',
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    time: '2 hours ago',
    isRead: true
  },
  {
    id: 4,
    type: 'activity',
    title: 'Activity Summary',
    description: 'Yesterday you burned 450 calories and completed 8,500 steps.',
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    time: '1 day ago',
    isRead: true
  },
  {
    id: 5,
    type: 'challenge',
    title: 'New Challenge Available',
    description: 'The "30-Day HIIT Challenge" is now available. Join now to earn exclusive badges!',
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    time: '2 days ago',
    isRead: true
  },
  {
    id: 6,
    type: 'achievement',
    title: 'Personal Record!',
    description: 'You've set a new personal record for bench press: 185 lbs!',
    icon: Medal,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    time: '3 days ago',
    isRead: true
  },
  {
    id: 7,
    type: 'health',
    title: 'Heart Rate Alert',
    description: 'Your heart rate peaked at 175 BPM during your last workout, which is 90% of your max.',
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    time: '3 days ago',
    isRead: true
  },
  {
    id: 8,
    type: 'workout',
    title: 'New Workout Plan',
    description: 'Your trainer has added a new "Core Strength" workout to your plan.',
    icon: Dumbbell,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    time: '4 days ago',
    isRead: true
  }
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notificationList, setNotificationList] = useState(notifications);
  const { toast } = useToast();

  const handleMarkAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notification => ({
        ...notification,
        isRead: true
      }))
    );
    toast({
      title: "Notifications marked as read",
      description: "All notifications have been marked as read.",
    });
  };

  const handleClearAll = () => {
    setNotificationList([]);
    toast({
      title: "Notifications cleared",
      description: "All notifications have been cleared.",
      variant: "destructive"
    });
  };

  const handleMarkAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true } 
          : notification
      )
    );
  };

  const handleDismiss = (id: number) => {
    setNotificationList(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  const filteredNotifications = notificationList.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.isRead;
    return notification.type === activeTab;
  });

  const unreadCount = notificationList.filter(notification => !notification.isRead).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">FitTrack</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard" className="gap-1">
                <Activity className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="gap-1">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your fitness journey.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
              Mark all as read
            </Button>
            <Button variant="outline" size="sm" onClick={handleClearAll}>
              Clear all
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Sidebar with filters */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
              <CardDescription>Filter your notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <Button 
                  variant={activeTab === 'all' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('all')}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  All
                  {unreadCount > 0 && (
                    <Badge className="ml-auto" variant="secondary">{unreadCount}</Badge>
                  )}
                </Button>
                <Button 
                  variant={activeTab === 'unread' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('unread')}
                >
                  <Bell className="mr-2 h-4 w-4 text-primary" />
                  Unread
                  {unreadCount > 0 && (
                    <Badge className="ml-auto" variant="secondary">{unreadCount}</Badge>
                  )}
                </Button>
                <Separator className="my-2" />
                <Button 
                  variant={activeTab === 'workout' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('workout')}
                >
                  <Dumbbell className="mr-2 h-4 w-4 text-blue-500" />
                  Workouts
                </Button>
                <Button 
                  variant={activeTab === 'achievement' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('achievement')}
                >
                  <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                  Achievements
                </Button>
                <Button 
                  variant={activeTab === 'goal' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('goal')}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  Goals
                </Button>
                <Button 
                  variant={activeTab === 'activity' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('activity')}
                >
                  <Activity className="mr-2 h-4 w-4 text-purple-500" />
                  Activity
                </Button>
                <Button 
                  variant={activeTab === 'health' ? 'default' : 'ghost'} 
                  className="justify-start" 
                  onClick={() => setActiveTab('health')}
                >
                  <Heart className="mr-2 h-4 w-4 text-red-500" />
                  Health
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <span className="text-sm">Push notifications</span>
                <Switch />
              </div>
            </CardFooter>
          </Card>

          {/* Notification list */}
          <Card className="md:col-span-9">
            <CardHeader>
              <CardTitle className="text-lg">
                {activeTab === 'all' 
                  ? 'All Notifications' 
                  : activeTab === 'unread' 
                    ? 'Unread Notifications' 
                    : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Notifications`}
              </CardTitle>
              <CardDescription>
                {filteredNotifications.length} {filteredNotifications.length === 1 ? 'notification' : 'notifications'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Bell className="h-12 w-12 text-muted-foreground opacity-30" />
                  <p className="mt-4 text-lg font-medium">No notifications</p>
                  <p className="text-sm text-muted-foreground">
                    You don't have any {activeTab !== 'all' && activeTab} notifications yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`group relative rounded-lg border p-4 transition-all ${notification.isRead ? '' : 'bg-secondary/30'}`}
                    >
                      <div className="absolute right-2 top-2 flex space-x-1 opacity-0 transition-opacity group-hover:opacity-100">
                        {!notification.isRead && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="sr-only">Mark as read</span>
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6" 
                          onClick={() => handleDismiss(notification.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Dismiss</span>
                        </Button>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${notification.bg}`}>
                          <notification.icon className={`h-5 w-5 ${notification.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{notification.title}</h3>
                            {!notification.isRead && (
                              <Badge variant="secondary" className="h-1.5 w-1.5 rounded-full p-0" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="mt-2 flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
