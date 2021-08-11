import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardCart from './CardCart';


const useStyles = makeStyles(() => ({
    root: {
      // marginLeft: 40
      margin:'auto',
      height:'auto',
      maxWidth:1024
    },
    
  }));

const Cart = () => {
    const carts = JSON.parse(localStorage.getItem('order'));
    
    

    const classes = useStyles();
    if(carts){
      const precios = carts.map(e => e.price)
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
                        name={e.name} description={e.description}
                        image={e.image} price={e.price} />
                    </Grid>
                  ))
                  : <h1>Loading...</h1>
            }
        </Grid>
        <h1>TOTAL: ${suma}</h1>
      </div>
    )
};

export default Cart
