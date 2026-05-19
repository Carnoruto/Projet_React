import { useParams } from "react-router-dom";
import { alertes } from "../services/alertes";
import "./AlerteDetail.css";

export default function AlerteDetail() {
  const { id } = useParams();
  const alerte = alertes.find(a => a.id === Number(id));

  if (!alerte) {
    return <p>Alerte introuvable.</p>;
  }

  return (
    <div className="detail">
      <h2>{alerte.titre}</h2>

      <p><strong>Arrondissement :</strong> {alerte.arrondissement}</p>
      <p><strong>Sujet :</strong> {alerte.sujet}</p>
      <p><strong>Date :</strong> {alerte.date}</p>

      <p className="description">{alerte.description}</p>
    </div>
  );
}
