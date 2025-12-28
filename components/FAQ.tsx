import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const faqData = [
    {
        question: "De quelle surface avez-vous besoin ?",
        answer: "Il nous faut idéalement une surface plane de 6m x 6m pour le ring, plus un périmètre de sécurité de 2m tout autour. Une hauteur sous plafond de 4m est recommandée pour les voltigeurs."
    },
    {
        question: "Fournissez-vous la sonorisation ?",
        answer: "Oui, nous sommes autonomes. Nous venons avec notre sonorisation et nos jeux de lumières adaptés aux salles polyvalentes et gymnases."
    },
    {
        question: "Combien de temps dure le spectacle ?",
        answer: "Un gala standard dure environ 2h30 avec un entracte de 15 minutes. Cela comprend généralement 5 à 6 combats."
    },
    {
        question: "Faut-il une assurance spéciale ?",
        answer: "L'ABCA possède sa propre assurance pour ses athlètes et son matériel. L'organisateur doit simplement assurer le lieu et le public (Responsabilité Civile Organisateur classique)."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-neutral-900 border-t border-neutral-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal>
                    <h2 className="font-header text-3xl font-bold uppercase text-white mb-8 text-center">
                        Questions <span className="text-abca-red">Techniques</span>
                    </h2>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border border-neutral-700 bg-abca-dark rounded-sm overflow-hidden">
                                <button 
                                    onClick={() => toggleIndex(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    className="w-full text-left p-4 md:p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors focus:outline-none focus:bg-neutral-800"
                                >
                                    <span className="font-header text-lg md:text-xl text-gray-200 uppercase tracking-wide">
                                        {item.question}
                                    </span>
                                    <span className={`text-abca-gold text-2xl font-bold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} aria-hidden="true">
                                        V
                                    </span>
                                </button>
                                <div 
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 md:p-6 pt-0 text-gray-400 border-t border-neutral-800 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};