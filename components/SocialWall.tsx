import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SocialWall: React.FC = () => {
  return (
    <section className="py-20 bg-abca-gray border-y border-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-header text-3xl md:text-4xl font-bold uppercase mb-8">
            Suivez l'Actualité <span className="text-abca-gold">En Direct</span>
          </h2>
          
          <div className="max-w-xl mx-auto w-full">
            {/* 
              Container responsive :
              - w-full : prend toute la largeur disponible du parent (max-w-xl)
              - h-[500px] / md:h-[600px] : hauteur fixe adaptée au scroll d'un feed
              - overflow-hidden : empêche le débordement
            */}
            <div 
              id="facebook-feed" 
              className="bg-white w-full h-[500px] md:h-[600px] rounded-sm shadow-[0_0_20px_rgba(20,20,255,0.4)] border-2 border-blue-500 relative overflow-hidden flex items-center justify-center mx-auto"
            >
               {/* Placeholder content responsive */}
               <div className="text-black text-center p-6 w-full max-w-sm mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                  </div>
                  
                  <h3 className="font-header font-bold text-2xl mb-2 text-[#1877F2]">ABCA Beauvais</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    @abcabeauvais &bull; Club de Sport
                  </p>

                  <div className="border-t border-b border-gray-200 py-4 my-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                    <div className="h-32 bg-gray-100 rounded w-full mt-4 flex items-center justify-center text-gray-400 text-xs">
                       <span className="italic">Chargement du flux...</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-4 italic">
                    (Le widget Facebook s'affichera ici)
                  </p>
               </div>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">
              Rejoignez notre communauté sur les réseaux sociaux pour ne manquer aucun événement dans l'Oise.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};