import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../../Redux/actions/actions';

export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.email = 'Email is invalid';
    }
      if (!input.password) {
        errors.password = 'Password is required';
      } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Password is invalid';
      }
  
    return errors;
  };

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  
const FormLogin = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    
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
        dispatch(authUser(input));
        setInput({
         email: '',
         password: ''
        });

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
       <div>
          <label>Email:</label>
          <input className={`${errors.email && 'danger'}`}
      type="email" name="email" onChange={handleInputChange} value={input.email} /> 
    {errors.username && (
      <p className="danger">{errors.email}</p>
    )}
       </div>
       <div>
        <label>Password:</label>
        <input className={`${errors.password && 'danger'}`}
           type="password" name="password" onChange={handleInputChange} value={input.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
       )}
       </div>
       <input type= "submit" value= "Submit"/>
       <div className="g-signin2" data-onsuccess="onSignIn">Iniciar Sesión</div>
     </form>
        </div>
    )
}

export default FormLogin
