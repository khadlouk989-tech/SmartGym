import { useState } from "react";
import { GALLERY } from "../data/gallery";

const CATEGORIES = ["Tous", "Équipements", "Cours", "Coaching", "Infrastructures"];

export default function Gallery() {
  const [filter, setFilter] = useState("Tous");
  const items = filter === "Tous" ? GALLERY : GALLERY.filter(g => g.cat === filter);

  return (
    <div className="page active" id="page-galerie">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head">
            <p className="section-label">Photos</p>
            <h2 className="section-title">GALERIE</h2>
            <p className="section-sub">Découvrez nos installations, cours et l'ambiance SmartGym</p>
          </div>
          <div className="gallery-filter" id="galleryFilter">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn${cat === filter ? " active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery-masonry" id="galleryGrid">
            {items.map((g, i) => (
              <div className="gallery-item" key={i}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <div className="overlay"><small>{g.cat}</small><span>{g.alt}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
