import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../card/CardProduct';
import { search } from '../Navbar/Navbar';
import {getAllProducts} from '../../Redux/actions/actions';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80
  }
}));

export default function GridCardsProducts() {
  const dispatch = useDispatch();
  const getAll = useSelector((state) => state.getProducts);
  const { searchProducts, loading }= useSelector((state) => state);
  

  useEffect(() => {    
      dispatch(getAllProducts())    
  }, [dispatch])





  const classes = useStyles();

  return (
      <Grid container xs={10} className={classes.root} spacing={2}>
        { 
          loading && loading ? searchProducts.map(product => (
            <Grid key={product._id} item xs={3}>
              <CardProduct id={product._id}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))

          :
          getAll.map(product => (
            <Grid key={product._id} item xs={3}>
              <CardProduct id={product._id}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
        } 
      </Grid>
  );
}
