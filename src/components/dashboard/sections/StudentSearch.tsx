import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { User } from '../types';

interface StudentSearchProps {
  onSearch: (query: string) => void;
  students: User[];
  onStudentSelect: (student: User) => void;
}

export const StudentSearch: React.FC<StudentSearchProps> = ({ onSearch, students, onStudentSelect }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar alumno..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-transparent"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {query && (
        <div className="mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {students.map((student) => (
            <button
              key={student.id}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => onStudentSelect(student)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={student.photoUrl || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
                  alt={student.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{student.name} {student.lastName}</p>
                  <p className="text-sm text-gray-500">{student.email}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};