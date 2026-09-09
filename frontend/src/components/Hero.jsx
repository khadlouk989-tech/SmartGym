import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HERO_WORDS = ["DESTIN", "PERFORMANCE", "PUISSANCE", "RÉSULTATS", "EXCELLENCE"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % HERO_WORDS.length);
        setFade(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-grid"></div>
      <div className="hero-blob1"></div>
      <div className="hero-blob2"></div>
      <div className="hero-inner">
        <div>
          <div className="hero-label"><span>La salle d'élite à Paris</span></div>
          <h1 className="hero-title bebas">
            FORGE<br />TON<br />
            <span className={`hero-word${fade ? " fade" : ""}`} id="heroWord">{HERO_WORDS[wordIdx]}</span>
          </h1>
          <p className="hero-desc">Rejoignez la communauté SmartGym. Coachs certifiés, équipements premium et programmes sur mesure pour atteindre vos objectifs.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("/abonnements")}>Commencer maintenant →</button>
            <button className="btn-outline" onClick={() => navigate("/planning")}>▶ Voir les cours</button>
          </div>
          <div className="hero-social-proof">
            <div className="avatars">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a1&backgroundColor=E8FF00" alt="" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a2&backgroundColor=FF3B30" alt="" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a3&backgroundColor=FF6B00" alt="" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a4&backgroundColor=9B59B6" alt="" />
            </div>
            <div className="proof-text"><p>2 500+ membres</p><span>nous font confiance</span></div>
            <div className="proof-divider"></div>
            <div className="proof-rating"><p>★ 4.9/5</p><span>note moyenne</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" alt="SmartGym" />
            <div className="hero-float-card">
              <div><p>Prochain cours</p><h4>CrossFit — 18h00</h4></div>
              <button className="btn-book" onClick={() => navigate("/planning")}>Réserver</button>
            </div>
          </div>
          <div className="hero-stat" style={{ top: -16, right: -16 }}><p className="bebas" style={{ color: "#E8FF00" }}>50+</p><span style={{ fontSize: 11, color: "#555" }}>cours/sem</span></div>
          <div className="hero-stat" style={{ top: "38%", left: -16 }}><p className="bebas" style={{ color: "#FF3B30" }}>15+</p><span style={{ fontSize: 11, color: "#555" }}>coachs</span></div>
        </div>
      </div>
    </div>
  );
}
