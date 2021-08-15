import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { deleteCategory } from '../../Redux/actions/actions';
import './AdminCategories.css';
import { Link } from 'react-router-dom';
import CardAdmin from './CardAdmin';
import Grid from "@material-ui/core/Grid";


const AdminCategories = () => {
const dispatch = useDispatch();
const categories = useSelector((state) => state.allCategories)
    function handleDeleteCategory(id){
        dispatch(deleteCategory(id))
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
            <Link to='/newProduct'> <button >New Product</button></Link>

            <div className='list'>                        
            {
                categories.map((e) =>
                <Grid item key={e._id} xs={12} >
                  <CardAdmin  name={e.name} image={e.image} types={e.types.map((e) =><ul>e.name</ul> )}  
                      
                    deleteCategory={handleDeleteCategory} />
                </Grid>
                )
            }               
            </div>
        </div>
    )
}

export default AdminCategories
