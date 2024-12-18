import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StudentSearchProps {
  onSearch: (query: string) => void;
  students: any[];
  onStudentSelect: (student: any) => void;
}

export const StudentSearch: React.FC<StudentSearchProps> = ({ onSearch, students, onStudentSelect }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder={t('searchStudent')} // Usando i18n para el placeholder
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
              key={student.idPersona}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => {onStudentSelect(student);  setQuery('');} }
            >
              <div className="flex items-center gap-3">
                <img
                  src={student.foto != null? `data:image/jpeg;base64,${student.foto}` : '/assets/perfilfoto.webp'}
                  alt={student.nombre}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{student.nombre} {student.apellido}</p>
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
