import React, { useEffect, useState } from 'react';
import { Calendar } from '../dashboard/sections/Calendar';
import { PerformanceChart } from '../dashboard/sections/PerformanceChart';
import { UserProfile } from '../dashboard/sections/UserProfile';
import { AcademicGuidance } from '../dashboard/sections/AcademicGuidance';
import { LogoutButton } from '../dashboard/sections/LogoutButton';
import { motion } from 'framer-motion'; // Importamos framer-motion
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción
import axios from 'axios'; // Importamos axios

// Definición del tipo de usuario (importado si se usa un tipo específico)
import { User } from '../types';

const mockAttendances = [
  { date: '2024-03-01', status: 'present' },
  { date: '2024-03-04', status: 'absent' },
  { date: '2024-03-05', status: 'justified' },
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
  const { t } = useTranslation(); // Usamos el hook de traducción
  const [user, setUser] = useState<User | null>(null); // Estado para almacenar los datos del usuario

  function getFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  useEffect(() => {
    // Función para obtener los datos del usuario desde la API
    const fetchUserData = async () => {
      try {
              // Usar la función para obtener el valor de 'token' desde el localStorage
        const token = getFromLocalStorage('token');
        
        if (!token) {
          console.log('No se encontró el token en el localStorage');
        }

        // const token = 'your_auth_token'; // Obtén el token desde el almacenamiento local, contexto, etc.
        const response = await axios.get('http://localhost:8080/api/personas', {
          headers: {
            Authorization: `Bearer ${token}`, // Enviamos el token de autenticación
          },
        });
        setUser(response.data); // Guardamos los datos del usuario en el estado
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData(); // Llamamos a la función para obtener los datos
  }, []); // Este efecto solo se ejecuta una vez cuando el componente se monta

  if (!user) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje mientras se cargan los datos
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* Contenedor del logo y la bienvenida alineados a la izquierda */}
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png" // Asegúrate de que esta ruta sea correcta
              alt={t('logoAlt')} // Traducción para el alt del logo
              className="w-16 h-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              {t('welcomeTeacher')}
              <span className="text-[#F26F63]">{user.name} {user.lastName}</span>
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
              <UserProfile user={user} editable={true} />
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
