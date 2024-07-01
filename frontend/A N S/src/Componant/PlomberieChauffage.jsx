import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/plomberie_chauffage.jpg";
import { useNavigate } from "react-router-dom";

const PlomberieChauffage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-[#00c9d6]">
      <Nav />
      <div className="overflow-hidden w-full h-full">
        <img
          src={Propimg1}
          alt="plomberie chauffage"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          Nous sommes à votre service pour toutes vos installations de
          chauffage. En effet, la mise en service est une étape importante lors
          de la pose, notamment pour l’installation de chaudières et de pompes à
          chaleur. Nous pouvons également réaliser l’entretien et le dépannage
          de votre installation.
        </p>
        <p className="text-lg mb-6">
          Faire appel à nos techniques en matière de plomberie, vous assurera
          une intervention efficace et un service de qualité. Nous rénovons vos
          plomberie sur Paris et la région parisienne.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Remplacement chaudière – Réseau neuf ou ancien</li>
          <li>Climatisation</li>
          <li>Plancher chauffant</li>
          <li>Maintenance / dépannage / urgence</li>
        </ul>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ ENTREPRENDRE DES TRAVAUX DE PLOMBERIE / CHAUFFAGE ?
        </h2>
        <button
          onClick={handleContactClick}
          className="bg-[#6dd7de] text-black px-6 py-3 font-semibold rounded-lg border-2 border-[#6dd7de] transition-colors duration-300 hover:bg-[#62bec5] hover:text-white hover:border-[#333333]"
        >
          CONTACTEZ-NOUS
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PlomberieChauffage;
