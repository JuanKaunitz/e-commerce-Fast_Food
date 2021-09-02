import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById , getUpdate} from "../../Redux/actions/actions"
import useStyles from "./styles"; 

export default function AdminProductDetail(props) {
  const types = useSelector((state) => state.types);
  const classes = useStyles();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const [input, setInput] = useState({
    name: "",
    type: "",
    identifier: "",
    image: "",
    price: "",
    description: "",
    stock: true,
    categories: "",
  });
  
  const getItemProduct = () => {
    dispatch(getProductById(id));
    // setInput(productEdit);
  };

  useEffect(() => {
    getItemProduct();
    // eslint-disable-next-line
  }, []);
  
  const productEdit = useSelector((state) => state.editProduct);
  
  
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getUpdate(id, input))      
    props.history.push("/adminPanel");      
};

  return (
   <div className={classes.form_content}>
      <h1>Edit product</h1>

    
      {input.length !== 0 ? (
        <form onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <label>Name:</label>
            <input
              className={classes.input_items}
              type="text"
              name="name"
              onChange={handleInputChange}
              defaultValue={productEdit.name}
              required
              value={input.name}
            />
          </div>

          <div className={classes.form_group}>
            <label>Type:</label>
         
             <select
          className="boton"
          defaultValue={productEdit.type}
          onChange={handleInputChange}
          name="type"
        >
          <option>--Types--</option>
          {types &&
            types.map((t, i) => (
              <option key={i} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
          </div>

          <div className={classes.form_group}>
            <label>Image:</label>
            <img
              src={productEdit.image}
              alt={input.name}
              name="image"
              style={{width:200}}
              defaultValue={input.image}
            />
          </div>

          <div className={classes.form_group}>
            <label>Price:</label>
            <input
              className={classes.input_items}
              type="text"
              name="price"
              onChange={handleInputChange}
              defaultValue={productEdit.price}
              required
            />
          </div>

          <div className={classes.form_group}>
            <label>Description:</label>
            <textarea
              className={classes.input_items}
              type="text"
              name="description"
              rows="5"
              onChange={handleInputChange}
              defaultValue={productEdit.description}
              required
            />
          </div>

         
          <button className={classes.btn_save} type="submit">
            Actualizar
          </button>
        
        </form>
      ) : 
        <p>Cargando...</p>
      }
    </div>
  );
};

