import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ConcreteImg1 from "../Assets/c1.jpg";
import ConcreteImg2 from "../Assets/c2.jpg";
import ConcreteImg3 from "../Assets/c3.jpg";
import ConcreteImg4 from "../Assets/c4.jpg";

const ConcreteAdvantages = () => {
  return (
    <div className="bg-[#00c9d6] ">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-start">
          <h1 className="text-3xl font-bold mb-4">
            LE BÉTON CIRÉ : AVANTAGES ET INCONVÉNIENTS
          </h1>
          <p className="text-lg mb-8">
            Qui aurait imaginé que nous nous serions entichés du béton ? Gris,
            froid, moche, voilà comment il était perçu. Et comme par magie,
            depuis qu’il n’est plus réservé à la construction des murs, il est
            devenu le matériau chic, ultra-tendance et très décoratif. Il se
            pare de toutes les nuances pour devenir un revêtement terriblement
            sensuel à l’oeil et au toucher. Sol, murs, mobilier, dehors ou
            dedans la matière grise transmutée est partout.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">Cinquante nuances et effets…</p>
          <img
            src={ConcreteImg1}
            alt="Cinquante nuances et effets…"
            className=" mb-4 rounded-lg shadow-lg"
          />
          <p>
            Il faut dire que l’on est bien loin du brut de décoffrage. Pour le
            grand bonheur des particuliers et des professionnels de l’agencement
            et de la décoration, il se décline en une infinie palette de couleur
            et joue les effets spéciaux. Certains fabricants n’hésitent pas à
            incruster des feuilles de métal oxydé pour obtenir des tons dorés ou
            cuivrés et même des strass… Enfin, les textures imitent les glacis
            ou le cuir, au gré de l’imagination des créateurs qui n’en finissent
            pas d’exploiter toutes ses possibilités de la seconde matière la
            plus employée par l’homme après l’eau pour son habitat.
          </p>
        </div>

        <div className="mb-8">
          <img
            src={ConcreteImg2}
            alt="Du loft à la maison de campagne"
            className=" mb-4 rounded-lg shadow-lg"
          />

          <p>
            Le béton ciré a fait son apparition, inspirée par l’engouement pour
            les lofts, les riads et autres fincas. Le sol en béton est plus
            simple à entretenir qu’un parquet ou un carrelage. Il imprime une
            note zen, épurée et élégante aux surfaces qu’il revêt. La solidité
            du béton ciré rassure les utilisateurs. Il se marie aussi bien avec
            un mobilier aux influences ethniques, que des meubles rustiques ou
            un salon contemporain. Il modernise une montée d’escalier, rénove au
            goût du jour une salle de bain, met en valeur une terrasse ou les
            abords de votre piscine.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">Si pratique et si facile d’entretien</p>
          <img
            src={ConcreteImg3}
            alt="Béton ciré et béton ciré fibré coulé"
            className=" mb-4 rounded-lg shadow-lg"
          />

          <p>
            Design et pratique, le béton ciré transforme l’allure d’une pièce
            sans avoir à entreprendre des travaux de gros œuvre dans le cadre
            d’un chantier de rénovation. Vous pouvez le couler directement sur
            la surface existante. Autre atout, l’absence de joint agrandit
            visuellement la pièce. Son étanchéité convient parfaitement pour les
            sols des cuisines, salles de bains ou terrasses. Il ne craint pas
            les tâches et s’entretient aisément avec de l’eau et un produit
            nettoyant classique. De plus, sa teinte ne s’altère pas avec le
            temps et sa surface se détériore difficilement. Sur les murs, il est
            tout aussi pratique d’emploi. Le béton ciré peut se poser sur une
            ancienne peinture, un papier peint ou un carrelage aux joints
            jaunis.
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 font-bold">Béton ciré et béton ciré fibré coulé</p>
          <p>
            Le béton ciré ressemble de près à du plâtre. Il peut se poser sur
            les murs, les sols et même pour finir le bassin d’une piscine. On
            l’applique en couche de 2 à 6 mm d’épaisseur. La recette de base
            demeure inchangée. Seules sont modifiées les résines ajoutées pour
            le durcir. Le béton fibré coulé, nommé Ductal®, est un mélange
            ultra-fin qui peut s’appliquer sur des supports aussi variés qu’un
            plan de travail, des étagères, des jardinières ou une vasque de
            salle de bain. Sa composition permet une application parfaite sur
            des supports plans ou des moules pour reproduire une matière ou une
            forme. Il se moule aussi bien à l’horizontale qu’à la verticale.
            Francesco Passaniti fut le premier à travailler le béton fibré coulé
            et à exploiter toutes ses perspectives.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Inconvénients du béton ciré
          </h2>
          <img
            src={ConcreteImg4}
            alt="Béton ciré et béton ciré fibré coulé"
            className=" mb-4 rounded-lg shadow-lg"
          />

          <p>
            Difficile de trouver des points négatifs à ce matériau
            extraordinaire pour la maison. Pour réussir sa pose, il est tout de
            même préférable de demander l’aide d’un professionnel. Une surface
            doit être faite d’un seul tenant. Deux à trois couches sont parfois
            nécessaires pour rattraper une surface. Enfin, les formes arrondies
            et différences de niveau réclament un vrai coup de main qui
            s’acquiert avec le savoir-faire. Pour éviter un raté, demandez
            conseil à un professionnel de la rénovation. Il saura vous
            conseiller sur le support et sa finition pour réussir le relooking
            de votre pièce.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConcreteAdvantages;
