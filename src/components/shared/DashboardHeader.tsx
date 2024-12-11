import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // En una implementación real, aquí se limpiaría el estado de autenticación
    navigate('/');
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-[#F26F63] transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}