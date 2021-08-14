import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, clearSearch } from "../../Redux/actions/actions";
import Form from '../Form/Form';
import UpdateProd from './UpdateProd';
import './AdminPanel.css';
import EveryProducts from './EveryProducts';
import DeleteProducts from './DeleteProducts';

export default function AdminPanel() {
    const dispatch = useDispatch(); 
    const [reset, setReset] = useState([])
    //const reset = useSelector((state) => state.searchProducts)

    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

    function goBack() {
        dispatch(clearSearch(reset));       
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

            <h1>Welcome to the your admin panel 'ACA VA EL NOMBRE DEL ADMINISTRADOR NAME=LOGIN_NAME'</h1>
            <br></br>
            <br></br>
            <button onClick={(e) => goBack()}>Go back</button>
            <div className="select">
                <label className="order">Drawer: </label>
                <select name="slct" id="slct" /* onChange={onOrderChange} */>
                    <option defaultValue value="Products">All your products</option>                   
                    <option value="startLowerPrice">Categories</option>
                    <option value="startHighestPrice">Types</option>
                    <option value="DESC">Clients </option>                    
                </select>
            </div>
            <Form/>
            <UpdateProd/>
            <DeleteProducts/>
            <EveryProducts/>
        </div>
    )
    
}

