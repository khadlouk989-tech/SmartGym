import { apiRequest } from "./api";

// POST /api/contacts is the only public (unauthenticated) write endpoint the
// backend exposes that matches a form in the original frontend, so the
// Contact page's form is wired up to it for real.
export function sendContactMessage({ name, email, subject, message }) {
  return apiRequest("/contacts", {
    method: "POST",
    body: JSON.stringify({ name, email, subject, message })
  });
}
