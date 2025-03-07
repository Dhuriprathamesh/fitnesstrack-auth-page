
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', calories: 1200, duration: 45 },
  { day: 'Tue', calories: 1800, duration: 60 },
  { day: 'Wed', calories: 1500, duration: 55 },
  { day: 'Thu', calories: 2000, duration: 70 },
  { day: 'Fri', calories: 1700, duration: 65 },
  { day: 'Sat', calories: 2200, duration: 80 },
  { day: 'Sun', calories: 1100, duration: 40 },
];

const ProgressChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
          <YAxis 
            yAxisId="left" 
            tick={{ fontSize: 12 }} 
            stroke="#9CA3AF" 
            domain={[0, 'dataMax + 500']}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            tick={{ fontSize: 12 }} 
            stroke="#9CA3AF" 
            domain={[0, 'dataMax + 20']}
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(17, 24, 39, 0.8)', 
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#F9FAFB'
            }} 
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="calories"
            name="Calories"
            stroke="#F97316"
            strokeWidth={2}
            dot={{ r: 4, fill: '#F97316', strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#F97316', stroke: '#F97316', strokeWidth: 2 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="duration"
            name="Duration (min)"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4, fill: '#3B82F6', strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#3B82F6', stroke: '#3B82F6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
