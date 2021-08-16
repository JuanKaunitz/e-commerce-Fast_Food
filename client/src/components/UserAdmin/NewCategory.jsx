import React, { useState, useEffect } from "react";
import { createCategory } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

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
  const saveCategory = () => {
      console.log('INPUT: ', input)
    dispatch(createCategory(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  /* const handleTypeChange = function (e) {
    setInput({
      ...input,
      types:[ ...input.types, e.target.value],
    });
  };   */

  return (
    <div className={styles.form_content}>
    <div>
      <Link to='/adminPanel'> <button >Admin Panel</button></Link>
      <Link to='/adminCategories'> <button >Categories Panel</button></Link>
      <Link to='/clients'> <button >Clients Panel</button></Link>
    </div>

      <h1>Create a new category</h1>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>Name:</label>
          <input
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
          <input
            className={styles.input_items}
            type="text"
            name="image"
            onChange={handleInputChange}
            value={input.image}
            required
          />
        </div>        

        <div className={styles.form_group}>
          <label>Types:</label>
          <input
            className={styles.input_items}
            type="text"
            name="types"
            rows="5"
            onChange={handleInputChange}
            value={input.types.name}
            required
          />
        </div> 

        <button className={styles.btn_save} type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewCategory;
