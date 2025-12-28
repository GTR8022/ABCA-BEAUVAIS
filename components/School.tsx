import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const School: React.FC = () => {
  return (
    <section id="ecole" className="py-20 bg-neutral-900 border-y border-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
                <ScrollReveal>
                    <div className="relative">
                        <div className="absolute inset-0 border-2 border-abca-red transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="/images/ecole.jpg" 
                            alt="Entraînement École de Catch ABCA" 
                            className="relative w-full h-auto grayscale contrast-125 shadow-2xl border border-neutral-700 hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute top-0 left-0 bg-abca-gold text-black font-header font-bold px-4 py-2 uppercase tracking-wider">
                            Tous les mercredis & vendredis
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <ScrollReveal delay={200}>
                    <h2 className="font-header text-3xl md:text-5xl font-bold uppercase text-white mb-6">
                        L'École des <span className="text-abca-red">Champions</span>
                    </h2>
                    <h3 className="text-xl text-gray-400 font-bold mb-6 uppercase tracking-wide">
                        Formation - Discipline - Respect
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        L'ABCA, ce n'est pas seulement des galas. C'est aussi une <strong>école de catch réputée à Beauvais</strong> qui forme la nouvelle génération depuis des décennies.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-abca-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-300">Apprentissage de la chute et de la sécurité (Rolls, Bumps).</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-abca-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-300">Valeurs sportives : humilité, entraide et dépassement de soi.</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-abca-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-300">Ouvert aux jeunes dès 14 ans et aux adultes.</span>
                        </li>
                    </ul>

                    <a href="#contact" className="inline-block text-abca-red border-b-2 border-abca-red pb-1 font-header font-bold uppercase hover:text-white hover:border-white transition-colors">
                        Rejoindre l'école &rarr;
                    </a>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};