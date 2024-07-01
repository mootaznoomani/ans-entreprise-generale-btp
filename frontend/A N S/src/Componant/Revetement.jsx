import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/revetement.jpg";
import { useNavigate } from "react-router-dom";

const Revetement = () => {
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
          alt="revetement"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold mb-4">
          Revêtement intérieur et extérieur :
        </h2>
        <p className="text-lg mb-6">
          Peinture : Transformez votre espace avec notre expertise en peinture
          intérieure et extérieure, adaptée à vos besoins et préférences
          esthétiques.
        </p>
        <p className="text-lg mb-6">
          Pose de carrelage, sol et faïence : Offrez une nouvelle vie à vos sols
          et murs avec nos services de pose de carrelage et de faïence, pour un
          rendu durable et élégant.
        </p>
        <p className="text-lg mb-6">
          Carreaux de ciment : Optez pour l'authenticité avec nos carreaux de
          ciment, apportant caractère et style à votre intérieur.
        </p>
        <p className="text-lg mb-6">
          Pierre : La beauté naturelle de la pierre pour vos revêtements
          intérieurs et extérieurs, ajoutant une touche d'élégance et de
          robustesse.
        </p>
        <p className="text-lg mb-6">
          Béton ciré : Modernisez votre espace avec le béton ciré, offrant un
          revêtement unique et contemporain, idéal pour une esthétique
          industrielle ou minimaliste.
        </p>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          REVÊTEZ VOTRE ESPACE AVEC ANS !
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

export default Revetement;
