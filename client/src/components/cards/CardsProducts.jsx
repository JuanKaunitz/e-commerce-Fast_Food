import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardProduct from "../card/CardProduct";
import "./CardsProducts.css";
import { Button, ButtonGroup, TextField } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridTemplateRows:'repeat(2,1fr)',
    alignItems:'center',
    textAlign:'center',
    gridGap:'50px',
    margin: "auto",
    height: "auto",
    maxWidth: 1024,
  },
  text:{
    height:'40px',
    width:'40px',
    color:'black'
  },
  button:{
    backgroundColor:'orange',
    color:'black'
  },
  pagina:{
    alignItems:'center',
    textAlign:'center',
    padding:'20px',
  },
  colorText: {
    backgroundColor:"orange",
    color: "white",
  },
}));

export default function GridCardsProducts() {
  const getAll = useSelector((state) => state.allProducts);
  const { searchProducts, loading } = useSelector((state) => state);
  const [page, setPage] = useState(0);
  const classes = useStyles();

  function handlePrev() {
    if (page > 0) {
      return setPage(page - 1);
    }
    return setPage(0);
  }

  function handleNext() {
    let array = getAll;
    if (loading) {
      setPage(0);
      array = searchProducts;
    }
    let pageMax = Math.ceil(array.length / 8 - 1);
    if (pageMax < 0) {
      return setPage(0);
    }
    if (page < pageMax) {
      return setPage(page + 1);
    }
    return setPage(pageMax);
  }
  return (
    <Grid container >
      <Grid item lg={12} md={12} xs={12} >
          <div className={classes.root}  >

        {loading ? (
          searchProducts.length > 0 ? (
            searchProducts.map((product) => ( 
                <CardProduct
                key={product._id}
                  id={product._id}
                  description={product.description}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  available={product.available}
                />
              
            ))
          ) : (
            <h4>Product not found!</h4>
          )
        ) : (
           getAll.slice(page * 8, page * 8 + 8).map((product) => (
              <CardProduct
              key={product._id}
                id={product._id}
                description={product.description}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                available={product.available}
              />
            
          ))
        )}
        </div>


        </Grid>
      <Grid item lg={12} md={12} xs={4}>
      <div className="pagina">
        <ButtonGroup size="small" variant="contained" className={classes.colorText}>
          <Button
            variant="contained"
            className={classes.colorText}
            value="prev"
            onClick={handlePrev}
            disabled={page <= 0}
            >
            prev
          </Button>
          <TextField
            className={classes.text}
            variant="outlined"
          
            label={page+1}
            />
          <Button
            variant="contained"
            className={classes.colorText}
            value="next"
            onClick={handleNext}
            disabled={
              searchProducts.length > 0
              ? searchProducts?.slice(page * 8, page * 8 + 8).length < 8
                : getAll.slice(page * 8, page * 8 + 8).length < 8
            }
            >
            next
          </Button>
        </ButtonGroup>
      </div>
    
      </Grid>
     </Grid>

  );
}
