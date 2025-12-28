import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ServiceItemProps } from '../types';

const ServiceCard: React.FC<ServiceItemProps> = ({ title, description, icon }) => (
  <div className="group relative transition-all duration-300 transform hover:-translate-y-2">
    {/* Background Shape (Skewed) */}
    <div className="absolute inset-0 bg-neutral-900 border-2 border-neutral-700 transform -skew-x-12 group-hover:bg-black group-hover:border-abca-red transition-all duration-300 group-hover:hard-shadow"></div>
    
    {/* Content (Counter-Skewed to remain readable) */}
    <div className="relative p-8 z-10 flex flex-col items-center text-center">
        <div className="mb-6 text-white group-hover:text-abca-gold transition-colors duration-200 transform group-hover:scale-110 group-hover:animate-shake">
            {icon}
        </div>
        
        <h3 className="font-header text-3xl font-bold uppercase mb-4 text-white italic tracking-wider group-hover:text-abca-red transition-colors">
            {title}
        </h3>
        
        <div className="w-12 h-1 bg-abca-red mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        <p className="text-gray-400 font-bold text-sm uppercase tracking-wide group-hover:text-gray-200 transition-colors">
            {description}
        </p>
    </div>

    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-abca-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-2 -translate-y-2"></div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-abca-dark bg-stripes relative overflow-hidden">
      {/* Big Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 whitespace-nowrap overflow-hidden">
        <span className="font-header font-bold text-[15rem] md:text-[25rem] uppercase text-outline">Showtime</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal>
            <h2 className="font-header text-5xl md:text-7xl font-bold uppercase text-white mb-2 italic">
              Nos Formules <span className="text-abca-red text-outline-red">Power</span>
            </h2>
            <p className="text-xl text-white font-bold bg-abca-red inline-block px-4 py-1 skew-x-[-12deg]">
              <span className="skew-x-[12deg] block">PACKS CLÉ EN MAIN POUR MAIRIES</span>
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4">
          <ScrollReveal delay={0}>
            <ServiceCard 
              title="Le Ring"
              description="Structure homologuée. Montage pro en 2H. Sécurité maximale. C'est ici que la guerre commence."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6v12M20 6v12" />
                </svg>
              }
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <ServiceCard 
              title="Les Titans"
              description="Héros masqués, brutes épaisses et voltigeurs fous. Un casting explosif prêt à tout pour la victoire."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <ServiceCard 
              title="Le Show"
              description="Sonorisation lourde, fumigènes, light-show. Une ambiance de stade livrée directement chez vous."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              }
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};