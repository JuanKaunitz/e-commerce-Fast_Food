import React from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {recoveryData} from '../../Redux/actions/actions'

export default function Succes() {
  const dispatch = useDispatch();
  localStorage.removeItem("order");
  localStorage.removeItem("idOrderUser");
  swal({
    title: "Good job!",
    text: "Successfully added!",
    icon: "success",
    button: "Confirm",
  });


  const token = localStorage.getItem('token')
  const client = localStorage.getItem('client')
  dispatch(recoveryData(token, client))


  return (
    <div>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <h1>order terminada</h1>
      
    </div>
  )
}
