import React from "react";
import Nav from "./Nav";
import Caro from "./Caro";
import Services from "./Services";
import Article from "./Article";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      <Nav />
      <Caro />
      <div className="bg-[#00c9d6] w-full flex justify-center items-center h-40">
        <div className="max-w-lg mx-3 text-center">
          <button
            className="bg-[#00c9d6] text-[#f2f2f7] px-4 py-3 md:px-3 md:py-4 font-semibold rounded-lg border-2 border-[#c7d5eb] transition-colors duration-300 hover:bg-[#6bc2c9] hover:text-white hover:border-[#6dd7de] w-full md:w-auto md:mx-2"
            onClick={handleNavigateToContact}
          >
            Vous souhaitez entreprendre des travaux de rénovation ?
          </button>
        </div>
      </div>
      <Services />
      <Article />
      <Footer />
    </div>
  );
}

export default Accueil;
