import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardCart from "./CardCart";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { updateCart,
  totalProductosCarrito,
  orderRedux, 
  orderFinal,
  updateOrderFinal,
} from "../../Redux/actions/actions";
import {
  deleteCart,
  sumProduct,
  resProduct,
  sumaPrecioTotal,
  sumaCantidadTotal,
} from "./utilsCarts";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    // marginLeft: 40
    margin: "auto",
    height: "auto",
    maxWidth: 1024,
  },
  color: {
    color: "white",
  },
}));
console.log("yoop")
const Cart = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.order);
  const client = useSelector((state) => state.client);
  //const carts = JSON.parse(localStorage.getItem('order'))
  useEffect(() => {
    if (carts.length <= 0 ) {
      if (localStorage.getItem("order")) {
        let object = JSON.parse(localStorage.getItem("order"));
        dispatch(updateCart(object));
      }
    }
  }, [dispatch, carts]);

  function token(cart){
    const precioTotal = sumaPrecioTotal(cart);
    const cantidadTotal = sumaCantidadTotal(cart);
      const order = {
        clientId: client._id,
        token: client.token,
        precioTotal: precioTotal,
        totalProductos: cantidadTotal,
        order: cart,
        status: "carrito",
      }
      dispatch(orderRedux(order));
      if(client.order._id){
        dispatch(updateOrderFinal(client.order._id, order))
      }else{
        dispatch(orderFinal(order))
      }
  }

  function handleDeleteCart(id) {
    const delet = deleteCart(id);
    const cantidadTotal = sumaCantidadTotal(delet);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(delet));
    dispatch(totalProductosCarrito(cantidadTotal));
    if(client.token){
     token(delet);
    }
  }

  function handleAdd(id) {
    const sum = sumProduct(id);
    const cantidadTotal = sumaCantidadTotal(sum);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(sum));
    dispatch(totalProductosCarrito(cantidadTotal));
    if(client.token){
      token(sum);
     }
  }

  function handleRes(id) {
    const resta = resProduct(id);
    const cantidadTotal = sumaCantidadTotal(resta);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(resta));
    dispatch(totalProductosCarrito(cantidadTotal));
    if(client.token){
      token(resta);
     }
  }

  function deleteCompleteOrder() {
    localStorage.removeItem("order");
    dispatch(updateCart([]));
    dispatch(totalProductosCarrito(0));
    if(client.token){
      //ver borrado de orden en el back
     }
  }

  const classes = useStyles();

  const precioTotal = sumaPrecioTotal(carts);

  const setBuy = () => {
    props.history.push("/payment");
  };

  return (
    <div>
      <h1 className={classes.color}>THIS IS YOUR CART</h1>
      <IconButton onClick={() => deleteCompleteOrder()}>
        <Typography className={classes.color}>
          Be carefull, this button erase the entire cart: ==
        </Typography>
        <DeleteIcon className={classes.color} />
      </IconButton>
      <Grid container className={classes.root} spacing={2}>
        {carts
          ? carts.map((e) => (
              <Grid item key={e.CardCartid} xs={12}>
                <CardCart
                  id={e.id}
                  name={e.name}
                  description={e.description}
                  count={e.count}
                  image={e.image}
                  price={e.price}
                  deleteCart={handleDeleteCart}
                  addProduct={handleAdd}
                  resProduct={handleRes}
                />
              </Grid>
            ))
          : null}
      </Grid>
      <h1 className={classes.color}>TOTAL: ${precioTotal}</h1>
      <Button onClick={() => setBuy()} variant="contained" color="secondary">
        Pagar
      </Button>
    </div>
  );
};

export default Cart;
