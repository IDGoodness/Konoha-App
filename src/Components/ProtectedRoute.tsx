import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // ✅ Show a loading indicator while checking auth

  return user ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;