import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const milestones = [
  {
    year: '1956',
    title: 'La Fondation',
    description: 'Monsieur Villeroy pose les premières briques dans les sous-sols du gymnase Pierre de Coubertin à Beauvais. Pas de matelas, juste de la sciure, de la sueur et une passion dévorante. C\'est le début de la légende.',
    image: '/images/fondation.jpeg'
  },
  {
    year: '1970',
    title: 'Le Premier Ring',
    description: 'Investissement historique pour le club : l\'achat du tout premier ring. Fini la sciure, place au professionnalisme. L\'ABCA devient l\'usine à champions du Nord de la France, remplissant les salles des fêtes de l\'Oise.',
    image: '/images/age%20dor.jpeg'
  },
  {
    year: '1995',
    title: 'New Generation',
    description: 'Une nouvelle ère s\'ouvre. Le style change, se modernise. Les coups sont plus durs, le spectacle plus grand, les costumes plus colorés. L\'association s\'adapte aux nouveaux standards du catch international.',
    image: '/images/new%20generation.jpeg'
  },
  {
    year: '2025',
    title: 'L\'Empire',
    description: 'Plus de 30 dates par an. Une machine de guerre événementielle au service du divertissement populaire. Son, Lumières, Ambiance survoltée : l\'ABCA est aujourd\'hui la référence incontournable du catch en Picardie.',
    image: '/images/empire.jpeg'
  }
];

export const Timeline: React.FC = () => {
  const [activeindex, setActiveIndex] = useState(0);

  return (
    <section id="chronologie" className="py-24 bg-neutral-900 relative overflow-hidden border-t-4 border-abca-red">
      {/* Background Year Display (Parallax-ish) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <span className="font-header font-bold text-[20rem] text-outline-red animate-pulse-slow">
            {milestones[activeindex].year}
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-header text-5xl md:text-7xl font-bold uppercase text-white mb-4 italic">
              L'Histoire
            </h2>
            <div className="h-1 w-24 bg-abca-gold mx-auto skew-x-[-12deg]"></div>
          </div>
        </ScrollReveal>

        {/* Interactive Year Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {milestones.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative px-6 py-3 md:px-10 md:py-4 transform skew-x-[-12deg] transition-all duration-300 focus:outline-none ${activeindex === index ? 'scale-110 z-10' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                >
                    {/* Background Shape */}
                    <div className={`absolute inset-0 border-2 transition-colors duration-300 ${activeindex === index ? 'bg-abca-red border-abca-red shadow-[0_0_20px_rgba(216,0,0,0.6)]' : 'bg-neutral-800 border-neutral-600 group-hover:border-white'}`}></div>
                    
                    {/* Text */}
                    <span className={`relative font-header font-bold text-xl md:text-3xl skew-x-[12deg] block ${activeindex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {item.year}
                    </span>
                </button>
            ))}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Image Section */}
                <div key={`img-${activeindex}`} className="relative animate-fade-in order-2 md:order-1">
                    <div className="relative border-4 border-white p-2 bg-black transform rotate-2 shadow-2xl">
                         <img 
                            src={milestones[activeindex].image} 
                            alt={milestones[activeindex].title} 
                            className="w-full h-[300px] md:h-[400px] object-cover contrast-125 transition-all duration-500"
                         />
                         {/* Scanline Effect */}
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-abca-gold"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-abca-gold"></div>
                </div>

                {/* Text Section */}
                <div key={`txt-${activeindex}`} className="text-left md:pl-8 animate-fade-in order-1 md:order-2">
                    <div className="flex items-center gap-4 mb-4">
                         <span className="text-abca-gold font-header font-bold text-6xl opacity-80">{milestones[activeindex].year}</span>
                         <div className="h-1 flex-grow bg-neutral-700">
                            <div className="h-full bg-abca-red w-0 animate-[width_1s_ease-out_forwards]"></div>
                         </div>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-header font-bold uppercase text-white mb-6 italic text-outline-red">
                        {milestones[activeindex].title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-l-4 border-white pl-6">
                        {milestones[activeindex].description}
                    </p>

                    <div className="mt-8 flex gap-2">
                         {[0,1,2].map(i => (
                             <div key={i} className={`w-3 h-3 bg-abca-red rounded-full animate-pulse`} style={{animationDelay: `${i*200}ms`}}></div>
                         ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};