import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/menuiserie.jpg";
import { useNavigate } from "react-router-dom";

const Menuiserie = () => {
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
          alt="menuiserie"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold mb-4">Menuiserie intérieure :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Escaliers</li>
          <li>Portes</li>
          <li>Cuisines (meubles haut, bas, plans de travail)</li>
          <li>Salle de bain (meubles vasques, meubles hauts, miroirs)</li>
          <li>Bibliothèques</li>
          <li>Meubles de rangement</li>
          <li>Meubles TV</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Menuiserie extérieure :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Fenetres / Chassis : Alu, Bois-Alu, Bois, Coulissant, PVC</li>
          <li>Porte de garage</li>
          <li>Portes sectionnelles – Portail et porte d’entrée</li>
          <li>Volets</li>
          <li>Protection solaire</li>
          <li>Balustrade et garde-corps</li>
        </ul>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ ENTREPRENDRE DES TRAVAUX DE MENUISERIE ?
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

export default Menuiserie;
