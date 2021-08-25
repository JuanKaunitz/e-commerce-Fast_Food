import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, getCategories } from "../../Redux/actions/actions";
import "./AdminCategories.css";
import { Link } from "react-router-dom";
import CardCategories from "./CardCategories";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 0,
    color:'orange',
    textAlign:'center'
  },
}));
const AdminCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategories);
  const classes = useStyles(); 
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleDeleteCategory(id) {
    dispatch(deleteCategory(id));
    window.location.reload();
  }

  return (
    <div className={classes.list}>
      
      <h1>Panel de Categorias</h1>
      <Link to="/adminPanel">
        <button>Admin Panel</button>
      </Link>
      <Link to="/clients">
        <button>Clients Panel</button>
      </Link>
      <Link to="/newCategory">
        <button>New Category</button>
      </Link>

      <div className={classes.list}>
        {categories.map((e) => (
        
            <CardCategories
              id={e._id}
              name={e.name}
              image={e.image}
              types={e.types?.map((j) => (
                <ul>{j.name}</ul>
              ))}
              deleteCategory={handleDeleteCategory}
            />
          
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
