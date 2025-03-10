import { JSX } from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ element }: { element: JSX.Element }) => {
  const userRole = localStorage.getItem("role");
  return userRole === "admin" ? element : <Navigate to="/dashboard" replace />;
};

export default AdminRoute;
