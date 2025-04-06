'use client';

import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', completed: 400, pending: 240 },
  { name: 'Feb', completed: 300, pending: 139 },
  { name: 'Mar', completed: 200, pending: 980 },
  { name: 'Apr', completed: 278, pending: 390 },
  { name: 'May', completed: 189, pending: 480 },
  { name: 'Jun', completed: 239, pending: 380 },
  { name: 'Jul', completed: 349, pending: 430 },
];

export default function DealStats() {
  return (
    <div className="h-[400px] w-full p-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
                          Completed: {payload[0].value}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-chart-2 mr-2" />
                        <span className="text-sm font-medium">
                          Pending: {payload[1].value}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}