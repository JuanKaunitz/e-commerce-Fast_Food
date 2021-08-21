import React, { useState, useEffect } from "react";
import { createCategory } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from "@material-ui/core";

const NewCategory = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    types: [],
  });

  const [type, setType] = useState({
    type1: "",
    type2: "",
    type3: "",
  });


  const saveCategory = () => {
    console.log("INPUT: ", input);
    dispatch(createCategory(input));
  };

  const typesCategory = () => {
    input.types.push({ name: type.type1 });
    input.types.push({ name: type.type2 });
    input.types.push({ name: type.type3 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    typesCategory();
    console.log("INPUT-SUBMIT: ", input);
    setInput(input);
    saveCategory();
    props.history.push("/adminCategories");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = function (e) {
    setType({
      ...type,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.form_content}>
      <Typography variant="h4" component="h2">
        Create a new category
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>Name:</label>
          <TextField
            className={styles.input_items}
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Image:</label>
          <TextField
            className={styles.input_items}
            type="text"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div>

        <div className={styles.form_group}>
          <label>Type 1:</label>
          <TextField
            className={styles.input_items}
            type="text"
            name="type1"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Type 2:</label>
          <TextField
            className={styles.input_items}
            type="text"
            name="type2"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Type 3:</label>
          <TextField
            className={styles.input_items}
            type="text"
            name="type3"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <Button className={styles.btn_save} type="submit">
          CREATE
        </Button>
      </form>
    </div>
  );
};

export default NewCategory;
