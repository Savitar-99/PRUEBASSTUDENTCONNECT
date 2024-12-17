import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import api from "../../services/api.ts";

export function LoginForm() {
  const { t } = useTranslation(); // Usamos useTranslation para obtener la función t
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirigir al perfil
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Petición al backend para login
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      // Guardar el token JWT en localStorage
      localStorage.setItem("token", response.data.token);

      // Redirigir al perfil
      navigate("/perfil"); // Ruta hacia el perfil del usuario
    } catch (error) {
      console.error("Error en el login", error);
      setError("Login fallido, verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full p-8 bg-white rounded-lg shadow-lg transition-all duration-700 opacity-100 translate-y-10`}>
      <div className="flex flex-col items-center mb-8">
        <img
          src="/assets/logo.png"
          alt={t('welcome')}
          className="w-32 h-auto mb-4 animate-fade-in"
        />
        <h2 className="text-2xl font-bold text-gray-900">{t('login')}</h2>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('email')}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block py-2 px-4 w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63] transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t('password')}
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 py-2 px-4 block w-full rounded-md border-2 border-[#F26F63] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F26F63] focus:border-[#F26F63] transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#F26F63] hover:bg-[#e25d51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F63] transform transition-transform duration-200 hover:scale-105"
          disabled={loading}
        >
          {loading ? t('Cargando...') : t('login')}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Mostrar error */}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {t('noAccount')}{' '}
          <a
            href="/register-student"
            className="text-[#F26F63] hover:text-[#e25d51] font-medium transition-all duration-300 hover:underline"
          >
            {t('register')}
          </a>
        </p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {t('forgotPassword')}{' '}
          <a
            href="/password-recovery"
            className="text-[#F26F63] hover:text-[#e25d51] font-medium transition-all duration-300 hover:underline"
          >
            {t('changePassword')}
          </a>
        </p>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          &copy; 2024 StudentConnect. {t('footerCopyright')}
        </p>
        <p className="text-sm text-gray-600">
          <a
            href="https://www.termsfeed.com/live/ab0a645e-e0bb-4ded-9a1e-6c9b2ac069fb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26F63] transition-all duration-300"
          >
            {t('footerTerms')}
          </a>{' '}
          |{' '}
          <a
            href="https://www.termsfeed.com/live/a8917dd5-e7a1-43a2-a823-47bc9e89f718"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26F63] transition-all duration-300"
          >
            {t('footerPrivacy')}
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-4">
          <a href="/nosotros" className="hover:text-[#F26F63]">
            {t('footerAbout')}
          </a>
        </p>
      </footer>
    </div>
  );
}
