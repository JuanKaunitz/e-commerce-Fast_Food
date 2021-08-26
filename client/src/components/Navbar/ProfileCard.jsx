import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {sumaPrecioTotal} from '../cart/utilsCarts'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection:"column",
    maxWidth:"600px",
    justifyContent:"center",
    marginBottom:"40px"
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
  status,
  order,
}) {
  const classes = useStyles();
  const total = sumaPrecioTotal(order)
  return (
    <div>
    <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            OP: {id}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Status: {status}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Total Price: ${total}
          </Typography>
        </CardContent>
        <div>
        {
          order.map(e => (
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={e.image}
                title="Live from space album cover"
              />
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {e.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {e.id}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {e.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {e.count}
                </Typography>
              </CardContent>
            <div className={classes.controls}>
              <Typography variant="subtitle1" color="textSecondary">
                <span>${e.price}</span>
              </Typography>
            </div>        
            
          </Card>
          ))
        }  
        </div>     
    </Card>
    </div>
  );
}
