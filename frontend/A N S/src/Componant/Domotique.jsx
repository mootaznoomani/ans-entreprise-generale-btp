import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/domotique.jpg";
import { useNavigate } from "react-router-dom";

const Domotique = () => {
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
          alt="domotique"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          PILOTER LES INSTALLATIONS DE VOTRE MAISON VOUS AIDERA À FAIRE DES
          ÉCONOMIES TOUT EN PRÉSERVANT LA PLANÈTE. Le but : faciliter notre
          quotidien !
        </p>
        <p className="text-lg mb-6">
          La domotique, c’est la combinaison de l’informatique et des
          télécommunications au service de la maison et de l’environnement. De
          manière très concrète, la domotique permet d’optimiser la consommation
          de chauffage et d’électricité grâce à une interface connectée.
        </p>
        <p className="text-lg mb-6">
          Mais ce n’est pas tout, elle peut aussi remplir d’autres
          caractéristiques bénéfiques pour votre confort comme l’automatisation
          de votre portail ou de vos volets électriques.
        </p>
        <p className="text-lg mb-6">
          Enfin, la domotique agit aussi sur la sécurité : elle peut, par
          exemple, déclencher l’alarme en cas d’intrusion ou encore simuler
          votre présence, pour éventuellement décourager des cambrioleurs de
          voler un logis inhabité, (en allumant la lumière et en ouvrant les
          volets) lors de vos vacances d’été.
        </p>
        <p className="text-lg mb-6">
          De plus, des aides financières ont été mises en place pour alléger
          l’investissement des particuliers dans des travaux visant à limiter
          les dépenses énergétiques. Découvrez comment utiliser la domotique
          pour économiser l’énergie et votre argent !
        </p>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ INTÉGRER LA DOMOTIQUE DANS VOTRE HABITATION ?
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

export default Domotique;
