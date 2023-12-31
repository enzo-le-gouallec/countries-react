import React from 'react';
import { BrowserRoute, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de déclaré au desus */}
        <Route path='/*' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
