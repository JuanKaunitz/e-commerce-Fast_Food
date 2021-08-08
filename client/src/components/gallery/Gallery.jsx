import React from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='Grid-Categorias' >
            <div className='Grid-Item' >
                <Link to='/categories'>
                    <img alt='Burguers' src="https://www.infobae.com/new-resizer/1YkLtqEyhWFdpQ9XjJVCUrBgrm0=/1200x900/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' >
                    <img alt='sandwiches' src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/R/Rellenos-para-sandwiches-2.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' >
                    <img alt='Drinks' src="https://thefoodtech.com/wp-content/uploads/2020/06/bebidas-gaseosas1.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' >
                    <img alt='Combos' src="https://somosjujuy-wordpress.s3.amazonaws.com/wp-content/uploads/2020/12/05095927/pizzas-y-empanadas.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' >
                    <img alt='Sider' src="http://www.pasionesargentinas.es/images/noticias/1528117251guarniciones.jpg"  />
                </Link>
            </div>
        </div>
    )
}

export default Gallery
