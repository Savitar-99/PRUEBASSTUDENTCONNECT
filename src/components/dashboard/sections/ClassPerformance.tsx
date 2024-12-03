import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ClassPerformance() {
  const performanceData = [
    { subject: 'Matemáticas', promedio: 85, aprobados: 90 },
    { subject: 'Ciencias', promedio: 78, aprobados: 85 },
    { subject: 'Historia', promedio: 82, aprobados: 95 },
    { subject: 'Literatura', promedio: 88, aprobados: 100 },
  ];

  return (
    <div className="space-y-6">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="promedio" fill="#F26F63" name="Promedio" />
            <Bar dataKey="aprobados" fill="#4B5563" name="% Aprobados" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-500">Promedio General</h4>
          <p className="text-2xl font-bold text-[#F26F63]">
            {(performanceData.reduce((acc, curr) => acc + curr.promedio, 0) / performanceData.length).toFixed(1)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-500">Tasa de Aprobación</h4>
          <p className="text-2xl font-bold text-[#F26F63]">
            {(performanceData.reduce((acc, curr) => acc + curr.aprobados, 0) / performanceData.length).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}