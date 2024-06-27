// components/ExampleCarouselImage.js
import React from 'react';
import styled from 'styled-components';

const CarouselImageContainer = styled.div`
  height: 720px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.3s ease;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 992px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 450px;
  }

  @media (max-width: 576px) {
    height: 350px;
  }
`;

const ExampleCarouselImage = ({ text }) => {
  return (
    <CarouselImageContainer>
       <img src={text} alt="" className='h-full w-full' />
    </CarouselImageContainer>
  );
};

export default ExampleCarouselImage;
