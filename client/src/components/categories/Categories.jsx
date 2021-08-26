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
  btn_add: {
    display: "flex",
    alignItems: "center",
    
    height: 40,
    width: 110,
    borderRadius: 0,
    cursor: "pointer",
  },

}));

const Categories = () => {
  const categoryName = useSelector((state) => state.categoryName);
  const getAll = useSelector((state) => state.getProducts);
  const categories = useSelector((state) => state.allCategories);
  const [type, setType] = useState("Types");
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
      return setFiltro(filter1);
    }
    let tipos = filter1.filter(e => e.type === type)
    if(tipos.length < 0){
      setFiltro([])
    }
    setFiltro(tipos)
    // eslint-disable-next-line
  },[type, categoryName]);

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
        {filtro.length > 0 ? (
          filtro.map((product) => (
            <Grid lg={6} md={6} xs={12} item key={product._id} >
              <CardProduct
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                description={product.description}
              />
            </Grid>
          ))
        ) : <h1>not</h1>
        }
      </Grid>
    </div>
  );
};

export default Categories;


