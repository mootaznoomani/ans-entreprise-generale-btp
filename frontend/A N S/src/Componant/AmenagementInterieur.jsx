import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/amenagement.jpg";
import { useNavigate } from "react-router-dom";

const AmenagementInterieur = () => {
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
          alt="amenagement interieur"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          ANS travaille en collaboration avec l’agence Caroline VITTE
          spécialisée en architecture d’intérieur et décoration.
        </p>
        <p className="text-lg mb-6">
          À l’écoute de vos envies, nous répondons à tout type de projet en vous
          apportant des conseils, des idées et des solutions pratiques,
          fonctionnelles et esthétiques en accord avec vos goûts, vos besoins et
          votre budget.
        </p>
        <p className="text-lg mb-6">
          Nous valoriserons ensemble vos lieux d’habitation ou vos espaces
          professionnels. Le but ultime étant d’associer création, planification
          et gestion qui sont au centre de la démarche, tout en prenant en
          compte des critères fonctionnels, sécuritaires, économiques, sociaux,
          culturels et environnementaux.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Aménagement</li>
          <li>Agencement</li>
          <li>Décoration</li>
          <li>Cuisine</li>
          <li>Salle de bain</li>
          <li>Dressing</li>
          <li>Architecture paysagère</li>
        </ul>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ AMÉNAGER VOTRE INTÉRIEUR ?
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

export default AmenagementInterieur;
