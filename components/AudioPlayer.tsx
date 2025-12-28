import React, { useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-900 to-abca-dark border-y border-neutral-800">
        <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
                <h2 className="font-header text-3xl md:text-4xl font-bold uppercase mb-8 text-white">
                    L'Ambiance <span className="text-abca-red">Sonore</span>
                </h2>
                
                <div className="max-w-md mx-auto bg-neutral-800 p-6 rounded-lg border-2 border-abca-gold shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                    <p className="text-gray-400 mb-6 italic">Plongez dans l'atmosphère électrique d'un soir de gala</p>
                    
                    {/* Placeholder Audio - using a copyright free rock/action loop source */}
                    <audio 
                        ref={audioRef} 
                        src="https://cdn.pixabay.com/audio/2022/03/15/audio_73d226a2e2.mp3" 
                        onEnded={() => setIsPlaying(false)}
                    />
                    
                    <div className="flex items-center justify-center gap-6">
                        <button 
                            onClick={togglePlay}
                            className="w-16 h-16 flex items-center justify-center rounded-full bg-abca-red text-white hover:bg-red-700 transition-all shadow-lg hover:scale-110 focus:outline-none"
                            aria-label={isPlaying ? "Pause" : "Lecture"}
                        >
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                        </button>

                        <div className="flex flex-col w-32">
                             <label htmlFor="volume" className="text-xs text-gray-500 mb-1 text-left uppercase font-bold tracking-wider">Volume</label>
                             <input 
                                type="range" 
                                id="volume"
                                min="0" 
                                max="1" 
                                step="0.01" 
                                value={volume} 
                                onChange={handleVolumeChange}
                                className="accent-abca-gold h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                             />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  );
};