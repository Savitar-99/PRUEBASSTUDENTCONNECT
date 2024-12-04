import React, { useState } from 'react';
import { Users, GraduationCap, Target, ChevronDown, User, MessageSquare, Calendar } from 'lucide-react';
import { StudentsList } from './sections/StudentsList';
import { ClassPerformance } from './sections/ClassPerformance';
import { AcademicGuidance } from './sections/AcademicGuidance';
import { DashboardHeader } from '../shared/DashboardHeader';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-[#F26F63] transition-colors"
      >
        <span>Opciones</span>
        <ChevronDown className="ml-2 h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          <a href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <User className="mr-2 h-5 w-5" />
            Perfil del Profesor
          </a>
          <a href="/messages" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MessageSquare className="mr-2 h-5 w-5" />
            Mensajes
          </a>
          <a href="/calendar" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Calendar className="mr-2 h-5 w-5" />
            Calendario
          </a>
        </div>
      )}
    </div>
  );
}

export function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader title="Panel del Profesor" />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <DropdownMenu />
        </div>
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