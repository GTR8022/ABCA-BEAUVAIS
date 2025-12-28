import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
  {
    city: "Crèvecœur-le-Grand",
    role: "Comité des Fêtes",
    text: "Une organisation carrée du début à la fin. Le gymnase était plein à craquer, une ambiance familiale incroyable. On les reprend l'année prochaine !",
    blason: "https://images.unsplash.com/photo-1596726591024-81d0be64069c?auto=format&fit=crop&q=80&w=100&h=100" // Placeholder for coat of arms
  },
  {
    city: "Bresles",
    role: "Mairie",
    text: "L'ABCA gère tout : la sécurité autour du ring, le son, les lumières. Pour la municipalité, c'est zéro stress. Un vrai spectacle professionnel.",
    blason: "https://images.unsplash.com/photo-1596726591024-81d0be64069c?auto=format&fit=crop&q=80&w=100&h=100" 
  },
  {
    city: "Noailles",
    role: "Organisateur",
    text: "Cela faisait 20 ans qu'on n'avait pas vu de catch chez nous. Les anciens étaient ravis, les jeunes émerveillés. Merci pour cette nostalgie.",
    blason: "https://images.unsplash.com/photo-1596726591024-81d0be64069c?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-abca-dark relative">
      {/* Decorative Separator Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-abca-gray"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-header text-3xl md:text-5xl font-bold uppercase text-white mb-2">
              Ils nous ont fait <span className="text-abca-gold">Confiance</span>
            </h2>
            <p className="text-gray-400">La parole aux maires et organisateurs de l'Oise</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-neutral-900 border border-neutral-800 p-8 relative rounded-sm hover:border-abca-red transition-colors duration-300 group">
                {/* Quote Icon */}
                <div className="absolute top-4 right-6 text-6xl text-neutral-800 font-header leading-none group-hover:text-neutral-700 transition-colors">"</div>
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 grayscale opacity-70">
                        <img src={item.blason} alt={`Blason ${item.city}`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-header text-xl font-bold text-white uppercase">{item.city}</h4>
                        <span className="text-xs font-bold bg-abca-blue text-white px-2 py-0.5 rounded-sm">{item.role}</span>
                    </div>
                </div>

                <p className="text-gray-300 italic relative z-10 leading-relaxed">
                  {item.text}
                </p>
                
                <div className="mt-4 flex text-abca-gold">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};