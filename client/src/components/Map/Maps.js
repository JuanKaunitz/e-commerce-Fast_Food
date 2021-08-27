import React from "react";
import GoogleMaps from "simple-react-google-maps";
import { Grid } from "@material-ui/core";
function Maps() {
  return (
    <Grid container>
      <Grid item lg={12} md={6} xs={4}>
        <GoogleMaps
          apiKey={"AIzaSyBz0VNA94HI9TyuRqg_QwNEW9tVyizsS0"}
          style={{ height: "500px", width: "1500px" }}
          zoom={12}
          center={{
            lat: -34.6083,
            lng: -58.3712,
          }}
          markers={[
            { lat: -34.629016, lng: -58.365218 },
            { lat: -34.603558, lng: -58.38122 },
            { lat: -34.582297, lng: -58.409638 },
            { lat: -34.572353, lng: -58.421034 },
            { lat: -34.596175, lng: -58.442451 },
            { lat: -34.614559, lng: -58.419961 },
            { lat: -34.609127, lng: -58.389876 },
          ]}
        />
      </Grid>
    </Grid>
  );
}
export default Maps;
