import { Navigate } from "react-router-dom";
import { getStoredAdmin } from "../services/authService";

// Frontend-only route protection, exactly as the migration brief specifies:
// it checks localStorage.adminToken / localStorage.adminUser and gates the
// route. It does NOT replace backend auth - every protected API call still
// carries the Bearer token and the backend's own `protect`/`authorize`
// middleware is the real authority; this only stops a logged-out visitor
// from seeing the dashboard shell.
export default function ProtectedRoute({ children }) {
  const admin = getStoredAdmin();
  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
