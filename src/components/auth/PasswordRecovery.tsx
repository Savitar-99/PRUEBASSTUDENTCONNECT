import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const users = [
  { email: 'juan.perez@example.com', password: '1234' },
  { email: 'ana.lopez@example.com', password: 'abcd' },
];

export function PasswordRecovery() {
  const [step, setStep] = useState<'email' | 'code' | 'reset' | 'completed'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find((user) => user.email.toLowerCase() === email.trim().toLowerCase());

    if (user) {
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(verificationCode);

      toast.info(`Código de verificación enviado a ${email} (Simulado: ${verificationCode})`);
      setStep('code');
    } else {
      toast.error('Correo electrónico no encontrado.');
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (code === generatedCode) {
      toast.success('Código verificado con éxito.');
      setStep('reset');
    } else {
      toast.error('Código incorrecto. Por favor, inténtelo de nuevo.');
    }
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('Las contraseñas no coinciden.');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const userIndex = users.findIndex((user) => user.email.toLowerCase() === email.trim().toLowerCase());
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      toast.success('¡Contraseña actualizada con éxito!');
      setStep('completed');
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <motion.h1 className="text-3xl font-bold mb-6 text-center">
        <span className="text-white">Recupera tu cuenta en </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </motion.h1>

      <motion.div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {step === 'email' && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              Enviar Código de Verificación
            </button>
          </form>
        )}

        {step === 'code' && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Código de Verificación</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              Verificar Código
            </button>
          </form>
        )}

        {step === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md"
              required
            />
            <label className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              Cambiar Contraseña
            </button>
          </form>
        )}

        {step === 'completed' && (
          <div className="text-center">
            <h2 className="text-xl font-bold">¡Contraseña cambiada con éxito!</h2>
            <button
              onClick={() => navigate('/')}
              className="mt-4 py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              Volver al Inicio de Sesión
            </button>
          </div>
        )}

        {/* Botón para volver al inicio */}
        {step !== 'completed' && (
          <button
            onClick={() => navigate('/')}
            className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          >
            Volver al Inicio de Sesión
          </button>
        )}
      </motion.div>

      <ToastContainer />
    </div>
  );
}
