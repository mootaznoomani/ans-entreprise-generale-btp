import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/maconnerie.jpg";
import { useNavigate } from "react-router-dom";

const Maconnerie = () => {
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
          alt="maconnerie"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          La maçonnerie est la base de votre habitation. C’est le garant d’un
          logement sain et sécurisé. Nous réalisons des travaux de rénovation en
          matière de façade ou de peinture intérieure, extérieur sur Paris et la
          région parisienne. Que ce soit pour une restauration, une création de
          cloison, création de faux plafond, chape, pose de carrelage, pose de
          pierres, ANS s’occupe de la maçonnerie et de la rénovation de votre
          habitation.
        </p>
        <p className="text-lg mb-6">
          Les travaux de maçonnerie intérieure et maçonnerie extérieure font
          appel à des connaissances techniques non négligeables. Ainsi, savoir
          réaliser une terrasse maçonnée, monter un mur en parpaings, construire
          un barbecue en béton ou tout simplement couler une chape en béton pour
          votre terrasse font partie des travaux courants en maçonnerie.
        </p>
        <p className="text-lg mb-6">
          Alors pourquoi ne pas faire confiance à des professionnels ?
        </p>
        <p className="text-lg mb-6">
          Nos compétences en maçonnerie extérieure sont : pose de carrelage
          mural, pose de dalles de carrelage au sol, traiter l’humidité dans les
          maçonneries, appliquer les différents enduits en béton, jointoyer les
          murs, traiter afin de raviver la pierre de taille, réparer au ciment
          des bordures de jardin, réaliser un béton ciré chic et tendance.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Terrasse tout type de revêtements – Couverture (zinc et tuile)
          </li>
          <li>Charpente bois</li>
          <li>Agrandissement</li>
          <li>Dallage et pavé</li>
          <li>Ravalement</li>
        </ul>
        <p className="text-lg mb-6">
          La maçonnerie paysagère est la réalisation de tout type d’ouvrage
          maçonné extérieur qui s’intègre dans la conception de votre jardin et
          s’harmonise avec les « ensembles végétaux » à réaliser ou existants.
          Conception et réalisation de murets en pierre naturelle, en passant
          par du pavage : pavage de cour, allées… Mais également, dallage, pose
          de bordures diverses, escaliers et terrasses.
        </p>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ ENTREPRENDRE DES TRAVAUX DE MAÇONNERIE ?
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

export default Maconnerie;
