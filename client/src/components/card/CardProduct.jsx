import React, { useState } from "react";
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
import { addCarts, sumaCantidadTotal } from "../cart/utilsCarts.js";
////aparte
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ButtonGroup, CardActionArea, Divider } from "@material-ui/core";
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
    width: "auto",
    height: 100,
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
    backgroundColor:"orange",
    color: "white",
  },
  color2: {
    backgroundColor:"red",
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
  const client = useSelector((state) => state.client);
  const token = useSelector((state) => state.clientToken);

  function cartBack(cart) {
    const idOrder = localStorage.getItem("idOrderUser");
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

  const detail = {
    _id: id,
    name: name,
    image: image,
    price: price,
    description: description,
    stock: stock,
  };

  const handleNext = () => {
    setIsFlipped(!isFlipped);
  };

  function handleAddCart() {
    setCounter(counter + 1);
    const cart = addCarts(detail);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart));
    dispatch(totalProductosCarrito(cantidadTotal));
    if (token) {
      cartBack(cart);
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
                className={classes.color}
                onClick={handleNext}
              >
                <AddShoppingCartIcon  />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* frontal */}
        <Card className={classes.root}>
          <CardContent>
            <Button onClick={handleNext} variant="contained" className={classes.color}>
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
            <Typography className={classes.pos} color="textSecondary">
              Description: {description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Stock: {stock}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Precio: ${price}
            </Typography>
            {
              stock > 0?
                <ButtonGroup
                  size="small"
                  variant="contained"
                  aria-label="contained primary button group"
                  component="div"
                >
                  <Button onClick={() => handleAddCart()} className={classes.color}>
                    +
                  </Button>
                </ButtonGroup>
              : 
                <ButtonGroup
                size="small"
                variant="contained"
                aria-label="contained primary button group"
                component="div"
                >
                  <Button  className={classes.color2}>
                  out of stock
                  </Button>
                </ButtonGroup>
            }
          </CardContent>
        </Card>
      </ReactCardFlip>
    </ThemeProvider>
  );
}
