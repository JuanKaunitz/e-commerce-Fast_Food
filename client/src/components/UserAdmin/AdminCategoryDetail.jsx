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
  const categories = useSelector((state) => state.allCategories);

  const selectedCategory = categories.filter(e => e._id === id);
  console.log('arrayFilter: ', selectedCategory);
  
  const [type, setType] = useState({
    type1: '',
    type2: '',
    type3:''
  })

  const typesCategory = () => {
    input.types.push({name: type.type1})
    input.types.push({name: type.type2})
    input.types.push({name: type.type3})
  }

  const handleSubmit = async (e) => {
       e.preventDefault();
       typesCategory();
       setInput(input);
       dispatch(getUpdateCategory(id, input))      
       props.history.push("/adminCategories");      
  };

  const handleTypeChange = function (e) {
    setType({
      ...type,
      [e.target.name] : e.target.value
    })      
   };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.form_content}>
      <h1>Edit your product</h1>

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
              defaultValue={selectedCategory[0].name}
              required
            />
          </div>
          <div className={classes.form_group}>
            <label>Image:</label>
            <input
              src={categoryEdit.image}
              alt={input.name}
              name="image"
              style={{width:200}}
              defaultValue={selectedCategory[0].image}
              onChange={handleInputChange}
            />
          </div>

          <h4>Change your types!</h4>

          <div className={classes.form_group}>
           {
             selectedCategory && selectedCategory[0].types.map((type) => (
             <div>
               <input
                 className={classes.input_items}
                 type="text"
                 name="type" 
                 onChange={handleInputChange}
                 defaultValue={type.name}
                 required
               />
               </div>
             ))
           }
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

