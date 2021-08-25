import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    height: 80,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function ProfileCard({
  id,
  name,
  image,
  price,
  description,
  deleteCart,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
          <span>${price}</span>
        </Typography>
      </div>        
    </Card>
  );
}
