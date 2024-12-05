import React, { useState } from 'react';
import { Users, GraduationCap, Target, ChevronDown, User, MessageSquare, Calendar } from 'lucide-react';
import { DashboardHeader } from '../shared/DashboardHeader';
import { ClassPerformance } from './sections/ClassPerformance';
import { AcademicGuidance } from './sections/AcademicGuidance';
import { StudentsList } from './sections/StudentsList';

const studentData = [
  {
    id: 1,
    name: 'Juan Pérez',
    profile: 'Información de Juan Pérez',
    image: 'path/to/juan.jpg',
    grades: [80, 85, 90], // Notas de Juan
    classes: ['Matemáticas', 'Lengua', 'Historia']
  },
  {
    id: 2,
    name: 'Ana Gómez',
    profile: 'Información de Ana Gómez',
    image: 'path/to/ana.jpg',
    grades: [75, 88, 92], // Notas de Ana
    classes: ['Física', 'Química', 'Biología']
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    profile: 'Información de Carlos Rodríguez',
    image: 'path/to/carlos.jpg',
    grades: [90, 78, 85], // Notas de Carlos
    classes: ['Geografía', 'Historia', 'Inglés']
  },
  {
    id: 4,
    name: 'Luisa Fernández',
    profile: 'Información de Luisa Fernández',
    image: 'path/to/luisa.jpg',
    grades: [95, 91, 88], // Notas de Luisa
    classes: ['Matemáticas', 'Física', 'Ciencias Sociales']
  }
];

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudentClick = (student: { id: number; name: string; profile: string }) => {
    setSelectedStudent(student);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader title="Panel del Profesor" />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar estudiante..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border rounded-lg text-gray-700"
            />
          </div>
          <DropdownMenu />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gestión de Asistencias */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Perfil del Alumno</h2>
              </div>
              <ul>
                {filteredStudents.map(student => (
                  <li
                    key={student.id}
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                    onClick={() => handleStudentClick(student)}
                  >
                    {student.name}
                  </li>
                ))}
              </ul>
              {selectedStudent && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{selectedStudent.name}</h3>
                  <img src={selectedStudent.image} alt={selectedStudent.name} className="h-32 w-32 rounded-full" />
                  <p>{selectedStudent.profile}</p>
                </div>
              )}
            </div>
          </div>

          {/* Rendimiento de la Clase */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Rendimiento de la Clase</h2>
              </div>
              {/* Gráfico de rendimiento del estudiante */}
              {selectedStudent ? (
                <ClassPerformance grades={selectedStudent.grades} classes={selectedStudent.classes} />
              ) : (
                <p>Selecciona un estudiante para ver su rendimiento.</p>
              )}
            </div>
          </div>

          {/* Orientación Académica */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-[#F26F63]" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Orientación Académica</h2>
              </div>
              {/* Aquí puedes agregar la orientación académica o cualquier dato relevante */}
              {selectedStudent && <AcademicGuidance student={selectedStudent} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
