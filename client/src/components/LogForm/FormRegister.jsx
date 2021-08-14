import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newUser } from '../../Redux/actions/actions'
import styles from "./styles.module.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email is invalid';
    }
      if (!input.password) {
        errors.password = 'Password is required';
      } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Password is invalid';
      }
      if (!input.name) {
        errors.name = 'Name is required';
      } else if (!/^[A-Za-z]+$/.test(input.name)) {
        errors.name = 'Name must be a string!';
      }
      
      return errors;
  };

const FormRegister = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
      name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

      const [showloginButton, setShowloginButton] = useState(true);
       const [showlogoutButton, setShowlogoutButton] = useState(false);
    const handleInputChange = function(e) {
        setInput({
          ...input, 
          [e.target.name]: e.target.value  
        });
    
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
      }

      
      const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(input);
        dispatch(newUser(input));
        setInput({
         name: '',
         email: '',
         password: ''
        });

    };
    const responseGoogle = (response) => {
      console.log(response);
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
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };
  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};

    return (
        <div>
             <form className={styles.form} onSubmit={handleSubmit}>
              <text className={styles.texto}>Formulario de Registro</text>
              
             <div>
          <label className={styles.label}>Name:</label>
          <input  className={styles.input1}
      type="name" name="name" class={styles.field} onChange={handleInputChange} value={input.name} /> 
    {errors.name && (
      <p className="danger">{errors.name}</p>
    )}
       </div>          
       <div>
          <label className={styles.label}>Email:</label>
          <input  className={styles.input1}
      type="email" class={styles.field1} name="email" onChange={handleInputChange} value={input.email} /> 
    {errors.username && (
      <p className="danger">{errors.email}</p>
    )}
       </div>
       <div>
        <label className={styles.label}>Password:</label>
        <input className={styles.input1}
           type="password" name="password" class={styles.field2} onChange={handleInputChange} value={input.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
       )}
       </div>
       <button className = {styles.btnregister}type= "button"  value= "Submit" src="/"/> 
     </form><div>
     { showloginButton ?
        <GoogleLogin
          clientId="371009516574-6nj2o8vbfdtom1lafa91d55scq54fm9u.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        /> : null}
        { showlogoutButton ?
        <GoogleLogout
          clientId="371009516574-6nj2o8vbfdtom1lafa91d55scq54fm9u.apps.googleusercontent.com"
          buttonText="Logout"
          onFailure={responseGoogle}
          onLogoutSuccess={logout}
        />: null
        }
      </div>

        </div>
        
    )
}

export default FormRegister