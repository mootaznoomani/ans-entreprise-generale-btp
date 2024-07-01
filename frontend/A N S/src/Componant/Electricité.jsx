import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg1 from "../Assets/electricite.jpg";
import { useNavigate } from "react-router-dom";

const Electricite = () => {
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
          alt="electricite"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-lg mb-6">
          Les installations électriques doivent répondre aux normes en vigueur.
          La sécurité de vos proches et de votre bien en dépend. L’électricité
          de votre habitation est un point capital dans vos travaux de
          rénovation. Faire des travaux d’électricité chez soi peut être
          problématique et dangereux, l’appel à des professionnels est
          obligatoire.
        </p>
        <p className="text-lg mb-6">
          30% des incendies domestiques chaque année sont d’origine électrique.
          Faites entretenir votre installation par un professionnel compétent !
          [Observatoire National de la Sécurité Électrique].
        </p>
        <p className="text-lg mb-6">
          Pour toute installation électrique de courant faible ou fort, nous
          vous assurons un travail soigné, dans le respect des normes de
          sécurité. Equipés pour faire face à toutes les demandes, nous
          intervenons aussi bien chez le particulier que le professionnel sur
          l’ensemble de la région.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Installation</li>
          <li>Dépannage & assistance</li>
          <li>Suivi & entretien</li>
          <li>Etude personnalisée de contrat d’entretien</li>
          <li>Mise aux normes</li>
          <li>Audit sur-mesure et bureau d’études</li>
        </ul>
        <p className="text-lg mb-6">
          Votre projet nécessite une étude particulière ? Notre entreprise et
          son bureau d’étude sont à même de vous apporter les solutions
          électriques adaptées en fonction des besoins de votre structure.
        </p>
        <p className="text-lg mb-6">
          ANS intervient sur tous types de projets, en basse et haute tension,
          pour des missions d’installation électrique, de maintenance ou
          d’entretien. Notre équipe formée en continu aux dernières innovations
          technologiques saura vous accompagner efficacement durant toutes les
          étapes de votre projet. Nous mettons à votre disposition écoute,
          conseils, savoir-faire et solutions à tous vos projets. Nous
          garantissons un travail soigné et de qualité.
        </p>
        <h2 className="text-2xl font-bold mb-4">Courant fort</h2>
        <p className="text-lg mb-6">
          Etudes pouvant s’effectuer du poste de livraison HTA jusqu’aux
          armoires secondaires, sécurisation de l’alimentation (onduleur, groupe
          électrogène), colonne montantes électriques de bureaux ou d’immeubles,
          etc.
        </p>
        <h2 className="text-2xl font-bold mb-4">Courant faible</h2>
        <p className="text-lg mb-6">
          Nous intervenons sur l’installation de sécurité incendie, du contrôle
          d’accès, d’anti- intrusion, de vidéosurveillance, etc.
        </p>
        <h2 className="text-2xl font-bold mb-4">Maintenance</h2>
        <p className="text-lg mb-6">
          Si vous le désirez nous pouvons vous proposer un contrat d’entretien
          pour une plus longue pérennité de vos appareils électriques.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dépannage</h2>
        <p className="text-lg mb-6">
          Dépannage aux particuliers ou aux entreprises, nous intervenons dans
          les plus brefs délais.
        </p>
        <h2 className="text-2xl font-bold mb-4">Climatisation</h2>
        <p className="text-lg mb-6">
          Installation de clim multi-split, murales, console, gainable,
          cassette. Pour plus de confort optez pour une climatisation réversible
          chaud/froid.
        </p>
        <h2 className="text-2xl font-bold mb-4">Chauffage</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Radiateurs convecteurs</li>
          <li>Chauffage Rayonnants</li>
          <li>A inertie</li>
          <li>Accumulateurs</li>
          <li>Gestionnaire d’énergie</li>
          <li>Chaudières électriques</li>
          <li>Cumulus</li>
        </ul>
        <p className="text-lg mb-6">
          Dans une habitation, la cause majeure des accidents est l’installation
          électrique. Il est obligatoire de la faire vérifier par un
          professionnel pour qu’elle soit conforme aux normes en vigueur.
        </p>
        <p className="text-lg mb-6">
          Avant de se lancer dans les travaux d’électricité, il est recommandé
          de faire réaliser un diagnostic de l’installation. Ce dernier a pour
          objectif d’identifier les travaux qui seront nécessaires pour la mise
          aux normes de l’installation.
        </p>
        <p className="text-lg mb-6">
          Le diagnostic traite les points suivants :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            La vérification de l’armoire électrique, s’il y a bien une prise de
            terre ainsi que la mise à la terre, que les dispositifs de
            protection ne sont pas défectueux
          </li>
          <li>
            La présence de la liaison équipotentielle et vérifier l’installation
            électrique de la salle de bain
          </li>
        </ul>
        <p className="text-lg mb-6">
          Le diagnostic est généralement réalisé par l’artisan ou l’entreprise
          électrique à qui vous souhaitez confier les travaux.
        </p>
        <p className="text-lg mb-6">
          Attention à la salle de bain ou à la salle d’eau ! Dans toutes les
          pièces où il y a de l’eau, l’électricité représente un réel danger. La
          sécurité et la qualité de l’installation est donc primordiale dans ces
          pièces.
        </p>
        <p className="text-lg mb-6">
          Les travaux de mise en sécurité de l’installation électrique seront
          prioritaires dans la planification des travaux.
        </p>
      </div>
      <div className="bg-[#43bcc4] text-white text-center py-10">
        <h2 className="text-xl font-bold mb-4">
          VOUS SOUHAITEZ ENTREPRENDRE DES TRAVAUX DE RÉNOVATION D’INSTALLATION
          ÉLECTRIQUE ?
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

export default Electricite;
