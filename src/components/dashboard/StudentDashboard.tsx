import React, { useEffect, useState } from 'react';
import { Calendar } from '../dashboard/sections/Calendar';
import { PerformanceChart } from '../dashboard/sections/PerformanceChart';
import { UserProfile } from '../dashboard/sections/UserProfile';
import { AcademicGuidance } from '../dashboard/sections/AcademicGuidance';
import { LogoutButton } from '../dashboard/sections/LogoutButton';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const getRandomStatus = () => {
  const statuses = ['present', 'absent', 'justified'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomDate = () => {
  const start = new Date(2024, 9, 1); // 1 de octubre de 2024
  const end = new Date(2024, 11, 31); // 31 de diciembre de 2024
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Formato yyyy-mm-dd
};

const generateRandomAttendances = () => {
  return Array.from({ length: 20 }, () => ({
    date: getRandomDate(),
    status: getRandomStatus()
  }));
};

const subjectNames = [
  'Matemáticas', 'Lengua', 'Historia', 'Ciencias',
  'Educación Física', 'Arte', 'Música', 'Tecnología',
  'Geografía', 'Biología'
];

const getRandomSubjectName = () => {
  return subjectNames[Math.floor(Math.random() * subjectNames.length)];
};

const generateRandomSubjects = () => {
  return Array.from({ length: 5 }, () => ({
    name: getRandomSubjectName(),
    level: Math.floor(Math.random() * 5) + 1,
    progress: Math.floor(Math.random() * 100)
  }));
};

const generateRandomGuidancePosts = () => {
  const contents = [
    'Me gustaría explorar carreras relacionadas con la tecnología.',
    'Estoy interesado en ciencias sociales.',
    '¿Qué opinan sobre estudiar medicina?',
  ];
  return contents.map((content, index) => ({
    id: String(index + 1),
    content,
    date: `2024-12-${index + 1}`,
    author: `Juan García`,
    comments: [
      {
        id: '1',
        content: 'Excelente elección.',
        author: 'Prof. Martínez',
        date: `2024-12-${index + 2}`,
      },
    ],
  }));
};

export const StudentDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>();
  const [attendances, setAttendances] = useState(generateRandomAttendances());
  const [subjects, setSubjects] = useState(generateRandomSubjects());
  const [guidancePosts, setGuidancePosts] = useState(generateRandomGuidancePosts());

  useEffect(() => {
    const userAux = localStorage.getItem("user");
    if (userAux) {
      setUser(JSON.parse(userAux));
      setAttendances(generateRandomAttendances());
      setSubjects(generateRandomSubjects());
      setGuidancePosts(generateRandomGuidancePosts());
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png"
              alt={t('logoAlt')}
              className="w-16 h-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              {t('welcomeTeacher')}
              <span className="text-[#F26F63]">{user.nombre} {user.apellido}</span>
            </h1>
          </div>
          <LogoutButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
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
              <Calendar attendances={attendances} />
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PerformanceChart subjects={subjects} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <AcademicGuidance
                isStudent={true}
                posts={guidancePosts}
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
