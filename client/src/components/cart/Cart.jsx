import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "../Pasarela/checkoutMercado";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardCart from "./CardCart";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import {
  updateCart,
  totalProductosCarrito,
  orderRedux,
  orderFinal,
  updateOrderFinal,
  deleteOrden,
  getUserById,
  bandOrderUser,
} from "../../Redux/actions/actions";
import {
  deleteCart,
  sumProduct,
  resProduct,
  sumaPrecioTotal,
  sumaCantidadTotal,
  mergeCart,
} from "./utilsCarts";

const useStyles = makeStyles(() => ({
  root: {
    // marginLeft: 40
    margin: "auto",
    height: "auto",
    maxWidth: 1024,
    marginTop: 110
  },
  color: {
    color: "black",
  },
  color1: {
    backgroundColor:"orange",
    color: "white",
  },
}));
//console.log("yoop")
const Cart = (props) => {
  //console.log(props)
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart);
  const client = useSelector((state) => state.client);
  const token = useSelector((state) => state.clientToken);
  const orderUser = useSelector((state) => state.orderUser);
  const band = useSelector((state) => state.bandOrderUser);

  //const [datos, setDatos] = useState("")
  //localStorage.removeItem("order");

  if (client && orderUser.length > 0 && token && band) {
    dispatch(bandOrderUser());
    const orderFiltrado = orderUser.filter((e) => e.status === "carrito");
    //console.log("orderFiltrado", orderFiltrado)

    if (orderFiltrado.length > 0) {
      //console.log("ENTRO ORDERGILTRADO.LENGTH")
      const idOrderCarrito = orderFiltrado[0]._id;
      //console.log("CARRITO", idOrderCarrito);
      localStorage.setItem("idOrderUser", idOrderCarrito);
    }

    if (localStorage.getItem("idOrderUser")) {
      var idOrder = localStorage.getItem("idOrderUser");
      //console.log("ID ORDER", idOrder)
    }

    if (JSON.parse(localStorage.getItem("order"))) {
      var object = JSON.parse(localStorage.getItem("order"));
      //console.log("CARRITO LOCALSTORAGE", object)
    }

    //console.log("CARRITO BACK", orderFiltrado)
    const cart = mergeCart(object, orderFiltrado);
    //console.log("MERGE", cart)
    localStorage.setItem("order", JSON.stringify(cart));
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(totalProductosCarrito(cantidadTotal));
    dispatch(updateCart(cart));
    const fecha = new Date();

    const order = {
      id: client._id,
      token: token,
      order: cart,
      status: "carrito",
      date: fecha.toUTCString(),
    };
    console.log("ORDER PARA ENVIAR", order);
    dispatch(orderRedux(order));
    if (idOrder) {
      dispatch(updateOrderFinal(idOrder, order));
    } else {
      dispatch(orderFinal(order));
    }
  }

  useEffect(() => {
    if (client._id && band) {
      dispatch(getUserById(client._id));
    }
    if (carts.length <= 0) {
      if (localStorage.getItem("order")) {
        let object = JSON.parse(localStorage.getItem("order"));
        dispatch(updateCart(object));
      }
    }
    // eslint-disable-next-line
  }, [dispatch]);

  function cartBack(cart) {
    const idOrder = localStorage.getItem("idOrderUser");
    const fecha = new Date();

    const order = {
      id: client._id,
      order: cart,
      status: "carrito",
      date: fecha.toUTCString(),
    };
    dispatch(orderRedux(order));
    if (idOrder) {
      dispatch(updateOrderFinal(idOrder, order));
    } else {
      dispatch(orderFinal(order));
    }
  }

  function handleDeleteCart(id) {
    const delet = deleteCart(id);
    const cantidadTotal = sumaCantidadTotal(delet);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(delet));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (token) {
      cartBack(delet);
    }
  }

  function handleAdd(id) {
    const sum = sumProduct(id);
    const cantidadTotal = sumaCantidadTotal(sum);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(sum));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (token) {
      cartBack(sum);
    }
  }

  function handleRes(id) {
    const resta = resProduct(id);
    const cantidadTotal = sumaCantidadTotal(resta);
    //console.log("TOTAL", sumaProductos);
    dispatch(updateCart(resta));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (token) {
      cartBack(resta);
    }
  }

  function deleteCompleteOrder() {
    localStorage.removeItem("order");
    dispatch(updateCart([]));
    dispatch(totalProductosCarrito(0));
    if (token) {
      const idOrder = localStorage.getItem("idOrderUser");
      localStorage.removeItem("idOrderUser");
      const borrado = orderUser.filter((e) => e._id !== idOrder);
      dispatch(deleteOrden(idOrder, borrado));
    }
  }

  const classes = useStyles();

  const precioTotal = sumaPrecioTotal(carts);

  const setBuy = () => {
    if(token){
      props.history.push("/option");
    }else{

      props.history.push("/login");
    }
  };

  return (
    <div className={classes.root}>
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
              <Grid item key={e.id} xs={12}>
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
      <Button onClick={() => setBuy()} variant="contained" className={classes.color1}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
