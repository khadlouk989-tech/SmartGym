import { apiRequest } from "./api";

// The original admin/admin.js checked email/password against a hardcoded
// `validCredentials` object client-side - no backend call at all. That is
// exactly the "fake login" the migration instructions forbid, so it's
// replaced here with the real POST /api/auth/login endpoint
// (backend/controllers/authController.js), which returns:
//   { success: true, data: { id, email, role, token } }
export async function login(email, password) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  if (result.data.role === "Admin") {
    localStorage.setItem("adminToken", result.data.token);
    localStorage.setItem("adminUser", JSON.stringify(result.data));
  }

  return result.data;
}

export function logout() {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
}

export function getStoredAdmin() {
  const token = localStorage.getItem("adminToken");
  const rawUser = localStorage.getItem("adminUser");
  if (!token || !rawUser) return null;
  try {
    const user = JSON.parse(rawUser);
    return user.role === "Admin" ? { token, user } : null;
  } catch {
    return null;
  }
}
