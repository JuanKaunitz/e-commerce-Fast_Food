import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import GridCardsProducts from "../cards/CardsProducts";
import { getAllProducts, updateCart, totalProductosCarrito, getTypes, allUsers,recoveryData,
  bandOrderUser, getUserById, orderFinal, orderRedux, updateOrderFinal} from "../../Redux/actions/actions";
import Gallery from "../gallery/Gallery";
import Order from "../order/Order";
import Otters from "../Otters/Otters";
import { mergeCart, sumaCantidadTotal } from "../cart/utilsCarts";
import { Grid } from "@material-ui/core";
import Maps from "../Map/Maps";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  /* container: {
   backgroundColor:'white',
  }, */
  order:{
    display:'flex',
    justifyContent:'space-around',
    alignItems: '',
  }
}));

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const client = useSelector((state) => state.client);
  const orderUser = useSelector((state) => state.orderUser);
  const token = useSelector((state) => state.clientToken);
  const band = useSelector((state) => state.bandOrderUser);
  //localStorage.removeItem("order");


    if(client && orderUser.length > 0 && token && band){
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
        order: cart,
        status: "carrito",
        date: fecha.toUTCString(),
      }
      console.log("ORDER PARA ENVIAR", order)
      dispatch(orderRedux(order));
      if(idOrder){
        dispatch(updateOrderFinal(idOrder, order))
      }else{
        dispatch(orderFinal(order))
      }
      dispatch(bandOrderUser())
    }

  useEffect(() => {
    console.log("use efect id client",client._id)
    if(client._id && band){dispatch(getUserById(client._id))}
    dispatch(getAllProducts())
    dispatch(getTypes())
    
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item lg={12} xl={12} md={10} xs={12} >
      <div className={classes.container}> 
        <Gallery />
        <Otters />
        <div className={classes.order}>
        <Order />
        </div>
        <GridCardsProducts />
        {/* <Maps /> */}
        <Footer />
        </div>
        </Grid>
    </Grid>
  );
}

export default Home;
