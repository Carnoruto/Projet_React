import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { alertes } from "../services/alertes";
import removeAccents from "../utils/removeAccents";
import "./Accueil.css";

export default function Accueil() {
  const [search, setSearch] = useState("");
  const [borough, setBorough] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const boroughs = [...new Set(alertes.map(a => a.arrondissement))];
  const subjects = [...new Set(alertes.map(a => a.sujet))];

  const handleSearch = () => {
    console.log("Recherche :", search, borough, subject, selectedDate);
  };

  const handleReset = () => {
    setSearch("");
    setBorough("");
    setSubject("");
    setSelectedDate(null);
  };

  const filtered = alertes.filter(a => {
    const matchSearch = removeAccents(a.titre.toLowerCase()).includes(removeAccents(search.toLowerCase()));
    const matchBorough = borough ? a.arrondissement === borough : true;
    const matchSubject = subject ? a.sujet === subject : true;
    const matchDate = selectedDate
      ? a.date === selectedDate.toISOString().split("T")[0]
      : true;
    return matchSearch && matchBorough && matchSubject && matchDate;
  });

  return (
    <div className="accueil-page">
      <div className="accueil-main">
        <h2 className="titre">Avis et alertes</h2>
        <p className="sous-titre">Trouver un avis</p>

        {/* Encadré de recherche */}
        <div className="encadre-recherche">
          <p className="label-recherche">Rechercher par mot-clé</p>

          <div className="recherche-section">
            <input
              type="text"
              placeholder="Que cherchez-vous?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="barre-recherche"
            />
            <button className="btn-rechercher" onClick={handleSearch}>
              Rechercher
            </button>
            <button className="btn-effacer" onClick={handleReset}>
              Effacer
            </button>
          </div>

          {/* Filtres */}
          <div className="filtres">
            <select value={borough} onChange={(e) => setBorough(e.target.value)}>
              <option value="">Arrondissement</option>
              {boroughs.map(b => <option key={b}>{b}</option>)}
            </select>

            <button
              className="btn-date"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {selectedDate ? selectedDate.toISOString().split("T")[0] : "Date"}
            </button>

            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Sujet</option>
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Popup calendrier */}
          {showCalendar && (
            <div className="calendar-popup">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
              <div className="calendar-buttons">
                <button className="btn-reset" onClick={() => setSelectedDate(null)}>
                  Réinitialiser
                </button>
                <button className="btn-apply" onClick={() => setShowCalendar(false)}>
                  Appliquer
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="result-count">{filtered.length} résultats</p>

        <div className="liste-alertes">
          {filtered.map(a => (
            <div key={a.id} className="carte-alerte">
              <h3>{a.titre}</h3>
              <p className="categorie">{a.sujet}</p>
              <p className="date">{a.date}</p>
              <p className="arrondissement">{a.arrondissement}</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="abonnement">
        <h3>S’abonner aux alertes</h3>
        <p>Pour recevoir des avis et alertes par courriel ou texto, vous devez avoir créé un compte.</p>
        <button className="btn-abonner">M’abonner →</button>
      </aside>
    </div>
  );
}
