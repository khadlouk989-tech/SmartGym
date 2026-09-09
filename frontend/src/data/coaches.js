// Ported verbatim from the original frondend/gym.nador.js (const COACHES).
// See note in activities.js: GET /api/coaches requires Admin auth, so the
// public site keeps using the same static data the original frontend used.
export const COACHES = [
  { name: "Karim Benzali", role: "Coach Musculation & Force", specs: ["Musculation", "Powerlifting", "Nutrition"], exp: "10 ans", rating: 4.9, reviews: 128, sessions: 850, seed: "karim", bg: "E8FF00" },
  { name: "Sofia Mendez", role: "Coach Yoga & Bien-être", specs: ["Yoga", "Méditation", "Pilates"], exp: "8 ans", rating: 5.0, reviews: 96, sessions: 620, seed: "sofia", bg: "FF3B30" },
  { name: "Alexandre Dubois", role: "Coach CrossFit & HIIT", specs: ["CrossFit", "HIIT", "Cardio"], exp: "7 ans", rating: 4.8, reviews: 112, sessions: 700, seed: "alex", bg: "FF6B00" },
  { name: "Nadia Ouali", role: "Coach Boxe & Arts Martiaux", specs: ["Boxe", "Muay Thaï", "Self-défense"], exp: "12 ans", rating: 4.9, reviews: 87, sessions: 930, seed: "nadia", bg: "9B59B6" },
  { name: "Thomas Leroy", role: "Coach Cardio & Running", specs: ["Cardio", "Running", "Triathlon"], exp: "6 ans", rating: 4.7, reviews: 74, sessions: 510, seed: "thomas", bg: "00C896" },
  { name: "Emma Fontaine", role: "Coach Pilates & Rééducation", specs: ["Pilates", "Rééducation", "Stretching"], exp: "9 ans", rating: 4.9, reviews: 103, sessions: 780, seed: "emma", bg: "00B4D8" }
];
