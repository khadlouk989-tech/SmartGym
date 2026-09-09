import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/activites", label: "Activités" },
  { to: "/coachs", label: "Coachs" },
  { to: "/planning", label: "Planning" },
  { to: "/abonnements", label: "Abonnements" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" }
];

const ACTIVITY_LINKS = ["Musculation", "Cardio", "CrossFit", "Yoga", "Boxe & Combat", "Pilates"];

const linkStyle = { color: "#888", fontSize: 13, textDecoration: "none", cursor: "pointer" };

export default function Footer() {
  return (
    <footer style={{ background: "#070707", borderTop: "1px solid #1E1E1E", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 40 }}>
          <div>
            <Link className="logo" style={{ marginBottom: 14, display: "inline-flex" }} to="/">
              <div className="logo-icon">⚡</div>
              <span className="logo-text" style={{ marginLeft: 8 }}>Smart<span>Gym</span></span>
            </Link>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              La salle de sport d'élite au service de votre performance. Coachs certifiés, équipements premium.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["📸", "👥", "▶"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ width: 36, height: 36, background: "#111", border: "1px solid #1E1E1E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", textDecoration: "none", fontSize: 14 }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={linkStyle}
                  onMouseOver={e => (e.currentTarget.style.color = "#E8FF00")}
                  onMouseOut={e => (e.currentTarget.style.color = "#888")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Activités</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ACTIVITY_LINKS.map(name => (
                <a
                  key={name}
                  style={linkStyle}
                  onMouseOver={e => (e.currentTarget.style.color = "#E8FF00")}
                  onMouseOut={e => (e.currentTarget.style.color = "#888")}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1E1E1E", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#444", fontSize: 12 }}>© 2025 SmartGym. Tous droits réservés.</p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>Mentions légales</a>
            <a href="#" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>CGV</a>
            <a href="#" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
