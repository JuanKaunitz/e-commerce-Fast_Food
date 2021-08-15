// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authUser } from "../../Redux/actions/actions";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';



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