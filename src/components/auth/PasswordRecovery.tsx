import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'; // Importar framer-motion

// Función para normalizar el texto y eliminar los acentos
const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

// Datos simulados para usuarios registrados (reemplázalos con una API o base de datos en producción)
const users = [
  { fullName: 'Juan Pérez', email: 'juan.perez@example.com', password: '1234' },
  { fullName: 'Ana López', email: 'ana.lopez@example.com', password: 'abcd' },
];

export function PasswordRecovery() {
  const [step, setStep] = useState<'verify' | 'reset' | 'completed'>('verify'); // Agregado el paso 'completed'
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Agregado para capturar el nombre completo
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar carga
  const [passwordChanged, setPasswordChanged] = useState(false); // Estado para manejar si la contraseña fue cambiada
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar correo electrónico y nombre completo (case-insensitive y sin acentos)
    const normalizedFullName = removeAccents(fullName.trim());
    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      (user) =>
        removeAccents(user.fullName.toLowerCase()) === normalizedFullName &&
        user.email.toLowerCase() === normalizedEmail
    );

    if (user) {
      setStep('reset');
      toast.success('Correo electrónico y nombre verificados con éxito!');
    } else {
      toast.error('Correo electrónico o nombre completo no válidos.');
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('Las contraseñas no coinciden.');
      return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (newPassword.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setIsLoading(true); // Iniciar carga

    // Simulación de una solicitud de cambio de contraseña
    setTimeout(() => {
      const userIndex = users.findIndex(
        (user) => user.email.toLowerCase() === email.trim().toLowerCase()
      );
      if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        toast.success('¡Contraseña actualizada exitosamente!');
        setPasswordChanged(true); // Cambiar el estado a 'true' cuando la contraseña se haya cambiado
        setStep('completed'); // Cambiar el paso a 'completed'
      }

      setIsLoading(false); // Terminar carga
    }, 2000); // Simular un tiempo de espera de 2 segundos para la actualización de la contraseña
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Título con animación */}
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white">Recupera tu cuenta en </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </motion.h1>

      {/* Contenedor con animación */}
      <motion.div
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-xl font-bold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === 'verify' && 'Verificar Nombre y Correo Electrónico'}
          {step === 'reset' && 'Restablecer Contraseña'}
          {step === 'completed' && '¡Contraseña Cambiada Correctamente!'}
        </motion.h2>

        {step === 'verify' && (
          <form onSubmit={handleVerify} className="space-y-4">
            {/* Nombre Completo con animación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Correo Electrónico con animación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Botón para Verificar con animación */}
            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Verificar Nombre y Correo Electrónico
            </motion.button>
          </form>
        )}

        {step === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            {/* Nueva Contraseña con animación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Confirmar Contraseña con animación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Botón para Restablecer Contraseña con animación */}
            <motion.button
              type="submit"
              className={`w-full py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading} // Deshabilitar el botón si está cargando
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isLoading ? 'Cargando...' : 'Restablecer Contraseña'}
            </motion.button>
          </form>
        )}
        <motion.button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Volver al Inicio de Sesión
        </motion.button>
        {step === 'completed' && (
          <div className="text-center">
            <motion.button
              onClick={() => navigate('/')}
              className="mt-4 py-2 px-4 bg-[#F26F63] text-white rounded-md shadow hover:bg-[#e25d51] transition duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Volver al Inicio de Sesión
            </motion.button>
          </div>
          
        )}
      </motion.div>
      

      {/* Contenedor de Toast */}
      <ToastContainer />
    </div>
  );
}
