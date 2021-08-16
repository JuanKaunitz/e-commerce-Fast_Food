import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdateCategory} from "../../Redux/actions/actions"
import useStyles from "./styles"; 
import { Link } from "react-router-dom";

export default function AdminCategoryDetail(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const [input, setInput] = useState({
    name: "",
    types: [],    
    image: "",     
  });
  
  /* const getCategory = () => {
    dispatch(getCategoryById(id));
    // setInput(productEdit);
  }; */

  /* useEffect(() => {
    getCategory();
  }, []); */
  
  const categoryEdit = useSelector((state) => state.editCategory);
  
  const handleSubmit = async (e) => {
       e.preventDefault();
       dispatch(getUpdateCategory(id, input))      
       props.history.push("/adminCategories");      
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.form_content}>
      <h1>Editar producto</h1>

      <Link to='/adminPanel'> <button >Admin Panel</button></Link>
      <Link to='/clients'> <button >Clients Panel</button></Link>
      <Link to='/adminCategories'> <button >Categories Panel</button></Link>
      {input.length !== 0 ? (
        <form onSubmit={ handleSubmit }>
          <div className={classes.form_group}>
            <label>Name:</label>
            <input
              className={classes.input_items}
              type="text"
              name="name"
              onChange={handleInputChange}
              defaultValue={categoryEdit.name}
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
              defaultValue={categoryEdit.types}
              required
            />
          </div>

          <div className={classes.form_group}>
            <label>Image:</label>
            <img
              src={categoryEdit.image}
              alt={input.name}
              name="image"
              style={{width:200}}
              defaultValue={input.image}
            />
          </div>

         
          <button className={classes.btn_save} type="submit">
            Save
          </button>
         
        </form>
      ) : 
        <p>cargando</p>
      }
    </div>
  );
};

