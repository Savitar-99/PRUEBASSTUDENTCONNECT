import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

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
      <span>Cerrar Sesión</span>
    </button>
  );
};