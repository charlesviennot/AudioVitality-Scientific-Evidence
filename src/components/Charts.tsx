import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine, LabelList } from 'recharts';

export const ModalityChart = () => {
  const data = [
    { name: 'Cryotherapy', value: 4, label: '<5%' },
    { name: 'Massage', value: 10, label: '+5–15%' },
    { name: 'Active Recovery', value: 10, label: '~10%' },
    { name: 'Cold Water', value: 27.5, label: '+20–35%' },
    { name: 'AudioVitality', value: 43, label: '+43%' },
  ];

  return (
    <div className="h-[280px] w-full mt-8 mb-10 bg-white p-6 rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border border-gray-100">
      <h4 className="text-sm font-semibold text-center mb-6 text-[#1d1d1f]">HRV Response by Recovery Modality</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 60, left: 80, bottom: 5 }}>
          <defs>
            <linearGradient id="avGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="grayGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e5e7eb" />
              <stop offset="1" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 12, fontWeight: 500 }} />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }} 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number) => [`${value}%`, 'Improvement']} 
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
            <LabelList dataKey="label" position="right" fill="#515154" fontSize={12} fontWeight={600} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'AudioVitality' ? 'url(#avGradient)' : 'url(#grayGradient)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const StudiesChart = () => {
  const data = [
    { name: 'RCT CHUV', value: 43, type: 'Published' },
    { name: 'Lausanne \'24', value: 31.3, type: 'Completed' },
    { name: 'Yverdon \'23/24', value: 25, type: 'Completed' },
    { name: 'Lausanne \'25/26', value: 37, type: 'Completed' },
    { name: 'Airline Pilot', value: 21, type: 'Completed' },
  ];

  return (
    <div className="h-[280px] w-full mt-8 mb-10 bg-white p-6 rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border border-gray-100">
      <h4 className="text-sm font-semibold text-center mb-6 text-[#1d1d1f]">HRV Improvement Across Completed Studies</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 30, right: 0, left: -20, bottom: 20 }}>
          <defs>
            <linearGradient id="avGradientVert" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="grayGradientVert" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9ca3af" />
              <stop offset="1" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 11, fontWeight: 500 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 11 }} tickFormatter={(val) => `${val}%`} />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }} 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number) => [`+${value}%`, 'HRV Increase']} 
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={36}>
            <LabelList dataKey="value" position="top" formatter={(val: number) => `+${val}%`} fill="#515154" fontSize={12} fontWeight={600} dy={-5} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.type === 'Published' ? 'url(#avGradientVert)' : 'url(#grayGradientVert)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomPilotLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const isNegative = value < 0;
  return (
    <text 
      x={isNegative ? x - 8 : x + width + 8} 
      y={y + height / 2} 
      fill={isNegative ? '#ef4444' : '#3b82f6'} 
      fontSize={12} 
      fontWeight={600} 
      dy={4} 
      textAnchor={isNegative ? 'end' : 'start'}
    >
      {value > 0 ? '+' : ''}{value}%
    </text>
  );
};

export const PilotChart = () => {
  const data = [
    { name: 'Night awakenings', value: -38 },
    { name: 'Recovery index', value: 12 },
    { name: 'Sleep efficiency', value: 15 },
    { name: 'HRV improvement', value: 21 },
  ];

  return (
    <div className="h-[240px] w-full mt-8 mb-10 bg-white p-6 rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border border-gray-100">
      <h4 className="text-sm font-semibold text-center mb-6 text-[#1d1d1f]">Airline Pilot Case Study — 4-Week With vs. Without App</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 50, left: 120, bottom: 5 }}>
          <defs>
            <linearGradient id="posGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="negGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f97316" />
              <stop offset="1" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
          <XAxis type="number" hide domain={[-50, 40]} />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#86868b', fontSize: 12, fontWeight: 500 }} />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }} 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value: number) => [`${value > 0 ? '+' : ''}${value}%`, 'Change']} 
          />
          <ReferenceLine x={0} stroke="#e2e8f0" strokeWidth={2} />
          <Bar dataKey="value" radius={6} barSize={20}>
            <LabelList content={<CustomPilotLabel />} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.value > 0 ? 'url(#posGradient)' : 'url(#negGradient)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
