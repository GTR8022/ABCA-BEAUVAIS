import React from 'react';
import { ScrollReveal } from './ScrollReveal';

// Motif SVG "Poussière et Grain" pour effet vintage (Data URI)
const dustEffect = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E";

export const VintageGallery: React.FC = () => {
  return (
    <section className="py-20 bg-abca-gray border-y border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <ScrollReveal>
                <div>
                    <h2 className="font-header text-3xl md:text-4xl font-bold uppercase text-white">
                        Les Affiches <span className="text-abca-red">D'Antan</span>
                    </h2>
                    <p className="text-gray-400 mt-2">Plongez dans nos archives : plus de 60 ans de spectacles.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                 <div className="bg-neutral-800 px-4 py-2 border border-neutral-700 rounded-sm">
                    <span className="text-abca-gold font-header font-bold text-xl">Depuis 1956</span>
                 </div>
            </ScrollReveal>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg rotate-1 hover:rotate-0 transition-all duration-500 bg-white">
                    <img src="/images/affiche%201977.jpeg" alt="Affiche Catch Beauvais 1977" className="w-full h-auto contrast-125 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>
                    
                    <div className="absolute bottom-0 left-0 z-20 bg-black/80 text-white text-sm px-3 py-2 w-full text-center font-header border-t-2 border-abca-gold">Gala Historique 1977</div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg -rotate-1 hover:rotate-0 transition-all duration-500 bg-white md:mt-12">
                    <img src="/images/affiche%201992.jpeg" alt="Affiche Catch Beauvais 1992" className="w-full h-auto contrast-125 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>

                    <div className="absolute bottom-0 left-0 z-20 bg-black/80 text-white text-sm px-3 py-2 w-full text-center font-header border-t-2 border-abca-gold">L'Âge d'Or 1992</div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
                <div className="relative group overflow-hidden border-4 border-abca-red shadow-[0_0_15px_rgba(216,0,0,0.5)] rotate-2 hover:rotate-0 transition-all duration-500 bg-white">
                    <img src="/images/affiche%202025.jpg" alt="Affiche Catch Beauvais 2025" className="w-full h-auto contrast-110 opacity-100 hover:scale-105 transition-transform duration-500" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>

                    <div className="absolute bottom-0 left-0 z-20 bg-abca-red text-white text-sm px-3 py-2 w-full text-center font-header font-bold uppercase tracking-widest">Prochain Gala 2025</div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};