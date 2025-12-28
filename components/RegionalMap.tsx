import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import L from 'leaflet';

// Coordonnées des villes d'intervention
const cities = [
    { name: "Beauvais (Siège)", coords: [49.4295, 2.0814], type: "hq" },
    { name: "Méru", coords: [49.2369, 2.1360], type: "event" },
    { name: "Crépy-en-Valois", coords: [49.2333, 2.8833], type: "event" },
    { name: "Clermont", coords: [49.3792, 2.4161], type: "event" },
    { name: "Compiègne", coords: [49.4179, 2.8261], type: "event" },
    { name: "Noyon", coords: [49.5800, 3.0000], type: "event" },
    { name: "Senlis", coords: [49.2065, 2.5847], type: "event" },
    { name: "Chantilly", coords: [49.1932, 2.4632], type: "event" },
    { name: "Bresles", coords: [49.4093, 2.2513], type: "event" },
];

export const RegionalMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
        // Init Map centered on Oise department
        const map = L.map(mapContainerRef.current, {
            center: [49.35, 2.5], 
            zoom: 9,
            scrollWheelZoom: false, // Disable scroll zoom for better page UX
            attributionControl: false
        });

        // Dark Theme Tiles (CartoDB Dark Matter)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            subdomains: 'abcd',
        }).addTo(map);

        // Custom Icons
        const hqIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #FFCC00; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #000; box-shadow: 0 0 10px #FFCC00; display: flex; align-items: center; justify-content: center;"><span style="color: black; font-weight: bold; font-size: 10px;">★</span></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const eventIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #E60000; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #000; box-shadow: 0 0 8px #E60000;"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
        });

        // Add Markers
        cities.forEach(city => {
            const marker = L.marker(city.coords as [number, number], {
                icon: city.type === 'hq' ? hqIcon : eventIcon
            }).addTo(map);

            marker.bindPopup(`
                <div style="text-align: center;">
                    <strong style="text-transform: uppercase; color: ${city.type === 'hq' ? '#FFCC00' : '#E60000'}; letter-spacing: 1px;">${city.name}</strong>
                </div>
            `);
            
            if (city.type === 'hq') {
                marker.openPopup();
            }
        });

        mapInstanceRef.current = map;
    }

    return () => {
        // Cleanup if necessary (React StrictMode might trigger double init without ref check)
        if (mapInstanceRef.current) {
             // We keep the instance alive for performance in this specific SPA context, 
             // or destroy it if component unmounts for good.
             // mapInstanceRef.current.remove(); 
             // mapInstanceRef.current = null;
        }
    };
  }, []);

  return (
    <section id="carte" className="py-20 bg-abca-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-12 h-full">
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <ScrollReveal>
                    <h2 className="font-header text-3xl md:text-5xl font-bold uppercase text-white mb-6">
                        Proche de <span className="text-abca-blue">Chez Vous</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        L'ABCA rayonne dans tout le département de l'Oise et la région Picardie. Nous connaissons le terrain, les salles polyvalentes et les attentes du public local.
                    </p>
                    <ul className="space-y-3 mb-8 text-gray-400">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-abca-red rounded-full mr-3"></span>
                            Déplacement avec camion technique
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-abca-red rounded-full mr-3"></span>
                            Installation autonome (2h)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-abca-red rounded-full mr-3"></span>
                            Respect des horaires et des lieux
                        </li>
                    </ul>
                    
                    <div className="p-4 bg-neutral-900 border-l-4 border-abca-gold">
                        <p className="font-header text-white uppercase font-bold text-xl">Notre Rayonnement</p>
                        <p className="text-sm text-gray-500 mt-1">
                            De la cathédrale de Beauvais aux petites salles communales du Vexin, le catch est chez lui partout.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="w-full md:w-1/2 min-h-[400px]">
                <ScrollReveal delay={200}>
                    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] bg-neutral-800 rounded-sm border-2 border-neutral-700 shadow-2xl overflow-hidden group">
                        
                        {/* Map Container */}
                        <div ref={mapContainerRef} className="w-full h-full absolute inset-0 z-10" style={{ minHeight: '400px' }}></div>
                        
                        {/* Overlay Decorative Elements */}
                        <div className="absolute top-4 right-4 z-20 bg-abca-dark/90 p-3 border border-neutral-600 backdrop-blur-sm shadow-lg max-w-[150px]">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-3 h-3 bg-abca-gold rounded-full border border-black shadow-[0_0_5px_#FFCC00]"></span>
                                <span className="text-xs text-white font-bold uppercase">Siège</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-abca-red rounded-full border border-black shadow-[0_0_5px_#E60000]"></span>
                                <span className="text-xs text-gray-300 font-bold uppercase">Interventions</span>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};