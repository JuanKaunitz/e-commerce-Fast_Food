import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      fontSize: 20,
    },
  },
  form_buy: {
    display: "flex",
    alignContent: "center",
    marginTop: 200,
    margin: "auto",
    backgroundColor: "aliceblue",
    maxWidth: 600,
    borderRadius: 5,
    height: 200,
    "& h2": {
      marginBottom: 20,
    },
  },
}));

const CheckoutForm = () => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (!error) {
      console.log(paymentMethod);
    }
  };
  return (
    <div className={classes.form_buy}>
      <form onSubmit={handleSubmitPayment} className={classes.root}>
        <h2>Realizar pago</h2>

        <CardElement />
        <Button type="submit" disabled={!stripe} color="secondary">
          Pay
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
