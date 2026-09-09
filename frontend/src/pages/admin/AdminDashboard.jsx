import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getStats,
  getMembers,
  getPayments
} from "../../services/adminService";

import {
  getStoredAdmin,
  logout
} from "../../services/authService";

import "../../admin.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "members", label: "Members" },
  { id: "payments", label: "Payments" },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" }
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const admin = getStoredAdmin();

  const [activeSection, setActiveSection] = useState("overview");

  const [stats, setStats] = useState(null);
  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =========================
     LOAD DASHBOARD DATA
  ========================= */

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      getStats(),
      getMembers(),
      getPayments()
    ])
      .then(([statsRes, membersRes, paymentsRes]) => {
        if (cancelled) return;

        setStats(statsRes.data);
        setMembers(membersRes.data || []);
        setPayments(paymentsRes.data || []);

        setError(null);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err.message || "Failed to load dashboard data"
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  /* =========================
     TEMPORARY ACTION ALERTS
     Backend actions not connected yet
  ========================= */

  const showAlert = (message) => {
    window.alert(message);
  };

  /* =========================
     CALCULATED DATA
  ========================= */

  const pendingPaymentsCount = payments.filter(
    (payment) => payment.status === "pending"
  ).length;

  /* =========================
     CURRENT SECTION TITLE
  ========================= */

  const currentSection =
    SECTIONS.find(
      (section) => section.id === activeSection
    );

  return (
    <div className="admin-app">
      <div className="admin-shell">

        {/* =========================
            SIDEBAR
        ========================= */}

        <aside className="admin-sidebar">

          <div className="admin-brand">
            <div className="admin-logo">
              SG
            </div>

            <span>
              SmartGym Admin
            </span>
          </div>

          <nav>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`sidebar-link${
                  activeSection === section.id
                    ? " active"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(section.id)
                }
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            Log out
          </button>

        </aside>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main className="admin-main">

          {/* =========================
              HEADER
          ========================= */}

          <header className="admin-header">

            <div>
              <p className="eyebrow">
                Private Admin Area
              </p>

              <h1>
                {currentSection?.label || "Overview"}
              </h1>
            </div>

            <div className="profile-box">

              <div className="profile-avatar">
                {(admin?.user?.email || "A")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <p>
                  {admin?.user?.email || "Admin"}
                </p>

                <span>
                  Administrator
                </span>
              </div>

            </div>

          </header>

          {/* =========================
              GLOBAL ERROR
          ========================= */}

          {error && (
            <p
              className="auth-error"
              style={{ marginBottom: 20 }}
            >
              ⚠️ {error}
            </p>
          )}

          {/* ==================================================
              OVERVIEW
          ================================================== */}

          {activeSection === "overview" && (

            <section
              className="admin-content"
              id="overview"
            >

              {/* STATS */}

              <div className="stats-grid">

                <article className="stat-card">
                  <p>
                    Total Members
                  </p>

                  <strong>
                    {loading
                      ? "…"
                      : stats?.numberOfMembers ?? 0}
                  </strong>
                </article>

                <article className="stat-card">
                  <p>
                    Active Subscriptions
                  </p>

                  <strong>
                    {loading
                      ? "…"
                      : stats?.activeSubscriptions ?? 0}
                  </strong>
                </article>

                <article className="stat-card">
                  <p>
                    Pending Payments
                  </p>

                  <strong>
                    {loading
                      ? "…"
                      : pendingPaymentsCount}
                  </strong>
                </article>

                <article className="stat-card">
                  <p>
                    Total Reservations
                  </p>

                  <strong>
                    {loading
                      ? "…"
                      : stats?.reservationsCount ?? 0}
                  </strong>
                </article>

              </div>

              {/* PANELS */}

              <div className="panel-grid">

                {/* REVENUE */}

                <div className="panel-card">

                  <h2>
                    Revenue this month
                  </h2>

                  <div className="panel-placeholder">
                    {loading
                      ? "Loading…"
                      : `€${stats?.revenueThisMonth ?? 0}`}
                  </div>

                </div>

                {/* RECENT MEMBERS */}

                <div className="panel-card">

                  <h2>
                    Recent members
                  </h2>

                  <ul className="activity-list">

                    {members
                      .slice(0, 5)
                      .map((member) => (

                        <li key={member.id}>
                          {member.user?.firstName}{" "}
                          {member.user?.lastName}
                          {" — "}
                          {member.user?.status}
                        </li>

                      ))}

                    {!loading &&
                      members.length === 0 && (
                        <li>
                          No members yet.
                        </li>
                      )}

                  </ul>

                </div>

              </div>

            </section>
          )}

          {/* ==================================================
              MEMBERS
          ================================================== */}

          {activeSection === "members" && (

            <section
              className="admin-content"
              id="members"
            >

              <div className="section-header">

                <h2>
                  Members
                </h2>

                <button
                  type="button"
                  className="pill-btn"
                  onClick={() =>
                    showAlert(
                      "Member controls are not yet connected."
                    )
                  }
                >
                  Manage Members
                </button>

              </div>

              <div className="table-card">

                <table>

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Plan</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {members.map((member) => (

                      <tr key={member.id}>

                        <td>
                          {member.user?.firstName}{" "}
                          {member.user?.lastName}
                        </td>

                        <td>
                          {member.user?.email}
                        </td>

                        <td>
                          {member.user?.subscriptions?.[0]?.name ||
                            "—"}
                        </td>

                        <td>
                          {member.user?.status}
                        </td>

                      </tr>

                    ))}

                    {!loading &&
                      members.length === 0 && (

                        <tr>
                          <td colSpan={4}>
                            No members found.
                          </td>
                        </tr>

                      )}

                  </tbody>

                </table>

              </div>

            </section>
          )}

          {/* ==================================================
              PAYMENTS
          ================================================== */}

          {activeSection === "payments" && (

            <section
              className="admin-content"
              id="payments"
            >

              <div className="section-header">

                <h2>
                  Payments
                </h2>

                <button
                  type="button"
                  className="pill-btn"
                  onClick={() =>
                    showAlert(
                      "Payment flows will connect to backend later."
                    )
                  }
                >
                  Review Payments
                </button>

              </div>

              <div className="table-card">

                <table>

                  <thead>
                    <tr>
                      <th>Invoice</th>
                      <th>Member</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {payments.map((payment) => (

                      <tr key={payment.id}>

                        <td>
                          {payment.reference}
                        </td>

                        <td>
                          {payment.user?.firstName}{" "}
                          {payment.user?.lastName}
                        </td>

                        <td>
                          €{payment.amount}
                        </td>

                        <td>
                          {payment.status}
                        </td>

                      </tr>

                    ))}

                    {!loading &&
                      payments.length === 0 && (

                        <tr>
                          <td colSpan={4}>
                            No payments found.
                          </td>
                        </tr>

                      )}

                  </tbody>

                </table>

              </div>

            </section>
          )}

          {/* ==================================================
              REPORTS
          ================================================== */}

          {activeSection === "reports" && (

            <section
              className="admin-content"
              id="reports"
            >

              <div className="section-header">

                <h2>
                  Reports
                </h2>

                <button
                  type="button"
                  className="pill-btn"
                  onClick={() =>
                    showAlert(
                      "Report export is coming soon."
                    )
                  }
                >
                  Export
                </button>

              </div>

              <div className="panel-card">

                <h3>
                  Revenue trend
                </h3>

                <div className="panel-placeholder">
                  Report chart placeholder
                </div>

              </div>

            </section>
          )}

          {/* ==================================================
              SETTINGS
          ================================================== */}

          {activeSection === "settings" && (

            <section
              className="admin-content"
              id="settings"
            >

              <div className="section-header">

                <h2>
                  Settings
                </h2>

                <button
                  type="button"
                  className="pill-btn"
                  onClick={() =>
                    showAlert(
                      "Settings will save once backend is connected."
                    )
                  }
                >
                  Save
                </button>

              </div>

              <div className="settings-grid">

                <div className="settings-card">

                  <label htmlFor="gymName">
                    Gym name
                  </label>

                  <input
                    id="gymName"
                    defaultValue="SmartGym"
                  />

                </div>

                <div className="settings-card">

                  <label htmlFor="adminEmail">
                    Admin email
                  </label>

                  <input
                    id="adminEmail"
                    defaultValue={
                      admin?.user?.email || ""
                    }
                    disabled
                  />

                </div>

                <div className="settings-card full-width">

                  <label htmlFor="supportContact">
                    Support contact
                  </label>

                  <input
                    id="supportContact"
                    defaultValue="contact@smartgym.fr"
                  />

                </div>

              </div>

            </section>
          )}

        </main>

      </div>
    </div>
  );
}