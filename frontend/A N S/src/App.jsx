import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Componant/Accueil";
import Propos from "./Componant/Propos";
import Service from "./Componant/Service";
import Contact from "./Componant/Contact";
import Realisation from "./Componant/Realisation";
import Electricite from "./Componant/Electricité";
import Domotique from "./Componant/Domotique";
import PlomberieChauffage from "./Componant/PlomberieChauffage";
import Maconnerie from "./Componant/Maconnerie";
import ToitureIsolation from "./Componant/ToitureIsolation";
import AmenagementInterieur from "./Componant/AmenagementInterieur";
import Menuiserie from "./Componant/Menuiserie";
import Revetement from "./Componant/Revetement";
import AvantagesEntreprise from "./Componant/Avantages Entreprise Tout Corps d'État";
import ConcreteAdvantages from "./Componant/ConcreteAdvantages";
import CHAUDIÈRESAUFIOUL from "./Componant/CHAUDIÈRESAUFIOUL"
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
          <Route path="/Electricite" element={<Electricite />} />
          <Route path="/Domotique" element={<Domotique />} />
          <Route path="/PlomberieChauffage" element={<PlomberieChauffage />} />
          <Route path="/Maconnerie" element={<Maconnerie />} />
          <Route path="/ToitureIsolation" element={<ToitureIsolation />} />
          <Route
            path="/AmenagementInterieur"
            element={<AmenagementInterieur />}
          />
          <Route path="/Menuiserie" element={<Menuiserie />} />
          <Route path="/Revetement" element={<Revetement />} />
          <Route
            path="/AvantagesEntreprise"
            element={<AvantagesEntreprise />}
          />
          <Route
            path="/beton-cire-avantages-inconvenients"
            element={<ConcreteAdvantages />}
          />
          <Route
            path="/CHAUDIÈRES-AU-FIOUL"
            element={<CHAUDIÈRESAUFIOUL />}
          />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
