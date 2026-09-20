# Les demandes de gala partaient dans les indésirables — état et marche à suivre

## La cause réelle

Le formulaire envoyait les demandes via **FormSubmit**, un service gratuit qui
expédie depuis `formsubmit.co` — un serveur partagé par des milliers de sites,
sans aucun lien avec l'association. Pour AOL, le message arrive d'un expéditeur
inconnu, non rattaché à `catchfrancais.fr` : classement en indésirables quasi
systématique.

S'y ajoutaient des signaux aggravants, tous corrigés depuis :
emoji dans l'objet (`✨ Demande de Gala`), emojis dans tous les libellés de
champs, objet toujours identique, et aucune adresse de réponse.

## La solution mise en place

Le site envoie désormais les demandes via sa **propre fonction serveur**
(`api/contact.js`, hébergée sur Vercel), qui expédie le mail depuis
**`contact@catchfrancais.fr`** — le domaine du site — avec signature **DKIM** et
enregistrement **SPF**.

Un mail authentifié, provenant du domaine de l'association, vers la boîte AOL de
l'association : c'est la configuration qu'AOL accepte en boîte de réception.

En prime : objet personnalisé (`Demande de gala - Clermont - Jean Dupont`),
réponse directe à l'organisateur, validation des champs côté serveur et piège à
robots.

> **Sécurité** : tant que la clé `RESEND_API_KEY` n'est pas définie sur Vercel,
> la fonction bascule automatiquement sur l'ancien circuit FormSubmit. Le
> formulaire n'est donc jamais coupé pendant la mise en place.

## Ce qu'il reste à faire (2 étapes)

### 1. Activer l'envoi depuis le domaine

Sur le tableau de bord Vercel du projet `abca-beauvais` :
**Integrations** → chercher **Resend** → *Add Integration* (offre gratuite :
3 000 mails/mois, très au-dessus des besoins).

L'intégration crée le compte et ajoute automatiquement la variable
`RESEND_API_KEY` au projet. Aucune clé à copier à la main.

Puis, dans Resend : **Domains** → *Add Domain* → `catchfrancais.fr`.
Resend affiche alors 2 ou 3 enregistrements DNS (DKIM, SPF, éventuellement
DMARC). Le DNS de `catchfrancais.fr` étant géré par Vercel, ces enregistrements
peuvent être ajoutés directement — il suffit de les transmettre.

Une fois le domaine vérifié (quelques minutes), **redéployer le site** : les
mails partiront de `contact@catchfrancais.fr`.

### 2. Nettoyer l'historique dans la boîte AOL

Indispensable : les anciens messages classés en spam continuent d'influencer le
filtre.

1. Dossier **Courrier indésirable** → ouvrir chaque demande de gala → cliquer
   **« Ce n'est pas du spam »**.
2. **Ajouter `contact@catchfrancais.fr` aux contacts** AOL.
3. Créer un filtre de sécurité : Paramètres → **Plus de paramètres** →
   **Filtres** → *Ajouter* → Expéditeur *contient* `catchfrancais.fr` →
   dossier **Boîte de réception**.

## Vérifier que ça marche

Envoyer une demande test depuis https://catchfrancais.fr et vérifier qu'elle
arrive en **boîte de réception**, avec :

- expéditeur : `ABCA Beauvais <contact@catchfrancais.fr>`
- objet : `Demande de gala - <ville> - <nom>`

Dans le mail reçu, le bouton « Répondre » écrit directement à l'organisateur.

## Où regarder en cas de problème

- Logs de la fonction : tableau de bord Vercel → projet → **Logs** →
  `/api/contact`
- Journal des envois : tableau de bord Resend → **Emails** (statut délivré /
  rejeté pour chaque message)
