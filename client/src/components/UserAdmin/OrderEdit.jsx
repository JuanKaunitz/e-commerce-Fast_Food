import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './OrderEdit.css'
import { updateOrder } from '../../Redux/actions/actions'
import { Link } from 'react-router-dom'



const OrderEdit = (props) => {
    console.log('ORDER EDIT PROFILE')
    const dispatch = useDispatch();
    const editOrders = useSelector((state) => state.allOrders);
    console.log('EDIT CLIENTS: ', editOrders);

    const id = props.match.params.id;

    const filterOrders = editOrders.filter(c => c._id === id);
    console.log('FILTER CLIENTS: ', filterOrders); //Esto nos devuelve el seleccionado.

    const client = filterOrders[0];
    console.log('FILTER ORDERS[0]', client);
     
/* 
    const roleHandler = (e) => {
      client.role = e.target.value;
    } */

   /*  const resetPassword = () => {
        // alert('Are you sure?')
        client.password = '.'
        dispatch(updateClient(id, client))
    }
 */


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='list'>Client Edit</h1>
            <Link to='/adminPanel'> <button >Admin Panel</button></Link>
            <Link to='/clients'> <button >Clients Panel</button></Link>
            <Link to='/adminCategories'> <button >Categories Panel</button></Link>
            <Link to='/ordersPanel'> <button >Orders Panel</button></Link>
            <br></br>
            <br></br>
            <h1>Aca va el form de edicion de Ordenes para cambiar sus status</h1>
            {/* <form>
                <label>Role</label>
                <select onClick={(e) => roleHandler(e)}>
                <option name = "CLIENT" value="CLIENT">Client</option>
                <option name = "ADMIN" value="ADMIN">Admin</option>
                </select>

            </form>
             <Link to="/adminPanel"><button onClick={() => dispatch(updateClient(id, client))}>SAVE</button></Link>   
            <Link to="/adminPanel"><button onClick={() => resetPassword()}>Reset your password</button></Link> */}
        </div>
    )
}

export default OrderEdit
