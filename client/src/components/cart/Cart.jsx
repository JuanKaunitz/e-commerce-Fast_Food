import React, { useEffect }  from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardCart from './CardCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {updateCart} from '../../Redux/actions/actions'
import { deleteCart, sumProduct, resProduct } from './addCarts';


const useStyles = makeStyles(() => ({
    root: {
      // marginLeft: 40
      margin:'auto',
      height:'auto',
      maxWidth:1024
    },
    
  }));

const Cart = () => {
  const dispatch = useDispatch();

  const carts = useSelector(state => state.order);
  //const carts = JSON.parse(localStorage.getItem('order'))
  useEffect(() => {
    if(carts.length <= 0){
      if(localStorage.getItem('order')){
        let object = JSON.parse(localStorage.getItem('order'));
        dispatch(updateCart(object));
      }
    }
  },[dispatch, carts])

  function handleDeleteCart(id){
    let delet = deleteCart(id)
    const precios = delet.map(e =>  e.count);
    var sumaProductos = 0;
    for(let i = 0; i < precios.length; i++){
      sumaProductos = sumaProductos + parseInt(precios[i]);
    }
    console.log("TOTAL", sumaProductos);
    dispatch(updateCart(delet))
  }

  function handleAdd(id){
    let sum = sumProduct(id)
    const precios = sum.map(e =>  e.count);
    var sumaProductos = 0;
    for(let i = 0; i < precios.length; i++){
      sumaProductos = sumaProductos + parseInt(precios[i]);
    }
    console.log("TOTAL", sumaProductos);
    dispatch(updateCart(sum))
  }

  function handleRes(id){
    let res = resProduct(id)
    const precios = res.map(e =>  e.count);
    var sumaProductos = 0;
    for(let i = 0; i < precios.length; i++){
      sumaProductos = sumaProductos + parseInt(precios[i]);
    }
    console.log("TOTAL", sumaProductos);
    dispatch(updateCart(res))
  }

  function deleteCompleteOrder(){
    localStorage.removeItem('order');
    dispatch(updateCart([]));
  }  

  const classes = useStyles();

  if(carts.length > 0){
    const precios = carts.map(e => e.price * e.count);
    var precioTotal = 0;
    for(let i = 0; i < precios.length; i++){
      precioTotal = precioTotal + parseInt(precios[i]);
    }
  }

  return (
    <div>
      <h1>THIS IS YOUR CART</h1>
      <IconButton onClick={() => deleteCompleteOrder()}>
        <Typography>
          Falta alert de mensaje: Esto borra toda la orden CUIDADO CON EL PERRO, PERROOOO!!!!!
        </Typography>
        <DeleteIcon />
      </IconButton>
      <Grid container  className={classes.root} spacing={2}>
          {
            carts? carts.map(e => (
                  <Grid item key={e.CardCartid} xs={12} >
                    <CardCart id={e.id}
                      name={e.name} description={e.description} count={e.count}
                      image={e.image} price={e.price} 
                      deleteCart={handleDeleteCart} addProduct={handleAdd} resProduct={handleRes}/>
                  </Grid>
                ))
                : <h1>  </h1>
          }
      </Grid>
      <h1>TOTAL: ${precioTotal}</h1>
    </div>
  )
};

export default Cart
