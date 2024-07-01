import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Elect from "../Assets/1.jpg";
import Domotique from "../Assets/2.jpg";
import chauffage from "../Assets/3.jpg";
import Couverture from "../Assets/4.jpg";
import Maçonnerie from "../Assets/5.jpg";
import Menuiserie from "../Assets/6.jpg";
import Aménagement from "../Assets/7.jpg";
import Sol from "../Assets/8.jpg";
import Propimg1 from "../Assets/pro1.jpg";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Electricité",
    description:
      "Disposer d’un système électrique aux normes en vigueur. La conformité est essentielle à la sécurité !",
    image: Elect,
    path: "electricite" 
  },
  {
    id: 2,
    title: "Domotique",
    description:
      "Piloter sa maison ou son bâtiment à distance pour réaliser des économies d’énergie… Maison intelligente pour un confort moderne !",
    image: Domotique,
    path: "domotique" 
  },
  {
    id: 3,
    title: "Plomberie & chauffage",
    description:
      "Une gestion thermique moderne permet d’associer confort, fiabilité, écologie et économie. Nous installons et maintenons vos équipements pour un confort prolongé.",
    image: chauffage,
    path: "PlomberieChauffage" 
  },
  {
    id: 4,
    title: "Couverture / isolation",
    description:
      "Disposer d’un couverture et d’une isolation de qualité et aux normes permet de générer de réels économies.",
    image: Couverture,
    path: "ToitureIsolation" 
  },
  {
    id: 5,
    title: "Maçonnerie paysagère",
    description:
      "Indispensable à la construction et à la rénovation de tout ouvrage, les travaux de maçonnerie nécessitent un savoir-faire technique maîtrisé et recouvrent un large panel de de spécificités.",
    image: Maçonnerie,
    path: "Maconnerie" 
  },
  {
    id: 6,
    title: "Menuiserie",
    description:
      "Création, fabrication et installation sur mesure par un artisan menuisier : cuisine, salle de bain, dressing, parquet, fenêtre, clôture motorisée…",
    image: Menuiserie,
    path: "menuiserie" 
  },
  {
    id: 7,
    title: "Aménagement d'intérieur",
    description:
      "À l’écoute de vos envies, nous répondons à tout type de projet en vous apportant des conseils, idées et solutions pratiques, fonctionnelles et esthétiques en accord avec vos goûts, besoins et budget.",
    image: Aménagement,
    path: "AmenagementInterieur" 
  },
  {
    id: 8,
    title: "Sol / mur",
    description:
      "Carrelage, carreaux de ciment, pierre, peinture, béton ciré, faïence…Nos équipes rénovent votre intérieur avec des matériaux de qualité.",
    image: Sol,
    path: "Revetement" 
  },
];

const Service = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="bg-[#00c9d6]">
      <Nav />
      <div className="overflow-hidden w-full h-full">
        <img
          src={Propimg1}
          alt="Propimg1"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-7xl my-4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm w-4/6 mx-1  text-start mb-8">
            Notre équipe pluridisciplinaire allant du bureau d’étude à la
            réalisation d’ouvrage, permet d’intervenir et de répondre dans sa
            globalité à toutes vos demandes de travaux de rénovation ou de
            construction. Nos prestations haut de gamme et la diversité de nos
            chantiers, nous confèrent un savoir faire unique et un rendu final
            de bonne qualité.<br></br> <br></br> De l’élaboration à
            l’accomplissement de vos projets, nos professionnels constitués
            d’architectes, bureaux d’études et décorateurs vous accompagnent et
            restent à votre disponibilité pour étudier, conseiller et réaliser
            tous vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#00c9d6] rounded-lg p-4 relative overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover rounded-lg h-52 w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-10">
                {service.description}
              </p>
              <p
                className="absolute bottom-0 m-2 left-3  bg-[#369aa2] text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#538c8f]"
                onClick={() => handleNavigate(service.path)} // Navigate to service.path on click
              >
                En savoir plus
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
