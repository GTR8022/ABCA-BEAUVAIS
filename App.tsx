import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { MentionsLegales } from './components/MentionsLegales';
import { PolitiqueConfidentialite } from './components/PolitiqueConfidentialite';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
    </Router>
  );
};

export default App;