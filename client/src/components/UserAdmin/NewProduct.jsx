import React, { useState} from "react";
import { createProduct } from "../../Redux/actions/actions";
import { useDispatch} from "react-redux";
import useStyles2 from './styles2';

const NewProduct = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles2();

  const [input, setInput] = useState({
    name: "",
    type: "",
    identifier: "",
    image: "",
    price: "",
    description: "",
    stock: true,
    categories: [],
  });
  const saveProduct = () => {
    dispatch(createProduct(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    saveProduct();
    props.history.push("/");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.form_content}>
      <h1>Create your own product</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_group}>
       
          <label>Name:</label>
          <input
          className={classes.input_items}
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
            required
          />
        </div>

        <div className={classes.form_group}>
          <label>Type:</label>
          <input
          className={classes.input_items}
            type="text"
            name="type"
            onChange={handleInputChange}
            value={input.type}
            required
          />
        </div>

        {/* <div className={classes.form_group}>
          <label>Identifier:</label>
          <input
          className={classes.input_items}
            type="text"
            name="identifier"
            onChange={handleInputChange}
            value={input.identifier}
            required
          />
        </div> */}

        <div className={classes.form_group}>
          <label>Image:</label>
          <input
          className={classes.input_items}
            type="text"
            name="image"
            onChange={handleInputChange}
            value={input.image}
            required
          />
        </div>

        <div className={classes.form_group}>
          <label>Price:</label>
          <input
          className={classes.input_items}
            type="text"
            name="price"
            onChange={handleInputChange}
            value={input.price}
            required
          />
        </div>

        <div className={classes.form_group}>
          <label>Description:</label>
          <textarea
          className={classes.input_items}
            type="text"
            name="description"
            rows='5'
            onChange={handleInputChange}
            value={input.description}
            required
          />
        </div>

        {/* <div className={classes.form_group}>
          <label>Stock:</label>
          <input
          className={classes.input_items}
            type="text"
            name="stock"
            onChange={handleInputChange}
            value={input.stock}
            required
          />
        </div> */}

        {/* <div>
              <label>categories:</label>
              <br></br>
              <input  type="text" name="categories" onChange={handleInputChange} value={input.categories} required />
              <option value='null'>null</option>
              <select>
              {input.categories && input.categories.map(c => (
                <option value = {c.id} name = {c.name}>{c.name}</option>
              ))}
              </select>

              </div>    */}
        <button className={classes.btn_save} type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
