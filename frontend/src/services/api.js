// Centralized API communication with the SmartGym backend.
// Base URL matches backend/.env (PORT=8080) and backend/app.js (all routes
// mounted under /api).
const API_URL = "http://localhost:8080/api";

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("adminToken");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
}
