import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterStudent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación adicional de longitud (opcional)
    if (phone.length !== 9) {
      alert('El número de teléfono debe tener exactamente 9 dígitos.');
      return;
    }

    console.log('Registrando estudiante:', { email, password, name, lastName, phone });
    navigate('/student-dashboard');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Permitir solo números y limitar a 9 caracteres
    if (/^\d{0,9}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        <span className="text-white">Crea tu cuenta en </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </h1>

      {/* Formulario */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Registro de Estudiante
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "

              required
            />
          </div>

          {/* Número de Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              pattern="\d{9}"
              title="El número de teléfono debe contener exactamente 9 dígitos."
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none "
              required
            />
          </div>

          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
          >
            Registrarse
          </button>
        </form>

        {/* Botón para volver al inicio */}
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
        >
          Volver al Inicio de Sesión
        </button>
      </div>
    </div>
  );
}
