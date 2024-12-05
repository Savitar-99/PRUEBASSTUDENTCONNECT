import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface GradesSectionProps {
  grades: { subject: string; grade: number }[];
}

export function GradesSection({ grades }: GradesSectionProps) {
  return (
    <div className="mt-4">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={grades}>
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
            (grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length).toFixed(1)
          }
        </p>
      </div>
    </div>
  );
}
