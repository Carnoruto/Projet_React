const API_BASE =
  "https://donnees.montreal.ca/api/3/action/datastore_search" +
  "?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336";

/**
 * Tente d'extraire l'arrondissement depuis la fin du titre.
 * Ex: "... arrondissement de Montréal-Nord" → "Montréal-Nord"
 * Ex: "... arrondissement du Plateau-Mont-Royal" → "Plateau-Mont-Royal"
 */
function extraireArrondissement(titre) {
  if (!titre) return "Non spécifié";

  // Cherche "arrondissement de/du/d'/des ..." à la fin du titre
  const match = titre.match(
    /arrondissement(?:\s+de(?:s)?|\s+du|\s+d')\s+([^–\-,\.]+?)(?:\s*[-–].*)?$/i
  );
  if (match) return match[1].trim();

  // Cherche "arrondissement X" sans préposition
  const match2 = titre.match(
    /arrondissement\s+([A-ZÀ-Ö][^,\.–\-]+?)(?:\s*[-–,].*)?$/i
  );
  if (match2) return match2[1].trim();

  return "Non spécifié";
}

/**
 * Convertit un enregistrement brut de l'API vers le modèle interne.
 * Champs réels : titre, date_debut, date_fin, type, service_publieur, lien
 */
function mapAlerte(raw) {
  const titre = raw.titre ?? "Sans titre";
  return {
    id:             raw._id,
    titre:          titre,
    description:    raw.type             ?? "",   // le seul champ descriptif disponible
    sujet:          raw.type             ?? "Autre",
    arrondissement: extraireArrondissement(titre),
    dateDebut:      raw.date_debut       ?? null,
    dateFin:        raw.date_fin         ?? null,
    url:            raw.lien             ?? null,
  };
}

export async function fetchAlertes(offset = 0, limit = 20) {
  const url = `${API_BASE}&limit=${limit}&offset=${offset}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status}`);
  }

  const json = await response.json();

  if (!json.success) {
    throw new Error("L'API a retourné une erreur.");
  }

  return {
    alertes: json.result.records.map(mapAlerte),
    total:   json.result.total,
  };
}