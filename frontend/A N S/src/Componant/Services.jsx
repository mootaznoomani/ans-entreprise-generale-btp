import React from 'react';
import Elect from '../Assets/elect.png';
import Lampe from '../Assets/lampe.png';
import Chaffage from '../Assets/chauffage.png';
import Mac from '../Assets/mac.png';
import Toiture from '../Assets/toiture.png';
import Menuisierie from '../Assets/menuisierie.png';
import Revetement from '../Assets/revetement.png';
import Keye from '../Assets/key.png';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Electrisité",
      description: 'Disposer d’un système électrique aux normes en vigueur. La conformité est essentielle à la sécurité !',
      image: Elect,
    },
    {
      id: 2,
      title: 'DOMOTIQUE',
      description: 'Piloter sa maison ou son bâtiment à distance pour réaliser des économies d’énergie… Maison intelligente pour un confort moderne !',
      image: Lampe,
    },
    {
      id: 3,
      title: 'PLOMBERIE / CHAUFFAGE',
      description: 'Une gestion thermique moderne permet d’associer confort, fiabilité, écologie et économie. Nous installons et maintenons vos équipements pour un confort prolongé.',
      image: Chaffage,
    },
    {
      id: 4,
      title: 'MAÇONNERIE',
      description: 'Indispensable à la construction et à la rénovation de tout ouvrage, les travaux de maçonnerie nécessitent un savoir-faire technique maîtrisé et recouvrent un large panel de de spécificités.',
      image: Mac,
    },
    {
      id: 5,
      title: 'TOITURE / ISOLATION',
      description: 'Disposer d’un couverture et d’une isolation de qualité et aux normes permet de générer de réels économies.',
      image: Toiture,
    },
    {
      id: 6,
      title: 'AMÉNAGEMENT D’INTÉRIEUR',
      description: 'Notre bureau d’étude répond à tout type de projet en vous apportant des conseils, idées et solutions pratiques, fonctionnelles et esthétiques en accord avec vos goûts, besoins et votre budget.',
      image: Keye,
    },
    {
      id: 7,
      title: 'MENUISERIE',
      description: 'Création, fabrication et installation sur mesure par un artisan menuisier : cuisine, salle de bain, dressing, parquet, fenêtre, clôture motorisée…',
      image: Menuisierie,
    },
    {
      id: 8,
      title: 'REVÊTEMENT',
      description: 'Carrelage, carreaux de ciment, pierre, peinture, béton cire, faïence …Nos équipes rénovent votre réseau de véhicules de qualité. ',
      image: Revetement,
    },
  ];

  return (
    <div className="bg-[#BAAE98] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-3xl font-bold text-[#333333] relative inline-block">
            Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 bg-[#333333]"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#BAAE98] hover:bg-[#3b3127] rounded-lg p-4 transition-all duration-300 flex flex-col justify-between text-center"
            >
              <div className="flex flex-col items-center">
                <img src={service.image} alt={service.title} className="object-cover rounded-lg h-20 w-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              </div>
              <p className="text-sm text-white">{service.description}</p>
              <p className="text-sm text-white">En savoir +</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
