# ABCA Beauvais — Site officiel

Site vitrine de l'Association Beauvaisienne de Catch et d'Athlétisme (galas de
catch clé en main pour mairies et comités des fêtes, école de catch).

Stack : React 19 + TypeScript + Vite, Tailwind (CDN), React Router, Leaflet.
Déploiement : Vercel (`vercel.json`).

## Lancer en local

**Prérequis :** Node.js 20+ (https://nodejs.org)

1. Installer les dépendances :
   `npm install`
2. Lancer le site :
   `npm run dev`
3. Ouvrir http://localhost:3000

Aucune clé d'API n'est nécessaire : le site est entièrement statique.

## Construire / prévisualiser le build

```
npm run build     # génère le dossier dist/
npm run preview   # sert le build en local
```

## Formulaire de demande de gala

Le formulaire de la section Contact envoie les demandes par e-mail via
[FormSubmit](https://formsubmit.co) vers `GRIGNONcatchABCA@aol.com`.

Pour que ces demandes n'arrivent PAS dans les courriers indésirables :

- l'objet et les libellés des champs ne doivent contenir **aucun emoji** ;
- l'adresse expéditrice de FormSubmit doit être ajoutée aux **contacts** de la
  boîte AOL, avec un **filtre** qui force la réception dans la boîte de réception.

Voir `DELIVRABILITE-EMAILS.md` pour la marche à suivre détaillée.
