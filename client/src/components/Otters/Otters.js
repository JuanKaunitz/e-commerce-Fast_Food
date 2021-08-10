import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import images from "./images"
import styles from "./styles.css"

const Otters =() =>{
    return (
        
        <div className={styles.carousel}>   
            {images.map(imagen =>{
                return (
                    <img className={styles.legend} src={imagen.images} alt={imagen.images} />

                )
            })

            }
        </div>
    )
}

export default Otters;