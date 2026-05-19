import { useParams, Link } from "react-router-dom";
import { alertes } from "../services/alertes";
import "./AlerteDetail.css";

export default function AlerteDetail() {
  const { id } = useParams();
  const alerte = alertes.find(a => a.id === Number(id));

  if (!alerte) {
    return (
      <div className="alerte-detail">
        <h2>Alerte introuvable</h2>
        <Link to="/" className="btn-retour">← Retour à l’accueil</Link>
      </div>
    );
  }

  return (
    <div className="alerte-detail">
      <Link to="/" className="btn-retour">← Retour</Link>

      <h1>{alerte.titre}</h1>

      <p><strong>Arrondissement :</strong> {alerte.arrondissement}</p>
      <p><strong>Sujet :</strong> {alerte.sujet}</p>
      <p><strong>Date :</strong> {alerte.date}</p>

      <div className="description">
        {alerte.description}
      </div>
    </div>
  );
}
