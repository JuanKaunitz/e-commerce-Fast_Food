import React, { useState, useEffect } from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTypes } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FileDrop from "../Form/FileDrop";

const NewProduct = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    identifier: "",
    price: "",
    description: "",
    stock: true,
    categories: "",
    type: ""
  });
  const saveProduct = () => {
    dispatch(createProduct(input));
    console.log(input)
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
          <button>Admin Panel</button>
        </Link>
        <Link to="/adminCategories">
          {" "}
          <button>Categories Panel</button>
        </Link>
        <Link to="/clients">
          {" "}
          <button>Clients Panel</button>
        </Link>
      </div>

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
        <div className="filedrop">
          <FileDrop 
          onChange = {handleInputChange}
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
        <select className="boton" name="categories" onChange={handleInputCategory}>
          <option>Categories</option>
          {category &&
            category.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>

        <div className="filterName">Types</div>
        <select className="boton" name="type" onChange={handleInputChange}>
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
