import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  
  changeStatus,
  updateClient,
  getUserById,
  updateCart,
  totalProductosCarrito,
  orderRedux,
  orderFinal,
  updateOrderFinal,
} from "../../Redux/actions/actions";
import styles1 from "./styles1.module.css";

import { NavLink } from "react-router-dom";
import { authUser } from "../../Redux/actions/actions";



export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.email = "Email is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

const FormLogin = () => {
  const dispatch = useDispatch();
  const adminClient = useSelector((state) => state.client);
  const [estado, setEstado] = useState({ status: true });
  

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("INPUT", input);
    dispatch(authUser(input));

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className={styles1.form} onSubmit={handleSubmit}>
        <h2 className={styles1.texto}>Formulario de Loggin</h2>
        <div>
          <label className={styles1.label}>Email:</label>
          <input
            className={styles1.input1}
            type="email"
            name="email"
            onChange={handleInputChange}
            value={input.email}
          />
          {errors.username && <p className="danger">{errors.email}</p>}
        </div>
        <div>
          <label className={styles1.label}>Password:</label>
          <input
            className={styles1.input1}
            type="password"
            name="password"
            // className={styles1.field1}
            onChange={handleInputChange}
            value={input.password}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>

        <input className={styles1.btnregister} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormLogin;
