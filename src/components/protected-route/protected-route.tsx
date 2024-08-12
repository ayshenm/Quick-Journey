import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  requiredRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, requiredRoles }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const hasRequiredRole = () => {
    if (!requiredRoles) return true;
    return requiredRoles.some((role) => user?.roles.includes(role));
  };

  if (!isAuthenticated || !hasRequiredRole()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Component />;
};

export default ProtectedRoute;
