import React, { useState } from 'react';
import { StudentSearch } from '../../search/StudentSearch';
import { Calendar } from '../calendar/Calendar';
import { PerformanceChart } from '../Performance/PerformanceChart';
import { UserProfile } from '../profile/UserProfile';
import { AcademicGuidance } from '../Academic/AcademicGuidance';
import { LogoutButton } from '../Logout/LogoutButton';
import { User } from '../../types';

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
        content: 'Excelente elección. Con tus calificaciones en matemáticas, podrías considerar Ingeniería Informática.',
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
      student =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.lastName.toLowerCase().includes(query.toLowerCase()) ||
        student.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido, {mockProfessor.name} {mockProfessor.lastName}
          </h1>
          <LogoutButton />
        </div>

        <div className="mb-8">
          <UserProfile user={mockProfessor} />
        </div>

        <div className="mb-8">
          <StudentSearch
            onSearch={handleSearch}
            students={filteredStudents}
            onStudentSelect={setSelectedStudent}
          />
        </div>

        {selectedStudent && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>
        )}
      </div>
    </div>
  );
};