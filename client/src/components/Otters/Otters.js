import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";

const Otters = () => {
  return (
    <div className="container">
      <Carousel
        autoPlay="true"
        showIndicators="false"
        showArrows="false"
        infiniteLoop="true"
        interval="5000"
      >
        <div className="carousel">
          <img className="carousel1" src={i6} alt='imagen'/>
        </div>
        <div className="carousel">
          <img className="carousel1" src={i7} alt='imagen1'/>
        </div>
      </Carousel>
    </div>
  );
};

export default Otters;
