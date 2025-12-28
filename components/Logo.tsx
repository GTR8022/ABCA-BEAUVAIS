import React from 'react';

/**
 * ABCA Official Logo (Vectorized)
 * Logo vectoriel SVG haute qualité aux couleurs de l'association.
 * Rouge: #D80000 | Or: #FFD700 | Noir: #050505
 */
export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 200 120" 
        className="w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(216,0,0,0.5)]"
        aria-label="ABCA Beauvais Logo"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FDB931" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Forme de fond style "Badge de Catch" (Optionnel, ici centré sur le texte) */}
        
        {/* Texte Principal ABCA */}
        <text 
          x="100" 
          y="75" 
          textAnchor="middle" 
          fontFamily="'Oswald', sans-serif" 
          fontWeight="700" 
          fontSize="80"
          fill="#D80000"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          style={{ letterSpacing: '4px' }}
        >
          ABCA
        </text>

        {/* Sous-titre BEAUVAIS */}
        <path id="curve" d="M 20,95 Q 100,115 180,95" fill="transparent" />
        <text width="200">
          <textPath 
            href="#curve" 
            startOffset="50%" 
            textAnchor="middle"
            fontFamily="'Roboto', sans-serif" 
            fontWeight="900" 
            fontSize="24"
            fill="#FFD700"
            style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            Beauvais
          </textPath>
        </text>
        
        {/* Étoiles décoratives */}
        <polygon points="100,15 104,27 117,27 107,35 111,47 100,39 89,47 93,35 83,27 96,27" fill="url(#goldGradient)" filter="url(#glow)" />
      </svg>
    </div>
  );
};