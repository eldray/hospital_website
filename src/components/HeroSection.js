import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import HeroImage from './images/hero.png';
import Hero2Image from './images/hero2.webp'; 
import Hero3Image from './images/hero3.avif'; 

function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={HeroImage} alt="First slide" style={{ width: '90vw', height: '70vh' }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Your trusted healthcare provider since 1998</p>
          <a href="/doctorappointment" className="btn btn-primary mt-6">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img src={Hero2Image} alt="First slide" style={{ width: '90vw', height: '70vh' }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Your trusted healthcare provider since 1998</p>
          <a href="/doctorappointment" className="btn btn-primary mt-6">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={Hero3Image} alt="First slide" style={{ width: '90vh', height: '70vh' }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Your trusted healthcare provider since 1998</p>
          <a href="/doctorappointment" className="btn btn-primary mt-6">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
