import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Accueil", end: true },
  { to: "/activites", label: "Activités" },
  { to: "/coachs", label: "Coachs" },
  { to: "/planning", label: "Planning" },
  { to: "/abonnements", label: "Abonnements" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="logo" onClick={() => { navigate("/"); closeMenu(); }}>
        <div className="logo-icon">⚡</div>
        <span className="logo-text">Smart<span>Gym</span></span>
      </div>
      <ul
        className="nav-links"
        id="navLinks"
        style={menuOpen ? { display: "flex", flexDirection: "column", position: "fixed", top: 64, left: 0, right: 0, background: "#0A0A0A", borderBottom: "1px solid #1E1E1E", padding: 16, gap: 4, zIndex: 99 } : undefined}
      >
        {NAV_ITEMS.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="btn-nav" onClick={() => { navigate("/abonnements"); closeMenu(); }}>Commencer</button>
      <button className="hamburger" onClick={() => setMenuOpen(open => !open)}>☰</button>
    </nav>
  );
}
