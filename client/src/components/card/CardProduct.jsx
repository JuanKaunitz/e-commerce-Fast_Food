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
import {updateCart} from '../../Redux/actions/actions';
import {addCarts}  from '../cart/addCarts.js';


const useStyles = makeStyles((theme) => ({
  media: {
    height: '35px',
    width:200,
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    width: '200px',
    heigth: '200px',
    boxShadow: '3px 4px 8px #0b0c0c1a',

  },
  headerTitle: {
    color:'#363636',
    textDecoration:'none',
  }, 
  
}));

export default function CardProduct({id, name, image,price, description}) {

  const dispatch = useDispatch();
  const token = useSelector(state => state.clientToken);

  const classes = useStyles();

  const detail = {
    _id: id,
    name: name,
    image: image,
    price: price,
    description: description
  }
  //localStorage.removeItem('order');

  function handleAddCart() {
    /*if(token){
      dispatch(orderUser(token)); //pido al back el carrito del usuario
      let orderBack = useSelector(state => state.orderBack);
      const res = addCarts(detail, token);
      const order = orderBack.concat(res);
      localStorage.setItem('token', JSON.stringify(order));
      dispatch(updateCart(order)); //actualizo el carrito de redux
      dispatch(updateOrderUser(order)); //guardo la nueva orden del carrito
    }*/
    const res = addCarts(detail);
    dispatch(updateCart(res));
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
        <h3>$ {price}</h3>
      <IconButton >
        <AddShoppingCartIcon color="secondary" onClick={() => handleAddCart()}/>
      </IconButton>
      </CardActions>
    </Card>
    
  );
}