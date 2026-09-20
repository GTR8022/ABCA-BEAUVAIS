// Fonction serverless Vercel : reception des demandes de gala.
//
// Pourquoi cette fonction existe :
// les demandes etaient envoyees par FormSubmit, qui expedie depuis un serveur
// gratuit partage (formsubmit.co). AOL ne voit aucun lien entre cet expediteur
// et l'association, d'ou le classement systematique en courrier indesirable.
//
// Ici, le mail est envoye depuis contact@catchfrancais.fr (le domaine du site),
// signe DKIM et couvert par SPF : il est authentifie, donc accepte en boite de
// reception.
//
// Variables d'environnement a definir sur Vercel :
//   RESEND_API_KEY  cle API Resend (ajoutee automatiquement par l'integration
//                   Resend du marketplace Vercel)
//   CONTACT_TO      (optionnel) adresse de reception, defaut : celle ci-dessous
//   CONTACT_FROM    (optionnel) expediteur, defaut : contact@catchfrancais.fr
//
// Tant que RESEND_API_KEY n'est pas definie, la fonction bascule
// automatiquement sur FormSubmit : le formulaire continue donc de marcher
// exactement comme avant, sans coupure.

const DESTINATAIRE_PAR_DEFAUT = 'GRIGNONcatchABCA@aol.com';
const EXPEDITEUR_PAR_DEFAUT = 'ABCA Beauvais <contact@catchfrancais.fr>';

// Champs du formulaire, dans l'ordre d'affichage dans le mail.
const CHAMPS = [
  ['organisateur', "Nom de l'organisateur"],
  ['structure', 'Mairie / Comite'],
  ['email', 'Email'],
  ['telephone', 'Telephone'],
  ['ville', "Ville de l'evenement"],
  ['date', 'Date souhaitee'],
  ['public', "Nombre d'invites"],
  ['message', 'Message'],
];

const echappe = (valeur) =>
  String(valeur == null ? '' : valeur)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function construitCorps(donnees) {
  const lignes = CHAMPS.filter(([cle]) => donnees[cle]).map(([cle, libelle]) => [
    libelle,
    String(donnees[cle]).trim(),
  ]);

  const texte = lignes.map(([libelle, valeur]) => `${libelle} : ${valeur}`).join('\n');

  const html = `<!doctype html><html lang="fr"><body style="font-family:Arial,Helvetica,sans-serif;color:#111;">
  <p>Nouvelle demande de gala recue depuis le site catchfrancais.fr.</p>
  <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
    ${lignes
      .map(
        ([libelle, valeur]) =>
          `<tr><td style="border-bottom:1px solid #ddd;"><strong>${echappe(
            libelle
          )}</strong></td><td style="border-bottom:1px solid #ddd;">${echappe(valeur).replace(
            /\n/g,
            '<br>'
          )}</td></tr>`
      )
      .join('')}
  </table>
  <p style="color:#666;font-size:12px;">Repondre a ce message ecrit directement a l'organisateur.</p>
  </body></html>`;

  return { texte, html };
}

// Repli : ancien circuit FormSubmit, utilise tant que Resend n'est pas configure.
async function envoiViaFormSubmit(donnees, destinataire) {
  const formulaire = new URLSearchParams();
  for (const [cle, libelle] of CHAMPS) {
    if (donnees[cle]) formulaire.append(libelle, String(donnees[cle]));
  }
  formulaire.append('_subject', donnees._subject);
  formulaire.append('_template', 'table');
  formulaire.append('_captcha', 'false');
  if (donnees.email) formulaire.append('_replyto', String(donnees.email));

  const reponse = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(destinataire)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
      body: formulaire,
    }
  );

  if (!reponse.ok) throw new Error(`FormSubmit a repondu ${reponse.status}`);
}

async function envoiViaResend(donnees, destinataire, sujet) {
  const { texte, html } = construitCorps(donnees);

  const reponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || EXPEDITEUR_PAR_DEFAUT,
      to: [destinataire],
      reply_to: donnees.email ? [String(donnees.email)] : undefined,
      subject: sujet,
      text: texte,
      html,
    }),
  });

  if (!reponse.ok) {
    const detail = await reponse.text();
    throw new Error(`Resend a repondu ${reponse.status} : ${detail}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erreur: 'Methode non autorisee' });
  }

  const donnees = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

  // Piege a robots : rempli uniquement par les automates, on accepte
  // silencieusement sans rien envoyer.
  if (donnees._honey) return res.status(200).json({ ok: true });

  const manquants = ['organisateur', 'structure', 'email', 'telephone', 'ville'].filter(
    (cle) => !donnees[cle] || !String(donnees[cle]).trim()
  );
  if (manquants.length) {
    return res.status(400).json({ ok: false, erreur: `Champs manquants : ${manquants.join(', ')}` });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(donnees.email))) {
    return res.status(400).json({ ok: false, erreur: 'Adresse email invalide' });
  }

  const destinataire = process.env.CONTACT_TO || DESTINATAIRE_PAR_DEFAUT;
  const sujet = `Demande de gala - ${String(donnees.ville).trim()} - ${String(
    donnees.organisateur
  ).trim()}`;
  donnees._subject = sujet;

  try {
    if (process.env.RESEND_API_KEY) {
      await envoiViaResend(donnees, destinataire, sujet);
    } else {
      await envoiViaFormSubmit(donnees, destinataire);
    }
    return res.status(200).json({ ok: true });
  } catch (erreur) {
    console.error('Echec envoi demande de gala :', erreur);
    return res
      .status(502)
      .json({ ok: false, erreur: "L'envoi a echoue. Merci de nous appeler au 06 95 06 09 68." });
  }
}
