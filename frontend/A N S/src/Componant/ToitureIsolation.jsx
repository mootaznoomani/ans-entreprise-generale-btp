import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/toiture.jpg";
import { useNavigate } from "react-router-dom";

const ToitureIsolation = () => {
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
          alt="toiture isolation"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          Pour une enveloppe de bâtiment pérenne et performante, économe en
          énergie et correspondant à vos goûts.
        </p>
        <p className="text-lg mb-6">
          Spécialiste en couverture & isolation, nous vous proposons nos
          services pour tous vos revêtement de toiture, protection thermique,
          coupe-feu et acoustique par projection de laine de roche, mortier
          ignifuge ou plâtre acoustique.
        </p>
        <p className="text-lg mb-6">
          Isolation de la toiture en Seine-et-Marne.
        </p>
        <p className="text-lg mb-6">
          30% des déperditions de chaleur passent par la toiture dans une maison
          ayant une mauvaise isolation !
        </p>
        <p className="text-lg mb-6">
          Une maison bien isolée est une maison qui se conserve mieux, plus
          agréable et confortable. Les techniques et les matériaux que l’on peut
          rencontrer varient selon les attentes, type de charpente et votre
          budget.
        </p>
        <p className="text-lg mb-6">
          L’entreprise ANS est à votre disposition pour vous conseiller et
          surtout faire le bon choix d’un isolant adéquat. L’isolation des
          combles perdus, des combles habités ou aménageables et l’isolation de
          la toiture.
        </p>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ AMÉLIORER VOTRE TOITURE OU ISOLATION ?
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

export default ToitureIsolation;
