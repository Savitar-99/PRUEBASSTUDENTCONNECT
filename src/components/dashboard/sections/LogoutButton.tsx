import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos i18n

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Usamos el hook para obtener la función de traducción

  const handleLogout = () => {
    // Add any logout logic here (clear session, etc.)
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#F26F63] transition-colors"
    >
      <LogOut size={20} />
      <span>{t('Cerrar_Sesión')}</span> {/* Traducción usando i18n */}
    </button>
  );
};
