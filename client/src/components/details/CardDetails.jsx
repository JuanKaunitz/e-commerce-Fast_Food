import React, {useEffect,useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import {getById} from '../../Redux/actions/actions';
import {updateCart,
  totalProductosCarrito,
  orderRedux, 
  orderFinal,
  updateOrderFinal,
} from '../../Redux/actions/actionsCartOrder';
import {addCarts, sumaCantidadTotal, sumaPrecioTotal}  from '../cart/utilsCarts.js';
// import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:100,
    width:'50%',
    paddingTop:10,
    margin:'auto',
    height:500
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height:300
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function CardDetails({match}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loading = useSelector(state => state.loading);
  const detail = useSelector(state => state.getDetail.product);
  const productId = useRef(match.params.id);
  const client = useSelector(state => state.client);
  // console.log("ID ----", productId)
  
  useEffect(() => {
    dispatch(getById(productId.current));
  },[dispatch]);
  
  //console.log("DETAIL", detail)
  function handleAddCart() {
    const cart = addCarts(detail);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart))
    dispatch(totalProductosCarrito(cantidadTotal));
    if(client.token){
      const precioTotal = sumaPrecioTotal(cart);
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
  }
  return (
     loading?
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
               {detail.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {detail.description}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography variant="subtitle1" color="textSecondary">
                ${detail.price}
              </Typography>
              <IconButton >
                <FavoriteIcon/>
              </IconButton>
              <IconButton onClick={() => handleAddCart()}>
                <AddShoppingCartIcon color="secondary" />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={detail.image}
            title="Live from space album cover"
          />
        </Card>
      : <HourglassEmptyIcon fontSize="large"/>
     
      
  );
}