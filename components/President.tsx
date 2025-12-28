import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const President: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-abca-dark border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Photo & Badge */}
          <div className="w-full md:w-1/3 relative">
            <ScrollReveal>
                <div className="relative group">
                    {/* Cadre Photo */}
                    <div className="absolute inset-0 border-2 border-abca-gold transform translate-x-3 translate-y-3"></div>
                    <div className="relative overflow-hidden hover:scale-105 transition-all duration-700 shadow-2xl">
                        {/* On utilise la photo de famille pour illustrer la lignée */}
                        <img 
                            src="/images/olivier.jpeg" 
                            alt="Olivier Grignon - Président ABCA Beauvais" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    
                    {/* Badge Olivier Grignon */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-abca-red text-white text-center px-6 py-3 shadow-lg w-[110%] skew-x-[-6deg]">
                        <h3 className="font-header font-bold text-2xl uppercase skew-x-[6deg]">Olivier Grignon</h3>
                        <p className="text-xs font-bold uppercase tracking-widest skew-x-[6deg] text-abca-gold">Président & Ancien Catcheur</p>
                    </div>
                </div>
            </ScrollReveal>
          </div>

          {/* Discours Rassurant */}
          <div className="w-full md:w-2/3 text-left">
            <ScrollReveal delay={200}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-abca-gold"></div>
                    <h2 className="font-header text-3xl md:text-5xl font-bold uppercase text-white">
                        L'Expérience <span className="text-abca-red">Terrain</span>
                    </h2>
                </div>

                <blockquote className="text-xl md:text-2xl text-white font-header italic leading-relaxed mb-8 border-l-4 border-abca-red pl-6 py-2">
                    "Organiser un gala, c'est maîtriser le spectacle, mais surtout garantir une sécurité absolue."
                </blockquote>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        En tant qu'<strong>ancien catcheur professionnel</strong> et héritier d'une tradition familiale qui s'étend sur plusieurs générations, je connais chaque aspect de ce métier. De l'installation du ring aux vestiaires, rien n'est laissé au hasard.
                    </p>
                    <p>
                        Pour les <strong>mairies, comités des fêtes et associations</strong>, l'ABCA n'est pas qu'un prestataire : c'est l'assurance d'un événement clé en main, rodé et sans mauvaise surprise.
                    </p>
                </div>

                {/* Points de Réassurance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                    <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-neutral-700">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white font-bold text-sm uppercase">Matériel Homologué</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-neutral-700">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white font-bold text-sm uppercase">Assurances Pro</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-neutral-700">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white font-bold text-sm uppercase">Savoir-faire Familial</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/30 p-3 rounded border border-neutral-700">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-white font-bold text-sm uppercase">Interlocuteur Unique</span>
                    </div>
                </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};