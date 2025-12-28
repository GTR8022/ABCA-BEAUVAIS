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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal delay={0}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg rotate-1 hover:rotate-0 transition-all duration-500 bg-white">
                    <img src="https://picsum.photos/id/100/400/600" alt="Affiche 1960" className="w-full h-auto sepia contrast-125 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>
                    
                    <div className="absolute bottom-0 left-0 z-20 bg-black/70 text-white text-xs px-2 py-1 w-full text-center font-header">Gala 1964</div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg -rotate-2 hover:rotate-0 transition-all duration-500 bg-white mt-8">
                    <img src="https://picsum.photos/id/200/400/500" alt="Affiche 1980" className="w-full h-auto grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>

                    <div className="absolute bottom-0 left-0 z-20 bg-black/70 text-white text-xs px-2 py-1 w-full text-center font-header">Beauvais 1982</div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg rotate-2 hover:rotate-0 transition-all duration-500 bg-white">
                    <img src="https://picsum.photos/id/300/400/600" alt="Affiche 1990" className="w-full h-auto sepia-[.5] contrast-125 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>

                    <div className="absolute bottom-0 left-0 z-20 bg-black/70 text-white text-xs px-2 py-1 w-full text-center font-header">Grand Prix 1995</div>
                </div>
            </ScrollReveal>
            
             <ScrollReveal delay={300}>
                <div className="relative group overflow-hidden border-4 border-white/10 shadow-lg -rotate-1 hover:rotate-0 transition-all duration-500 bg-white mt-12">
                    <img src="https://picsum.photos/id/400/400/500" alt="Affiche 2000" className="w-full h-auto grayscale contrast-100 opacity-90 hover:opacity-100 transition-opacity" />
                    
                    {/* Dust Overlay Effect */}
                    <div 
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("${dustEffect}")` }}
                    ></div>

                    <div className="absolute bottom-0 left-0 z-20 bg-black/70 text-white text-xs px-2 py-1 w-full text-center font-header">Championnat 2004</div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};