import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import {
  updateCart,
  totalProductosCarrito,
  orderRedux, 
  orderFinal,
  updateOrderFinal
  } from '../../Redux/actions/actions';
import {addCarts, sumaCantidadTotal, sumaPrecioTotal}  from '../cart/utilsCarts.js';


const useStyles = makeStyles((theme) => ({
  root:{
    marginLeft:'50px',
  },
  cardactions:{
  alignItems:'center',
  marginLeft:'10px',
  textAlign:'center',
  },
  media: {
    height: '20px',
    width:'100%',
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    backgroundColor:'#845411',
    height:'300px',
    width:'250px',
    textAlign:'center',
    borderRadius:'0.8rem',
 

  },
  headerTitle: {
    color:'white',
    textDecoration:'none',
    fonts: 'Roboto',
  },
  color:{
    color:"white",
    textAlign:'center',
    marginLeft:'50px',
    position:'center',
    
  },
  color1:{
    color:"orange",
    textAlign:'center',
    marginLeft:'50px',
    position:'center',
    
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
    <Grid cointaner >
      <Grid item lg={12} md={12} xs={12}>
    <Card className={classes.cardContent} >
      <Link to={`/detail/${id}`} className={classes.headerTitle}>
        <CardHeader  title={name}/>
        <CardMedia
          className={classes.media}
          image={image}
        />
      </Link>
      <CardActions className={classes.cardactions} disableSpacing>
        <h2 className={classes.color}>$ {price}</h2>
      <IconButton onClick={() => handleAddCart()}>
        <AddShoppingCartIcon className={classes.color1} />
      </IconButton>
      </CardActions>
    </Card>
    </Grid>
    </Grid> 
  );
}