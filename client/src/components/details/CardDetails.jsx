import React, {useEffect,useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import {getById} from '../../Redux/actions/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height:300
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function CardDetails({match}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loading = useSelector(state => state.loading);
  const detail = useSelector(state => state.getDetail.product);
  const productId = useRef(match.params.id);
  // console.log("ID ----", productId)
  
  useEffect(() => {
    dispatch(getById(productId.current));
  },[dispatch, productId]);
  
  function addCarts(){
    //dispatch(addCart(id))
    if(localStorage.getItem('order')){
      let object = JSON.parse(localStorage.getItem('order'));
     
      let order = object;
      console.log("PRODUCT", order)
      order.push({id: detail.id, name: detail.name, 
          image: detail.image, price: detail.price, description: detail.description});
      localStorage.setItem('order', JSON.stringify(order));
    }else {
      let order = [{id: detail.id, name: detail.name, 
        image: detail.image, price: detail.price, description: detail.description}];
      localStorage.setItem('order', JSON.stringify(order));
      console.log("PRODUCT2", order)
    }
  }
  //console.log("DETAIL", detail)

  return (
     loading?
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
               {detail.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {detail.description}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography variant="subtitle1" color="textSecondary">
                ${detail.price}
              </Typography>
              <IconButton >
                <FavoriteIcon/>
              </IconButton>
              <IconButton >
                <AddShoppingCartIcon color="secondary" onClick={() => addCarts()}/>
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={detail.image}
            title="Live from space album cover"
          />
        </Card>
      : <HourglassEmptyIcon fontSize="large"/>
     
      
  );
}