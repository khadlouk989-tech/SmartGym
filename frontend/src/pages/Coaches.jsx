import CoachCard from "../components/CoachCard";
import { COACHES } from "../data/coaches";

export default function Coaches() {
  return (
    <div className="page active" id="page-coachs">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Notre équipe</p>
            <h2 className="section-title">LES COACHS</h2>
            <p className="section-sub">Des professionnels certifiés, passionnés et dévoués à votre progression</p>
          </div>
          <div className="grid-3" id="allCoaches">
            {COACHES.map(c => <CoachCard coach={c} key={c.name} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
