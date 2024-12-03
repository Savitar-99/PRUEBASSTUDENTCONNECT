import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function GradesSection() {
  const gradesData = [
    { subject: 'Matemáticas', grade: 85 },
    { subject: 'Ciencias', grade: 92 },
    { subject: 'Historia', grade: 78 },
    { subject: 'Literatura', grade: 88 },
  ];

  return (
    <div className="mt-4">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={gradesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="grade" stroke="#F26F63" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Promedio General: {
            (gradesData.reduce((acc, curr) => acc + curr.grade, 0) / gradesData.length).toFixed(1)
          }
        </p>
      </div>
    </div>
  );
}