import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import './ClientEdit.css'
import { updateClient } from '../../Redux/actions/actions'
import { Link } from 'react-router-dom'



const ClientEdit = () => {
    console.log('CLIENT EDIT PROFILE')
    const dispatch = useDispatch();
    const editClient = useSelector((state) => state.clients);


    // useEffect(() => {
    //   dispatch(u) 
    // }, [])

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
                <select>
                <option>Client</option>
                <option>Admin</option>
                </select>
            </form>
        </div>
    )
}

export default ClientEdit
