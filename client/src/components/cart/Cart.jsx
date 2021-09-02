import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardCart from "./CardCart";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import swal from "sweetalert";
import {
  updateCart,
  totalProductosCarrito,
  orderRedux,
  orderFinal,
  updateOrderFinal,
  deleteOrden,
  getUserById,
  bandOrderUser,
  // mercadopago,
  couponValue,
} from "../../Redux/actions/actions";
import {
  deleteCart,
  sumProduct,
  resProduct,
  sumaPrecioTotal,
  sumaCantidadTotal,
  mergeCart,
} from "./utilsCarts";
import Cupon from "./Coupon";

const useStyles = makeStyles(() => ({
  root: {
    // marginLeft: 40
    margin: "auto",
    height: "auto",
    maxWidth: 1024,
    marginTop: 110,
  },
  color: {
    color: "black",

  },
  color1: {
    backgroundColor: "orange",
    color: "white",
  },
  cart: {
    height: '30px',
    width: '60px',
    color: 'black'
  },

}));
const Cart = (props) => {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart);
  const client = useSelector((state) => state.client);
  const token = useSelector((state) => state.clientToken);
  const orderUser = useSelector((state) => state.orderUser);
  const band = useSelector((state) => state.bandOrderUser);
  const coupon = useSelector((state) => state.getDiscount);
 

  if (client && orderUser.length > 0 && token && band) {
    dispatch(bandOrderUser());
    const orderFiltrado = orderUser.filter((e) => e.status === "carrito");

    if (orderFiltrado.length > 0) {
      const idOrderCarrito = orderFiltrado[0]._id;
      localStorage.setItem("idOrderUser", idOrderCarrito);
    }

    if (localStorage.getItem("idOrderUser")) {
      var idOrder = localStorage.getItem("idOrderUser");
    }

    if (JSON.parse(localStorage.getItem("order"))) {
      var object = JSON.parse(localStorage.getItem("order"));
    }

    const cart = mergeCart(object, orderFiltrado);
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
  const total = sumaPrecioTotal(carts);
  function resta() {
    if (coupon.length > 0 && coupon[0].value < total) {
      const cupon = coupon[0].value;
      console.log("CUPON DE CART", cupon);
      dispatch(couponValue(cupon));
      return total - coupon[0].value;
    } else return total;
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
    swal({
      title: "Are you sure?",
      text: "Cart deleted",
      icon: "warning",
      button: "Confirm",
    });
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

  const setBuy = () => {
    if (token) {
      props.history.push("/option");
    } else {
      props.history.push("/login");
    }
  };




  return (
    <div className={classes.root}>
      <IconButton>
      <Typography variant="h2" color ="textPrimary">Your cart</Typography>
      <ShoppingCartSharpIcon  className={classes.cart}/>
      </IconButton>
      <IconButton onClick={() => deleteCompleteOrder()}>
        <Typography className={classes.delete}>Delete all</Typography>
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
      <Cupon />
      {coupon.length > 0 ? (
        <h1 className={classes.color}>
          TOTAL:<strike>{total}</strike> ${resta()}
        </h1>
      ) : (
        <h1 className={classes.color}>TOTAL: ${total}</h1>
      )}

      <Button
        onClick={() => setBuy()}
        variant="contained"
        className={classes.color1}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
