import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
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
  sumProduct,
} from "../cart/utilsCarts.js";
////aparte
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  ButtonGroup,
  CardActionArea,
  Divider,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "35px",
    width: 200,
    paddingTop: "50%", // 16:9
  },
  cardContent: {
    backgroundColor: "rgb(240, 119, 6)",
    maxWidth: "200px",
    maxHeigth: "200px",
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [counter ,setCounter] = useState(0)
  const dispatch = useDispatch();
  const classes = useStyles();
  const carts = useSelector((state) => state.order);
  const client = useSelector((state) => state.client);
  const items = useSelector(state => state.totalCarrito)
  useEffect(() => {
    if (carts.length <= 0 ) {
      if (localStorage.getItem("order")) {
        let object = JSON.parse(localStorage.getItem("order"));
        dispatch(updateCart(object));
      }
    }
  }, [dispatch]);

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
    if(client.token){
     token(delet);
    }
  }

  function handleRes(id) {
    setCounter(counter -1)
    const resta = resProduct(id);
    const cantidadTotal = sumaCantidadTotal(resta);
    dispatch(updateCart(resta));
    dispatch(totalProductosCarrito(cantidadTotal));
    if(client.token){
      token(resta);
     }
  }
  const handleNext = () => {
    setIsFlipped(!isFlipped);
  };

  function handleAddCart() {
    setCounter(counter +1)
    const cart = addCarts(detail);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (client.token) {
      const precioTotal = sumaPrecioTotal(cart);
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
  }

  //--flippcard--//

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
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
              {price}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              En Stock:{stock}
            </Typography>
            <Typography>Disponible</Typography>
          <Button variant="contained" color="primary" onClick={handleNext}>
            <AddShoppingCartIcon className={classes.color} />
          </Button>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.sub}
            color="textSecondary"
            gutterBottom
          >
            {price}
            <Button onClick={handleNext} variant="contained" color="primary">
              <ArrowBackIcon />
            </Button>
          </Typography>

          <Divider />
          <Typography variant="body2" component="p">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            En Stock:{stock}
          </Typography>
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button onClick={() => handleRes(id)}>--</Button>
            <TextField
              id="outlined-number"
              variant="outlined"
              type="number"
              value={counter}
            />
            <Button onClick={() => handleAddCart()}>+</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
}
