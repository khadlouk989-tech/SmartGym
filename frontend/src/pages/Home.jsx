import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ActivityCard from "../components/ActivityCard";
import CoachCard from "../components/CoachCard";
import PlanCard from "../components/PlanCard";
import { ACTIVITIES } from "../data/activities";
import { COACHES } from "../data/coaches";
import { PLANS } from "../data/plans";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page active" id="page-accueil">
      <Hero />

      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-item"><p>2 500+</p><p>Membres actifs</p></div>
          <div className="stat-item"><p>15+</p><p>Coachs certifiés</p></div>
          <div className="stat-item"><p>50+</p><p>Cours par semaine</p></div>
          <div className="stat-item"><p>8 ans</p><p>D'expérience</p></div>
        </div>
      </div>

      <section style={{ background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Ce qu'on propose</p>
            <h2 className="section-title">NOS ACTIVITÉS</h2>
            <p className="section-sub">Des disciplines variées pour tous les niveaux et tous les objectifs</p>
          </div>
          <div className="grid-3" id="homeActivities">
            {ACTIVITIES.slice(0, 3).map(a => <ActivityCard activity={a} key={a.name} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline" onClick={() => navigate("/activites")}>Voir toutes les activités →</button>
          </div>
        </div>
      </section>

      <section style={{ background: "#070707" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Nos experts</p>
            <h2 className="section-title">LES COACHS</h2>
            <p className="section-sub">Des professionnels passionnés à votre service</p>
          </div>
          <div className="grid-4" id="homeCoaches">
            {COACHES.slice(0, 4).map(c => <CoachCard coach={c} key={c.name} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline" onClick={() => navigate("/coachs")}>Rencontrer l'équipe →</button>
          </div>
        </div>
      </section>

      <section style={{ background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Tarifs</p>
            <h2 className="section-title">NOS FORMULES</h2>
            <p className="section-sub">Des offres adaptées à chaque profil et chaque objectif</p>
          </div>
          <div id="homePlans">
            <div className="plans">
              {PLANS.map(p => <PlanCard plan={p} billing="monthly" key={p.name} />)}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn-outline" onClick={() => navigate("/abonnements")}>Comparer les formules →</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-inner">
            <h2>PRÊT À <span>CHANGER</span> DE VIE ?</h2>
            <p>Rejoignez SmartGym aujourd'hui et commencez votre transformation. Première séance offerte !</p>
            <div className="cta-btns">
              <button className="btn-primary" onClick={() => navigate("/abonnements")}>S'abonner maintenant →</button>
              <button className="btn-outline" onClick={() => navigate("/contact")}>Nous contacter</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
