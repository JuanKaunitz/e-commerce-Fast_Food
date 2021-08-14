import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";


export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "Email is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be a string!";
  }

  return errors;
}

const FormRegister = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(newUser(input));
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>

        <div className="form-inputs">
          <label className="form-label">Name:</label>
          <input
            className="form-input"            
            type="name"
            name="name"
            onChange={handleInputChange}
            value={input.name}
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={input.email}
          />
          {errors.username && <p className="danger">{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={input.password}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <button type="submit" className='form-input-btn'> Submit </button>
        <br></br>
        <span className='form-input-login'>
          Already have an account? Login <Link to='/register'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormRegister;
