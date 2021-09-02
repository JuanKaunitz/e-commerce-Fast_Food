import React, { useState, useEffect } from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffff"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: '10px',
    backgroundColor: "#ffff"
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "orange",
  },
  input_text: {
    backgroundColor: "#ffff",
  },
  select_types: {
    color: "black",
    padding: "1px",
    fontSize: "15px",
    borderRadius: "4px",
    borderColor: "black",
    width: "auto",
    backgroundColor: "#ffff",
  },
  label: {
    color: "black",
    fontSize:"18px"
  }
  
  

}));

const NewProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTypes());
  }, [dispatch]);
   
   const history = useHistory();
  
  const [input, setInput] = useState({
    name:"",
    identifier:2,
    price:"",
    image:'',
    description:"",
    stock:200,
    category:"",
    type:"",
  });

  const saveProduct = () => {
    dispatch(createProduct(input));
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    saveProduct();
    history.push("/AdminPanel");
  };



  return (
    <div className={styles.form_content}>
      <Typography variant="h4" color ="textPrimary">Create your own product</Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label className={classes.label}>Name</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            required
            fullWidth
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
          />
        </div>
        <div className="filedrop">
          <label className={classes.label}> Agregue una imagen</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="url"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div>

        <div className={styles.form_group}>
          <label className={classes.label}>Price</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            name="price"
            onChange={handleInputChange}
            value={input.price}
          />
        </div>

        <div className={styles.form_group}>
          <label className={classes.label}>Description</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            name="description"
            rows="5"
            onChange={handleInputChange}
            value={input.description}
          />
        </div>

        <Typography className="filterName"></Typography>
        <select
          className={classes.select_types}
          onChange={handleInputChange}
          name="category"
        >
          <option>Categories</option>
          {category &&
            category.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
         
        <Typography className="filterName"></Typography>

        <select className={classes.select_types} onChange={handleInputChange} name='type'>
          <option>Types</option>
          {types &&
            types.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
       
        <Button type="submit" className={classes.submit}
      
           >
          Create
        </Button>
      </form>
    </div>
  );
};

export default NewProduct;
