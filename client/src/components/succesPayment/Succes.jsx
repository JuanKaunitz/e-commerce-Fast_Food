import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { recoveryData } from "../../Redux/actions/actions";
import { useHistory } from "react-router";

export default function Succes() {
  const history = useHistory()
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
history.push('/');

  return (
    <div style={{marginTop: "100px"}}>
    </div>
  );
}
