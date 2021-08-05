import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../card/CardProduct';
import {getAllProducts} from '../../Redux/actions/actions';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80
  }
}));

export default function GridCardsProducts() {
  const dispatch = useDispatch();
  const getAll = useSelector((state) => state.getProducts);
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])





  const classes = useStyles();

  return (
      <Grid container xs={10} className={classes.root} spacing={2}>
        { 
          getAll.map(product => (
            <Grid  item xs={3}>
              <CardProduct name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
        } 
      </Grid>
  );
}
