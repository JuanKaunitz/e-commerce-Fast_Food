import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mercadopago, envioData } from '../../Redux/actions/actions'
import Checkout from './checkoutMercado'
import {ButtonGroup} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffff"
      },
  
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: 1,
      backgroundColor: "#ffff"
    },
  
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    input_text: {
      backgroundColor: "#ffff",
    },
      label: {
      color: "black",
      fontSize:"18px"
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding:'60px',
        maxWidth:'400px',
        backgroundColor: "#ffff",
        color:'rgb(246, 245, 245)',
        borderRadius: '10px',
        transform: 'translateY(20%)'
    },
    typography: {
        margin: 30
    },
    btn: {
      backgroundColor: 'orange',
      color: 'white'
    }

    
  }));

const Shipping = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const idMercadopago = useSelector(state => state.idMercadopago)
  const client = useSelector(state => state.client)
  //console.log("id mercado", idMercadopago)
    
  const [input, setInput] = useState({
      address: "",
      city: "",
      province: "",
      zipCode: ""
  })


  function pagoMercadopago(){
  const idOrder = localStorage.getItem('idOrderUser');
  console.log("CLIENT MER", client)
  const nameEmail = {
    name: client.name,
    email: client.email
  }
  console.log("NAMEEMAIL", nameEmail)
  dispatch(mercadopago(idOrder, nameEmail))
  dispatch(envioData(input))
  }
  
  const handleChange = (e) => {
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
      console.log(input)            
  }
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setInput(input)
      // a quien se lo mando?
  } 
  
  
  
  return (
      <div className={classes.content}>
      <Typography variant="h4" color ="textPrimary" className={classes.typography}>Complete the fields</Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label className={classes.label}>Address</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            required
            fullWidth
            type="text"
            name="address"
            onChange={handleChange}
            value={input.address}
          />
        </div>
        <div className="filedrop">
          <label className={classes.label}> City</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            name="city"
            onChange={handleChange}
            value={input.city}
          />
        </div>

        <div>
          <label className={classes.label}>Province</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            name="province"
            onChange={handleChange}
            value={input.province}
          />
        </div>

        <div>
          <label className={classes.label}>Zip Code</label>
          <TextField
            className={classes.input_text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            name="zipCode"
            rows="5"
            onChange={handleChange}
            value={input.zipCode}
          />
        </div>

        <br></br>
        <br></br>
        {
            idMercadopago.id?
              <ButtonGroup
              size="small"
              variant="contained"
              aria-label="contained primary button group"
              component='div'
              type= "submit"                
              margin= "theme.spacing(3, 0, 2)"
              className={classes.color}
      
              >
                <Checkout  data={idMercadopago}/>
              </ButtonGroup>
            :
              <ButtonGroup
                size="small"
                variant="contained"
                aria-label="contained primary button group"
                component='div'
                type= "submit"                
                margin= "theme.spacing(3, 0, 2)"
                className={classes.color}
              >
                <Button className={classes.btn} onClick={() => pagoMercadopago()} >
                  Next
                </Button>
              </ButtonGroup>
          }
      </form>
    </div>
  );
}

export default Shipping
