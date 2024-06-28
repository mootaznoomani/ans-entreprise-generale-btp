import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Componant/Accueil";
import Propos from "./Componant/Propos";
import Service from "./Componant/Service";
import Contact from "./Componant/Contact";
import Realisation from "./Componant/Realisation";

const App = () => {
  return (
    <Router>
      <div className="bg-[#baae98]">
        
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisation" element={<Realisation />} />
        </Routes>

        
      </div>
    </Router>
  );
};

export default App;
