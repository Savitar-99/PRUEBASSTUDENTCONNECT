import React from 'react';
import { Calendar as CalendarIcon, CheckCircle, XCircle } from 'lucide-react';

export function AttendanceSection() {
  const attendanceData = [
    { date: '2024-03-01', present: true },
    { date: '2024-03-02', present: true },
    { date: '2024-03-03', present: false },
    // Más datos de asistencia...
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
            alt="Perfil"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 font-medium">Juan Pérez</span>
        </div>
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {attendanceData.map((record) => (
          <div key={record.date} className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span className="text-sm text-gray-600">
              {new Date(record.date).toLocaleDateString('es-ES')}
            </span>
            {record.present ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}