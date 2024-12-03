import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterStudent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementación real, aquí iría la lógica de registro
    console.log('Registrando estudiante:', { email, password, name });
    navigate('/student-dashboard');
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Registro de Estudiante</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F26F63] focus:ring focus:ring-[#F26F63] focus:ring-opacity-50"
            required
          />
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
          Registrarse
        </button>
      </form>
    </div>
  );
}