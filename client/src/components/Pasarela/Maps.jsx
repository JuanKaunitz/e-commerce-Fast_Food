import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mercadopago } from "../../Redux/actions/actions";
import Checkout from "./checkoutMercado";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffff",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
    backgroundColor: "#ffff",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input_text: {
    backgroundColor: "#ffff",
  },
  label: {
    color: "black",
    fontSize: "18px",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "40px",
    maxWidth: "600px",
    backgroundColor: "#ffff",
    color: "rgb(246, 245, 245)",
    borderRadius: "10px",
    transform: "translateY(20%)",
  },
  typography: {
    margin: 30,
  },
  color: {
    backgroundColor: "orange",
    color: "withe",
  },
  btn: {
    backgroundColor: "orange",
    color: "white",
  },
}));

function Maps() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const idMercadopago = useSelector((state) => state.idMercadopago);
  const client = useSelector((state) => state.client);
  //console.log("id mercado", idMercadopago)

  function pagoMercadopago() {
    const idOrder = localStorage.getItem("idOrderUser");
    const nameEmail = {
      name: client.name,
      email: client.email,
    };
    dispatch(mercadopago(idOrder, nameEmail));
  }

  return (
    <div className={classes.content}>
      <Typography
        variant="h4"
        color="textPrimary"
        className={classes.typography}
      >
        Find your store
      </Typography>
      <iframe
        width="600"
        height="400"
        id="gmap_canvas"
        src="https://www.google.com/maps/d/u/0/embed?mid=16_j0vspj5EWQFFVYZ6LwSjnMRoJmjAfw"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="hola"
      ></iframe>

      <br></br>
      <br></br>
      {idMercadopago.id ? (
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="contained primary button group"
          component="div"
          type="submit"
          margin="theme.spacing(3, 0, 2)"
          className={classes.color}
        >
          <Checkout data={idMercadopago} />
        </ButtonGroup>
      ) : (
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="contained primary button group"
          component="div"
          type="submit"
          margin="theme.spacing(3, 0, 2)"
          className={classes.color}
        >
          <Button className={classes.btn} onClick={() => pagoMercadopago()}>
            Next
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}
export default Maps;
