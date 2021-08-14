import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../Redux/actions/actions';
import CardAdmin from './CardAdmin';
import Grid from "@material-ui/core/Grid";

export default function GetClients() {
const dispatch = useDispatch();
const clients = useSelector((state) => state.clients) 


useEffect(()=> {
  dispatch(allUsers())
})

const handleDeleteUser= () => {
  dispatch()
}

  return (
    <div>
      {
      clients? clients.map((e) => (
        <Grid item key={e._id} xs={12} >
          <CardAdmin  name={e.name} id={e._id} email={e.email} 
            deleteUser={handleDeleteUser} />
        </Grid>))
        : 
        <h4>Canot found...</h4>
      }
    </div>
  )
}
