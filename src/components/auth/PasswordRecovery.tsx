import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const users = [
  { email: 'juan.perez@example.com', password: '1234' },
  { email: 'ana.lopez@example.com', password: 'abcd' },
];

export function PasswordRecovery() {
  const { t } = useTranslation();
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

      toast.info(`${t('verificationCodeSent')} ${email} (Simulated: ${verificationCode})`, {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
      setStep('code');
    } else {
      toast.error(t('emailNotFound'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (code === generatedCode) {
      toast.success(t('codeVerified'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
      setStep('reset');
    } else {
      toast.error(t('incorrectCode'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
    }
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error(t('passwordsDoNotMatch'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
      return;
    }

    if (newPassword.length < 6) {
      toast.error(t('passwordTooShort'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
      return;
    }

    const userIndex = users.findIndex((user) => user.email.toLowerCase() === email.trim().toLowerCase());
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      toast.success(t('passwordUpdated'), {
        closeOnClick: false, // Deshabilita el clic
        autoClose: 3000, // El toast desaparecerá automáticamente después de 3 segundos
      });
      setStep('completed');
      // Redirigir automáticamente al login después de cambiar la contraseña
      setTimeout(() => {
        navigate('/'); // Redirige al login
      }, 2000); // Retardo para mostrar el mensaje de éxito
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <motion.h1 className="text-3xl font-bold mb-6 text-center">
        <span className="text-white">{t('recoverYourAccount')} </span>
        <span className="text-[#F26F63]">StudentConnect</span>
      </motion.h1>

      <motion.div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {step === 'email' && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">{t('email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#000000] rounded-md text-gray-900 focus:ring-2 focus:ring-[#000000] focus:outline-none "
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              {t('sendVerificationCode')}
            </button>
          </form>
        )}

        {step === 'code' && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">{t('verificationCode')}</label>
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
              {t('verifyCode')}
            </button>
          </form>
        )}

        {step === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">{t('newPassword')}</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full py-2 px-3 border-2 border-[#F26F63] rounded-md"
              required
            />
            <label className="block text-sm font-medium text-gray-700">{t('confirmPassword')}</label>
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
              {t('changePassword')}
            </button>
          </form>
        )}

        {step === 'completed' && (
          <div className="text-center">
            <h2 className="text-xl font-bold">{t('passwordChanged')}</h2>
            <button
              onClick={() => navigate('/')}
              className="mt-4 py-2 px-4 bg-[#F26F63] text-white rounded-md hover:bg-[#e25d51]"
            >
              {t('backToLogin')}
            </button>
          </div>
        )}

        {/* Button to return to login */}
        {step !== 'completed' && (
          <button
            onClick={() => navigate('/')}
            className="w-full mt-4 py-2 px-4 text-[#F26F63] border border-[#F26F63] rounded-md hover:bg-[#F26F63] hover:text-white transition duration-200"
          >
            {t('backToLogin')}
          </button>
        )}
      </motion.div>

      <ToastContainer />
    </div>
  );
}
