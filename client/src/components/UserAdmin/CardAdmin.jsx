import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:'black',
    color:'white',
    padding:'10px',
    textAlign:'center'
  },
  content: {
    flex: "1 2 auto",
  },
  cover: {
    width: 120,
    height: 120,
    backgroundSize:'contain'
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  root1:{
    color:'orange'
  },
  icon:{
    color:'black'
  }
}));

export default function CardAdmin({
  id,
  name,
  image,
  price,
  description,
  deleteCart,
}) {
  const classes = useStyles();

  return (
    <Card >
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" >
            {description}
          </Typography>
        </CardContent>
      <div className={classes.controls}>
        <Typography variant="subtitle1" >
          <span>${price}</span>
        </Typography>
      </div> 
        <IconButton   onClick={() => deleteCart(id)}>
          <DeleteIcon  className={classes.icon} />
        </IconButton>
        <Link to={`/admProdDetail/${id}`} className={classes.root1}>Editar</Link>
    </Card>
  );
}
