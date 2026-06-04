Étudiant : Rami Grissen

Projet 1: Conception d'une application React pour les Avis et alertes de Montréal.

1. Description du site

Cette application web inspiré de https://montreal.ca/avis-et-alertes?q= ,
permet de :
           - de rechercher des avis et alertes par mot-clé

           - de filtrer par arrondissement, date et sujet

           - d’afficher une liste d’alertes

           - de consulter une page détaillée pour chaque alerte

           - d’accéder à une page “S’abonner” (fonctionnalité non disponible)

           - d’avoir une interface responsive (mobile + bureau)

Le site est construit avec React et Vite

2. Initialisation du projet

Vous devez premièrement télécharger le projet du lien GitHub (https://github.com/Carnoruto/Projet_React)

Ensuite, dans le terminal taper cela :

cd Projet_1

npm install

npm run dev

Finalement, cliquer sur le lien http://localhost:5173

3. Fonctionnalité/Structure du site

L'utilisateur choisie des alertes de la page ou decide de taper du texte dans la bare de recherche.

Les Filtres incluent : l'arrondissement, la date et le sujet.

Il y a des boutons pour les filtres, pour rechercher et effacer.

Chaque alerte est cliquable et mène à leur page détaillée. 
Elles incluent :
= titre
- arrondissement
- sujet
- date
- description
- bouton retour

La page "S'abonner" affhiche un message de non fonctionnalité avec un bouton de retour.

Le site possède un header qui affiche le logo et la section utilisateur, ainsi qu'un footer pour affiche le copyright du site.

4. Responsive Design

Le site s'adapte è les version mobile (768 px) et bureau




Projet 2: Enrichissement de l'application et transformation en PWA

1. Description du site

Ce site est le même que le projet 1, sauf qu'a la place d'utiliser des alertes fictives, nous utilisons les vrais alertes grâce au dpnnées de l'API de la Ville de Montréal.


3. Méthode utilisées

Dans mon alertes.js, L'API retourne des champs qui ne correspondent pas directement au modèle interne
de l'application. Une fonction "mapAlerte()" isolée convertit chaque enregistrement
brut vers un modèle cohérent : 

| Champ API | Champ interne | Remarque |
|-----------|---------------|----------|
| "_id" | "id" | Identifiant unique |
| "titre" | "titre" | Titre de l'avis |
| "type" | "sujet" + "description" | Catégorie de l'avis |
| "date_debut" | "dateDebut" | Date de début |
| "date_fin` | "dateFin" | Date de fin |
| "lien" | "url` | Lien vers la fiche officielle |
| *(extrait du titre)* | "arrondissement" | Voir ci-dessous |

Pour l'arrondissement, l'API ne fournit pas de champ arrondissement, donc j'ai utilisé une fonction nommé "extraireArrondissement". Elle analyse le titre de chaque avis avec une expression régulière pour en extraire le nom de l'arrondissement quand il est présent.
Par exemple :
"... arrondissement de Côte-des-neiges" → "Côte"


4. Lighthouse

Le score que j'ai obtenu dans le Lighthouse est le suivant :




