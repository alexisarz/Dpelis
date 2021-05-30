import React from 'react';
import {Carousel} from 'react-bootstrap';



import img1 from '../img/MK.jpg'
import img2 from '../img/Shingeki.jpeg'
import img3 from '../img/Jam.jpg'

const CarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="slider-image"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="slider-image-tittle"><h1>Mortal Kombat (2021)</h1></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="slider-image"
            src={img2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="slider-image-tittle">
              <h1>Attack On Titan Temporada Final</h1>
              
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="slider-image"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="slider-image-tittle"><h1>Space Jam 2</h1></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default CarouselContainer;