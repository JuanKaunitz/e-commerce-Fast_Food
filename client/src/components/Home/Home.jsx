import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import "./Home.css";
import Footer from "../Footer/Footer";
import GridCardsProducts from "../cards/CardsProducts";
import { getAllProducts, updateCart, totalProductosCarrito } from "../../Redux/actions/actions";
import Gallery from "../gallery/Gallery";
import Order from "../order/Order";
import Otters from "../Otters/Otters";
import { sumaCantidadTotal } from "../cart/utilsCarts";


function Home() {
  const dispatch = useDispatch();
  // const stateGlobal = useSelector((state) => state.getProducts);
  //localStorage.removeItem("order");
  useEffect(() => {
    dispatch(getAllProducts());
    const cart = JSON.parse(localStorage.getItem('order'));
    if(cart === null){
      dispatch(totalProductosCarrito(0));
    }else{
      const cantidadTotal = sumaCantidadTotal(cart);
      dispatch(updateCart(cart));
      dispatch(totalProductosCarrito(cantidadTotal));
    }
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
}
export default Home;
