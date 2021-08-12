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
    backgroundColor:'rgb(240, 119, 6)',
    width: '200px',
    heigth: '200px',
    boxShadow: '3px 4px 8px #0b0c0c1a',

  },
  headerTitle: {
    color:'black',
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

  //1- sumar la cantidad total de productos y mostrar en la navbar 
  //2- total de productos = mapear order y sumar los count
  /*{
    idCliente: 444,
    token: 2j2j2,
    precioTotal: 522,
    totalProductos: 5,
    order: [{}],
  }*/

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
    const precios = res.map(e =>  e.count);
    var suma = 0;
    for(let i = 0; i < precios.length; i++){
        suma = suma + parseInt(precios[i]);
    }
    console.log("TOTAL", suma);
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