import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { deleteCategory, getCategories } from '../../Redux/actions/actions';
import './AdminCategories.css';
import { Link } from 'react-router-dom';
import CardCategories from './CardCategories';
import Grid from "@material-ui/core/Grid";


const AdminCategories = () => {
const dispatch = useDispatch();
const categories = useSelector((state) => state.allCategories)

useEffect(() => {    
    dispatch(getCategories());
  }, [dispatch]);

    function handleDeleteCategory(id){
        dispatch(deleteCategory(id))
        window.location.reload()
        
    }


    return (
        <div className='list'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='list'>Panel de Categorias</h1>
            <Link to='/adminPanel'> <button >Admin Panel</button></Link>
            <Link to='/clients'> <button >Clients Panel</button></Link>
            <Link to='/newCategory'> <button >New Category</button></Link>

            <div className='list'>                        
            {
                categories.map((e) =>
                <Grid item key={e._id} xs={12} >
                  <CardCategories id={e._id} name={e.name} image={e.image} types={e.types?.map((j) =><ul>{j.name}</ul> )}  
                      
                    deleteCategory={handleDeleteCategory} />
                </Grid>
                )
            }               
            </div>
        </div>
    )
}

export default AdminCategories
