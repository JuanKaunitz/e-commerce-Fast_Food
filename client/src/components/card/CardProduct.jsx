import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import {
  updateCart,
  totalProductosCarrito,
  orderRedux, 
  orderFinal,
  updateOrderFinal
  } from '../../Redux/actions/actionsCartOrder';
import {addCarts, sumaCantidadTotal, sumaPrecioTotal}  from '../cart/utilsCarts.js';


const useStyles = makeStyles((theme) => ({
  media: {
    height: '35px',
    width:200,
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    backgroundColor:'rgb(240, 119, 6)',
    maxWidth: '200px',
    maxHeigth: '200px',
    boxShadow: '3px 4px 8px #0b0c0c1a',

  },
  headerTitle: {
    color:'black',
    textDecoration:'none',
  },
  color:{
    color:"white"
  }
  
}));

export default function CardProduct({id, name, image,price, description}) {

  const dispatch = useDispatch();
  const client = useSelector(state => state.client);

  const classes = useStyles();

  const detail = {
    _id: id,
    name: name,
    image: image,
    price: price,
    description: description
  }
  
  function handleAddCart() {
    const cart = addCarts(detail);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart));
    dispatch(totalProductosCarrito(cantidadTotal))
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
    <Card className={classes.cardContent} >
      <Link to={`/detail/${id}`} className={classes.headerTitle}>
        <CardHeader  title={name}/>
        <CardMedia
          className={classes.media}
          image={image}
        />
      </Link>
      <CardActions disableSpacing>
        <h2 className={classes.color}>$ {price}</h2>
      <IconButton onClick={() => handleAddCart()}>
        <AddShoppingCartIcon className={classes.color} />
      </IconButton>
      </CardActions>
    </Card>
    
  );
}