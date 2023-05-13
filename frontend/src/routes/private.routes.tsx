import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface AdminPrivateRouteProps {
  children: ReactNode;
}

export const AdminPrivateRoute: React.FC<AdminPrivateRouteProps> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  console.log("admin private route called", location.pathname, token);
  if (!token) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return <>{children}</>;
};
