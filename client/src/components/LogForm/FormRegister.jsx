import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser, createGoogleUser } from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
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
  if(input.password !== input.password2) {
    errors.password2 = "The password doesn´t match!";
  }
  return errors;
}

const FormRegister = () => {
  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  
  

  
  const [errors, setErrors] = useState({});
  
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  
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
    window.location.replace("http://localhost:3000/register");
  };
  const responseGoogle = (response) => {
    console.log(response)
  };

  const logout = () => {
    alert("usted esta saliendo de su cuenta");
    console.clear();
    // sessionStorage.removeItem(clave)
    sessionStorage.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    // var data = sessionStorage.getItem('AJDLj6JUa8yxXrhHdWRHIV0S13cAbZ9_k9rC5aklrvRlpYPP7jPp6wEIETYsmTOID-ezNa3jSL7DbVDAYbBUtgF_saU50JRDwQ');
    // console.log('DATA: ', data);
    // var cache = sessionStorage.getItem('cachedValue')
    // console.log(cache)
    // var sesion = sessionStorage.setItem('key','value')
    // console.log('SESSION: ', sesion);
    dispatch(createGoogleUser(res.profileObj));
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <text className={styles.texto}>Formulario de Registro</text>
        <div>
        <br></br>
          <label className={styles.label}>Name:</label>
          <input
            className={styles.input1}
            type="name"
            name="name"
            class={styles.field}
            onChange={handleInputChange}
            value={input.name}
            required
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </div>
        <div>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input1}
            type="email"
            class={styles.field1}
            name="email"
            onChange={handleInputChange}
            value={input.email}
            required
          />
          {errors.username && <p className="danger">{errors.email}</p>}
        </div>
        <div>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input1}
            type="password"
            name="password"
            class={styles.field2}
            onChange={handleInputChange}
            value={input.password}
            required
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>

        <div>
          <label className={styles.label}>Repeat password:</label>
          <input
            className={styles.input1}
            type="password"
            name="password2"
            class={styles.field2}
            onChange={handleInputChange}
            value={input.password2}
          />
          {errors.password2 && <p className="danger">{errors.password2}</p>}
        </div>

        <div className="btn submit">
          <button className={styles.btnregister} type="submit" src="/">
            Submit
          </button>

          {showloginButton ? (
            <GoogleLogin
              clientId="371009516574-6nj2o8vbfdtom1lafa91d55scq54fm9u.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          ) : null}
          {showlogoutButton ? (
            <GoogleLogout
              clientId="371009516574-6nj2o8vbfdtom1lafa91d55scq54fm9u.apps.googleusercontent.com"
              buttonText="Logout"
              onFailure={responseGoogle}
              onLogoutSuccess={logout}
            />
          ) : null}
        </div>
        <br></br>
        <span className="form-input-login">
          Already have an account? Login <Link to="/register">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormRegister;
