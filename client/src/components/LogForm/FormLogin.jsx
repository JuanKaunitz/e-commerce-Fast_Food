import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../../Redux/actions/actions";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
    return errors;
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  danger: {
    color: 'rgb(231, 14, 14)',
    fontWeight: 'bold'
  }
}));

export default function FormularioLogin() {
  const dispatch = useDispatch();  
  const history = useHistory();
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

  const MySwal = withReactContent(Swal)

  const showAlert =  () => {
    MySwal.fire({
      didOpen: () => {
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire({
        title: 'Welcome!',
        button: 'Aceptar',
        icon: 'success'
      })
    })
  }

  
  const handleSubmit =  (e) => {
    e.preventDefault();
    showAlert();
    console.log(input);
    dispatch(authUser(input));
    setInput({
      email: "",
      password: "",
     });
     history.push("/");
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
      <div className={classes.paper}>
         <br>
          </br>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>

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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container>
              <Grid item >
                <Link href="/resetPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
      </div>
     
    </Container>
  );
}