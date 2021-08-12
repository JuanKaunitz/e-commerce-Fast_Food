import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { authUser } from "../../Redux/actions/actions";

const FormLogin = () => {
    const dispatch = useDispatch()
  const [input, setInput] = useState("");
  const handleSumbit = (e) => {
      e.preventDefault()
      dispatch(authUser(input))
  };
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="emial"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="">conatraseña:</label>
        <input
          type="text"
          name="password"
          placeholder="contraseña"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">enviar</button>
    </form>
  );
};

export default FormLogin;
