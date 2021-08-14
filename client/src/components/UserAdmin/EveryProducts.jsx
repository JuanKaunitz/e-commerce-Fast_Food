import React/* , {useState, useEffect}  */ from 'react';
import { useSelector, useDispatch} from 'react-redux';
//import { Link } from 'react-router-dom';
import { searchQueryProducts } from "../../Redux/actions/actions";
import './EveryProducts.css'

export default function EveryProducts() {    
    const getAll = useSelector((state) => state.allProducts);
    const producto = useSelector((state) => state.searchProducts)
    const dispatch = useDispatch();
    /* const [ name, setName ] = useState('') */


    /* useEffect(() => {
       searchProduct(name);
    })
 */
    function searchProduct(name) {
        dispatch(searchQueryProducts(name));        
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
            <h1>Product List</h1>           
                    
            <div className='list'>  
            
                       
            {
                producto.length !== 0? producto.map((e) => 
                <div >
                    <ol>Name: {e.name} <br></br>  Price: {e.price}<br></br> image: {e.image}<br></br> type: {e.type}<br></br> identifier: {e.identifier}<br></br>Stock:  {e.stock}<br></br>Description: {e.description}<br></br>Available: {e.available}  
                    </ol>                   
                </div>
                ) 
                :
                getAll.map((e) =>
                <div>
                    <button onClick={() =>[ searchProduct(e.name)]}> {e.name}</button>
                        <ol>Price: {e.price}<br></br> image: {e.image}<br></br> type: {e.type}<br></br> identifier: {e.identifier}<br></br>Stock:  {e.stock}<br></br>Description: {e.description}<br></br>Available: {e.available} </ol>
                </div>
                )
            }               
            </div>
        </div>              
    )     
}
