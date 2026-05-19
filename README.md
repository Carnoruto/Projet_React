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
