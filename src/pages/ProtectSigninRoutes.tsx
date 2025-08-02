import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedSigninRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Navigate to="/" replace /> :children ;
};



export default ProtectedSigninRoute;
