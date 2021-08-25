import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser, createGoogleUser } from "../../Redux/actions/actions";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from "react-router";




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
  } else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password)) {
    errors.password = "Password requires 8-16 digits, at least one digit and one upper case."
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





export default function SignInSide() {
  const dispatch = useDispatch();
  const history = useHistory();

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
    
    const MySwal = withReactContent(Swal)

  const showAlert =  () => {
    MySwal.fire({
      didOpen: () => {
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire({
        title: 'Successful registration',
        button: 'Aceptar',
        icon: 'success'
      })
    })
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(newUser(input));
    showAlert();
    setInput({
      name: "",
      email: "",
      password: "",
    });
    history.push("/login")

  };
  const responseGoogle = (response) => {
    console.log(response)
  };

  const logout = () => {
    alert("Usted esta saliendo de su cuenta");
    console.clear();
    sessionStorage.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    dispatch(createGoogleUser(res.profileObj));
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paper: {
      margin: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 1),
    },
    link: {
      cursor: 'pointer',
    },
    danger: {
      color: 'rgb(231, 14, 14)',
      fontWeight: 'bold'
    }

  
  }));
  

  const classes = useStyles();

  return (
     
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5}  elevation={6} square>
        <div className={classes.paper}>
          <br>
          </br>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => handleInputChange(e)}
            />
            {errors.name && <p className={classes.danger}>{errors.name}</p>}
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleInputChange(e)}
            />
            {errors.email && <p className={classes.danger}>{errors.email}</p>}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.password && <p className={classes.danger}>{errors.password}</p>}

           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Repeat Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleInputChange(e)}

            />
            {/* {errors.password2 && <p className="danger">{errors.password2}</p>} */}

          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
           <div>
           
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
         <br></br>
         <br></br>
         <span className={classes.link}>
           Already have an account? Login <Link to="/login">here</Link>
         </span>
          </form>   
        </div>
      </Grid>
    </Grid>
  );
}