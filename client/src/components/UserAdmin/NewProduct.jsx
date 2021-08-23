import React, { useState, useEffect } from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import Creatable from "react-select/creatable";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(2),
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
  select_types: {
    color: "black",
  },
}));

const NewProduct = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);
  const [roleValue, setRoleValue] = useState("");
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTypes());
  }, [dispatch]);
  const roles = [
    { label: "Ternera", value: 1 },
    { label: "veggie", value: 2 },
    { label: "Pollo", value: 3 },
  ];
  const [input, setInput] = useState({
    name: "",
    identifier: 2,
    price: "",
    description: "",
    stock: 200,
    categories: "",
    type: "",
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
    input.type = roleValue;
    e.preventDefault();
    setInput(input);
    saveProduct();
    // props.history.push("/AdminPanel");
  };

  const handleSelect = (field, value) => {
    switch (field) {
      case "roles":
        setRoleValue(value);
        break;
      default:
        break;
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "black",
      padding: 15,
      fontSize: 20,
    }),
  };

  return (
    <div className={styles.form_content}>
      <Typography variant="h4">Create your own product</Typography>

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

        <Typography className="filterName">Category</Typography>
        <select
          className="boton"
          onChange={handleInputChange}
          name="categories"
        >
          <option>Categories</option>
          {category &&
            category.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>

        <Typography className="filterName">Types</Typography>

        <Creatable
          isClearable
          isMulti
          onChange={(value) => handleSelect("roles", value)}
          options={roles}
          styles={customStyles}
          value={roleValue}
          placeholder={"Seleccione un tipo"}
        />
        <button className={styles.btn_save} type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
