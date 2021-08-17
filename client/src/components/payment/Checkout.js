import React from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
//components
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
//styles
import useStyles from "./styles";
import {  Link } from "@material-ui/core";
// import { useForm } from '../hooks/useForm';

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Direccion de Envio", "Detalles del Pago", "Revise su Orden"];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) return null;
    setActiveStep(activeStep - 1);
  };
  const GetStepContent = (step) =>
    activeStep === 0 ? (
      <AddressForm handleNext={handleNext} handleBack={handleBack} />
    ) : activeStep === 1 ? (
      <PaymentForm handleNext={handleNext} handleBack={handleBack} />
    ) : (
      <Review handleNext={handleNext} handleBack={handleBack} />
    );

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Realizar Pago
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias Por su Compra.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <GetStepContent />
              </React.Fragment>
            )}
          </React.Fragment>
          <Link href={"/cart"} color="secondary">
            cancelar
          </Link>
        </Paper>
      </main>
    </>
  );
}
