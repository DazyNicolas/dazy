import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Competance from "./pages/Competance";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
       <Route path="/" element={<Home />} />

        <Route path="/apropos" element={<Apropos />} />

        <Route path="/commencer" element={<Apropos />} />

        <Route path="/competance" element={<Competance />} />

        <Route path="/contact" element={<Contact />} />

        {/*path="*" functionne si jamais l'url ne correspond à rien de déclaré au dessus*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
