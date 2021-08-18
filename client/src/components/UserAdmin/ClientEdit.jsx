import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './ClientEdit.css'
import { updateClient } from '../../Redux/actions/actions'
import { Link } from 'react-router-dom'



const ClientEdit = (props) => {
    console.log('CLIENT EDIT PROFILE')
    const dispatch = useDispatch();
    const editClients = useSelector((state) => state.clients);
    console.log('EDIT CLIENTS: ', editClients);

    const id = props.match.params.id;

    const filterClients = editClients.filter(c => c._id === id);
    console.log('FILTER CLIENTS: ', filterClients); //Esto nos devuelve el seleccionado.

    const client = filterClients[0];
    console.log('FILTER CLIENTS[0]', client);
     

    const roleHandler = (e) => {
      client.role = e.target.value;
    }

    const resetPassword = () => {
        // alert('Are you sure?')
        client.password = '.'
        dispatch(updateClient(id, client))
    }



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
            <br></br>
            <br></br>
            <form>
                <label>Role</label>
                <select onClick={(e) => roleHandler(e)}>
                <option name = "CLIENT" value="CLIENT">Client</option>
                <option name = "ADMIN" value="ADMIN">Admin</option>
                </select>

            </form>
             <Link to="/adminPanel"><button onClick={() => dispatch(updateClient(id, client))}>SAVE</button></Link>   
            <Link to="/adminPanel"><button onClick={() => resetPassword()}>Reset your password</button></Link>
        </div>
    )
}

export default ClientEdit
