import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const InputText = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} ms={6}>
      <Controller
        control={control}
        render = {({ field})=> (
            <TextField
                fullWidth
                defaultValue=""
                name={name}
                label={label}
                required={required}
            />
        )}
       
      />
    </Grid>
  );
};

export default InputText;
