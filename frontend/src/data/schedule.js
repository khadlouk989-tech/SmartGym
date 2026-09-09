// Ported verbatim from the original frondend/gym.nador.js (const SCHEDULE).
// GET /api/courses requires Admin/Coach auth, so this public page keeps the
// same static planning data the original frontend used.
export const SCHEDULE = {
  "Lundi": [
    { time: "07:00", dur: 60, activity: "Musculation", coach: "Karim Benzali", spots: 30, booked: 18, level: "Tous niveaux", color: "#E8FF00" },
    { time: "09:00", dur: 55, activity: "Yoga", coach: "Sofia Mendez", spots: 15, booked: 12, level: "Débutant", color: "#00C896" },
    { time: "18:00", dur: 60, activity: "Cardio", coach: "Thomas Leroy", spots: 25, booked: 20, level: "Tous niveaux", color: "#FF3B30" }
  ],
  "Mardi": [
    { time: "08:00", dur: 60, activity: "CrossFit", coach: "Alexandre Dubois", spots: 12, booked: 10, level: "Intermédiaire", color: "#FF6B00" },
    { time: "10:00", dur: 60, activity: "Pilates", coach: "Emma Fontaine", spots: 12, booked: 9, level: "Débutant", color: "#00B4D8" },
    { time: "19:00", dur: 60, activity: "Musculation", coach: "Karim Benzali", spots: 30, booked: 24, level: "Tous niveaux", color: "#E8FF00" }
  ],
  "Mercredi": [
    { time: "08:00", dur: 60, activity: "Yoga", coach: "Sofia Mendez", spots: 15, booked: 11, level: "Tous niveaux", color: "#00C896" },
    { time: "10:30", dur: 60, activity: "CrossFit", coach: "Alexandre Dubois", spots: 12, booked: 12, level: "Intermédiaire", color: "#FF6B00" },
    { time: "12:00", dur: 45, activity: "Cardio", coach: "Thomas Leroy", spots: 25, booked: 10, level: "Tous niveaux", color: "#FF3B30" },
    { time: "18:00", dur: 60, activity: "Boxe", coach: "Nadia Ouali", spots: 20, booked: 16, level: "Tous niveaux", color: "#9B59B6" },
    { time: "19:30", dur: 55, activity: "Pilates", coach: "Emma Fontaine", spots: 12, booked: 8, level: "Débutant", color: "#00B4D8" }
  ],
  "Jeudi": [
    { time: "07:00", dur: 60, activity: "Musculation", coach: "Karim Benzali", spots: 30, booked: 22, level: "Tous niveaux", color: "#E8FF00" },
    { time: "09:30", dur: 55, activity: "Yoga", coach: "Sofia Mendez", spots: 15, booked: 13, level: "Avancé", color: "#00C896" },
    { time: "18:30", dur: 60, activity: "HIIT", coach: "Alexandre Dubois", spots: 20, booked: 20, level: "Intermédiaire", color: "#FF6B00" },
    { time: "20:00", dur: 60, activity: "Cardio", coach: "Thomas Leroy", spots: 25, booked: 12, level: "Tous niveaux", color: "#FF3B30" }
  ],
  "Vendredi": [
    { time: "07:00", dur: 60, activity: "CrossFit", coach: "Alexandre Dubois", spots: 12, booked: 11, level: "Avancé", color: "#FF6B00" },
    { time: "10:00", dur: 60, activity: "Boxe", coach: "Nadia Ouali", spots: 20, booked: 7, level: "Débutant", color: "#9B59B6" },
    { time: "12:00", dur: 55, activity: "Pilates", coach: "Emma Fontaine", spots: 12, booked: 10, level: "Tous niveaux", color: "#00B4D8" },
    { time: "18:00", dur: 60, activity: "Musculation", coach: "Karim Benzali", spots: 30, booked: 28, level: "Tous niveaux", color: "#E8FF00" },
    { time: "19:30", dur: 45, activity: "Yoga", coach: "Sofia Mendez", spots: 15, booked: 14, level: "Intermédiaire", color: "#00C896" }
  ],
  "Samedi": [
    { time: "09:00", dur: 90, activity: "CrossFit", coach: "Alexandre Dubois", spots: 15, booked: 15, level: "Tous niveaux", color: "#FF6B00" },
    { time: "10:00", dur: 60, activity: "Yoga", coach: "Sofia Mendez", spots: 20, booked: 17, level: "Débutant", color: "#00C896" },
    { time: "11:30", dur: 60, activity: "Boxe", coach: "Nadia Ouali", spots: 20, booked: 13, level: "Intermédiaire", color: "#9B59B6" },
    { time: "14:00", dur: 60, activity: "Musculation", coach: "Karim Benzali", spots: 30, booked: 19, level: "Tous niveaux", color: "#E8FF00" }
  ],
  "Dimanche": [
    { time: "09:00", dur: 60, activity: "Yoga", coach: "Sofia Mendez", spots: 20, booked: 15, level: "Tous niveaux", color: "#00C896" },
    { time: "10:30", dur: 60, activity: "Cardio", coach: "Thomas Leroy", spots: 25, booked: 8, level: "Tous niveaux", color: "#FF3B30" },
    { time: "15:00", dur: 45, activity: "Pilates", coach: "Emma Fontaine", spots: 12, booked: 6, level: "Débutant", color: "#00B4D8" }
  ]
};
