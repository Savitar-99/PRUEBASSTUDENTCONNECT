import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, MessageSquare } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  image: string;
  career: string;
  goals: string[];
  comments: Comment[];
}

interface Comment {
  id: string;
  text: string;
  date: string;
  teacherName: string;
}

export function AcademicGuidance() {
  const [newComment, setNewComment] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const students: Student[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
      career: 'Ingeniería de Software',
      goals: ['Certificación en desarrollo web', 'Inglés avanzado', 'Proyectos de investigación'],
      comments: [
        {
          id: '1',
          text: 'Excelente progreso en el último proyecto. Continúa así.',
          date: '2024-03-01',
          teacherName: 'Prof. García'
        }
      ]
    },
    {
      id: '2',
      name: 'María García',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      career: 'Ciencias de la Computación',
      goals: ['Machine Learning', 'Intercambio académico', 'Prácticas empresariales'],
      comments: []
    },
  ];

  const handleAddComment = (studentId: string) => {
    if (!newComment.trim()) return;
    
    // En una implementación real, esto se enviaría al backend
    console.log(`Nuevo comentario para ${studentId}: ${newComment}`);
    setNewComment('');
    setSelectedStudent(null);
  };

  return (
    <div className="space-y-6">
      {students.map((student) => (
        <div key={student.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img
              src={student.image}
              alt={student.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{student.name}</h3>
              <div className="flex items-center text-gray-500">
                <Briefcase className="h-4 w-4 mr-1" />
                <span className="text-sm">{student.career}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-[#F26F63] mt-1" />
              <div className="ml-3">
                <h4 className="font-medium">Objetivos Académicos</h4>
                <ul className="mt-2 space-y-2">
                  {student.goals.map((goal, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-gray-400" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-[#F26F63]" />
                Comentarios y Recomendaciones
              </h4>
              
              <div className="space-y-3">
                {student.comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600">{comment.text}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {comment.teacherName} - {new Date(comment.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>

              {selectedStudent === student.id ? (
                <div className="mt-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escribe tu comentario..."
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
                    rows={3}
                  />
                  <div className="mt-2 flex justify-end space-x-2">
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-800"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => handleAddComment(student.id)}
                      className="px-3 py-1 bg-[#F26F63] text-white rounded hover:bg-[#e25d51]"
                    >
                      Agregar Comentario
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedStudent(student.id)}
                  className="mt-3 text-[#F26F63] hover:text-[#e25d51] text-sm font-medium"
                >
                  Agregar recomendación
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}