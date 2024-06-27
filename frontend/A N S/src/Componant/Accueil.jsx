import React from 'react'
import Nav from './Nav';
import Caro from "./Caro";
import Services from "./Services";
import Article from "./Article"
import Footer from "./Footer"
function Accueil() {
  return (
    <div>
      <Nav />
      <Caro />
      <div class="bg-[#BAAE98] w-full flex justify-center items-center h-40">
        <div class="max-w-lg mx-3 text-center">
          <button class="bg-[#BAAE98] text-[#333333] px-4 py-3 md:px-3 md:py-4 font-semibold rounded-lg border-2 border-[#333333] transition-colors duration-300 hover:bg-[#333333] hover:text-white hover:border-[#333333] w-full md:w-auto md:mx-2">
            Vous souhaitez entreprendre des travaux de rénovation ?
          </button>
        </div>
      </div>
    <Services />
    <Article />
    <Footer/>
    </div>
  )
}

export default Accueil
