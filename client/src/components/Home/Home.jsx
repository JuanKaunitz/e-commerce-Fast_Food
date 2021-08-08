import React from 'react';
import './Home.css'
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';
import Gallery from '../gallery/Gallery';

function Home() {
    return (
        <div className='content'>
            <Gallery/>             
            <GridCardsProducts/>
            <Footer/>           
        </div>
    )
}
export default Home; 