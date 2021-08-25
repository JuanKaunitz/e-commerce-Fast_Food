import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 800,
    backgroundColor: "#ffff",
    minHeight: 400,
    borderRadius: 10,
  },

  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Password = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Coloque el Email registrado
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSumit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Password;
