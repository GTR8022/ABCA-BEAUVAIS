import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MentionsLegales: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-gray-300 font-body py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-block mb-8 text-abca-red hover:text-white font-bold uppercase transition-colors">
            &larr; Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-header text-white mb-12 uppercase border-b-4 border-abca-gold pb-4">Mentions Légales</h1>

        <div className="space-y-8">
            <section>
                <h2 className="text-2xl text-white font-bold mb-4">1. Éditeur du site</h2>
                <p>
                    Le site internet <strong>abca-beauvais.fr</strong> est édité par l'<strong>Association Beauvaisienne de Catch et d'Athlétisme (ABCA)</strong>, association régie par la loi du 1er juillet 1901.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li><strong>Siège social :</strong> 27 rue de Villers Saint Lucien, 60000 Beauvais</li>
                    <li><strong>Président :</strong> Olivier Grignon</li>
                    <li><strong>Email :</strong> GRIGNONcatchABCA@aol.com</li>
                    <li><strong>Téléphone :</strong> 06 95 06 09 68</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">2. Hébergement</h2>
                <p>
                    Le site est hébergé par la société <strong>Vercel Inc.</strong><br/>
                    Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br/>
                    Site web : https://vercel.com
                </p>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">3. Propriété Intellectuelle</h2>
                <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
            </section>

            <section>
                <h2 className="text-2xl text-white font-bold mb-4">4. Responsabilité</h2>
                <p>
                    L'ABCA s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};