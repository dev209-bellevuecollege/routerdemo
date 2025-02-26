import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {  Navigate, useLocation, Outlet } from 'react-router-dom';
// Protected Route Component


export const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
