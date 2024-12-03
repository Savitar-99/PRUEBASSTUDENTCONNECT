import React from 'react';
import { BarChart, Calendar, Target } from 'lucide-react';
import { AttendanceSection } from './sections/AttendanceSection';
import { GradesSection } from './sections/GradesSection';
import { GoalsSection } from './sections/GoalsSection';
import { DashboardHeader } from '../shared/DashboardHeader';

export function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader title="Panel del Estudiante" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Asistencias</h2>
              </div>
              <AttendanceSection />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <BarChart className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Promedio</h2>
              </div>
              <GradesSection />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Objetivos</h2>
              </div>
              <GoalsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}