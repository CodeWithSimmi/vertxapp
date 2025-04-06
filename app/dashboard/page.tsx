'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DealStats from '@/components/dashboard/DealStats';
import UserEngagement from '@/components/dashboard/UserEngagement';
import UserActivityChart from '@/components/dashboard/UserActivityChart';
import { MoveRight, Users, Activity, Timer, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">User Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Deals
                    </p>
                    <h3 className="text-2xl font-bold">2,345</h3>
                  </div>
                  <MoveRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Active Users
                    </p>
                    <h3 className="text-2xl font-bold">1,876</h3>
                  </div>
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Conversion Rate
                    </p>
                    <h3 className="text-2xl font-bold">64.5%</h3>
                  </div>
                  <TrendingUp className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Avg. Session
                    </p>
                    <h3 className="text-2xl font-bold">12m 24s</h3>
                  </div>
                  <Timer className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Deal Statistics</h4>
                  </div>
                </div>
                <DealStats />
              </Card>
              <Card className="col-span-3">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Transaction Status</h4>
                  </div>
                </div>
                <UserEngagement />
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="engagement" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Daily Active Users
                    </p>
                    <h3 className="text-2xl font-bold">1,234</h3>
                  </div>
                  <Activity className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      New Users
                    </p>
                    <h3 className="text-2xl font-bold">145</h3>
                  </div>
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Retention Rate
                    </p>
                    <h3 className="text-2xl font-bold">85.3%</h3>
                  </div>
                  <TrendingUp className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Bounce Rate
                    </p>
                    <h3 className="text-2xl font-bold">24.8%</h3>
                  </div>
                  <Timer className="h-6 w-6 text-muted-foreground" />
                </div>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">User Activity</h4>
                  </div>
                </div>
                <UserActivityChart />
              </Card>
              <Card className="col-span-3">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Engagement Metrics</h4>
                  </div>
                </div>
                <UserEngagement />
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}