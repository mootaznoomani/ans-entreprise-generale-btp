import React from "react";
import ArticleImage1 from "../Assets/avantage1.jpg";
import ArticleImage2 from "../Assets/avantage2.jpg";
import ArticleImage3 from "../Assets/avantage3.jpg";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title:
        "QUELS SONT LES AVANTAGES À SE TOURNER VERS UNE ENTREPRISE TOUT CORPS D’ÉTAT POUR GÉRER VOS TRAVAUX DE RÉNOVATION ?",
      content:
        "La rénovation de bâtiments peut être une tâche ardue, mais elle est essentielle pour maintenir l’intégrité de la structure et garantir que les installations [...]",
      image: ArticleImage1,
      path: "AvantagesEntreprise"
    },
    {
      id: 2,
      title: "LE BÉTON CIRÉ : AVANTAGES ET INCONVÉNIENTS",
      content:
        "Qui aurait imaginé que nous nous serions entichés du béton ? Gris, froid, moche, voilà comment il était perçu. Et comme par magie, depuis qu’il n’est plus réservé à la [...]",
      image: ArticleImage2,
      path: "beton-cire-avantages-inconvenients"
    },
    {
      id: 3,
      title: "CHAUDIÈRES AU FIOUL : BIENTÔT BONNES POUR LA CASSE ?",
      content:
        "Trop polluant, trop cher, le chauffage au fioul tire ses derniers feux. Le gouvernement, en la personne de Barbara Pompili, a annoncé la fin de la commercialisation des [...]",
      image: ArticleImage3,
      path: "CHAUDIÈRES-AU-FIOUL"
    },
  ];

  return (
    <div className="bg-[#50c4cc] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-2xl font-bold text-white relative inline-block">
            DERNIERS ARTICLES
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 bg-white"></span>
          </h2>
          <h1 className="text-6xl font-bold mt-4 mb-2 text-white">
            Retrouvez nos conseils <br></br> de pros
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#50c4cc] hover:bg-[#44acb3] rounded-lg p-4 transition-all duration-300 relative"
            >
              <img
                src={article.image}
                alt={article.title}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-base font-semibold mb-2 text-white">
                {article.title}
              </h3>
              <p className="text-sm text-slate-200">{article.content}</p>
              <Link
                to={`/${article.path}`}
                className="text-sm absolute bottom-0 left-6 text-white"
              >
                Lire la suite
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
