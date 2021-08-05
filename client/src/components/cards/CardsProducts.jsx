import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../card/CardProduct';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80
  }
}));

export default function GridCardsProducts() {
  const classes = useStyles();
  const data = ["sss","eee"];

  return (
      <Grid container xs={10} className={classes.root} spacing={2}>
        { 
          data.map(product => (
            <Grid  item xs={3}>
              <CardProduct name={product.name} image={product} price={product.price} />
            </Grid>
          ))
        } 
      </Grid>
  );
}
