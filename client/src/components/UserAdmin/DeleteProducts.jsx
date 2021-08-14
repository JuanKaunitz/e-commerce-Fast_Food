import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductos } from '../../Redux/actions/actions';

const DeleteProducts =  () => { 

const dispatch = useDispatch()
const producto = useSelector((state) => state.searchProducts);
//console.log('PRODUCTO._ID: ',producto[0]._id)

function delProduct() {
    producto.map((e) => 
        dispatch(deleteProductos(e._id))
        )        
}
    return (
        <div>
            <button onClick={(e) => delProduct()}> Delete Product</button>
        </div>
    )
}

export default DeleteProducts;
