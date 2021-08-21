import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Home.css";
import Footer from "../Footer/Footer";
import GridCardsProducts from "../cards/CardsProducts";
import { bandOrderUser, getAllProducts, getTypes, getUserById, orderFinal, orderRedux, updateOrderFinal} from "../../Redux/actions/actions";
import {updateCart, totalProductosCarrito} from '../../Redux/actions/actions'
import Gallery from "../gallery/Gallery";
import Order from "../order/Order";
import Otters from "../Otters/Otters";
import { mergeCart, sumaCantidadTotal } from "../cart/utilsCarts";


function Home() {
  const dispatch = useDispatch();
  const client = useSelector(state => state.client);
  const orderUser = useSelector(state => state.orderUser);
  const token = useSelector(state => state.clientToken);
  const band = useSelector(state => state.bandOrderUser);
  //localStorage.removeItem("order");

  if(orderUser && token && band){
    dispatch(bandOrderUser())
    const orderFiltrado = orderUser.filter(e => e.status === "carrito");
    console.log("orderFiltrado", orderFiltrado)
    if(orderFiltrado.length > 0){
      console.log("ENTRO ORDERGILTRADO.LENGTH")
      const carrito = orderFiltrado[0]._id;
      console.log("CARRITO", carrito);
      localStorage.setItem('idOrderUser', carrito);
    }
    const idOrder = localStorage.getItem('idOrderUser');
 
    console.log("ID ORDER", idOrder)
    let object = JSON.parse(localStorage.getItem('order'));
    console.log("CARRITO LOCALSTORAGE", object)
    console.log("CARRITO BACK", orderUser.order)
    const cart = mergeCart(object, orderUser.order);
    console.log("MERGE", cart)
    localStorage.setItem('order', JSON.stringify(cart));
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(totalProductosCarrito(cantidadTotal))

    const order = {
      id: client._id,
      token: token,
      order: cart,
      status: "carrito",
    }
    console.log("ORDER PARA ENVIAR", order)
    dispatch(orderRedux(order));
    if(idOrder){
      dispatch(updateOrderFinal(idOrder, order))
    }else{
      dispatch(orderFinal(order))
    }
  }

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getTypes())
    dispatch(getUserById(client._id))
    
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
