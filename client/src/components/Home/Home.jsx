import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Home.css";
import Footer from "../Footer/Footer";
import GridCardsProducts from "../cards/CardsProducts";
import { getAllProducts, updateCart, totalProductosCarrito, getTypes, bandOrderUser,  getUserById, orderFinal, orderRedux, updateOrderFinal, allUsers } from "../../Redux/actions/actions";
import {} from "../../Redux/actions/actions";
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

    if(client && orderUser.length > 0 && token && band){
      dispatch(bandOrderUser())
      const orderFiltrado = orderUser.filter(e => e.status === "carrito");
      //console.log("orderFiltrado", orderFiltrado)
  
      if(orderFiltrado.length > 0){
        //console.log("ENTRO ORDERGILTRADO.LENGTH")
        const idOrderCarrito = orderFiltrado[0]._id;
        //console.log("CARRITO", idOrderCarrito);
        localStorage.setItem('idOrderUser', idOrderCarrito);
      }
      
      if(localStorage.getItem('idOrderUser')){
       var idOrder = localStorage.getItem('idOrderUser');
        //console.log("ID ORDER", idOrder)
      }
     
      if(JSON.parse(localStorage.getItem('order'))){
        var object = JSON.parse(localStorage.getItem('order'));
        //console.log("CARRITO LOCALSTORAGE", object)
      }

      //console.log("CARRITO BACK", orderFiltrado)
      const cart = mergeCart(object, orderFiltrado);
      //console.log("MERGE", cart)
      localStorage.setItem('order', JSON.stringify(cart));
      const cantidadTotal = sumaCantidadTotal(cart);
      dispatch(totalProductosCarrito(cantidadTotal))
      dispatch(updateCart(cart));
      const fecha = new Date();
  
      const order = {
        id: client._id,
        token: token,
        order: cart,
        status: "carrito",
        date: fecha.toUTCString(),
      }
      //console.log("ORDER PARA ENVIAR", order)
      dispatch(orderRedux(order));
      if(idOrder){
        dispatch(updateOrderFinal(idOrder, order))
      }else{
        dispatch(orderFinal(order))
      }
    }

  useEffect(() => {
    //console.log("use efect id client",client._id)
    if(client._id && band){dispatch(getUserById(client._id))}
    dispatch(allUsers())
    dispatch(getAllProducts())
    dispatch(getTypes())
    
    
    const cart = JSON.parse(localStorage.getItem('order'));
    if(cart === null){
      dispatch(totalProductosCarrito(0));
    }else{
      const cantidadTotal = sumaCantidadTotal(cart);
      dispatch(updateCart(cart));
      dispatch(totalProductosCarrito(cantidadTotal));
    }
    // eslint-disable-next-line
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
