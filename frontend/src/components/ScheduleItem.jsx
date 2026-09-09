export default function ScheduleItem({ item }) {
  const { time, dur, activity, coach, spots, booked, level, color } = item;
  const pct = (booked / spots) * 100;
  const full = booked >= spots;
  const left = spots - booked;

  return (
    <div className="schedule-item">
      <div className="schedule-time">{time}<small>{dur} min</small></div>
      <div className="schedule-info">
        <h4>{activity}</h4>
        <p>{coach}</p>
        <div className="tags">
          <span className="sched-tag" style={{ background: `${color}20`, color }}>{level}</span>
        </div>
      </div>
      <div className="schedule-action">
        <div className="spots-bar">
          <div className="spots-fill" style={{ width: `${pct}%`, background: full ? "#FF3B30" : color }}></div>
        </div>
        <div className="spots-text">{full ? "Complet" : `${left} places`}</div>
        <button style={{ marginTop: 8 }} className={full ? "btn-full" : "btn-book"} disabled={full}>
          {full ? "Complet" : "Réserver"}
        </button>
      </div>
    </div>
  );
}
