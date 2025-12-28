import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PolitiqueConfidentialite: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-gray-300 font-body py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-block mb-8 text-abca-red hover:text-white font-bold uppercase transition-colors">
            &larr; Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-header text-white mb-12 uppercase border-b-4 border-abca-gold pb-4">Politique de Confidentialité</h1>

        <div className="space-y-8">
            <section>
                <h2 className="text-2xl text-white font-bold mb-4">1. Collecte des données</h2>
                <p>
                    Nous collectons uniquement les données strictement nécessaires au traitement de votre demande via notre formulaire de contact :
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside bg-neutral-800 p-4 rounded">
                    <li>Nom et Prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Informations relatives à votre événement (Ville, Date, Type)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">2. Utilisation des données</h2>
                <p>
                    Ces données sont utilisées <strong>exclusivement</strong> pour :
                </p>
                <ul className="mt-2 list-disc list-inside">
                    <li>Répondre à votre demande de devis ou d'information.</li>
                    <li>Organiser l'événement si le devis est accepté.</li>
                </ul>
                <p className="mt-4">
                    Vos données ne sont <strong>jamais vendues, louées ou cédées</strong> à des tiers à des fins commerciales.
                </p>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">3. Durée de conservation</h2>
                <p>
                    Les données issues du formulaire de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf si une relation commerciale (contrat) est établie, auquel cas les obligations légales de conservation s'appliquent.
                </p>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">4. Vos droits (RGPD)</h2>
                <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
                </p>
                <p className="mt-4">
                    Pour exercer ces droits, contactez-nous par email : <a href="mailto:GRIGNONcatchABCA@aol.com" className="text-abca-gold hover:underline">GRIGNONcatchABCA@aol.com</a>
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl text-white font-bold mb-4">5. Cookies</h2>
                <p>
                    Ce site n'utilise pas de cookies publicitaires ou de traçage intrusifs. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être déposés.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};