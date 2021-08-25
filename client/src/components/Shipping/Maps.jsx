import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


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
  }
  
}));





function Maps() {

  const classes = useStyles();
  





  return (

    <div className={classes.content}>
              <Typography variant="h4" color ="textPrimary" className={classes.typography}>Find your store</Typography>
      <iframe
										width='400'
										height='350'
										id='gmap_canvas'
                    src="https://www.google.com/maps/d/u/0/embed?mid=16_j0vspj5EWQFFVYZ6LwSjnMRoJmjAfw"
										scrolling='no'
										marginheight='0'
										marginwidth='0'
										title='hola'
									></iframe>

                  
          <br></br>
          <br></br>
          <Button 
             type= "submit"
             variant="contained" 
             color="primary"
             margin= "theme.spacing(3, 0, 2)"
             >
            Checkout with Mercado Pago
          </Button>
    </div>
  );
}
export default Maps;