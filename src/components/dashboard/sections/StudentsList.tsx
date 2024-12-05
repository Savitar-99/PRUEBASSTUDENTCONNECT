import React, { useState } from 'react';
import { CheckCircle, XCircle, Edit2 } from 'lucide-react';
import { Calendar } from '../../calendar/Calendar';
import { format } from 'date-fns';

interface Student {
  id: string;
  name: string;
  image: string;
  email: string;
  phoneNumber: string;
  courses: string[];
  attendance: {
    date: string;
    present: boolean;
  }[];
}

export function StudentsList() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
      email: 'juan.perez@email.com',
      phoneNumber: '123-456-7890',
      courses: ['Matemáticas', 'Lengua', 'Historia'],
      attendance: [
        { date: '2024-03-01', present: true },
        { date: '2024-03-02', present: true },
        { date: '2024-03-03', present: false },
      ],
    },
    {
      id: '2',
      name: 'María García',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      email: 'maria.garcia@email.com',
      phoneNumber: '234-567-8901',
      courses: ['Física', 'Química', 'Biología'],
      attendance: [
        { date: '2024-03-01', present: true },
        { date: '2024-03-02', present: false },
        { date: '2024-03-03', present: true },
      ],
    },
  ];

  const handleAttendanceUpdate = (student: Student, date: Date, present: boolean) => {
    // En una implementación real, esto actualizaría la base de datos
    console.log(`Actualizando asistencia de ${student.name} para ${format(date, 'yyyy-MM-dd')}: ${present}`);
  };

  return (
    <div className="space-y-6">
      {students.map((student) => (
        <div key={student.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={student.image}
                alt={student.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="ml-3 font-medium">{student.name}</span>
            </div>
            <button 
              className="text-[#F26F63] hover:text-[#e25d51]"
              onClick={() => setSelectedStudent(selectedStudent?.id === student.id ? null : student)}
            >
              <Edit2 className="h-5 w-5" />
            </button>
          </div>
          
          {selectedStudent?.id === student.id && (
            <div className="mt-4">
              {/* Información adicional sobre el estudiante */}
              <div className="mb-2">
                <strong>Email:</strong> {student.email}
              </div>
              <div className="mb-2">
                <strong>Teléfono:</strong> {student.phoneNumber}
              </div>
              <div className="mb-2">
                <strong>Cursos:</strong> {student.courses.join(', ')}
              </div>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  const isPresent = student.attendance.find(
                    a => a.date === format(date, 'yyyy-MM-dd')
                  )?.present;
                  handleAttendanceUpdate(student, date, !isPresent);
                }}
                attendanceData={student.attendance}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
