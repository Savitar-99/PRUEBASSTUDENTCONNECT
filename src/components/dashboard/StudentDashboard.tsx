import React, { useState } from 'react';
import { BarChart, Calendar, Target, ChevronDown, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { GradesSection } from './sections/GradesSection';
import { GoalsSection } from './sections/GoalsSection';
import { DashboardHeader } from '../shared/DashboardHeader';

// Datos simulados para las asistencias
const mockAttendance = [
  { class: "Matemáticas", status: "attended" }, // Asistido
  { class: "Física", status: "not_attended" }, // No asistido, no justificado
  { class: "Química", status: "justified" }, // No asistido, justificado
  { class: "Historia", status: "attended" },
  { class: "Lengua", status: "not_attended" },
];

export function StudentDashboard() {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [photo, setPhoto] = useState("https://via.placeholder.com/100");

  const toggleInfoVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader title="Panel del Estudiante" />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Información del Alumno */}
        <div className="bg-white overflow-hidden shadow rounded-lg md:col-span-3 mb-6">
          <div 
            className="p-5 flex items-center justify-between cursor-pointer"
            onClick={toggleInfoVisibility}
          >
            <div className="flex items-center">
              {/* Foto del alumno */}
              <label htmlFor="photo-upload" className="cursor-pointer">
                <img
                  src={photo}
                  alt="Foto del alumno"
                  className="w-24 h-24 rounded-full object-cover mr-4"
                />
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Juan Pérez</h2>
                <p className="text-gray-700">Ingeniería de Software</p>
              </div>
            </div>
            {/* Icono de flecha */}
            <ChevronDown
              className={`h-6 w-6 text-[#F26F63] transition-transform ${isInfoVisible ? "rotate-180" : ""}`}
            />
          </div>
          {/* Información adicional del alumno */}
          {isInfoVisible && (
            <div className="px-5 pb-5">
              <div className="space-y-2">
                <div className="text-gray-700">
                  <span className="font-semibold">Nombre: </span>
                  Juan
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Apellidos: </span>
                  Pérez
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Email: </span>
                  juan.perez@example.com
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Teléfono: </span>
                  612345678
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Curso: </span>
                  Ingeniería de Software
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sección Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Asistencias */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Asistencias</h2>
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  {mockAttendance.map((entry, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{entry.class}</span>
                      {entry.status === "attended" && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {entry.status === "not_attended" && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      {entry.status === "justified" && (
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Promedio */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <BarChart className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Promedio</h2>
              </div>
              <GradesSection />
            </div>
          </div>

          {/* Objetivos */}
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
