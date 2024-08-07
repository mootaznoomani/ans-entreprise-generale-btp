import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Propimg3 from "../Assets/pro3.jpg";
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7c73d97a-77c4-4285-8e99-561b29a20e91");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Show a success message or alert
      alert("Formulaire soumis avec succès !");
      // Reset form fields if needed
      form.current.reset();
    } else {
      alert("L'envoi du formulaire a échoué.");
    }
  };

  return (
    <div className="bg-[#00c9d6]">
      <Nav />
      <div className="overflow-hidden w-full h-full">
        <img
          src={Propimg3}
          alt="Propimg3"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form
              ref={form}
              onSubmit={onSubmit}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="nom"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="prenom"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="telephone"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="sujet"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="adresse"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Adresse de chantier
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="information"
                  className="block text-[#3b3127] text-lg font-semibold mb-2"
                >
                  Indiquez toute autre information pour nous permettre de bien
                  comprendre vos besoins et vous proposer un devis et un service
                  adapté.
                </label>
                <textarea
                  id="information"
                  name="information"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3b3127]"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#3b3127] text-white py-2 px-6 rounded-lg hover:bg-[#baae98] transition-colors duration-300"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-start items-start mt-4  md:items-start text-start md:text-left">
            <h2 className="text-4xl font-bold text-[#3b3127] mb-4">Contact</h2>
            <p className="text-lg text-[#3b3127] mb-4">
              Pour toute demande d'information, n'hésitez pas à nous contacter
              via le formulaire ou les différents moyens de contact mis à votre
              disposition ci-dessous. Nous vous répondrons dans les plus brefs
              délais.
            </p>
            <div className=" flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#3b3127] text-2xl"
              />
              <p className="text-lg mt-3 text-[#3b3127]">0614521836</p>
            </div>
            <div className=" flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#3b3127] text-2xl"
              />
              <p className="text-lg text-[#3b3127] mt-3">
                16 rue Édouard Vaillant 93170 Bagnolet
              </p>
            </div>
            <div className=" flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[#3b3127]  text-2xl"
              />
              <p className="text-lg mt-3 text-[#3b3127]">
                Lun - Ven : 08:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
