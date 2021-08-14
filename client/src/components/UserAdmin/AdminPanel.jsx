import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts} from "../../Redux/actions/actions";
import { NavLink } from 'react-router-dom';
//import Form from '../Form/Form';
//import UpdateProd from './UpdateProd';
import './AdminPanel.css';
import Drawer2 from './Drawer';
import EveryProducts from './EveryProducts';
//import DeleteProducts from './DeleteProducts';

export default function AdminPanel() {
    const dispatch = useDispatch(); 
    const [reset, setReset] = useState([])
    //const reset = useSelector((state) => state.searchProducts)

    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

    function goBack() {
        //dispatch(clearSearch(reset));       
    }  

    function edit(value){
      <NavLink to={value}>
      </NavLink>
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
                <select onClick={(e) => edit(e.target.value)} >
                    <option value=" "> </option>
                    <option value="/newProduct">New Product</option> 
                    <option value="/admProdDetail/:id">Edit Product</option>
                    <option value="/editCategories">Categories</option>
                    <option value="/editClient">Clients </option>                    
                </select>
            </div>
            
            <EveryProducts/>
        </div>
    )
    
}