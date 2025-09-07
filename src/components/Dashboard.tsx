import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Calendar, Users, BookOpen, Clock, Settings, LogOut } from 'lucide-react';

interface DashboardProps {
  user: { username: string; role: string };
  onLogout: () => void;
  onNavigate: (section: string) => void;
}

export function Dashboard({ user, onLogout, onNavigate }: DashboardProps) {
  const [stats] = useState({
    totalClassrooms: 45,
    totalFaculty: 120,
    activeBatches: 32,
    scheduledClasses: 458,
    pendingApprovals: 3
  });

  const quickActions = [
    {
      title: 'Setup Parameters',
      description: 'Configure classrooms, subjects, and faculty',
      icon: Settings,
      action: () => onNavigate('parameters'),
      color: 'bg-blue-500'
    },
    {
      title: 'Generate Timetable',
      description: 'Create optimized timetables',
      icon: Calendar,
      action: () => onNavigate('generator'),
      color: 'bg-green-500'
    },
    {
      title: 'View Schedules',
      description: 'Review generated timetables',
      icon: Clock,
      action: () => onNavigate('schedules'),
      color: 'bg-purple-500'
    },
    {
      title: 'Manage Approval',
      description: 'Review and approve timetables',
      icon: Users,
      action: () => onNavigate('approval'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1>College Timetable Management</h1>
              <p className="text-muted-foreground">Welcome back, {user.username}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                {user.role}
              </Badge>
              <Button variant="outline" onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Classrooms</p>
                  <p className="text-2xl font-medium">{stats.totalClassrooms}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Faculty</p>
                  <p className="text-2xl font-medium">{stats.totalFaculty}</p>
                </div>
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Batches</p>
                  <p className="text-2xl font-medium">{stats.activeBatches}</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled Classes</p>
                  <p className="text-2xl font-medium">{stats.scheduledClasses}</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Approvals</p>
                  <p className="text-2xl font-medium text-red-600">{stats.pendingApprovals}</p>
                </div>
                <Clock className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6" onClick={action.action}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${action.color} text-white`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes to timetables</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p>Computer Science Batch 2022 - Timetable Generated</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="secondary">Generated</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p>Mathematics Department - Room allocation updated</p>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
                <Badge variant="outline">Updated</Badge>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p>Physics Lab Schedule - Approved by Dean</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
                <Badge>Approved</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}