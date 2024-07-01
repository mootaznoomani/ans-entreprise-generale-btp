import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import Img1 from "../Assets/image1.jpg";
import Img2 from "../Assets/image2.jpg";
import Img3 from "../Assets/image3.jpeg";
import Img4 from "../Assets/image4.jpg";
function Caro() {
  return (
    <div className="bg-[#BAAE98]">
      <Carousel slide={false}>
        <Carousel.Item>
          <ExampleCarouselImage text={Img1} />
          <Carousel.Caption>
            <h1 className=" font-bold">
              Rénovation <br></br> intérieur & extérieure
            </h1>
            <p className=" font-bold ">
              {" "}
              - rénovation appartement, maison, salle de bain, cuisine
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text={Img2} />
          <Carousel.Caption>
            <h1 className=" font-bold">
              Construction , extension <br></br> surélevation maison
            </h1>
            <p className=" font-bold">
              - agrandissement de maison aménagement de combles ,<br></br>
              construction garage
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text={Img3} />
          <Carousel.Caption>
            <h1 className=" font-bold">
              Rénovation énergétique , extension <br></br> surélevation maison
            </h1>
            <p className=" font-bold">
              - isolation thermique, phonique, comblesn toiture <br></br> et
              chauffage{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text={Img4} />
          <Carousel.Caption>
            <h1 className=" font-bold">
              Bureau <br></br> d'études
            </h1>
            <p className=" font-bold">
              - architecte d'itérieur, décoration, meubles sur mesure{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caro;
