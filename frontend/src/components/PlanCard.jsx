import { useNavigate } from "react-router-dom";

export default function PlanCard({ plan, billing }) {
  const { name, color, popular, desc, prices, features, noFeatures } = plan;
  const price = prices[billing];
  const navigate = useNavigate();

  return (
    <div className={`plan-card${popular ? " popular" : ""}`}>
      {popular && <div className="plan-badge">⭐ Le plus populaire</div>}
      <div className="plan-name" style={{ color }}>{name}</div>
      <p className="plan-desc">{desc}</p>
      <div className="plan-price">
        <div>
          <span className="price" style={{ color: popular ? "#E8FF00" : "#fff" }}>{price}€</span>
          <span className="period">/mois</span>
        </div>
        {billing !== "monthly" && (
          <div className="billing">Facturé {billing === "quarterly" ? "trimestriellement" : "annuellement"}</div>
        )}
      </div>
      <ul className="plan-features">
        {features.map(f => (
          <li className="yes" key={f}><span className="feat-icon yes">✓</span>{f}</li>
        ))}
        {noFeatures.map(f => (
          <li className="no" key={f}><span className="feat-icon no">✗</span>{f}</li>
        ))}
      </ul>
      <button
        className={`plan-btn ${popular ? "primary-btn" : "outline-btn"}`}
        onClick={() => navigate("/contact")}
      >
        {popular ? "Rejoindre Pro" : "S'abonner"}
      </button>
    </div>
  );
}
