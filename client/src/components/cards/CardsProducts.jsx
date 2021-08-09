import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProduct from '../card/CardProduct';
import {getAllProducts} from '../../Redux/actions/actions';
import './CardsProducts.css';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80
  },
  
}));

export default function GridCardsProducts() {
  const dispatch = useDispatch();
  const getAll = useSelector((state) => state.getProducts);
  const { searchProducts, loading }= useSelector((state) => state);
  const [page, setPage] = useState(0);
  console.log("SEARCHPRODUCT",searchProducts )
  useEffect(() => {    
      dispatch(getAllProducts())  
  }, [dispatch])

  function handlePrev(){
    if(page > 0){return setPage(page - 1)}
    return setPage(0);
  }

  function handleNext(){
    let pageMax = Math.ceil(getAll.length / 8 - 1);
    if(pageMax < 0){return setPage(0)}
    if(page < pageMax){ return setPage(page + 1)}
    return setPage(pageMax);
  }



  const classes = useStyles();

  return (
    <div >
      <Grid container  className={classes.root} spacing={2}>
        { 
          loading ? searchProducts.length > 0? searchProducts.map(product => (
            <Grid item key={product._id}  xs={3}>
              <CardProduct id={product._id}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
          : <h4>Product not found!</h4>
           
          :
          getAll.slice(page * 8, page * 8 + 8).map(product => (
            <Grid item key={product._id}  xs={3}>
              <CardProduct id={product._id}
                name={product.name} image={product.image} price={product.price} />
            </Grid>
          ))
        } 
      </Grid>
      <div className="paginado">
      <button value="prev" onClick={handlePrev} 
        disabled={page <= 0}>prev</button>
      <p className="pagina" > {page + 1} </p>
      <button value="next" onClick={handleNext} 
        disabled={loading? searchProducts?.slice(page * 8, page * 8 + 8).length < 8
          : getAll.slice(page * 8, page * 8 + 8).length < 8}>next</button>
      </div>
    </div>
  );
}
