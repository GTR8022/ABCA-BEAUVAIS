import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const School: React.FC = () => {
    return (
        <section id="ecole" className="py-20 bg-neutral-900 border-y border-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <ScrollReveal>
                            <div className="relative">
                                <div className="absolute inset-0 border-2 border-abca-red transform translate-x-4 translate-y-4"></div>
                                <img
                                    src="/images/ecole.jpg"
                                    alt="Entraînement École de Catch ABCA"
                                    className="relative w-full h-auto contrast-125 shadow-2xl border border-neutral-700 hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-0 left-0 bg-abca-red text-white font-header font-bold px-4 py-2 uppercase tracking-wider">
                                    Une Tradition d'Excellence
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <ScrollReveal delay={200}>
                            <h2 className="font-header text-3xl md:text-5xl font-bold uppercase text-white mb-6">
                                L'Héritage de <span className="text-abca-red">l'École</span>
                            </h2>
                            <h3 className="text-xl text-gray-400 font-bold mb-6 uppercase tracking-wide">
                                Depuis 1956
                            </h3>

                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                Pendant près de sept décennies, l'ABCA a été le coeur battant du catch en France. Notre structure a vu passer des centaines d'athlètes, forgeant des corps et des esprits sous la bannière du respect et de la discipline.
                            </p>

                            <p className="text-gray-300 text-lg mb-6 leading-relaxed italic border-l-4 border-abca-gold pl-6">
                                "L'ABCA perpétue son savoir-faire. Nous concentrons désormais notre énergie sur notre troupe d'élite et la production de spectacles, garantissant un niveau de performance exceptionnel à chaque représentation."
                            </p>

                            <p className="text-gray-400 text-base mb-8">
                                L'association continue de faire vivre ce patrimoine culturel unique à travers ses entraînements et ses galas de catch professionnels reconnus dans toute la région.
                            </p>

                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};