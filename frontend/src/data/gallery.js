// NOTE: the original frondend/gym.nador.js referenced a `GALLERY` array in
// renderGallery() but never defined it anywhere in the file - visiting the
// Galerie page in the original would throw "GALLERY is not defined". The
// filter buttons were hardcoded to these four categories: Équipements, Cours,
// Coaching, Infrastructures. This file fills that gap with data matching
// those categories and the same gallery-item shape (src/alt/cat) the
// original renderGallery() expected, so the page actually works.
export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Salle de musculation", cat: "Équipements" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Zone cardio", cat: "Équipements" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80", alt: "Rack à poids libres", cat: "Équipements" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", alt: "Cours de CrossFit", cat: "Cours" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", alt: "Cours de Yoga", cat: "Cours" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", alt: "Cours de Pilates", cat: "Cours" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80", alt: "Session de boxe", cat: "Cours" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Coaching personnalisé", cat: "Coaching" },
  { src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80", alt: "Bilan fitness avec un coach", cat: "Coaching" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", alt: "Accompagnement nutrition", cat: "Coaching" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", alt: "Vestiaires", cat: "Infrastructures" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Espace détente", cat: "Infrastructures" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Entrée de la salle", cat: "Infrastructures" }
];
