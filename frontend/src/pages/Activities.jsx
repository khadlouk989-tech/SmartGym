import { useNavigate } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { ACTIVITIES } from "../data/activities";

export default function Activities() {
  const navigate = useNavigate();

  return (
    <div className="page active" id="page-activites">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Disciplines</p>
            <h2 className="section-title">NOS ACTIVITÉS</h2>
            <p className="section-sub">6 disciplines, des coachs experts, des programmes pour tous les niveaux</p>
          </div>
          <div className="grid-3" id="allActivities">
            {ACTIVITIES.map(a => <ActivityCard activity={a} key={a.name} />)}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-inner">
            <h2>TROUVE TON <span>ACTIVITÉ</span></h2>
            <p>Essayez un cours gratuit avant de vous engager</p>
            <div className="cta-btns">
              <button className="btn-primary" onClick={() => navigate("/planning")}>Voir le planning →</button>
              <button className="btn-outline" onClick={() => navigate("/contact")}>Séance découverte</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
