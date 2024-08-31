import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../redux/hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user || !user?.name) {
    return <Navigate to="/register" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
