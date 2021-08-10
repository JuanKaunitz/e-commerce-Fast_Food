import React from 'react';
import './Home.css'
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';
import Gallery from '../gallery/Gallery';
import Order from '../order/Order';
import Otters from '../Otters/Otters';


function Home() {
    return (
        <div className='content'>
            <Gallery/>  
            <Order/>           
            <GridCardsProducts/>
            <Otters/>  
            <Footer/>          
        </div>
    )
}
export default Home; 