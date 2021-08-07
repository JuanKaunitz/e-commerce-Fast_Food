import React from 'react';
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';
import Gallery from '../gallery/Gallery';

function Home() {
    return (
        <div>
            <Gallery/>             
            <GridCardsProducts/>
            <Footer/>           
        </div>
    )
}
export default Home; 