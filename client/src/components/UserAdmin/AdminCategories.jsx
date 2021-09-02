import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, getCategories } from "../../Redux/actions/actions";
import "./AdminCategories.css";
import CardCategories from "./CardCategories";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: 1,
    // backgroundColor:'black',
    color:'orange',
    width:'80%'
   
  },
  profile:{
    display:"flex",
    alignItems:"center",
    marginLeft:"250px",
    fontSize:"35px",
    fontWeight:800
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
      
      <div className={classes.profile}>Panel de Categorias</div>
      

      <div>
        {categories.map((e) => (
        
            <CardCategories
              id={e._id}
              name={e.name}
              image={e.image}
              types={e.types?.map((j) => (
                <ul>
                  <li>
                  {j.name}
                  </li>
                </ul>
              ))}
              deleteCategory={handleDeleteCategory}
            />
          
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
