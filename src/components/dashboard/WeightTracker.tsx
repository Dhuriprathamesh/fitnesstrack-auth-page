
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Aug 1', weight: 185 },
  { date: 'Aug 8', weight: 183 },
  { date: 'Aug 15', weight: 182 },
  { date: 'Aug 22', weight: 180 },
  { date: 'Aug 29', weight: 178 },
  { date: 'Sep 5', weight: 177 },
  { date: 'Sep 12', weight: 176 },
];

const WeightTracker = () => {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
          <YAxis 
            domain={['dataMin - 2', 'dataMax + 2']} 
            tick={{ fontSize: 12 }} 
            stroke="#9CA3AF" 
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(17, 24, 39, 0.8)', 
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#F9FAFB'
            }}
            formatter={(value) => [`${value} lbs`, 'Weight']}
          />
          <Area 
            type="monotone" 
            dataKey="weight" 
            stroke="#8B5CF6" 
            fill="#8B5CF6" 
            fillOpacity={0.2} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightTracker;
