import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../../Redux/actions/actions";
import GoogleLogin from "react-google-login";
// import { useGoogleLogin } from 'react-google-login'
// import { GoogleLogout } from "react-google-login";
// import { useGoogleLogout } from 'react-google-login'

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
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  
  

  // const { signIn, loaded } = useGoogleLogin({
  //   onSuccess,
  //   onAutoLoadFinished,
  //   clientId,
  //   cookiePolicy,
  //   loginHint,
  //   hostedDomain,
  //   autoLoad,
  //   isSignedIn,
  //   fetchBasicProfile,
  //   redirectUri,
  //   discoveryDocs,
  //   onFailure,
  //   uxMode,
  //   scope,
  //   accessType,
  //   responseType,
  //   jsSrc,
  //   onRequest,
  //   prompt
  // })


  // const { signOut, loaded } = useGoogleLogout({
  //   jsSrc,
  //   onFailure,
  //   clientId,
  //   cookiePolicy,
  //   loginHint,
  //   hostedDomain,
  //   fetchBasicProfile,
  //   discoveryDocs,
  //   uxMode,
  //   redirectUri,
  //   scope,
  //   accessType,
  //   onLogoutSuccess
  // })

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
    dispatch(authUser(input));
    setInput({
      email: "",
      password: "",
    });
  };

  const responseGoogle = (response) => {
    console.log(response);
    // history.push('/home')
    console.log(response.profileobj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className={`${errors.email && "danger"}`}
            type="email"
            name="email"
            onChange={handleInputChange}
            value={input.email}
          />
          {errors.username && <p className="danger">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            className={`${errors.password && "danger"}`}
            type="password"
            name="password"
            onChange={handleInputChange}
            value={input.password}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <input type="submit" value="Submit" />
        <br /> <br />
          
            <div className="Google-login">
          <GoogleLogin
            clientId="580821821792-1e9i4f7oh9bps02f5qoqs9b0svvur83c.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
            
          />
          </div>
          
          {/* <div className = "Google-logout">
            <GoogleLogout
              clientId="580821821792-1e9i4f7oh9bps02f5qoqs9b0svvur83c.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={responseGoogle}
              isSignedIn={true}
              onLogoutSuccess={logout}
              />
          </div>
           */}
      </form>
    </div>
  );
};

export default FormLogin;
