import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  updateCart,
  totalProductosCarrito,
  orderRedux,
  orderFinal,
  updateOrderFinal,
} from "../../Redux/actions/actions";
import {
  addCarts,
  deleteCart,
  resProduct,
  sumaCantidadTotal,
  sumaPrecioTotal,
} from "../cart/utilsCarts.js";
////aparte
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  ButtonGroup,
  CardActionArea,
  Divider,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
  },
});

const useStyles = makeStyles(() => ({
  media: {
    width: 'auto',
    height:100,
    paddingTop: "50%", // 16:9
  },
  cardContent: {
    
    maxWidth: "250px",
    maxHeigth: 200,
    boxShadow: "3px 4px 8px #0b0c0c1a",
  },
  headerTitle: {
    color: "black",
    textDecoration: "none",
  },
  color: {
    color: "white",
  },
}));

export default function CardProduct({
  id,
  name,
  image,
  price,
  description,
  stock,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isFlipped, setIsFlipped] = useState(false);
  const [counter, setCounter] = useState(0);
  const client = useSelector(state => state.client);
  //const token = useSelector(state => state.clientToken);
  // const token = useSelector(state => state.clientToken);
  const orderUser = useSelector(state => state.orderUser);
  const carts = useSelector((state) => state.order);
  // const client = useSelector((state) => state.client);
  const items = useSelector((state) => state.totalCarrito);

  useEffect(() => {
    if (carts?.length <= 0) {
      if (localStorage.getItem("order")) {
        let object = JSON.parse(localStorage.getItem("order"));
        dispatch(updateCart(object));
      }
    }
  }, [dispatch]);

  function token(cart) {
    const precioTotal = sumaPrecioTotal(cart);
    const cantidadTotal = sumaCantidadTotal(cart);
    const order = {
      clientId: client._id,
      token: client.token,
      precioTotal: precioTotal,
      totalProductos: cantidadTotal,
      order: cart,
      status: "carrito",
    };
    dispatch(orderRedux(order));
    if (client.order._id) {
      dispatch(updateOrderFinal(client.order._id, order));
    } else {
      dispatch(orderFinal(order));
    }
  }
  const detail = {
    _id: id,
    name: name,
    image: image,
    price: price,
    description: description,
  };

  function handleDeleteCart(id) {
    const delet = deleteCart(id);
    const cantidadTotal = sumaCantidadTotal(delet);
    dispatch(updateCart(delet));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (client.token) {
      token(delet);
    }
  }

  function handleRes(id) {
    setCounter(counter - 1);
    const resta = resProduct(id);
    const cantidadTotal = sumaCantidadTotal(resta);
    dispatch(updateCart(resta));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (client.token) {
      token(resta);
    }
  }
  const handleNext = () => {
    setIsFlipped(!isFlipped);
  };

  function handleAddCart() {
    setCounter(counter + 1);
    const cart = addCarts(detail);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart));
    dispatch(totalProductosCarrito(cantidadTotal))
    if(client.token){
      const idOrder = localStorage.getItem('idOrderUser');
      const fecha = new Date();
      const precioTotal = sumaPrecioTotal(cart);
      const order = {
        id: client._id,
        token: token,
        order: cart,
        status: "carrito",
        date: fecha.toUTCString(),
      }
    if (client.token) {
      dispatch(orderRedux(order));
      if(idOrder){
        dispatch(updateOrderFinal(idOrder, order))
      }else{
        dispatch(orderFinal(order))
      };
      dispatch(orderRedux(order));
      if (client.order._id) {
        dispatch(updateOrderFinal(client.order._id, order));
      } else {
        dispatch(orderFinal(order));
      }
    }
  }
  }
  //--flippcard--//

  return (
    <ThemeProvider theme={theme}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {name}
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                component="p"
                className={classes.sub_title}
              >
               Precio: ${price}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                <AddShoppingCartIcon className={classes.color} />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* frontal */}
        <Card className={classes.root}>
          <CardContent>
          <Button onClick={handleNext} variant="contained" color="primary">
                <ArrowBackIcon />
              </Button>
            <Typography
              className={classes.sub}
              color="textSecondary"
              gutterBottom
            >
              {name}
            </Typography>
            <Divider />
            <CardMedia className={classes.media} image={image} title={name} />
           
            <Typography className={classes.pos} color="textSecondary">
             Precio: ${price}
            </Typography>
            <ButtonGroup
              size="small"
              variant="contained"
              aria-label="contained primary button group"
            >
              <Button onClick={() => handleRes(id)} color="secondary">
                --
              </Button>
              <TextField
                variant="outlined"
                value={counter}
              />
              <Button onClick={() => handleAddCart()} color="primary">
                +
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </ReactCardFlip>
    </ThemeProvider>
  );
}
