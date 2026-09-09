import { useState } from "react";
import PlanCard from "../components/PlanCard";
import { PLANS } from "../data/plans";

export default function Plans() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="page active" id="page-abonnements">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Tarifs</p>
            <h2 className="section-title">ABONNEMENTS</h2>
            <p className="section-sub">Des formules claires, sans engagement caché</p>
          </div>
          <div className="plan-billing-toggle">
            <span className={`billing-opt${billing === "monthly" ? " active" : ""}`} onClick={() => setBilling("monthly")}>Mensuel</span>
            <span className={`billing-opt${billing === "quarterly" ? " active" : ""}`} onClick={() => setBilling("quarterly")}>Trimestriel</span>
            <span className={`billing-opt${billing === "annual" ? " active" : ""}`} onClick={() => setBilling("annual")}>Annuel <span className="save">-30%</span></span>
          </div>
          <div className="plans" id="plansContainer">
            {PLANS.map(p => <PlanCard plan={p} billing={billing} key={p.name} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
