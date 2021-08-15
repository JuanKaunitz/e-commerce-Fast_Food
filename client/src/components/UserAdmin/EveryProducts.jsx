import React/* , {useState, useEffect}  */ from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { deleteProduct } from "../../Redux/actions/actions";
import CardAdmin from './CardAdmin';
import Grid from "@material-ui/core/Grid";
//import './EveryProducts.css'

export default function EveryProducts() {    
    const dispatch = useDispatch(); 
    const getAll = useSelector((state) => state.allProducts);
    

    function handleDeleteProduct(id){
        dispatch(deleteProduct(id))
    }

    return (
        <div className='list'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>           
            <h1>Products List</h1>           
                    
            <div className='list'>  
            
                       
            {
                getAll.map((e) =>
                <Grid item key={e._id} xs={12} >
                  <CardAdmin  name={e.name} id={e._id} image={e.image} price={e.price}
                    avalilable= {e.available} stock={e.stock} type={e.type}
                    description={e.description} identifier={e.identifier}   
                    deleteCart={handleDeleteProduct} />
                </Grid>
                )
            }               
            </div>
        </div>              
    )     
}