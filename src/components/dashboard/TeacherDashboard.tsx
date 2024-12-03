import React from 'react';
import { Users, GraduationCap, Target } from 'lucide-react';
import { StudentsList } from './sections/StudentsList';
import { ClassPerformance } from './sections/ClassPerformance';
import { AcademicGuidance } from './sections/AcademicGuidance';
import { DashboardHeader } from '../shared/DashboardHeader';

export function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader title="Panel del Profesor" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Gestión de Asistencias</h2>
              </div>
              <StudentsList />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Rendimiento de la Clase</h2>
              </div>
              <ClassPerformance />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Orientación Académica</h2>
              </div>
              <AcademicGuidance />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}