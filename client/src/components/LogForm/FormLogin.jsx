import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import styles1 from "./styles1.module.css";
import {sumaCantidadTotal, sumaPrecioTotal, mergeCart}  from '../cart/utilsCarts.js';
import {authUser, getUserById} from "../../Redux/actions/actions.js";
import { 
  updateCart,
  totalProductosCarrito,
  orderRedux, 
  orderFinal,
  updateOrderFinal,
} from '../../Redux/actions/actions';


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
  /* const client = useSelector(state => state.client);
  const orderUser = useSelector(state => state.orderUser); */
 
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


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("INPUT",input);
    dispatch(authUser(input));
    setInput({
      email: "",
      password: "",
    });
    
  };


  return (
    <div>
      <form className={styles1.form} onSubmit={handleSubmit}>
        <text className={styles1.texto}>Formulario de Loggin</text>
        <div>
          <label className={styles1.label}>Email:</label>
          <input
            className={styles1.input1}
            type="email"
            name="email"
            // className={styles1.field}
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

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authUser } from "../../Redux/actions/actions";
// // import styles1 from "./styles1.module.css";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { Input } from "@material-ui/core";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export function validate(input) {
//     let errors = {};
//     if (!input.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(input.username)) {
//       errors.email = "Email is invalid";
//     }
//     if (!input.password) {
//       errors.password = "Password is required";
//     } else if (!/(?=.*[0-9])/.test(input.password)) {
//       errors.password = "Password is invalid";
//     }
  
//     return errors;
//   }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(10),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Formaterial() {
//   const dispatch = useDispatch();

//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

  
//   const handleInputChange = function (e) {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });

//     setErrors(
//       validate({
//         ...input,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(input);
//     dispatch(authUser(input));
//     setInput({
//       email: "",
//       password: "",
//     });
//   };


  

//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//         <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate onSubmit={handleSubmit}>

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             onChange={(e) => handleInputChange(e)}
            
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             onChange={(e) => handleInputChange(e)}

//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// }