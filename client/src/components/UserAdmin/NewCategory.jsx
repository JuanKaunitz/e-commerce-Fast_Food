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

  const [type, setType] = useState({
    type1: '',
    type2: '',
    type3: '',
  })

  console.log("INPUT", input)
  console.log("type", type)

  const saveCategory = () => {
      console.log('INPUT: ', input)
    dispatch(createCategory(input));
  };

  function todosTypes(){
    input.types.push({name: type.type1})
    input.types.push({name: type.type2})
    input.types.push({name: type.type3})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    todosTypes()
    console.log("INPUT", input)
    //setInput(input);
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
          <label>Type1:</label>
          <input
            className={styles.input_items}
            type="text"
            name="type1"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Type2:</label>
          <input
            className={styles.input_items}
            type="text"
            name="type2"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Type3:</label>
          <input
            className={styles.input_items}
            type="text"
            name="type3"
            rows="5"
            onChange={handleTypeChange}
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
