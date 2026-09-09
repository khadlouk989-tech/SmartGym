import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "../../admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      const data = await login(email.trim(), password.trim());
      if (data.role !== "Admin") {
        // Login succeeded but the account isn't an Admin - the frontend
        // must not accept a normal user as an admin (no adminToken was
        // stored for a non-Admin role in authService.login).
        setLoginError("This account does not have admin access.");
        return;
      }
      navigate("/admin/dashboard");
    } catch (err) {
      setLoginError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-app">
      <main className="auth-shell">
        <section className="auth-card">
          <div className="auth-brand">
            <div className="auth-logo">SG</div>
            <div>
              <h1>SmartGym Admin</h1>
              <p>Connexion sécurisée pour l'administration du site.</p>
            </div>
          </div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="123456"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>{loading ? "Logging in…" : "Login"}</button>
            <p className="auth-error">{loginError}</p>
          </form>
        </section>
      </main>
    </div>
  );
}
