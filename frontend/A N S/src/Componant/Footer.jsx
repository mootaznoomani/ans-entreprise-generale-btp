import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Propimg2 from "../Assets/logo.jpg";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#36a4ac] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center space-x-4">
          <img src={Propimg2} alt="ANS Logo" className="h-full w-28" onClick={()=>{navigate('/')}} />
          <p className="text-sm">
            ANS, Entreprise générale de bâtiment Tous corps d'état réalise tous
            types de travaux de rénovation, construction et transformation dans
            votre habitat personnel ou professionnel.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-end md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col space-y-2">
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Adresse: 16 rue Édouard vaillant
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              Mobile: 0614521836
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Lun - Ven : 08:00 - 19:00
            </p>
          </div>
          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl text-white hover:text-gray-600"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-white hover:text-gray-600"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ANS. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
