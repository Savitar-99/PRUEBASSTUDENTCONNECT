import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

const studentEmails = ['student@example.com'];
const teacherEmails = ['teacher@example.com'];

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let userType: 'student' | 'teacher' = 'student';

    if (teacherEmails.includes(email)) {
      userType = 'teacher';
    } else if (studentEmails.includes(email)) {
      userType = 'student';
    } else {
      alert('Correo electrónico no reconocido');
      return;
    }

    // En una implementación real, aquí iría la autenticación
    navigate(`/${userType}-dashboard`);
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <img
          src="/assets/logo.png"
          alt="Logo de StudentConnect"
          className="w-32 h-auto"
        />
        <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63]"
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
            className="mt-1 block w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63]"
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

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <a
            href="/register-student"
            className="text-[#F26F63] hover:text-[#e25d51] font-medium"
          >
            Regístrate como estudiante
          </a>
        </p>
      </div>
    </div>
  );
}