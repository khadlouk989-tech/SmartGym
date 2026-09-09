import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

const SUBJECTS = ["Information abonnement", "Réservation cours", "Demande coaching", "Autre"];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: SUBJECTS[0],
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await sendContactMessage({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        subject: form.subject,
        message: form.message
      });
      setSuccess(true);
      setForm(initialForm);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page active" id="page-contact">
      <section style={{ paddingTop: 80, background: "#0A0A0A" }}>
        <div className="section-inner">
          <div className="section-head left">
            <p className="section-label">Nous joindre</p>
            <h2 className="section-title">CONTACT</h2>
            <p className="section-sub">Une question ? On vous répond sous 24h</p>
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-info-card">
                <h3>INFOS PRATIQUES</h3>
                <p>Retrouvez-nous sur place ou contactez-nous en ligne</p>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text"><p>Adresse</p><span>15 Avenue du Sport, 75015 Paris</span></div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text"><p>Téléphone</p><a href="tel:+33123456789">+33 1 23 45 67 89</a></div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text"><p>Email</p><a href="mailto:contact@smartgym.fr">contact@smartgym.fr</a></div>
                </div>
              </div>
              <div className="contact-info-card">
                <h3>HORAIRES</h3>
                <p>Nos portes vous sont ouvertes</p>
                <div className="hours-grid">
                  <div className="hour-row"><span>Lun – Ven</span><span>06h – 22h</span></div>
                  <div className="hour-row"><span>Samedi</span><span>08h – 20h</span></div>
                  <div className="hour-row"><span>Dimanche</span><span>09h – 18h</span></div>
                  <div className="hour-row"><span>Jours fériés</span><span>10h – 16h</span></div>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>ENVOYER UN MESSAGE</h3>
              <p>Remplissez le formulaire et nous vous répondrons rapidement</p>
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" name="firstName" placeholder="Karim" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" name="lastName" placeholder="Rachid" value={form.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Sujet</label>
                <select name="subject" value={form.subject} onChange={handleChange}>
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Votre message..." value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button className="form-submit" type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : "Envoyer le message →"}
              </button>
              {error && (
                <div className="form-success" style={{ display: "block", background: "rgba(255,59,48,.1)", borderColor: "rgba(255,59,48,.3)", color: "#FF3B30" }}>
                  ⚠️ {error}
                </div>
              )}
              <div className="form-success" id="formSuccess" style={{ display: success ? "block" : "none" }}>
                ✅ Message envoyé ! Nous vous répondrons sous 24h.
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
