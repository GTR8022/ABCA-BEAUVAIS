import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'histoire', label: 'Histoire' },
  { id: 'chronologie', label: 'Frise' },
  { id: 'ecole', label: 'L\'École' },
  { id: 'carte', label: 'Carte' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Réserver / Devis', isCta: true },
];

export const QuickNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide Back to Top
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sections prioritaires pour le menu mobile
  const mobileShortcuts = [
    { id: 'contact', label: 'Devis Gratuit', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'services', label: 'Nos Services', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'carte', label: 'Zone d\'Action', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  ];

  return (
    <>
      {/* ----------------- DESKTOP & TABLET SIDEBAR ----------------- */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[60] hidden md:flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Navigation Dots Container - Now compact */}
        <div className="flex flex-col gap-4 items-center bg-abca-dark/80 p-3 rounded-full border border-white/20 backdrop-blur-sm shadow-2xl pointer-events-auto w-10">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex items-center justify-center w-4 h-4"
              aria-label={`Aller à la section ${section.label}`}
            >
              {/* Floating Label (Absolute to not affect width) */}
              <span 
                  className={`absolute right-full mr-4 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded text-xs font-header font-bold uppercase tracking-wider transition-all duration-300 transform 
                  ${activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'} 
                  ${section.isCta ? 'text-abca-red' : ''}`}
              >
                {section.label}
              </span>

              {/* Dot */}
              <div 
                  className={`transition-all duration-300 border-2 rounded-full
                  ${section.isCta 
                      ? 'w-3 h-3 bg-abca-red border-abca-red animate-pulse' 
                      : `w-2 h-2 ${activeSection === section.id ? 'bg-abca-gold border-abca-gold scale-125' : 'bg-transparent border-gray-400 group-hover:border-white group-hover:bg-white'}`
                  }`}
              ></div>
            </a>
          ))}
        </div>

        {/* Back To Top Desktop */}
        <button
          onClick={scrollToTop}
          className={`pointer-events-auto mt-2 w-10 h-10 bg-neutral-800 border border-neutral-600 text-white flex items-center justify-center rounded-full hover:bg-abca-red hover:border-abca-red transition-all duration-300 shadow-lg ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Retour en haut de page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* ----------------- MOBILE FLOATING CONTROLS ----------------- */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none">
        
        {/* Container for buttons */}
        <div className="relative w-full h-full p-5 flex justify-between items-end">
            
            {/* LEFT: Call Button (Always Visible) */}
            <a 
                href="tel:0695060968" 
                className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-abca-red text-white rounded-full shadow-[0_4px_15px_rgba(230,0,0,0.6)] border-2 border-white animate-pulse-slow active:scale-95 transition-transform"
                aria-label="Appeler maintenant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>

            {/* RIGHT: Speed Dial Navigation */}
            <div className="flex flex-col items-end gap-4 pointer-events-auto">
                
                {/* Menu Items (Reveal on Toggle) */}
                <div className={`flex flex-col items-end gap-4 mb-2 transition-all duration-300 origin-bottom ${mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
                    
                    {/* Top Button */}
                     <div className="flex items-center gap-3">
                        <span className="bg-black/80 text-white px-2 py-1 rounded text-xs font-header font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">Haut de page</span>
                        <button 
                            onClick={scrollToTop}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 border border-neutral-600 text-white shadow-lg active:bg-neutral-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                     </div>

                    {/* Section Shortcuts */}
                    {mobileShortcuts.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                            <span 
                                className={`px-2 py-1 rounded text-xs font-header font-bold uppercase tracking-wider shadow-md backdrop-blur-sm
                                ${item.id === 'contact' ? 'bg-abca-gold text-black' : 'bg-black/80 text-white'}`}
                            >
                                {item.label}
                            </span>
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center justify-center w-10 h-10 rounded-full border shadow-lg active:scale-95 transition-all flex-shrink-0
                                    ${item.id === 'contact' 
                                        ? 'bg-abca-gold text-black border-white' 
                                        : 'bg-neutral-800 text-white border-neutral-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Main Toggle Button */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-2 transition-all duration-300 z-50
                        ${mobileMenuOpen ? 'bg-white text-black border-abca-gold rotate-90' : 'bg-neutral-900 text-white border-neutral-600 rotate-0'}`}
                    aria-label="Menu de navigation rapide"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

        </div>
      </div>
    </>
  );
};