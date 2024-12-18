import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    // Limpiar todas las cookies
    document.cookie
      .split(';')
      .forEach((cookie) => {
        const cookieName = cookie.split('=')[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      });

    // Limpiar el almacenamiento local si es necesario (opcional, dependiendo de cómo gestiones la autenticación)
    localStorage.clear(); // Elimina los elementos del localStorage
    sessionStorage.clear(); // Elimina los elementos del sessionStorage

    // Redirigir al menú principal (por ejemplo, a la página de inicio de sesión o a la página principal)
    navigate('/');  // Aquí se redirige a la página principal o inicio de sesión
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#F26F63] transition-colors"
    >
      <LogOut size={20} />
      <span>{t('Cerrar_Sesión')}</span>
    </button>
  );
};
