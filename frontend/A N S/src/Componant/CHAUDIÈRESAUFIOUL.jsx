import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import BoilerImg1 from "../Assets/d1.jpg";
import BoilerImg2 from "../Assets/d2.jpg";
import BoilerImg3 from "../Assets/d3.jpg";
import BoilerImg4 from "../Assets/d3.jpg";

const CHAUDIÈRESAUFIOUL = () => {
  return (
    <div className="bg-[#00c9d6]">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-start">
          <h1 className="text-3xl font-bold mb-4">
            CHAUDIÈRES AU FIOUL : BIENTÔT BONNES POUR LA CASSE ?
          </h1>
          <p className="text-lg mb-8">
            Trop polluant, trop cher, le chauffage au fioul tire ses derniers
            feux. Le gouvernement, en la personne de Barbara Pompili, a annoncé
            la fin de la commercialisation des chaudières au fioul à l’été 2022.
            S’il est toujours possible de réparer les modèles installés, les
            propriétaires vont devoir opter pour des alternatives à l’énergie
            fossile. Un sujet qui fait débat dans les zones rurales où les
            réseaux de gaz manquent parfois. Nos professionnels vous
            conseillent.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">La chaudière à bois ou granulés</p>
          <img
            src={BoilerImg1}
            alt="La chaudière à bois ou granulés"
            className=" mb-4 rounded-lg shadow-lg"
          />
          <p>
            Le bois demeure aujourd’hui l’énergie la moins coûteuse. Par
            ailleurs, la recherche d’une indépendance énergétique plaide en sa
            faveur. Deux arguments convaincants, soutenus par une combustion
            rapide permettant d’obtenir une température élevée dans les pièces à
            chauffer avec un bilan carbone remarquable. Il est possible de
            chauffer une surface de 150 m² avec une chaudière à bois associée à
            un système de ventilation qui permet de diffuser la chaleur dans
            toutes les pièces. Le stockage du bois pour alimenter la chaudière
            représente son principal inconvénient. Cela demande de la place et
            de la manipulation. Ceux qui redoutent les salissures causées par la
            suie peuvent se tranquilliser. Dorénavant les chaudières à bois
            dites « propres » sont équipées d’une double arrivée d’air fixée en
            haut du poêle. L’air amené par cette conduite est préchauffé et va
            permettre de brûler 90 % des impuretés rejetées dans le conduit de
            cheminée. Sur le plan esthétique, beaucoup de constructeurs
            proposent de fabriquer des modèles sur-mesure et capables de se
            marier parfaitement avec votre intérieur. Le coût estimé pour une
            chaudière à bois varie de 6 000 à 20 000 € et, pour une chaudière à
            granulés de 7 000 à 18 000 €.
          </p>
          <img
            src={BoilerImg2}
            alt="La pompe à chaleur air/eau"
            className=" mb-4 rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">La pompe à chaleur air/eau</p>

          <p>
            C’est aujourd’hui le moyen de chauffage préféré des Français.
            Employant les calories présentes dans l’air ou l’eau extérieur pour
            chauffer votre intérieur en hiver ou le rafraîchir en été, cette
            alternative à l’énergie fossile fonctionne à l’électricité. La PAC
            ne nécessite pas d’espace de stockage pour le fioul, le bois ou le
            propane et peut suffire à chauffer et produire l’eau chaude d’une
            maison. La pompe à chaleur possède de nombreux atouts pour les
            propriétaires qui veulent un moyen de chauffage à la fois
            économique, efficace et propre. Votre facture peut être divisée par
            trois ou quatre, compte tenu qu’avec 1kWh d’électricité, la PAC
            fournit 3 à 4 kWh de chaleur. Pratiquement, une pompe à chaleur peut
            se raccorder à un plancher chauffant ou une installation existante
            et ne nécessite pas de conduit d’évacuation pour les fumées. De plus
            les modèles réversibles pourront rafraîchir les pièces au cours des
            mois les plus chauds de l’année. Ses détracteurs argueront que ce
            moyen de chauffage aux nombreux avantages a un point faible. La PAC
            consomme davantage d’électricité pour réchauffer l’air quand les
            températures sont en dessous de 7 °C et doit parfois être complétée
            par un chauffage d’appoint en hiver. Vous pouvez bénéficier des
            aides financières Ma PrimRenov’ pour adopter ce dispositif si votre
            résidence a plus de deux ans et que vous choisissez un professionnel
            RGE pour son installation.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">La pompe à chaleur géothermique</p>

          <p>
            Elle est en quelque sorte la réponse au point faible de la PAC
            air/eau, puisqu’elle va récupérer les calories sous terre via un
            forage pour produire de la chaleur. Comme la température varie entre
            12 et 14° de façon constante sous terre, cette chaudière
            fonctionnant à l’électricité consomme moins de courant en hiver pour
            réchauffer l’air qu’elle redistribue qu’une PAC traditionnelle. Son
            installation est assez onéreuse et nécessite un forage dont la
            profondeur peut aller jusqu’à 200 m.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">
            La chaudière dite à très haute performance énergétique (THPE)
          </p>
          <img
            src={BoilerImg4}
            alt="La chaudière à très haute performance énergétique (THPE)"
            className=" mb-4 rounded-lg shadow-lg"
          />
          <p>
            Désigne un appareil doté d’une efficacité énergétique au moins égale
            à 92 %. Elle fonctionne comme une chaudière gaz à condensation en
            préchauffant l’eau grâce à la récupération de la vapeur d’eau
            rejetée lors de la combustion du gaz. Ce type de chaudière THPE
            transforme donc des calories habituellement perdues en chaleur utile
            et permettrait de réaliser jusqu’à 70 % d’économies par rapport au
            fioul.
          </p>
        </div>

        <div className="mb-8">
          <p>
            Pour toutes ces alternatives à la chaudière au fioul, des primes
            financières sont allouées et conditionnées à vos revenus. Enfin 50 %
            des départements français offrent des programmes d’amélioration de
            l’habitat et subventionnent les travaux de rénovation entamés par
            les particuliers. Ces subventions s’ajoutent aux aides de l’État.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CHAUDIÈRESAUFIOUL;
