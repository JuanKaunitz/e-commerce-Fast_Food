import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getCategories } from "../../Redux/actions/actions";
import { Link } from 'react-router-dom';
//import Form from '../Form/Form';
//import UpdateProd from './UpdateProd';
import './AdminPanel.css';
//import Drawer2 from './Drawer';
import EveryProducts from './EveryProducts';
//import DeleteProducts from './DeleteProducts';

export default function AdminPanel() {
    const dispatch = useDispatch(); 
    //const [reset, setReset] = useState([])
    //const categorias = useSelector((state) => state.allCategories)
    //const categorias = useSelector((state) => state.getAllProducts)

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCategories());
      }, [dispatch]);

    /* function goBack() {
        dispatch(clearSearch(reset));       
    }   */

    /* function edit(value){
      <NavLink to={value}>
      </NavLink>
    } */
    
    return (
        <div className='list'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1 className='list'>Welcome to the your admin panel </h1>
            <br></br>
            <br></br>            
            <Link to='/clients'> <button >Clients Panel</button></Link>
            <Link to='/adminCategories'> <button >Categories Panel</button></Link>
            <Link to='/newProduct'> <button >New Product</button></Link>
            {/* <button onclick="location.href='/newProduct'" type="button">New Product</button> */}
           {/*  <div className="select">
                {<label className="order">Drawer: </label>}
                <select onClick={(e) => edit(e.target.value)} >
                    <option value=" "> </option>
                    <option value="/newProduct">New Product</option> 
                    <option value="/admProdDetail/:id">Edit Product</option>
                    <option value="/editCategories">Categories</option>
                    <option value="/editClient">Clients </option>                    
                </select>
            </div> */}
            
            <EveryProducts/>
        </div>
    )
    
}