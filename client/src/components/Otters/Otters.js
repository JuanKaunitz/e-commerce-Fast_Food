import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "./styles.css"
import i6 from "../../assets/i6.png"
import i7 from "../../assets/i7.png"

const Otters =() =>{
    return (
        <div>
        <Carousel className="carousel" autoPlay="true"  showIndicators="false" showArrows="false" infiniteLoop="true" interval="5000" className="carousel3">
             <div className="carousel1"><img  className="carousel"src={i6}/></div>
            <div className="carousel1"><img className="carousel" src={i7} /></div>
        </Carousel>
        </div>
    )
}

export default Otters;