import React, { useState, useEffect } from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FileDrop from "../Form/FileDrop";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 5,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input_text: {
    backgroundColor: "#ffff",
  },
}));

const NewProduct = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getCategories());
    // dispatch(getTypes())
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    identifier: "",
    price: "",
    description: "",
    stock: true,
    categories: "",
    types: "",
  });
  const saveProduct = () => {
    dispatch(createProduct(input));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    saveProduct();
    props.history.push("/AdminPanel");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputCategory = function (e) {
    input.categories = e.target.value;
    var filtradoCategory = category.filter((el) => el.name === e.target.value);
    dispatch(getTypes(filtradoCategory[0].types));
  };

  console.log("INPUT", input)

  return (
    <div className={styles.form_content}>
      <div>
        <Link to="/adminPanel">
          {" "}
          <Button>Admin Panel</Button>
        </Link>
        <Link to="/adminCategories">
          {" "}
          <Button>Categories Panel</Button>
        </Link>
        <Link to="/clients">
          {" "}
          <Button>Clients Panel</Button>
        </Link>
      </div>

      <h1>Create your own product</h1>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label>Name:</label>
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
          {/* <FileDrop onChange={handleInputChange} /> */}
          <label> Agregue una imagen:</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="url"
            name="image"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.form_group}>
          <label>Price:</label>
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
          <label>Description:</label>
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

        <div className="filterName">Category</div>
        <select
          className="boton"
          onChange={handleInputChange}
          name="categories"
        >
          <option>Categories</option>
          {category &&
            category.map((t, i) => (
              <option key={i} value={t.name} >
                {t.name}
              </option>
            ))}
        </select>

        <div className="filterName">Types</div>
        <select
          className="boton"
          onChange={(e) => handleInputCategory(e)}
          name="types"
        >
          <option>TypesCategory</option>
          {types &&
            types.map((t, i) => (
              <option key={i} value={t.name} >
                {t.name}
              </option>
            ))}
        </select>

        <button className={styles.btn_save} type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
