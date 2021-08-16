import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import {updateCart, totalProductosCarrito} from '../../Redux/actions/actions';
import {addCarts, mergeCart, sumaPrecioTotal, sumaCantidadTotal}  from '../cart/utilsCarts.js';


const useStyles = makeStyles((theme) => ({
  media: {
    height: '35px',
    width:200,
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    backgroundColor:'rgb(240, 119, 6)',
    width: '200px',
    heigth: '200px',
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
     /*if(client.token){
      dispatch(orderUser(client.user._id)); //pido al back el carrito del usuario
      const cart = addCarts(detail, true);
      const orderBack = useSelector(state => state.orderBack);
      const order = mergeCart(cart, orderBack);
      const precioTotal = sumaPrecioTotal(order);
      const totalProductos = sumaCantidadTotal(order);
      localStorage.setItem('order', JSON.stringify(order));
      dispatch(updateCart(order)); //actualizo el carrito de redux
      dispatch(updateOrderFinal({
          clientId: client.user._id,
          token: client.token,
          precioTotal: precioTotal,
          totalProductos: totalProductos,
          order: order,
        })); //guardo la nueva orden del carrito
    }*/
    const cart = addCarts(detail, false);
    const cantidadTotal = sumaCantidadTotal(cart);
    dispatch(updateCart(cart));
    dispatch(totalProductosCarrito(cantidadTotal))
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