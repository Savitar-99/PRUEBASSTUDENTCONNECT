import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Datos simulados para usuarios registrados (reemplázalos con una API o base de datos en producción)
const users = [
  { fullName: 'Juan Pérez', email: 'juan.perez@example.com', password: '1234' },
  { fullName: 'Ana López', email: 'ana.lopez@example.com', password: 'abcd' },
];

export function PasswordRecovery() {
  const [step, setStep] = useState<'verify' | 'reset'>('verify'); // Paso actual
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar usuario (case-insensitive)
    const user = users.find(
      (user) =>
        user.fullName.toLowerCase() === fullName.trim().toLowerCase() &&
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (user) {
      setStep('reset');
      setError('');
    } else {
      setError('Nombre completo o correo electrónico no válido.');
    }
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Actualizar contraseña (simulado)
    const userIndex = users.findIndex(
      (user) =>
        user.fullName.toLowerCase() === fullName.trim().toLowerCase() &&
        user.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      setSuccessMessage('¡Contraseña actualizada exitosamente!');
      setError('');
      setTimeout(() => navigate('/'), 3000); // Redirigir al inicio después de 3 segundos
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        <span className="text-white">Recupera tu cuenta en </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </h1>

      {/* Contenedor */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          {step === 'verify' ? 'Verificar Identidad' : 'Restablecer Contraseña'}
        </h2>

        {error && (
          <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
        )}
        {successMessage && (
          <p className="mb-4 text-sm text-green-500 text-center">
            {successMessage}
          </p>
        )}

        {step === 'verify' && (
          <form onSubmit={handleVerify} className="space-y-4">
            {/* Nombre Completo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none"
                required
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo Electrónico Asociado
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none"
                required
              />
            </div>

            {/* Botón para Verificar */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
            >
              Verificar Identidad
            </button>
          </form>
        )}

        {step === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            {/* Nueva Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nueva Contraseña
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none"
                required
              />
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md text-gray-900 focus:ring-2 focus:ring-[#F26F63] focus:outline-none"
                required
              />
            </div>

            {/* Botón para Restablecer Contraseña */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
            >
              Restablecer Contraseña
            </button>
          </form>
        )}
        {/* Botón para volver al inicio */}
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200">
          Volver al Inicio de Sesión
        </button>
      </div>
    </div>
  );
}
