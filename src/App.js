import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos';
import Competance from './pages/Competance';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dazy" element={<Home/>} />

      <Route path="/dazy/apropos" element={<Apropos/>} />

      <Route path="/dazy/commencer" element={<Apropos/>} />

      <Route path="/dazy/competance" element={<Competance/>} />


      <Route path="/dazy/contact" element={<Contact/>} />

      

      {/*path="*" functionne si jamais l'url ne correspond à rien de déclaré au dessus*/}
      <Route path="*" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;