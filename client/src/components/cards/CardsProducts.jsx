import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardProduct from "../card/CardProduct";
import "./CardsProducts.css";
import { Button, ButtonGroup, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    height: "auto",
    maxWidth: 1024,
  },
  input_text:{
    color:'black'
  }

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
    <div>
      <Grid container className={classes.root} spacing={2}>
        {loading ? (
          searchProducts.length > 0 ? (
            searchProducts.map((product) => (
              <Grid item key={product._id} xs={3}>
                <CardProduct
                  id={product._id}
                  description={product.description}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  available={product.available}
                />
              </Grid>
            ))
          ) : (
            <h4>Product not found!</h4>
          )
        ) : (
          getAll.slice(page * 12, page * 12 + 12).map((product) => (
            <Grid item key={product._id} xs={3}>
              <CardProduct
                id={product._id}
                description={product.description}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                available={product.available}
              />
            </Grid>
          ))
        )}
      </Grid>
      <div className="pagina">
        <ButtonGroup size="small" variant="contained"  >
          <Button
            variant="contained"
            color="primary"
            className="button"
            value="prev"
            onClick={handlePrev}
            disabled={page <= 0}
          >
            prev
          </Button>
          <TextField
            className="input_text"
            variant="outlined"
            value={page + 1}
          />
          <Button
            variant="contained"
            color="primary"
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
    </div>
  );
}
