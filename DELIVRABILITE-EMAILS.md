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

## État : en service depuis le 20 septembre 2026

L'envoi authentifié est **actif en production**. Vérification :

```
curl https://catchfrancais.fr/api/contact
{"ok":true,"envoi":"resend","expediteur":"ABCA Beauvais <contact@catchfrancais.fr>"}
```

Si `envoi` repasse un jour à `formsubmit (repli)`, c'est que la variable
`RESEND_API_KEY` a disparu du projet Vercel (ou qu'un déploiement est plus
ancien que son ajout) : le formulaire continue de fonctionner, mais les mails
repartent du serveur partagé et risquent à nouveau le dossier indésirables.

Enregistrements DNS en place sur `catchfrancais.fr` :

| Type | Nom | Rôle |
|---|---|---|
| TXT | `resend._domainkey` | clé publique DKIM (signature des messages) |
| TXT | `send` | SPF (`v=spf1 include:amazonses.com ~all`) |
| MX | `send` | retours et plaintes (`feedback-smtp.eu-west-1.amazonses.com`) |

## Ce qu'il reste à faire, une seule fois, dans la boîte AOL

Indispensable : les anciens messages classés en spam continuent d'influencer le
filtre, même si l'expéditeur a changé.

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
