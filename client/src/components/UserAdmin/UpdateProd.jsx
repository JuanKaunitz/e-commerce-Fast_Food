import React, { useState} from "react";
import { getUpdate } from "../../Redux/actions/actions";
import { useDispatch, useSelector} from "react-redux";
import useStyles from './UpdateProdStyles';

const Form = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  const classes = useStyles();
  //const id = props.match.params.id; 
  //const _id = useSelector((state) => state.searchProducts._id)

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
  const updateProduct = () => {
    dispatch(getUpdate( input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    updateProduct();
    //props.history.push("/AdminPanel");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.form_content}>
      <h1>Update your products</h1>
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
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default Form;
