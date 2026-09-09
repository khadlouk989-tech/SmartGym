// Ported verbatim from the original frondend/gym.nador.js (const ACTIVITIES).
// NOTE: the public GET /api/activities backend endpoint requires an Admin/Coach
// bearer token (see backend/routes/activities.js), so it cannot be called from
// this public, logged-out marketing site. The original vanilla frontend never
// called the API for this data either - it used this same hardcoded array.
export const ACTIVITIES = [
  { name: "Musculation", desc: "Développez force et masse avec nos équipements haut de gamme et coachs experts.", color: "#E8FF00", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", level: "Tous niveaux", duration: "45-90 min", capacity: 30 },
  { name: "Cardio", desc: "Brûlez des calories et améliorez votre endurance avec nos machines dernière génération.", color: "#FF3B30", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", level: "Tous niveaux", duration: "20-60 min", capacity: 25 },
  { name: "Yoga", desc: "Trouvez l'équilibre parfait entre corps et esprit avec nos instructeurs certifiés.", color: "#00C896", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", level: "Débutant–Avancé", duration: "60 min", capacity: 15 },
  { name: "CrossFit", desc: "Poussez vos limites avec nos sessions intenses et variées adaptées à tous.", color: "#FF6B00", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", level: "Intermédiaire", duration: "60 min", capacity: 12 },
  { name: "Boxe & Combat", desc: "Apprenez les techniques de boxe dans une ambiance dynamique et motivante.", color: "#9B59B6", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80", level: "Tous niveaux", duration: "60 min", capacity: 20 },
  { name: "Pilates", desc: "Renforcez votre cœur musculaire et améliorez votre posture avec la méthode Pilates.", color: "#00B4D8", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", level: "Débutant", duration: "55 min", capacity: 12 }
];
