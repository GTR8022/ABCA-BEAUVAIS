import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulation d'envoi
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-abca-dark pt-20 pb-10 border-t-4 border-abca-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Colonne Gauche : Infos & Booking */}
          <div className="flex flex-col justify-between h-full">
            <ScrollReveal>
              <div>
                <h2 className="font-header text-5xl md:text-6xl font-bold uppercase text-white mb-6">
                  Organisez Votre <br />
                  <span className="text-abca-red text-outline">Gala Légendaire</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Vous êtes une mairie, un comité des fêtes ou une association ? <br/>
                  Remplissez le formulaire ci-contre pour recevoir un devis personnalisé sous 24h.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-neutral-800 p-4 rounded-full text-abca-gold group-hover:bg-abca-red group-hover:text-white transition-colors duration-300 border border-neutral-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider">Téléphone Direct</span>
                        <a href="tel:0612345678" className="text-2xl font-header font-bold tracking-wide hover:text-abca-red transition-colors">06 12 34 56 78</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-neutral-800 p-4 rounded-full text-abca-gold group-hover:bg-abca-red group-hover:text-white transition-colors duration-300 border border-neutral-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider">Email</span>
                        <a href="mailto:contact@abca-beauvais.fr" className="text-lg hover:text-abca-red transition-colors">contact@abca-beauvais.fr</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-neutral-800 p-4 rounded-full text-abca-gold group-hover:bg-abca-red group-hover:text-white transition-colors duration-300 border border-neutral-700">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                         <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider">Adresse</span>
                        <span className="text-lg">Gymnase Municipal, 60000 Beauvais</span>
                    </div>
                  </div>
                </div>

                 {/* International Booking Block moved here */}
                 <div className="bg-neutral-900 border border-neutral-700 p-6 w-full text-left relative overflow-hidden group hover:border-abca-gold transition-colors">
                    <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                    </div>
                    <h4 className="text-abca-gold font-header font-bold uppercase mb-2 text-sm tracking-widest">International Booking</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                        Promoters & Wrestlers worldwide:
                    </p>
                    <a href="mailto:booking@abca-beauvais.fr" className="text-white text-xs font-bold uppercase border-b border-white hover:text-abca-red hover:border-abca-red transition-colors">
                        Contact Foreign Affairs
                    </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="bg-neutral-900 border border-neutral-700 p-6 md:p-8 shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-abca-red via-abca-gold to-abca-red"></div>
             
             <ScrollReveal delay={200}>
                <h3 className="font-header text-2xl font-bold uppercase text-white mb-6 flex items-center">
                    <span className="w-2 h-8 bg-abca-red mr-3"></span>
                    Demande de Gala
                </h3>

                {formStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-center animate-fade-in">
                        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="text-2xl font-header font-bold text-white mb-2">Message Envoyé !</h4>
                        <p className="text-gray-400">Merci de votre intérêt. Notre équipe vous recontactera sous 24h pour finaliser votre projet.</p>
                        <button onClick={() => setFormStatus('idle')} className="mt-8 text-sm text-abca-gold hover:text-white underline">Envoyer une autre demande</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nom de l'organisateur *</label>
                                <input required type="text" placeholder="Ex: Jean Dupont" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mairie / Comité *</label>
                                <input required type="text" placeholder="Ex: Mairie de Beauvais" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email *</label>
                                <input required type="email" placeholder="contact@mairie.fr" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Téléphone *</label>
                                <input required type="tel" placeholder="06 00 00 00 00" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date Souhaitée</label>
                                <input type="date" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all text-gray-400" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ville de l'événement *</label>
                                <input required type="text" placeholder="Ex: Clermont" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nombre d'invités estimé</label>
                             <select className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all appearance-none">
                                <option>Moins de 200</option>
                                <option>200 - 500</option>
                                <option>500 - 1000</option>
                                <option>Plus de 1000</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Votre Message (Détails, questions...)</label>
                            <textarea rows={4} placeholder="Bonjour, nous souhaiterions organiser un gala pour la fête communale..." className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-abca-red focus:ring-1 focus:ring-abca-red transition-all"></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={formStatus === 'submitting'}
                            className="group relative w-full pt-2 pb-1 focus:outline-none mt-4"
                        >
                            {/* 1. Shadow/Depth Layer */}
                            <span className={`absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-black skew-x-[-6deg] border border-gray-800 ${formStatus === 'submitting' ? 'opacity-50' : ''}`}></span>
                            
                            {/* 2. Main Color Layer */}
                            <span className={`absolute inset-0 w-full h-full border-2 border-abca-gold skew-x-[-6deg] transition-all duration-200 ease-out 
                                ${formStatus === 'submitting' 
                                ? 'bg-neutral-600 border-neutral-500 cursor-not-allowed' 
                                : 'bg-abca-red group-hover:bg-red-700 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[0_0_25px_rgba(255,204,0,0.5)]'}
                            `}></span>

                            {/* 3. Text Content */}
                            <span className="relative flex justify-center items-center py-4">
                                {formStatus === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="font-header font-bold text-lg uppercase tracking-widest text-white">Envoi en cours...</span>
                                    </>
                                ) : (
                                    <span className="font-header font-bold text-xl uppercase tracking-widest text-white drop-shadow-md group-hover:text-white transition-colors">
                                        Envoyer la Demande
                                    </span>
                                )}
                            </span>
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-2">* Champs obligatoires</p>
                    </form>
                )}
             </ScrollReveal>
          </div>

        </div>

        {/* SEO / Intervention Zone */}
        <div className="border-t border-neutral-800 pt-8 pb-8">
            <h4 className="text-gray-500 font-bold uppercase text-xs mb-4 text-center tracking-widest">Zone d'intervention prioritaires</h4>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-neutral-600 text-center leading-relaxed font-header">
                <span>Beauvais</span> &bull; <span>Compiègne</span> &bull; <span>Creil</span> &bull; <span>Nogent-sur-Oise</span> &bull; <span>Senlis</span> &bull; <span>Crépy-en-Valois</span> &bull; <span>Méru</span> &bull; <span>Noyon</span> &bull; <span>Montataire</span> &bull; <span>Pont-Sainte-Maxence</span> &bull; <span>Chantilly</span> &bull; <span>Clermont</span> &bull; <span>Gouvieux</span> &bull; <span>Lamorlaye</span> &bull; <span>Chambly</span> &bull; <span>Margny-lès-Compiègne</span> &bull; <span>Liancourt</span> &bull; <span>Villers-Saint-Paul</span>
            </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ABCA Beauvais. Association Loi 1901.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};