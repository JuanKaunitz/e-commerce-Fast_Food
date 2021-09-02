import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardProduct from "../card/CardProduct";
import "../cards/CardsProducts.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    marginLeft: 80,
    marginTop: 20,
    width: "80%",
  },
  color: {
    color: "white",
    marginTop: "100px",
  },
  btn_add: {
    display: "flex",
    alignItems: "center",

    height: 40,
    width: 110,
    borderRadius: 0,
    cursor: "pointer",
  },
  root_items: {
    width: "50%",
  },
  list: {
    marginTop: 100,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "80px",
  },
}));

const Categories = () => {
  const categoryName = useSelector((state) => state.categoryName);
  const getAll = useSelector((state) => state.getProducts);
  const categories = useSelector((state) => state.allCategories);

  const [filtro, setFiltro] = useState([]);

  const filter1 = getAll.filter((product) => product.category === categoryName);

  const categoriesTypes = categories.filter((e) => {
    if (e.name === categoryName) {
      return e.types;
    }
  });

  const types = categoriesTypes[0].types;

  useEffect(() => {
    setFiltro(filter1);
    // eslint-disable-next-line
  }, [categoryName]);

  const [open, setOpen] = React.useState(false);

  const onOrderChange = (e) => {
    let typo = e.target.value;
    if (typo === "none") {
      setFiltro(filter1);
    } else {
      let tipos = filter1.filter((e) => e.type === typo);
      setFiltro(tipos);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.list}>
      <Grid item >
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Order by:
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={onOrderChange}
            >
              <MenuItem value="none">
                <em>None</em>
              </MenuItem>
              {types.map((j) => (
                <MenuItem value={j.name}>{j.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        {filtro.length > 0 ? (
          filtro.map((product) => (
            <Grid item lg={4} md={4} xs={12} item key={product._id}>
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                description={product.description}
              />
            </Grid>
          ))
        ) : (
          <h1>Not Found</h1>
        )}
      </Grid>
    </div>
  );
};

export default Categories;
