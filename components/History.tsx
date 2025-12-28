import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const History: React.FC = () => {
  return (
    <section id="histoire" className="py-20 bg-abca-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <ScrollReveal>
                <div className="relative border-4 border-abca-gold p-2 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://picsum.photos/id/40/800/600" 
                    alt="Catch vintage noir et blanc" 
                    className="w-full h-auto grayscale contrast-125"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-abca-red text-white font-header font-bold py-2 px-6 text-xl">
                    L'Esprit Old School
                  </div>
                </div>
            </ScrollReveal>
          </div>

          <div className="w-full md:w-1/2">
            <ScrollReveal delay={200}>
              <h2 className="font-header text-4xl md:text-5xl font-bold uppercase mb-6 text-white">
                Une Histoire de <span className="text-abca-gold">Famille</span>
              </h2>
              <div className="w-20 h-2 bg-abca-red mb-8"></div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                L'<strong>Association Beauvaisienne de Catch et d'Athlétisme</strong> (ABCA) n'est pas qu'un simple club, c'est une institution. Fondée au milieu du XXème siècle, notre structure perpétue l'héritage du catch français classique.
              </p>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                De père en fils, nous transmettons les secrets du ring, le respect du public et l'art du spectacle. Nous sommes l'un des plus vieux clubs de France encore en activité, fier de nos racines beauvaisiennes.
              </p>

              <blockquote className="border-l-4 border-abca-red pl-4 italic text-xl text-white font-header mt-8">
                "Nous ne vendons pas juste du sport, nous offrons des souvenirs inoubliables aux petits et grands."
              </blockquote>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};