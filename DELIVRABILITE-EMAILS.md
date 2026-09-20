# Les demandes de gala partent dans les indésirables — que faire

## Pourquoi ça arrivait

Le formulaire du site envoie les demandes par e-mail via le service
**FormSubmit** vers `GRIGNONcatchABCA@aol.com`. Quatre choses poussaient AOL à
classer ces messages en courrier indésirable :

1. **L'objet du mail contenait un emoji** : `✨ Demande de Gala - Nouvelle Version`.
   Un emoji dans l'objet est l'un des signaux de spam les plus forts chez
   AOL / Yahoo.
2. **Tous les libellés de champs contenaient des emojis** (`👤_Organisateur`,
   `✉️_Email`, `📞_Telephone`…). Le corps du mail ressemblait donc à du
   publipostage marketing.
3. **Aucune adresse de réponse (`Reply-To`)** n'était transmise : le mail
   n'avait aucun lien avec un expéditeur humain identifiable.
4. **L'objet était toujours identique** (`Nouvelle Version`), ce qui ressemble à
   un envoi automatisé en masse.

À cela s'ajoute le fait que l'expéditeur réel est un serveur partagé
(`formsubmit.co`) utilisé par des milliers de sites : sa réputation est moyenne,
donc le moindre signal négatif fait basculer le message en spam.

## Ce qui a été corrigé dans le site

- Objet du mail **sans emoji** et **personnalisé à chaque demande** :
  `Demande de gala - Clermont - Jean Dupont`.
  → plus facile à repérer dans la boîte, et beaucoup moins « spammy ».
- **Tous les emojis retirés** des libellés de champs.
- Ajout d'un **`Reply-To` avec l'adresse de l'organisateur** : vous pouvez
  répondre directement depuis le mail, et le message paraît légitime.
- Modèle d'e-mail plus sobre (`table` au lieu de `box`).
- Ajout d'un **piège à robots** (champ caché) : les envois automatisés sont
  supprimés avant de partir, ce qui évite de polluer la boîte et de dégrader la
  réputation de l'expéditeur.

Ces corrections suppriment les causes côté site. **Mais il reste une action à
faire dans la boîte AOL**, sinon les anciens messages classés en spam
continueront d'influencer le filtre.

## Ce qu'il faut faire dans la boîte AOL (5 minutes, à faire une fois)

1. Ouvrir le dossier **Courrier indésirable / Spam**.
2. Ouvrir une ancienne demande de gala et cliquer sur **« Ce n'est pas du spam »**
   (bouton *Not Spam*). Le faire pour **chacune** des demandes présentes.
3. Noter l'adresse exacte de l'expéditeur affichée sur ces mails
   (en général `noreply@formsubmit.co`).
4. **Ajouter cette adresse aux contacts** : ouvrir un mail, cliquer sur le nom de
   l'expéditeur → *Ajouter aux contacts*.
5. **Créer un filtre** pour forcer la réception :
   - Paramètres (roue dentée) → **Plus de paramètres** → **Filtres** →
     **Ajouter de nouveaux filtres**
   - Nom du filtre : `Demandes de gala`
   - Règle : **Expéditeur** → *contient* → `formsubmit.co`
   - Dossier de destination : **Boîte de réception**
   - Enregistrer.

Un second filtre sur **Objet contient `Demande de gala`** est une sécurité utile
si l'adresse d'expédition change un jour.

## Conseil : ne plus dépendre uniquement de l'e-mail

Même bien configuré, un e-mail peut toujours être filtré, et une demande perdue
= un gala perdu. Deux options, par ordre de simplicité :

### Option 1 — Recevoir aussi les demandes sur une adresse Gmail (gratuit)
Gmail filtre beaucoup moins agressivement ce type de message et se « dresse »
plus facilement. Créer une adresse type `contact.abca@gmail.com`, puis me le
dire : je change l'adresse de destination du formulaire en une ligne. L'adresse
AOL peut rester affichée sur le site pour le public.

### Option 2 — Passer à un service avec tableau de bord (recommandé)
Des services comme **Web3Forms** ou **Formspree** (offres gratuites suffisantes
pour le volume d'une association) conservent **toutes les demandes dans une
interface web**, en plus de l'envoi par e-mail. Même si un mail part en spam, la
demande est consultable en ligne et n'est jamais perdue.

La bascule côté site prend quelques minutes : il suffit de créer le compte et de
me communiquer la clé fournie.

## Vérifier que ça marche

Après avoir appliqué les points ci-dessus et mis le site à jour :
envoyer une demande test depuis le site avec une vraie adresse, puis vérifier
qu'elle arrive bien dans la **boîte de réception** AOL, avec un objet du type
`Demande de gala - <ville> - <nom>`.
