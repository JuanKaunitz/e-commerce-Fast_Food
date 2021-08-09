import React, {useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardProduct from "../card/CardProduct";
import "../cards/CardsProducts.css";
import Order from "../order/Order";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80,
  },
}));

const Categories = ({ match }) => {
  const categoryName = useSelector((state) => state.categoryName);
  // console.log("categoryName", categoryName)
  const getAll = useSelector((state) => state.getProducts);
  const [page, setPage] = useState(0);
  // console.log("GETALL", getAll);

  let filter1 = getAll.filter((product) => product.type === categoryName);
  // console.log("FILTER", filter1);

  function handlePrev() {
    if (page > 0) {
      return setPage(page - 1);
    }
    return setPage(0);
  }

  function handleNext() {
    let pageMax = Math.ceil(getAll.length / 8 - 1);
    if (pageMax < 0) {
      return setPage(0);
    }
    if (page < pageMax) {
      return setPage(page + 1);
    }
    return setPage(pageMax);
  }

  const classes = useStyles();

  return (
    <div>
      <Order />
      <Grid container className={classes.root} spacing={2}>
        {filter1 ? (
          filter1.slice(page * 8, page * 8 + 8).map((product) => (
            <Grid item key={product._id} xs={3}>
              <CardProduct
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))
        ) : (
          <h2>loading</h2>
        )}
      </Grid>
      <div className="paginado">
        <button value="prev" onClick={handlePrev} disabled={page <= 0}>
          prev
        </button>
        <p className="pagina"> {page + 1} </p>
        <button
          value="next"
          onClick={handleNext}
          disabled={filter1.slice(page * 8, page * 8 + 8).length < 8}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Categories;
