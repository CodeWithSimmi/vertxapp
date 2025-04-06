'use client';

import { Card } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '00:00', users: 400 },
  { name: '03:00', users: 300 },
  { name: '06:00', users: 200 },
  { name: '09:00', users: 500 },
  { name: '12:00', users: 800 },
  { name: '15:00', users: 600 },
  { name: '18:00', users: 700 },
  { name: '21:00', users: 400 },
];

export default function UserActivityChart() {
  return (
    <div className="h-[400px] w-full p-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="name"
            className="text-sm text-muted-foreground"
          />
          <YAxis className="text-sm text-muted-foreground" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-2">
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-chart-1 mr-2" />
                        <span className="text-sm font-medium">
                          Active Users: {payload[0].value}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="hsl(var(--chart-1))"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}