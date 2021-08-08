import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './Gallery.css'
import { getCategories, categoryName} from '../../Redux/actions/actions';

const Gallery = () => {
    const dispatch = useDispatch();
    const categoria = useSelector((state) => state.allCategories);
    
    useEffect(() => {    
        dispatch(getCategories())    
    }, [dispatch])

    function categoryHamburguesa(){
        dispatch(categoryName('hamburguesa'))
    }

    function categorySandwich(){
        dispatch(categoryName('Sandwich'))
    }

    function categoryBebidas(){
        dispatch(categoryName('Bebidas'))
    }
    function categoryCombos(){
        dispatch(categoryName('Empanadas'))
    }

    function categoryGuarniciones(){
        dispatch(categoryName('Guarnicion'))
    }

    return (
        <div className='Grid-Categorias' >
            <div className='Grid-Item' >
                <Link to='/categories' onClick={() => categoryHamburguesa()}>
                    <img alt='Burguers' src="https://www.infobae.com/new-resizer/1YkLtqEyhWFdpQ9XjJVCUrBgrm0=/1200x900/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' onClick={() => categorySandwich()}>
                    <img alt='sandwiches' src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/R/Rellenos-para-sandwiches-2.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' onClick={() => categoryBebidas()}>
                    <img alt='Drinks' src="https://thefoodtech.com/wp-content/uploads/2020/06/bebidas-gaseosas1.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' onClick={() => categoryCombos()}>
                    <img alt='Combos' src="https://somosjujuy-wordpress.s3.amazonaws.com/wp-content/uploads/2020/12/05095927/pizzas-y-empanadas.jpg"  />
                </Link>
            </div>
            <div className='Grid-Item'>
                <Link to='/categories' onClick={() => categoryGuarniciones()}>
                    <img alt='Sider' src="http://www.pasionesargentinas.es/images/noticias/1528117251guarniciones.jpg"  />
                </Link>
            </div>
        </div>
    )
}

export default Gallery
