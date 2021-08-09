import React from 'react';
import './Home.css'
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';
import Gallery from '../gallery/Gallery';
import Order from '../order/Order';

function Home() {
    return (
        <div className='content'>
            <Gallery/>  
            <Order/>           
            <GridCardsProducts/>
            <Footer/>           
        </div>
    )
}
export default Home; 