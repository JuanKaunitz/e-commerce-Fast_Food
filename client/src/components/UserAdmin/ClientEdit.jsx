import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './ClientEdit.css'
import { updateClient } from '../../Redux/actions/actions'
import { Link } from 'react-router-dom'



const ClientEdit = (props) => {
    const dispatch = useDispatch();
    const editClients = useSelector((state) => state.clients);

    const id = props.match.params.id;

    const filterClients = editClients.filter(c => c._id === id);

    const client = filterClients[0];
     

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
