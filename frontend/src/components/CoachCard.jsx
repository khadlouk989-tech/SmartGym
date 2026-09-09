export default function CoachCard({ coach }) {
  const { name, role, specs, exp, rating, reviews, sessions, seed, bg } = coach;
  const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

  return (
    <div className="coach-card">
      <div className="coach-top">
        <div className="coach-avatar" style={{ position: "relative" }}>
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=${bg}`} alt={name} />
          <span className="coach-exp">{exp}</span>
        </div>
        <div className="coach-rating">
          <div className="stars" title={stars}>{rating} ★</div>
          <small>{reviews} avis</small>
        </div>
      </div>
      <div className="coach-name">{name}</div>
      <div className="coach-role">{role}</div>
      <div className="coach-tags">
        {specs.map(s => <span className="coach-tag" key={s}>{s}</span>)}
      </div>
      <div className="coach-footer">
        <span className="sessions"><b>{sessions}</b> séances</span>
        <button>Voir profil →</button>
      </div>
    </div>
  );
}
