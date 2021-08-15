import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth:'80%'
  },
  btn_root:{
    border: '1px solid',
    height: 40,
    backgroundColor: 'gray',
    width:40

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
    height:80
  },
  controls: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  btn_add:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'bisque',
    height: 40,
    width: 110,
    borderRadius:0,
    cursor:'pointer'
  },
  view_price:{
    display:'flex',
    alignItems:'center'
  }
}));

export default function CardCart({id, name, image,price,description, count,
                                  deleteCart, resProduct, addProduct}) {

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
         <h2>${price}</h2> 
        </Typography>
      <div>
      <IconButton >
        <DeleteIcon onClick={() => deleteCart(id)}/>
      </IconButton>
      </div>
       </div>
     
      <div className={classes.btn_add}>
        <div className={classes.btn_root} onClick={() => resProduct(id)} >
          <ExposureNeg1Icon  />
        </div>
        <div>
          <h3>{count}</h3>
        </div>
        <div className={classes.btn_root} onClick={() => addProduct(id)}>
          <ExposurePlus1Icon/>
        </div>
      </div>
      </div>
      <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
         <h2>Subtotal $ {price * count}</h2> 
        </Typography>
      </div>
    </Card>
  );
}