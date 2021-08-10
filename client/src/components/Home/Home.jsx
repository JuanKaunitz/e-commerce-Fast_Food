import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import './Home.css'
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';
import {getAllProducts} from '../../Redux/actions/actions';


import Gallery from '../gallery/Gallery';
import Order from '../order/Order';

function Home() {
  const dispatch = useDispatch();
  const stateGlobal = useSelector((state) => state.allProducts);

    useEffect(() => {
        if(!stateGlobal) {
            dispatch(getAllProducts()) 
        } 
        //eslint-disable-next-line react-hooks/exhaustive-deps         
    },[dispatch])
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