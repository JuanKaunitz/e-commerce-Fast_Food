import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Footer from "../Footer/Footer";
import GridCardsProducts from "../cards/CardsProducts";
import { getAllProducts } from "../../Redux/actions/actions";
import Gallery from "../gallery/Gallery";
import Order from "../order/Order";
import Otters from "../Otters/Otters";


function Home() {
  const dispatch = useDispatch();
  const stateGlobal = useSelector((state) => state.getProducts);

<<<<<<< HEAD
    useEffect(() => {    
        dispatch(getAllProducts())  
    }, [dispatch, stateGlobal])
    return (
        <div className='content'>
            <Gallery/>  
            <Order/>           
            <GridCardsProducts/>
            <Footer/> 
               
        </div>
    )
=======
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="content">
      <Gallery />
      <Otters />
      <Order />
      <GridCardsProducts />
      <Footer />
    </div>
  );
>>>>>>> 27b7bb5ea818b16126c87f5fb1cfbdbd8c178d96
}
export default Home;
