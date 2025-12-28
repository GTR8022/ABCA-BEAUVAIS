import React, { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface Legend {
  id: number;
  name: string;
  image: string;
  bio: string;
  stats: { str: number; spd: number; tec: number }; // Added stats for game feel
}

const legendsData: Legend[] = [
  {
    id: 1,
    name: "Le Boucher",
    image: "https://picsum.photos/id/1062/400/500",
    bio: "Une force de la nature qui a terrifié les rings de Picardie pendant 20 ans. Connu pour sa prise de finition 'Le Hachoir', il reste invaincu à domicile.",
    stats: { str: 95, spd: 40, tec: 70 }
  },
  {
    id: 2,
    name: "L'Ange Blanc",
    image: "https://picsum.photos/id/1025/400/500",
    bio: "Symbole de pureté et de technique. L'Ange Blanc volait littéralement sur le ring, apportant espoir et spectacle aérien à une époque de brutes.",
    stats: { str: 60, spd: 98, tec: 90 }
  },
  {
    id: 3,
    name: "La Tigresse",
    image: "https://picsum.photos/id/338/400/500",
    bio: "Pionnière du catch féminin dans la région. Rapide, féroce et imprévisible, elle a ouvert la voie à toute une génération de combattantes.",
    stats: { str: 75, spd: 90, tec: 85 }
  },
  {
    id: 4,
    name: "Titan",
    image: "https://picsum.photos/id/1005/400/500",
    bio: "2 mètres, 130 kilos. Titan n'avait pas besoin de technique, sa présence suffisait. Une véritable montagne humaine qui a marqué l'histoire du club.",
    stats: { str: 99, spd: 20, tec: 50 }
  }
];

export const Legends: React.FC = () => {
  const [selectedLegend, setSelectedLegend] = useState<Legend | null>(null);

  return (
    <section id="legendes" className="py-24 bg-black relative border-t-8 border-abca-gold">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stripes-red opacity-10 pointer-events-none skew-x-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-white pb-4">
            <h2 className="font-header text-6xl md:text-8xl font-bold uppercase text-white italic leading-none">
              Hall of <br/><span className="text-abca-gold text-outline-gold">Fame</span>
            </h2>
            <div className="text-right pb-2 hidden md:block">
                <span className="bg-abca-red text-white font-bold px-4 py-1 text-xl uppercase skew-x-[-12deg] inline-block">Select Your Fighter</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {legendsData.map((legend, index) => (
            <ScrollReveal key={legend.id} delay={index * 100}>
              <div 
                onClick={() => setSelectedLegend(legend)}
                className="group relative h-[450px] cursor-pointer overflow-hidden border-4 border-neutral-800 hover:border-white transition-all duration-100 bg-neutral-900"
              >
                {/* Image */}
                <img 
                    src={legend.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 contrast-125"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Name Tag (Fighting Game Style) */}
                <div className="absolute bottom-12 left-0 w-full transform -skew-x-12 bg-abca-red translate-x-[-100%] group-hover:translate-x-[-5%] transition-transform duration-200 py-2 px-6 border-t-2 border-b-2 border-white">
                    <h3 className="font-header text-2xl text-white uppercase font-bold italic transform skew-x-12">{legend.name}</h3>
                </div>

                {/* "P1" Indicator */}
                <div className="absolute top-4 left-4 bg-abca-gold text-black font-bold px-2 py-1 uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    1P
                </div>

                {/* Stats Preview (Hover) */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100 bg-black/90">
                    <div>PWR: <span className="text-abca-red">{'|'.repeat(legend.stats.str / 10)}</span></div>
                    <div>SPD: <span className="text-abca-gold">{'|'.repeat(legend.stats.spd / 10)}</span></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal Style Arcade */}
      {selectedLegend && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" 
            onClick={() => setSelectedLegend(null)}
        >
          <div 
            className="bg-neutral-900 border-4 border-white p-0 max-w-4xl w-full relative shadow-[0_0_50px_rgba(255,0,0,0.5)] flex flex-col md:flex-row overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedLegend.image} className="w-full h-full object-cover grayscale contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900"></div>
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-stripes">
                <button 
                    onClick={() => setSelectedLegend(null)}
                    className="absolute top-4 right-4 text-white hover:text-abca-red font-header text-4xl"
                >
                    &times;
                </button>

                <h2 className="font-header text-5xl md:text-6xl text-white uppercase italic mb-2 text-outline-red tracking-widest">{selectedLegend.name}</h2>
                <div className="w-24 h-2 bg-abca-gold mb-6 skew-x-[-20deg]"></div>
                
                <p className="text-gray-200 text-lg md:text-xl font-bold leading-relaxed mb-8 uppercase">
                    {selectedLegend.bio}
                </p>

                {/* Stats Bars */}
                <div className="space-y-3 font-header text-white uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                        <span className="w-12 text-right text-abca-red">STR</span>
                        <div className="flex-grow h-4 bg-gray-800 border border-gray-600 skew-x-[-12deg]">
                            <div className="h-full bg-abca-red" style={{width: `${selectedLegend.stats.str}%`}}></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-12 text-right text-abca-gold">SPD</span>
                        <div className="flex-grow h-4 bg-gray-800 border border-gray-600 skew-x-[-12deg]">
                            <div className="h-full bg-abca-gold" style={{width: `${selectedLegend.stats.spd}%`}}></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-12 text-right text-blue-500">TEC</span>
                        <div className="flex-grow h-4 bg-gray-800 border border-gray-600 skew-x-[-12deg]">
                            <div className="h-full bg-blue-500" style={{width: `${selectedLegend.stats.tec}%`}}></div>
                        </div>
                    </div>
                </div>

                <button className="mt-8 bg-white text-black font-header font-bold text-xl py-3 px-8 uppercase hover:bg-abca-red hover:text-white transition-colors skew-x-[-12deg] self-start border-2 border-black">
                    <span className="skew-x-[12deg] block">Voir Matchs</span>
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};