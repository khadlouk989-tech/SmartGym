export default function ActivityCard({ activity }) {
  const { name, desc, img, color, level, duration, capacity } = activity;
  return (
    <div className="activity-card">
      <div className="activity-img">
        <img src={img} alt={name} loading="lazy" />
        <div className="activity-dot" style={{ background: color }}></div>
      </div>
      <div className="activity-body">
        <h3 className="activity-name" style={{ color }}>{name}</h3>
        <p className="activity-desc">{desc}</p>
        <div className="activity-meta">
          <span className="meta-tag">⭐ {level}</span>
          <span className="meta-tag">⏱ {duration}</span>
          <span className="meta-tag">👥 {capacity} max</span>
        </div>
      </div>
      <div className="activity-bar" style={{ background: color }}></div>
    </div>
  );
}
