import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../card/CardProduct';
import './CardsProducts.css';


const useStyles = makeStyles(() => ({
  root: {
    margin:'auto',
    height:'auto',
    maxWidth:1024
  },
  
}));

export default function GridCardsProducts() {
  const getAll = useSelector((state) => state.getProducts);
  const { searchProducts, loading }= useSelector((state) => state);
  const [page, setPage] = useState(0);

  function handlePrev(){
    if(page > 0){return setPage(page - 1)}
    return setPage(0);
  }

  function handleNext(){
    let array = getAll;
    if(loading){
      setPage(0);
      array = searchProducts
    }
    let pageMax = Math.ceil(array.length / 8 - 1);
    if(pageMax < 0){return setPage(0)}
    if(page < pageMax){ return setPage(page + 1)}
    return setPage(pageMax);
  }
  const classes = useStyles();
  return (
    <div >
      <Grid container  className={classes.root} spacing={2}>
        { 
          loading ? searchProducts.length > 0 ?
           searchProducts.map(product => (
            <Grid item key={product._id}  xs={3}>
              <CardProduct id={product._id} description={product.description}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
          : <h4>Product not found!</h4>
           
          :
          getAll.slice(page * 8, page * 8 + 8).map(product => (
            <Grid item key={product._id}  xs={3}>
              <CardProduct id={product._id} description={product.description}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
        } 
      </Grid>
      <div className="paginado">
      <button className="button" value="prev" onClick={handlePrev} 
        disabled={page <= 0}>prev</button>
      <p className="pagina" > {page + 1} </p>
      <button value="next" onClick={handleNext} 
        disabled={searchProducts.length > 0 ? searchProducts?.slice(page * 8, page * 8 + 8).length < 8
          : getAll.slice(page * 8, page * 8 + 8).length < 8}>next</button>
      </div>
    </div>
  );
}