import React from 'react';
import Nav from './Nav';
import Propimg from '../Assets/propos.jpg';
import Propimg1 from '../Assets/propos1.jpg';
import Footer from './Footer';
const services = [
  'Tous corps d’état',
  'Gros oeuvre / Second oeuvre',
  'Travaux de rénovation',
  'Travaux intérieur / extérieur',
  'Rénovation maison',
  'Rénovation cuisine',
  'Architecture intérieure / décoration Devis rapide',
  'Artisan qualifié',
  'Électricité',
  'Plomberie',
  'Chauffage / Climatisation',
  'Maçonnerie / Couverture',
  'Domotique',
  'Fenêtre',
  'Portails / clôture',
  'Carrelage / Faïence / Revêtement de sol',
  'Peinture / Isolation / Carrelage',
  'Menuiserie / serrurerie',
  'Aménagement intérieur / extérieur',
];
function Propos() {
  return (
    <div>
      <Nav />
      <div className="overflow-hidden w-full h-full">
        <img src={Propimg} alt="Propos" className="w-full h-full object-cover object-center transform md:scale-100 scale-125" />
      </div>
      <div className="bg-[#BAAE98] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start justify-start">
          <img src={Propimg1} alt="Renovation" className="object-cover w-full h-full md:h-auto rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-[#333333]">SPÉCIALISTES DE LA RÉNOVATION</h2>
          <p className="mb-4 text-[#333333]">
            A.N.S est une entreprise générale de bâtiment – Tous corps d’état spécialisée dans les travaux de rénovation intérieure & extérieure / Gros oeuvre & Second oeuvre. 
            Nous mettons notre savoir-faire et nos compétences au service de tous vos projets de rénovation, aménagement, transformation, construction de votre habitat ou de vos locaux professionnels en Seine-et-Marne (île-de-France). 
            Un projet de rénovation ? Construction ? Remplacement ? Maintenance ou un simple dépannage ? Fort de nos 30 années d’expérience et de savoir-faire, l’organisation notre société permet de faire face aux contraintes techniques et fonctionnelles 
            des métiers de la rénovation afin de répondre au mieux à tous vos besoins.
          </p>
          <p className="mb-4 text-[#333333]">
            Notre mission est de contribuer à l’amélioration de vos espaces de vie par la création d’un environnement sécurisé, chaleureux et confortable. 
            Nos équipes qualifiés, ont à coeur de réaliser tous les chantiers conformément aux normes en vigueur.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-[#333333]">Vous souhaitez une rénovation adaptée & clés en main ? A.N.S vous accompagne dans toutes les étapes de votre projet, de la conception à la réalisation:</h3>
          <ul className="list-disc pl-5 space-y-1 text-[#333333]">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-[#BAAE98] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#333333]">SHARE YOUR PASSION</h2>
          <div className='w-full flex justify-center items-center'>
            <p className="mb-8 text-[#333333] w-4/6 ">
            Fort de nos années d’expérience, l’organisation de notre société permet de répondre aux contraintes techniques et fonctionnelles des métiers de la rénovation.
          </p></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#BAAE98] border-4 border-white text-2xl font-bold text-white mb-2">
                30%
              </div>
              <p className="text-white">Conception</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#BAAE98] border-4 border-white text-2xl font-bold text-white mb-2">
                15%
              </div>
              <p className="text-white">Planification</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#BAAE98] border-4 border-white text-2xl font-bold text-white mb-2">
                40%
              </div>
              <p className="text-white">Réalisation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#BAAE98] border-4 border-white text-2xl font-bold text-white mb-2">
                15%
              </div>
              <p className="text-white">Livraison</p>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default Propos;
