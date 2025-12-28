import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { History } from './components/History';
import { Timeline } from './components/Timeline';
import { VintageGallery } from './components/VintageGallery';
import { RegionalMap } from './components/RegionalMap';
import { School } from './components/School';
import { President } from './components/President';
import { AudioPlayer } from './components/AudioPlayer';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { SocialWall } from './components/SocialWall';
import { Contact } from './components/Contact';
import { QuickNav } from './components/QuickNav';

const Home: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden min-h-screen relative">
      {/* Global Grain/Noise Overlay for Vintage Effect */}
      <div className="noise-overlay"></div>

      <Navbar />
      <QuickNav />
      
      <Header />
      <History />
      <Timeline />
      <VintageGallery />
      <School />
      <RegionalMap />
      <President />
      <Services />
      <Testimonials />
      {/* Legends section removed as requested */}
      <AudioPlayer />
      <FAQ />
      <SocialWall />
      <Contact />
      
    </main>
  );
};

export default Home;