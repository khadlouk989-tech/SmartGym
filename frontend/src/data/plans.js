// Ported verbatim from the original frondend/gym.nador.js (const PLANS).
// GET /api/subscriptions requires an authenticated user, so this public
// pricing page keeps the same static plan data the original frontend used.
export const PLANS = [
  {
    name: "Starter", color: "#888", popular: false, desc: "L'essentiel pour débuter",
    prices: { monthly: 29, quarterly: 25, annual: 19 },
    features: ["Salle de musculation", "Zone cardio", "Vestiaires & douches", "Cours collectifs (2/sem)"],
    noFeatures: ["Bilan fitness", "Coach personnel", "Accès 24h/24", "Nutrition coaching"]
  },
  {
    name: "Pro", color: "#E8FF00", popular: true, desc: "Le plus choisi — progressez vite",
    prices: { monthly: 49, quarterly: 42, annual: 35 },
    features: ["Salle de musculation", "Zone cardio", "Vestiaires & douches", "Cours illimités", "Bilan fitness", "2 séances coach/mois"],
    noFeatures: ["Accès 24h/24", "Nutrition coaching"]
  },
  {
    name: "Elite", color: "#FF3B30", popular: false, desc: "L'expérience ultime",
    prices: { monthly: 89, quarterly: 79, annual: 65 },
    features: ["Salle de musculation", "Zone premium", "Cours illimités", "Bilan mensuel", "Coach personnel dédié", "Accès 24h/24", "Nutrition coaching complet"],
    noFeatures: []
  }
];
