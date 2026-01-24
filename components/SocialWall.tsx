import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SocialWall: React.FC = () => {
  React.useEffect(() => {
    // Parse XFBML when component mounts/updates to render the plugin
    // if the SDK is already loaded.
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-20 bg-abca-gray border-y border-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-header text-3xl md:text-4xl font-bold uppercase mb-8">
            Suivez l'Actualité <span className="text-abca-gold">En Direct</span>
          </h2>

          <div className="w-full flex justify-center">
            {/* 
              Container responsive pour le plugin Facebook
            */}
            <div
              className="fb-page bg-white rounded-sm shadow-[0_0_20px_rgba(20,20,255,0.4)] w-full md:max-w-[500px]"
              data-href="https://www.facebook.com/ABCAcatch/"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/ABCAcatch/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/ABCAcatch/">ABCA Beauvais</a>
              </blockquote>
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            Rejoignez notre communauté sur les réseaux sociaux pour ne manquer aucun événement dans l'Oise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};