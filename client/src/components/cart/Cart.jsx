import React, { useEffect }  from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardCart from './CardCart';
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
    dispatch(updateCart(delet))
  }

  function handleAdd(id){
    let sum = sumProduct(id)
    dispatch(updateCart(sum))
  }

  function handleRes(id){
    let res = resProduct(id)
    dispatch(updateCart(res))
  }

  const classes = useStyles();

  if(carts.length > 0){
    const precios = carts.map(e => e.price * e.count);
    var suma = 0;
    for(let i = 0; i < precios.length; i++){
        suma = suma + parseInt(precios[i]);
    }
  }

  return (
    <div>
      <h1>THIS IS YOUR CART</h1>
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
      <h1>TOTAL: ${suma}</h1>
    </div>
  )
};

export default Cart
