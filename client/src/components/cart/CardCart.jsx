import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "70%",
    backgroundSize: 'contain'
  },
  btn_root: {
    border: "1px solid",
    height: 40,
    backgroundColor: "gray",
    width: 40,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    height: 80,
    backgroundSize: 'contain'
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  btn_add: {
    display: "flex",
    alignItems: "center",
    
    height: 40,
    width: 110,
    borderRadius: 0,
    cursor: "pointer",
  },
  view_price: {
    display: "flex",
    alignItems: "center",
  },
  color: {
    backgroundColor:"orange",
    color: "white",
    backgroundSize: 'contain'
  },
}));

export default function CardCart({
  id,
  name,
  image,
  price,
  description,
  count,
  deleteCart,
  resProduct,
  addProduct,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
      </div>
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.controls}>
        <div className={classes.view_price}>
          <Typography variant="subtitle1" color="textSecondary">
            <span>${price}</span>
          </Typography>
          
        </div>

        <div className={classes.btn_add}>
          <ButtonGroup
              size="small"
              variant="contained"
              aria-label="contained primary button group"
              component='div'
            >
          {
            count <=1?
            <Button onClick={() => deleteCart(id)} className={classes.color}>            
              <DeleteIcon />            
            </Button>
              
          :  <Button onClick={() => resProduct(id)} className={classes.color}>
                -
             </Button>
          }
          </ButtonGroup>
          <div>
            <h3>{count}</h3>
          </div>
          <ButtonGroup
              size="small"
              variant="contained"
              aria-label="contained primary button group"
              component='div'
            >
              <Button onClick={() => addProduct(id)} className={classes.color}>
                +
              </Button>
            </ButtonGroup>
        </div>
      </div>
      <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
          <span>Subtotal $ {price * count}</span>
        </Typography>
      </div>
      <div >
          <ButtonGroup
              size="small"
              variant="contained"
              aria-label="contained primary button group"
              component='div'
            >
            <Button onClick={() => deleteCart(id)} className={classes.color}>            
              <DeleteIcon />            
            </Button>
            </ButtonGroup>
          </div>
    </Card>
  );
}
