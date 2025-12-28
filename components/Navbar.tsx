import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Histoire', href: '#histoire' },
    { name: 'L\'École', href: '#ecole' }, // Requires ID in School component
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-abca-dark/95 shadow-lg border-b border-white/10 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`} role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Brand Name (Visible only on scroll or small screens if logo is hidden) */}
        <a href="#" className={`font-header font-bold text-2xl uppercase tracking-wider text-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} aria-label="Retour à l'accueil ABCA Beauvais">
          ABCA <span className="text-abca-red">Beauvais</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-header text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-abca-gold transition-colors relative group focus:text-abca-gold focus:outline-none"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-abca-red transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b-2 border-abca-red overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-header text-xl font-bold uppercase text-white hover:text-abca-red py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};