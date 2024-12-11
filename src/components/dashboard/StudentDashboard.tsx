import React from 'react';
import { Calendar } from '../dashboard/sections/Calendar';
import { PerformanceChart } from '../dashboard/sections/PerformanceChart';
import { UserProfile } from '../dashboard/sections/UserProfile';
import { AcademicGuidance } from '../dashboard/sections/AcademicGuidance';
import { LogoutButton } from '../dashboard/sections/LogoutButton';
import { FaLinkedin } from 'react-icons/fa'; // Importamos el ícono de LinkedIn
import { motion } from 'framer-motion'; // Importamos framer-motion

const mockUser = {
  id: '1',
  role: 'student' as const,
  name: 'Juan',
  lastName: 'García',
  email: 'juan.garcia@ejemplo.com',
  phone: '+34 123 456 789',
  school: 'IES Example',
};

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
        content: 'Excelente elección. Con tus calificaciones en matemáticas, podrías considerar Ingeniería Informática.',
        author: 'Prof. Martínez',
        date: '2024-03-02',
      },
    ],
  },
];

export const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* Contenedor del logo y la bienvenida alineados a la izquierda */}
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png" // Asegúrate de que esta ruta sea correcta
              alt="Logo de StudentConnect"
              className="w-16 h-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              Bienvenido a tu perfil, <span className="text-[#F26F63]">{mockUser.name} {mockUser.lastName}</span>
            </h1>
          </div>

          {/* Botón de cerrar sesión alineado a la derecha */}
          <LogoutButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Animación de entrada para UserProfile y Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UserProfile user={mockUser} editable={true} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Calendar attendances={mockAttendances} />
            </motion.div>
          </div>

          <div className="space-y-8">
            {/* Animación de entrada para PerformanceChart y AcademicGuidance */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PerformanceChart subjects={mockSubjects} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <AcademicGuidance
                isStudent={true}
                posts={mockGuidancePosts}
                onAddPost={(content) => console.log('New post:', content)}
                onEditPost={(id, content) => console.log('Edit post:', id, content)}
                onAddComment={(postId, content) => console.log('New comment:', postId, content)}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
