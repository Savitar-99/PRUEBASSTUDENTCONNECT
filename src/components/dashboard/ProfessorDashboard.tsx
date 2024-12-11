import React, { useState } from 'react';
import { StudentSearch } from '../dashboard/sections/StudentSearch';
import { Calendar } from '../dashboard/sections/Calendar';
import { PerformanceChart } from '../dashboard/sections/PerformanceChart';
import { UserProfile } from '../dashboard/sections/UserProfile';
import { AcademicGuidance } from '../dashboard/sections/AcademicGuidance';
import { LogoutButton } from '../dashboard/sections/LogoutButton';
import { User } from '../../types';
import { motion } from 'framer-motion'; // Importamos framer-motion

const mockProfessor: User = {
  id: 'p1',
  role: 'professor',
  name: 'Ana',
  lastName: 'Martínez',
  email: 'ana.martinez@ejemplo.com',
  phone: '+34 987 654 321',
  school: 'IES Example',
};

const mockStudents: User[] = [
  {
    id: '1',
    role: 'student',
    name: 'Juan',
    lastName: 'García',
    email: 'juan.garcia@ejemplo.com',
    phone: '+34 123 456 789',
    school: 'IES Example',
  },
];

const mockAttendances = [
  { date: '2024-03-01', status: 'present' as const },
  { date: '2024-03-04', status: 'absent' as const },
  { date: '2024-03-05', status: 'justified' as const },
];

const mockSubjects = [
  { name: 'Matemáticas', level: 4, progress: 85 },
  { name: 'Lengua', level: 3, progress: 75 },
  { name: 'Historia', level: 4, progress: 90 },
];

const mockGuidancePosts = [
  {
    id: '1',
    content: 'Me gustaría explorar carreras relacionadas con la tecnología.',
    date: '2024-03-01',
    author: 'Juan García',
    comments: [
      {
        id: '1',
        content:
          'Excelente elección. Con tus calificaciones en matemáticas, podrías considerar Ingeniería Informática.',
        author: 'Prof. Martínez',
        date: '2024-03-02',
      },
    ],
  },
];

export const ProfessorDashboard: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<User | null>(null);
  const [filteredStudents, setFilteredStudents] = useState(mockStudents);

  const handleSearch = (query: string) => {
    const filtered = mockStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase()) ||
        student.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          {/* Contenedor del logo y la bienvenida alineados a la izquierda */}
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png" // Asegúrate de que esta ruta sea correcta
              alt="Logo de StudentConnect"
              className="w-16 h-auto" // Tamaño ajustado del logo
            />
            <h1 className="text-3xl font-bold text-studentconnectRed">
              Bienvenido a tu perfil,{' '}
              <span className="text-[#F26F63]">{mockProfessor.name} {mockProfessor.lastName}</span>
            </h1>
          </div>

          {/* Botón de cerrar sesión alineado a la derecha */}
          <LogoutButton />
        </motion.div>

        {/* Aquí ya no es necesario que esté condicionado por el estudiante */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <UserProfile user={mockProfessor} editable={true} /> {/* Perfil editable del profesor */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <StudentSearch
            onSearch={handleSearch}
            students={filteredStudents}
            onStudentSelect={setSelectedStudent}
          />
        </motion.div>

        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="space-y-8">
              <UserProfile user={selectedStudent} />
              <Calendar attendances={mockAttendances} />
            </div>

            <div className="space-y-8">
              <PerformanceChart subjects={mockSubjects} />
              <AcademicGuidance
                posts={mockGuidancePosts}
                onAddComment={(postId, content) => console.log('New comment:', postId, content)}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
