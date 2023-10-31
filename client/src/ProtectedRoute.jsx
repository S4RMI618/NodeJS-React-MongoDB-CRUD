import React from "react";
import { useAuth } from "./context/authContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated)

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
