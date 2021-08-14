import React from 'react'
import { useSelector/* , useDispatch */} from 'react-redux';
import './ProductDetail.css'

const ProductDetail = () => {
    const producto = useSelector((state) => state.searchProducts)
    //const dispatch = useDispatch();

    return (
        <div className='list'>
            {
            producto? producto.map((e) => 
                    <div >
                       <ol>Name: {e.name} <br></br>  Price: {e.price}<br></br> image: {e.image}<br></br> type: {e.type}<br></br> identifier: {e.identifier}<br></br>Stock:  {e.stock}<br></br>Description: {e.description}<br></br>Available: {e.available}  
                       </ol>                   
                    </div>
                ) 
            :
            <h4>Product not found</h4>
            }
        </div>
    )
}

export default ProductDetail
