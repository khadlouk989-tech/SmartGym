import { useState } from "react";
import ScheduleItem from "../components/ScheduleItem";
import { SCHEDULE } from "../data/schedule";

const DAYS = Object.keys(SCHEDULE);

export default function Planning() {
  const [currentDay, setCurrentDay] = useState("Lundi");
  const items = SCHEDULE[currentDay] || [];

  return (
    <div className="page active" id="page-planning">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head left">
            <p className="section-label">Cours collectifs</p>
            <h2 className="section-title">PLANNING</h2>
            <p className="section-sub">Réservez vos cours en ligne — Places limitées</p>
          </div>
          <div className="planning-tabs" id="dayTabs">
            {DAYS.map(day => (
              <button
                key={day}
                className={`day-tab${day === currentDay ? " active" : ""}`}
                onClick={() => setCurrentDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="schedule-grid" id="scheduleList">
            {items.map((item, i) => <ScheduleItem item={item} key={`${item.time}-${i}`} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
