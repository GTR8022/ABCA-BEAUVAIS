import React from 'react';

/**
 * ABCA Official Logo
 * Utilise une image générique de blason/sport pour la démo de déploiement.
 */
export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center logo-shadow ${className}`}>
      {/* Utilisation d'un logo style "Blason" fiable pour le déploiement */}
      <img 
        src="https://images.unsplash.com/photo-1568322678665-6df3d1326442?auto=format&fit=crop&q=80&w=500&h=500" 
        alt="ABCA Beauvais Logo"
        className="w-full h-full object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
};