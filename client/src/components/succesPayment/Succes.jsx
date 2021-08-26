import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { recoveryData } from "../../Redux/actions/actions";

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

useEffect(() => {
  const token = localStorage.getItem('token');
  const client = JSON.parse(localStorage.getItem('client'));
  console.log("TOKEN", token)
  console.log("CLIENT", client)
  dispatch(recoveryData(token, client))
}, [dispatch])


  return (
    <div style={{marginTop: "80px"}}>
      <h1>Order Finished</h1>
    </div>
  );
}
