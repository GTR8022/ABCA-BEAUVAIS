import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  // Trigger glitch on mount (initial load)
  useEffect(() => {
    setGlitchActive(true);
    const timer = setTimeout(() => setGlitchActive(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setGlitchActive(true);
    // Reset after animation duration
    setTimeout(() => setGlitchActive(false), 800);
  };

  return (
    <header 
      id="accueil" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-default"
      onMouseEnter={handleMouseEnter}
    >
      {/* Background with Ken Burns Effect containing Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full animate-ken-burns">
            {/* Vidéo en arrière-plan (Fichier Local MP4) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                // Poster optionnel pour le chargement
                className={`w-full h-full object-cover opacity-60 grayscale contrast-125 transition-all duration-100 ${glitchActive ? 'animate-glitch-snap' : ''}`}
            >
                <source src="/videos/hero-catch.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
            </video>

            {/* Overlay Gradient pour la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-abca-dark/60 via-abca-dark/40 to-abca-dark"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        <ScrollReveal>
          
          {/* Logo Container - Static (No animation) */}
          <div className="w-full max-w-[500px]">
            <Logo className="w-full h-auto" />
          </div>

          <div className="mt-8 md:mt-16 relative z-20">
            <p className="font-header text-2xl md:text-4xl text-gray-200 uppercase tracking-wide mb-12 shadow-black drop-shadow-md">
              Le Catch de <span className="text-abca-gold font-bold">Tradition</span>
            </p>
            
            {/* BOUTON STYLE 'VINTAGE NEON' */}
            <a 
              href="#contact" 
              className="relative inline-block group"
              aria-label="Réserver un gala de catch"
            >
              {/* 1. L'ombre solide (Effet Imprimerie/Vintage) */}
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-black skew-x-[-12deg] border border-gray-800"></span>
              
              {/* 2. Le bouton principal (Fond Rouge + Bordure Or) */}
              <span className="absolute inset-0 w-full h-full bg-abca-red border-2 border-abca-gold skew-x-[-12deg] transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:bg-red-700 group-hover:shadow-[0_0_35px_rgba(255,204,0,0.6)]"></span>
              
              {/* 3. Le contenu (Texte + Icone) */}
              <span className="relative flex items-center justify-center px-10 py-5 md:px-14 md:py-6">
                 <span className="font-header font-bold text-white uppercase tracking-[0.2em] text-lg md:text-2xl group-hover:text-white transition-colors duration-300 drop-shadow-md">
                    Réserver un Gala
                 </span>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 ml-4 text-abca-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </span>
            </a>

          </div>
        </ScrollReveal>
      </div>
    </header>
  );
};