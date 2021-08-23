import React, { useState, useEffect } from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import FileDrop from "./FileDrop";

const Form = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    type: "",
    image: "",
    identifier: "",
    price: "",
    description: "",
    stock: true,
    categories: {},
  });

  const saveProduct = () => {
    dispatch(createProduct(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    saveProduct();
    //props.history.push("/AdminPanel");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
console.log(input)
  const handleInputCategory = function (e) {
    var filtradoCategory = category.filter((el) => el.name === e.target.value);
    dispatch(getTypes(filtradoCategory[0].types));
  };

  return (
    <div className={styles.form_content}>
      <h1>Create your own product</h1>
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
          <label>Type:</label>
          <input
            className={styles.input_items}
            type="text"
            name="type"
            onChange={handleInputChange}
            value={input.type}
            required
          />
        </div>
{/* 
        <div className="img">
          <label>Insert an URL for your image</label>
          <input
            type="url"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div> */}

        <div className="filedrop">
        <label>Insert an URL for your drop</label>
          <FileDrop
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div>

        <div className={styles.form_group}>
          <label>Price:</label>
          <input
            className={styles.input_items}
            type="text"
            name="price"
            onChange={handleInputChange}
            value={input.price}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label>Description:</label>
          <textarea
            className={styles.input_items}
            type="text"
            name="description"
            rows="5"
            onChange={handleInputChange}
            value={input.description}
            required
          />
        </div>

        <div className="filterName">Category</div>
        <select className="boton" onChange={(e) => handleInputCategory(e)}>
          <option>Categories</option>
          {category &&
            category.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>

        <div className="filterName">Types</div>
        <select className="boton">
          <option>TypesCategory</option>
          {types &&
            types.map((t, i) => (
              <option key={i} value={t.name}>
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

export default Form;
