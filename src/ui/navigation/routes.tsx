import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SignOutPage from "../pages/SignOutPage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const DashboardHome = lazy(() => import("../pages/DashboardHome"));
const DashboardSettings = lazy(() => import("../pages/DashboardSettings"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const AdminConfig = lazy(() => import("../pages/AdminConfig"));

export const routes: RouteObject[] = [
  { path: "/", element: <h1>Home</h1> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <SignOutPage /> },
  {
    path: "/dashboard",
    element: <PrivateRoute element={<DashboardPage />} />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "settings", element: <DashboardSettings /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoute element={<AdminPage />} />,
    children: [{ path: "config", element: <AdminConfig /> }],
  },
];
