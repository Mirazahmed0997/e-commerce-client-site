import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ProductDetailsCarusel = () => {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Slide 1" />
          </Slide>
          <Slide index={1}>
            <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
          </Slide>
          <Slide index={2}>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  };
  export default ProductDetailsCarusel;