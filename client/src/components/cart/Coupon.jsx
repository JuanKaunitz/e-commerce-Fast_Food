import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {discountCoupon} from "../../Redux/actions/actions"

import swal from "sweetalert";
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(15),
      paddingTop: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: 400,
      backgroundColor: "#ffff",
      minHeight: 150,
      borderRadius: 10,
      justifyContent: 'center'
    },
  
    form: {
      width: "80%", // Fix IE 11 issue.
      marginTop: theme.spacing(0),

    
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
const Cupon = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
  // const messages = useSelector(state => state.newPassword);

  const [input,setInput]= useState("");



    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!/^([0-9])*$/.test(input)) { //a  partir de una regular exression verifica que lo cumpla el valor entre () devuelve un boolean 
          swal({
            title: "COUPON INVALID!",
            icon: "error",
            button: "Confirm",
          });
      } else {
        dispatch(discountCoupon(input))
      }
        
    }

    return (
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Enter your cupon code
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} >
       
          <TextField
            variant="outlined"
            margin="normal"
            type='text'
            fullWidth
            label="Discount coupon"
            onChange={(e)=>setInput(e.target.value)}
            name="coupon"
            value={input}
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

export default Cupon