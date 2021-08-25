import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardProduct from "../card/CardProduct";
import "../cards/CardsProducts.css";
import Order from "../order/Order";

const useStyles = makeStyles((theme) => ({
  root: {
    color:'black',
    marginLeft: 80,
    marginTop:20,
    width:'80%',

  },
  color:{
    color:"white",
    marginTop:"100px"
  },
  button:{
    backgroundColor:'black',
  }

}));

const Categories = () => {
  const categoryName = useSelector((state) => state.categoryName);
  const getAll = useSelector((state) => state.getProducts);
  const categories = useSelector((state) => state.allCategories);
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  const [filtro, setFiltro] = useState([]);
  
  const filter1 = getAll.filter((product) => product.category === categoryName); 

  const categoriesTypes = categories.filter(e => {
    if(e.name === categoryName){
      return e.types
    }
  });

  const types = categoriesTypes[0].types;

  useEffect(() => {
    if(type === "Types"){
      return setFiltro([]);
    }

    let tipos = filter1.filter(e => e.type === type)
    setFiltro(tipos)
    // eslint-disable-next-line
  },[type]);


  function handlePrev() {
    if (page > 0) {
      return setPage(page - 1);
    }
    return setPage(0);
  }

  function handleNext() {
    let pageMax = Math.ceil(filtro.length / 8 - 1);
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
      <div className={classes.color}>
        <h2 >filtro por tipo</h2>
        <select onClick={(e) => setType(e.target.value)}>
          <option value="Types">Types</option>
          {
            types.map(j => (
                <option value={j.name}>{j.name}</option>
            ))
          }
        </select>
      </div>
      <br></br>
      <Order />
      <Grid container className={classes.root} spacing={2}>
        {filtro.length <= 0 ? (
          filter1.slice(page * 8, page * 8 + 8).map((product) => (
            <Grid item lg={6} md={6} xs={12} key={product._id}>
              <CardProduct

                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))
        ) : (
          filtro.slice(page * 8, page * 8 + 8).map((product) => (
            <Grid lg={6} md={6} xs={12} item key={product._id} >
              <CardProduct
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))
        )
        }
      </Grid>
      <div >
        <button className={classes.button} value="prev" onClick={handlePrev} disabled={page <= 0}>
          Prev
        </button>
        <p > {page + 1} </p>
        <button
          value="next"
          onClick={handleNext}
          disabled={filtro.length < 0 ? filter1.slice(page * 8, page * 8 + 8).length < 8
          : filtro.slice(page * 8, page * 8 + 8).length < 8}
        >
        Next
        </button>
      </div>
    </div>
  );
};

export default Categories;


