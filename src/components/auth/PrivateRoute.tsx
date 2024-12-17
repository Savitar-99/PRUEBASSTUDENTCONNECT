import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Definir el tipo de propiedades esperadas en PrivateRoute
interface PrivateRouteProps {
  allowedRoles?: string[]; // allowedRoles es un arreglo de strings opcional
}

// Función de autenticación simulada
const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Componente de ruta privada
const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const user = useAuth();

  if (!user) {
    // Si no está autenticado, redirige a la página de inicio
    return <Navigate to="/"/>;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.rol.nombreRol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Renderiza las rutas protegidas
};

export default PrivateRoute;
