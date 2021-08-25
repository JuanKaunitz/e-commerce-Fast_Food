import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {newPassword} from "../../Redux/actions/actions"


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
const NewPassword = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
  const token = props.match.params.token;
  console.log(token)
  // const messages = useSelector(state => state.newPassword);

  const [password,setPassword]= useState();
  console.log(password)


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(newPassword(token,password))
    }

    return (
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Coloque su nueva contraseña
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} >
       
          <TextField
            variant="outlined"
            margin="normal"
            type='password'
            required
            fullWidth
            label="New Password"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            value={password}
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
    )
}

export default NewPassword