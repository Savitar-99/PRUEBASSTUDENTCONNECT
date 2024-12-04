import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

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
          src="/assets/logo.png" // Asegúrate de que esta ruta sea correcta
          alt="Logo de StudentConnect"
          className="w-32 h-auto mb-4"
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
            className="mt-1 block py-2 px-4 w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63]"
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
            className="mt-1 py-2 px-4 block w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63]"
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

      <footer className="mt-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <a href="https://www.linkedin.com/in/andreianegrului/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Andrei Anegrului</p>
            </a>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/joel-galán-pérez-910724335/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Joel Galán Pérez</p>
            </a>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/lausierrajaramillo/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
              <p className="text-sm text-gray-600">Laura Sierra Jaramillo</p>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          &copy; 2024 StudentConnect. Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-600">
          <a href="https://www.termsfeed.com/live/ab0a645e-e0bb-4ded-9a1e-6c9b2ac069fb" target="_blank" rel="noopener noreferrer" className="hover:text-[#F26F63]">Términos y Condiciones</a> | <a href="https://www.termsfeed.com/live/a8917dd5-e7a1-43a2-a823-47bc9e89f718" target="_blank" rel="noopener noreferrer" className="hover:text-[#F26F63]">Política de Privacidad</a>
        </p>
      </footer>
    </div>
  );
}

// Per fer el privacy template: https://www.termsfeed.com/blog/sample-privacy-policy-template/