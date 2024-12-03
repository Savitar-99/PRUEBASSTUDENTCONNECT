import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementación real, aquí iría la autenticación
    navigate(`/${userType}-dashboard`);
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <UserCircle2 className="w-16 h-16 text-[#F26F63] mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Usuario
          </label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value as 'student' | 'teacher')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F26F63] focus:ring focus:ring-[#F26F63] focus:ring-opacity-50"
          >
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F26F63] focus:ring focus:ring-[#F26F63] focus:ring-opacity-50"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F26F63] focus:ring focus:ring-[#F26F63] focus:ring-opacity-50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#F26F63] hover:bg-[#e25d51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63]"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}