import { apiRequest } from "./api";

export function getStats() {
  return apiRequest("/stats");
}

export function getMembers() {
  return apiRequest("/members");
}

export function getPayments() {
  return apiRequest("/payments");
}

export function createMember(member) {
  return apiRequest("/members", {
    method: "POST",
    body: JSON.stringify(member)
  });
}

export function updateMember(id, member) {
  return apiRequest(`/members/${id}`, {
    method: "PUT",
    body: JSON.stringify(member)
  });
}

export function deleteMember(id) {
  return apiRequest(`/members/${id}`, {
    method: "DELETE"
  });
}

export function updatePayment(id, payment) {
  return apiRequest(`/payments/${id}`, {
    method: "PUT",
    body: JSON.stringify(payment)
  });
}

export function deletePayment(id) {
  return apiRequest(`/payments/${id}`, {
    method: "DELETE"
  });
}
